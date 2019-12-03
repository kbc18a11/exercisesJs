$(function () {
	const randmath = $('#randmath');
	const btn = $('#btn');
	const fadeinTime = 1000;

	btn.click(function () {
		let target = Math.ceil(Math.random() * 100);

		randmath.text(target);
		randmath.hide().fadeIn(fadeinTime);
	});

});