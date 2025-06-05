import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

export default function Header() {
  return <HeaderContainer>
    <div className="logo">

    </div>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/farmer">Produtores</Link>
    </nav>
  </HeaderContainer>;
}
