import { createContext, useState } from "react"
 
export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [formData, setformData] =  useState({
        url : ''  ,
        type : 'POST'
    });

    const [paramsData, setparamsData ] = useState([])
    const [headersData, setheadersData ] = useState([])
    return (
        <DataContext.Provider value={{
            formData,
             setformData,
             paramsData,
             setparamsData,
             headersData,
             setheadersData
             }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
