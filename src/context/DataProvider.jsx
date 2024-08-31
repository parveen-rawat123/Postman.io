import { createContext, useState } from "react"
 
export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [formData, setformData] =  useState({
        url : ''  ,
        type : 'POST'
    });

    const [paramsData, setparamsData ] = useState([])
    const [headersData, setheadersData ] = useState([])
    const [jsonText, setjsonText] = useState('')
    return (
        <DataContext.Provider value={{
            formData,
             setformData,
             paramsData,
             setparamsData,
             headersData,
             setheadersData,
             jsonText,
             setjsonText
             }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
