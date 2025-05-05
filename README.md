# Shopify AI Chatbot

Modular, CORS/CORB-proof, hosted with GitHub Pages.

## Live Demo

[https://damionrashford.github.io/chatbot/](https://damionrashford.github.io/chatbot/)

## Bookmarklet

```javascript
javascript: (function () {
  window.open("https://damionrashford.github.io/chatbot/", "_blank");
})();
```

## Features

- Easy model picker (gpt-4o, openai, Google Gemini...)
- Secure API key entry (never stored remotely)
- Modular JS (easy to customize/extend)
- 100% CORS/CORB free thanks to same-origin loading

## Quick Start

1. Open the [demo](https://damionrashford.github.io/chatbot/) or use the bookmarklet above
2. Enter your Shopify AI Proxy API key when prompted
3. Select a model; start chatting!

## Customization

To contribute, edit files under `/js` and `index.html`, commit, push—changes auto-deploy (GitHub Pages from main branch root).

## Troubleshooting

If you see "Response was blocked by CORB":

- Ensure all scripts load from `https://damionrashford.github.io/chatbot/js/...`
- Never reference JS from gists, CDN, or raw.githubusercontent
- Clear browser cache (Ctrl+F5)
- More help: [CORB Explainer](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/#host-permissions)

## API Reference Example

```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer YOUR-API-KEY" \
  -d '{"model": "google.5-pro-preview-03-25", "messages": [{"role": "user", "content": "Hello"}]}' \
  https://proxy.shopify.ai/v1/chat/completions
```

## Supported Models

- openai
- gpt-4o-2024-11-20
- google.5-pro-preview-03-25

## License

MIT

## GitHub Pages Configuration

- Ensure the repository is configured to deploy from the main branch root.
- No `/docs` folder needed.
- After pushing, verify [https://damionrashford.github.io/chatbot/](https://damionrashford.github.io/chatbot/) loads the chatbot and all `/js` scripts without CORB/CORS errors.

## Commit/Push Workflow

```sh
git add index.html js/*.js README.md LICENSE .gitignore
git commit -m "Production-ready modular Shopify AI chatbot (CORB/CORS safe, GitHub Pages configured)"
git push origin main
```

## Verification

- Load [https://damionrashford.github.io/chatbot/](https://damionrashford.github.io/chatbot/) in normal and incognito windows
- Open browser console: Confirm zero CORB/CORS errors on load and on sending a message
- Switch model types and send sample chats
- Try bookmarklet—should work identically
