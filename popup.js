chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    var tab = tabs[0];
    console.log(tab.url);
    document.write(tab.url);
});
