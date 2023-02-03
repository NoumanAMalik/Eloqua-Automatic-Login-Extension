# Eloqua Automatic Login Extension

If you have ever used Oracle Eloqua, then you might be infuriated by the fact that everytime you need to login, you have to type your company name and hit submit.
And then, to add salt to the wound, after a couple minutes of inactivity, you are automatically kicked out, and have to enter the company name again.

It would be nice if your browser would automatically fill it, like it does for passwords, but Oracle labeled the type of the input as text, not password.
Meaning that your browser would not automatically fill it because it doesn't think that is a space for passwords.

Thats where this Chrome browser extension comes into play. In the file [scripts/content.js](https://github.com/NoumanAMalik/Eloqua-Automatic-Login-Extension/blob/20c3812faf47b7426e995587883a2ded32621b5d/scripts/content.js), it automatically adds your company name. Then it will click the submit button as well for you.

The first time the user opens the extension, they are required to input their company name on the extension popup. Then the extension will save that company name in the browser storage forever.
