import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
const OptionCollection = ({ optionCollection, setOptionCollection }) => {    

    const handleAddInput = () => {        

        setOptionCollection((prevInputs) => [
            ...prevInputs,
            { id: uuidv4() , value: '', isEditable: true },
        ]);
    };

    const handleInputChange = (id, value) => {
        setOptionCollection((prevInputs) =>
            prevInputs.map((input) =>
                input.id === id ? { ...input, value } : input
            )
        );
    };

    const handleToggleEdit = (id) => {
        setOptionCollection((prevInputs) =>
            prevInputs.map((input) =>
                input.id === id ? { ...input, isEditable: !input.isEditable } : input
            )
        );
    };

    const handleDeleteInput = (id) => {
        setOptionCollection((prevInputs) =>
            prevInputs.filter((input) => input.id !== id)
        );
    };

    const handleSave = (id) => {
        setOptionCollection((prevInputs) =>
            prevInputs.map((input) =>
                input.id === id && input.value.trim() !== '' ? { ...input, isEditable: false } : input
            )
        );
    };

    return (
        <div className='w-full'>
            {optionCollection.map((input) => (
                <div key={input.id} className='flex w-full justify-between mb-2'>
                    {input.isEditable ? (
                        <div className='flex w-2/3'>
                            <input
                                type="text"
                                placeholder='Add Option Value'
                                className="border-b-2 text-primary text-sm block p-2.5 outline-none w-3/4 lg:w-full "
                                value={input.value}
                                onChange={(e) => handleInputChange(input.id, e.target.value)}
                            />
                        </div>
                    ) : (
                        <span>{input.value}</span>
                    )}
                    <div className='flex justify-end items-center w-1/4 lg:w-1/3'>
                        {input.isEditable ? (
                            <button onClick={() => handleSave(input.id)} className='px-5'>
                                Save
                            </button>
                        ) : (
                            <button onClick={() => handleToggleEdit(input.id)} className='px-5'>
                                Edit
                            </button>
                        )}
                        <button onClick={() => handleDeleteInput(input.id)}>Delete</button>
                    </div>
                </div>
            ))}
            <div className='w-full flex justify-end'>
                <button onClick={handleAddInput} className="px-5 py-2 mb-2 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border hover:bg-alternative hover:text-white hover:transition-all">Add Option</button>
            </div>
        </div>
    );
};

export default OptionCollection;
