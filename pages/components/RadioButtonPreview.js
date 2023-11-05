import React from 'react'

const RadioButtonPreview = ({ option, AnswerRadioButton, setAnswerRadioButton }) => {
    const handleRadioChange = (value) => {
        setAnswerRadioButton(value);
    };
    return (
        <>
            <div className='text-primary text-md rounded-lg block flex-1 p-2.5 outline-none w-2/3'>
                {option.title}
            </div>
            <div className="radio-group flex flex-col">
                {option.options.map((option, key) => (
                    <label key={key} className="radio-label flex justify-start items-center">
                        <input
                            type="radio"
                            value={option.value}
                            checked={AnswerRadioButton === option.value}
                            onChange={() => handleRadioChange(option.value)}
                            className="w-4 h-4 mr-5"
                        />
                        {option.value}
                    </label>
                ))}
            </div>
        </>
    )
}

export default RadioButtonPreview
