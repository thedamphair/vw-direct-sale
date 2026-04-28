import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a section ref.
 * Adds the 'visible' class to all .reveal children when the section enters the viewport.
 */
export function useReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    section.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}
