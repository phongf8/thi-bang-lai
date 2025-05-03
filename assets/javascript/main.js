import { originalQuestions } from "./questione.js";
let currentQuestion = 0;
let score = 0;
const questionQty = document.querySelector(".question__qty");
const questionTitle = document.querySelector(".question__title");
const suggestAnswer = document.querySelector(".suggest__answer");
const answerBtn = document.querySelectorAll(".answer__button");
const feedbackEl = document.querySelector(".feedback");
const questionImage = document.querySelector(".question__img");

function loadQuestion() {
    const currentQuiz = originalQuestions[currentQuestion];
    questionQty.textContent =("câu"+ currentQuiz.no+":")
    questionTitle.textContent = currentQuiz.text;
    suggestAnswer.textContent = currentQuiz.tip;
    
    if (currentQuiz.image === "") {
        questionImage.disabled = true;
    } else {
        const imageLink = currentQuiz.image;
        questionImage.src =`./assets/img/${imageLink}`
    }
    answerBtn.forEach((btn, index) => {
        btn.textContent = currentQuiz.answers[index];
        btn.disabled = false;
        btn.style.backgroundColor = "";
        if (btn.textContent === "") {
            btn.textContent = " dang cap nhat"
        }
    })
}
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
answerBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const selected = parseInt(e.target.getAttribute("data-index"));
        const correct = originalQuestions[currentQuestion].correct;
        const ansTotal = document.querySelector(".ans__total");
        if (selected === correct) {
            score++ ;
            ansTotal.textContent = `Điểm Của Bạn Là: ${score}`;
            feedbackEl.textContent = "✅ Chính xác!";
            e.target.style.backgroundColor = "#3766e7";
        } else {
            score--;
            ansTotal.textContent =`Điểm Của Bạn Là: ${score} ` ;
            feedbackEl.textContent = `❌ Sai rồi!`;
            e.target.style.backgroundColor = "tomato";
        }
    })
});
prevBtn.addEventListener("click", () => {
    currentQuestion--;
    loadQuestion();
    
});
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < originalQuestions.length) {
    loadQuestion();
  } else {
    questionTitle.textContent = `🎉 Bạn đã hoàn thành quiz!`;
    feedbackEl.textContent = `Điểm của bạn: ${score}/${questionList.length}`;
    document.querySelector("ul").style.display = "none";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }
});

// chon cau
const quesBtnList = document.querySelectorAll(".ques__qty--btn");
quesBtnList.forEach((quesBtn) => {
    quesBtn.addEventListener("click", function () {
        currentQuestion = quesBtn.getAttribute("id") - 1;
        loadQuestion();
    })
});
loadQuestion();

