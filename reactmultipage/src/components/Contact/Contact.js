import React from 'react'
import { useState } from 'react'
import Particle from '../Particle'
import Card from '../Card/Card'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import Button from '../Button/Button'
const initialContactData={
  name:'',
  email:'',
  message:''
}
const Contact = () => {
 

  const [contactFormData, setContactFormData] = useState(initialContactData);
  const contactFormSubmit = (e) => {
    e.preventDefault();
    console.log(contactFormData)
  }
const changeHandler = (e) => {
  setContactFormData({
    ...contactFormData,
    [e.target.name]: e.target.value
  })

  
  
}

  return (
    <div>
      {/* <Particle /> */}
      <Card cardTitle='Contact Us'>
        <Form onSubmit={contactFormSubmit}>
          <Input name='name' value={contactFormData.name} onChange={changeHandler} type='text' className='form-control my-2' placeholder='Name' />
          <Input name='email' value={contactFormData.email} onChange={changeHandler} type='email' className='form-control my-2' placeholder='Email' />
          <Textarea name='message' value={contactFormData.message} onChange={changeHandler} className='form-control my-2' placeholder='Message' />
          <Button type='submit' className='btn-custom' name='Submit' />
        </Form>
      </Card>


    </div>
  )
}

export default Contact