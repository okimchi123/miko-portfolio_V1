'use client'

import {motion, useInView, useAnimation} from "framer-motion"
import { useRef, useEffect } from "react"

export default function Reveal({children, delayProp, ...props}){
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.8 })


    const controls = useAnimation()
    
    useEffect(() => {
        if(isInView){
            controls.start("visible")
        }
    }, [isInView])
    
    return(
        <motion.div
        ref={ref}
        variants={
            {
                hidden: {opacity:0, y:-25},
                visible: {opacity:1, y:0},
            }
        }
        initial="hidden"
        animate={controls}
        transition={{duration:0.2, delay:delayProp}}
        {...props}
        >
            {children}
        </motion.div>
    )
}