<h1 align="center">Sneaker-Swipe</h1>
<p align="center">
A web application designed to allow users to share their thoughts on various pairs of shoes  
</p>

Main App            |  Post Form
:-------------------------:|:-------------------------:
![](https://i.imgur.com/DIttDmr.png)  |  ![](https://i.imgur.com/HHcGmaA.png)


## Description
Sneaker-Swipe is a web app powered by the masses, relying on users to voice their opinions on different sneakers. The app features a main slider that offers a 'cop' or 'drop' option, correlated to the user's opinion on the shoe at hand. Over time shoes gain upvotes and downvotes, showing how the masses feel about sneakers across the spectrum.

## App Features
* Frontend web app developed with __React__, using ES6 principles, functional React components, and many React best practices
* State management handled with a combination of React's State, and Context hooks, allowing both prop based and context based state management when appropriate
* Styling handled with __custom CSS__ styling and various node packages for utilities such as modals
* Backend REST API developed with __Java__ and __Spring Boot__, following Spring's MVC Architecture
* Data persistence with an instance of __AWS RDS__ running a __PostgreSQL 12__ engine

## Installation
#### Requirements
* Node.js, Java 11 and Maven

#### Setup
* Clone this repository
## Frontend
* `cd` into `/frontend`
* run `npm install` to grab necessary dependencies
* run `npm start` to boot dev server

## Database
* Create an instance PostgreSQL 12
* Create a database called `shoe-table`
* Create a table called `shoe`

## Backend
* cd into backend
* open `src/main/java/resources/application.properties
* Enter your Database credentials for URL, Password. Add User as well if you've set up a PG user other than the root
* Build, and Run BackendApplication.java from `src/java/com/example/backend` to boot dev server

Application Should be running

## Live App
* _Coming Soon_
