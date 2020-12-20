import * as vscode from 'vscode';

const convert = (pixels: number, conversionRate: number = 16): number => pixels / conversionRate;

export function activate(context: vscode.ExtensionContext) {
	console.log('px2rem is now active!');

let convertAndInsert = vscode.commands.registerCommand('px2rem.convertAndCopy', async () => {
	const inputValue = await vscode.window.showInputBox({ prompt: 'Bruh, what u wanna convert from? 🚀' });
	let inputNumber: number | null = null;
	try {
		if (inputValue === undefined) {
			throw new Error('please check ur input, bro');
		}
		inputNumber = +inputValue!.trim().replace('px', '');
	} catch (err) {
		vscode.window.showErrorMessage(err);
		return;
	}
	if (`${inputNumber}` === 'NaN') {
		vscode.window.showErrorMessage('??? 🤣');
		return;
	}
	const remValue = convert(inputNumber!);
	vscode.env.clipboard.writeText(`${remValue}rem`);
	vscode.window.showInformationMessage(`Converted Value ${remValue}rem copied to clipboard. ⚡`);
});

	// let convertAndCopy;

	context.subscriptions.push(convertAndInsert);
}

export function deactivate() {}
