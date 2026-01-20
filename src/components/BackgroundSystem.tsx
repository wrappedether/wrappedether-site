'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * BackgroundSystem - Dynamic themed background with motion
 * Inspired by ethereumclassic-com but themed for WETC (Wrapped Ether)
 *
 * Visual concept:
 * - Dark base with subtle ETC green accents
 * - Flowing "wrap" lines representing the wrapping concept
 * - Network hubs and data flow lanes
 * - Hexagonal/diamond patterns (matching ETC diamond logo)
 */

type Lane = {
  top: string;
  left: string;
  len: string;
  angle: number;
  dur: number;
  delay: number;
  reverse: boolean;
};

type Hub = {
  top: string;
  left: string;
  dur: number;
  delay: number;
};

export function BackgroundSystem() {
  const reduceMotion = useReducedMotion();

  // Horizontal data lanes (wrap/unwrap flow visualization)
  const lanes: readonly Lane[] = [
    // Left side - representing incoming ETC
    { top: '15%', left: '-20%', len: '38%', angle: -4, dur: 10.5, delay: 0.0, reverse: false },
    { top: '32%', left: '-24%', len: '42%', angle: 6, dur: 13.2, delay: 1.2, reverse: false },
    { top: '48%', left: '-18%', len: '36%', angle: -8, dur: 11.8, delay: 0.6, reverse: false },
    { top: '65%', left: '-22%', len: '40%', angle: 4, dur: 14.5, delay: 2.1, reverse: false },
    { top: '78%', left: '-26%', len: '44%', angle: -3, dur: 12.4, delay: 1.5, reverse: false },

    // Right side - representing outgoing WETC (reverse direction)
    { top: '22%', left: '60%', len: '42%', angle: 5, dur: 12.8, delay: 0.8, reverse: true },
    { top: '42%', left: '56%', len: '48%', angle: -6, dur: 15.2, delay: 1.8, reverse: true },
    { top: '62%', left: '64%', len: '38%', angle: 3, dur: 13.6, delay: 2.8, reverse: true },
    { top: '82%', left: '58%', len: '44%', angle: -4, dur: 14.0, delay: 0.4, reverse: true },
  ] as const;

  // Network hubs (wrapping points)
  const hubs: readonly Hub[] = [
    { top: '20%', left: '25%', dur: 6.2, delay: 0.3 },
    { top: '35%', left: '72%', dur: 7.4, delay: 1.0 },
    { top: '55%', left: '30%', dur: 6.8, delay: 0.6 },
    { top: '70%', left: '68%', dur: 7.8, delay: 1.8 },
    { top: '45%', left: '50%', dur: 8.2, delay: 2.2 }, // Center hub - main wrap point
  ] as const;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base layer */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Atmosphere breathing - subtle ETC green glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1000px 600px at 20% 15%, rgba(58, 184, 58, 0.08), transparent 60%),
            radial-gradient(800px 500px at 80% 20%, rgba(51, 255, 153, 0.06), transparent 55%),
            radial-gradient(1100px 700px at 50% 85%, rgba(58, 184, 58, 0.10), transparent 65%),
            radial-gradient(600px 400px at 15% 70%, rgba(51, 255, 153, 0.05), transparent 50%)
          `,
        }}
        animate={reduceMotion ? undefined : { opacity: [0.5, 0.8, 0.5] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 14, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      {/* Ambient dot lattice (slow drift) */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(58, 184, 58, 0.25) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                backgroundPositionX: ['0px', '20px', '0px'],
                backgroundPositionY: ['0px', '14px', '0px'],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 24, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      {/* Secondary parallax depth layer */}
      <motion.div
        className="absolute -inset-[12%] opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(51, 255, 153, 0.30) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          filter: 'blur(0.5px)',
          maskImage:
            'radial-gradient(ellipse at center, black 35%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 35%, transparent 72%)',
        }}
        animate={
          reduceMotion
            ? undefined
            : { x: ['-2%', '2%', '-2%'], y: ['-1.5%', '1.5%', '-1.5%'] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 30, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      {/* Hexagonal grid overlay (diamond pattern for ETC theme) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(58, 184, 58, 0.3) 1px, transparent 1px),
            linear-gradient(150deg, rgba(58, 184, 58, 0.3) 1px, transparent 1px),
            linear-gradient(270deg, rgba(58, 184, 58, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 104px',
        }}
      />

      {/* Network hubs (static cores with breathing glow) */}
      <div className="absolute inset-0">
        {hubs.map((h, idx) => (
          <motion.div
            key={`hub-${idx}`}
            className="absolute rounded-full"
            style={{
              left: h.left,
              top: h.top,
              width: idx === 4 ? 10 : 6, // Center hub is larger
              height: idx === 4 ? 10 : 6,
              transform: 'translate(-50%, -50%)',
              background:
                idx === 4
                  ? 'rgba(51, 255, 153, 0.70)'
                  : 'rgba(58, 184, 58, 0.50)',
              boxShadow:
                idx === 4
                  ? '0 0 40px rgba(51, 255, 153, 0.25)'
                  : '0 0 20px rgba(58, 184, 58, 0.15)',
            }}
            animate={
              reduceMotion ? undefined : { opacity: [0.3, 0.8, 0.3] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: h.dur,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: h.delay,
                  }
            }
          />
        ))}
      </div>

      {/* Data flow lanes with traveling filaments */}
      {!reduceMotion &&
        lanes.map((l, idx) => {
          const from = l.reverse ? '110%' : '-10%';
          const to = l.reverse ? '-10%' : '110%';

          // Anchor points along each lane
          const anchorStops = [18, 36, 54, 72, 88];
          const phaseBase = idx * 0.45;

          return (
            <div
              key={`lane-${idx}`}
              className="absolute"
              style={{
                left: l.left,
                top: l.top,
                width: l.len,
                height: 12,
                transform: `rotate(${l.angle}deg)`,
                transformOrigin: 'left center',
              }}
            >
              {/* Faint lane trace */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(58, 184, 58, 0.08), transparent)',
                  filter: 'blur(0.5px)',
                  opacity: 0.4,
                }}
              />

              {/* Anchor nodes along the lane */}
              {anchorStops.map((x, aIdx) => {
                const isActive = aIdx === 1 || aIdx === 3;
                const size = aIdx % 2 === 0 ? 2 : 3;

                return (
                  <motion.div
                    key={`a-${idx}-${aIdx}`}
                    className="absolute top-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      left: `${x}%`,
                      width: size,
                      height: size,
                      background: isActive
                        ? 'rgba(51, 255, 153, 0.45)'
                        : 'rgba(255, 255, 255, 0.20)',
                      boxShadow: isActive
                        ? '0 0 12px rgba(51, 255, 153, 0.12)'
                        : 'none',
                    }}
                    animate={{ opacity: [0.15, 0.6, 0.15] }}
                    transition={{
                      duration: 6.5 + (aIdx % 3) * 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: phaseBase + aIdx * 0.2,
                    }}
                  />
                );
              })}

              {/* Traveling filament (data packet) */}
              <motion.div
                className="absolute top-1/2 h-[2px] -translate-y-1/2"
                style={{
                  width: '42%',
                  background: l.reverse
                    ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.50), rgba(51, 255, 153, 0.60), rgba(51, 255, 153, 0.0))'
                    : 'linear-gradient(90deg, rgba(58, 184, 58, 0.0), rgba(58, 184, 58, 0.60), rgba(51, 255, 153, 0.50), rgba(51, 255, 153, 0.0))',
                  filter: 'blur(0.4px)',
                }}
                initial={{ x: from, opacity: 0 }}
                animate={{ x: [from, to], opacity: [0, 0.7, 0.7, 0] }}
                transition={{
                  duration: l.dur,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: l.delay,
                  times: [0, 0.15, 0.8, 1],
                }}
              />
            </div>
          );
        })}

      {/* Processing pulses around hubs */}
      {!reduceMotion &&
        hubs.map((h, idx) => (
          <motion.div
            key={`pulse-${idx}`}
            className="absolute rounded-full"
            style={{
              left: h.left,
              top: h.top,
              width: idx === 4 ? 20 : 14,
              height: idx === 4 ? 20 : 14,
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(51, 255, 153, 0.35)',
              boxShadow: '0 0 20px rgba(51, 255, 153, 0.08)',
            }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 3.2, 4.8] }}
            transition={{
              duration: h.dur,
              repeat: Infinity,
              ease: 'easeOut',
              delay: h.delay,
            }}
          />
        ))}

      {/* Wrap/unwrap orbit rings (unique to WETC) */}
      {!reduceMotion && (
        <>
          {/* Central orbit - represents wrapping */}
          <motion.div
            className="absolute left-1/2 top-[45%] h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(58,184,58,0.15)]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Orbiting particle */}
            <motion.div
              className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[rgba(51,255,153,0.6)]"
              style={{ boxShadow: '0 0 12px rgba(51, 255, 153, 0.4)' }}
            />
          </motion.div>

          {/* Secondary orbit */}
          <motion.div
            className="absolute left-1/2 top-[45%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(58,184,58,0.08)]"
            animate={{ rotate: -360 }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[rgba(51,255,153,0.4)]"
              style={{ boxShadow: '0 0 8px rgba(51, 255, 153, 0.3)' }}
            />
          </motion.div>
        </>
      )}

      {/* Scan shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, transparent, rgba(51, 255, 153, 0.15), transparent)',
          backgroundSize: '100% 280px',
        }}
        animate={
          reduceMotion
            ? undefined
            : { backgroundPositionY: ['0px', '280px'] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: 'linear' }
        }
      />

      {/* Bottom anchor glow */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-[radial-gradient(1000px_400px_at_50%_100%,rgba(58,184,58,0.12),transparent_60%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.60)_100%)]" />
    </div>
  );
}
