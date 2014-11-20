var easyListeningApp = angular.module('easyListeningApp', ['ngAnimate']);

easyListeningApp.controller("MainCtrl", ["$scope", function($scope) {
    
    $scope.templates = [
        { name: "Home", url: "templates/home.htm"},
        { name: "About", url: "templates/about.htm"},
    ];
       
    $scope.activePage = $scope.templates[0];
    
    $scope.changeActive = function(name) {
        $scope.activePage = _.find($scope.templates, function(t) {
            return t.name == name;
        });
    };

}]);

easyListeningApp.controller("HomeCtrl", ["$scope", function($scope) {
    
    //Set playing status
    var d = new Date();    
    if (d.getDay() == 6 && d.getUTCHours() == 18) {
        $scope.showStatus = "maybe live right now";
    }
    else {
        $scope.showStatus = "not live right now";
    }
            
}]);

easyListeningApp.controller("AboutCtrl", ["$scope", "$timeout", function($scope, $timeout) {
    
    $scope.personSelected = false;
    
    $scope.daniel = {
        name: "Daniel",
        information: "Daniel is a sometimes bored person whose hobbies include having dysfunctional conversations with one to two people, walking until he's lost, and not knowing what's going on.",
        image: "img/IMG_0300.JPG",
        social: [
            {
                name: "Twitter",
                url: "https://twitter.com/helloimdanielhi"
            },
            {
                name: "last.fm",
                url: "http://www.last.fm/user/myusernamegone"
            }
        ]              
    };
    
    $scope.davis = {
        name: "Davis",
        information: "Davis is a guy named Davis. He has a zine that has cool things in it.",
        image: "img/1.png",
        social: [
            {
                name: "davisland.info",
                url: "http://davisland.info/"
            },
            {
                name: "in the end pretty much everything is mostly water",
                url: "http://intheendprettymucheverythingismostlywater.com/"
            }
        ]
    };
    
    $scope.changePerson = function(name) {
        $scope.personSelected = false;

        $timeout(function() {
            
            if (name == "Daniel") {
                $scope.activePerson = $scope.daniel;
            }
            else if (name == "Davis") {
                $scope.activePerson = $scope.davis;
            } 
            $scope.personSelected = true;
        },500);
    };
    
    $scope.activePerson = $scope.daniel;
    
}]);