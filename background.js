var extensionesApagadas = new Array();

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({'url': 'chrome-internal://newtab/'});

    chrome.management.getAll(function(result){
         for (var i=0;i<result.length;i++)
         {
            if (esExtensionNewtab(result[i].id) && result[i].enabled)
            {
                chrome.management.setEnabled(result[i].id, false);
                extensionesApagadas.push(result[i].id);
            }

        }
        //chrome.tabs.create({'url': 'chrome://newtab/'}, function(tab) {
        chrome.tabs.create({'url': 'https://www.google.es/_/chrome/newtab'}, function(tab) {
            chrome.tabs.executeScript({
                file: 'inject.js'
        });

            for (var i=0;i<extensionesApagadas.length;i++)
            {
                chrome.management.setEnabled(extensionesApagadas[i], true);
            }
            extensionesApagadas = [];
        });
    });
});


if (localStorage["news"] == undefined)
{
    if (chrome.i18n.getUILanguage() == "es")
        chrome.tabs.create({url:'noticias.html'});
    else
        chrome.tabs.create({url:'news.html'});
    
    localStorage["news"] = "true";
}
