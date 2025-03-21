const questions=[
    {
        question: "which is largest animal in the world?",
        answers:[
            {text: "shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers:[
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Antarctica", correct: false},
        ]
    },
    {
        question: "which is smallest country in the world?",
        answers:[
            {text: "vatican city", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false},
        ]
    },
    {
        question: "which is largest desert in the world?",
        answers:[
            {text: "Kalahari", correct: false},
            {text: "GObi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    }
];
const questionelement = document.getElementById("question");
const answerBuutons = document.getElementById("answer-buttons");
const nextBuuton = document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex =0;
    score =0;
    nextBuuton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let questionNo = currentquestionindex +1;
    questionelement.innerHTML = questionNo + ". " + currentquestion.question;


    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBuutons.appendChild(button);
        button.addEventListener("click", selectanswer);
        if(answer.correct){
            button.dataset.correct =  answer.correct;
        }
        button.addEventListener("click", selectanswer);
    })
}

function resetstate(){
    nextBuuton.style.display = "none";
    while(answerBuutons.firstChild){
        answerBuutons.removeChild(answerBuutons.firstChild);
    }
}

function selectanswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBuutons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBuuton.style.display = "block";
}

function showscore(){
    resetstate();
    questionelement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextBuuton.innerHTML="play Again";
    nextBuuton.style.display="block";
}


function handleNextButton(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}

nextBuuton.addEventListener("click", () => {
    if(currentquestionindex < questions.length){
        handleNextButton();
    }
    else{
        startquiz();
    }
})


startquiz();
