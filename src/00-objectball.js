function gameObject() {
  const teams = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number:30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 17
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  }
  return teams;
}

function homeTeamName() {
  let object = gameObject();
  return object['home']['teamName'];
}

function awayTeamName() {
  const object = gameObject();
  return object['away']['teamName'];
}

console.log(homeTeamName());

function homeTeam() {
  return gameObject().home;
}

function homeTeamPoints() {
  const players = homeTeam().players;
  let points = 0;
  for (key in players) {
    points += players[key].points;
  }
  return points;
}

function awayTeamPoints() {
  const players = awayTeam().players;
  let points = 0;
  for (key in players) {
    points += players[key].points;
  }
  return points;
}

function awayTeam() {
  return gameObject().away;
}

function players() {
  // return {...homePlayers, ...awayPlayers};
  return Object.assign({}, homeTeam().players, awayTeam().players);
}

function colors() {
  return Object.assign({}, homeTeam().colors, awayTeam().colors);
}

function numPointsScored(playerName) {
  // takes in an argument of a player's name and returns the number of points scored for that player
  // Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.


  // Object.entries(players()).forEach(playerArray => {
  //   if (playerArray[0] === playerName) {
  //     return playerArray[1].points;
  //   }
  // });

  // const playerArrays = Object.entries(players());
  // let points;
  // playerArrays.forEach(playerArray => {
  //   if (playerArray[0] === playerName) {
  //     points = playerArray[1].points;
  //   }
  // });
  // return points;

  // const playerArrays = Object.entries(players())
  // const player = playerArrays.find(playerArray => playerArray[0] === playerName);
  // return player[1]['points'];

  return players()[playerName].points;


  // for (const player in players()) { // iterate through players
  //   if (player === playerName) {  // check to see if player matchess function argument
  //     return players()[player].points; // return the player's points
  //   }

  // }


  // for (const gameKey in game) { // iterate through game keys (home, away)
  //   const teamObj = game[gameKey]
  //   const playerObj = teamObj.players;
  //   debugger
  //   for (const playerKey in playerObj) { // iterate through players
  //     debugger
  //     if (playerKey === playerName) {  // check to see if player matches function
  //       return playerObj[playerKey].points; // return the player's points
  //     }
  //   }
  // }
}

console.log('Points Scored:', numPointsScored('Alan Anderson'));

function shoeSize(playerName) {
  // takes in an argument of a player's name and returns the shoe size for that player
  // Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the function as an argument?

  return players()[playerName].shoe;
}

console.log("Shoe Size:", shoeSize("Brendan Haywood"));

function teamColors(teamName) {
  // takes an argument of the team name and returns an array of that teams colors.
  // create an array of the two teams
  // iterate over the array, looking for the team name
    // if the team name matches the input
      // return that team's colors
  const teams = [homeTeam(), awayTeam()];
  for (var i = 0; i < teams.length; i++) {
    if (teams[i].teamName === teamName) {
      return teams[i].colors;
    }
  }
}

console.log('Colors:', teamColors('Charlotte Hornets'));

function teamNames() {
  // operates on the game object to return an array of the team names.
  return [homeTeam().teamName, awayTeam().teamName];
}

console.log('Team Names:', teamNames());

function playerNumbers(teamName) {
  // takes in an argument of a team name and returns an array of the jersey number's for that team
  // create an empty array to hold the jersey numbers
  // create an array of the teams
  // iterate over the array
    // if the teamName equals the input
      // iterate over the players object
        // push the jersey numbers to the empty array
  const jerseyNumbers = [];
  const teams = [homeTeam(), awayTeam()];

  for (var i = 0; i < teams.length; i++) {
    if (teams[i].teamName === teamName) {
      const players = teams[i].players;
      for (var name in players) {
        jerseyNumbers.push(players[name].number);
      }
    }
  }
  return jerseyNumbers;
}

console.log('Player Numbers:', playerNumbers('Charlotte Hornets'));

function playerStats(playerName) {
  // takes in an argument of a player's name and returns an object of that player's stats.
  return players()[playerName];
}

console.log('Player Stats:', playerStats('Jeff Adrien'));

function bigShoeRebounds() {
  // return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
    // First, find the player with the largest shoe size
    // Then, return that player's number of rebounds
    // Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why
  const playerList = players();
  let largestShoe = 0;
  for (key in playerList) {
    if (playerList[key].shoe > largestShoe) {
      largestShoe = playerList[key].shoe;
    }
    if (playerList[key].shoe === largestShoe) {
      const player = playerList[key];
      return player.rebounds;
    }
  }
  console.log('largestShoe', largestShoe);
}

console.log('Big Shoe Rebounds:', bigShoeRebounds());

function mostPointsScored() {
  // which player has the most points?
  const playerList = players();
  let mostPoints = 0;
  for (key in playerList) {
    if (playerList[key].points > mostPoints) {
      mostPoints = playerList[key].points;
    }
    if (playerList[key].points === mostPoints) {
      return key;
    }
  }
}

console.log('Most Points Scored:', mostPointsScored());

function winningTeam() {
  // which team has the most points?

  if (homeTeamPoints() > awayTeamPoints()) {
    return homeTeamName();
  } else {
    return awayTeamName();
  }
}

console.log('Winning Team:', winningTeam());

function playerWithLongestName() {
  // which player has the longest name?
  const playerList = players();
  let playerName = '';
  for (let name in playerList) {
    if (name.length > playerName.length) {
      playerName = name;
    }
  }
  return playerName;
}

console.log('Player With Longest Name:', playerWithLongestName());

function playerWithMostSteals() {
  const playerList = players();
  let mostSteals = 0;
  let player = '';
  for (let name in playerList) {
    if (playerList[name].steals > mostSteals) {
      mostSteals = playerList[name].steals;
    }
    if (playerList[name].steals === mostSteals) {
      player = name;
    }
  }
  console.log('most steams', mostSteals);
  return player;
}

console.log('Most Steals:', playerWithMostSteals());

function doesLongNameStealATon() {
  // returns true if the player with the longest name had the most steals
  if (playerWithLongestName() === playerWithMostSteals()){
    return true;
  } else {
    return false;
  }
}

console.log('Does Long Name Steal A Lot:', doesLongNameStealATon());
// node src/00-objectball.js