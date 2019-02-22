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
                    nextLevel: "sea"
                }
            ]
        },

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
            message: "",
            choices: [
                {
                    text: "Start over",
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
        
        field2: {
            message: "Test...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
