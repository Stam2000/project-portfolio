interface Props {
    numberOfDotEachLine : number;
    numberOfLine : number;
}

function gotGeneratorLine(numberOfDotEachLine:number){
    const constrain = Math.floor(numberOfDotEachLine/3)
    const possibilities = 
        ["bg-[#98CE00]",
            "bg-white",
            "bg-[#98CE00]/60",
            "bg-[#98CE00]/10",
            "border-[1px] border-[#F9A620]",
            "border-[1px] border-[#F9A620]/60",
            "border-[1px] border-[#98CE00]/10",
        ]
    let finalArray:string[] = []
    let updatedPossibilitiesList = possibilities
    let Counter:{[key:string]:number} = {}
    possibilities.forEach(
        possibility => Counter[possibility] = 0
    )

    for(let i = 0; i < numberOfDotEachLine ; i++){
     if(updatedPossibilitiesList.length){
        const randomPossibility = updatedPossibilitiesList[Math.floor(Math.random() * updatedPossibilitiesList.length)]

        if(Counter[randomPossibility] < constrain ){

            finalArray.push(randomPossibility)
            Counter[randomPossibility]++

            if (Counter[randomPossibility] == constrain ) {

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

function dotGeneratorGrid(numberOfDotEachLine:number,numberOfLine:number){
    let finalResult = []
     for (let i = 0;i < numberOfLine;i++){
        const result =  gotGeneratorLine(numberOfDotEachLine)
        finalResult.push(result)
     }

     return finalResult
}

export default dotGeneratorGrid;


