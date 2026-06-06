const resetMessages = [
  "先停一下。真正重要的事，可能正被雜訊蓋住。",
  "不是每一天都要更用力。有時候，清楚比速度更重要。",
  "如果事情開始變霧，先回到那個最核心的問題。",
  "忙碌不一定等於前進。選一件真的會改變局面的事。",
  "在新增下一個任務前，先放下一個不必要的假設。",
  "今天可以從一口氣、一次誠實的選擇，重新開始。",
  "你不需要回應所有聲音。先守住最重要的訊號。",
  "真正的洞察，常常不是更複雜，而是更乾淨。",
  "把限制看清楚，霧就會開始散開一點。",
  "先不用急著證明自己。把眼前這一步走穩就好。",
  "柔軟的節奏，也可以是一種認真的策略。",
  "當方向不明，先減少雜訊，再做決定。"
];

const messageElement = document.querySelector("#reset-message");
const buttonElement = document.querySelector("#reset-button");
const audioElement = document.querySelector("#ambient-audio");
const soundButtonElement = document.querySelector("#sound-button");

let lastMessageIndex = -1;
let fadeTimer;

function fitMessageText(text) {
  messageElement.classList.remove("message-long", "message-extra-long");

  if (text.length > 34) {
    messageElement.classList.add("message-extra-long");
    return;
  }

  if (text.length > 26) {
    messageElement.classList.add("message-long");
  }
}

function chooseResetMessage() {
  let nextIndex = Math.floor(Math.random() * resetMessages.length);

  if (resetMessages.length > 1) {
    while (nextIndex === lastMessageIndex) {
      nextIndex = Math.floor(Math.random() * resetMessages.length);
    }
  }

  lastMessageIndex = nextIndex;
  document.body.classList.remove("fog-cleared");
  window.setTimeout(() => {
    document.body.classList.add("fog-cleared");
  }, 20);

  window.clearTimeout(fadeTimer);
  messageElement.classList.add("message-fade");

  fadeTimer = window.setTimeout(() => {
    messageElement.textContent = resetMessages[nextIndex];
    fitMessageText(resetMessages[nextIndex]);
    messageElement.classList.remove("message-fade");
  }, 260);
}

async function toggleAmbientSound() {
  if (audioElement.paused) {
    await audioElement.play();
    soundButtonElement.textContent = "暫停 Snowlight";
    soundButtonElement.classList.add("is-playing");
    return;
  }

  audioElement.pause();
  soundButtonElement.textContent = "播放 Snowlight";
  soundButtonElement.classList.remove("is-playing");
}

buttonElement.addEventListener("click", chooseResetMessage);
soundButtonElement.addEventListener("click", toggleAmbientSound);
