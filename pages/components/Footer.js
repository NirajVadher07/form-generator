import Link from 'next/link'
import React from 'react'
const Footer = () => {
    return (
        <footer className="bg-secondary text-alternative fixed bottom-0 w-full ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center">Niraj Vadher</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <Link href={"https://www.linkedin.com/in/nirajvadher0711/"} className="mr-4 md:mr-6">LinkedIn</Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/NirajVadher07"} className="mr-4 md:mr-6">Github</Link>
                    </li>
                    <li>
                        <Link href={"mailto:nirajvvadher0711@gmail.com"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer