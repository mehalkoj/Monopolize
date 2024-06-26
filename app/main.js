

let board = [{name: null}, {name: "GO!", tileType: "corner"}, {name: "Mediterranean Avenue", tileType: "property", cost: 60, rent: 12, owner: "", houses: 0, hotels: 0}, {name: "Community Chest", tileType: "chest"}, {name: "Baltic Avenue", tileType: "property", cost: 60, rent: 14, owner: "", houses: 0, hotels: 0}, {name: "Income Tax", tileType: "tax", cost: 200}, {name: "Reading Railroad", tileType: "property", special: "railroad", cost: 200, owner: ""}, 
{name: "Oriental Avenue", tileType: "property", cost: 100, rent: 10, owner: "", houses: 0, hotels: 0}, {name: "Chance", tileType: "chance"}, {name: "Vermont Avenue", tileType: "property", cost: 100, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Connecticut Avenue", tileType: "property", cost: 120, rent: 22, owner: "", houses: 0, hotels: 0},
{name: "Visiting Jail", tileType: "corner"}, {name: "St. Charles Place", tileType: "property", cost: 140, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Electric Company", tileType: "property", special: "utilities", cost: 150, rent: 20, owner: ""}, {name: "States Avenue", tileType: "property", cost: 140, rent: 20, owner: "", houses: 0, hotels: 0}, 
{name: "Virginia Avenue", tileType: "property", cost: 160, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Pennsylvania Railroad", tileType: "property", special: "railroad", cost: 200, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "St. James Place", tileType: "property", cost: 180, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Community Chest", tileType: "chest"}, 
{name: "Tennesse Avenue", tileType: "property", cost: 180, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "New York Avenue", tileType: "property", cost: 200, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Free Parking", tileType: "corner"}, {name: "Kentucky Avenue", tileType: "property", cost: 220, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Chance", tileType: "chance"},
{name: "Indiana Avenue", tileType: "property", cost: 220, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Illinois Avenue", tileType: "property", cost: 240, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "B & O Railroad", tileType: "property", special: "railroad", cost: 200, rent: 20, owner: ""}, {name: "Atlantic Avenue", tileType: "property", cost: 260, rent: 20, owner: "", houses: 0, hotels: 0},
{name: "Ventnor Avenue", tileType: "property", cost: 260, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Water Works", tileType: "property", special: "utilities", cost: 150, rent: 20, owner: ""}, {name: "Marvin Gardens", tileType: "property", cost: 280, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Go To Jail", tileType: "corner"}, {name: "Pacific Avenue", tileType: "property", cost: 300, rent: 20, owner: "", houses: 0, hotels: 0},
{name: "North Carolina Avenue", tileType: "property", cost: 300, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Community Chest", tileType: "chest"}, {name: "Pennsylvania", tileType: "property", cost: 320, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Shortline", tileType: "property", special: "railroad", cost: 200, rent: 20, owner: ""}, {name: "Chance", tileType: "chance"},
{name: "Park Place", tileType: "property", cost: 350, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Luxury Tax", tileType: "tax", cost: 75}, {name: "Boardwalk", tileType: "property", cost: 400, rent: 20, owner: "", houses: 0, hotels: 0}];



let players = [{name: "human", turn: true, color: "#03fca9", playerPOS: 0, money: 1500, inJail: 0, freeJail: 0, properties: []}, 
    {name: "cpu", turn: false, playerPOS: 0, money: 1500, inJail: 0, freeJail: 0, properties: []},
    {name: "cpu1", turn: false, playerPOS: 0, money: 1500, inJail: 0, freeJail: 0, properties: []}];



//let turns = decideStart();

function getCurPlayer(){
        for (let i = 0; i < players.length; i++){
            if (players[i].turn == true){
            console.log(players[i])
            return players[i];
        }
    }
};




function pay(scenario, index, player, diceRoll){
    if (scenario == "tax"){
        if (index == 5 || index == 39){
            player.money -= index.cost;
            return console.log(player.money)
        }
    }
    if (scenario == "rent"){
       const owner =  players.name[index.owner];
       let rent = index.rent;
       if (index.special == "railroad"){
        let numRR = 0
        const railroadRent = [25, 50, 100, 200];
        for (let i = 0; i < owner.properties.length(); i++){
            (owner.properties[i].special == "railroad") ? numRR++ : null;
            console.log("RailRoad's in Owner Inventory: " + i)
        }
        rent = railroadRent[numRR]
        console.log(rent);
       } else if (index.special == "utilities"){
        let numU = 0;
        for (let i = 0; i < owner.properties.length(); i++){
            (owner.properties[i].special == "utilities") ? numU++ : null;
            console.log("Utilitie's in Owner Inventory: " + i)
        }
        (numU == 0) ? rent = diceRoll * 5 : null;
        (numU == 1) ? rent = diceRoll * 10 : null;
       };

       if (index.houses == 1 || index.hotels == 1){
            rent = structures(index, player); // Should return to the rent variable the cost of rent whatever number of structures are on it. May need to add and aditional object to the .houses / .hotels.
       }
       player.money -= rent;
       owner.money += rent;
        return console.log(player + " , Lost " + index.rent + " . And Now Has: " + player.money)
    } /*else if (scenario == "tax"){

    }*/
}


function chest(index, player){
    let chestCards = []
}

function chance(index, player){
    let chanceCards = [{text: "Advance to GO. (Collect $200)", move: board[1], value: passGo(players[curPlayerTurn])}, {text: "Advance to Illinois Ave. If you pass Go, collect $200.", move: board[25], value: passGo(players[curPlayerTurn])}, "Advance to St. Charles Place, If you pass Go, collect $200.", "Advance token to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total 10 (ten) times the amount thrown.", "Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rent to which they are otherwise entitled. If Railroad is unowned, you may buy it from the Bank.",
    "Bank pays you dividend of $50.", "Get out of Jail Free.", "Go Back Three {3} Spaces", "Go to Jail.", "Make general repairs on all your property: For each house pay $25, For each hotel $100.", "Take a trip to Reading Railroad. If you pass GO collect $200.", "Pay Poor Tax of $15.", "Take a walk on the Boardwalk.", "You have been elected Chairman of the Board. Pay each player $50.", "Your building and loan matures. Receive Collect $150."]    
    let cv = 15;
    const rdm = Math.floor(Math.random() * cv) + 1;
    chanceCards(rdm);


    return 
}

function buyProp(index, player){
    player.money -= index.cost;
    const props = player.properties;
    props.push(index);
    console.log(player.properties);
    console.log("You Have Purchased " + index.name);
    console.log("Your Money Is Now " + player.money);
    document.getElementById("buy-modal").style.display = "none";
    document.getElementById(board.indexOf(index)).style.borderColor = player.color;

};

function auction(index, player){

     
}
 


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

function rollTurnList(){
    
}


function goToJail(player){

    console.log("Gone To Jail!")
    player.playerPOS = 11;
    player.inJail = 1;
}

/*
function movePiece(index){
    let player = getCurPlayer();
    let move = board[index]
    document.getElementById("player-marker").style.
} */


function turn(){
    const player = getCurPlayer();
    let totalTurns = 1;
    const dice = rollDice();
    const sumdice = dice[0] + dice[1];
    let playerMove = player.playerPOS + sumdice;
    let index = board[playerMove];
    //characterMove(index);

    if (player.playerPOS == 11 && player.inJail == 1){
        
    }
    while (totalTurns >= 1){
        (dice[0] == dice[1]) ? ++totalTurns : totalTurns + 0 ;
        if (totalTurns == 3){
            return goToJail(player);
        }
        if (index > 40 || index == null){
            let diff_to_zero = 40 - player.playerPOS;
            playerMove = dice[0] + dice[1] - diff_to_zero;
            index = board[playerMove];
            // Salary For Passing Go
            player.money += 200;
            console.log(player.money);
        };

        
        console.log("Turns: " + totalTurns);
        console.log("Dice 1: " + dice[0] + "   Dice 2: " + dice[1]);
        console.log(index.name);
        console.log("Player POS: " + playerMove);
            
    // This is after the main function of the turn, so now it is buy houses / hotels and trade or buy properties from other players.
        if (index.tileType == "tax"){
            pay("tax", index, player, sumdice)
        } else if (index.tileType == "property"){
            if (index.owner == ""){
                document.getElementById("buy-modal").style.display = "block";
                document.getElementById("buy-modal-text").innerHTML = "Would you like to buy " + index.name + "?";
                if (player.money > index.cost){
                    document.getElementById("buy-property-btn").onclick = function() {buyProp(index, player)};
                    document.getElementById("pass-property-btn").onclick = function() {document.getElementById("buy-modal").style.display = "none";
                };
                } else {
                    console.log("You Do Not Have Enough Money To Buy This Property.")
                    document.getElementById("buy-property-btn").style.display = "none";
                };
            } else if (index.tileType == "chest"){

            } else if (index.tileType == "chance"){
                chance(index, player);

            } else {
                console.log(pay("rent", index, player, sumdice));
            }
        }


        
        // Add button that appears to buy houses / hotels that call a function on buying houses and hotels.


        break;
    };

    player.playerPOS = playerMove;
    totalTurns - totalTurns;
    if (totalTurns == 0){
        player.turns = false;
        console.log("Turn Ended")
    }
};


class Board {
    constructor(){

    }

    init(){
        const board = document.getElementById("board");
        const ctx = board.getContext("2d");
        const img = new Image();
        img.src = "./monopoly.png"
        img.onerror = () => console.error("Image loading failed");
        img.onload = () => {
        ctx.drawImage(img, 0, 0)
    }

    
    }
}

const x = new Board;
x.init();

function createBoard(){
    
}

createBoard();
