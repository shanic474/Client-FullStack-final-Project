import React from 'react'

function FlowStep({ title, description, icon, isActive, onMouseEnter, onMouseLeave, positionClass }) {
  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        'absolute',
        positionClass,
        'group',
        'w-40 h-32 sm:w-48 sm:h-36 lg:w-56 lg:h-40',
        'rounded-2xl',
        'flex flex-col items-center justify-center',
        'gap-3 sm:gap-4',
        'px-4 py-3 sm:px-5 sm:py-4',
        'transition-all duration-700 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]',
        // Idle state
        !isActive && 'opacity-60 scale-95',
        // Active state
        isActive && [
          'opacity-100 scale-105',
          'border-2 border-amber-500/60',
          'bg-gradient-to-br from-amber-500/12 via-amber-500/6 to-transparent',
          'shadow-[0_0_25px_rgba(212,175,55,0.35),0_0_50px_rgba(212,175,55,0.18)]',
          'animate-breathe',
        ],
        // Hover state
        'hover:opacity-100 hover:scale-110 hover:border-amber-500/80',
        'hover:shadow-[0_0_35px_rgba(212,175,55,0.45),0_0_70px_rgba(212,175,55,0.25)]',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-pressed={isActive}
    >
      {/* Illustrative character with friendly animation */}
      <div
        className={[
          'text-5xl sm:text-6xl lg:text-7xl',
          'transition-all duration-700 ease-in-out',
          isActive ? 'animate-float' : '',
          isActive ? 'drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{
          filter: isActive ? 'brightness(1.15) saturate(1.1)' : 'brightness(0.85) saturate(0.9)',
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {icon}
      </div>

      {/* Title - larger, more readable */}
      <div
        className={[
          'text-base sm:text-lg lg:text-xl',
          'font-light',
          'uppercase tracking-wide',
          'transition-all duration-500 ease-in-out',
          'leading-snug',
          isActive ? 'text-amber-300 font-normal' : 'text-gray-400',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </div>

      {/* Description - significantly larger, warmer color */}
      <div
        className={[
          'text-sm sm:text-base lg:text-lg',
          'font-light',
          'text-center',
          'leading-relaxed',
          'transition-all duration-500 ease-in-out',
          isActive ? 'text-gray-100 opacity-100' : 'text-gray-500 opacity-80',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {description}
      </div>

      {/* Active glow ring */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/35 animate-ping-slow pointer-events-none" />
      )}
    </button>
  )
}

export default FlowStep
