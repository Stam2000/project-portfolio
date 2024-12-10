interface Props {
  numberOfDotEachLine: number;
  numberOfLine: number;
  colors: React.CSSProperties[];
}

function dotGeneratorLine(
  lineIndex: number,
  numberOfDotEachLine: number,
  colors: React.CSSProperties[],
) {
  const constrain = Math.floor(numberOfDotEachLine / 3);
  const possibilities = [...colors];
  let finalArray: {
    id: string;
    color: React.CSSProperties;
    colorValue: string;
  }[] = [];
  let updatedPossibilitiesList = possibilities.slice();
  let Counter = new Map<React.CSSProperties, number>();

  possibilities.forEach((possibility) => Counter.set(possibility, 0));

  for (let i = 0; i < numberOfDotEachLine; i++) {
    let randomPossibility: React.CSSProperties;

    if (updatedPossibilitiesList.length) {
      randomPossibility =
        updatedPossibilitiesList[
          Math.floor(Math.random() * updatedPossibilitiesList.length)
        ];

      if (Counter.get(randomPossibility)! < constrain) {
        Counter.set(randomPossibility, Counter.get(randomPossibility)! + 1);

        if (Counter.get(randomPossibility) === constrain) {
          let index = updatedPossibilitiesList.indexOf(randomPossibility);
          if (index !== -1) updatedPossibilitiesList.splice(index, 1);
        }
      } else {
        i--;
        continue;
      }
    } else {
      randomPossibility =
        possibilities[Math.floor(Math.random() * possibilities.length)];
    }

    let colorValue =
      randomPossibility.backgroundColor || randomPossibility.color || "#000";

    finalArray.push({
      id: `dot-${lineIndex}-${i}`,
      color: randomPossibility,
      colorValue,
    });
  }

  return finalArray;
}

function dotGeneratorGrid(
  numberOfDotEachLine: number,
  numberOfLine: number,
  colors: React.CSSProperties[],
) {
  let finalResult = [];
  for (let i = 0; i < numberOfLine; i++) {
    const result = dotGeneratorLine(i, numberOfDotEachLine, colors);
    finalResult.push(result);
  }

  return finalResult;
}

export default dotGeneratorGrid;
