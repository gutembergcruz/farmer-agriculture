import { InputContainer } from "./styles";

interface InputProps {
  label?: string;
  type?: string;
  value: string | number;
  onChangeValue: (event: string) => void;
  children?: React.ReactNode;
}

function renderInput({
  type,
  label,
  value,
  onChangeValue,
  children,
}: InputProps) {
  switch (type) {
    case "select":
      return (
        <>
          <label>{label}</label>
          <select onChange={(e) => onChangeValue(e.target.value)}>{children}</select>
        </>
      );
    default:
      return (
        <>
          <label>{label}</label>
          <input type={type} value={value} onChange={(e) => onChangeValue(e.target.value)} />
        </>
      );
  }
}

export default function Input({
  label,
  type,
  value,
  onChangeValue,
  children,
}: InputProps) {
  return (
    <InputContainer>
      {renderInput({
        type,
        label,
        value,
        onChangeValue,
        children,
      } as InputProps)}
    </InputContainer>
  );
}
