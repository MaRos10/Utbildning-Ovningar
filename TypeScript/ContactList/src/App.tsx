import { useState } from "react";
import ContactList from "./components/ContactList";
import "./index.css";
import { Contact } from "./types/types";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContactName, setNewContactName] = useState<string>("");
  const [newContactPhone, setNewContactPhone] = useState<string>("");
  const [newContactEmail, setNewContactEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const addContact = () => {
    // Validera email
    if (!validateEmail(newContactEmail)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError(""); // Återställ felmed om email är giltig
    }

    const newContact: Contact = {
      id: Date.now(),
      name: newContactName,
      phone: newContactPhone,
      email: newContactEmail,
    };
    setContacts([...contacts, newContact]);
    setNewContactName("");
    setNewContactPhone("");
    setNewContactEmail("");
  };

  // Validera mail
  function validateEmail(email: string): boolean {
    if (email === "") {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  // Uppdatera kontakt
  function editContact(updatedContact: Contact) {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  }

  // Ta bort kontakt
  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <main>
      <h1>Contact List</h1>
      <section className="contactList">
        <input
          type="text"
          placeholder="Name"
          value={newContactName}
          onChange={(e) => setNewContactName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={newContactPhone}
          onChange={(e) => setNewContactPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={newContactEmail}
          onChange={(e) => setNewContactEmail(e.target.value)}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <button className="addContactBtn" onClick={addContact}>
          Add Contact
        </button>
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      </section>
    </main>
  );
}

export default App;
