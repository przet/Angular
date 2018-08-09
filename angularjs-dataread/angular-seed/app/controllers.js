angular.module('F1FeederApp.controllers', []).
  controller('driversController', function($scope){
    $scope.driversList = [
      {
        Driver:{
          givenName: 'Ash'
          familiyName: 'Arnold'
        },
        points:405,
        discipline: [
          {name: "TSE"}
        ]
      },
      {
        Driver:{
          givenName: 'Rian'
          familiyName: 'Armstrong'
        },
        points:388,
        discipline: [
          {name: "TSS"}
        ]
      },
      {
        Driver:{
          givenName: 'Para'
          familiyName: 'Thomas'
        },
        points:398,
        discipline: [
          {name: "TMSM&A"}
        ]
      }
    ];
  });
        
        
