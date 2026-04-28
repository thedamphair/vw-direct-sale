interface Props {
  className?: string
  light?: boolean
}

export default function VWFSLogo({ className, light = true }: Props) {
  const textColor = light ? '#FFFFFF' : '#00454F'
  const subColor = light ? 'rgba(255,255,255,0.6)' : '#5E7A7E'

  return (
    <svg
      className={className}
      viewBox="0 0 220 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Volkswagen Financial Services"
    >
      {/* VW circle mark */}
      <circle cx="26" cy="26" r="24" stroke={textColor} strokeWidth="1.5" fill="none" />
      <path
        d="M14 14 L22 36 L26 26 L30 36 L38 14"
        stroke={textColor}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14 L24 30 L26 26 L28 30 L35 14"
        stroke={textColor}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />

      {/* VOLKSWAGEN */}
      <text x="60" y="17" fontFamily="'Barlow Condensed', sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.12em" fill={textColor} textAnchor="start">
        VOLKSWAGEN
      </text>
      {/* FINANCIAL SERVICES */}
      <text x="60" y="32" fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="12" letterSpacing="0.1em" fill={textColor} textAnchor="start">
        FINANCIAL SERVICES
      </text>
      {/* THE KEY TO MOBILITY */}
      <text x="60" y="46" fontFamily="'Barlow', sans-serif" fontWeight="400" fontSize="7.5" letterSpacing="0.15em" fill={subColor} textAnchor="start">
        THE KEY TO MOBILITY
      </text>
    </svg>
  )
}
