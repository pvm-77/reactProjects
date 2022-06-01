import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = (props) => {

   
    const [newName, setNewName] = useState('');
    const handleNewName=(e)=>{
        const currentNewName=e.target.value;
        setNewName(currentNewName);
        
    }
    const [formData, setFormData] = useState({
        name: '',
        number: ''
    });
const handleForm=(e)=>{
    e.preventDefault();
    const myFormData={
        name: newName,
        number: formData.number,
        id: props.data.length+1

    };
    // check if name already exist in the list
    const isExist=props.data.find(personcontact=>personcontact.name===myFormData.name);
    if(isExist){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name already exist!',
            footer: '<a href>Why do I have this issue?</a>'
            })
    }
    else{
        props.data.push(myFormData);
        setNewName('');
        setFormData({
            name: '',
            number: ''
        });
        
    }

    console.log(myFormData);
}
    return (
        <div className='card-header'>
            <div className='card-body'>
                <form onSubmit={handleForm}>
                    <div className="form-group">
                        <input value={newName} onChange={handleNewName} type="text" className="form-control"  placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm