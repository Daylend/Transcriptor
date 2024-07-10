// popup.js
document.getElementById('copyButton').addEventListener('click', () => {
  const textArea = document.getElementById('transcriptText');
  textArea.select();
  document.execCommand('copy');
});

// Request transcript when the popup loads
browser.tabs.query({active: true, currentWindow: true}, tabs => {
  browser.tabs.sendMessage(tabs[0].id, {command: "fetchTranscript"}, response => {
      document.getElementById('transcriptText').value = response.transcript || "No transcript found.";
  });
});
