'use strict';
import * as vscode from 'vscode';
import getMapping from './getMapping';
import changeColors from './changeColors';
import changeLabel from './changeLabel';
import addFolderCommand from './commands/addFolder';
import removeFolderCommand from './commands/removeFolder';
import findViewNotifierCommand from './commands/findViewNotifier';

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.window.onDidChangeActiveTextEditor(async (e: vscode.TextEditor | undefined) => {

        if (!e) {
            changeColors();
            return null;
        }

        const currentlyOpenTabfilePath = vscode.workspace.asRelativePath(e.document.fileName);

        const mapping = getMapping(currentlyOpenTabfilePath);
        try {
            await Promise.all([
                changeColors(mapping && mapping.color, mapping && mapping.backgroundColor),
                changeLabel(mapping && mapping.label),
            ]);
        } catch (error) {
            console.log("ERROR", error);
        }

    })
    registerCommands(context)
    context.subscriptions.push(disposable);
}

const registerCommands = (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.commands.registerCommand('findViewNotifier.addFolder', addFolderCommand));
    context.subscriptions.push(vscode.commands.registerCommand('findViewNotifier.removeFolder', removeFolderCommand));
    context.subscriptions.push(vscode.commands.registerCommand('findViewNotifier.findViewNotifier', findViewNotifierCommand));
}

// this method is called when your extension is deactivated
export function deactivate() {
    changeColors();
}