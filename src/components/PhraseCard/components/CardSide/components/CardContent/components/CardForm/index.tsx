import { useForm } from "react-hook-form";
import { Box, Button, Grid, TextField } from "@mui/material";

import { useCardInfo } from "src/components/PhraseCard/contexts/CardInfo";
import { ICardFormValues } from "src/components/PhraseCard/types/interfaces/CardFormValues.interface";

export function CardForm(): JSX.Element {
  // TODO: add validations
  const { onCardValidation } = useCardInfo();
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<ICardFormValues>();

  return (
    <Box component="form" onSubmit={handleSubmit(onCardValidation)}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Enter translation"
            variant="standard"
            inputProps={{
              ...register("userText", {
                required: {
                  value: true,
                  message: "The field is required",
                },
              }),
            }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="submit"
            size="small"
            sx={{
              alignSelf: "flex-end",
            }}
            disabled={!isValid}
          >
            Check
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
