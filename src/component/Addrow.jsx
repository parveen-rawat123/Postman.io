import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";

const Addrow = ({ addrows, rowId, Data, setData }) => {
    const [checkcheckBox, setcheckcheckBox] = useState(false);

    const handleChange = () => {
        if (!checkcheckBox) {
            setcheckcheckBox(true);
            addrows((oldrow) => [...oldrow, rowId]);
        } else {
            setcheckcheckBox(false);
        }
    };
    
    const onTextChange = () => {
    };


    return (
        <TableRow>
            <TableCell className="tableCell two">
                <Checkbox
                    className="checkBox"
                    checked={checkcheckBox}
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell className="tableCell two">
                <TextField
                    className="textField"
                    InputProps={{ style: { height: 30, padding: "0 5px" } }}
                    onChange={onTextChange}
                    name="key"
                />
            </TableCell>
            <TableCell className="tableCell two">
                <TextField
                    className="textField"
                    InputProps={{ style: { height: 30, padding: "0 5px" } }}
                    onChange={onTextChange}
                    name="value"
                />
            </TableCell>
        </TableRow>
    );
};

export default Addrow;
