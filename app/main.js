


let board = [{name: "GO!", tileType: "start", effect: recieve("GO!")}, {name: "Mediterranean Avenue", tileType: "property", cost: 60, rent: 12, owner: "", houses: 0, hotels: 0}, 
{name: "Community Chest", tileType: "chest", effect: chest()}, {name: "Baltic Avenue", tileType: "property", cost: 60, rent: 14, owner: "", houses: 0, hotels: 0}, 
{name: "Income Tax", tileType: "tax", effect: pay("tax", null, 200)}, {name: "Reading Railroad", tileType: "railroad", cost: 200, rent: rrCalc(), owner: ""}, 
{name: "Oriental Avenue", tileType: "property", cost: 100, rent: 10, owner: "", houses: 0, hotels: 0}, {name: "Chance", tileType: "chance", effect: chance()},
{name: "Vermont Avenue", tileType: "property", cost: 100, rent: 20, owner: "", houses: 0, hotels: 0}, {name: "Connecticut Avenue", tileType: "property", cost: 120, rent: 22, owner: "", houses: 0, hotels: 0},
{name: "Visiting Jail", tileType: "Jail", injail: []}];

let players = [{name: "human", playerPOS: board[0], money: 1500, freejail: 0, properties: [/*board[3], board[10], board[12]*/]}, 
{name: "cpu", playerPOS: board[0], money: 1500, freejail: 0, properties: [/*board[3], board[10], board[12]*/]},
{name: "cpu", playerPOS: board[0], money: 1500, freejail: 0, properties: [/*board[3], board[10], board[12]*/]}];


function recieve(scenario, amount, player){

}

function pay(scenario, player, amount){
    if (scenario = "rent"){

    } else if (scenario = "tax"){

    } else if (scenario = "bank"){

    }

}


function chest(){

}

function chance(){

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
    const dice = [Math.floor(Math.random() * 7) + 1, Math.floor(Math.random() * 7) + 1]
    document.getElementById("dice-output").innerHTML = dice[0] + " " + dice[1];
    return dice
};

function decideStart(){
    return rollDice();
};



function turn(player){
    let turns = 1;
    while (turns == 1){
    const dice = rollDice();
    player.playerPOS + dice[0] + dice[1];
    if (player.playerPOS > 39){
        player.playerPOS = 0;
    };
    let index = board.indexOf(player.playerPOS);
    // For landing on a property that is owned / not owned
    
    if (index.owner == ""){
            buyModal(index)
        document.getElementById("buy-property-btn").onclick = buyProperty(index);
        document.getElementById("pass-property-btn").onclick = auction(index);
    } else {
        // Should be the other scenarios like chests, chance, income tax, and any property with an owner where you pay rent. Look and change the board structure as needed
        if (index.tileType)
    }
    
}



};

turn(players[0])