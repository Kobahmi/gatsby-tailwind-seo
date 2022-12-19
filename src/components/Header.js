import { Link } from "gatsby";
import * as React from "react";

const Header = () => (
  <section className="absolute w-full z-20 text-white">
    <nav className="flex flex-col justify-between items-center p-6 sm:flex-row">
      <Link to="/" className="text-4xl font-bold">
        playground.
      </Link>
      <ul className="flex gap-2 text-sm font-bold pt-6 sm:pt-0 sm:gap-4 sm:text-lg">
        <li>
          <Link
            to="/anchor"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Anchor
          </Link>
        </li>
        <li>
          <Link
            to="/parallax"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Parallax
          </Link>
        </li>
        <li>
          <Link
            to="/animated"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Animated
          </Link>
        </li>
        <li>
          <Link
            to="/everything"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Everything
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default Header;
