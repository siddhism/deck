var suits = [ "hearts", "diams", "clubs", "spades" ];
var ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];

var deck = [];

$(init);

function init() {
  makeDeck();
  
  $("#drawbtn").click( function() {
    
    var myCard = drawCard();
    
    if( myCard ) {
      makeCard( myCard.suit, myCard.rank );
    } else {
      alert("no more cards in the deck");
    }
    
  });
  
}

function makeDeck() {
  
  deck = [];
  //for each type of suit
  for( var i = 0; i < suits.length; i++ ) {
    //and for each rank
    for( var j = 0; j < ranks.length; j++ ) {
      
      //make a card
      var card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      card.order = j;
      deck.push(card);
    }
  }
  
  console.log( "MADE A NEW DECK OF ", deck.length, " CARDS" );
  console.log( deck );
  for (var i=0; i<deck.length; i++) {
    makeCard( deck[i].suit, deck[i].rank, i );
  }
}

// function drawCard() {
  
//   var card;
  
//   if( deck.length > 0 ) {
    
//     var randIndex = Math.floor( Math.random() * deck.length );
//     card = deck.splice( randIndex, 1 )[0];
//   }
  
//   return card;
// }

function makeCard( suit, rank, order ) {
  var card = $(".card.template").clone();
  card.attr("id", rank+suit);
  card.removeClass("template");
  
  card.find(".rank").html(rank);
  card.find(".suit").html("&"+suit+";");
  
  if( suit === "hearts" || suit === "diams" ) {
    card.addClass("red");
  }
  card.addClass(suit);
  card.attr("data-suit", suit);
  card.attr("data-order", order);
  $(".cards").append(card);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log('drag start, element info : ');
    console.log('id '+ ev.target.id);
    console.log('suit ', ev.target.dataset.suit);
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("suit", ev.target.dataset.suit);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var suit = ev.dataTransfer.getData("suit");
    console.log('drag start');
    console.log('suit '+ suit);
    if (ev.target.id != suit) {
        alert('not matching color');
    }
    else {
        console.log(document.getElementById(data));
        ev.target.appendChild(document.getElementById(data));        
    }
    // var current_dropzone = '#' + suit+'.card.'+suit;
    // console.log(current_dropzone);
    // var dropped_cards = $(current_dropzone);
    // dropped_cards.sort(function (a, b) {
    //   return a.dataset.order - b.dataset.order;
    // });
}

$('#reset').on('click', function (data) {
    location.reload();
});