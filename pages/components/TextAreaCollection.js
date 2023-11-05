import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

const TextAreaCollection = ({ setOptionCollection }) => {
    const [rows, setRows] = useState(0)
    const [cols, setCols] = useState(0)
    const [id, setId] = useState("")
    const [buttonValue, setButtonValue] = useState("Save")
    const handleSave = () => {
        if (rows <= 0 || cols <= 0) {
            toast.error("Enter valid number")
            return
        }
        const id = uuidv4()
        setId(id)
        setOptionCollection([{ id, value: [rows, cols] },]);
        setButtonValue("Update")
        toast.success("Saved rows and columns")
    }
    const handleUpdateValue = () => {
        setOptionCollection((prevInputs) =>
            prevInputs.map((input) =>
                input.id === id ? { ...input, value: [rows, cols] } : input
            )
        );
        toast.success("Updated rows and columns")
    };
    return (
        <div className='mb-5 flex justify-center items-center'>
            <div className='flex justify-center items-center w-2/3'>
                <div className='flex w-1/2 items-center justify-between'>
                    <h1 className='mx-2'>Rows:</h1>
                    <input
                        type="number"
                        className="border-2 text-primary text-sm rounded-lg block flex-1 p-2.5 outline-none w-1/3"
                        placeholder="Enter number of rows"
                        value={rows}
                        onChange={(e) => setRows(parseInt(e.target.value))}
                    />
                </div>
                <div className='flex w-1/2 items-center justify-between'>
                    <h1 className='mx-2'>Cols:</h1>
                    <input
                        type="number"
                        className="border-2 text-primary text-sm rounded-lg block flex-1 p-2.5 outline-none w-1/3"
                        placeholder="Enter number of columns"
                        value={cols}
                        onChange={(e) => setCols(parseInt(e.target.value))}
                    />
                </div>
            </div>
            <div className='w-1/3 flex justify-end items-center'>
                <button onClick={buttonValue == "Save" ? handleSave : handleUpdateValue} className="px-5 py-2 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border hover:bg-alternative hover:text-white hover:transition-all">{buttonValue}</button>
            </div>
        </div>
    )
}

export default TextAreaCollection