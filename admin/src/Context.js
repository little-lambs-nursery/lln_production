import { createContext, useContext, useState } from 'react'

const Admin=createContext()

const Context=({children})=>{
    const [admin, setAdmin] = useState();

    return(
        <Admin.Provider value={{admin,setAdmin}}>
            {children}
        </Admin.Provider>
    )
}

export const AdminState=()=>{
    return useContext(Admin)
}

export default Context