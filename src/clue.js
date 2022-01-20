// ITERATION 1

// Suspects Array
let mrGreen = {
  firstName:"Jacob",
  lastName: "Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  color: "green"
};
let drOrchid = {
        
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image:" http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "white"
};

let profPlum={
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
image:" https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  color: "purple"
};

let missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "red"
}

let mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  occupation: "Socialité",
  age: 36,
  description:" She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  color: "blue"
    } 
 let mrMustard =  {
  firstName: "Jack",
  lastName: "Mustard",
  occupation: "Retired Football player",
  age: 62,
  description: "He is a former football player who tries to get by on his former glory",
  image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  color: "yellow"
 }
const suspectsArray = [mrMustard,mrsPeacock,missScarlet,profPlum,drOrchid,mrGreen];


// Rooms Array


const roomsArray = [
 { name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}
];

// Weapons Array
let rope ={
  name: "rope" , weight: 10
}
let knife ={
  name: "knife" , weight: 8 
}
 
let candlestick = {
  name: "candlestick" , weight: 2
}
let dumbbell = {
  name: "dumbbell", weight: 30 
}
let poison = {
  name: "poison" , weight: 2 
}

let axe = {
  name: "axe" , weight: 15 
}

let bat = {
  name: "bat" , weight: 13 
}
 let trophy = {
  name:"trophy" ,  weight: 25 
 }
let pistol = {
  name: "pistol", weight: 20
}
const weaponsArray = [pistol,trophy,bat,axe,poison,dumbbell,candlestick,knife,rope];


// ITERATION 2

function selectRandom(selectCard) {
  let cardPicked = [];
  if (!selectCard.length) {return undefined}
  cardPicked = Math.floor(Math.random() *selectCard.length);
  return selectCard[cardPicked];
}
  




function pickMystery() {
  let suspect = {};
  let weapon = {};
  let room = {};
  let mistery = {};
  
  suspect = Math.floor(Math.random() *suspectsArray.length);
  mistery.suspect = suspectsArray[suspect]

  weapon = Math.floor(Math.random() *weaponsArray.length);
  mistery.weapon = weaponsArray[weapon]

  room = Math.floor(Math.random() *roomsArray.length);
  mistery.room = roomsArray[room]

  return mistery
}





// ITERATION 3


 function revealMystery(envelope) {
   
   return  `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
   
  }
  

  console.log(revealMystery(pickMystery()));

 // The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}