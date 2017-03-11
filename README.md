# NCSOFT Coin Counter Challenge

### Hello! I'm Matt Tischler ([mjtischler@gmail.com](mailto:mjtischler@gmail.com))
Hey y'all! I appreciate the opportunity to complete this code challenge and I had a great time working toward the solution. I definitely learned a few things along the way, and I welcome any constructive (and destructive) criticism that you may have about my work.

### Stack
Per the instructions, I wrote the calculate function in vanilla JavaScript. However, I used Angular 1.5+ for the JS framework and utilized a component architecture for scalability. I also incorporated Angular Material for the UI.

### Code
First, I created a singleton array that contains two key parameters: the coin denominations and the coin count for the given input. This array simulates the return from a service call, and both the UI and the `calculateNumber` function aren't concerned with its size or parameter values.

```JavaScript
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
```

Next, I created a function to parse our `ctrl.circles` array. This function iterates through that collection and utilizes `Math.Floor()` to determine if (and how many) multiples of a given `coinValue` are contained within the `number` input. It then calculates our remainder, using that result to redefine `number` and begin the process again with the next `coinValue`.

```JavaScript
function calculateNumber(number) {
    ctrl.isCalculated = true;
    var remainder = null;

    for (var i = 0; i < ctrl.circles.length; i++) {
        ctrl.circles[i].coins = Math.floor(number / ctrl.circles[i].coinValue);

        remainder = number - ctrl.circles[i].coins * ctrl.circles[i].coinValue;

        number = remainder;
    }
}
```

### Screenshots
![Mobile View](https://github.com/mjtischler/ncsoft-challenge/blob/master/images/mobile-view.png?raw=true "Mobile View")
![Calculated Mobile View](https://github.com/mjtischler/ncsoft-challenge/blob/master/images/mobile-view-calculated.png?raw=true "Calculated Mobile View")
![Desktop View](https://github.com/mjtischler/ncsoft-challenge/blob/master/images/desktop-view.png?raw=true "Desktop View")
=======
