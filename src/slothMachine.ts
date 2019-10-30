// 5. Sloth Machine 
console.log('5. Sloth Machine');
class SlothMachine {
    coins: number = 0;

    play(): void {
        this.coins++;
        
        const spin = {
            firstSpin: this.randomBool(),
            secondSpin: this.randomBool(),
            thirdSpin: this.randomBool(),
        };

        if (spin.firstSpin && spin.secondSpin && spin.thirdSpin) {
            console.log(`Congratulations!!!! You've won ${this.coins} coins !!!`);
            this.coins = 0;
        } else {
            console.log('Good luck next time!!');
        }
    }

    randomBool(): boolean {
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