// import companies from 'data.json' assert {type: 'json'};
// import myJson from './data.json' with {type: 'json'};
/*
const inputTag_1 = document.querySelector("#input-Company1");
const inputTag_2 = document.querySelector("#input-Company2");
const inputTag = document.querySelectorAll("input");
const compareBtn = document.querySelector("button");
*/
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
    compareBtn.addEventListener("click", comparison);

    displayCompaniesList();
  });

function findCompany(input) {

   return companies.filter(element => element.Name.toLowerCase() === input.value.toLowerCase());
    
}

function comparison () {
    const compan_1_Info = findCompany(inputTag_1);
    const compan_2_Info = findCompany(inputTag_2);
    const trName = document.querySelector("#name");
    const tdName1 = document.createElement("td");
    const tdName2 = document.createElement("td");
    tdName1 = compan_1_Info.Name;
    tdName2 = compan_2_Info.Name;
    trName.appendChild(tdName1);
    trName.appendChild(tdName2);

}

function displayCompaniesList(){
    const ul = document.querySelector('ul');
    const listItems = companies.map(c => {
            const li = document.createElement('li');
            li.innerHTML = c.name;
            return li;
        });
    console.log(listItems)
    listItems.forEach(li => ul.appendChild(li));
}