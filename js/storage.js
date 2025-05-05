// Handles localStorage for API key and model

const STORAGE_KEY = 'shopify_api_key';
const STORAGE_MODEL = 'shopify_model';

function getApiKey() {
  return localStorage.getItem(STORAGE_KEY) || '';
}

function setApiKey(key) {
  localStorage.setItem(STORAGE_KEY, key);
}

function getModel() {
  return localStorage.getItem(STORAGE_MODEL) || 'gpt-4o-2024-11-20';
}

function setModel(model) {
  localStorage.setItem(STORAGE_MODEL, model);
}

window.storage = {
  getApiKey,
  setApiKey,
  getModel,
  setModel
}; 