import { useState } from "react";
import Swal from "sweetalert2";
// import Button from "./components/Button";
// import ContactForm from "./components/ContactForm";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Mary Poppendieck", number: "39-23-6423122" },
    { id: 4, name: "Dan Abramov", number: "12-43-2343232" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");


  const handleFilter=(e)=>{
    
    setFilterText(e.target.value)
  }
//  check if filterText exist in persons.name
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterText.toLowerCase())
  );
  console.log(filteredPersons);
 






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
        number: newNumber,
      }
      setPersons(persons.concat(personObject));
     
    }
    setNewName("");


  }
  const personToShow=filteredPersons?filteredPersons:persons



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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
