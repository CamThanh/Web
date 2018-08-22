import { MainViewModule } from './main-view.module';

describe('MainViewModule', () => {
  let mainViewModule: MainViewModule;

  beforeEach(() => {
    mainViewModule = new MainViewModule();
  });

  it('should create an instance', () => {
    expect(mainViewModule).toBeTruthy();
  });
});
