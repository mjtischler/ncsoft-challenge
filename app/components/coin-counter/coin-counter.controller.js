(function () {

function CoinCounterController() {
    var ctrl = this;

    // MT: I'm hardcoding this as a singleton, but normally I'd want this information to be returned from a service call in case we need our circles to be generated dynamically.
    ctrl.circles = [
        {
            id: 1,
            cents: 25
        },
        {
            id: 2,
            cents: 10
        },
        {
            id: 3,
            cents: 5
        },
        {
            id: 4,
            cents: 1
        }
    ];

    // MT: Any default values will be initiated here.
    ctrl.numberEntered = null;
    ctrl.isCalculated = false;

    // MT: Let's define our functions
    ctrl.calculateNumber = calculateNumber;

    function calculateNumber(number) {
        ctrl.numberEntered = number;
    }
}

angular
    .module('components')
    .controller('CoinCounterController', CoinCounterController);

}());
