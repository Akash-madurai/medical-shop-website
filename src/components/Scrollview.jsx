import { motion ,useInView } from "framer-motion";
import { useRef } from "react";

const Scrollview = ({children}) =>{
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})

    return(
        <motion.div
            ref={ref}
            initial={{y:30,opacity:0}}
            animate={isInView?{y:0,opacity:1}:{}}
            transition={{duration:1, delay:0.5 ,ease:"easeOut"}}
        >
            {children}
        </motion.div>
    )
}

export default Scrollview