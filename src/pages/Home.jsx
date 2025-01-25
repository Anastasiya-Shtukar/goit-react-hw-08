import DocumentTitle from "../components/DocumentTitle";
import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.home}>Welcome to my contacts app</div>
    </>
  );
}
