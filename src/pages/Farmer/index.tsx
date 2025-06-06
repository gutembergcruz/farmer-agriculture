import Header from "../Components/Header";
import Table from "../Components/Table";
import Title from "../Components/Title";
import { FarmerContainer } from "./styles";

export default function Farmer() {
  return (
    <FarmerContainer>
      <Header />
      <div className="content">
        <Title title="Produtores" haveButton />
        <Table />
      </div>
    </FarmerContainer>
  );
}
