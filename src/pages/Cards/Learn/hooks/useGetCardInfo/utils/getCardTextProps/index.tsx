import { ECardModesList } from "src/consts/enums/cardModesList.enum";

interface IGetCardTextParams {
  mode: ECardModesList;
  frontSideText: string;
  backSideText: string;
}

interface IGetCardTextReturn {
  frontSideText: string;
  backSideText: string;
}

export function getCardTextProps({
  mode,
  frontSideText,
  backSideText,
}: IGetCardTextParams): IGetCardTextReturn {
  switch (mode) {
    case ECardModesList.REVERSE:
      return {
        frontSideText: backSideText,
        backSideText: frontSideText,
      };

    case ECardModesList.MIXED: {
      const randomNumber = Math.floor(Math.random() * 2);

      return {
        frontSideText: randomNumber === 1 ? backSideText : frontSideText,
        backSideText: randomNumber === 1 ? frontSideText : backSideText,
      };
    }

    default:
      return {
        frontSideText,
        backSideText,
      };
  }
}
