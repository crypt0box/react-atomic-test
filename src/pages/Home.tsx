import styled from "styled-components";
import { MuiButton } from "src/components/atoms/Button/Button";
import { Flex } from "src/components/atoms/Flex/Flex";
import { useForm } from "react-hook-form";
import { SubmitForm } from "src/components/molecules/SubmitForm/SubmitForm";
import { useEffect } from "react";

type Form = {
  comment: string;
};

const StyledButton = styled(MuiButton)`
  background-color: var(--color-main);
`;

export const Home = () => {
  const { control, watch } = useForm<Form>({
    defaultValues: {
      comment: "",
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <h2>Home</h2>
      <Flex flexDirection="column" gap="16px">
        <StyledButton variant="outlined">ボタン</StyledButton>
      </Flex>
      <SubmitForm name="comment" control={control} />
    </>
  );
};
