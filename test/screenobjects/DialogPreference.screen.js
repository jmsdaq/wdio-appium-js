class DialogPreference {
    get buttonDialogPreference() {
        return $('//android.widget.TextView[@text="Dialog preference"]'); 
    }

    get editTextField() {
        return $('//android.widget.EditText'); 
    }

    get buttonOk() {
        return $('//android.widget.Button[@text="OK"]'); 
    }

    async openDialogPreference() {
        await this.buttonDialogPreference.waitForDisplayed();
        await this.buttonDialogPreference.click();
    }

    async enterText(text) {
        await this.editTextField.waitForDisplayed();
        await this.editTextField.setValue(text);
    }

    async clickOk() {
        await this.buttonOk.waitForDisplayed();
        await this.buttonOk.click();
    }
}

module.exports = new DialogPreference();
