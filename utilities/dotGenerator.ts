interface Props {
    numberOfDotEachLine : number;
    numberOfLine : number;
    colors:React.CSSProperties[]
}

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
}

function dotGeneratorGrid(numberOfDotEachLine:number,numberOfLine:number,colors:React.CSSProperties[]){
    let finalResult = []
     for (let i = 0;i < numberOfLine;i++){
        const result =  gotGeneratorLine(numberOfDotEachLine,colors)
        finalResult.push(result)
     }

     return finalResult
}

export default dotGeneratorGrid;


