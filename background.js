// background.js
browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript(tab.id, {
      file: 'content_script.js'
  });
});
