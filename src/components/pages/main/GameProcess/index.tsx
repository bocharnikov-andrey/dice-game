"use client"

import {ChangeEvent, FC, SyntheticEvent, useState} from "react";
import RadioGroup from "@mui/material/RadioGroup";
import RadioButton from "@/components/ui/RadioButton";
import {NumberConditionTypes, PlayingProcess} from "@/types";
import BoxCenter from "@/components/ui/BoxCenter";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";
import {COLOR_ERROR, COLOR_SUCCESS} from "@/theme/colors";
import {getIsUserWon} from "@/components/pages/main/helpers";
import ResultedNumberSection from "./ResultedNumberSection";
import {StyledSlider} from "./styled";

const sliderMarks = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
    label: 100,
  },
];

type Props = {
  updateUserResults: (
    resultedNumber: number,
    resultedNumberCondition: NumberConditionTypes,
    guessNumber: number
  ) => void;
};

const GameProcess: FC<Props> = ({ updateUserResults }) => {
  const [userPick, setUserPick] = useState<PlayingProcess>({
    guessNumber: 1,
    resultedNumberCondition: NumberConditionTypes.UNDER
  });
  const [resultedNumber, setResultedNumber] = useState<number | null>(null);
  const [isGeneratingNumber, setIsGeneratingNumber] = useState(false);
  const [isAlertOpened, setIsAlertOpened] = useState(false);

  const isUserWon = getIsUserWon(
    userPick.guessNumber,
    resultedNumber as number,
    userPick.resultedNumberCondition
  );
  const alertLostMessage = !isUserWon && userPick.resultedNumberCondition === NumberConditionTypes.UNDER
    ? "You lost"
    : "Number was lower";
  const alertMessage = isUserWon ? "You won" : alertLostMessage;
  const isGameElementsDisabled = isGeneratingNumber || isAlertOpened;

  const handleClose = (
    _event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsAlertOpened(false);
  };

  const handleRadioButtonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAlertOpened(false);
    setUserPick({...userPick, resultedNumberCondition: event.target.value as NumberConditionTypes})
  };

  const handleSliderValueChange = (_event: Event, newValue: number | number[]) => {
    setIsAlertOpened(false);
    setUserPick({...userPick, guessNumber: newValue as number})
  };

  const generateResultNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const startGame = () => {
    setIsAlertOpened(false);
    setIsGeneratingNumber(true);

    const generateResultNumberIntervalId = setInterval(() => {
      const resultNumber = generateResultNumber();
      setResultedNumber(resultNumber);
    }, 100);

    setTimeout(() => {
      clearInterval(generateResultNumberIntervalId);

      const resultedNumber = generateResultNumber();
      setResultedNumber(resultedNumber);
      updateUserResults(resultedNumber, userPick.resultedNumberCondition, userPick.guessNumber);
      setIsAlertOpened(true);

      setIsGeneratingNumber(false);
    }, 1000);
  };

  return (
    <BoxCenter maxWidth={320}>
      <ResultedNumberSection resultNumber={resultedNumber} />
      <RadioGroup
        row
        name="result-direction"
        value={userPick.resultedNumberCondition}
        onChange={handleRadioButtonChange}
        sx={{ mb: 1 }}
      >
        <RadioButton<NumberConditionTypes.UNDER> value={NumberConditionTypes.UNDER} label="Under" disabled={isGameElementsDisabled} />
        <RadioButton<NumberConditionTypes.OVER> value={NumberConditionTypes.OVER} label="Over" disabled={isGameElementsDisabled} />
      </RadioGroup>
      <StyledSlider marks={sliderMarks} value={userPick.guessNumber} disabled={isGameElementsDisabled} onChange={handleSliderValueChange} />
      <Button variant="contained" fullWidth disabled={isGameElementsDisabled} onClick={startGame}>
        Play
      </Button>
      <Alert
        isOpened={isAlertOpened}
        handleCloseAlert={handleClose}
        alertMessage={alertMessage}
        alertDescription={!isUserWon ? "Number was higher" : ""}
        alertBackgroundColor={isUserWon ? COLOR_SUCCESS : COLOR_ERROR}
      />
    </BoxCenter>
  );
}

export default GameProcess;
