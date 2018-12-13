const calendarButton = document.querySelector('.btn-start');

const calendarContainer = document.querySelector('.container');

const calendarDays = 24;

const openDoor = (event) => {
    console.log(event);
    event.target.parentNode.style.backgroundImage = `url('https://picsum.photos/200/150/?image=${Math.floor(Math.random() * 100)}')`;
    event.target.style.backgroundColor = '#521751'; 
    event.target.style.opacity = '0';

}

const createCalendar = () => {

    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement('div');
        const calendarDoorText = document.createElement('div');

        calendarDoor.classList.add('image');
        calendarDoor.style.gridArea = "door" + (i +  1);
        calendarContainer.appendChild(calendarDoor);
        
        calendarDoorText.textContent = i + 1;
        calendarDoorText.classList.add('text');
        calendarDoor.appendChild(calendarDoorText);

        calendarDoorText.addEventListener('click', openDoor);
    }
};

calendarButton.addEventListener('click', createCalendar);
