function getStyle(obj,attr) {
		return getComputedStyle(obj,null)[attr];
	}

	function animate(obj,args,fn) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var flag = true;
			for(var i in args){
				var current; 
				if ('opacity' == i) {
					current = getStyle(obj,i)*100;
				} else{
					current = parseInt(getStyle(obj,i));
				}
				
				var speed = (args[i] - current)/8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if (current == args[i]) {
					if (flag) {
						clearInterval(obj.timer);
						if (fn) {
							fn();
						}
					}
				} else {
					if ('opacity' == i) {
						obj.style.opacity = (current + speed)/100;
					} else{
						obj.style[i] = current + speed + 'px';
					}
					flag = false;
				}
			}

		},20);

	}