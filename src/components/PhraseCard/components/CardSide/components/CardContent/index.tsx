import {
  Button,
  CardContent as MuiCardContent,
  Stack,
  Typography,
} from "@mui/material";

import { CardForm } from "src/components/PhraseCard/components/CardSide/components/CardContent/components/CardForm";
import { useCardInfo } from "src/components/PhraseCard/contexts/CardInfo";

interface ICardContentProps {
  isFront?: boolean;
  isBack?: boolean;
}

export function CardContent({
  isFront,
  isBack,
}: ICardContentProps): JSX.Element {
  const { frontSideText, backSideText, currentNumber, totalCards, onFlipCard } =
    useCardInfo();

  return (
    <MuiCardContent
      sx={{
        flexGrow: 1,
      }}
    >
      <Stack sx={{ height: "100%" }}>
        <Stack direction="row" justifyContent="center">
          <Typography>
            {currentNumber} / {totalCards}
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isFront && frontSideText}
            {isBack && backSideText}
          </Typography>
          <Stack
            sx={{
              height: "3rem",
            }}
          >
            {isFront && <CardForm />}
            {isBack && (
              <Button
                size="small"
                onClick={() => onFlipCard()}
                sx={{
                  alignSelf: "flex-end",
                }}
              >
                Back
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </MuiCardContent>
  );
}
