// Definimos una interfaz para los elementos del menú
interface MenuItem {
  Title: string;
  url: string;
  cName: string;
}

// Creamos los elementos del menú con el tipo correcto
export const MenuItems: MenuItem[] = [
  {
    Title: "Home",
    url: "/home",
    cName: "nav-links"
  },
  {
    Title: "Repository",
    url: "/repository",
    cName: "nav-links"
  },
  {
    Title: "About Us",
    url: "/aboutus",
    cName: "nav-links"
  },
  {
    Title: "User",
    url: "account",
    cName: "nav-links"
  }
];
  