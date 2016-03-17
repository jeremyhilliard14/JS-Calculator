$(document).ready(function(){

	document.onkeyup = keyCheck;

	$('.operator, .number').click(function(){
		if ($(this).hasClass('equals')){
			doIt();
		}else if($(this).hasClass('clear')){
			$('.screen').val('');
		}else{
			var currScreenVal = $('.screen').val();
		$('.screen').val(currScreenVal + $(this).val());
		}
	})

	function keyCheck(){
		var keyID = event.keyCode;
		console.log(keyID);
		var currScreenVal = $('.screen').val();
		switch(keyID){
			case 27:
				clearScreen();
				break;
			case 58:
				$('.screen').val(currScreenVal + 0);
				break;
			case 49:
				$('.screen').val(currScreenVal + 1);
				break;
			case 50:
				$('.screen').val(currScreenVal + 2);
				break;
			case 51:
				$('.screen').val(currScreenVal + 3);
				break;
			case 52:
				$('.screen').val(currScreenVal + 4);
				break;
			case 53:
				$('.screen').val(currScreenVal + 5);
				break;
			case 54:
				$('.screen').val(currScreenVal + 6);
				break;
			case 55:
				$('.screen').val(currScreenVal + 7);
				break;
			case 56:
				$('.screen').val(currScreenVal + 8);
				break;
			case 57:
				$('.screen').val(currScreenVal + 9);
				break;
			case 187:
				// //equal sign
				// $('.screen').val('=');
				doIt();
				break;
			case 191:
				$('.screen').val(currScreenVal + '/');
				break;
			case 88:
				$('.screen').val(currScreenVal +'*');
				break;
			case 189:
				$('.screen').val(currScreenVal + '-');
				break;
			case 107:
				$('.screen').val(currScreenVal + '+');
				break;
			case 13:
				// enter sign
				doIt();
				break;
			case 190:
				$('.screen').val(currScreenVal + '.');
		}
	}
})

// function clearScreen(){
// 	$('.screen').val("");
// }


// function insertVal(val){
// 	var currScreenVal = $('.screen').val();
// 	$('.screen').val(currScreenVal + val);
// }

function doIt(){
	try{
		var total = eval($('.screen').val());
	}catch(e){
		console.log(e);
		if(e instanceof SyntaxError){
			alert("Try again.");
			return;
		}else if(e instanceof ReferenceError){
			alert("Dang");
			return;
		}
	}
	$('.screen').val(total);
}