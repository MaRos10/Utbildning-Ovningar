import { useState } from "react";
import ContactList from "./components/ContactList";
import EditContactForm from "./components/EditContact";
import "./index.css";
import { Contact } from "./types/types";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContactName, setNewContactName] = useState<string>("");
  const [newContactPhone, setNewContactPhone] = useState<string>("");
  const [newContactEmail, setNewContactEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
    setEditingContact(null);
  }

  // Ta bort kontakt
  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <main>
      <h1>Contact List</h1>
      <article className="filterWrapper">
        <input
          className="filterInput"
          type="text"
          placeholder="Search contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </article>
      <section className="contactList">
        {/* Visa redigeringsformulär om editingContact är satt */}
        {editingContact ? (
          <EditContactForm contact={editingContact} saveContact={editContact} />
        ) : (
          // Annars visa listan med kontakter och formulär för att lägga till nya kontakter
          <>
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
              contacts={contacts.filter((contact) =>
                contact.name.toLowerCase().includes(searchTerm.toLowerCase())
              )}
              deleteContact={deleteContact}
              editContact={(contact) => setEditingContact(contact)} // Sätt kontakt för redigering
            />
          </>
        )}
      </section>
    </main>
  );
}

export default App;
