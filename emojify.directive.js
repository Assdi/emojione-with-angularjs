

    angular
        .module('emojiApp')
        .directive('emojifyIt', emojifyIt);

    function emojifyIt() {
        console.log('directove bya sad')
        return {
     link : function(scope, element, attributes){
       console.log(attributes['emojifyIt'])
         element.html(emojione.unicodeToImage(attributes['emojifyIt']))
       
     }
   };
    }
