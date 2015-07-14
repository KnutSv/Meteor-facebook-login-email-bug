# Meteor-facebook-login-email-bug
Issue when user registers via Facebook: no email is added to the user even when specified in permissions.

#Steps
1. Create a Facebook test app (First a normal app and then attach a test app)
2. Go to Settings and add `localhost` as App Domains and `http://localhost:3000/` Web platform Site URL
3. Clone this repo and copy the Facebook app App ID and App Secret to `facebook-email-test.js` lines 37 and 38
4. Start up meteor
5. Click the button "Sign in with Facebook"
6. Sign in with Facebook (you can add Test users in Facebook settings)

Expect a user to be created with the Facebook email address
The created user has no e-mail address

Potential cause is change to Facebook API:
https://developers.facebook.com/blog/post/2015/07/08/graph-api-v2.4/

Where fields needs to be specified to return email.
