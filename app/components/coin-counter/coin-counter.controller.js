(function () {

function CoinCounterController() {
    var ctrl = this;

    // MT: I'm hardcoding this as a singleton, but normally I'd want this information to be returned from a service call in case we need our circles to be generated dynamically. This also allows for the changing of the coinValues outside of the scope of the calculateNumber function.
    ctrl.circles = [
        {
            coinValue: 25,
            coins: 0
        },
        {
            coinValue: 10,
            coins: 0
        },
        {
            coinValue: 5,
            coins: 0
        },
        {
            coinValue: 1,
            coins: 0
        }
    ];

    // MT: Any default values will be initiated here.
    ctrl.numberEntered = null;
    ctrl.isCalculated = false;

    // MT: Let's define our functions.
    ctrl.calculateNumber = calculateNumber;

    // MT: And here's our vanilla JS function to determine the coin values.
    function calculateNumber(number) {
        // MT: Show the circles. Fun!
        ctrl.isCalculated = true;

        for (var i = 0; i < ctrl.circles.length; i++) {
            ctrl.circles[i].coins = Math.floor(number / ctrl.circles[i].coinValue);

            remainder = number - ctrl.circles[i].coins * ctrl.circles[i].coinValue;

            number = remainder;
        }
    }
}

angular
    .module('components')
    .controller('CoinCounterController', CoinCounterController);

}());
