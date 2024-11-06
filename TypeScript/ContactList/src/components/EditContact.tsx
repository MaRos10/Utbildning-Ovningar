import { useState } from "react";
import { Contact } from "../types/types";

interface EditContactFormProps {
  contact: Contact;
  saveContact: (contact: Contact) => void;
}

function EditContactForm({ contact, saveContact }: EditContactFormProps) {
  const [editedName, setEditedName] = useState<string>(contact.name);
  const [editedPhone, setEditedPhone] = useState<string>(contact.phone);
  const [editedEmail, setEditedEmail] = useState<string>(contact.email);

  function handleSave() {
    saveContact({
      ...contact,
      name: editedName,
      phone: editedPhone,
      email: editedEmail,
    });
  }

  return (
    <div className="editFormWrapper">
      <section className="editForm">
        <input
          value={editedName}
          placeholder="Name"
          onChange={(e) => setEditedName(e.target.value)}
        />
        <input
          value={editedPhone}
          placeholder="Phone"
          onChange={(e) => setEditedPhone(e.target.value)}
        />
        <input
          value={editedEmail}
          placeholder="Email"
          onChange={(e) => setEditedEmail(e.target.value)}
        />
        <button className="saveBtn" onClick={handleSave}>
          Save
        </button>
      </section>
    </div>
  );
}

export default EditContactForm;
