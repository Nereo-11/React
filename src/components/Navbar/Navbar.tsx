import './Navbar.css';
import { MenuItems } from "./MenuItems";

// Definimos una interfaz para los elementos del menú
interface MenuItem {
  Title: string;
  url: string;
  cName: string;
}

export default function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item: MenuItem, index: number) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}