import { OrderByPipe } from './order-by.pipe';
const mockedJson = [{
  name: 'Lucas',
  age: 22,
}, {
  name: 'Ale',
  age: 33
}];
describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order by name', () => {
    const pipe = new OrderByPipe();
    const ordered = pipe.transform(mockedJson, 'name');
    expect(ordered[1].name).toBeTruthy('Lucas');
  });

  it('should order by age', () => {
    const pipe = new OrderByPipe();
    const ordered = pipe.transform(mockedJson, 'age');
    expect(ordered[1].name).toBeTruthy('Ale');
  });
});
