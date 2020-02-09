const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message)=> {

    if(message.content == 'ping') {
            // message.reply('pong');
            message.channel.sendMessage('pong');
    }


//node.js

const fs = require('fs');

const directoryPath = "F:/pics/kai/";//@CHANGE THAT

var names_arr = [];

function readFiles(dirname) {
  var filenames = fs.readdirSync(dirname);
    filenames.forEach(function(filename) {
		if(filename.indexOf(".jpg") !== -1){//@CAN CHANGE THAT
			names_arr.push(filename);
		}

    });
}

readFiles(directoryPath);

function getRandom(value){	
	return Math.floor(Math.random() * value);
}	
var random_img = getRandom(names_arr.length);

fs.readFile(directoryPath + names_arr[random_img], function(err, data) {
	if (err) throw err; // Fail if the file can't be read.
    
    if(message.content == 'dog'){
	    message.channel.send(`${message.author}, Here is your image!`, 
     {
	    				files: [
	    					data
	    				]
      })};//send
 });//fs
});

bot.login('Njc1ODU0MDA0OTg2ODM5MDUz.Xj9MTQ.oF4OR-j_NAuu7foRVZfDWIjdlGw');