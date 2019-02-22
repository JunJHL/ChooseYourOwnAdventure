// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Turn Left",
                    nextLevel: "lava",
                },

                {
                    text: "Turn Right",
                    nextLevel: "cave",
                },
                
                {
                    text: "Go Forward",
                    nextLevel: "sea"
                }
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "field2",
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
