import { Planet } from './Planet';

describe('Planet', () => {
  it('Creates a planet of size (x, y).', () => {
    const planet = new Planet(100, 100);

    expect(planet.xAxis).toBe(100);
    expect(planet.yAxis).toBe(100);
  });
});
