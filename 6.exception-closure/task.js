function parseCount(value) {
  let x = Number.parseInt(value);
  if (isNaN(x)) {
    throw new Error("Невалидное значение");
  }
  return x;
}

function validateCount(value) {
  try {
    return parseCount(value);
  }
  catch (err) {
    return (err);
  }
}
  
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter() {
    return this.a + this.b + this.c
  }

  getArea() {
    const s = this.getPerimeter()/ 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));
    return parseFloat(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch {
    return {
      getPerimeter() {
        return ("Ошибка! Треугольник не существует")
      },
      getArea() {
        return ("Ошибка! Треугольник не существует")
      }
    }
  }
}
  