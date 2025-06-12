interface ICharacter {
  getAbilities(): string;
}

class Mario implements ICharacter {
  getAbilities() {
    return "Mario";
  }
}

abstract class CharacterDecorator implements ICharacter {
  protected character: ICharacter;
  constructor(char: ICharacter) {
    this.character = char;
  }

  getAbilities() {
    return this.character.getAbilities();
  }
}

class Heighup extends CharacterDecorator {
  getAbilities() {
    return this.character.getAbilities() + " With heighup";
  }
}

class GunPowerUp extends CharacterDecorator {
  getAbilities() {
    return this.character.getAbilities() + " With gun abilities";
  }
}

function main() {
  let mario = new Mario();

  console.log("Basic character " + mario.getAbilities());

  mario = new Heighup(mario);

  console.log("Heighup: " + mario.getAbilities());

  mario = new GunPowerUp(mario);

  console.log("GunUp: " + mario.getAbilities());
}

main();
