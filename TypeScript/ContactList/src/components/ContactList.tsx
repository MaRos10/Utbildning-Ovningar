import { Contact } from "../types/types";

interface ContactListProps {
  contacts: Contact[];
  // Funktioner som skickas som props till ContactList
  deleteContact: (id: number) => void;
  editContact: (id: number) => void;
}

function ContactList(props: ContactListProps) {
  function handleDelete(id: number) {
    props.deleteContact(id);
  }

  function handleEdit(id: number) {
    props.editContact(id);
  }

  return (
    <ul>
      {props.contacts.map((contact) => (
        /* contact.id används som unik nyckel för varje listobjekt */
        <li key={contact.id}>
          <span>
            {contact.name} - {contact.phone} - {contact.email}
          </span>
          {/* Anropar handleDelete och skickar kontaktens id som argument för att ta bort kontakten */}
          <button
            className="deleteContactBtn"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
          <button
            className="editContactBtn"
            onClick={() => handleEdit(contact.id)}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
