import { Stack, Typography } from "@mui/material";

import { PhraseCard } from "src/components/PhraseCard";
import {
  IUseGetCardInfoReturn,
  useGetCardInfo,
} from "src/pages/Cards/Learn/hooks/useGetCardInfo";

export function Learn(): JSX.Element {
  const cardInfo = useGetCardInfo();

  if (cardInfo.isLoading) {
    return <Typography variant="h2">Loading....</Typography>;
  }

  const {
    frontSideText,
    backSideText,
    onShowNextCard,
    onShowPreviousCard,
    currentNumber,
    totalCards,
  } = cardInfo as IUseGetCardInfoReturn;

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
      }}
    >
      <PhraseCard
        frontSideText={frontSideText}
        backSideText={backSideText}
        onShowNextCard={onShowNextCard}
        onShowPreviousCard={onShowPreviousCard}
        currenNumber={currentNumber}
        totalCards={totalCards}
      />
    </Stack>
  );
}
