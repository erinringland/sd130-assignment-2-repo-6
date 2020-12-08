const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 
addName.addEventListener('click', function(){
    console.log('here');
    nameList.insertAdjacentHTML ("afterbegin", "<li>Erin</li> <li>Phu</li>");
})