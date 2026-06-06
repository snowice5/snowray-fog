const resetMessages = [
  "Pause the chase. The next clear move may already be waiting underneath the noise.",
  "You do not need a sharper sprint. You may need a quieter question.",
  "A crowded calendar is not proof of progress. Choose the work that changes the weather.",
  "Let the fog be information. Something in the system is asking to be simplified.",
  "Before you add another task, remove one assumption.",
  "The day can restart from one honest breath and one useful decision.",
  "Clarity often arrives after you stop negotiating with every possible path.",
  "Protect the small window where deep work can still find you.",
  "If the signal feels faint, lower the volume around it.",
  "Build from the insight, not from the urgency.",
  "A softer pace can still be a serious strategy.",
  "Name the real constraint. The fog thins when the truth has a place to stand."
];

const messageElement = document.querySelector("#reset-message");
const buttonElement = document.querySelector("#reset-button");
const audioElement = document.querySelector("#ambient-audio");
const soundButtonElement = document.querySelector("#sound-button");

let lastMessageIndex = -1;
let fadeTimer;

function fitMessageText(text) {
  messageElement.classList.remove("message-long", "message-extra-long");

  if (text.length > 86) {
    messageElement.classList.add("message-extra-long");
    return;
  }

  if (text.length > 68) {
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
    soundButtonElement.textContent = "Pause Snowlight";
    soundButtonElement.classList.add("is-playing");
    return;
  }

  audioElement.pause();
  soundButtonElement.textContent = "Listen to Snowlight";
  soundButtonElement.classList.remove("is-playing");
}

buttonElement.addEventListener("click", chooseResetMessage);
soundButtonElement.addEventListener("click", toggleAmbientSound);
