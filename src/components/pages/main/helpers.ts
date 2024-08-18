import {NumberConditionTypes} from "@/types";

export const getIsUserWon = (
  guessNumber: number,
  resultedNumber: number,
  resultedNumberCondition: NumberConditionTypes
) => {
  return resultedNumberCondition === NumberConditionTypes.OVER
    ? resultedNumber > guessNumber
    : resultedNumber < guessNumber
};
