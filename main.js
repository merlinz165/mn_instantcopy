JSB.newAddon = function(mainPath) {
    var newAddonClass= JSB.defineClass('InstantCopyAddon : JSExtension', {
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
            NSNotificationCenter.defaultCenter().addObserverSelectorName(self, 'onPopupMenuOnSelection:', 'PopupMenuOnSelection');
            self.instantCopy = NSUserDefaults.standardUserDefaults().objectForKey('marginnote_instantcopy');
        },
        notebookWillClose: function(notebookid) {
            NSNotificationCenter.defaultCenter().removeObserverName(self,'PopupMenuOnSelection');
        },
        documentDidOpen: function(docmd5) {
        },
        docmentWillClose: function(docmd5) {
        },
        controllerWillLayoutSubviews: function(controller) {
        },
        queryAddonCommandStatus: function() {
            if(Application.sharedInstance().studyController(self.window).studyMode < 3) {
                return {
                    image: 'instantcopy.png',
                    object: self,
                    selector: "toggleInstantCopy:",
                    checked: (self.instantCopy?true:false)
                };
            }
            return null;
        },

        // Selecting text on document and Copy to Clipboard
        onPopupMenuOnSelection: function(sender) {
            if(!Application.sharedInstance().checkNotifySenderInWindow(sender,self.window)) {
                return; // Don't process message from other window
            }
            if(!self.instantCopy) {
                return;
            }
            var text = sender.userInfo.documentController.selectionText;
            if(text && text.length) {
                // Copy to Clipboard
                var pasteBoard = UIPasteboard.generalPasteboard();
                pasteBoard.string = text;
            }
        },

        // toggleInstantCopy
        toggleInstantCopy: function(sender) {
            if(self.instantCopy) {
                self.instantCopy = false;
                Application.sharedInstance().showHUD('自动复制关闭', self.window, 2);
            } else {
                self.instantCopy = true;
                Application.sharedInstance().showHUD('自动复制打开', self.window, 2);
            }
            NSUserDefaults.standardUserDefaults().setObjectForKey(self.instantCopy, 'marginnote_instantcopy');
            Application.sharedInstance().studyController(self.window).refreshAddonCommands();
        },

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
