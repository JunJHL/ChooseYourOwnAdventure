// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image: "intros.jpg",
    levels: {

        start: {
            message: "You come across a dark cave, there are three path in front of you",
            choices: [
                {
                    text: "Turn Left",
                    nextLevel: "lava",
                },

                {
                    text:"Go Forward",
                    nextLevel: "cave",
                },
                
                {
                    text: "Turn Right",
                    nextLevel: "sea",
                },
            ]
        },
//set 1
        lava: {
            background_image: "lava.gif",
            message: "Ouch, you had come across to a lava shore, the heat here is UNDURABLE. What should you do",
            choices: [
                {
                    text: "Walk Back",
                    nextLevel: "start",
                },
                
                {
                    text: "Jump Down",
                    nextLevel: "fire",
                },
                
                {
                    text: "Wait",
                    nextLevel: "end",
                },
            ]
        },
        
        fire: {
            background_image: "fire.gif",
            message: "Hope Come From Risk, To Be Continue...",
        },

        end: {
            background_image: "end.gif",
            message: "Do something is better than nothing, You lose",
            choices: [
                {
                    text: "Retry",
                    nextLevel: "start",
                },
            ]
        },
//set 2      
        cave: {
            message: "You come to the deep part of the cave, Limited oxygen and dark",
            background_image: "cave.jpg",
            choices: [
                {
                    text: "Go Deeper",
                    nextLevel: "forest",
                },
                
                {
                    text: "Wait And See",
                    nextLevel: "glacier",
                },
                
                {
                    text: "Go Out",
                    nextLevel: "start",
                }
            ]
        },
//set 3-1     
        forest: {
            message: "A light lit your eyes, You come to a forest",
            background_image: "forest.gif",
            choices: [
                {
                    text: "Walk Around",
                    nextLevel: "bossForest",
                },
                
                {
                    text: "Seek for food",
                    nextLevel: "bossForest",
                },
                
                {
                    text: "Run Back",
                    nextLevel: "cave",
                }
                ]
        },
        
        bossForest: {
            message: "You have walk to a lake, and you you saw a dragon like creature standing in the center",
            background_image: "dragon.jpg",
            choices: [
                {
                    text:"Fight",
                    nextLevel: "gg1",
                },
                
                {
                    text: "Run Away",
                    nextLevel: "gg2",
                },
                
                {
                    text: "Throw a Bone",
                    nextLevel: "master",
                }
                
                ]
        },
        
        gg1: {
            message: "How dare are you to fight the mighty forest lord.\nYou fly away before you can reach it.",
            background_image: "blow.jpg", 
            choices: [ 
                {
                    text:"Retry",
                    nextLevel: "start"
                } 
                ]
        },
        
        gg2: {
            message: "The dragon saw you, and blown you up with its breath.",
            background_image: "blow.jpg",
            choices: [
                {
                    text: "Retry",
                    nextLevel: "start",
                }
                ]
        },
        
        master: {
            message: "The dragon fly to the bone. It is now yours. To Be Continue",
            background_image: "master.jpg"
        },

//set 3-2        
        glacier: {
            message: "You had come to the top of the glacier. The cold make you fall.",
            background_image: "glacier.jpg",
            choices: [{
                text: "next",
                nextLevel: "town"
            } 
            ]
        },
        
        town: {
            message: "You wake up finding yourself on a bed. You were rescue by the villager. To Be Continue.",
            background_image: "town.jpg",
        },
        
//set 3
        sea: {
            message: "You found yourself on a island in the middle of the ocean",
            background_image: "ocean.jpg",
            choices: [
                {
                    text: "Fish",
                    nextLevel: "whale",
                },
                
                {
                    text: "Jump Down",
                    nextLevel: "ocean",
                },
                
                {
                    text: "Run Back",
                    nextLevel: "cave",
                }
                ]
        },
        
        whale: {
            message: "A whale jump up and.... To Be Continue",
            background_image: "whale.jpg",
        },
        
        ocean: {
            message: "No zuo No die why you try, To Be Continue",
            background_image: "sea.gif",
        }
    }
};
