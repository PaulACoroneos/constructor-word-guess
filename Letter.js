class Letter {
    constructor() {
        this.character;
        this.guessed;
        this.letterGuessed = function (userLetter) {
            if(userLetter.toLowerCase() === this.character) {
                this.guessed = true;
            }
            else {
                this.guessed = false;
            }   
        }
        this.revealLetter = function () {
            if(this.guessed)
                return this.character;
            else
                return "_";
        }
    }
}