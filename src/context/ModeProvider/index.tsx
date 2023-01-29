import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

import { ECardModesList } from "src/consts/enums/cardModesList.enum";

export interface ICardsModeContext {
  mode: ECardModesList;
  onChangeCardsMode: (_mode: ECardModesList) => void;
}

const CardsModeContext = createContext<ICardsModeContext>({
  mode: ECardModesList.DEFAULT,
  onChangeCardsMode: () => {},
});

export function CardsModeProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [mode, setMode] = useState<ECardModesList>(ECardModesList.DEFAULT);

  const value = useMemo(
    () => ({
      mode,
      onChangeCardsMode: (_mode: ECardModesList) => setMode(_mode),
    }),
    [mode]
  );

  return (
    <CardsModeContext.Provider value={value}>
      {children}
    </CardsModeContext.Provider>
  );
}

export function useChangeCardsMode() {
  return useContext(CardsModeContext).onChangeCardsMode;
}

export function useGetCurrentCardsMode() {
  return useContext(CardsModeContext).mode;
}
