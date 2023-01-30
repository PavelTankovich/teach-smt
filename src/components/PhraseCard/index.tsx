import { alpha, Stack } from "@mui/material";
import { CSSProperties, useMemo, useState } from "react";
import { animated, useSpring } from "react-spring";

import { CardSide } from "src/components/PhraseCard/components/CardSide";
import { CardInfoProvider } from "src/components/PhraseCard/contexts/CardInfo";
import { ICardFormValues } from "src/components/PhraseCard/types/interfaces/CardFormValues.interface";

interface IPhraseCardProps {
  frontSideText: string;
  backSideText: string;
  onShowNextCard: VoidFunction;
  onShowPreviousCard: VoidFunction;
  currentNumber: number;
  totalCards: number;
  style: CSSProperties;
}

export function PhraseCard({
  frontSideText,
  backSideText,
  onShowNextCard,
  onShowPreviousCard,
  currentNumber,
  totalCards,
  style,
}: IPhraseCardProps): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isValidCard, setIsValidCard] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(900px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 300, friction: 60 },
  });

  const AnimatedCardSide = animated(CardSide);
  const AnimatedStack = animated(Stack);

  const handleFlipCard = () => {
    setIsFlipped((prevState) => !prevState);
  };
  const handleCardValidation = ({ userText }: ICardFormValues) => {
    const isValid = userText === backSideText;

    setIsValidCard(isValid);
    handleFlipCard();
  };

  const cardInfo = useMemo(() => {
    return {
      frontSideText,
      backSideText,
      currentNumber,
      totalCards,
      onShowNextCard,
      onShowPreviousCard,
      onFlipCard: handleFlipCard,
      onCardValidation: handleCardValidation,
    };
  }, [frontSideText, backSideText, currentNumber, isFlipped]);

  return (
    <AnimatedStack
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "absolute",
        width: "30rem",
        height: "20rem",
      }}
      style={style}
    >
      <CardInfoProvider {...cardInfo}>
        <AnimatedCardSide
          isFront
          style={{
            opacity: opacity.to((o) => 1 - o * 3),
            transform,
          }}
          sideStyles={() => ({
            zIndex: !isFlipped ? 1 : 0,
          })}
        />
        <AnimatedCardSide
          isBack
          style={{ opacity, transform, rotateY: "180deg" }}
          sideStyles={(theme) => ({
            zIndex: isFlipped ? 1 : 0,
            backgroundColor: alpha(
              isValidCard
                ? theme.palette.success.main
                : theme.palette.error.main,
              0.2
            ),
          })}
        />
      </CardInfoProvider>
    </AnimatedStack>
  );
}
