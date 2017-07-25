'use strict';

/**
 * Handles all saving/retrieval of movie data
 */
angular.module('md.app.model')
    .service('StorageService', function (
        pouchDB
    ) {
        //private members
        var db = pouchDB('movies');

        var options = {
            /*eslint-disable camelcase */
            include_docs: true,
            /*eslint-enable camelcase */
            live: true
        };

        //public members
        this.getMovies = function () {
            return db.changes(options).$promise;
        };

        this.addMovie = function (movieData) {
            db.post(movieData);
        };

        this.deleteDb = function () {
            return db.destroy();
        };

    });
