class Renderer {
    constructor(ctx, cvs) {
        this.ctx = ctx;
        this.cvs = cvs;
    }

    render(scene, camera) {
        this.beforeRender();
        scene.objs.forEach((o)=>{
            o.calc2DCrood(camera);
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