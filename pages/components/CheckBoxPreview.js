import React from 'react'

const CheckBoxPreview = ({ option, answerCheckBox, setAnswerCheckBox }) => {
    const toggleOption = (value) => {
        if (answerCheckBox.includes(value)) {
            setAnswerCheckBox(answerCheckBox.filter((option) => option !== value));
        } else {
            setAnswerCheckBox([...answerCheckBox, value]);
        }
    };
    return (
        <>
            <div className='text-primary text-md rounded-lg block flex-1 p-2.5 outline-none w-2/3'>
                {option.title}
            </div>
            <div className="multiple-select flex flex-col">
                {option.options.map((option, key) => {
                    return (<label key={key} className='p-2.5 flex justify-start items-center'>
                        <input
                            type="checkbox"
                            value={option.value}
                            checked={answerCheckBox.includes(option.value)}
                            onChange={() => toggleOption(option.value)}
                            className="w-4 h-4 mr-5 "
                        />
                        <h1>
                            {option.value}
                        </h1>
                    </label>)
                })}
            </div>
        </>
    )
}

export default CheckBoxPreview
