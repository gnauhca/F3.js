# F3.js

Fake 3D，实现在 canvas(Context2d) 上绘制 3D 场景。

## 思路

定义每个物体的 3D 世界坐标 `obj.position`，在物体的 `obj.draw` 方法里，既可以使用映射到屏幕对应的屏幕坐标 `obj.croods2D.position`(z=0)

    * F3.Renderer // 渲染器
    * F3.Camera // 相机
    * F3.Scene // 场景，添加物体
    * F3.Obj // 物体
    * F3.Time // 时间
    * F3.Vector3 // 三维向量
    * F3.Euler // 欧拉角，描述旋转

正在完善... 请参考 demo，
或直接在我的 [codepen](http://codepen.io/gnauhca/pen/PpNVwM) 查看 