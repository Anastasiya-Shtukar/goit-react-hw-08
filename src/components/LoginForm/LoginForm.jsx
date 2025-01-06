import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <p>Email</p>
          <Field type="email" name="email" />
        </div>
        <div>
          <p>Password</p>
          <Field type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
