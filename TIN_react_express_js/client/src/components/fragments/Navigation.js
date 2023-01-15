import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/drivers">Kierowcy</Link>
        </li>
        <li>
          <Link to="/transits">Przejazdy</Link>
        </li>
        <li>
          <Link to="/vehicles">Pojazdy</Link>
        </li>
      </ul>
    </nav>
  );
}
