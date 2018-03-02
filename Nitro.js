    module.exports = {

        Discord: function(){
            return require('discord.js');
        },

        Client: function(){

            // Get the discord client from discordJS
            var Discord     = require('discord.js');
            var client      = new Discord.Client();

            client.sharedGuilds     = function( user ){

                if(typeof user == "string"){
                    var user = client.users.get(user);
                }

                if(typeof user == "undefined"){ return undefined; }
                
                var guilds = client.guilds.array();
                var store = new Discord.Collection();

				for(var i=0; i < guilds.length; i++) {
					
					var g = guilds[i];
					if(g.members.get(user.id)){
						store.set(g.id, g)
                    }

                }
                
                return store;

            }



            return client;

        }

    }

    