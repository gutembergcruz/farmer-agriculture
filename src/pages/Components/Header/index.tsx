import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logoImg from "../../../assets/logo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/farmer">Produtores</Link>
        </nav>
      </div>
    </HeaderContainer>
  );
}
