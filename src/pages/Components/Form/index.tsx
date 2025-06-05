
import Input from "../Input";
import { FormContainer } from "./styles";

export default function Form() {
  return (
    <FormContainer>
      <p>🧑‍🌾 Seção: Dados do Produtor Rural</p>
      <div className="row">
        <Input
          type="select"
          label="Tipo do documento"
          value=""
          onChangeValue={() => {}}
        >
          <option value="1">CPF</option>
          <option value="2">CNPJ</option>
        </Input>
        <Input
          label="CPF ou CNPJ"
          type="text"
          value=""
          onChangeValue={() => {}}
        />
      </div>
      <div className="row">
        <Input
          label="Nome do produtor"
          type="text"
          value=""
          onChangeValue={() => {}}
        />
      </div>
      <div className="row">
        <Input type="select" label="Estado" value="" onChangeValue={() => {}}>
          <option value="AM">AM</option>
          <option value="MT">MT</option>
          <option value="PR">PR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
        </Input>
        <Input type="select" label="Cidade" value="" onChangeValue={() => {}}>
          <option value="1">Manaus</option>
          <option value="2">Para</option>
        </Input>
      </div>
      <p>🏡 Seção: Dados da Propriedade Rural</p>
      <div className="row">
        <Input
          label="Nome da Fazenda"
          type="text"
          value=""
          onChangeValue={() => {}}
        />
      </div>
      <div className="row">
        <Input
          label="Área Total (ha)"
          type="text"
          value=""
          onChangeValue={() => {}}
        />
        <Input
          label="Área Agriculturável (ha)"
          type="text"
          value=""
          onChangeValue={() => {}}
        />
        <Input
          label="Área de Vegetação (ha)"
          type="text"
          value=""
          onChangeValue={() => {}}
        />
      </div>
      <p>🌱 Seção: Cultura Plantada</p>
      <div className="row">
        <Input label="Safra" type="text" value="" onChangeValue={() => {}} />
        <Input
          type="select"
          label="Cultura Plantada"
          value=""
          onChangeValue={() => {}}
        >
          <option value="1">Milho</option>
          <option value="2">Café</option>
          <option value="3">Cevada</option>
        </Input>
      </div>
      <div className="row">
        <Input
          label="Observações"
          type="text"
          value=""
          onChangeValue={() => {}}
        />
      </div>
    </FormContainer>
  );
}
