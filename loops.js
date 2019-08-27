// loop through rainbow and print out colors to page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
const ew = ['black', 'gray', 'red'];

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

const printRainbow = (colorArr) => {
    for (let i=0; i<colorArr.length; i++) {
        const color = colorArr[i];
        printToDOM(color, 'rainbow');
    }  
}


printRainbow(colors)
printRainbow(ew);

const instructors = [
    {first: "Zoee", last: "Amese"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ]

  const printInstructors = (names) => {
      for (let i=0; i<names.length; i++) {
          const fullName = names[i];
          const element = `<p>${fullName.first} ${fullName.last}</p>`
          printToDOM(element, 'names');
      }
  }

  printInstructors(instructors);