'use strict';


let storeArray = [];

function Store(user, type) {
    this.user = user;
    this.type = type;
    this.price = random(100, 500);

    storeArray.push(this);
    settingItem();

}


function settingItem() {
    let storeString = JSON.stringify(storeArray);
    localStorage.setItem('stores', storeString);


}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





//making table

let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


let headerArr = ['USER', 'TYPE', 'PRICE', 'CONDITION'];
function makingHeader() {

    let firstRow = document.createElement('tr');
    table.appendChild(firstRow);


    for (let i = 0; i < headerArr.length; i++) {
        let thElement = document.createElement('th');
        firstRow.appendChild(thElement);
        thElement.textContent = headerArr[i];

    }

}
makingHeader();



Store.prototype.render = function () {

    let collecterRow = document.createElement('tr')
    table.appendChild(collecterRow);


    
    let userData = document.createElement('td');
    collecterRow.appendChild(userData);
    userData.textContent=this.user;

    let typeData = document.createElement('td');
    collecterRow.appendChild(typeData);
    typeData.textContent=this.type;



    let priseData = document.createElement('td');
    collecterRow.appendChild(priseData);
    priseData.textContent=this.price;


    let conditionData = document.createElement('td');
    collecterRow.appendChild(conditionData);

    if (this.price < 200) {

        conditionData.textContent = 'used';


    } else {
        conditionData.textContent = 'new';

    }

}


//form 

let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();



    let user = event.target.user.value;
    let type = event.target.type.value;



    let newStore = new Store(user, type);
    newStore.render();

}


function gettingItem() {
    let data = localStorage.getItem('stores');
    let parsArray = JSON.parse(data);

    if (parsArray) {

        for (let i = 0; i < parsArray.length; i++) {
            new Store(parsArray[i].user, parsArray[i].type)
        }

    }

}
gettingItem();

for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].render();

}
