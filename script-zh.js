const resetMessages = [
  "先停一下。你要找的答案，可能被太多待辦蓋住了。",
  "不是每一天都要更用力。有些時候，清楚比速度更重要。",
  "如果事情開始變霧，先回到最核心的問題。",
  "忙碌不一定等於前進。選一件真的會改變局面的事。",
  "在新增下一個任務前，先拿掉一個不必要的假設。",
  "今天可以從一口氣、一次誠實的選擇，重新開始。",
  "你不需要回應所有聲音。先保護那個最重要的訊號。",
  "真正的洞察，常常不是更複雜，而是更乾淨。",
  "把限制說清楚，霧就會開始散開一點。",
  "先不用急著證明自己。把眼前這一步走穩就好。",
  "柔軟的節奏，也可以是一種認真的策略。",
  "當方向不明，先整理環境，再整理決定。"
];

const messageElement = document.querySelector("#reset-message");
const buttonElement = document.querySelector("#reset-button");

let lastMessageIndex = -1;

function chooseResetMessage() {
  let nextIndex = Math.floor(Math.random() * resetMessages.length);

  if (resetMessages.length > 1) {
    while (nextIndex === lastMessageIndex) {
      nextIndex = Math.floor(Math.random() * resetMessages.length);
    }
  }

  lastMessageIndex = nextIndex;
  messageElement.textContent = resetMessages[nextIndex];
}

buttonElement.addEventListener("click", chooseResetMessage);
