var game = {
  players: [],
  addPlayer: function(player){}
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.addCard = function(card){
    player.card = card;
  };
  return player;
};

$('.player').click(function(){
	var x = prompt('What is the players name?', '');
	var new_player = playerConstructor(Newb);
	game.addPlayer(new_player)
})
$(document).on('click','.getcard', function(){
	var poke_num = Math.floor(Math.random()
})