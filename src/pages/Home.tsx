import styled from "styled-components";
import { MuiButton } from "src/components/atoms/Button/Button";
import { Flex } from "src/components/atoms/Flex/Flex";

const StyledButton = styled(MuiButton)`
  background-color: var(--color-main);
`;

export const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Flex flexDirection="column" gap="16px">
        <StyledButton variant="outlined">ボタン</StyledButton>
      </Flex>
    </>
  );
};
