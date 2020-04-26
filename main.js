JSB.newAddon = function(mainPath) {
    var newAddonClass= JSB.defineClass('InstantCopy : JSExtension', {
        //Mark: - Instance Method Definitions
        // Window initialize
        sceneWillConnect: function() {
        },
        // Window disconnect
        sceneDidDisconnect: function() {
        },
        // Window resign active
        sceneWillResignActive: function() {
        },
        // Window become active
        sceneDidBecomeActive: function() {
        },
        //MARK: MN behaviors
        notebookWillOpen: function(notebookid) {

        },
        notebookWillClose: function(notebookid) {

        },
        documentDidOpen: function(docmd5) {

        },
        docmentWillClose: function(docmd5) {

        },
        controllerWillLayoutSubviews: function(controller) {

        },
        queryAddonCommandStatus: function() {

        },

        //TODO: Selecting text on document


        //TODO: copy text to Clipboard while selecting text



    }, {
        //MARK: - Class Method Definitions
        addonDidConnect: function() {
        },
        addonWillDisconnect: function() {
        },
        applicationWillEnterForeground: function() {
        },
        applicationDidEnterBackground: function() {
        },
        applicationDidReceiveLocalNotification: function(notify) {
        },
    });
    return newAddonClass;
};
