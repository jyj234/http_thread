import {params} from "./js/params.js";
// import {GUI} from './three.js-dev/examples/jsm/libs/dat.gui.module.js'
import {GUI} from './js/dat.gui.module.js'

export function addGui(){
    let gui = new GUI();
    let h = gui.addFolder( "Directionallight" );
    h.add(params,'in',false);
    h.add(params,'out',false);
    h.add(params,'rotate',false);
    h.add(params,'targetH',0,250);
    h.add(params,'Height',-50,100);
    h.add(params,'move',false);
    //h.add(params,'exposure',0,5);
   // h.add(params,'intensity',0,5);
   // h.add(params,'envMap',['HDR1','HDR2']),
    h.add(params,'HDR1',true);
    h.add(params,'HDR2',false);
    h.add(params,'HDR3',false);
    h.open();
}