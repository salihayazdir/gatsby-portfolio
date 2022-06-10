import React, { createContext, useState } from 'react'

const NavContext = createContext()

export const NavProvider = ({ children }) => {
    const [nav, setNav] = useState(null)

    const handleNav = (event) => setNav(event.target.id)

    return <NavContext.Provider value={{
        nav,
        handleNav,
    }}>
        {children}
    </NavContext.Provider>
}

export default NavContext