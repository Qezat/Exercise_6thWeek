const inputTag_1 = document.querySelector("#input-company1");
const inputTag_2 = document.querySelector("#input-company2");
const inputTag = document.querySelectorAll("input");
const formTag = document.querySelector("form");
const tableTag = document.querySelector("table");
let companies = [];

window.addEventListener("load", async (event) => {
    let response = await fetch("data.json");
    companies = await response.json();
    formTag.addEventListener("submit", (e) => {
        e.preventDefault();
        comparison();
    })
  });

const checkInputTag_1 = inputTag_1.value.toLowerCase();
const checkInputTag_2 = inputTag_2.value.toLowerCase();

function findCompany(input) {
    const checkFilter = companies.filter(element => element.name.toLowerCase() === input.value.toLowerCase());
    console.log(checkFilter);
    return checkFilter;
    
}

function comparison () {
    const company1 = findCompany(inputTag_1);
    const company2 = findCompany(inputTag_2);
    let warning = document.querySelector("p");
    warning.textContent = '';
    if(company1.length === 0 || company2.length === 0) {
        warning.style.textAlign = "center";
        warning.style.color = "red";
        warning.textContent = "Please Enter a valide input!";
        return;
    }

    const companInfo = [company1[0], company2[0]];
    console.log(companInfo);
    creatTable(companInfo);
}

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

