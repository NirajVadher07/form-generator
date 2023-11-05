import Link from 'next/link';
import React, { useState } from 'react';

const DropdownMenu = ({ choice, fieldType, setFieldType }) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const changeValue = (text) => {
        setFieldType(text)
        setIsOpen(!isOpen)
    }
    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="text-primary  font-medium rounded-lg text-md border-2 border-primary px-5 py-2.5 text-center inline-flex items-center" type="button">
                {fieldType}
            </button>
            {
                isOpen && (
                    <div className="absolute mt-2 py-2 bg-white border shadow-lg transition-all z-10">
                        {/* Dropdown content goes here */}
                        {
                            choice.map((e, key) => {
                                return (
                                    <Link
                                        key={key}
                                        href="#"
                                        className="block px-4 py-2 hover:bg-secondary hover:text-white"
                                        onClick={() => { changeValue(e) }}>{e}</Link>
                                )
                            })
                        }
                    </div>
                )
            }
        </div >
    );
};

export default DropdownMenu;
