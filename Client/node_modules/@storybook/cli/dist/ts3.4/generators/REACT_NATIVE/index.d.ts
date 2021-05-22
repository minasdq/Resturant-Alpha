import { JsPackageManager } from '../../js-package-manager';
import { NpmOptions } from '../../NpmOptions';
import { GeneratorOptions } from '../baseGenerator';
declare const generator: (packageManager: JsPackageManager, npmOptions: NpmOptions, installServer: boolean, options: GeneratorOptions) => Promise<void>;
export default generator;
