import { Theme } from "@mui/material/styles";
import { SystemStyleObject } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { CSSProperties } from "react";
import { Card as MuiCard, CardActions, Button, Stack } from "@mui/material";

import { CardContent } from "src/components/PhraseCard/components/CardSide/components/CardContent";
import { useCardInfo } from "src/components/PhraseCard/contexts/CardInfo";

interface ICardSideProps {
  isFront?: boolean;
  isBack?: boolean;
  sideStyles?: (theme: Theme) => SystemStyleObject<Theme>;
  style: CSSProperties;
}

export function CardSide({
  isFront,
  isBack,
  sideStyles,
  style,
}: ICardSideProps): JSX.Element {
  const { onShowPreviousCard, onShowNextCard, currenNumber, totalCards } =
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
      {/* <Stack justifyContent="center" alignItems="center"> */}
      {/*  <Typography */}
      {/*    variant="h5" */}
      {/*    component="h2" */}
      {/*    sx={{ */}
      {/*      flexGrow: 1, */}
      {/*      display: "flex", */}
      {/*      alignItems: "center", */}
      {/*      justifyContent: "center", */}
      {/*    }} */}
      {/*  > */}
      {/*    {isFront && frontSideText} */}
      {/*    {isBack && backSideText} */}
      {/*  </Typography> */}
      {/* </Stack> */}
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
            disabled={currenNumber === 1}
          >
            Previous
          </Button>
          <Button
            size="small"
            onClick={onShowNextCard}
            disabled={currenNumber === totalCards}
          >
            Next
          </Button>
        </Stack>
      </CardActions>
    </MuiCard>
  );
}
