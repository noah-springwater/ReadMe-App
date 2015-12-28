'use strict'

app.controller('readMeAppCtrl', ['$http', '$log', readMeAppCtrl]);

function readMeAppCtrl ($http, $log) {
  $log.log("Controller connected");
  var self = this;
  self.title = "ReadMe";


  self.allToRead;
  self.newToRead = {};
  self.addToRead = addToRead;
  self.getToRead;
  self.deleteToRead = deleteToRead;
  getToRead();

  self.allAlreadyRead;
  self.newAlreadyRead = {};
  self.addAlreadyRead = addAlreadyRead;
  self.getAlreadyRead;
  self.deleteAlreadyRead = deleteAlreadyRead;
  getAlreadyRead();

  function getToRead() {
    //go to data service
    $http
      .get('/toRead')
      .then(function (res){
        self.allToRead = res.data;
      })
      .catch(function (res) {
        $log.error('failure', res)
      });
  }

  function getAlreadyRead() {
    $http
      .get('/alreadyRead')
      .then(function (res) {
        self.allAlreadyRead = res.data;
      })
      .catch(function (res) {
        $log.error('failure', res);
      });
  }

  function addToRead() {
    $http
      .post('/toRead', self.newToRead)
      .then(function (response) {
        getToRead();
      })
      .catch(function (res) {
        $log.error('failure', res);
      });
    self.newToRead = {};
  }

  function addAlreadyRead(read) {
    $log.log("Working inside addAlreadyRead")
    $http
      .post('/alreadyRead', {done: read})
      .then(function (response) {
        getAlreadyRead();
      })
      .catch(function (res) {
        $log.error('failure', res);
      });
  }

  function deleteToRead(book) {
    $log.log(book);
    $http
      .delete('/toRead/' + book._id)
      .then(function (response) {
        getToRead();
      })
      .catch(function (res) {
        $log.error('failure', res);
      });
  }

  function deleteAlreadyRead(book) {
    $log.log(book);
    $http
      .delete('/alreadyRead/' + book._id)
      .then(function (response){
        getAlreadyRead();
      })
      .catch(function (res) {
        $log.error('failure', res);
      });
  }

}
