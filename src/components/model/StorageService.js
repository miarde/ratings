'use strict';

/**
 * Handles all saving/retrieval of movie data
 */
angular.module('md.app.model')
    .service('StorageService', function (

    ) {

        //private members
        var movies = [
            {
                title: 'Finding Nemo',
                genre: 'Animation',
                actors: 'Ellen DeGeneres',
                rating: 5
            },
            {
                title: 'Cars',
                genre: 'Animation',
                actors: 'Owen Wilson',
                rating: 4
            },
            {
                title: 'Toy Story',
                genre: 'Animation',
                actors: 'Tom Hanks',
                rating: 4.5
            },
            {
                title: 'Night at the Museum',
                genre: 'Action & Adventure',
                actors: 'Ben Stiller',
                rating: 3.5
            },
            {
                title: 'Step Brothers',
                genre: 'Comedy',
                actors: 'Will Ferrell',
                rating: 4.5
            }
        ];

        //public members
        this.getMovies = function () {
            return movies;
        };

        this.saveMovie = function (movieData) {
            movies.push(movieData);
        };

    });
