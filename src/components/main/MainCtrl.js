'use strict';

angular.module('md.app.main')
  .controller('MainCtrl', function (StorageService, toastr) {

    //private members
    var self = this;

    var handleDbGet = function (res) {
        self.movies.push(res.change.doc);
    };

    //public members
    this.options = {
      sortType: 'title',
      sortReverse: false,
      searchMovies: '',
      newMovie: {
        title: '',
        actors: '',
        genre: '',
        rating: ''
      }
    };

    this.movies = [];

    this.changeSort = function (sortType) {
      this.options.sortType = sortType;
      this.options.sortReverse = !this.options.sortReverse;
    };

    this.deleteDb = function () {
        StorageService.deleteDb()
            .then(function (response) {
                self.movies = [];
                toastr.success('Database deleted.');
            }).catch(function (err) {
                toastr.error('Error deleting database: ', err);
            });
    };

    this.addMovie = function () {
        StorageService.addMovie(this.options.newMovie);
    };

    this.getMovies = function () {
        StorageService.getMovies()
            .then(null, null, handleDbGet);
    };

    //init
    this.getMovies();

  });
