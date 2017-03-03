import { Vector3 } from './Vector3';
import { Euler } from './Euler';

export class Obj {
    constructor() {
        this.parent = null;
        this.children = [];
        this.worldPosition = new Vector3;
        this.position = new Vector3;
        this.scale = new Vector3(1,1,1);
        this.rotation = new Euler;

        this.vertices = [];
        this.worldVertices = [];
        this.willUpdate = false;

        this.croods2D = {
            scale: 1,
            position: new Vector3,
            vertices: []
        };
    }
    setPosition(x, y, z) {
        this.position.set(x, y, z);
        this.onChange();
    }
    setRotation(x, y, z) {
        this.rotation.set(x, y, z, 'XYZ');
        this.onChange();
    }
    setScale(x, y, z) {
        this.scale.set(x, y, z);
        this.onChange();
    }

    setWorldPosition() {
        this.worldPosition.copy(this.position);
        if (this.parent) {
            this.worldPosition
                .multiply(this.parent.scale)
                .applyEuler(this.parent.rotation)
                .add(this.parent.worldPosition);
        }
        this.updateVertice();

        // child world position update
        this.children.forEach((child)=>{
            child.setWorldPosition();
        });
    }

    updateVertice() {
        this.vertices.forEach((v, i)=>{
            if (!this.worldVertices[i]) {
                this.worldVertices[i] = this.worldPosition.clone();
            }
            this.worldVertices[i]
                .copy(this.worldPosition)
                .multiply(this.scale)
                .applyEuler(this.rotation)
                .add(v);
        });
    }

    calc2DCrood(camera) {
        this.croods2D.scale = camera.getScaleByZ(this.worldPosition.z);
        
        this.croods2D.position = camera.get2DCrood(this.worldPosition);
        this.croods2D.vertices = this.worldVertices.map((v)=>{
            return camera.get2DCrood(v);
        });
        this.children.forEach(function(o) {
            o.calc2DCrood(camera);
        });
    }

    add(child) {
        child.parent = this;
        if (this.children.indexOf(child) === -1) {
            this.children.push(child);
            child.setWorldPosition();
        }
    }

    remove(child) {
        delete child.parent;
        this.children = this.children.filter((o)=>{return o !== obj});
    }
    onChange() {
         this.setWorldPosition(); return;
    }
    _render(ctx, cvs) {
        ctx.save();
        this.render(ctx, cvs);
        ctx.restore();
        this.children.forEach((o)=>{o._render(ctx, cvs)});
    }
    render(ctx, cvs) { }
}
