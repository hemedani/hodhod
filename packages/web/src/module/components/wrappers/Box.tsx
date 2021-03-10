import styled from "styled-components";
import { shadowValues } from "../../../styles/Shadow";

export const Box: React.FC<Props> = ({
  children,
  headerText,
  flexDirection,
  height,
  minHeight,
  width,
  minWidth,
  boxShadow,
  margin,
}) => {
  return (
    <FormCon
      flexDirection={flexDirection}
      height={height}
      width={width}
      minHeight={minHeight}
      minWidth={minWidth}
      boxShadow={boxShadow}
      margin={margin}
    >
      {headerText && <HeaderBox>{headerText}</HeaderBox>}
      <BodyBox
        flexDirection={flexDirection}
        height={height}
        width={width}
        minHeight={minHeight}
        minWidth={minWidth}
        boxShadow={boxShadow}
      >
        {children}
      </BodyBox>
    </FormCon>
  );
};
interface Props {
  headerText?: string;
  flexDirection?: "row" | "column" | "row-reverse";
  height?: string;
  minHeight?: string;
  width?: string;
  minWidth?: string;
  boxShadow?: string;
  margin?: string;
}
export const FormCon = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.4rem;
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : shadowValues)};
  flex-direction: column;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  justify-content: space-between;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const HeaderBox = styled.h2`
  display: flex;
  direction: rtl;
`;
const BodyBox = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  height: ${(props) => props.height};
  /* width: ${(props) => props.width}; */
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
`;
