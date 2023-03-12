import {stats} from './stats.js'
import {container} from './container.js'

export function genFPSDetector(){
    container.appendChild( stats.dom );
}