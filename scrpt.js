var easyListeningApp = angular.module('easyListeningApp', []);


easyListeningApp.controller("MainCtrl", ["$scope", "$location", function($scope, $location) {

    $scope.archives = [
        {
            pic:"http://i.imgur.com/Dc14jWG.jpg",
            title: "We're back!",
            audioSrc: "https://db.tt/KvnnPNma"
        },
        {
            pic:"http://i.imgur.com/7mco7bD.jpg",
            title: "Studying music to help you stu  dy",
            audioSrc:"https://db.tt/vsW4gd9G"
        },
        {
            pic:"http://i.imgur.com/COLZFQP.jpg",
            title: "Davis and Daniel present: An Easy Listening Christmas",
            audioSrc:"https://db.tt/rofhlIuV"
        },
        
        {
            pic:"http://i.imgur.com/3101tp3.jpg",
            title: "Loop the radio!",
            audioSrc:"https://db.tt/gDAVXKEn"
        }

    ];    
    

    

}]);

$("window").ready(function() {
        $('.img-wrapper').find("img").each(function(){
        var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    });
});
    