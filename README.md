# aws-amplify issue reproduction

## Steps to reproduce
1. Install dependencies - `yarn install`
1. Fill in the `TO_BE_FILLED` fields regarding Cognito federated login integration in `src/App.tsx`
1. Build Android app - `yarn sync`
1. Run the app e.g. in an emulator using Android Studio (open project in `android` directory)

**Expected behaviour:**

User should be redirected to Google login page

**Actual behaviour:**

User stays in the application screen,
console shows error `InvalidRedirectException: signInRedirect or signOutRedirect had an invalid format or was not found.`

**NOTE:** When launching web application (`yarn start`) it should work correctly
