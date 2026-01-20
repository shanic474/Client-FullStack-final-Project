import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FlowStep from './FlowStep'

function CircularFlow() {
  const navigate = useNavigate()

  const steps = useMemo(
    () => [
      {
        id: 'details',
        title: 'Enter Your Details',
        description: 'Age, height, and weight',
        icon: '✍️',
        positionClass: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
        pathIndex: 0,
      },
      {
        id: 'needs',
        title: 'Get Your Nutrition Needs',
        description: 'Personal macros & micronutrients',
        icon: '🔍',
        positionClass: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
        pathIndex: 1,
      },
      {
        id: 'build',
        title: 'Build Your Meal',
        description: 'Add dishes to cover everything',
        icon: '👨‍🍳',
        positionClass: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
        pathIndex: 2,
      },
      {
        id: 'checkout',
        title: 'Checkout',
        description: 'Order or save your meal',
        icon: '✅',
        positionClass: 'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2',
        pathIndex: 3,
      },
    ],
    [],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [segmentProgress, setSegmentProgress] = useState(0)

  // Auto-animation loop: 7 seconds per step (28 seconds total cycle)
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % steps.length)
      setSegmentProgress(0) // Reset segment progress when moving to next step
    }, 7000)

    return () => clearInterval(interval)
  }, [isHovering, steps.length])

  // Animate one segment at a time with fade in/out
  useEffect(() => {
    if (isHovering) return

    const duration = 7000 // 7 seconds per segment
    const startTime = Date.now()

    const frame = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Fade in (0-20%), move (20-80%), fade out (80-100%)
      let opacity = 1
      if (progress < 0.2) {
        opacity = progress / 0.2 // Fade in
      } else if (progress > 0.8) {
        opacity = (1 - progress) / 0.2 // Fade out
      }

      setSegmentProgress(progress * opacity)

      if (progress < 1 && !isHovering) {
        requestAnimationFrame(frame)
      }
    }

    const animationId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(animationId)
  }, [activeIndex, isHovering])

  const activeId = steps[activeIndex]?.id
  const activePathIndex = steps[activeIndex]?.pathIndex

  // Ellipse parameters
  const ellipseRx = 45
  const ellipseRy = 30

  // Path segments for the ellipse
  const pathSegments = [
    { d: `M 5 30 A ${ellipseRx} ${ellipseRy} 0 0 1 50 5`, start: 0 },
    { d: `M 50 5 A ${ellipseRx} ${ellipseRy} 0 0 1 95 30`, start: 0.25 },
    { d: `M 95 30 A ${ellipseRx} ${ellipseRy} 0 0 1 50 55`, start: 0.5 },
    { d: `M 50 55 A ${ellipseRx} ${ellipseRy} 0 0 1 5 30`, start: 0.75 },
  ]

  const handleStartClick = () => {
    navigate('/products')
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center min-h-0">
        {/* Horizontal ellipse flow - ensure it fits */}
        <div className="relative mx-auto w-full max-w-5xl h-[28rem] sm:h-[32rem] lg:h-[36rem] flex-shrink-0">
          {/* SVG Ellipse and connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <defs>
              <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(212,175,55,0.4)" />
              </marker>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base ellipse - very subtle */}
            <ellipse
              cx="50"
              cy="30"
              rx={ellipseRx}
              ry={ellipseRy}
              fill="none"
              stroke="rgba(212,175,55,0.08)"
              strokeWidth="0.8"
              className="transition-opacity duration-1000"
            />

            {/* Static path segments - subtle */}
            {pathSegments.map((segment, idx) => (
              <path
                key={idx}
                d={segment.d}
                fill="none"
                stroke="rgba(212,175,55,0.15)"
                strokeWidth="1"
                markerEnd="url(#arrowHead)"
                className="transition-opacity duration-1000"
              />
            ))}

            {/* Animated segment - only one at a time */}
            {pathSegments.map((segment, idx) => {
              if (idx !== activePathIndex) return null

              const pathLength = 100 // Approximate path length
              const dashLength = pathLength * segmentProgress
              const dashArray = `${dashLength} ${pathLength * 2}`

              return (
                <path
                  key={`animated-${idx}`}
                  d={segment.d}
                  fill="none"
                  stroke="rgba(212,175,55,0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={dashArray}
                  filter="url(#softGlow)"
                  className="transition-opacity duration-500"
                  style={{
                    opacity: segmentProgress < 0.2 ? segmentProgress / 0.2 : segmentProgress > 0.8 ? (1 - segmentProgress) / 0.2 : 1,
                  }}
                />
              )
            })}
          </svg>

          {/* Center CTA Button - irresistible */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="flex flex-col items-center gap-2 pointer-events-auto">
              <button
                onClick={handleStartClick}
                className={[
                  'group',
                  'px-10 py-5 sm:px-14 sm:py-6 lg:px-16 lg:py-7',
                  'bg-gradient-to-br from-amber-500/15 to-amber-500/8',
                  'border-2 border-amber-500/60',
                  'text-amber-300 rounded-full',
                  'font-light text-lg sm:text-xl lg:text-2xl tracking-wide uppercase',
                  'shadow-[0_0_30px_rgba(212,175,55,0.3),0_4px_20px_rgba(0,0,0,0.3)]',
                  'hover:bg-gradient-to-br hover:from-amber-500/25 hover:to-amber-500/15',
                  'hover:border-amber-400/80',
                  'hover:shadow-[0_0_50px_rgba(212,175,55,0.5),0_8px_30px_rgba(0,0,0,0.4)]',
                  'transition-all duration-700 ease-in-out',
                  'transform hover:scale-105 hover:-translate-y-2',
                  'animate-pulse-gentle',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]',
                ].join(' ')}
              >
                <span className="flex items-center justify-center gap-3">
                  Start Here
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform duration-700 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <p className="text-sm sm:text-base text-gray-400 font-light opacity-80 mt-1">
                Personalized in under a minute
              </p>
            </div>
          </div>

          {/* Steps positioned around horizontal ellipse */}
          {steps.map((s, idx) => (
            <FlowStep
              key={s.id}
              title={s.title}
              description={s.description}
              icon={s.icon}
              positionClass={s.positionClass}
              isActive={activeId === s.id}
              onMouseEnter={() => {
                setIsHovering(true)
                setActiveIndex(idx)
              }}
              onMouseLeave={() => setIsHovering(false)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CircularFlow
