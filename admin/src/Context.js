import { createContext, useContext, useState, useEffect } from 'react'

const Admin = createContext()

const Context = ({ children }) => {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('adminInfo')) || null);
    useEffect(() => {
        localStorage.setItem('adminInfo', JSON.stringify(admin))
    }, [admin])
    return (
        <Admin.Provider value={{ admin, setAdmin }}>
            {children}
        </Admin.Provider>
    )
}

export const AdminState = () => {
    return useContext(Admin)
}

export default Context