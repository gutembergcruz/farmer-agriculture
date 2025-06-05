import { TitleContainer } from "./styles";

interface TitleProps {
  haveButton?: boolean;
}

export default function Title({ haveButton }: TitleProps) {
  return (
    <TitleContainer>
      <h2>Dashboard</h2>
      {haveButton && <button>NovoProdutor</button>}
    </TitleContainer>
  );
}
