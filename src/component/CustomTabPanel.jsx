import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"

const CustomTabPanel = () => {

  const [value, setvalue] = useState(0)

  const handleChange = (e, newValue) =>{
     setvalue(newValue)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Params"  />
        <Tab label="Headers"  />
        <Tab label="Body"/>
      </Tabs>

      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        Params
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        Heades
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        Body
      </Box>
    </Box>
  )
}

export default CustomTabPanel
