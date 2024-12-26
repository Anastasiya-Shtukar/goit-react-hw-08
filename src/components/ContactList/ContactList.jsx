import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectStatusFilter } from "../../redux/selectors.js";

const getFilterContact = (contacts, filterContact) => {
  if (filterContact !== "") {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const filterContact = getFilterContact(contacts, filter);

  return (
    <ul className={css.list}>
      {filterContact.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
