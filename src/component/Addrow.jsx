import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";

const Addrow = ({ addrows, rowId, Data, setData }) => {
    const [checkcheckBox, setcheckcheckBox] = useState(false);

    const handleChange = (e) => {

        let result = Data.filter(entry => entry.id === Number(e.target.name))[0];

        if (!checkcheckBox) {
            setcheckcheckBox(true);
            addrows((oldrow) => [...oldrow, rowId]);
            result = {... result, checked : true}
        } else {
            setcheckcheckBox(false);
            result = {... result, checked : false}
        }

        let index = Data.findIndex(value => value.id === Number(e.target.name));

        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            const newArray = Object.assign([...Data], {
                [index]: result
            })
            setData(newArray)
        }

    };

    const onTextChange = (e) => {
        let result = Data.filter(entry => entry.id === rowId)[0];

        result = { ...result, id: rowId, [e.target.name]: e.target.value };

        let index = Data.findIndex(value => value.id === rowId);

        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            const newArray = Object.assign([...Data], {
                [index]: result
            })
            setData(newArray)
        }
        console.log(Data)
    };

    return (
        <TableRow>
            <TableCell className="tableCell two">
                <Checkbox
                    className="checkBox"
                    checked={checkcheckBox}
                    onChange={handleChange}
                    name={rowId}
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
