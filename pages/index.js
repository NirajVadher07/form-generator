import { Inter } from 'next/font/google'
import FormCard from './components/FormCard'
import Layout from './layout'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [form, setForm] = useState([])

  useEffect(() => {
    const storedForm = localStorage.getItem('form');
    if (storedForm) {
      setForm(JSON.parse(storedForm))
    }
  }, []);

  return (
    <div>
      <Layout>        
        {/* display Form */}
        <div className='px-8 py-4 flex flex-col justify-start items-start'>
          <div className='text-xl font-semibold'>
            Recent Forms
          </div>
          {form.length != 0 ? (
            // List of all forms created till date
            <div className='px-15 py-10 flex flex-col lg:flex-row justify-center items-center flex-wrap w-full'>
              {
                form.map((e, key) => {
                  return (
                    <FormCard key={key} title={e.title} description={e.description} id={e.id} />
                  )
                })
              }

            </div>
          ) : (
            <div className="text-primary font-semibold text-xl text-center w-full py-20">
              No forms Yet
            </div>
          )}
        </div>
      </Layout>
    </div >
  )
}
