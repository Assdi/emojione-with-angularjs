var app = angular.module("emojiApp", ['ngSanitize']); 
app.controller("mainCtrl", function($scope,$timeout) {
	$scope.Text="😁😂😃asd😶😚😙";
	$scope.yo=[{id:1,name:'ali'},{id:2,name:'asad'}]
	$scope.emo=function () {

		angular.element('#asad').html(emojione.unicodeToImage($scope.Comment.Text))
		// body...
	}
    //$scope.Comment.Text
});

app.directive('emojifyIt', emojifyIt);

    function emojifyIt($timeout) {
        console.log('directove bya sad')
        return {
     link : function(scope, element, attributes){
       console.log(attributes['emojifyIt'])
       $timeout(function() {         
       	element.html(emojione.unicodeToImage(attributes['emojifyIt']))
   }, 1000);

       
     }
   };
    }
