// Handles all DOM interaction for the chat UI
// Related to: chatbox, input, send, display

const chatContainer = document.getElementById('chat-container');
const chatLog = document.getElementById('chat-log');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-btn');

function appendMessage(role, content) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${role}`;
  messageDiv.textContent = content;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function clearInput() {
  chatInput.value = '';
}

function setInputDisabled(disabled) {
  chatInput.disabled = disabled;
  sendButton.disabled = disabled;
}

sendButton.addEventListener('click', () => {
  if (chatInput.value.trim()) {
    window.handleUserMessage(chatInput.value.trim());
  }
});

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey && chatInput.value.trim()) {
    e.preventDefault();
    window.handleUserMessage(chatInput.value.trim());
  }
});

window.chatUI = {
  appendMessage,
  clearInput,
  setInputDisabled
}; 