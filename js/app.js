
//Validation input fields
    angular.module('appSky',[])
        .controller('skyCtrl',['$scope',function($scope){
           $scope.validatePartner = function(error){
               var message;
                if(angular.isDefined(error)){
                    if(error.required){
                        message = 'Поле обезательное для заполнения';
                    }else if(error.email){
                        message = 'Введите коректной email адрес';
                    }
                }
                return message;
           } 
        }])
    
    
$(function(){
    $('.modal-cell').modal();
   
//add active classes
    $('.main-nav li a').click(function(){
        $('.main-nav li.active-link').removeClass("active-link");
        $(this).parent().addClass("active-link");
    })
    
    $('.lang .languages li').click(function(){
        $('.lang .languages li.active-lang').removeClass("active-lang");
        $(this).addClass("active-lang");
    })
    
    $('.news .nav-news li a').click(function(){
        $('.news .nav-news li a.active-link-news').removeClass("active-link-news");
        $(this).addClass("active-link-news");
    })

})