
# Chatdersko - full-stack real time chat app with private messages

#### App created using create-react-app

##### Use these credentials to sign in into app: (email) (password)

* (adamkowalski@me.me) (qwerty123456)
* (dominikkowalski@me.me) (qwerty123456)

<h1 align="center"><a href="https://nifty-shannon-5c4118.netlify.app">Chatdersko Live</a></h1>


### Used libaries and my experiences

###### What have I learned while creating the app? ( basics/junior )

- React
- Redux / redux toolkit (createSlice, createApi)
- Styled Components
- Axios
- Headless CMS (DatoCMS)
- React hooks in functional components
- How to write my own hooks
- Basics of NodeJS ( simple API with MySQL database )

###### What do I need to do?

- Optimalization
- Redesign entire app. ( I have to dive into UI/UX design | animations etc. )
- Tests ( this is my priority )
- Create the registration logic
- Profile image upload/change
- Search and add friends system

### How to run this app locally ?

1. [Download exported tables](https://easyupload.io/3cehv4)
2. Download XAMPP or something similar to run MySQL server.
3. Create a database and import the tables you downloaded in the first step.
4. Create .env file in root directory
5. Write into .env:

- REACT_APP_SERVER_URL=your_server_endpoint (server file: server/server.js)
- DB_HOST=your_mysql_hostname
- DB_USER=your_mysql_username
- DB_PASS=your_mysql_password
- DB_DATABASE=your_mysql_databaseName

6. After that run your MySQL server and run scripts listed below. ENJOY !

### Scripts

##### Get dependencies

> npm install

##### Run app

> npm start

##### Run server

> npm run server

##### Thanks for your attention.
