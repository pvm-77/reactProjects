import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
// import Button from "./components/Button";
// import ContactForm from "./components/ContactForm";
import Notification from "./components/Notification";

import personsService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([

  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");


  const handleFilter = (e) => {

    setFilterText(e.target.value)
  }
  //  check if filterText exist in persons.name
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterText.toLowerCase())
  );
  // console.log(filteredPersons);







  const handlePerson = (event) => {
    setNewName(event.target.value);
  }
  const handlePersonNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const addPerson = (e) => {
    e.preventDefault();

    // check if input value already exist in persons array
    const person = persons.find((person) => person.name === newName);
    if (person) {
      // if exist, show alert
      Swal.fire({
        title: `${newName} is already added to phonebook`,
        text: "Please enter a new name",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      // if not exist, add new person to persons array

      const personObject = {
        id: persons.length + 1,
        name: newName.toLowerCase(),
        number: newNumber
      }

      // create new contact and send data to server
      // axios.post(
      //   'http://localhost:3001/persons',personObject

      // ).then(
      //   response=>{
      //     console.log(response)
      //   }

      // ).catch(error=>{
      //   console.log('something went wrong')
      // });
      // setPersons(persons.concat(personObject));

      personsService.create(personObject).then(
        returnedContact => {
          setPersons(persons.concat(returnedContact))
        }
      ).catch(error => {
        console.log('something went wrong')
      })

    }
    setNewName("");


  }

  // handle delete 
  const handleDelete = (id, name) => {
    // console.log(`contact with id ${id} to be deleted`);
    // before delete contact, show alert
    Swal.fire({
      title: "Are you sure?",
      text: `${name} will be deleted`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        // if user confirm, delete contact
        personsService.deleteContact(id).then(
          returnedContact => {
            setPersons(persons.filter(person => person.id !== returnedContact.id))
          }
        ).catch(error => {
          console.log('something went wrong')
        }
        )
        Swal.fire("Deleted!", "Your contact has been deleted.", "success");
      }
    }
    )
   


  }
  const personToShow = filteredPersons ? filteredPersons : persons


  // use effect to get data initialize from server
  useEffect(() => {
    // console.log("effect");
    // axios.get("http://localhost:3001/persons")
    //   .then(
    //     response => {
    //       console.log("promise fulfilled");
    //       setPersons(response.data);
    //     }
    //   )

    personsService.getAll().then(
      response => {
        // console.log(response)
        setPersons(response)
      }
    ).catch(error => {
      console.log(error)
    })
  }, []);
  // console.log("render", persons.length, "persons");




  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filterText} onChange={handleFilter} name="search" />
      </div>
      <form onSubmit={addPerson} >
        <div className="form-group">
          name: <input type='text' className="form-control" name="name" value={newName} onChange={handlePerson} />
          number: <input type='tel' className="form-control" name="number" value={newNumber} onChange={handlePersonNumber} />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button className="btn btn-success  px-2 mx-3" onClick={() => { handleDelete(person.id, person.name) }} >delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
