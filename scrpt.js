var easyListeningApp = angular.module('easyListeningApp', ['ngAnimate'])
    .config(function($sceProvider) {
        $sceProvider.enabled(false);
    });



easyListeningApp.controller("MainCtrl", ["$scope", "$location", function($scope, $location) {
        
    $scope.templates = [
        { name: "Home",    url: "templates/home.htm" },
        { name: "About",   url: "templates/about.htm" },
        { name: "Archive", url: "templates/archive.htm" }
    ];
           
    $scope.changeActive = function(name) {
        $scope.activePage = _.find($scope.templates, function(t) {
            return t.name == name;
        });
    };
    
    $scope.parseUrl = function() {
        switch ($location.path()) {
                case "/about":
                    $scope.changeActive("About");
                    break;
                case "/home": 
                    $scope.changeActive("Home");
                    break;  
                default:
                    $scope.changeActive("Home");
        }
    }
    $scope.parseUrl();    
    

}]);

easyListeningApp.controller("HomeCtrl", ["$scope", function($scope) {
    //Set playing status
    var d = new Date();    
    if (d.getDay() == 3 && d.getUTCHours() == 18) {
        $scope.showStatus = "maybe live right now";
    }
    else {
        $scope.showStatus = "not live right now";
    }
    
    $scope.lastShow = {
        name: "Studying music to help you study",
        src: "https://db.tt/vsW4gd9G"
    };
    
        
    
            
}]);

easyListeningApp.controller("AboutCtrl", ["$scope", "$timeout", function($scope, $timeout) {
    
    $scope.personSelected = false;
    
    $scope.daniel = {
        name: "Daniel",
        information: "Daniel hasn't done much of anything.",
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
    
easyListeningApp.controller("ArchiveCtrl", ["$scope", "$location", function($scope, $location) {
    $scope.archives = [
        {
            pic:"http://i.imgur.com/3101tp3.jpg",
            title: "Loop the radio!",
            audioSrc:"https://db.tt/gDAVXKEn"
        },
        {
            pic:"http://i.imgur.com/COLZFQP.jpg",
            title: "Davis and Daniel present: An Easy Listening Christmas",
            audioSrc:"https://db.tt/rofhlIuV"
        },
        {
            pic:"http://i.imgur.com/7mco7bD.jpg",
            title: "Studying music to help you study",
            audioSrc:"https://db.tt/vsW4gd9G"
        }
    ];
    

    
    
}]);
    