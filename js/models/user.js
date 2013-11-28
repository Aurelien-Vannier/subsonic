/*
    Gestion de l'utilisateur
    
    - connexion
    - deconnexion
*/
define([
    'models/base/model',
    'lib/utils'],
function(
    Model,
    Utils){

    var User = Model.extend({

        id: 'login',

		// declaration des attributs
        defaults : {
            login       : "",
            password    : "",
            server      : "",
            status       : false
        },

        localStorage: new Backbone.LocalStorage("user"),
        
        initialize : function( options ){
            Model.prototype.initialize.apply(this,arguments);

            if( !_.isUndefined( options ) ){
                this.set( 'login', options.login );
                this.set( 'password', options.password );
                this.set( 'server', options.server );
            }
		},

        connect : function( callback ){
            var self = this;
            
            var request = Utils.makeRequestOptions( {
                user : this,
                action : 'ping',
                data : {
                    u   : this.get('login'),
                    p   : this.get('password') 
                },

                success : function( response ){
                    if( response['subsonic-response'].status === 'ok' ){
                        self.set('status', true);
                        callback.success( response );
                    } else {
                        self.set('status', false);
                        callback.error( response['subsonic-response'].error.message );
                    }                    
                },
                
                error : function( response ){
                    self.set('status', false);
                    callback.error( response );
                },

                complete : function( ){
                    callback.complete();
                }
            } );


            $.ajax( request );
        },
        
        hexEncode : function(s) {
            var i, l, o = "", n;
            
            s += "";
            
            for (i = 0, l = s.length; i < l; i++) {
                n = s.charCodeAt(i).toString(16)
                o += n.length < 2 ? "0" + n : n;
            }
            
            return o;
        },

        fetch: function(){
            var returnValues = Model.prototype.fetch.apply(this,arguments);

            if( !_.isUndefined( this.attributes[0] ) ){
                var values = this.attributes[0];
                this.clear();
                this.set( values );
            }

            return returnValues;
        }

	});

    return User;
});