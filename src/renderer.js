class Renderer {
    constructor(ctx, cvs) {
        this.ctx = ctx;
        this.cvs = cvs;
    }

    render(scene, camera) {
        this.beforeRender();
        scene.objs.forEach((o)=>{
            o.calc2DCrood(camera);
        });
        scene.objs.sort((o1, o2)=>{ 
            return o1.worldPosition.z - o2.worldPosition.z;
        });
        scene.objs.forEach((o)=>{
            o._render(this.ctx, this.cvs);
        });
        this.afterRender();
    }

    beforeRender() {
        this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
    }
    afterRender() {}
}

export { Renderer };