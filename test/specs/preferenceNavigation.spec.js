const mainPage = require('../screenobjects/Main');
const dialogPreferencePage = require('../screenobjects/DialogPreference');

describe('Dialog Preference Interaction', () => {
    it('should navigate to Dialog Preference and check for OK button', async () => {
        // Open Preferences
        await main.openPreferences();
        
        // Open Dialog Preference
        await dialogPreference.openDialogPreference();
        
        // Check if the OK button is displayed and clickable
        const isOkButtonDisplayed = await dialogPreference.buttonOk.isDisplayed();
        const isOkButtonEnabled = await dialogPreference.buttonOk.isEnabled();
        
        // Assertions
        assert.strictEqual(isOkButtonDisplayed, true);
        assert.strictEqual(isOkButtonEnabled, true);
    });
});
