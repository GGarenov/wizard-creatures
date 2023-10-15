1. Init project and structure
- Installing depencencies
- index.js is entry file

2. Setup development enviroment

- Install packages and setup the server

3. Install Express and nodemon
    - configure static middleware
    - configure bodyparser (app.use(express.urlencoded({ extended: false }));)
    - configure routes
4. Add images and css in public folder
5. Add html files in views folder
6. Configure handlebars - Install express-handlebars
    - configure view engine
    - add main layout
    - fix hyperlink styles (make the links from main.hbs from ./static/img etc to /img)
    - render home page in hbs 
7. Convert all html views to handlerbars (hbs)
    - group views by folders

8. Add controller folder with home controller
 - polzvame go kato middleware opravqme putq kum router-a i go mahame ot index.html
9. Add datebase
    - install mongoose
    - connect to db (if there is a problem try task manager - services MongoDB to run)
10. Authentication
    - user controller
    - add controller to routes
    - fix navigations in the nav bar (login, register, logout)
    - render login page
    - render register page
11. Add User model
    - simple validation in Schema
    - add method for register
    - create first User record in the db
    - validate password
    - validate email
12. Hash password
    - install bcrypt
    - hash password
13. Login
    - find user by email
    - validate password with hash

14. Generate jsonwebtoker
    - install jsonwebtoken
    - promisify jsonwebtoken
    - generate secret
    - generate token in service login
15. Return token in cookie
    - install cookie-parser
    - config cookie-parser
    - set cookie with the token