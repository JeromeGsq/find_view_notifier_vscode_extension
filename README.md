Fork from https://github.com/oreporan/color-tabs-vscode

# FindViewNotifier for vscode

## Extension Settings

This extension contributes the following settings:

* `findViewNotifier.config`:  list of mappings from path to color         
"default": 
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
An **advanced** `workspace.settings` example : 

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
