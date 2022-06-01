import { useState } from "react";
import Swal from "sweetalert2";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

function App() {
  const personContactList = [
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
  ];
  const [personContact, setPersonContact] = useState(personContactList);
  // toggle contact form visibility on button click

  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    
    setShowForm((prevState) => !prevState);
  };
  return (
    <div className="card w-50 mt-3 shadow mx-auto">
      <h1 className="card-header">My Phone Book</h1>
      <div className="card-body">
        <div className="mb-2">
          <Button onClick={openForm} />
          <Filter />
        </div>
        {showForm && <ContactForm  data={personContactList}/>}

        <h5 className="card-title mt-2">My Contact List</h5>
        <div className="list-group">
          {personContactList.map((personcontact) => (
            <button
              type="button"
              className="list-group-item list-group-item-action"
              key={personcontact.id}
            >
              {personcontact.name} {personcontact.number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
