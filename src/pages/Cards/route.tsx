import { Route } from "react-router-dom";

import { paths } from "src/consts/paths";
import { LearnRoute } from "src/pages/Cards/Learn/route";

export const CardsRoute = (
  <Route key="cardRoute" path={paths.cardsPath}>
    {[LearnRoute]}
  </Route>
);
