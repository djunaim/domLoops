console.log('assignments');

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}
const assignment = [
    {
        title: 'Reading',
        dueDate: 'Nov 20, 2020',
        topic: 'Mental Health',
        notes: 'should read now',
        assignmentURL: 'https://classtracker.zoeames.com/calendar',
    },
    {
        title: 'LifeStyle',
        dueDate: 'Mar 13, 2020',
        topic: 'Healthy Eating',
        notes: 'eat whole foods',
        assignmentURL: 'https://classtracker.zoeames.com/calendar',
    },
    {
        title: 'Street Food',
        dueDate: 'Sep 3, 2020',
        topic: '',
        notes: 'watch street food show on netflix',
        assignmentURL: 'https://classtracker.zoeames.com/calendar',
    },
    {
        title: 'Exercise',
        dueDate: 'Apr 2, 2020',
        topic: 'HIIT',
        notes: 'effective exercising',
        assignmentURL: 'https://classtracker.zoeames.com/calendar',
    },
    {
        title: 'Sugar High',
        dueDate: 'May 6, 2020',
        topic: 'desserts',
        notes: 'croissants and boba are the best',
        assignmentURL: 'https://classtracker.zoeames.com/calendar',
    }
]
const assignmentPrint = (work) => {
    for (let i=0; i < work.length; i++) {
        const workAssigned = work[i];
        const workToDo = `
        <div class='assignmentCard'>
            <h3>${workAssigned.title}</h3>
            <p>${workAssigned.dueDate}</p>
            <p>${workAssigned.topic}</p>
            <p>${workAssigned.notes}</p>
            <p>${workAssigned.assignmentURL}</p>
        </div>
        `
        printToDOM(workToDo, 'homework');
    }
}

assignmentPrint(assignment);