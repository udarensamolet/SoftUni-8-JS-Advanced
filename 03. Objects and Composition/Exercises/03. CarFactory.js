function carFactory({ model, power, color, carriage, wheelsize }) {
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  const getWheels = (size) => {
    const wheels = [];
    wheels.length = 4;
    return size % 2 === 0 ? wheels.fill(size - 1) : wheels.fill(size);
  };
  return {
    model,
    engine: engines.reduce((prev, curr) =>
      Math.abs(prev.power - power) < Math.abs(curr.power - power) ? prev : curr
    ),
    carriage: { type: carriage, color: color },
    wheels: getWheels(wheelsize),
  };
}