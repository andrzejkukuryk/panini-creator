import { breadVariantsSelector } from "../store/bread/selectors";
import { cheeseVariantsSelector } from "../store/cheese/selectors";
import { dressingVariantsSelector } from "../store/dressing/selectors";
import { eggVariantsSelector } from "../store/egg/selectors";
import { meatVariantsSelector } from "../store/meat/selectors";
import { defaultNameSelector, nameSelector } from "../store/name/selectors";
import { servingVariantsSelector } from "../store/serving/selectors";
import { spreadVariantsSelector } from "../store/spreads/selectors";
import { RootState } from "../store/store";
import { toppingVariantsSelector } from "../store/topping/selectors";
import { vegetableVariantsSelector } from "../store/vegetables/selectors";

export const ingredientsVariants = (state: RootState) => {
  const breadVariants = breadVariantsSelector(state);
  const cheeseVariants = cheeseVariantsSelector(state);
  const meatVariants = meatVariantsSelector(state);
  const dressingVariants = dressingVariantsSelector(state);
  const vegetablesVariants = vegetableVariantsSelector(state);
  const eggVariants = eggVariantsSelector(state);
  const spreadVariants = spreadVariantsSelector(state);
  const servingVariants = servingVariantsSelector(state);
  const toppingVariants = toppingVariantsSelector(state);
  const currentName = nameSelector(state);
  const currentDefaultName = defaultNameSelector(state);

  return {
    breadVariants,
    cheeseVariants,
    meatVariants,
    dressingVariants,
    vegetablesVariants,
    eggVariants,
    spreadVariants,
    servingVariants,
    toppingVariants,
    currentName,
    currentDefaultName,
  };
};
