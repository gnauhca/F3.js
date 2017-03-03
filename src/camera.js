import {Vector3} from './Vector3';

export class Camera {
    constructor(p=1200, origin=new Vector3) {
        this.p = p;
        this.origin = origin;
    }
    getScaleByZ(z) {
        let scale; 
        if (z > this.p) {
            scale = Infinity;
        } else {
            scale = (-z + 2 * this.p) / (-z + this.p) - 1;
        }
        return scale;
    }
    get2DCrood(v) {
        let scale = this.getScaleByZ(v.z);
        let subV = v.clone().sub(this.origin);
        let vec2D;

        subV.multiplyScalar(scale);
        vec2D = this.origin.clone().add(subV);
        vec2D.z = 0;

        return vec2D;
    }
}

