class Main {
    get buttonPreference() {
        return $('//android.widget.TextView[@text="Preference"]'); // Using XPath
    }

    get buttonPreferenceFromSettings() {
        return $('//android.widget.TextView[@text="Preference from Settings"]');
    }

    get buttonPreferenceDependencies() {
        return $('//android.widget.TextView[@text="3. Preference dependencies"]');
    }

    async openPreferences() {
        await this.buttonPreference.waitForDisplayed();
        await this.buttonPreference.click();
    }

    async openPreferenceFromSettings() {
        await this.buttonPreferenceFromSettings.waitForDisplayed();
        await this.buttonPreferenceFromSettings.click();
    }

    async openPreferenceDependencies() {
        await this.buttonPreferenceDependencies.waitForDisplayed();
        await this.buttonPreferenceDependencies.click();
    }
}

module.exports = new Main();
