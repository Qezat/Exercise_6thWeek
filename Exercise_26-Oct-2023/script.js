// Asynchronous JavaScript And XML = AJAX
// console.log(fetch("https://opentdb.com/api.php?amount=10"))
fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(json => {
        const questions = json.results;
        const mainTag = document.querySelector("main");
        // array of objects, each object has 1 question:
        // to get first question, we would need to get the first object
        // to get the first element of an array, we can use array_name[0]
        const h2Tag = document.querySelector("h2");
        h2Tag.innerHTML = questions[0].question;
        mainTag.appendChild(h2Tag);
        
        const ulTag = document.createElement("ul");
        const liTag = document.createElement("li");
        mainTag.appendChild(ulTag);
        ulTag.appendChild(liTag);

        const inputTag = document.createElement("input");
        inputTag.id = "answer" + questions[0].correct_answer.length;
        inputTag.name = "answer";
        inputTag.type = "radio";
        inputTag.value = questions[0].correct_answer;
        liTag.appendChild(inputTag);

        const labelTag = document.createElement("label");
        labelTag.setAttribute("for", "answer" + questions[0].correct_answer.length);
        labelTag.innerText = questions[0].correct_answer;
        liTag.appendChild(labelTag);

        // next we show all incorrect answers: questions[0].incorrect_answers
        questions[0].incorrect_answers.forEach((answer,index) => {
            
            const liTag = document.createElement("li");

            ulTag.appendChild(liTag);

            const inputTag = document.createElement("input");
            inputTag.id = "answer" + questions[0].incorrect_answers.length;
            inputTag.name = "answer";
            inputTag.type = "radio";
            inputTag.value = questions[0].incorrect_answers;
            liTag.appendChild(inputTag);

            const labelTag = document.createElement("label");
            labelTag.setAttribute("for", "answer" + questions[0].incorrect_answers.length);
            labelTag.innerText = answer;
            liTag.appendChild(labelTag);
        });

        });

        

/*
        questions.forEach(questionObj => {
            const h2Tag = document.createElement("h2");
            h2Tag.innerHTML = questionObj.question;
            mainTag.appendChild(h2Tag);
            for(let property in questionObj) {
                console.log(property, questionObj[property]);
                     get the first question and add it to the DOM
                     show all possible answers
                     check which answer is the correct one
            };
           
        });
    });

*/
