import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
} from "@mui/material";

interface INewCardDialogProps {
  open: boolean;
  onClose: VoidFunction;
}

export function NewCardDialog({
  open,
  onClose,
}: INewCardDialogProps): JSX.Element {
  const [phrase, setPhrase] = useState("");
  const [translation, setTranslation] = useState("");

  const handlePhraseChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setPhrase(value);
  };

  const handleTranslationChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTranslation(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phrase,
        translation,
      }),
    });
  };

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogContent>
        <Stack
          id="create-card"
          component="form"
          onSubmit={handleSubmit}
          spacing={2}
        >
          <TextField
            name="Phrase"
            label="Phrase"
            value={phrase}
            onChange={handlePhraseChange}
          />
          <TextField
            name="Translation"
            label="Translation"
            value={translation}
            onChange={handleTranslationChange}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button type="submit" form="create-card">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
