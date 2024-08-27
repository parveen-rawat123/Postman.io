import { Button, MenuItem, Select, TextField } from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
const Form = () => {

    const { formData, setformData } = useContext(DataContext)

    const handleChange = (e) => {
        setformData({ ...formData, type: e.target.value })
    };
    const onURLChange = (e) => {
        setformData({ ...formData, url: e.target.value })
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <Select
                    value={formData.type}
                    onChange={handleChange}
                    sx={{
                        width: '150px',
                        height: "40px"
                    }}
                >
                    <MenuItem value="POST">POST</MenuItem>
                    <MenuItem value="GET">GET</MenuItem>
                </Select>

                <TextField
                    size="small"
                    onChange={onURLChange()}
                    sx={{
                        width: "100%",
                        backgroundColor: "#8080801b"
                    }}
                />
                <Button
                    sx={{
                        width: "120px",
                        height: "40px",
                        marginLeft: "5px"
                    }}
                    variant="contained"
                >Send</Button>
            </div>
        </>
    )
}


export default Form
