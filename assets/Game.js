// Text Battle Arena - A simple text-based battle game
// Characters fight in turns until only one remains

class Character {
    constructor(name, hp, attack, speed) {
      this.name = name;
      this.maxHp = hp;
      this.hp = hp;
      this.attack = attack;
      this.speed = speed;
      this.isAlive = true;
    }
  
    attackCharacter(target) {
      if (!this.isAlive || !target.isAlive) return 0;
      
      const damage = this.attack;
      target.hp -= damage;
      
      if (target.hp <= 0) {
        target.hp = 0;
        target.isAlive = false;
        console.log(`${this.name} dealt ${damage} damage to ${target.name}. ${target.name} has been defeated!`);
      } else {
        console.log(`${this.name} dealt ${damage} damage to ${target.name}. ${target.name} has ${target.hp}/${target.maxHp} HP left.`);
      }
      
      return damage;
    }
    
    getStatus() {
      return `${this.name}: ${this.hp}/${this.maxHp} HP, ATK: ${this.attack}, SPD: ${this.speed}`;
    }
  }
  
  class Game {
    constructor() {
      this.characters = this.generateRandomCharacters();
      this.turn = 0;
      this.gameOver = false;
      this.winner = null;
    }
    
    // Generate random stats for characters
    generateRandomCharacters() {
      const names = ["Warrior", "Mage", "Rogue", "Paladin", "Archer"];
      const characters = [];
      
      for (const name of names) {
        // Generate random stats within reasonable ranges
        const hp = Math.floor(Math.random() * 100) + 50;  // 50-150 HP
        const attack = Math.floor(Math.random() * 15) + 5; // 5-20 Attack
        const speed = Math.floor(Math.random() * 15) + 3;  // 3-18 Speed
        
        characters.push(new Character(name, hp, attack, speed));
      }
      
      return characters;
    }
    
    getAliveCharacters() {
      return this.characters.filter(char => char.isAlive);
    }
    
    runTurn() {
      // Sort characters by speed for turn order
      const aliveCharacters = this.getAliveCharacters();
      aliveCharacters.sort((a, b) => b.speed - a.speed);
      
      console.log(`\n--- TURN ${++this.turn} ---`);
      
      for (const attacker of aliveCharacters) {
        // Skip if attacker died during this turn
        if (!attacker.isAlive) continue;
        
        // Get all alive characters except the attacker
        const possibleTargets = this.getAliveCharacters().filter(char => char !== attacker);
        
        // If no targets left, end loop
        if (possibleTargets.length === 0) break;
        
        // Select random target
        const targetIndex = Math.floor(Math.random() * possibleTargets.length);
        const target = possibleTargets[targetIndex];
        
        // Perform attack
        attacker.attackCharacter(target);
        
        // Check if there's only one character left
        if (this.getAliveCharacters().length === 1) {
          this.gameOver = true;
          this.winner = this.getAliveCharacters()[0];
          break;
        }
      }
      
      // Print status of all alive characters
      console.log("\nREMAINING FIGHTERS:");
      this.getAliveCharacters().forEach(char => {
        console.log(char.getStatus());
      });
      
      return this.gameOver;
    }
    
    start() {
      console.log("BATTLE START!");
      console.log("Five fighters enter the arena...");
      
      // Print initial stats
      console.log("\nINITIAL STATS:");
      this.characters.forEach(char => {
        console.log(char.getStatus());
      });
      
      // Run game loop
      while (!this.gameOver) {
        this.runTurn();
      }
      
      // Announce winner
      console.log(`\n${this.winner.name} has won the battle after ${this.turn} turns!`);
      console.log("GAME OVER");
    }
  }
  
  // Start the game
  console.clear();
  const game = new Game();
  game.start();