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

    