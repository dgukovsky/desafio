import { PlanCuentasModule } from './plan-cuentas.module';

describe('PlanCuentasModule', () => {
  let planCuentasModule: PlanCuentasModule;

  beforeEach(() => {
    planCuentasModule = new PlanCuentasModule();
  });

  it('should create an instance', () => {
    expect(planCuentasModule).toBeTruthy();
  });
});
