const mainPage = require('../screenobjects/Main');
const dialogPreferencePage = require('../screenobjects/DialogPreference');

describe('EditText Interaction in Dialog Preference', () => {
    it('should input text into EditText and submit', async () => {
        // Open Preferences
        await main.openPreferences();

        // Open Dialog Preference
        await dialogPreference.openDialogPreference();
        
        // Input text into EditText field
        await dialogPreference.enterText('Test input');
        
        // Click the OK button
        await dialogPreference.clickOk();
        
        // Assert that the text was inputted successfully (you could verify this by checking the value of EditText)
        const enteredText = await dialogPreference.editTextField.getText();
        assert.strictEqual(enteredText, 'Test input');
    });
});
