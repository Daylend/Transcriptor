// content_script.js
function extractTranscript() {
  const segments = document.querySelectorAll('ytd-transcript-segment-renderer yt-formatted-string.segment-text');
  let transcriptText = "";
  segments.forEach(segment => {
      transcriptText += segment.textContent.trim() + '\n'; // Added trim() to clean any leading/trailing whitespace
  });
  return transcriptText;
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === "fetchTranscript") {
      sendResponse({ transcript: extractTranscript() });
  }
});
