var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "reward", "x": 2000, "y": groundY - 50 },
                { "type": "enemy", "x": 400, "y": groundY - 45 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createSawBlade(400, 380);
        createSawBlade(800, 470);
        createSawBlade(1000, 380);

        function createEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 25);
            var greenSquare = draw.rect(50, 50, "green");
            greenSquare.x = -25;
            greenSquare.y = -25;
            enemy.addChild(greenSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 100;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10)
            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut();
            };
        }
        createEnemy(400, groundY - 45);
        createEnemy(1000, groundY - 45);
        createEnemy(1600, groundY - 45);

        function createReward(x, y) {
            var reward = game.createGameItem("reward", 50)
            var purpleSquare = draw.rect(50, 50, "purple")
            purpleSquare.x = -25;
            purpleSquare.y = -25;
            reward.addChild(purpleSquare);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            reward.rotationalVelocity = 5;
            reward.onPlayerCollision = function() {
                game.changeIntegrity(+10000);
                reward.fadeOut();
            };
            reward.onProjectileCollision = function() {
                reward.fadeOut();
            };

        }
        createReward(2000, groundY - 50)


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
