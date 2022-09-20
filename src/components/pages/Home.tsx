import styled from "styled-components";
import { MuiButton } from "src/components/atoms/button/Button";
import { Flex } from "src/components/atoms/flex/Flex";
import { useForm } from "react-hook-form";
import { SubmitForm } from "src/components/molecules/submitForm/SubmitForm";
import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RhfTextField } from "src/components/atoms/textFiled/RhfTextField";

const StyledButton = styled(MuiButton)`
  background-color: var(--color-main);
`;

const schema = z.object({
  comment: z.string().min(1, { message: "Required" }),
});

type Form = z.infer<typeof schema>;

export const Home = () => {
  const { control, watch } = useForm<Form>({
    defaultValues: {
      comment: "",
    },
    resolver: zodResolver(schema),
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
      <RhfTextField name="comment" control={control} />
    </>
  );
};
