import { InformesModule } from './informes.module';

describe('InformesModule', () => {
  let informesModule: InformesModule;

  beforeEach(() => {
    informesModule = new InformesModule();
  });

  it('should create an instance', () => {
    expect(informesModule).toBeTruthy();
  });
});
