	setInterval(function() {
	var time = new Date();

	var hr = time.getHours();
	var mn = time.getMinutes();
	var se = time.getSeconds();

	hours.innerHTML = hr;
	minutes.innerHTML = mn;
	seconds.innerHTML = se;

}, 1000);

// 	