interface Props {
    numberOfDotEachLine : number;
    numberOfLine : number;
    colors:React.CSSProperties[]
}
/* 
function gotGeneratorLine(numberOfDotEachLine:number,colors:React.CSSProperties[]){
    const constrain = Math.floor(numberOfDotEachLine/3)
    
    const possibilities = [...colors]
    console.log(possibilities)
    let finalArray:React.CSSProperties[] = []
    let updatedPossibilitiesList = possibilities
    let Counter = new Map<React.CSSProperties,number>()
    possibilities.forEach(
        possibility => Counter.set(possibility,0)
    )

    for(let i = 0; i < numberOfDotEachLine ; i++){
     if(updatedPossibilitiesList.length){
        const randomPossibility = updatedPossibilitiesList[Math.floor(Math.random() * updatedPossibilitiesList.length)]

        if(Counter.get(randomPossibility)! < constrain ){

            finalArray.push(randomPossibility)
            Counter.set(randomPossibility,Counter.get(randomPossibility)! + 1 )

            if (Counter.get(randomPossibility) == constrain ) {

                let index = updatedPossibilitiesList.indexOf(randomPossibility)

                if (index !== -1) updatedPossibilitiesList.splice(index, 1);
    
            }
        }
     }else{
        const randomPossibility =possibilities[Math.floor(Math.random() * possibilities.length)]
        finalArray.push(randomPossibility)
     }
    }

    return finalArray
} */

    function dotGeneratorLine(
        lineIndex: number,
        numberOfDotEachLine: number,
        colors: React.CSSProperties[]
      ) {
        const constrain = Math.floor(numberOfDotEachLine / 3);
        const possibilities = [...colors];
        let finalArray: { id: string; color: React.CSSProperties,colorValue: string  }[] = [];
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
              // If constraint reached, select a different color
              i--;
              continue;
            }
          } else {
            randomPossibility =
              possibilities[Math.floor(Math.random() * possibilities.length)];
          }
      
          let colorValue = randomPossibility.backgroundColor || randomPossibility.color || '#000';

          finalArray.push({
            id: `dot-${lineIndex}-${i}`, // Stable ID based on position
            color: randomPossibility,
            colorValue
          });
        }
      
        return finalArray;
      }
      
      function dotGeneratorGrid(
        numberOfDotEachLine: number,
        numberOfLine: number,
        colors: React.CSSProperties[]
      ) {
        let finalResult = [];
        for (let i = 0; i < numberOfLine; i++) {
          const result = dotGeneratorLine(i, numberOfDotEachLine, colors);
          finalResult.push(result);
        }
      
        return finalResult;
      }
      
/* function dotGeneratorGrid(numberOfDotEachLine:number,numberOfLine:number,colors:React.CSSProperties[]){
    let finalResult = []
     for (let i = 0;i < numberOfLine;i++){
        const result =  gotGeneratorLine(numberOfDotEachLine,colors)
        finalResult.push(result)
     }

     return finalResult
} */

export default dotGeneratorGrid;


