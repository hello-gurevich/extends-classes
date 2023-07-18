import { AModel, BModel, CombineModel } from './models';


const combined = new CombineModel() as CombineModel & AModel & BModel;
combined.a();
combined.b();

