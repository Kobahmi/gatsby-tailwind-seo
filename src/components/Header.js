import { Link } from "gatsby";
import * as React from "react";

const Header = () => (
  <section className="absolute w-full z-20 text-white">
    <nav className="flex flex-col justify-between items-center p-6 sm:flex-row">
      <Link to="/" className="text-2xl font-bold">
        playground.
      </Link>
      <ul className="flex gap-4 text-ll font-bold pt-6 sm:pt-0">
        <li>
          <Link
            to="/anchor"
            className="rounded px-2 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Anchor
          </Link>
        </li>
        <li>
          <Link
            to="/parallax"
            className="rounded px-2 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Parallax
          </Link>
        </li>
        <li>
          <Link
            to="/media"
            className="rounded px-2 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Media
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default Header;
