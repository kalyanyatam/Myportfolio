import logo from '../assets/pictures/kalyan-logo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ml-[-110px]"> 
        <img src={logo} alt="logo" className="w-20 h-auto" />
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/kalyan-yatam-583940280" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kalyanyatam" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/kalyan_yatam" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/chinnuyatam" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="mailto:kalyanyatam09@gmail.com">
          <BiLogoGmail />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
