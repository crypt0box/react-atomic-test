import styled from "styled-components";

type FlexProps = {
  flexDirection: "row" | "column";
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap: string;
};

export const Flex = styled.div<Partial<FlexProps>>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`;

Flex.defaultProps = {
  flexDirection: "row",
};
