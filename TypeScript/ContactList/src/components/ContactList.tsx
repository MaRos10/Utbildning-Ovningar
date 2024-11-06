import { Contact } from "../types/types";

interface ContactListProps {
  contacts: Contact[];
  // Funktioner som skickas som props till ContactList
  deleteContact: (id: number) => void;
  editContact: (contact: Contact) => void;
}

function ContactList(props: ContactListProps) {
  function handleDelete(id: number) {
    props.deleteContact(id);
  }

  function handleEdit(contact: Contact) {
    props.editContact(contact);
  }

  return (
    <ul>
      {props.contacts.map((contact) => (
        /* contact.id används som unik nyckel för varje listobjekt */
        <li key={contact.id}>
          <span>
            {contact.name} - {contact.phone} - {contact.email}
          </span>
          {/* Anropar resp funktion och skickar kontaktens id som argument för att ändra/ta bort kontakten */}
          <button
            className="editContactBtn"
            onClick={() => handleEdit(contact)}
          >
            Edit
          </button>
          <button
            className="deleteContactBtn"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
