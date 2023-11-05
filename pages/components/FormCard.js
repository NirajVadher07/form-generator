import { useRouter } from 'next/router';
import React from 'react'

const FormCard = ({ title, description, id }) => {
    const router = useRouter()
    const HandleClick = () => {
        router.push(`/preview?id=${id}`);
    }

    const HandleDelete = () => {
        const existingForms = JSON.parse(localStorage.getItem('form'));
        const updatedForm = existingForms.filter((item) => item.id !== id);
        localStorage.setItem('form', JSON.stringify(updatedForm));
        window.location.reload()
    }
    return (
        <div className="bg-contrast text-white p-4 rounded-lg shadow-md w-full lg:w-[30%] mb-5 mr-5 ">
            <div className="text-xl font-bold mb-2">{title}</div>
            <div className="text-alternative text-md text-justify mb-5">{description}</div>
            <div className='flex flex-wrap justify-start items-center'>
                <button type="button" onClick={HandleClick} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium bg-primary text-primary rounded-lg">Preview</button>
                <button type="button" onClick={HandleDelete} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium bg-alternative text-white rounded-lg">Delete</button>
            </div>
        </div>
    )
}

export default FormCard
