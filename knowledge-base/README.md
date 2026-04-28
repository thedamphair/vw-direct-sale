# Knowledge Base — JSON Data Files

This folder contains the dealership seed data as JSON files, intended to be uploaded
to an S3 bucket and used as an Amazon Bedrock Knowledge Base.

## Files

| File | Description |
|---|---|
| `brands.json` | The 3 car brands: Volkswagen, Audi, Seat |
| `models.json` | All 12 car models with specs and pricing |
| `products.json` | Full product catalog: cars, insurance, tire services, interior, maintenance |
| `discounts.json` | All discount codes with scope and validity |
| `financing_providers.json` | Internal and external financing partners |
| `clients.json` | Client profiles with owned vehicles embedded |
| `sales.json` | Sales history with lines and payment plans embedded |

---

## How to upload to S3

### Prerequisites
- AWS CLI installed and configured (`aws configure`)
- An existing S3 bucket (or create one below)

---

### Step 1 — Create the S3 bucket (skip if it already exists)

```bash
aws s3 mb s3://vw-dealership-knowledge-base --region eu-east-1
```

Block public access (required for Bedrock):

```bash
aws s3api put-public-access-block \
  --bucket vw-dealership-knowledge-base \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
```

---

### Step 2 — Upload all JSON files

From the repo root:

```bash
aws s3 sync knowledge-base/ s3://vw-dealership-knowledge-base/data/ \
  --exclude "*" \
  --include "*.json" \
  --exclude "README.md"
```

Or upload files individually:

```bash
aws s3 cp knowledge-base/brands.json              s3://vw-dealership-knowledge-base/data/
aws s3 cp knowledge-base/models.json              s3://vw-dealership-knowledge-base/data/
aws s3 cp knowledge-base/products.json            s3://vw-dealership-knowledge-base/data/
aws s3 cp knowledge-base/discounts.json           s3://vw-dealership-knowledge-base/data/
aws s3 cp knowledge-base/financing_providers.json s3://vw-dealership-knowledge-base/data/
aws s3 cp knowledge-base/clients.json             s3://vw-dealership-knowledge-base/data/
aws s3 cp knowledge-base/sales.json               s3://vw-dealership-knowledge-base/data/
```

---

### Step 3 — Verify the upload

```bash
aws s3 ls s3://vw-dealership-knowledge-base/data/
```

You should see all 7 JSON files listed.

---

### Step 4 — Connect to Bedrock Knowledge Base (console)

1. Go to **Amazon Bedrock → Knowledge Bases → Create**
2. Choose **S3** as the data source
3. Set the S3 URI to: `s3://vw-dealership-knowledge-base/data/`
4. Choose an embeddings model (recommended: **Amazon Titan Embeddings v2**)
5. Choose a vector store (recommended: **Amazon OpenSearch Serverless** — managed for you)
6. Click **Sync** after creation to index the documents

> The Knowledge Base will chunk and embed the JSON files so the Bedrock agent
> can answer natural language questions like "what electric SUVs do we have available?"
> or "what discounts apply to new clients?"

---

### Step 5 — Re-sync after data updates

Whenever the JSON files are updated, re-upload and trigger a sync:

```bash
aws s3 sync knowledge-base/ s3://vw-dealership-knowledge-base/data/ \
  --exclude "*" --include "*.json" --exclude "README.md"

aws bedrock-agent start-ingestion-job \
  --knowledge-base-id YOUR_KB_ID \
  --data-source-id YOUR_DS_ID
```

---

## Notes for the backend team

- `products.json` includes `inventory_status` per car unit (`available` / `sold`). Keep this updated when cars are sold.
- `clients.json` has `owned_vehicles` embedded for easy agent lookup — update when a new vehicle is associated.
- `sales.json` embeds lines and payment plan in each sale record for full context without joins.
- PII fields (email, phone, tax_id, address) are present for demo purposes. Apply appropriate S3 bucket policies and encryption in production.
