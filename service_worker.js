chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({'url': 'chrome-search://local-ntp/local-ntp.html'});
});
