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
16. Implement Logout
17. Authentication middleware
    - create middleware directory
    - add auth middleware and import it in express config below cookieParser
    - decode the token
    - handle invalid token
    - provide authorization
18. Dynamic navigation
    - conditional options in navigation
    - add data to res.locals for hbs template
19. Error Handling
    - add 404 page
    - redirect missing route to 404
    - add global error handler (optional)
    - add error message util
20. Show error notification
    - show in the main layout
    - pass error to render in login and register pages
21. Add all-posts page
    - make routes and post controller
    - fix hyperlinks and images in all-post page  
22. Create page
    - just editing create page and make it available
    - Make postService and modify it so that create post work

23. Make post template
