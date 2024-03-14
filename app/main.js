
// Oriental Avenue when landed on duplicates like crazy

let board = [{name: null}, {name: "GO!", tileType: "corner"}, {name: "Mediterranean Avenue", tileType: "property", cost: 60, rent: 12, owner: "", houses: 0, hotels: 0}, {name: "Community Chest", tileType: "chest"}, {name: "Baltic Avenue", tileType: "property", cost: 60, rent: 14, owner: "", houses: 0, hotels: 0}, {name: "Income Tax", tileType: "tax"}, {name: "Reading Railroad", tileType: "property", special: "railroad", cost: 200, owner: ""}, 
{name: "Oriental Avenue", tileType: "property", cost: 100, rent: 10, owner: "", houses: 0, hotels: 0}, {name: "Chance", tileType: "chance"}, {name: "Vermont Avenue", tileType: "property", cost: 100, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Connecticut Avenue", tileType: "property", cost: 120, rent: 22, owner: "", houses: 0, hotels: 0},
{name: "Visiting Jail", tileType: "corner"}, {name: "St. Charles Place", tileType: "property", cost: 140, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Electric Company", tileType: "property", special: "utilities", cost: 150, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "States Avenue", tileType: "property", cost: 140, rent: 20, owner: "", houses: 0, hotels: 0}, 
{name: "Virginia Avenue", tileType: "property", cost: 160, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Pennsylvania Railroad", tileType: "property", special: "railroad", cost: 200, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "St. James Place", tileType: "property", cost: 180, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Community Chest", tileType: "chest"}, 
{name: "Tennesse Avenue", tileType: "property", cost: 180, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "New York Avenue", tileType: "property", cost: 200, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Free Parking", tileType: "corner"}, {name: "Kentucky Avenue", tileType: "property", cost: 220, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Chance", tileType: "chance"},
{name: "Indiana Avenue", tileType: "property", cost: 220, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Illinois Avenue", tileType: "property", cost: 240, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "B & O Railroad", tileType: "property", special: "railroad", cost: 200, rent: 20, owner: ""}, {name: "Atlantic Avenue", tileType: "property", cost: 260, rent: 20, owner: "", houses: 0, hotels: 0},
{name: "Ventnor Avenue", tileType: "property", cost: 260, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Water Works", tileType: "property", special: "utilities", cost: 150, rent: 20}, {name: "Marvin Gardens", tileType: "property", cost: 280, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Go To Jail", tileType: "corner"}, {name: "Pacific Avenue", tileType: "property", cost: 300, rent: 20, owner: "", houses: 0, hotels: 0},
{name: "North Carolina Avenue", tileType: "property", cost: 300, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Community Chest", tileType: "chest"}, {name: "Pennsylvania", tileType: "property", cost: 320, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Shortline", tileType: "property", special: "railroad", cost: 200, rent: 20, owner: ""}, {name: "Chance", tileType: "chance"},
{name: "Park Place", tileType: "property", cost: 350, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Luxury Tax", tileType: "tax", rent: 75}, {name: "Boardwalk", tileType: "property", cost: 400, rent: 20, owner: "", houses: 0, hotels: 0}];

let players = [{name: "human", playerPOS: 0, money: 1500, inJail: 0, freeJail: 0, properties: [/*board[3], board[10], board[12]*/]}, 
{name: "cpu", playerPOS: 0, money: 1500, inJail: 0, freeJail: 0, properties: [/*board[3], board[10], board[12]*/]},
{name: "cpu1", playerPOS: 0, money: 1500, inJail: 0, freeJail: 0, properties: [/*board[3], board[10], board[12]*/]}];


function recieve(scenario, amount, player){

}

/*function pay(scenario, index, player){
    if (scenario = "rent"){
        const landlord = players[index.owner]

    } else if (scenario = "tax"){

    } else if (scenario = "bank"){

    }

} */

function pay(scenario, index, player){
    if (scenario == "rent"){
       const owner =  players.name[index.owner];
       player.money -= index.rent;
       owner.money += index.rent
        
    }
}


function chest(index){

}

function chance(index){

}

function rrCalc(index){
    
}

function utilCalc(){

}

function decideStart(){
    
} 



// param should get the index of board array and not use the player positiong (makes handling auctioning easier)
function buyModal(property){
    if (property.owner = ""){
        document.getElementById("buy-modal").style.display = "block";
        document.getElementById("buy-modal-text").innerHTML = "Would you like to buy " + property.name + "?";
    };

};
 
// param 
function buyProperty(property){
    document.getElementById("buy-modal").style.display = "none";
    const bought = document.getElementById("bought-property");
    bought.style.display = "block";
    document.getElementById("bought-property-message").innerHTML = "Yay! You bought " + property;
};

function rollDice(){
    const dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
    document.getElementById("dice-output").innerHTML = dice[0] + " " + dice[1];
    return dice
};

function customDice(dice1, dice2){
    const dice = [dice1, dice2];
    document.getElementById("dice-output").innerHTML = dice[0] + " " + dice[1];
    return dice
}

function decideStart(){
    /*
    let starting = [{}];
    for (let i = 0; i < players.length; i++){
        starting.push(players[i])
        starting.players[i] = rollDice();
        console.log("Player: " + players[i] + " Rolled a " + starting.players[i]);
    } */
};


function goToJail(player){

    console.log("Gone To Jail!")
    player.playerPOS = 11;
    player.inJail = 1;
}




function turn(player){
    let totalTurns = 1;
    const dice = rollDice();
    let playerMove = player.playerPOS + dice[0] + dice[1];
    let index = board[playerMove];

    if (player.playerPOS == 11 && player.inJail == 1){
        
    }
    while (totalTurns >= 1){
        (dice[0] == dice[1]) ? ++totalTurns : totalTurns + 0 ;
        if (totalTurns == 3){
            return goToJail(player);
        }
        // Check this later. Should find how many tiles from player position to board[0], then minus it from the dice roll
        if (index > 40 || index == null){
            let diff_to_zero = 40 - player.playerPOS;
            playerMove = dice[0] + dice[1] - diff_to_zero;
            index = board[playerMove];
        };

/// Issue of when a user paasses go, regardless of dice roll, it will bne adding 16.
        
        console.log("Turns: " + totalTurns);
        console.log("Dice 1: " + dice[0] + "   Dice 2: " + dice[1]);
        console.log(index.name);
        console.log("Player POS: " + playerMove);


        /*switch (index.tileType = ""){
            case "chest":
                chest(index);
                break;
            case "chance":
                chance(index);
                break;
            case "tax":
                pay("tax", index);
                break;
            case "property":
                if (index.owner == ""){
                    buyModal(index)
                document.getElementById("buy-property-btn").onclick = buyProperty(index);
                document.getElementById("pass-property-btn").onclick = auction(index);
                } else {
                    if (index.special == "railroad"){
                        rrCalc(index);
                        } else if (index.special == "utilities"){
                            utilCalc(index);
                        }
                        else {
                    pay("rent", index);
                    };
                };
            case "corner":
                if (index.name == "GO"){
                    player.money + 200;
                } else if (index.name == "Go To Jail"){
                    goToJail(player);
                }
                break;
                };*/
            
    // This is after the main function of the turn, so now it is buy houses / hotels and trade or buy properties from other players.

        break;
    };

    player.playerPOS = playerMove;
    totalTurns - totalTurns;
};




function testTurn(player){
    let totalTurns = 1;
    const dice = customDice(1, 1);
    player.playerPOS = 39;
    let playerMove = player.playerPOS + dice[0] + dice[1];
    let index = board[playerMove];
    while (totalTurns >= 1){
        (dice[0] == dice[1]) ? ++totalTurns : totalTurns + 0 ;
        if (totalTurns == 3){
            return jail(player);
        }
        // Check this later. Should find how many tiles from player position to board[0], then minus it from the dice roll
        if (index > 40 || index == null){
            let diff_to_zero = 40 - player.playerPOS;
            playerMove = dice[0] + dice[1] - diff_to_zero;
            index = board[playerMove];
        };

/// Issue of when a user paasses go, regardless of dice roll, it will bne adding 16.
        
        console.log("Turns: " + totalTurns)
        console.log("Dice 1: " + dice[0] + "   Dice 2: " + dice[1]) 
        //console.log(index.name);
        //console.log(move)
        console.log(index)
        console.log("Player POS: " + playerMove)


        /*switch (index.tileType = ""){
            case "chest":
                chest(index);
                break;
            case "chance":
                chance(index);
                break;
            case "tax":
                pay("tax", index);
                break;
            case "property":
                if (index.owner == ""){
                    buyModal(index)
                document.getElementById("buy-property-btn").onclick = buyProperty(index);
                document.getElementById("pass-property-btn").onclick = auction(index);
                } else {
                    if (index.special == "railroad"){
                        rrCalc(index);
                        } else if (index.special == "utilities"){
                            utilCalc(index);
                        }
                        else {
                    pay("rent", index);
                    };
                };
            case "corner":
                if (index.name == "GO"){
                    player.money + 200;
                } else if (index.name == "Go To Jail"){
                    jail(player);
                }
                break;
                };*/
            
    // This is after the main function of the turn, so now it is buy houses / hotels and trade or buy properties from other players.

        break;
    };

    player.playerPOS = playerMove;
    totalTurns - totalTurns;
};