import React, { useContext } from "react"
import { motion } from 'framer-motion';
import NavContext from "../context/NavContext";

function NavItem({id}) {
    const {handleNav} = useContext(NavContext)

    const navVariants = {
        initial: { y:50, opacity: 0,},
        animate: { y:0,opacity: 1, transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 } },
        exit: { opacity: 0, y:-50, transition: {duration: 0.3,} }
    }

    return (
        <div className="relative min-h-40">
            <motion.h2
                variants={navVariants}
                initial="initial" animate="animate" exit="exit"
                className="text-4xl md:text-6xl underline font-bold flex-1 cursor-pointer text-[#F64D00] uppercase"
                id={id}
                onClick={handleNav}
                >{id}
            </motion.h2>
        </div>
    )
}

export default NavItem