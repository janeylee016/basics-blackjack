// HELPER FUNCTIONS

// Get a random index ranging from 0 (inclusive) to max (exclusive)
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

// var makeDeck = function () {
//   // Initialise an empty deck array
//   var cardDeck = [];
//   // Initialise an array of the 4 suits in our deck. We will loop over this array.
//   var suits = ["hearts", "diamonds", "clubs", "spades"];

//   // Loop over the suits array\
//   var suitIndex = 0;
//   while (suitIndex < suits.length) {
//     // Store the current suit in a variable
//     var currentSuit = suits[suitIndex];

//     // Loop from 1 to 13 to create all cards for a given suit
//     // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
//     // This is an example of a loop without an array.
//     var rankCounter = 1;
//     while (rankCounter <= 13) {
//       // By default, the card name is the same as rankCounter
//       var cardName = rankCounter;

//       // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
//       if (cardName == 1) {
//         cardName = "ace";
//       } else if (cardName == 11) {
//         cardName = "jack";
//       } else if (cardName == 12) {
//         cardName = "queen";
//       } else if (cardName == 13) {
//         cardName = "king";
//       }

//       // Create a new card with the current name, suit, and rank
//       var card = {
//         name: cardName,
//         suit: currentSuit,
//         rank: rankCounter,
//       };

//       // Add the new card to the deck
//       cardDeck.push(card);

//       // Increment rankCounter to iterate over the next rank
//       rankCounter += 1;
//     }

//     // Increment the suit index to iterate over the next suit
//     suitIndex += 1;
//   }

//   // Return the completed card deck
//   return cardDeck;
// };

// Full deck of cards
var makeDeck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1,
    image: "cards/A-H.png",
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2,
    image: "cards/2-H.png",
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3,
    image: "cards/3-H.png",
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4,
    image: "cards/4-H.png",
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5,
    image: "cards/5-H.png",
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6,
    image: "cards/6-H.png",
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7,
    image: "cards/7-H.png",
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8,
    image: "cards/8-H.png",
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9,
    image: "cards/9-H.png",
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10,
    image: "cards/10-H.png",
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11,
    image: "cards/J-H.png",
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12,
    image: "cards/Q-H.png",
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13,
    image: "cards/K-H.png",
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1,
    image: "cards/A-D.png",
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2,
    image: "cards/2-D.png",
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3,
    image: "cards/3-D.png",
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4,
    image: "cards/4-D.png",
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5,
    image: "cards/5-D.png",
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6,
    image: "cards/6-D.png",
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7,
    image: "cards/7-D.png",
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8,
    image: "cards/8-D.png",
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9,
    image: "cards/9-D.png",
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10,
    image: "cards/10-D.png",
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11,
    image: "cards/J-D.png",
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12,
    image: "cards/Q-D.png",
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13,
    image: "cards/K-D.png",
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1,
    image: "cards/A-C.png",
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2,
    image: "cards/2-C.png",
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3,
    image: "cards/3-C.png",
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4,
    image: "cards/4-C.png",
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5,
    image: "cards/5-C.png",
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6,
    image: "cards/6-C.png",
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7,
    image: "cards/7-C.png",
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8,
    image: "cards/8-C.png",
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9,
    image: "cards/9-C.png",
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10,
    image: "cards/10-C.png",
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11,
    image: "cards/J-C.png",
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12,
    image: "cards/Q-C.png",
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13,
    image: "cards/K-C.png",
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1,
    image: "cards/A-S.png",
  },
  {
    name: "2",
    suit: "spades",
    rank: 2,
    image: "cards/2-S.png",
  },
  {
    name: "3",
    suit: "spades",
    rank: 3,
    image: "cards/3-S.png",
  },
  {
    name: "4",
    suit: "spades",
    rank: 4,
    image: "cards/4-S.png",
  },
  {
    name: "5",
    suit: "spades",
    rank: 5,
    image: "cards/5-S.png",
  },
  {
    name: "6",
    suit: "spades",
    rank: 6,
    image: "cards/6-S.png",
  },
  {
    name: "7",
    suit: "spades",
    rank: 7,
    image: "cards/7-S.png",
  },
  {
    name: "8",
    suit: "spades",
    rank: 8,
    image: "cards/8-S.png",
  },
  {
    name: "9",
    suit: "spades",
    rank: 9,
    image: "cards/9-S.png",
  },
  {
    name: "10",
    suit: "spades",
    rank: 10,
    image: "cards/10-S.png",
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11,
    image: "cards/J-S.png",
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12,
    image: "cards/Q-S.png",
  },
  {
    name: "king",
    suit: "spades",
    rank: 13,
    image: "cards/K-S.png",
  },
];

// Function that creates new deck
var createNewDeck = function () {
  // var newDeck = makeDeck();
  var shuffleDeck = shuffleCards(makeDeck);
  return shuffleDeck;
};

// Deal a card
var dealCard = function (deck) {
  return deck.pop();
};

// Check for blackjack
var checkForBlackjack = function (handArray) {
  // check player hand
  var playerCardOne = handArray[0];
  var playerCardTwo = handArray[1];
  var isBlackjack = false;

  // if there is a blackjack, return true
  // possible scenarios
  // 1st card ace, 2nd card 10 or picure cards
  // 1st card 10 or picture cards, 2nd card, ace
  if (
    (playerCardOne.name == "ace" && playerCardTwo.rank >= 10) ||
    (playerCardOne.rank >= 10 && playerCardTwo.name == "ace")
  ) {
    isBlackjack = true;
  }
  return isBlackjack;
};

// Function that displays the player and dealer hands in a message
// var displayPlayerAndDealerHands = function (playerHandArray, dealerHandArray) {
//   // Player hand
//   var playerMessage = "Player Hand:<br>";
//   var index = 0;
//   while (index < playerHandArray.length) {
//     playerMessage =
//       playerMessage +
//       "-" +
//       playerHandArray[index].name +
//       "of" +
//       playerHandArray[index].suit +
//       "<br>";
//     index = index + 1;
//   }
//   //Dealer hand
//   var dealerMessage = "Dealer Hand:<br>";
//   index = 0;
//   while (index < dealerHandArray.length) {
//     dealerMessage =
//       dealerMessage +
//       "-" +
//       dealerHandArray[index].name +
//       "of" +
//       dealerHandArray[index].suit +
//       "<br>";
//     index = index + 1;
//   }
//   return playerMessage + "<br><br>" + dealerMessage;
// };

//function that calculates a hand
var calculateTotalHand = function (handArray) {
  var index = 0;
  var totalHandValue = 0;
  var aceCounter = 0;

  // loop through player or dealer hand and add up the value
  while (index < handArray.length) {
    var currentCard = handArray[index];

    // for jack, queen, king, value is 10
    if (
      currentCard.name == "jack" ||
      currentCard.name == "queen" ||
      currentCard.name == "king"
    ) {
      totalHandValue = totalHandValue + 10;
    } else if (currentCard.name == "ace") {
      totalHandValue = totalHandValue + 11;
      aceCounter = aceCounter + 1;
    } else {
      totalHandValue = totalHandValue + currentCard.rank;
    }
    index = index + 1;
  }

  var indexAce = 0;
  while (indexAce < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    indexAce = indexAce + 1;
  }
  return totalHandValue;
};

// Function that displays the total hand values of the player and the dealer in a message
// var displayHandTotalValues = function (playerHandValue, dealerHandValue) {
//   var totalHandValueMessage =
//     "<br>Player total hand value: " +
//     playerHandValue +
//     "<br>Dealer total hand value:" +
//     dealerHandValue;
//   return totalHandValueMessage;
// };

var showCards = function (handArray, playerType) {
  var outputMessage = "";
  var index = 0;
  while (index < handArray.length) {
    outputMessage =
      outputMessage +
      "<img class='" +
      playerType +
      "-hand' src='" +
      String(handArray[index].image) +
      "'/>";
    index += 1;
  }
  return outputMessage;
};

var showFirstCard = function (handArray) {
  var outputMessage = "";
  var index = 1;
  outputMessage =
    outputMessage + "<img src='" + String(handArray[0].image) + "'/>";
  while (index < handArray.length) {
    outputMessage = outputMessage + "<img src='cards/BACK.png'/>";
    index += 1;
  }
  return outputMessage;
};

var finalOutputMessage = function (
  dealerHand,
  dealerHandTotalValue,
  playerHand,
  playerHandTotalValue
) {
  var finalMessage =
    "<h2> Dealer Cards: </h2>" +
    showCards(dealerHand, "dealer") +
    "<br> <h2>Dealer Total Hand Value:" +
    dealerHandTotalValue +
    "</h2>" +
    "<h2> Player Cards: </h2>" +
    showCards(playerHand, "player") +
    "<br> <h2>Player total hand value: " +
    playerHandTotalValue +
    "</h2>";
  return finalMessage;
};

var scoreBoardOutput = function (dealerWins, playerWins, ties, noWins) {
  var numOfDealerWins = document.getElementById("dealerWins");
  numOfDealerWins.innerHTML = "<h3>" + dealerWins + "</h3>";
  var numOfPlayerWins = document.getElementById("playerWins");
  numOfPlayerWins.innerHTML = "<h3>" + playerWins + "</h3>";
  var numOfTies = document.getElementById("ties");
  numOfTies.innerHTML = "<h3>" + ties + "</h3>";
  var numOfNoWins = document.getElementById("noWinner");
  numOfNoWins.innerHTML = "<h3>" + noWins + "</h3>";
};

document.querySelector("#hit-button").disabled = true;
document.querySelector("#stand-button").disabled = true;

// Declare variables
var GAME_START = "game_start";
var GAME_CARDS_DRAWN = "cards_drawn";
var GAME_RESULTS_SHOWN = "results_shown";
var GAME_HIT_OR_STAND = "game_hit_or_stand";
var GAME_CONTINUE = "game_continue";
var currentGameMode = GAME_START;

// Declare variables to store player and dealer hands
// We use arrays as each hand will be holding multiple card objects
var playerHand = [];
var dealerHand = [];
var playerWins = 0;
var dealerWins = 0;
var ties = 0;
var noWins = 0;
var playerHandTotalValue = 0;
var dealerHandTotalValue = 0;

scoreBoardOutput(dealerWins, playerWins, ties, noWins);

// Declare variable to hold deck of cards
var gameDeck = "empty at the start";

// Game Functions

//Main Functions
var main = function (input) {
  var outputMessage = "";

  if (input == "restart") {
    currentGameMode = GAME_START;
    playerHand = [];
    dealerHand = [];
    playerWins = 0;
    dealerWins = 0;
    ties = 0;
    noWins = 0;
    scoreBoardOutput(dealerWins, playerWins, ties, noWins);
    outputMessage = "";

    console.log("restart1");
  }

  // First click
  if (currentGameMode == GAME_START) {
    playerHand = [];
    dealerHand = [];
    //create the game card
    gameDeck = createNewDeck();

    console.log("LENGTH", gameDeck.length);
    // Deal 2 cards to player and dealer respectively
    playerHand.push(dealCard(gameDeck));
    dealerHand.push(dealCard(gameDeck));
    playerHand.push(dealCard(gameDeck));
    dealerHand.push(dealCard(gameDeck));
    document.querySelector("#start-button").disabled = true;
    document.querySelector("#hit-button").disabled = false;
    document.querySelector("#stand-button").disabled = false;

    // progress the gameMode
    // currentGameMode = GAME_CARDS_DRAWN;

    // write and return the appropriate output message
    // outputMessage =
    //   "<h2> Everyone has been dealt two cards.</h2>"
    // return outputMessage;
    // }

    // Second click
    // if (currentGameMode == GAME_CARDS_DRAWN) {
    //check for blackjack
    var playerHasBlackjack = checkForBlackjack(playerHand);
    var dealerHasBlackjack = checkForBlackjack(dealerHand);

    if (playerHasBlackjack == true || dealerHasBlackjack == true) {
      // both players and dealer has blackjack -> tie
      if (playerHasBlackjack == true && dealerHasBlackjack == true) {
        ties += 1;
        scoreBoardOutput(dealerWins, playerWins, ties, noWins);
        outputMessage =
          "<h2> Everyone has been dealt two cards.</h2>" +
          "<h2> Dealer Cards: </h2> <br>" +
          showCards(dealerHand, "dealer") +
          "<br>" +
          "<br> <h2> Player Cards: </h2> <br>" +
          showCards(playerHand, "player") +
          "<br> <h2>It is a blackjack tie </h2>";
        // continue the game
        currentGameMode = GAME_START;
        playerHand = [];
        dealerHand = [];
        document.querySelector("#start-button").disabled = false;
        document.querySelector("#hit-button").disabled = true;
        document.querySelector("#stand-button").disabled = true;
      }
      // only player has blackjack -> player wins
      else if (playerHasBlackjack == true && dealerHasBlackjack == false) {
        playerWins += 1;
        scoreBoardOutput(dealerWins, playerWins, ties, noWins);
        outputMessage =
          "<h2> Everyone has been dealt two cards.</h2>" +
          "<h2> Dealer Cards: </h2> <br>" +
          showCards(dealerHand, "dealer") +
          "<br>" +
          "<br> <h2> Player Cards: </h2> <br>" +
          showCards(playerHand, "player") +
          "<br> <h2> Player wins by blackjack! </h2>";
        // continue the game
        currentGameMode = GAME_START;
        playerHand = [];
        dealerHand = [];
        document.querySelector("#start-button").disabled = false;
        document.querySelector("#hit-button").disabled = true;
        document.querySelector("#stand-button").disabled = true;
      }
      // only dealer has blackjack -> dealer wins
      else {
        dealerWins += 1;
        scoreBoardOutput(dealerWins, playerWins, ties, noWins);
        outputMessage =
          "<h2> Everyone has been dealt two cards.</h2>" +
          "<h2> Dealer Cards: </h2> <br>" +
          showCards(dealerHand, "dealer") +
          "<br>" +
          "<br> <h2> Player Cards: </h2> <br>" +
          showCards(playerHand, "player") +
          "<br> <h2>Dealer wins by blackjack!</h2>";
        // continue the game
        currentGameMode = GAME_START;
        playerHand = [];
        dealerHand = [];
        document.querySelector("#start-button").disabled = false;
        document.querySelector("#hit-button").disabled = true;
        document.querySelector("#stand-button").disabled = true;
      }
    } else {
      // no blackjack -> game continues
      // calculate the total hand value of both player and dealer
      playerHandTotalValue = calculateTotalHand(playerHand);
      dealerHandTotalValue = calculateTotalHand(dealerHand);
      outputMessage =
        "<h2> Everyone has been dealt two cards.</h2>" +
        "<h2> Dealer Cards: </h2>" +
        showFirstCard(dealerHand, "dealer") +
        "<br> <h2> Player Cards: </h2>" +
        showCards(playerHand, "player") +
        "<br> <h2> Player total hand value: " +
        playerHandTotalValue +
        "</h2> ";
      // change game mode
      currentGameMode = GAME_HIT_OR_STAND;
    }
    console.log("CHANGED");
    return outputMessage;
  }

  // Hit or stand
  if (currentGameMode == GAME_HIT_OR_STAND) {
    console.log("HITORSTAND");
    // player hit
    if (input == "hit") {
      playerHand.push(dealCard(gameDeck));
      playerHandTotalValue = calculateTotalHand(playerHand);
      dealerHandTotalValue = calculateTotalHand(dealerHand);
      outputMessage =
        "<h2> Dealer Cards: </h2>" +
        showFirstCard(dealerHand, "dealer") +
        "<br> <h2> Player Cards: </h2>" +
        showCards(playerHand, "player") +
        "<br> <h2> You drew another card." +
        "<br> <h2>Player total hand value: " +
        playerHandTotalValue +
        "</h2>" +
        '<h2> Please input "hit" or "stand" </h2>';
      console.log(outputMessage);
    }
    // player stand
    else if (input == "stand") {
      playerHandTotalValue = calculateTotalHand(playerHand);
      dealerHandTotalValue = calculateTotalHand(dealerHand);

      while (dealerHandTotalValue < 17) {
        dealerHand.push(gameDeck.pop());
        dealerHandTotalValue = calculateTotalHand(dealerHand);
      }
      console.log("DEALERHANDVALUE", dealerHandTotalValue);
      // compare total hand value
      // same value -> tie
      if (playerHandTotalValue < 22 && dealerHandTotalValue < 22) {
        if (playerHandTotalValue == dealerHandTotalValue) {
          ties += 1;
          scoreBoardOutput(dealerWins, playerWins, ties, noWins);
          outputMessage =
            finalOutputMessage(
              dealerHand,
              dealerHandTotalValue,
              playerHand,
              playerHandTotalValue
            ) + "<h2> It is a tie! </h2>";
        }
        //player higher value -> player wins
        else if (playerHandTotalValue > dealerHandTotalValue) {
          playerWins += 1;
          scoreBoardOutput(dealerWins, playerWins, ties, noWins);
          outputMessage =
            finalOutputMessage(
              dealerHand,
              dealerHandTotalValue,
              playerHand,
              playerHandTotalValue
            ) + "<h2> Player wins! </h2>";
        }
        // dealer higher value -> dealer wins
        else {
          dealerWins += 1;
          scoreBoardOutput(dealerWins, playerWins, ties, noWins);
          outputMessage =
            finalOutputMessage(
              dealerHand,
              dealerHandTotalValue,
              playerHand,
              playerHandTotalValue
            ) + "<h2> Dealer wins! </h2>";
        }
      } else if (playerHandTotalValue >= 22 && dealerHandTotalValue < 22) {
        dealerWins += 1;
        scoreBoardOutput(dealerWins, playerWins, ties, noWins);
        outputMessage =
          finalOutputMessage(
            dealerHand,
            dealerHandTotalValue,
            playerHand,
            playerHandTotalValue
          ) + "<h2>Dealer wins!</h2>";
      } else if (playerHandTotalValue < 22 && dealerHandTotalValue >= 22) {
        playerWins += 1;
        scoreBoardOutput(dealerWins, playerWins, ties, noWins);
        outputMessage =
          finalOutputMessage(
            dealerHand,
            dealerHandTotalValue,
            playerHand,
            playerHandTotalValue
          ) + "<h2> Player wins! </h2>";
      } else {
        noWins += 1;
        outputMessage =
          finalOutputMessage(
            dealerHand,
            dealerHandTotalValue,
            playerHand,
            playerHandTotalValue
          ) + "<br> <h2> Both of you have busted! There is no winner! </h2>";
      }
      // continue the game
      currentGameMode = GAME_START;
      playerHand = [];
      dealerHand = [];
      document.querySelector("#start-button").disabled = false;
      document.querySelector("#hit-button").disabled = true;
      document.querySelector("#stand-button").disabled = true;
      console.log("continue");
    } else if (input == "restart") {
      currentGameMode = GAME_START;
      playerHand = [];
      dealerHand = [];
      playerWins = 0;
      dealerWins = 0;
      ties = 0;
      noWins = 0;
      scoreBoardOutput(dealerWins, playerWins, ties, noWins);
      console.log("restart");
    }

    //input validation
    else {
      outputMessage =
        '<h2> wrong input.. only "hit" or "stand" are valid. <br><br> </h2>' +
        "<h2> Dealer Cards: </h2> <br>" +
        showCards(dealerHand, "dealer") +
        "<br>" +
        "<br> <h2> Player Cards: </h2> <br>" +
        showCards(playerHand, "player");
    }

    return outputMessage;
  }
};
