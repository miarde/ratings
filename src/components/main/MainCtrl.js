'use strict';

angular.module('md.app.main')
  .controller('MainCtrl', function (StorageService) {

    var self = this;

    this.options = {
      sortType: 'actors',
      sortReverse: false,
      searchMovies: '',
      newMovie: {
        newMovieName: '',
        newGenre: '',
        newActors: '',
        newRating: ''
      }
    };

    this.movies = [

    ];

    this.changeSort = function (sortType) {
      this.options.sortType = sortType;
      this.options.sortReverse = !this.options.sortReverse;
    };

    this.addMovie = function() {
        console.log('newMovie:', this.options.newMovie);
    };

  });
