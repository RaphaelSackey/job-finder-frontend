# Frontend README

This project was bootstrapped with Create React App.

## Overview

The frontend code is a React-based application that provides a user interface for interacting with a backend server. The code is organized into several components, including pages, custom hooks, and utilities.

## Pages

The application has several pages, including:

- **Home**: This page is the main entry point of the application and is located at `/pages/home/home.js`.
- **Login/Signup**: This page allows users to log in or sign up for an account and is located at `/pages/login-singup/login_signup.js`.
- **Profile**: This page displays the user's profile information and is located at `/pages/profile/profile.js`.
- **Post Job**: This page allows users to post job listings and is located at `/pages/post/postJob.js`.

## Custom Hooks

The application uses several custom hooks to manage state and interact with the backend server. These hooks include:

- **useDropdownContext**: This hook provides access to the dropdown context and is located at `/CustomHooks/navContext.js`.
- **useSearchbarContext**: This hook provides access to the searchbar context and is located at `/CustomHooks/navContext.js`.
- **useAxios**: This hook provides a way to make HTTP requests to the backend server and is located at `/CustomHooks/useAxios.js`.

## Components

The application has several reusable components, including:

- **Navbar**: This component displays the navigation bar and is located at `/components/navbar/navbar.js`.
- **Card**: This component displays a card with job listing information and is located at `/components/card/card.js`.
- **Loading**: This component displays a loading indicator and is located at `/components/loading/loading.js`.
- **Apply**: This component allows users to apply for job listings and is located at `/components/apply/apply.js`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run eject`

**Note:** This is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

---

**Note:** This README is based on the actual content of the frontend folder and does not include any information that is not true or present in the folder.
