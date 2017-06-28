# Caret-Plugin-Pretty-JavaScript

A Caret Editor plug-in which allows for Pretty Print for JavaScript, eventually I'll add it to
the Chrome web store.

## To use with Caret

### api.json

You'll need to add the following to your api.json file, under settings menu.  This plugin
can pass the same options that JS-Beautify does in the 'options' tag.

```
{
	"sampleMessage": {
		"id": "extension id goes here",
		"message": {
			"data": "message can be any JSON object passable to chrome.runtime.sendMessageExternal"
		}
	},
	"Pretty-JavaScript": {
		"id": "YourIDHere",
		"message": {
			"options": {
				"indent_size": 1,
				"indent_char": "\t",
				"max_preserve_newlines": 2,
				"brace_style": "collapse",
				"jslint_happy": true,
				"wrap_line_length": 0
			}
		},
		"sendEditorContext": true
	}
}
```

### key.json

You'll want to bind the command to the keyboard, you can select any shortcut combo that you want.

```
"Ctrl-Shift-H": {
	"command": "api:execute",
	"argument": "Pretty-JavaScript"
}
```

### menus.json

This is optional, but allows the command to be accessable in menu system.

```
{
	"label": "JavaScript Beautify",
	"command": "api:execute",
	"argument": "Pretty-JavaScript"
}
```

## The following have contributed works

Without the following, this plug-in would not exist.  Thanks to their works.

- [Caret](https://github.com/thomaswilburn/Caret)
- [JS-Beautify](https://github.com/beautify-web/js-beautify)