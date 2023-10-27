const inputTag_1 = document.querySelector("#input_Company_1");
const inputTag_2 = document.querySelector("#input_Company_2");
const inputTag = document.querySelectorAll("input");
const compareBtn = document.querySelector("button");

const companies = JSON.parse(data.json);

inputTag.addEventListener("submit", (e)=> {
    e.preventDefault();
    comparison();
})

compareBtn.addEventListener("click", comparison);


function findCompany(input) {

    companies.filter(element => element.Name.toLowerCase() === input.value.toLowerCase());

}

function comparison () {
    const compan_1_Info = findCompany(inputTag_1);
    const compan_2_Info = findCompany(inputTag_2);
    
}
