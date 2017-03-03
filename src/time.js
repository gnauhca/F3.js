import TWEEN from 'tween.js';

/* 时间 */
var TIME = {
	// 所有时间body对象
	bodys : [],
	delta: 16
}

var stop = false;
var t;
TIME.addBody = function(timeBody) {
	this.bodys.push(timeBody);
}

TIME.removeBody = function(timeBody) {
	var index = this.bodys.indexOf(timeBody);

	if (index !== -1) {
		this.bodys.splice(index, 1);
	}
}
TIME.tick = (function() {
	var now = (new Date()).getTime();
	var last = now;
	var delta;
	return function() {
		delta = now - last;
		delta = delta > 500 ? 30 : (delta < 16? 16 : delta);
		TIME.delta = delta;
		last = now;

		TIME.handleFrame(delta);
		if (!stop) {
			t = requestAnimationFrame(TIME.tick);
			// setTimeout(TIME.tick, 1000);
		}		
	}	
})();


TIME.start = function() {
	stop = false;
	cancelAnimationFrame(t);
	this.tick();
}

TIME.stop = function() {
	cancelAnimationFrame(t);
	stop = true;
}

TIME.handleFrame = function(delta) { 

	TIME.bodys.forEach(function(body) {
		if (!body.isStop) {
			body.ticks.forEach(function(tick) {
				tick.fn && tick.fn(delta); 
			});
		}
	});

	TWEEN.update();
}

window.TIME = TIME;

/* 时间物体类，提供两个时机，帧更新，固定间隔更新，每一个有时间概念的物体，就继承 */
class Time {

	constructor() {
		this.ticks = [];
		this.tweens = [];
		this.isStop = false;
		TIME.addBody(this);
	}


	/**
	 * 该物体灭亡
	 */
	destory() {
		TIME.removeBody(this);
	}

	/** 
	 * 帧更新
	 * @param timegap 与上一帧的时间间隔
	 */
	addTick(fn) {
		var tick = {'fn': fn.bind(this)};

		tick.isStop = false;
		this.ticks.push(tick);
		return tick;
	}

	removeTick(tick) {
		if (!tick) {
			// remove all
			this.ticks = [];
			return;
		}

		var index = this.ticks.indexOf(tick);

		if (index !== -1) {
			this.ticks.splice(index, 1);
		}
	}

	/** 
	 * tween
	 */
	addTween(tween) {
		this.tweens.push(tween);
	}

	removeTween(tween) {
		if (!tween) {
			// remove all
			this.tween = [];
			return;
		}

		var index = this.tweens.indexOf(tween);

		if (index !== -1) {
			//tween.stop();
			this.tweens.splice(index, 1);
		}
	}

	// stop 暂停时间
	stop() {
		this.isStop = true;
		this.tweens.forEach(function(tween) {
			tween.stop();
		});
	}

	start() {
		this.isStop = false;
		this.tweens.forEach(function(tween) {
			tween.start();
		});
	}
}

window.Time = Time;

for (let i = 0; i < 10000; i+=100) {
	window['TIME_' + i] = window.env === 'develop' ? 0 : i;
}


export {TIME, Time};








