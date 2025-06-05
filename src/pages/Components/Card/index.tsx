import { CardContainer } from "./styles";

interface CardProps{
    typeIsHec?: boolean;
    value: string | number;
}

export default function Card({ typeIsHec, value }: CardProps) {
    return(
        <CardContainer className={typeIsHec ? 'hec' : ''}>
            <h4>{typeIsHec ? 'Total Hectares' : 'Total de fazendas'}</h4>
            <p>{value}</p>
        </CardContainer>
    )
}