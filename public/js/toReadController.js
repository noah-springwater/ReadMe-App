'use strict'

app.controller('readMeAppCtrl', ['$http', '$log', readMeAppCtrl]);

function readMeAppCtrl ($http, $log) {
  $log.log("Controller connected");
  var self = this;
  self.heading = "ReadMe";


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
        self.allRead = res.data;
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
      .post('/toRead', self.newBook)
  }

}
