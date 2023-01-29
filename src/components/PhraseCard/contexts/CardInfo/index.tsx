import { createContext, PropsWithChildren, useContext, useMemo } from "react";

import { ICardFormValues } from "src/components/PhraseCard/types/interfaces/CardFormValues.interface";

interface ICardInfoProps {
  frontSideText: string;
  backSideText: string;
  currenNumber: number;
  totalCards: number;
  onShowNextCard: VoidFunction;
  onShowPreviousCard: VoidFunction;
  onFlipCard: VoidFunction;
  onCardValidation: (params: ICardFormValues) => void;
}

const CardInfoContext = createContext<ICardInfoProps>({} as ICardInfoProps);

export function CardInfoProvider({
  children,
  ...props
}: PropsWithChildren<ICardInfoProps>) {
  const value = useMemo(() => props, [props]);

  return (
    <CardInfoContext.Provider value={value}>
      {children}
    </CardInfoContext.Provider>
  );
}

export function useCardInfo(): ICardInfoProps {
  return useContext(CardInfoContext);
}
