// import companies from 'data.json' assert {type: 'json'};
// import myJson from './data.json' with {type: 'json'};
/*
const inputTag_1 = document.querySelector("#input-Company1");
const inputTag_2 = document.querySelector("#input-Company2");
const inputTag = document.querySelectorAll("input");
const formTag = document.querySelector("form");
const compareBtn = document.querySelector("button");
/*
fetch("data.json").then(
    response => response.json()
).then(json => {
    i
    })
})
*/
/*
let companies = [];

window.addEventListener("load", async (event) => {
    let response = await fetch("data.json");
    companies = await response.json();
    compareBtn.addEventListener("click", comparison);
    form.addEventListener("submit", (e)=> {
        e.preventDefault();
        comparison();
    });
  });

function findCompany(input) {

   return companies.filter(element => element.Name.toLowerCase() === input.value.toLowerCase());
    
}

function comparison () {
    const compan_1_Info = findCompany(inputTag_1);
    const compan_2_Info = findCompany(inputTag_2);
    console.log("hello");
    console.log(compan_1_Info);
    console.log(compan_2_Info);

}


const tableTag = document.querySelector("table");

function creatTable(Obj) {
    const trTag = document.createElement("tr");
    const thTag = document.createElement("th");
    const tdTag = document.createElement("td");
    for(let element in Obj) {
        thTag.textContent = element;
        tdTag.textContent = Obj[element];
    }
    
    tableTag.appendChild(trTag);
    trTag.appendChild(thTag);
    trTag.appendChild(tdTag);
}

*/

// import companies from 'data.json' assert {type: 'json'};
// import myJson from './data.json' with {type: 'json'};

const inputTag_1 = document.querySelector("#input-company1");
const inputTag_2 = document.querySelector("#input-company2");
const inputTag = document.querySelectorAll("input");
const compareBtn = document.querySelector("button");

const formTag = document.querySelector("form");
/*
fetch("data.json").then(
    response => response.json()
).then(json => {
    inputTag.addEventListener("submit", (e)=> {
        e.preventDefault();
        comparison();
    })
})
*/

let companies = [];

window.addEventListener("load", async (event) => {
    let response = await fetch("data.json");
    companies = await response.json();
    console.log(companies);
    compareBtn.addEventListener("click", comparison);
    formTag.addEventListener("submit", (e) => {
        e.preventDefault();
        comparison();
    })
  });



function findCompany(input) {

    
    console.log(companies.filter(element => element.name.toLowerCase() === input.value.toLowerCase()));
    return companies.filter(element => element.name.toLowerCase() === input.value.toLowerCase());
}

function comparison () {
    const companInfo = [findCompany(inputTag_1)[0], findCompany(inputTag_2)[0]];
    console.log(companInfo);
    creatTable(companInfo);
}

const tableTag = document.querySelector("table");

function creatTable(Array) {
    tableTag.innerHTML = '';
    let Obj = Array[0];
    console.log(Obj);
    for(let element in Obj) {
        console.log(element);
        const trTag = document.createElement("tr");
        const thTag = document.createElement("th");
        const tdTag = document.createElement("td");
        const tdTag_2 = document.createElement("td");
        thTag.textContent = element;
        tdTag.textContent = Obj[element];
        tdTag_2.textContent = Array[1][element];

        tableTag.appendChild(trTag);

        trTag.appendChild(thTag);

        trTag.appendChild(tdTag);
        trTag.appendChild(tdTag_2);
    }
    
   
}
