import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const contactName = contacts.map((contact) => contact.name);

  const handleSubmit = (values, actions) => {
    if (contactName.includes(values.name)) {
      alert("Oops, looks like contact already exists");
    } else {
      dispatch(addContact(values));
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <div>
          <p>Name</p>
          <Field type="text" name="name" className={css.input} />
        </div>
        <ErrorMessage name="name" as="span" className={css.error} />
        <div>
          <p>Number</p>
          <Field type="number" name="phone" className={css.input} />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
