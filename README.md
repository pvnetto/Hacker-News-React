# React Hacker News

This project is a simple Hacker News website, made with [React](https://github.com/facebook/react) using [Create React App](https://github.com/facebook/create-react-app),
[Bootstrap 4](https://github.com/twbs/bootstrap/tree/v4-dev), [SASS](https://github.com/sass/sass), powered by the [Algolia Hacker News API](https://hn.algolia.com/api)
and user authentication by [Auth0](https://auth0.com/).

The main goal of this project was to practice using React by building an application that fetches data from an external API and does user authentication.

[Live Version](https://hacker-news-search.herokuapp.com/)

## Core Features

- Live Search (as the user types)
- Search pagination
- User authentication with Auth0

## Running the project

To run this project in your machine, you simply have to:

Clone it:
```
cd project/save/path
git clone https://github.com/pvnetto/Hacker-News-React.git
cd Hackers-News-React
```

Create a .env file in the src folder and declare some environment variables, which are used by Auth0 to perform user authentication:
```
.env
# Values for these variables can be found in https://manage.auth0.com/

# Found in Applications > 'your_app_name' > Domain
REACT_APP_AUTH0_DOMAIN=xxxxxx

# Found in Applications > 'your_app_name' > Client ID
REACT_APP_AUTH0_CLIENT_ID=xxxxxx

# Should be included in Applications > 'your_app_name' > Allowed Callback URLs
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000
```

Install all dependencies with npm and run the start script to start the application server:
```
npm install
npm start
```
