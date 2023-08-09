import ImageComponent from "./ui/image";
import logo from "../assets/logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header contenedor">
      <div className="header__logo">
        <a href="#">
          <ImageComponent imageUrl={logo} alt="logo" />
        </a>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
