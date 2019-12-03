$(function () {
	//乱数を表示
	const displayText = (randmath) => {
		let target = Math.ceil(Math.random() * 100);
		randmath.text(target);
	}
	
	//数字を表示するh1
	const randmath = $('#randmath');
	//イベント開始ボタン
	const btn = $('#btn');
	//フェード時間
	const fadeinTime = 5500;
	//オーディオオブジェクト
	const audioElem = new Audio();
	audioElem.src = 'audio/se_maoudamashii_instruments_drumroll.mp3';

	btn.click(function () {
		audioElem.play();
		setTimeout(displayText, fadeinTime,randmath);
	});

	

});