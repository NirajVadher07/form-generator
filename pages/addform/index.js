import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Layout from './layout';
import Questions from '../components/Questions';
import { ToastContainer, toast } from 'react-toastify';

const AddForm = () => {
  const router = useRouter()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [formField, setFormField] = useState([]);

  const saveForm = (e) => {
    e.preventDefault();

    if (!title || !description || formField.length == 0) {
      toast.error('Title or Description or No question in form')
      return;
    }
    const newForm = {
      id: uuidv4(), // Generate a unique ID for the form
      title,
      description,
      formField
    };

    const existingForms = JSON.parse(localStorage.getItem('form')) || [];
    existingForms.push(newForm);
    localStorage.setItem('form', JSON.stringify(existingForms));
    router.push('/');
  };


  const addQuestion = () => {
    setFormField([...formField, { id: uuidv4() }])
  }

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ToastContainer />
      <Layout>
        <div className='px-8 py-4 flex flex-col justify-start items-start mb-10'>
          <div className='text-xl font-semibold mb-5'>
            Add Form
          </div>
          <div className='w-full flex justify-center items-center flex-col mb-20'>
            {/* Form Name and description */}
            <div className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5'>
              <input
                type='text'
                className='text-primary text-lg rounded-lg block flex-1 p-2.5 outline-none w-2/3'
                placeholder='Form Title'
                value={title}
                ref={inputRef}
                onChange={(e) => { setTitle(e.target.value); }}
              />
              <input
                type='text'
                className='text-primary text-sm rounded-lg block flex-1 p-2.5 outline-none w-2/3'
                placeholder='Form description'
                value={description}
                onChange={(e) => { setDescription(e.target.value); }}
              />
            </div>
            <Questions formField={formField} setFormField={setFormField} />
            {/* Save form */}
            <div className='w-full lg:w-1/2 flex justify-end'>
              <button
                onClick={addQuestion}
                className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border hover:bg-alternative hover:text-white hover:transition-all'
              >
                Add Section
              </button>
              <button
                onClick={(e) => { saveForm(e); }}
                className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border hover:bg-alternative hover:text-white hover:transition-all'
              >
                Save
              </button>

            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddForm;
