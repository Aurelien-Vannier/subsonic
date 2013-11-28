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
        idAttribute: "id"
	});

    return Categorie;
});