'use client'

import {motion, useInView, useAnimation} from "framer-motion"
import { useRef, useEffect } from "react"

export default function Reveal({children, ...props}){
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

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
                hidden: {opacity:0, y:-75},
                visible: {opacity:1, y:0},
            }
        }
        initial="hidden"
        animate={controls}
        transition={{duration:0.5}}
        {...props}
        >
            {children}
        </motion.div>
    )
}