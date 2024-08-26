import { Button, MenuItem, Select, TextField } from "@mui/material"

const Form = () => {
    return (
        <>
            <div className=" flex justify-between items-center">
                <Select
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
