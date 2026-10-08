// Banco de perguntas focadas em veterinária de fazenda com toques de Toy Story
const questions = [
    {
        question: "Woody precisa saber: Qual é o tempo de gestação médio de uma égua (como a nossa querida Bala no Alvo)?",
        answers: [
            { text: "9 meses", correct: false },
            { text: "11 meses", correct: true },
            { text: "5 meses", correct: false },
            { text: "14 meses", correct: false }
        ]
    },
    {
        question: "Jessie está cuidando das vacas. Quantos compartimentos tem o estômago de um animal ruminante?",
        answers: [
            { text: "Apenas 1", correct: false },
            { text: "3 compartimentos", correct: false },
            { text: "4 compartimentos", correct: true },
            { text: "2 compartimentos", correct: false }
        ]
    },
    {
        question: "Um cavalo na fazenda está com febre. Qual é a temperatura corporal considerada normal para um equino adulto?",
        answers: [
            { text: "37,5°C a 38,5°C", correct: true },
            { text: "35,0°C a 36,0°C", correct: false },
            { text: "39,5°C a 40,5°C", correct: false },
            { text: "41,0°C a 42,0°C", correct: false }
        ]
    },
    {
        question: "A Jessie avistou um animal que NÃO é ruminante na fazenda vizinha. Qual destes NÃO rumina?",
        answers: [
            { text: "Ovelha", correct: false },
            { text: "Cabra", correct: false },
            { text: "Vaca", correct: false },
            { text: "Cavalo", correct: true }
        ]
    },
    {
        question: "Qual das seguintes doenças é uma zoonose importante que pode ser transmitida de vacas ou ovelhas para humanos através do leite não pasteurizado?",
        answers: [
            { text: "Brucelose", correct: true },
            { text: "Cinomose", correct: false },
            { text: "Parvovirose", correct: false },
            { text: "Gripe aviária", correct: false }
        ]
    }
];

// Elementos da Interface
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionTextElement = document.getElementById('question-text');
const questionNumberElement = document.getElementById('question-number');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');
const scoreTextElement = document.getElementById('score-text');
const feedbackMessageElement = document.getElementById('feedback-message');

let currentQuestionIndex = 0;
let score = 0;

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    updateProgressBar();
}

function showQuestion(question) {
    questionNumberElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
    questionTextElement.innerText = question.question;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }
    
    // Revelar resposta correta e desativar botões
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    if (questions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        setTimeout(showResults, 1500); // Vai para o resultado após um breve delay
    }
}

function updateProgressBar() {
    const percentage = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${percentage}%`;
}

function showResults() {
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    progressBar.style.width = '100%';
    
    scoreTextElement.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
    
    // Feedback personalizado do Woody e Jessie
    if (score === questions.length) {
        feedbackMessageElement.innerText = "🤠 'Deu no alvo!' Você é um xerife da medicina veterinária! O Bala no Alvo e todos os animais estão salvos e super saudáveis!";
    } else if (score >= 3) {
        feedbackMessageElement.innerText = "¡Yee-haw! Você conhece muito bem a rotina do rancho, mas ainda restou uma duvidazinha. Muito bem, parceiro!";
    } else {
        feedbackMessageElement.innerText = "Epa, o gado estourou! Acho melhor darmos uma estudada nos manuais da fazenda junto com o Slinky e tentar de novo.";
    }
}
