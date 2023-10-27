const inputTag_1 = document.querySelector("#input-company1");
const inputTag_2 = document.querySelector("#input-company2");
const inputTag = document.querySelectorAll("input");
const compareBtn = document.querySelector("button");

const formTag = document.querySelector("form");

let companies = [];

window.addEventListener("load", async (event) => {
    let response = await fetch("data.json");
    companies = await response.json();

    displayCompanyList();

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

function displayCompanyList(){
    const ul = document.querySelector('ul');

    companies.forEach(c => {
        const li = document.createElement('li');
        li.innerHTML = c.name;

        ul.appendChild(li);
    });
}
