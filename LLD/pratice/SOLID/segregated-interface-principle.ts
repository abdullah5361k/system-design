abstract class Shape2D {
  abstract area(): number;
}

abstract class Shape3D extends Shape2D {
  abstract volume(): number;
}

class Square extends Shape2D {
  constructor(private readonly side: number) {
    super();
  }

  area() {
    return this.side * this.side;
  }
}

class Rectangle extends Shape2D {
  constructor(private readonly length: number, private readonly width: number) {
    super();
  }

  area() {
    return this.length * this.width;
  }
}

class Cube extends Shape3D {
  constructor(private readonly side: number) {
    super();
  }

  area() {
    return this.side;
  }

  volume() {
    return this.side * this.side * this.side;
  }
}
