import { scrollToSection } from '../utils/scrollToSection';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
    <ul className="flex space-x-4">
      <li>
        <button onClick={() => scrollToSection('hero')} className="hover:text-gray-400">
          Home
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('about')} className="hover:text-gray-400">
          About
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('projects')} className="hover:text-gray-400">
          Projects
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400">
          Contact
        </button>
      </li>
    </ul>
  </nav>
);


export default Navbar;
