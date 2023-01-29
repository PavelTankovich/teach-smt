import { useEffect, useState } from "react";

import { useGetCurrentCardsMode } from "src/context/ModeProvider";
import { useGetCard } from "src/pages/Cards/Learn/hooks/queries/useGetCard";
import { getRandomNumberFromRange } from "src/utils/getRandomNumberFromRange";
import { getCardTextProps } from "src/pages/Cards/Learn/hooks/useGetCardInfo/utils/getCardTextProps";

interface ICard {
  frontSideText: string;
  backSideText: string;
}

export interface IUseGetCardInfoReturnForLoading {
  isLoading: boolean;
}

export interface IUseGetCardInfoReturn extends ICard {
  isLoading: boolean;
  onShowNextCard: () => void;
  onShowPreviousCard: () => void;
  currentNumber: number;
  totalCards: number;
}

export function useGetCardInfo():
  | IUseGetCardInfoReturnForLoading
  | IUseGetCardInfoReturn {
  const mode = useGetCurrentCardsMode();
  const [pagination, setPagination] = useState({
    currentNumber: 0,
    total: 0,
  });
  const [currentCard, setCurrentCard] = useState<ICard | undefined>(undefined);
  const [cardNumbers, setCardNumbers] = useState<number[]>([]);
  const { data: cards, isLoading } = useGetCard();

  useEffect(() => {
    if (cards && cards.length > 0) {
      const indexes: number[] = [];
      const randomFn = getRandomNumberFromRange(0, cards.length - 1);

      for (let i = 0; i <= cards.length - 1; i++) {
        indexes.push(randomFn());
      }

      setCardNumbers(indexes);
      setCurrentCard(
        getCardTextProps({
          mode,
          ...cards[indexes[0]],
        })
      );
      setPagination((prevState) => ({
        ...prevState,
        currentNumber: 0,
        total: cards.length,
      }));
    }
  }, [cards]);

  const onShowNextCard = () => {
    if (cards && pagination.currentNumber < cards.length - 1) {
      const next = pagination.currentNumber + 1;

      setPagination((prevState) => ({
        ...prevState,
        currentNumber: next,
      }));
      setCurrentCard(
        getCardTextProps({
          mode,
          ...cards[cardNumbers[next]],
        })
      );
    }
  };

  const onShowPreviousCard = () => {
    if (cards && pagination.currentNumber > 0) {
      const previous = pagination.currentNumber - 1;

      setPagination((prevState) => ({
        ...prevState,
        currentNumber: previous,
      }));
      setCurrentCard(
        getCardTextProps({
          mode,
          ...cards[cardNumbers[previous]],
        })
      );
    }
  };

  return isLoading
    ? { isLoading }
    : {
        isLoading,
        ...currentCard,
        currentNumber: pagination.currentNumber + 1,
        totalCards: pagination.total,
        onShowNextCard,
        onShowPreviousCard,
      };
}
