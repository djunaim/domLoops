console.log('dinos');

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'alex',
        emoji: '🐱‍🐉'
    },
    {
        dinoType: 'stepsaurus',
        name: 'steve',
        emoji: '🐱‍'
    },
    {
        dinoType: 'velociraptor',
        name: 'melanie',
        emoji: '🎂'
    },
]

const dinoPrinter = (dinoArr) => {
    for (let i=0; i< dinoArr.length; i++) {
        const stringToPrint = `
        <div class="dinoCard">
            <h3>${dinoArr[i].dinoType}</h3>
            <p>${dinoArr[i].name}</p>
            <h1>${dinoArr[i].emoji}</h1>
        </div>
        `
        printToDOM (stringToPrint, 'dinoDiv');
    }
}

dinoPrinter(dinosaurs);