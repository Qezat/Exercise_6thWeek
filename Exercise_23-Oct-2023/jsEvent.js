const imgTags = document.querySelectorAll("img");
imgTags.forEach(img => {
    img.addEventListener("error", ()=> {
        img.src = "img/default-avatar.jpeg";
    });
    img.addEventListener("mouseover", handleMouseOver, true);
});


const pTag = document.querySelector("p");
pTag,addEventListener("mouseover",()=> {
   // alert("Hover over p-tag");
   const nestedImgTag = pTag.querySelector("img");
   nestedImgTag.removeEventListener("mouseover", handleMouseOver);
})

const inputTag = document.querySelector('#fname');
const formTag = document.querySelector("form");
formTag.addEventListener("submit", handleFormSubmission);


function handleMouseOver() {
    alert("Hover over img tag");
}

function handleFormSubmission(event) {
    event.preventDefault();
    // const inputValue = document.querySelector('#fanme').value;
    console.log(`Hello and welcome, ${inputTag.value}`);
    console.table(event);
};


