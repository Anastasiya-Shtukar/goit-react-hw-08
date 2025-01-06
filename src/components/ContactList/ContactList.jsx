import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectOpenModale,
  selectStatusFilter,
} from "../../redux/selectors.js";
import { DeleteModale } from "../DeleteModal/DeleteModal";

const getFilterContact = (contacts, filterContact) => {
  if (filterContact !== "") {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterContact.toLowerCase()) ||
        contact.number.toLowerCase().includes(filterContact.toLowerCase())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectStatusFilter);
  const filterContact = getFilterContact(contacts, filter);

  const isOpenModale = useSelector(selectOpenModale);

  return (
    <ul className={css.list}>
      {filterContact.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
      {isOpenModale && <DeleteModale contact={contacts} />}
    </ul>
  );
};

export default ContactList;
