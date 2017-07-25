'use strict';

angular.module('md.app.main')
  .controller('MainCtrl', function ($scope, $timeout) {

    var self = this;

    this.options = {
      sortType: 'actors',
      sortReverse: false,
      searchMovies: ''
    };

    this.movies = [
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

    this.changeSort = function (sortType) {
      this.options.sortType = sortType;
      this.options.sortReverse = !this.options.sortReverse;
    };

    this.addMovie = function() {

    };

  });
