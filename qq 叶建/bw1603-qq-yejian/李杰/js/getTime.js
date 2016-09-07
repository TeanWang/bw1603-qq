function show() {
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth()+1;
		var date = now.getDate();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		var day = now.getDay();

		var str = year +'-'+ format(month) +'-'+ format(date) +' '+ format(hour) +':'+ format(minute) +':'+ format(second);
		return str;
	}

function format(time){
	if (time<10) {
		return '0' + time;
	} else {
		return time;
	}
}