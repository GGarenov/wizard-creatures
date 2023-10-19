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

21. Map pages to navigation in both LoggedIn and LoggedOut state
    - created all-posts page and its routes, create page and profile page.

22. Add creature model to Mongoose

23. Implement All Posts Page
    - show each creature with image, name, species, description
    - add details button to every creature




 
 
 
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//TO DO's
- Implement All Posts Page
    - show each creature with image, name, species, description
    - add details button to every creature
- Add details page (for creatures)
    - If no creatures "There are no posts yet..."
    - If the user is the owner of the post should have "Edit" and "Delete" button
    - If the user hasn't logged in - no buttons
    - If the user is not the owner -> vote button
- Vote button
    - when clicked -> "voted"
    - redirect to the details page for the current creature
    - show the email of the voted people
    - if the user already has voted -> "Thanks for Voting" and add the email of the voted people
- Add Creature (Create post)
    - On success redirect to all posts page
- Delete Creature
    - On success redirect to all posts page
- Edit Creature
    - On succes redirect to current creature page
- Routes Guards - check
- Validations
    - Login
    - Register
    - Animals
- BONUS -> Profile
    - show my posts
    - if there are no posts - msg