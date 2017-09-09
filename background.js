let record = false;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
            file: "record.js"
        }, function() {
            console.log("Start recording");
        }
    );
});