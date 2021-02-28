import styled from "styled-components";
import { shadowValues } from "../../../styles/Shadow";
interface Props {
  headerText?: string;
  flexDirection?: "row" | "column";
  height?: string;
  minHeight?: string;
  width?: string;
  minWidth?: string;
  boxShadow?: string;
}
export const FormCon = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.4rem;
  padding: 1rem 4rem;
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : shadowValues)};
  flex-direction: column;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  justify-content: space-between;
  margin: 10px;
`;
const HeaderBox = styled.h2`
  display: flex;
  direction: rtl;
`;
const BodyBox = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

export const Box: React.FC<Props> = ({
  children,
  headerText,
  flexDirection,
  height,
  minHeight,
  width,
  minWidth,
  boxShadow,
}) => {
  return (
    <FormCon
      flexDirection={flexDirection}
      height={height}
      width={width}
      minHeight={minHeight}
      minWidth={minWidth}
      boxShadow={boxShadow}
    >
      {headerText && <HeaderBox>{headerText}</HeaderBox>}
      <BodyBox>{children}</BodyBox>
    </FormCon>
  );
};
