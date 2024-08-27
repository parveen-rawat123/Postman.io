import { createContext, useState } from "react"
 
export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [formData, setformData] =  useState({
        url : ''  ,
        type : 'POST'
    })

    return (
        <DataContext.Provider value={{formData, setformData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
