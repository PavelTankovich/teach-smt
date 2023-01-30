import { Theme } from "@mui/material/styles";
import { CSSProperties } from "react";
import { Card as MuiCard, CardActions, Button, Stack } from "@mui/material";

import { CardContent } from "src/components/PhraseCard/components/CardSide/components/CardContent";
import { useCardInfo } from "src/components/PhraseCard/contexts/CardInfo";

interface ICardSideProps {
  isFront?: boolean;
  isBack?: boolean;
  sideStyles?: (theme: Theme) => CSSProperties;
  style: CSSProperties;
}

export function CardSide({
  isFront,
  isBack,
  sideStyles,
  style,
}: ICardSideProps): JSX.Element {
  const { onShowPreviousCard, onShowNextCard, currentNumber, totalCards } =
    useCardInfo();

  return (
    <MuiCard
      style={style}
      sx={(theme) => ({
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        height: "100%",
        width: "100%",
        willChange: "transform, opacity",
        ...(sideStyles ? sideStyles(theme) : {}),
      })}
    >
      <CardContent isFront={isFront} isBack={isBack} />
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            width: "100%",
          }}
        >
          <Button
            size="small"
            onClick={onShowPreviousCard}
            disabled={currentNumber === 1}
          >
            Previous
          </Button>
          <Button
            size="small"
            onClick={onShowNextCard}
            disabled={currentNumber === totalCards}
          >
            Next
          </Button>
        </Stack>
      </CardActions>
    </MuiCard>
  );
}
