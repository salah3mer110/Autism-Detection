import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="container mx-auto flex justify-between items-center py-5 px-6">
      <a href="#">
        <h1 className="text-[32px] font-extrabold text-[var(--secondary)]">
          Bright <em className="not-italic text-[var(--quartery)] ">Path</em>
        </h1>
      </a>
      <ul className="hidden w-[505px] md:flex justify-around space-x-6 font-semibold">
        <li className="nav-link group">
          <Link className="relative" to="/">
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="nav-link group">
          <a href="#" className="relative">
            Activities
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="nav-link group">
          <Link className="relative" to="/AboutUs">
            About us
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="nav-link group">
          <Link className="relative" to="/ContactUs">
            Contact us
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>
      <button className="font-semibold p-2 text-[var(--teriary)] border-2 border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-200">
        Sign in
      </button>
    </nav>
  );
}

export default Header;
