javascript:(() => {
  if (document.getElementById('__cookie_panel')) return;

  const style = document.createElement('style');
  style.textContent = `
    .cookie-panel {
      font-family: monospace;
      background: #0e0e0e;
      color: #eee;
      border-left: 1px solid #444;
      width: 350px;
      padding: 1rem;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      overflow-y: auto;
      z-index: 999999;
      box-shadow: 0 0 20px #000a;
    }
    .cookie-panel h2 {
      font-size: 16px;
      margin-bottom: 0.5rem;
      color: #80ff80;
    }
    .cookie-entry {
      margin-bottom: 0.75rem;
      padding: 0.5rem;
      background: #1c1c1c;
      border: 1px solid #333;
      border-radius: 6px;
      word-break: break-word;
    }
    .cookie-key {
      font-weight: bold;
      color: #ffee80;
    }
    .cookie-value {
      color: #ccc;
    }
  `;
  document.head.appendChild(style);

  const panel = document.createElement('div');
  panel.className = 'cookie-panel';
  panel.id = '__cookie_panel';

  const cookies = document.cookie.split('; ').map(c => {
    const [name, ...val] = c.split('=');
    return { name, value: val.join('=') };
  });

  panel.innerHTML = `
    <h2>🍪 Cookies Viewer</h2>
    ${cookies.map(c => `
      <div class="cookie-entry">
        <div class="cookie-key">${c.name}</div>
        <div class="cookie-value">${c.value}</div>
      </div>
    `).join('')}
  `;

  document.body.appendChild(panel);
})();
