"use client"

import GameProcess from "@/components/pages/main/GameProcess";
import BoxCenter from "@/components/ui/BoxCenter";
import {useState} from "react";
import {NumberConditionTypes, ResultItem} from "@/types";
import ResultsTable from "@/components/pages/main/ResultsTable";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [results, setResults] = useState<ResultItem[]>([]);

  const updateUserResults = (
    resultedNumber: number,
    resultedNumberCondition: NumberConditionTypes,
    guessNumber: number
  ) => {
    const updatedResults = [{
      id: uuidv4(),
      playingDate: new Date(),
      resultedNumber,
      resultedNumberCondition,
      guessNumber
    }, ...results]

    if (updatedResults.length > 10) {
      updatedResults.pop();
    }

    setResults(updatedResults);
  };

  return (
    <BoxCenter gap="16px">
      <GameProcess updateUserResults={updateUserResults} />
      <ResultsTable results={results} />
    </BoxCenter>
  )
}
