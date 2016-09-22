#Movies Project
##PORT 3000 (USUALLY)
###contents
1. What it is
2. What the packages do



####1. what it is
This app is to show the general template to be used when creating a node rMVC app, including authentication and also multiple resources.


####2. Packages

```
	"body-parser": "^1.15.2",
	"chai": "^3.5.0",
	"chai-http": "^3.0.0",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.4.3",
    "ejs": "^2.5.2",
    "express": "^4.14.0",
    "express-ejs-layouts": "^2.2.0",
    "express-session": "^1.14.1",
    "method-override": "^2.3.6",
    "mocha": "^3.0.2",
    "mongoose": "^4.6.1",
```
  * Body parser is to allow the request body to be filled by form information
  * Chai and Chai-http are to allow testing with mocha
  * connect-flash is to allow flash information whilst debugging
  * cookie-parser is for the information saved in cookies i.e the amount of views
  * express through to espress session are to allow full use of the web page with the server and layouts to using sessions
  * method-overide is for use with forms when deleting so that a delete method can be used instead of GET or POST
  * mongoose is a ORM database tool
  
  
    
