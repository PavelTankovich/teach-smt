const cardsPath = "cards";
const cardsLearnPath = "learn";

export const paths = {
  cardsPath,

  cardsLearnPath,
  getCardsLearnAbsolutePath: () => `${cardsPath}/${cardsLearnPath}`,
};
