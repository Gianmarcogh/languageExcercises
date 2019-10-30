// 5. Sloth Machine 
console.log('5. Sloth Machine');
class SlothMachine {
    constructor() {
        this.coins = 0;
    }
    play() {
        this.coins++;
        const spin = {
            firstSpin: this.randomBool(),
            secondSpin: this.randomBool(),
            thirdSpin: this.randomBool(),
        };
        if (spin.firstSpin && spin.secondSpin && spin.thirdSpin) {
            console.log(`Congratulations!!!! You've won ${this.coins} coins !!!`);
            this.coins = 0;
        }
        else {
            console.log('Good luck next time!!');
        }
    }
    randomBool() {
        return Math.random() >= 0.5;
    }
}
const machine = new SlothMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
