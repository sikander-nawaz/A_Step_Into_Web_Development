// --- SECTION 1: OBJECTS & METHODS ---

const player = {
    name: "PixelKnight",
    health: 100,
    level: 1,

    // 1. Classic Method Syntax
    takeDamage: function(amount) {
        this.health -= amount;
        console.log(`${this.name} took ${amount} damage. Current Health: ${this.health}`);
    },

    // 2. ES6 Shorthand Syntax (Cleaner)
    levelUp() {
        this.level++;
        this.health += 20;
        console.log(`DING! Level ${this.level}. Health restored to ${this.health}`);
    },

    // 3. Demonstrating "this" context
    describe() {
        console.log(`Player: ${this.name} | Level: ${this.level}`);
    }
};

player.describe();
player.takeDamage(30);
player.levelUp();