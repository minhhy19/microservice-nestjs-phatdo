// import { Test, TestingModule } from '@nestjs/testing';
// import { TerminalController } from './terminal.controller';
// import { TerminalService } from './terminal.service';

// describe('TerminalServiceController', () => {
//   let terminalServiceController: TerminalController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [TerminalController],
//       providers: [TerminalService],
//     }).compile();

//     terminalServiceController = app.get<TerminalController>(TerminalController);
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       expect(terminalServiceController.getHello()).toBe('Hello World!');
//     });
//   });
// });

function forEach(items: number[], callback: (x: number) => number) {
  for (let index = 0; index < items.length; index++) {
    console.log(items[index]);
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);
  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});
