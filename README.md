

# FindViewNotifier for vscode
Forked and improved from https://github.com/oreporan/color-tabs-vscode  
Thanks to [oreporan](https://github.com/oreporan) for his plugin [color-tabs-vscode]( https://github.com/oreporan/color-tabs-vscode).
# Why
## 1) Switching between view and notifier:
I created this weird plugin specifically for my need. It is likely to evolve.   
This plugin allows you to switch between the `view.dart` and the `notifier.dart` (or vice versa) of the same folder.   
This is useful to switch quickly from one to the other without having to find the concerned folder in folder tree.  

## 2) Change background color of the current tab
It also allows to change the color of the vscode window according to the name of the opened file in order to know directly if we are in the `view.dart` or the `notifier.dart`.   
You need to add the config manually in `settings.json`.   
You can use the regex you want.

# How to use
You can run this command from command palette to switch between the `view.dart` and the `notifier.dart` (or vice versa):
```
FindViewNotifier: Find View/Notifier
```

Or you can run click on this button:  
<img src="https://i.ibb.co/pR7gJ1N/find-view-notifier-button.png" alt="find-view-notifier-button" border="0">

Or you can use the keymaps.
You can edit __keymaps__ directly in the settings:
```json 
"key": "ctrl+alt+1"
"mac": "alt+tab"
```

<img src="https://i.ibb.co/Tc7JKsP/find-view-notifier.gif" alt="find-view-notifier">

# Extension Settings

This extension contributes the following settings:

* `findViewNotifier.config`:  list of mappings from path to color         
```json
    "findViewNotifier.config": [
        {
            "regex": ".*/notifier.*",
            "color": "#3F51B5",
            "backgroundColor": "#0a0e1f"   // optionnal
        },
        {
            "regex": ".*/view.*",
            "color": "#009688",
            "backgroundColor": "#001714"   // optionnal
        }
    ],
```

* `findViewNotifier.statusBarBackground`:  Enable statusBar background coloring. default to `true`
* `findViewNotifier.editorBackground`:  Enable editor background coloring. default to `true`
* `findViewNotifier.tabBorder`:  Enable tab border coloring. default to `true`
* `findViewNotifier.titleBackground`:  Enable title background coloring. default to `false`
* `findViewNotifier.activityBarBackground`:  Enable activityBar background coloring. default to `false`
* `findViewNotifier.titleLabel`:  Enable title label. default to `false`
* `findViewNotifier.ignoreCase`:  Ignore case while matching Regex. default to `false`

## Advanced Settings
If you'd like to choose the colors yourself, and/or add a label (which is presented at the top window bar).    
Note - you can mix the configuration, placing colors in some, and not in others.
An **advanced** `workspace.settings` example: 

```json
"findViewNotifier.config": [
        {
            "regex": ".*/notifier.*",
            "color": "#3F51B5",
            "backgroundColor": "#0a0e1f",   // optionnal
            "label": "MOBILE"               // optionnal
        },
        {
            "regex": ".*/view.*",
            "color": "#009688",
            "backgroundColor": "#001714"   // optionnal
        }
    ],
"findViewNotifier.titleBackground": true    
"findViewNotifier.ignoreCase": true    
```

# How to build
In your terminal:
```shell
$ npm install  
$ yarn && vsce package --yarn
```

# How to install
Download *.vsix file from here and install it manually: https://github.com/JeromeGsq/find_view_notifier_vscode_extension/releases/
