import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/operations";
import css from "../LoginForm/LoginForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div>
          <p>Name</p>
          <Field type="text" name="name" />
        </div>
        <div>
          <p>Email</p>
          <Field type="email" name="email" />
        </div>
        <div>
          <p>Password</p>
          <Field type="password" name="password" />
        </div>
        <button type="submit" className={css.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
}
