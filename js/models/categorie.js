define(['models/base/model'],
    function(
        Model){

    var Categorie = Model.extend({

        // declaration des attributs
        defaults : {
            id       : "",
            name    : ""
        },
        
        // definition de l'id
        idAttribute: "id",

        parse : function( response ){
            response.name = $('<textarea/>').html(response.name).val();

            return response;
        },

        HTMLEncode: function(str){
            var i = str.length,
            aRet = [];

            while (i--) {
                var iC = str[i].charCodeAt();
                if (iC < 65 || iC > 127 || (iC>90 && iC<97)) {
                    aRet[i] = '&#'+iC+';';
                } else {
                    aRet[i] = str[i];
                }
            }
            return aRet.join('');    
        }
	});

    return Categorie;
});