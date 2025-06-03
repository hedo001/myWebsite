import React, { useEffect, useRef, useState } from 'react'
import stl from './index.module.scss'
import { services } from './data'
import { motion, useTransform, useScroll, useMotionValue } from 'framer-motion'

export function ServiceCard() {
  return (
    <div className={stl.wrapper}>
      {/* Optional scroll prompt */}
      {/* <div className={stl.scrollPrompt}><span>Scroll down</span></div> */}
      {/* <HorizontalScrollCarousel /> */}
      {services.map((card) => (
            <Card card={card} key={card.id} />
          ))}
      {/* <div className={stl.scrollPrompt}><span>Scroll up</span></div> */}
    </div>
  )
}

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null)
//   const [scrollRange, setScrollRange] = useState(0)

//   const cardWidth = 450 // px
//   const gap = 16 // px (1rem)
//   const totalCards = services.length

//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ['start start', 'end start'],
//   })

//   useEffect(() => {
//     const totalScroll =
//       totalCards * (cardWidth + gap) - window.innerWidth
//     setScrollRange(totalScroll)
//   }, [totalCards])

//   const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange])

//   return (
//     <section ref={targetRef} className={stl.scrollSection}>
//       <div className={stl.stickyContainer}>
//         <motion.div style={{ x }} className={stl.cardsContainer}>
//           {services.map((card) => (
//             <Card card={card} key={card.id} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

const Card = ({ card }) => {
  return (
    <div className={stl.card}>
      <div
        className={stl.cardBackground}
        // style={{ backgroundImage: `url('/back.jpeg')`, backgroundSize: 'cover' , backgroundPosition: 'center' }}
      />
      <div className={stl.cardOverlay}>
        <div className={stl.serviceCard}>
          <div className={stl.serviceCardContent}>
            <h3>{card?.name}</h3>
            <p>{card?.description}</p>
          </div>
        </div>
      </div>

      <div className={stl.serviceCardImageContainer}>
        <img
          src={card?.gif}
          alt={card?.name}
          className={stl.serviceCardImage}
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}
