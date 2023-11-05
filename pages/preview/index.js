import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import DropDownPreview from '../components/DropDownPreview';
import CheckBoxPreview from '../components/CheckBoxPreview';
import RadioButtonPreview from '../components/RadioButtonPreview';
import { ToastContainer, toast } from 'react-toastify';

const Preview = () => {
  const router = useRouter();
  const id = router.query.id;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [formField, setFormField] = useState([]);
  const [AnswerText, setAnswerText] = useState("")
  const [AnswerTextArea, setAnswerTextArea] = useState("")
  const [AnswerDropDown, setAnswerDropDown] = useState("Not Selected")
  const [AnswerCheckBox, setAnswerCheckBox] = useState([])
  const [AnswerRadioButton, setAnswerRadioButton] = useState("")
  

  useEffect(() => {
    const storedForm = localStorage.getItem('form');
    if (storedForm) {
      const parseForm = JSON.parse(storedForm);
      const data = parseForm.find((obj) => obj.id == id); // Use find to get the specific object
      if (data) {
        setTitle(data.title);
        setDescription(data.description);
        setFormField(data.formField);

      } else {
        console.log(`Data with id ${id} not found in localStorage`);
      }
    } else {
      console.log('No data found in localStorage');
    }
  }, [id]);


  const SubmitForm = () => {
    if (AnswerText == "") {
      toast.error("Enter some text in text-input")
      return
    }
    else if (AnswerTextArea.length < 30) {
      toast.error("Minimum 30 words are required")
      return
    }
    else if (AnswerDropDown == "Not Selected") {
      toast.error("Please Select any option from dropdown")
      return
    }
    else if (AnswerCheckBox.length == 0) {
      toast.error("Please Select any option from Checkbox")
      return
    }
    else if (AnswerRadioButton == "") {
      toast.error("Please Select any option from Radiobutton")
      return
    }

    const SubmittedForm = {
      id: uuidv4(),
      formId: id,
      title,
      description,
      AnswerCheckBox,
      AnswerDropDown,
      AnswerRadioButton,
      AnswerTextArea,
      AnswerText
    }

    const existingForms = JSON.parse(localStorage.getItem('SubmittedForms')) || [];
    existingForms.push(SubmittedForm);
    localStorage.setItem('SubmittedForms', JSON.stringify(existingForms));
    router.push('/');
  }

  return (
    <div>
      <ToastContainer />
      <Layout>
        <div className='w-full flex justify-center items-center flex-col px-5'>
          {/* Form Name and description */}
          <div className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5'>
            <div className='text-primary text-lg rounded-lg block flex-1 p-2.5 outline-none w-2/3'>
              {title}
            </div>
            <div className='text-primary text-lg rounded-lg block flex-1 p-2.5 outline-none w-2/3'>
              {description}
            </div>
          </div>
          {
            formField.map((e, key) => {
              if (e.fieldType === "TextArea") {
                return (
                  <div key={key} className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5'>
                    <div className='text-primary text-md rounded-lg block flex-1 p-2.5 outline-none w-2/3'>
                      {e.title}
                    </div>
                    <textarea className=' p-2.5 outline-none max-w-screen' name={e.id} id={e.id} cols={e.options[0].value[1]} rows={e.options[0].value[0]} placeholder='Enter your answer' value={AnswerTextArea} onChange={(e) => { setAnswerTextArea(e.target.value) }}></textarea>
                  </div>
                )
              } else if (e.fieldType === "Text") {
                return (
                  <div key={key} className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5'>
                    <div className='text-primary text-md rounded-lg block flex-1 p-2.5 outline-none w-2/3'>
                      {e.title}
                    </div>
                    <input type="text" id={e.id} className='text-primary text-md rounded-lg block flex-1 p-2.5 outline-none w-2/3' placeholder='Enter your answer' value={AnswerText} onChange={(e) => { setAnswerText(e.target.value) }} />
                  </div>
                )
              } else if (e.fieldType === "DropDown") {
                return (
                  <div key={key} className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5'>
                    <DropDownPreview AnswerDropDown={AnswerDropDown} setAnswerDropDown={setAnswerDropDown} option={e} />
                  </div>
                )
              } else if (e.fieldType === "CheckBox") {
                return (
                  <div key={key} className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5'>
                    <CheckBoxPreview option={e} AnswerCheckBox={AnswerCheckBox} setAnswerCheckBox={setAnswerCheckBox} />
                  </div>
                )
              } else if (e.fieldType === "RadioButton") {
                return (
                  <div key={key} className='w-full lg:w-1/2 flex flex-col justify-start items-start px-8 py-4 bg-white rounded-lg text-primary font-medium text-md mb-5'>
                    <RadioButtonPreview option={e} AnswerRadioButton={AnswerRadioButton} setAnswerRadioButton={setAnswerRadioButton} />
                  </div>
                )
              }
            })
          }
          <div className='w-full lg:w-1/2 flex justify-end pb-20'>
            <button
              onClick={SubmitForm}
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-secondary rounded-lg border hover:bg-alternative hover:text-white hover:transition-all'
            >
              Submit
            </button>
          </div>
        </div>
      </Layout >
    </div >
  )
}

export default Preview