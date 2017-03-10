(function () {

var coinCounter = {
    templateUrl: '/app/components/coin-counter/coin-counter.html',
    controller: 'CoinCounterController'
};

angular
    .module('components')
    .component('coinCounter', coinCounter);

}());
