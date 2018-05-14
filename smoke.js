class Smoke {
  constructor(x, y, r) {
    this.body = new Body(x, y, r, 0.05)
  }
  update(ms, time) {
    this.body.update(ms)
    this.body.r *= 0.99
    return this.body.r > 3
  }
}