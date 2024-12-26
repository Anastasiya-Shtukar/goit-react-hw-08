import "./app.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState, useEffect } from "react";
import SearchBox from "./components/SesrchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { fetchContacts } from "./redux/operations.js";
import { useDispatch, useSelector } from "react-redux";

export function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {loading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </>
  );
}
