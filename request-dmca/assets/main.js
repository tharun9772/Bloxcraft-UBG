function openIframe() {
  const overlay = document.getElementById('iframeOverlay');
  const iframe = document.getElementById('dynamicIframe');

  if (!overlay || !iframe) return;

  iframe.src = '/iframe-sites/bloxcraft-ubg-chat';
  overlay.style.display = 'flex';
}

function closeIframe() {
  const overlay = document.getElementById('iframeOverlay');
  const iframe = document.getElementById('dynamicIframe');

  if (!overlay || !iframe) return;

  iframe.src = '';
  overlay.style.display = 'none';
}

function supportWindow_open() {
  const overlay = document.getElementById('supportWindowOverlay');
  const iframe = document.getElementById('supportWindowFrame');

  if (!overlay || !iframe) return;

  iframe.src = '/iframe-sites/bloxcraft-ubg-support';
  overlay.style.display = 'flex';
}

function supportWindow_close() {
  const overlay = document.getElementById('supportWindowOverlay');
  const iframe = document.getElementById('supportWindowFrame');

  if (!overlay || !iframe) return;

  iframe.src = '';
  overlay.style.display = 'none';
}
