import styled from "styled-components";
import { MuiButton } from "src/components/atoms/button/Button";
import { Flex } from "src/components/atoms/flex/Flex";
import { SubmitHandler, useForm } from "react-hook-form";
import { SubmitForm } from "src/components/molecules/submitForm/SubmitForm";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RhfTextField } from "src/components/atoms/textFiled/RhfTextField";
import { Button, TextField } from "@mui/material";
import { RhfDatePicker } from "src/components/atoms/datePicker/RhfDatePicker";
import { DatePicker } from "@mui/x-date-pickers";

const schema = z.object({
  comment: z.string().min(1, { message: "Required" }),
  date: z.date().optional(),
});

type Form = z.infer<typeof schema>;

export const Home = () => {
  const { control, watch, handleSubmit, reset } = useForm<Form>({
    defaultValues: {
      comment: "",
      date: undefined,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Form> = (data) => console.log(data);

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RhfTextField name="comment" control={control} />
        <RhfDatePicker name="date" control={control} />
        <Button type="submit">送信</Button>
        <Button
          onClick={() => {
            reset();
          }}
        >
          リセット
        </Button>
      </form>
    </>
  );
};
