import * as vscode from "vscode";
import getSettings from '../getSettings';

const removeFile = async () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const settings = vscode.workspace.getConfiguration("findViewNotifier");
  const currentConfig = getSettings().config || []
  const quickPickResults = await vscode.window.showQuickPick(currentConfig.map(x => x.regex), { canPickMany: true, placeHolder: 'FindViewNotifier configurations to remove' }) || []

  const filteredConfig = currentConfig.filter(x => quickPickResults.every(y => x.regex !== y))

  settings.update(
    'config',
    filteredConfig,
    vscode.ConfigurationTarget.Workspace
  );
};

export default removeFile;
