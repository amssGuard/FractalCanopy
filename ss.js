function copyCode() {
    const codeWindow = document.getElementById('code-window');
    const codeText = codeWindow.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy code: ', err);
    });
}