# Appium + WebDriverIO: Mobile Automation for Android Testing

This repository provides a setup guide for Android mobile automation testing using **Appium** and **WebDriverIO**. It includes configuration steps, test execution commands, and troubleshooting tips.

For more details on WebDriverIO with Appium, refer to the [official documentation](https://webdriver.io/docs/api/appium/).

---

## 📌 System Requirements

Ensure the following dependencies are installed and configured before proceeding:

### 1️⃣ Node.js
Required for running WebDriverIO and Appium.
- Download from [Node.js official site](https://nodejs.org/)
- Check installation:
  ```bash
  node -v
  ```

### 2️⃣ Java Development Kit (JDK)
Needed for running Appium.
- Download OpenJDK from [here](https://openjdk.org/)
- Verify installation:
  ```bash
  java -version
  ```

### 3️⃣ Android Studio & SDK
Required for running Android emulators and setting up the test environment.
- Download from [Android Studio](https://developer.android.com/studio)
- Set up **ANDROID_HOME** environment variable:
  ```bash
  export ANDROID_HOME="$HOME/Library/Android/sdk"
  export PATH=$ANDROID_HOME/platform-tools:$PATH
  export PATH=$ANDROID_HOME/tools:$PATH
  ```
  Verify setup:
  ```bash
  echo $ANDROID_HOME
  ```

### 4️⃣ Appium Installation
Install Appium globally:
```bash
npm install -g appium
```
Check version:
```bash
appium -v
```

### 5️⃣ Appium Doctor
Verify if Appium is set up correctly:
```bash
npm install -g appium-doctor
appium-doctor
```

---

## ⚙️ Android Device & Emulator Setup

### 1️⃣ Connect a Physical Device or Emulator
- **For Emulator:** Open **Android Studio → AVD Manager** and create a virtual device.
- **For Physical Device:** Enable **USB Debugging** in Developer Options and connect via USB.
- Check if the device is detected:
  ```bash
  adb devices
  ```

### 2️⃣ Appium Inspector Setup
[Appium Inspector](https://github.com/appium/appium-inspector) is used to locate UI elements for automation.
- Download and install **Appium Inspector**.
- Open Appium Inspector and configure session details:
  ```json
  {
    "platformName": "Android",
    "deviceName": "Pixel_4_API_30",
    "appium:automationName": "UIAutomator2",
    "appium:app": "path/to/your-app.apk"
  }
  ```
- Click **Start Session** to inspect UI elements.

**📌 Notes for Appium Inspector:**
- Always check the **resource-id**, **class name**, and **XPath** for locating elements.
- Use `findElements` instead of `findElement` when dealing with multiple instances of an element.

---

## 🚀 WebDriverIO Setup & Test Execution

### 1️⃣ Initialize WebDriverIO Project
Use this shortcut command to set up WebDriverIO with Appium:
```bash
npx wdio appium
```
Follow the prompts and configure:
- **Test runner:** Mocha
- **Automation service:** Appium
- **Reporter:** Spec
- **Capabilities:** Android

### 2️⃣ Define Desired Capabilities for Android
Modify `wdio.conf.js` to set up Appium for Android:
```js
const path = require('path');
const androidAppPath = path.join(__dirname, 'app/android/your-app.apk');

exports.config = {
    runner: 'local',
    specs: ['./specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        "appium:deviceName": 'Pixel_4_API_30',
        "appium:platformVersion": '11.0',
        "appium:automationName": 'UIAutomator2',
        "appium:app": androidAppPath
    }],
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
};
```

### 3️⃣ Create Sample Test File
Add test scripts inside `./specs/androidTests/`.
Example test file: `./specs/androidTests/sampleTest.js`
```js
describe('Android App Test', () => {
    it('should launch the app', async () => {
        const appPackage = await driver.getCurrentPackage();
        console.log('App Package:', appPackage);
    });
});
```

### 4️⃣ Running Tests
Execute tests using:
```bash
npx wdio run wdio.conf.js
```

---

## 🛠️ Troubleshooting & Useful Commands

### 1️⃣ Check Appium Driver Installation
```bash
appium driver list
appium driver install uiautomator2
```

### 2️⃣ Restart Appium Server
```bash
appium --log-level debug
```

### 3️⃣ Inspect Elements in Appium
```bash
npx wdio run wdio.conf.js --inspect
```

---

## 🎯 Conclusion
With this setup, you can perform Android automation testing using WebDriverIO and Appium. This guide provides step-by-step instructions for configuring the test environment, writing test scripts, and running automation tests efficiently.

For further learning, check the [WebDriverIO documentation](https://webdriver.io/) and [Appium documentation](https://appium.io/).
