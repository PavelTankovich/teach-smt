import { Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { animated, useTransition } from "react-spring";

import { PhraseCard } from "src/components/PhraseCard";
import { useGetCardInfo } from "src/pages/Cards/Learn/hooks/useGetCardInfo";

enum EPaginationDirection {
  RIGHT,
  LEFT,
}

export function Learn(): JSX.Element {
  const [paginationDirection, setPaginationDirection] =
    useState<EPaginationDirection>(EPaginationDirection.RIGHT);

  const {
    isLoading,
    frontSideText,
    backSideText,
    onShowNextCard,
    onShowPreviousCard,
    currentNumber,
    totalCards,
  } = useGetCardInfo();

  const AnimatedPhraseCard = animated(PhraseCard);

  const transitionData = useMemo(
    () => ({
      frontSideText,
      backSideText,
    }),
    [frontSideText, backSideText, currentNumber]
  );

  const [transitions, api] = useTransition(transitionData, () => ({
    from: {
      opacity: 0,
      scale: 0,
      transform: `translate(${
        paginationDirection === EPaginationDirection.RIGHT ? 80 : -80
      }vw, 10vh)`,
    },
    enter: { opacity: 1, scale: 1, transform: "translate(0vw, 0vh)" },
    leave: {
      opacity: 0,
      scale: 0,
      transform: `translate(${
        paginationDirection === EPaginationDirection.RIGHT ? -80 : 80
      }vw, 10vh)`,
    },
  }));

  useEffect(() => {
    if (!isLoading) {
      api.start();
    }
  }, [currentNumber, isLoading]);

  const handleShowNextCard = () => {
    setPaginationDirection(EPaginationDirection.RIGHT);
    onShowNextCard();
  };

  const handleShowPreviousCard = () => {
    setPaginationDirection(EPaginationDirection.LEFT);
    onShowPreviousCard();
  };

  return isLoading ? (
    <Typography variant="h2">Loading....</Typography>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
      }}
    >
      {transitions((style) => (
        <AnimatedPhraseCard
          style={style}
          frontSideText={frontSideText as string}
          backSideText={backSideText as string}
          onShowNextCard={handleShowNextCard}
          onShowPreviousCard={handleShowPreviousCard}
          currentNumber={currentNumber}
          totalCards={totalCards}
        />
      ))}
    </Stack>
  );
}
