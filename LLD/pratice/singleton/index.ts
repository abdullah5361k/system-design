class SingleTon {
  static instance: SingleTon;

  private constructor() {
    console.log("Const");
  }

  static getInstance() {
    if (!SingleTon.instance) {
      SingleTon.instance = new SingleTon();
    }

    return SingleTon.instance;
  }
}

function main() {
  // const s = new SingleTon();
  SingleTon.getInstance();

  SingleTon.getInstance();
}

main();
