# Personal Movie Collection

Quick Start
-----------

* Install [Node.js](nodejs.org).
* Install [Bower](bower.io) and [Grunt](gruntjs.com) to your system:

        $ npm install -g grunt-cli bower

  See the section "Installing npm modules locally" below for some (optional)
  customization of `npm install -g` locations.

* From the root of the app directory, install all the dependencies by running:

        $ npm install
        $ bower install

* To run the development server:

        $ grunt serve

  This will start a server on http://localhost:3000.  It should open a browser
  tab for you automatically.  

#Offline Storage
* Uses PouchDB to store movie data.  In the future, you could synch this with a CouchDB instance.  All data handling is done through a StorageService so if you wanted to change the implementation, you could without changing the interface.

#ToDo
* Incorporate Rotten Tomatoes or other movie API - as of now they're either paid services or require a review process.
* Add the inline rating
* Add unit tests
* Add logging
* Pull out option lists into constants
* Add form validation
* Reset form after adding
