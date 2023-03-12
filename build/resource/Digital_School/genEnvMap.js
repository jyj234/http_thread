import { renderer } from './renderer.js';
import{PMREMGenerator}from'./js/src/extras/PMREMGenerator.js'

export const pmremGenerator = new PMREMGenerator( renderer );
pmremGenerator.compileCubemapShader();
