import { Route } from "react-router-dom";

import { paths } from "src/consts/paths";
import { Learn } from "src/pages/Cards/Learn/index";

export const LearnRoute = (
  <Route key="learnRoute" path={paths.cardsLearnPath} element={<Learn />} />
);
