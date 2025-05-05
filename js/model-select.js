// Handles model selection dropdown UI and logic

const MODEL_LIST = [
  { label: 'OpenAI GPT-4o', value: 'gpt-4o-2024-11-20' },
  { label: 'OpenAI', value: 'openai' },
  { label: 'Google Gemini 1.5 Pro', value: 'google.5-pro-preview-03-25' }
];

const modelSelect = document.getElementById('model-select');

function populateModelDropdown() {
  modelSelect.innerHTML = '';
  MODEL_LIST.forEach(model => {
    const option = document.createElement('option');
    option.value = model.value;
    option.textContent = model.label;
    modelSelect.appendChild(option);
  });
}

function getSelectedModel() {
  return modelSelect.value;
}

modelSelect.addEventListener('change', () => {
  window.storage.setModel(modelSelect.value);
});

window.modelSelect = {
  populateModelDropdown,
  getSelectedModel
}; 