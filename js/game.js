// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "intro-bg.jpg",
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
            music: "",
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
            music: "",
            message: "Hope Come From Risk, To Be Continue...",
            choices: [
                {
                    text: "GG",
                    nextLevel: "start",
                },
            ]
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
            message: "You go deeper into the cava, limited oxygen and dark",
            choices: [
                {
                    text: "Go Deeper",
                    nextLevel: "forest",
                },
                
                {
                    text: "Go Out",
                    nextLevel: "start",
                },
                
                {
                    text: "Wait And See",
                    nextLevel: "glazier",
                }
            ]
        },
//set 3      
        forest: {
            message: "A light lit your eyes, You come to a forst",
            choices: [
                {
                    text: "Walk Around",
                    nextLevel: "boss_forest",
                },
                
                {
                    text: "Seek for food",
                    nextLevel: "boss_forest",
                },
                
                {
                    text: "Run Back",
                    nextLevel: "cave",
                }
                ]
        }
        
        
    }
};
