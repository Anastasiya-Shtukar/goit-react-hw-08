import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";
import toast, { Toaster } from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .min(100, "Too Short!")
    .max(10000000, "Too Long!")
    .required("Required"),
});

const notify = () => toast("Oops, looks like contact already exists");
const addSuccess = () => toast("A new contact has been added");

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const contactName = contacts.map((contact) => contact.name);

  const handleSubmit = (values, actions) => {
    if (contactName.includes(values.name)) {
      notify();
    } else {
      dispatch(addContact(values));
      addSuccess();
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
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
          <Field type="text" name="number" className={css.input} />
        </div>
        <ErrorMessage name="number" as="span" className={css.error} />
        <button type="submit" className={css.button}>
          Add contact
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
};

export default ContactForm;
