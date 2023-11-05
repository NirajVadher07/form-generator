import Link from 'next/link'
import React from 'react'

const Header = ({buttonTitle = 'Add Form', href = '/addform'}) => {
    return (
        <div className='px-8 py-4 flex flex-row justify-between items-center relative top-0 w-full'>
            <div className='text-2xl font-bold'>
                Form Generator
            </div>
            <div>
                <Link href={href} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border hover:bg-alternative hover:text-white hover:transition-all">{buttonTitle}</Link>
            </div>
        </div>
    )
}

export default Header
