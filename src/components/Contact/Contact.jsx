import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { openModale } from "../../redux/openModalDelete";
import { selectOpenModale } from "../../redux/selectors";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const toggleModal = () => {
    dispatch(openModale(contact.id));
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
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={css.buttonDelete} onClick={toggleModal}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
