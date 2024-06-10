var Game = (function () {
    var entity = {};
    var roll = 0;
    var dice = new Dice();

    entity.fullRoll = function () {
        for (i = 0; i < 5; i++) {
            dice.roll();
        }
    }

    entity.reroll = function () {
        roll++;

        var d1 = document.getElementById('d1').checked;
        var d2 = document.getElementById('d2').checked;
        var d3 = document.getElementById('d3').checked;
        var d4 = document.getElementById('d4').checked;
        var d5 = document.getElementById('d5').checked;

        var reroll = [d1, d2, d3, d4, d5];
        for (i = 0; i < 5; i++) {
            if (reroll[i]) {
                dice.changeRoll(i);
            }
        }

        this.Display();

        if (roll == 3) {
            document.getElementById('msg').innerHTML = "You cannot reroll anymore. Passing the turn...";
            setTimeout(() => { this.newTurn(); }, "2000");
        }
    }

    entity.newTurn = function () {
        roll = 1;
        dice.clearHistory();
        this.fullRoll();
        this.Display();
    }

    entity.pass = function () {
        document.getElementById('msg').innerHTML = "You pass your turn...";
        setTimeout(() => { this.newTurn(); }, "2000");
    }

    entity.Display = function () {
        var msg = "Rolls left: " + (3 - roll) + ". you may select dice to reroll or pass your turn.";
        document.getElementById('msg').innerHTML = msg;

        dice.showHistory();
    }

    return entity;
}());

Game.newTurn();