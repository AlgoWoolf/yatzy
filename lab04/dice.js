class Dice {
    constructor () {
        this.history = [];
    }

    roll () {
        var nextValue = Math.floor(1 + Math.random() * 6);
        this.history.push(nextValue);
        return nextValue;
    }

    changeRoll (i) {
        this.history[i] = Math.floor(1 + Math.random() * 6);
    }

    clearHistory () {
        this.history = [];
    }

    showHistory() {
        if (this.history.length == 0) {
            document.getElementById('dice').innerHTML = "No die has been thrown yet.";
        } else {
            var s = ""
            s += "<p>Dice:[ ";
            for (var i = 0, len = this.history.length; i < len; i++) {
                s += this.history[i] + " ";
            }
            s += "] - use the checkboxes below to determine rerolls.</p>"
            document.getElementById("dice").innerHTML = s;
        }
    }S
}