import { TitleContainer } from "./styles";

interface TitleProps {
  haveButton?: boolean;
  title: string;
}

export default function Title({ haveButton, title }: TitleProps) {
  return (
    <TitleContainer>
      <h2>{title}</h2>
      {haveButton && <button>NovoProdutor</button>}
    </TitleContainer>
  );
}
