import styled from "styled-components";
export type inpType = "email" | "password" | "number" | "text";
export const CardElement = styled.div`
  display: flex;
  margin: 10px 10px 30px 10px;

  /* border: 1px solid red; */
`;
interface Props {
  name?: string;
  placeholder?: string;
  dir?: string;
  type?: inpType;
  onClick?: () => any;
  onChange?: () => any;
}
export const TextInput = styled.input.attrs((props) => ({
  type: props.type,
  onChange: props.onChange,
}))`
  margin-left: 6rem;
  width: 100%;
  border: none;
  direction: rtl;
  border-bottom: 1px solid;
  font-family: "vazir";
  font-weight: 900;
  border-bottom-color: #929292;
  ::placeholder {
    color: #929292;
  }
  &:hover {
    border-width: 2px;
    transition: 0.2s;
  }

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: #929292;
    box-shadow: 0px 0px 2px white;
  }
`;

export const Input: React.FC<Props> = ({ dir, placeholder, type, name }) => {
  return (
    <CardElement>
      <TextInput type={type} dir={dir} placeholder={placeholder} name={name} />
    </CardElement>
  );
};
