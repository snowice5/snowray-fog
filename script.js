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
