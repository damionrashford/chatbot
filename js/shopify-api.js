// Handles API call logic to Shopify AI Proxy

const SHOPIFY_API_URL = 'https://proxy.shopify.ai/v1/chat/completions';

async function sendShopifyMessage(apiKey, model, messages) {
  try {
    const response = await fetch(SHOPIFY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ model, messages })
    });
    if (!response.ok) {
      let errorText = await response.text();
      throw new Error(`API Error: ${response.status} ${errorText}`);
    }
    return await response.json();
  } catch (err) {
    if (err.message.includes('CORB') || err.message.includes('CORS')) {
      throw new Error('CORB/CORS error: Ensure all scripts are loaded from the same origin and not from external sources. See README for troubleshooting.');
    }
    throw err;
  }
}

window.shopifyAPI = {
  sendShopifyMessage
}; 