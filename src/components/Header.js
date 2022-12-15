import * as React from "react";

const Header = () => (
  <section className="absolute w-full z-20 text-white">
    <nav className="flex flex-col justify-between items-center p-6 sm:flex-row">
      <div className="text-2xl font-bold">playground.</div>
      <ul className="flex gap-4 text-ll font-bold pt-6 sm:pt-0">
        <li>
          <a
            href="#"
            className="rounded px-2 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="rounded px-2 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="rounded px-2 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            Account
          </a>
        </li>
      </ul>
    </nav>
  </section>
);

export default Header;
