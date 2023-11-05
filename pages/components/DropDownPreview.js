import Link from "next/link";
import { useState } from "react";
import React from 'react'

const DropDownPreview = ({ option, answerDropDown, setAnswerDropDown }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const changeValue = (text) => {
    setAnswerDropDown(text)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='text-primary text-md rounded-lg block flex-1 p-2.5 outline-none w-2/3'>
        {option.title}
      </div>
      <div className="relative inline-block w-full">
        <button
          onClick={toggleDropdown}
          className="text-primary  font-medium rounded-lg text-md border-2 border-primary px-5 py-2.5 text-center inline-flex items-center w-1/3" type="button">
          {answerDropDown}
        </button>
        {
          isOpen && (
            <div className="absolute mt-2 py-2 bg-white border shadow-lg transition-all z-10">
              {/* Dropdown content goes here */}
              {
                option.options.map((e, key) => {
                  return (
                    <Link
                      key={key}
                      href="#"
                      className="block px-4 py-2 hover:bg-secondary hover:text-white"
                      onClick={() => { changeValue(e.value) }}>{e.value}</Link>
                  )
                })
              }
              <Link                
                href="#"
                className="block px-4 py-2 hover:bg-secondary hover:text-white"
                onClick={() => { changeValue("Not Selected") }}>Not Selected</Link>

            </div>
          )
        }
      </div >
    </>
  )
}

export default DropDownPreview