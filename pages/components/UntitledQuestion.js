import { useEffect, useState } from 'react'
import React from 'react'
import DropdownMenu from './DropDownMenu'
import { v4 as uuidv4 } from 'uuid';
import OptionCollection from './OptionCollection';
import { toast } from 'react-toastify';
import TextAreaCollection from './TextAreaCollection';

const UntitledQuestion = ({ id, formField, setFormField }) => {
    const [title, setTitle] = useState("")
    const [fieldType, setFieldType] = useState("Options");
    const [optionCollection, setOptionCollection] = useState([
        { id: uuidv4(), value: '', isEditable: true },
    ]);

    // Function to update an object with a specific id
    const SaveQuestion = () => {
        // Find the index of the object with the matching id
        if (!title || fieldType == 'Options' || optionCollection.length == 0) {
            toast.error('Title or Description or No option in Question')
            return;
        }
        const index = formField.findIndex(obj => obj.id === id);

        if (index !== -1) {
            // Clone the object to avoid mutating the original state
            const updatedObject = { ...formField[index] };

            updatedObject.title = title;
            updatedObject.fieldType = fieldType;
            updatedObject.options = optionCollection;

            // Create a new array with the updated object
            const updatedState = [...formField];
            updatedState[index] = updatedObject;

            // Update the state with the modified array
            setFormField(updatedState);
            toast.success("Saved Question")
        }
    };

    const DeleteQuestion = () => {
        const index = formField.findIndex((obj) => obj.id === id);

        if (index !== -1) {
            const updatedState = formField.filter((obj) => obj.id !== id);

            // Update the state with the new array (without the deleted object)
            setFormField(updatedState);
        }
    }

    return (
        <div className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5' >
            {/* Name and option */}
            < div className="w-full flex mb-5" >
                <input
                    type="text"
                    className="border-2 text-primary text-sm rounded-lg block flex-1 p-2.5 outline-none mx-1.5"
                    placeholder="Untitled Question"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <div className="w-1/2 flex items-center justify-end">
                    <DropdownMenu fieldType={fieldType} setFieldType={setFieldType} choice={['DropDown', 'RadioButton', 'CheckBox', 'TextArea', 'Text']} />
                </div>
            </div >
            {/* Based on Option selected */}
            < div className='w-full' >
                {
                    fieldType == "TextArea" ?
                        (
                            <TextAreaCollection setOptionCollection={setOptionCollection} />
                        )
                        : (
                            fieldType == "Text" ?
                                ""
                                :
                                <OptionCollection optionCollection={optionCollection} setOptionCollection={setOptionCollection} />

                        )
                }
            </div >
            <div>
                <button onClick={SaveQuestion} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border">
                    Save Section
                </button>
                <button onClick={DeleteQuestion} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-alternative rounded-lg border">
                    Delete Section
                </button>
            </div>
        </div >
    )
}

export default UntitledQuestion