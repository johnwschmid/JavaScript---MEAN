function Deck(){
	this.buildDeck();
}
function Card(value, suit){
	this.value = value;
	this.suit = suit;
}
function Player(name){
	this.name = name;
	this.hand = [];
}

Deck.prototype.buildDeck = function(){
	var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
		values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'],
		self = this;

	this.cards = [];
	suits.forEach(function(suit){
		values.forEach(function(value){
			self.cards.push(new Card(value, suit));
		});
	});
	return this;
}
Deck.prototype.shuffle = function(){
	var unshuffledEdge = this.cards.length,
		shuffleIdx,
		temp;
	// While there remain elements to shuffle…
	while (unshuffledEdge > 0) {
		// Pick an element in the unshuffled portion…
		shuffleIdx = Math.floor(Math.random() * unshuffledEdge);
		// Move the unshuffledEdge closer to front of array
		unshuffledEdge -= 1;
		// And swap the chosen card to the back
		temp = this.cards[shuffleIdx]
		this.cards[shuffleIdx] = this.cards[unshuffledEdge]
		this.cards[unshuffledEdge] = temp;
	}
	return this
}
Deck.prototype.reset = function(){
	this.buildDeck().shuffle();
}
Deck.prototype.deal = function(){
	return(this.cards.length > 0) ? this.cards.pop() : null;
}

Player.prototype.takeCard = function(deck){
	this.hand.push(deck.deal());
	return this;
}
Player.prototype.discard = function(cardIndex){
	if (this.hand.length > cardIndex){
		this.hand.splice(cardIndex, 1);
	}
	return this;
}