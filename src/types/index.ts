export enum NumberConditionTypes {
  OVER = "over",
  UNDER = "under"
}

export type PlayingProcess = {
  guessNumber: number;
  resultedNumberCondition: NumberConditionTypes;
};

export type ResultItem = {
  id: string;
  playingDate: Date;
  guessNumber: number;
  resultedNumber: number;
  resultedNumberCondition: NumberConditionTypes;
};
