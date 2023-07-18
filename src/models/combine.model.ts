import { extendsClasses} from "../recorators/extends.decorator";
import { AModel } from "./a.model";
import { BModel } from "./b.model";

@extendsClasses(AModel, BModel)
export class CombineModel {

}
