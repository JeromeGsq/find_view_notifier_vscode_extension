'use strict';
import * as vscode from 'vscode';
import {
    window,
    workspace,
    Uri,
} from 'vscode';

const dartExtension = '.dart';
const dartNotifier = 'notifier';
const dartView = 'view';

const findViewNotifier = async () => {
    const tabFilePath = vscode.window.activeTextEditor!.document!.fileName;

    if (tabFilePath != null) {
        var uri;
        if (tabFilePath.includes(dartNotifier + dartExtension)) {
            uri = Uri.parse(tabFilePath.replace(dartNotifier + dartExtension, dartView + dartExtension));
        } else if (tabFilePath.includes(dartView + dartExtension)) {
            uri = Uri.parse(tabFilePath.replace(dartView + dartExtension, dartNotifier + dartExtension));
        }

        if (uri != null) {
            workspace.openTextDocument(uri).then(
                document => window.showTextDocument(document));
        }
    }
};

export default findViewNotifier;
