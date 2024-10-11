import './Navbar.css';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';

// Definimos una interfaz para los elementos del menú
interface MenuItem {
  Title: string;
  url: string;
  cName: string;
}

export default function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-logo">Plataforma Genómica</h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item: MenuItem, index: number) => {
          return (
            <Link className={item.cName} to={item.url}>
              <li key={index}>
              
                {item.Title}
              
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}