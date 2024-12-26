import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    console.log(contact.id);
  };

  return (
    <div className={css.contactDiv}>
      <div>
        <div className={css.person}>
          <IoPersonSharp />
          <p>{contact.name}</p>
        </div>
        <div className={css.person}>
          <FaPhone />
          <p>{contact.phone}</p>
        </div>
      </div>
      <button className={css.buttonDelete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
