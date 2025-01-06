import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <div>
      <Navigation className={css.navgation} />
      <Suspense fallback={<p className={css.loading}>Loading...</p>}>
        {children}
      </Suspense>
    </div>
  );
}
