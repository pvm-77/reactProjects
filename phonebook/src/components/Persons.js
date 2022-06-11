import React from 'react'

const Persons = ({contactList}) => {
    
  return (
    <>
        {
            contactList.map((contact) => (
                <div key={contact.id}>
                    <p>{contact.name} {contact.number}</p>
                </div>
            ))
            
        }
  

    </>
  )
}

export default Persons