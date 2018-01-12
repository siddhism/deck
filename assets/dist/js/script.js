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
  card.attr("order", order);
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
        alert('Not matching color');
    }
    else {
        console.log(document.getElementById(data));
        // ev.target.appendChild(document.getElementById(data));        
    }
    var current_dropzone = '#' + suit+' .card.'+suit;
    console.log('current dropzone', current_dropzone);
    console.log('current dropzone cards', $(current_dropzone).length);
    if($(current_dropzone).length == 0) {
      console.log('first child append it');
      ev.target.appendChild(document.getElementById(data));      
    }
    else {
      // find order which is greater than current one and insert after it
      var source_element = document.getElementById(data);
      console.log('source ', source_element);
      var source_order = source_element.dataset.order;
      console.log('order ', source_order);

      var dropped_cards = $(current_dropzone);
      console.log('dropped cards', dropped_cards);
      var insertAtEnd = true;
      var insertAtStart = false;
      for (var i = 0; i < dropped_cards.length; i++) {
        var current_card = dropped_cards[i];
        var current_order = current_card.dataset.order;
        console.log('current_card ', current_card);
        console.log('current_order', current_order);
        if(parseInt(source_order) < parseInt(current_order)) {
          insertAtEnd = false;
          $(source_element).insertBefore(current_card);
          break;
        }
        if (parseInt(source_order) > parseInt(current_order)) {
          continue;
        }
      }
      // If nothing inserted
      if (insertAtEnd) {
        ev.target.appendChild(document.getElementById(data));
      };
    }
}

$('#reset').on('click', function (data) {
    location.reload();
});