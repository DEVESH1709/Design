// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"

// export function BackgroundAnimation() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
    
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute inset-0 opacity-30"
//           animate={{
//             background: [
//               "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
//               "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
//               "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
//               "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
//             ],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//         />
//       </div>

//       {Array.from({ length: 50 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//           }}
//           animate={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//           }}
//           transition={{
//             duration: Math.random() * 20 + 10,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "linear",
//           }}
//         />
//       ))}

//       <motion.div
//         className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rotate-45"
//         animate={{ rotate: [45, 405] }}
//         transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//       />

//       <motion.div
//         className="absolute top-40 right-20 w-16 h-16 border border-purple-500/20"
//         animate={{ rotate: [0, 360] }}
//         transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//       />

//       <motion.div
//         className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
//         animate={{
//           scale: [1, 1.5, 1],
//           opacity: [0.1, 0.3, 0.1],
//         }}
//         transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute w-96 h-96 rounded-full pointer-events-none"
//         style={{
//           background: "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
//         }}
//         animate={{
//           x: mousePosition.x - 192,
//           y: mousePosition.y - 192,
//         }}
//         transition={{ type: "spring", damping: 30, stiffness: 200 }}
//       />
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       <svg className="absolute inset-0 w-full h-full">
//         <motion.path
//           d="M0,100 Q400,50 800,100 T1600,100"
//           stroke="rgba(59, 130, 246, 0.1)"
//           strokeWidth="2"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//         />
//         <motion.path
//           d="M0,200 Q600,150 1200,200 T2400,200"
//           stroke="rgba(147, 51, 234, 0.1)"
//           strokeWidth="1"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
//         />
//       </svg>
//     </div>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function BackgroundAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial window size
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Don't render particles until we have window dimensions
  if (windowSize.width === 0 || windowSize.height === 0) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Static background elements that don't depend on window */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute top-40 right-20 w-16 h-16 border border-purple-500/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Mouse Follower Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M0,100 Q400,50 800,100 T1600,100"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 Q600,150 1200,200 T2400,200"
          stroke="rgba(147, 51, 234, 0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </div>
  )
}
