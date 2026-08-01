/* ===================== Exam configuration ===================== */

const EXAMS = {
  nvidia: {
    key: "nvidia",
    label: "NVIDIA Exam",
    title: NVIDIA_TITLE,
    heroTop: "NVIDIA-Certified Associate",
    heroAccent: "AI Infrastructure and Operations",
    heroSub: `${NVIDIA_QUESTIONS.length} exam-style questions covering GPU architecture, NVIDIA software stack, distributed training, networking, and infrastructure operations.`,
    questions: NVIDIA_QUESTIONS,
    durationMinutes: 60,
    videos: [
      { id: "xt8Aysu0IQM", label: "Watch in English" },
      { id: "L4u-GHTnKoQ", label: "हिंदी में देखें" }
    ]
  },
  nvidia2: {
    key: "nvidia2",
    label: "NVIDIA Exam (Part 2)",
    title: NVIDIA_PART2_TITLE,
    heroTop: "NVIDIA-Certified Associate",
    heroAccent: "AI Infrastructure and Operations — Part 2",
    heroSub: `${NVIDIA_PART2_QUESTIONS.length} additional exam-style questions covering GPU architecture, robotics platforms, NVIDIA software stack, data center infrastructure, and inference deployment.`,
    questions: NVIDIA_PART2_QUESTIONS,
    durationMinutes: 60,
    videos: []
  },
  aws: {
    key: "aws",
    label: "AWS AI Exam",
    title: AWS_TITLE,
    heroTop: "AWS Certified",
    heroAccent: "AI Practitioner",
    heroSub: `${AWS_QUESTIONS.length} exam-style questions covering AI/ML fundamentals, generative AI concepts, Amazon Bedrock, SageMaker, responsible AI, and AWS security & governance for AI workloads.`,
    questions: AWS_QUESTIONS,
    durationMinutes: 90,
    videos: [
      { id: "bafBS2yhjVw", label: "Watch the walkthrough" }
    ]
  }
};

let activeExam = "nvidia";

function currentExam() { return EXAMS[activeExam]; }
function totalQuestions() { return currentExam().questions.length; }
function examDurationSeconds() { return currentExam().durationMinutes * 60; }

function optionKeys(item) { return Object.keys(item.options); }
function correctKeys(item) { return Array.isArray(item.correct) ? item.correct : [item.correct]; }
function isMultiSelect(item) { return Array.isArray(item.correct); }
function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}
function emptyAnswers(n) {
  return Array.from({ length: n }, () => []);
}

let practice = { index: 0, answers: [], checked: [], flagged: [] };
let exam = { index: 0, answers: [], flagged: [], remaining: 0, timerId: null, submitted: false };

/* ===================== Utility ===================== */

function $(id) { return document.getElementById(id); }

function showScreen(id) {
  ["startScreen", "practiceScreen", "examScreen", "resultsScreen"].forEach(s => {
    $(s).classList.toggle("hidden", s !== id);
  });
  $("examTabs").classList.toggle("hidden", id !== "startScreen");
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ===================== Exam tab switcher / start screen ===================== */

function attachVideoThumbHandlers(thumb) {
  thumb.addEventListener("click", () => playVideoThumb(thumb));
  thumb.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      playVideoThumb(thumb);
    }
  });
}

function renderVideoGrid() {
  const exam = currentExam();
  const grid = $("videoGrid");
  grid.innerHTML = "";
  grid.className = exam.videos.length === 1 ? "video-grid video-grid-single" : "video-grid";
  exam.videos.forEach(v => {
    const div = document.createElement("div");
    div.className = "video-thumb";
    div.dataset.videoId = v.id;
    div.setAttribute("role", "button");
    div.setAttribute("tabindex", "0");
    div.setAttribute("aria-label", `Play: ${v.label}`);
    div.innerHTML = `<img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy" /><span class="video-play-icon">▶</span><span class="video-thumb-label">${v.label}</span>`;
    attachVideoThumbHandlers(div);
    grid.appendChild(div);
  });
}

function renderStartScreen() {
  const ex = currentExam();
  Array.from(document.body.classList)
    .filter(cls => cls.startsWith("theme-"))
    .forEach(cls => document.body.classList.remove(cls));
  document.body.classList.add(`theme-${ex.key}`);
  $("pageTitle").textContent = `${ex.label} — Certification Practice`;
  $("brandSub").textContent = ex.label;
  $("heroTop").textContent = ex.heroTop;
  $("heroAccent").textContent = ex.heroAccent;
  $("heroSub").textContent = ex.heroSub;
  $("pModeDesc").textContent = `Work through all ${ex.questions.length} questions at your own pace. Check the answer and read the full explanation after each question. No timer.`;
  $("eModeDesc").textContent = `Simulate the real certification exam: all ${ex.questions.length} questions, ${ex.durationMinutes}-minute countdown timer, no answers shown until you submit.`;
  $("eTimerFeature").textContent = `${ex.durationMinutes}-minute timer`;
  $("footerText").textContent = `IdeaWeaver · Unofficial practice material for the ${ex.title} exam`;
  $("examTimerDisplay").textContent = formatTime(ex.durationMinutes * 60);
  $("videoCallout").classList.toggle("hidden", ex.videos.length === 0);
  renderVideoGrid();
  document.querySelectorAll(".exam-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.exam === activeExam);
  });
}

document.querySelectorAll(".exam-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    activeExam = btn.dataset.exam;
    renderStartScreen();
  });
});

renderStartScreen();

/* ===================== Home / navigation ===================== */

$("startPracticeBtn").addEventListener("click", () => {
  const n = totalQuestions();
  practice = {
    index: 0,
    answers: emptyAnswers(n),
    checked: new Array(n).fill(false),
    flagged: new Array(n).fill(false)
  };
  showScreen("practiceScreen");
  $("homeBtn").classList.remove("hidden");
  $("examTimerDisplay").classList.add("hidden");
  renderPracticeQuestion();
});

$("startExamBtn").addEventListener("click", () => {
  startExam();
});

$("homeBtn").addEventListener("click", () => {
  if (exam.timerId) {
    clearInterval(exam.timerId);
    exam.timerId = null;
  }
  $("homeBtn").classList.add("hidden");
  $("examTimerDisplay").classList.add("hidden");
  showScreen("startScreen");
});

$("backHomeBtn").addEventListener("click", () => {
  $("homeBtn").classList.add("hidden");
  $("examTimerDisplay").classList.add("hidden");
  showScreen("startScreen");
});

/* ===================== PRACTICE MODE ===================== */

function renderPracticeQuestion() {
  const questions = currentExam().questions;
  const total = questions.length;
  const i = practice.index;
  const item = questions[i];
  const multi = isMultiSelect(item);

  $("pQNum").textContent = i + 1;
  $("pQTotal").textContent = total;
  $("pProgressFill").style.width = `${((i + 1) / total) * 100}%`;
  $("pQuestionText").textContent = item.q;
  $("pMultiHint").classList.toggle("hidden", !multi);

  const optsWrap = $("pOptions");
  optsWrap.innerHTML = "";

  const alreadyChecked = practice.checked[i];
  const selected = practice.answers[i];
  const correct = correctKeys(item);

  optionKeys(item).forEach(letter => {
    const div = document.createElement("div");
    div.className = "option";
    if (selected.includes(letter)) div.classList.add("selected");

    if (alreadyChecked) {
      div.classList.add("disabled");
      if (correct.includes(letter)) div.classList.add("correct");
      else if (selected.includes(letter)) div.classList.add("incorrect");
    }

    div.innerHTML = `<span class="option-letter${multi ? " multi" : ""}">${letter}</span><span>${item.options[letter]}</span>`;

    if (!alreadyChecked) {
      div.addEventListener("click", () => {
        if (multi) {
          const idx = practice.answers[i].indexOf(letter);
          if (idx === -1) practice.answers[i].push(letter);
          else practice.answers[i].splice(idx, 1);
        } else {
          practice.answers[i] = [letter];
        }
        practice.flagged[i] = false;
        renderPracticeQuestion();
      });
    }
    optsWrap.appendChild(div);
  });

  $("pCheckBtn").classList.toggle("hidden", alreadyChecked);
  $("pCheckBtn").disabled = selected.length === 0;
  $("pSkipBtn").classList.toggle("hidden", alreadyChecked);
  $("pNextBtn").classList.toggle("hidden", !alreadyChecked);
  $("pNextBtn").textContent = (i === total - 1) ? "Finish" : "Next Question";
  $("pPrevBtn").disabled = (i === 0);

  const feedback = $("pFeedback");
  if (alreadyChecked) {
    renderPracticeFeedback(item, selected);
    feedback.classList.remove("hidden");
  } else {
    feedback.classList.add("hidden");
  }

  renderPracticeNavGrid();
}

function renderPracticeNavGrid() {
  const questions = currentExam().questions;
  const grid = $("practiceNavGrid");
  grid.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    const cell = document.createElement("div");
    cell.className = "nav-cell";
    if (practice.checked[i]) {
      cell.classList.add(sameSet(practice.answers[i], correctKeys(questions[i])) ? "correct" : "incorrect");
    } else if (practice.flagged[i]) {
      cell.classList.add("flagged");
    }
    if (i === practice.index) cell.classList.add("current");
    cell.textContent = i + 1;
    cell.addEventListener("click", () => {
      practice.index = i;
      renderPracticeQuestion();
    });
    grid.appendChild(cell);
  }
}

function formatCorrectAnswer(item) {
  return correctKeys(item).map(k => `${k}. ${item.options[k]}`).join("  |  ");
}

function renderPracticeFeedback(item, selected) {
  const feedback = $("pFeedback");
  const isCorrect = sameSet(selected, correctKeys(item));
  const label = correctKeys(item).length > 1 ? "Correct answers" : "Correct answer";

  feedback.className = `feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  feedback.innerHTML = `
    <div class="feedback-verdict ${isCorrect ? "correct" : "incorrect"}">
      ${isCorrect ? "✅ Correct" : "❌ Incorrect"} — ${label}: ${formatCorrectAnswer(item)}
    </div>
    <div class="feedback-section">
      <h4>Explanation</h4>
      <p>${item.explanation}</p>
    </div>
    <div class="feedback-section feedback-tip">
      <h4>💡 Exam Tip</h4>
      <p>${item.tip}</p>
    </div>
  `;
}

$("pCheckBtn").addEventListener("click", () => {
  const i = practice.index;
  if (practice.answers[i].length === 0) return;
  practice.checked[i] = true;
  practice.flagged[i] = false;
  renderPracticeQuestion();
});

$("pSkipBtn").addEventListener("click", () => {
  practice.flagged[practice.index] = true;
  if (practice.index < totalQuestions() - 1) practice.index++;
  renderPracticeQuestion();
});

$("pNextBtn").addEventListener("click", () => {
  if (practice.index === totalQuestions() - 1) {
    $("homeBtn").classList.add("hidden");
    showScreen("startScreen");
    return;
  }
  practice.index++;
  renderPracticeQuestion();
});

$("pPrevBtn").addEventListener("click", () => {
  if (practice.index === 0) return;
  practice.index--;
  renderPracticeQuestion();
});

/* ===================== EXAM MODE ===================== */

function startExam() {
  const n = totalQuestions();
  exam = {
    index: 0,
    answers: emptyAnswers(n),
    flagged: new Array(n).fill(false),
    remaining: examDurationSeconds(),
    timerId: null,
    submitted: false
  };
  showScreen("examScreen");
  $("homeBtn").classList.remove("hidden");
  $("examTimerDisplay").classList.remove("hidden");
  updateTimerDisplay();
  renderExamQuestion();
  renderNavGrid();

  exam.timerId = setInterval(() => {
    exam.remaining--;
    updateTimerDisplay();
    if (exam.remaining <= 0) {
      clearInterval(exam.timerId);
      exam.timerId = null;
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = $("examTimerDisplay");
  el.textContent = formatTime(Math.max(exam.remaining, 0));
  el.classList.toggle("timer-warn", exam.remaining <= 300); // last 5 minutes
}

function renderExamQuestion() {
  const questions = currentExam().questions;
  const total = questions.length;
  const i = exam.index;
  const item = questions[i];
  const multi = isMultiSelect(item);

  $("eQNum").textContent = i + 1;
  $("eQTotal").textContent = total;
  $("eProgressFill").style.width = `${((i + 1) / total) * 100}%`;
  $("eQuestionText").textContent = item.q;
  $("eMultiHint").classList.toggle("hidden", !multi);

  const optsWrap = $("eOptions");
  optsWrap.innerHTML = "";

  const selected = exam.answers[i];

  optionKeys(item).forEach(letter => {
    const div = document.createElement("div");
    div.className = "option";
    if (selected.includes(letter)) div.classList.add("selected");
    div.innerHTML = `<span class="option-letter${multi ? " multi" : ""}">${letter}</span><span>${item.options[letter]}</span>`;
    div.addEventListener("click", () => {
      if (multi) {
        const idx = exam.answers[i].indexOf(letter);
        if (idx === -1) exam.answers[i].push(letter);
        else exam.answers[i].splice(idx, 1);
      } else {
        exam.answers[i] = [letter];
      }
      exam.flagged[i] = false;
      renderExamQuestion();
      renderNavGrid();
    });
    optsWrap.appendChild(div);
  });

  $("ePrevBtn").disabled = (i === 0);

  const isLast = i === total - 1;
  $("eNextBtn").classList.toggle("hidden", isLast);
  $("eSubmitBtn").classList.toggle("hidden", !isLast);
}

$("eNextBtn").addEventListener("click", () => {
  if (exam.index < totalQuestions() - 1) {
    exam.index++;
    renderExamQuestion();
    renderNavGrid();
  }
});

$("ePrevBtn").addEventListener("click", () => {
  if (exam.index > 0) {
    exam.index--;
    renderExamQuestion();
    renderNavGrid();
  }
});

$("eSkipBtn").addEventListener("click", () => {
  exam.flagged[exam.index] = true;
  if (exam.index < totalQuestions() - 1) exam.index++;
  renderExamQuestion();
  renderNavGrid();
});

function renderNavGrid() {
  const total = totalQuestions();
  const grid = $("examNavGrid");
  grid.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.className = "nav-cell";
    if (exam.answers[i].length > 0) cell.classList.add("answered");
    else if (exam.flagged[i]) cell.classList.add("flagged");
    if (i === exam.index) cell.classList.add("current");
    cell.textContent = i + 1;
    cell.addEventListener("click", () => {
      exam.index = i;
      renderExamQuestion();
      renderNavGrid();
    });
    grid.appendChild(cell);
  }
}

$("eSubmitBtn").addEventListener("click", () => confirmSubmit());
$("eSubmitBtnSide").addEventListener("click", () => confirmSubmit());

function confirmSubmit() {
  const unanswered = exam.answers.filter(a => a.length === 0).length;
  if (unanswered > 0) {
    const proceed = confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`);
    if (!proceed) return;
  }
  submitExam(false);
}

function submitExam(timeExpired) {
  if (exam.submitted) return;
  exam.submitted = true;
  if (exam.timerId) {
    clearInterval(exam.timerId);
    exam.timerId = null;
  }
  $("homeBtn").classList.add("hidden");
  $("examTimerDisplay").classList.add("hidden");
  renderResults(timeExpired);
}

/* ===================== RESULTS ===================== */

function renderResults(timeExpired) {
  const questions = currentExam().questions;
  let correctCount = 0;
  questions.forEach((item, i) => {
    if (sameSet(exam.answers[i], correctKeys(item))) correctCount++;
  });
  const pct = Math.round((correctCount / questions.length) * 100);

  showScreen("resultsScreen");
  $("reviewList").classList.add("hidden");
  $("reviewList").innerHTML = "";
  $("reviewBtn").textContent = "Review Answers";

  $("scorePercent").textContent = `${pct}%`;

  const timeNote = timeExpired ? " (time expired — auto-submitted)" : "";
  $("scoreDetail").textContent = `${correctCount} of ${questions.length} correct${timeNote}`;
}

$("reviewBtn").addEventListener("click", () => {
  const list = $("reviewList");
  const isHidden = list.classList.contains("hidden");
  if (isHidden) {
    buildReview();
    list.classList.remove("hidden");
    $("reviewBtn").textContent = "Hide Review";
  } else {
    list.classList.add("hidden");
    $("reviewBtn").textContent = "Review Answers";
  }
});

function buildReview() {
  const questions = currentExam().questions;
  const list = $("reviewList");
  list.innerHTML = "";
  questions.forEach((item, i) => {
    const userAnswer = exam.answers[i];
    const correct = correctKeys(item);
    const isCorrect = sameSet(userAnswer, correct);
    const isUnanswered = userAnswer.length === 0;
    const multi = isMultiSelect(item);

    const div = document.createElement("div");
    div.className = "review-item";

    const badgeClass = isUnanswered ? "unanswered" : (isCorrect ? "correct" : "incorrect");
    const badgeText = isUnanswered ? "Unanswered" : (isCorrect ? "Correct" : "Incorrect");

    let optionsHtml = "";
    optionKeys(item).forEach(letter => {
      let cls = "option disabled";
      if (correct.includes(letter)) cls += " correct";
      else if (userAnswer.includes(letter)) cls += " incorrect";
      optionsHtml += `<div class="${cls}"><span class="option-letter${multi ? " multi" : ""}">${letter}</span><span>${item.options[letter]}</span></div>`;
    });

    div.innerHTML = `
      <div class="review-item-header">
        <span>Question ${i + 1}</span>
        <span class="review-badge ${badgeClass}">${badgeText}</span>
      </div>
      <p class="question-text">${item.q}</p>
      <div class="options">${optionsHtml}</div>
      <div class="feedback ${isCorrect ? "is-correct" : "is-incorrect"}" style="margin-top:14px;">
        <div class="feedback-section">
          <h4>Explanation</h4>
          <p>${item.explanation}</p>
        </div>
        <div class="feedback-section feedback-tip">
          <h4>💡 Exam Tip</h4>
          <p>${item.tip}</p>
        </div>
      </div>
    `;
    list.appendChild(div);
  });
}

$("retakeBtn").addEventListener("click", () => {
  startExam();
});

/* ===================== Video preview thumbnails ===================== */

function playVideoThumb(thumb) {
  const videoId = thumb.dataset.videoId;
  const label = thumb.querySelector(".video-thumb-label")?.textContent || "video";
  const wrapper = document.createElement("div");
  wrapper.className = "video-embed";
  wrapper.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" title="${label}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  thumb.replaceWith(wrapper);
}
