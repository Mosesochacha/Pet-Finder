# Pet-Finder

This is a full-stack project that uses the Sinatra web framework and ActiveRecord ORM for the backend, and React for the frontend. This README file serves as a guide to help you understand the project and how to set it up.

# Description

The project is a simple web application that allows users to create and manage their Pets. The backend is built using Sinatra and ActiveRecord, while the frontend is built using React. The application allows users to create, read, update, and delete Pets they have added.

# Getting started

- In order for you to use the content in this repo ensure you have the following:
  - Linux
  - Mac Os
- To use this repo on your machine you need to clone by either using:
  - terminal
  - forking directly from the repo.

###### Cloning using button labelled forking

      - click on the the fork button in the top most rigt corner of the github to fork the repo to your own account

###### Data sample

for me to come up with this application there has been afew website that offers free access to and adding pets .

I used Entity Relationship Diagram in order to come up with this applicatio.

# Entity Relationship Diagram

- Pets belongs to users and user has many pets which is one to many relationships .

-Below is how i realeted using ERM Diagram

<img src="/ERDDiagram1.jpg" height="200" alt="" width="400" srcset="">

## Deployment

Use the link below to for a live website

https://pet-finder-nine.vercel.app/

## Running and testing

Running the application is very straight forward. You can use the following steps to run the app.

- Before testing this application you need to do the following in your terminal:

  - Navigate through the the folder called client and run the command below to install npm dependencies by running;

                      cd client
                      npm install

  - Secondly after all the npms hava installed sucvcesfully roll back to the parent folder then naivigate to the folder called server.

                    cd ..

                    cd server

                    bundle install

        -              Prake db:migrate db:seed:replant

###### Test the application by:

        - First Login by clicking the "Login" button is you already have authenticated

        -else if you haven't authenticated signup by clicking the "sign up" button

### - In the app there is a Navbar which have the following features:

###### -Home

- This allows you to view all pets that are available.
- On your navbarleft hand side ther is saerch form that allows you to search by either breed or name you using there full name and if you have domnt know the ful name dont woryy, we cared about you. you also search by first letter.

- On each card has two icon at the bottom which allows user to delee and edit only pets they have added.

###### Add pet

- When user clicks on this link it allows user to add there pets and allow others to view who visits our website.
- After inserting inputs click on add button that will save the inserted values to the database.

###### view pet

This allows user to view the pet they have added.

###### LOGOUT

- it allows user to log out

## Author

Moses Ochacha

## License

[Apache License 2.0](https://choosealicense.com/licenses/)

## Tech Stack

        - Sinatra
        - Bootstrap
       -Active Record
        - JavaScript
        - cascading stylesheets
