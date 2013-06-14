var extensionesApagadas = new Array();

chrome.browserAction.onClicked.addListener(function() {

    chrome.tabs.create({'url': 'chrome-internal://newtab/'});

/*  // code before I know about chrome-internal://newtab/  !!!
    chrome.management.getAll(function(result){
         for (var i=0;i<result.length;i++)
         {
            if (esExtensionNewtab(result[i].name) && result[i].enabled)
            {
                chrome.management.setEnabled(result[i].id, false);
                extensionesApagadas.push(result[i].id);
            }

        }
        chrome.tabs.create({'url': 'chrome://newtab/'}, function(tab) {
            for (var i=0;i<extensionesApagadas.length;i++)
            {
                chrome.management.setEnabled(extensionesApagadas[i], true);
            }
            extensionesApagadas = [];
        });
   });*/
});




/*
function esExtensionNewtab(nombre)
{
    var extensionNewtab = [
        'Speed Dial 2',
        'Speed Dial',
        'V9 Speed Dial',
        'Awesome New Tab Page',
        'New Tab Page',
        'New Tab Redirect!',
        'Blank New Tab',
        'Custom new tab',
        'Empty New Tab Page',
        'New Tab Website',
        'Ultimate New Tab',
        'New Tab to Tasks',
        'New Tab Feeder Beta',
        'New Tab Clock',
        'Minimal New Tab',
        'Humble New Tab Page',
        'Define your own new tab!',
        'Currently',
        'Knew Tab - New Tab Page',
        'New Tab, New Window',
        'Home - New Tab Page',
        'Jolidrive New Tab Page',
        'Set New Tab To Google',
        'New Tab Extension | Dashboard',
        'Check It Later New Tab Replacement',
        'New Tab Redirect Plus!',
        'Fast Search new tab page',
        'FVD Speed Dial - 3D Wall, Sync, New Tab Page',
        'Instatabs - Instagram for Chrome Tabs',
        'X New Tab Page(Extension)',
        'Bookmark Buttons Startpage',
        'Google+ New Tab Page',
        'New Tab Metro',
        'new metroTab',
        'Foxtab Speed Dial',
        'Simple Speed Dial',
        'EverTab - Best Speed Dial!',
        'Speed Dial 2 Memory Helper',
        'Mysites - the best speed dial and start page',
        'Speed Dial (ru)',
        'Start!',
        'New Tab Feeder Beta',
        'Modern New Tab Page'
    ];

    return extensionNewtab.indexOf(nombre) > -1
}

*/


