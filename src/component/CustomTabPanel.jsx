import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import CreateTable from "./CreateTable"
import CreatejsonText from "./CreatejsonText"

const CustomTabPanel = () => {

  const [value, setvalue] = useState(0)

  const handleChange = (e, newValue) => {
    setvalue(newValue)
  }
  return (
    <div className=" w-full mt-3">
      <Tabs value={value} onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "#F26834",
            height: 2, bottom: 2
          }
        }}
      >
        <Tab label="Params" className="!normal-case	" />
        <Tab label="Headers" className="!normal-case	" />
        <Tab label="Body" className="!normal-case	" />
      </Tabs>

      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <CreateTable text={'Query Params'} />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable text={'Headers'} />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        <CreatejsonText />
      </Box>
    </div>
  )
}

export default CustomTabPanel
