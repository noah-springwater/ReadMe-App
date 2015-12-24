'use strict'

app.controller('readMeAppCtrl', ['$http', '$log', readMeAppCtrl]);

function readMeAppCtrl ($http, $log) {
  $log.log("Controller connected");
  var self = this;
  self.heading = "ReadMe";





function getToReads() {
  //go to data service
  $http
    .get('/')
}
}
