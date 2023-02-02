# Eloqua Automatic Login Extension

If you have ever used Oracle Eloqua, then you might be infuriated by the fact that everytime you need to login, you have to type your company name and hit submit.
And then, to add salt to the wound, after a couple minutes of inactivity, you are automatically kicked out, and have to enter the company name again.

It would be nice if your browser would automatically fill it, like it does for passwords, but Oracle labeled the type of the input as text, not password.
Meaning that your browser would not automatically fill it because it doesn't think that is a space for passwords.

Thats where this Chrome browser extension comes into play. In the file scripts/content.js, it automatically adds your company name*. Then it will click the submit button as well for you.


*Currently set to University of Windsor because that is my company.
