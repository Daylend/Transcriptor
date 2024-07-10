// popup.js
document.getElementById('copyButton').addEventListener('click', () => {
  const textArea = document.getElementById('transcriptText');
  const button = document.getElementById('copyButton');
  
  textArea.select();
  document.execCommand('copy');
  
  // Trigger animation
  button.classList.add('clicked');
  
  // Remove class after animation completes
  setTimeout(() => {
      button.classList.remove('clicked');
  }, 400); // Duration of the animation
});

// Request transcript when the popup loads
browser.tabs.query({active: true, currentWindow: true}, tabs => {
  browser.tabs.sendMessage(tabs[0].id, {command: "fetchTranscript"}, response => {
      document.getElementById('transcriptText').value = response.transcript || "No transcript found.\n\nMake sure you click the Transcript button in the description box.";
  });
});
