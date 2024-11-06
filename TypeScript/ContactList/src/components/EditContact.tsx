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
    <div>
      <input
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <input
        value={editedPhone}
        onChange={(e) => setEditedPhone(e.target.value)}
      />
      <input
        value={editedEmail}
        onChange={(e) => setEditedEmail(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
