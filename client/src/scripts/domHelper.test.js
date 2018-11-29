import { ready } from './domHelper';


describe('ready', () => {
  test('defined correctly', () => {
    expect(typeof (ready)).toEqual('function');
  });


  test('checks document is ready when already ready', (done) => {
    let isCalled = false;
    function callbackFunc() {
      isCalled = true;
    }
    ready(callbackFunc);
    setTimeout(() => {
      expect(isCalled).toBeTruthy();
      done();
    }, 200);
  });
});
