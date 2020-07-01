# Auth0-Login-Template

I needed a login and security mechanism for an angular app and backend .NetCore API.

Because the manual implementation of a token based authentication is not one of the easiest lessons, I decided to use Auth0 (https://auth0.com).

I have found single instructions for the different parts and decided to combine them and create a general template, which can be used for further apps.
It provides the implemented login mechanism and a secured example API. 

The template is based on the following sources:

https://auth0.com/docs/quickstart/spa/angular2/01-login

https://auth0.com/docs/quickstart/spa/angular2/02-calling-an-api

https://auth0.com/blog/how-to-build-and-secure-web-apis-with-aspnet-core-3/

Thanks a lot to the authors!

To use the template, you must add your client/appsetting in the following files:

Client App - auth.service: Line 15-18 + line 121

API: appsettings.json: Line 11-12

In the startup.cs of the API I had to add the CORS configuration, depending on the scenario, you might be able to change it.
Please note, that for external usage secured communication via SSL is recommended.

Feel free to use the template for your own projects.
