// var total = eval($('.screen').val());


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


	$('.clear').click(function(){
		shake('.clear, .screen', 100, 10, 4);
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
				$('.screen').val(currScreenVal + '+');
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
});

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
			// alert("Syntax Error.");
			return;
		}else if(e instanceof ReferenceError){
			alert("Reference Error");
			return;
		}
	}
	$('.screen').val(total);
	if(total == 14){
		$('#smiley').animate({margin: '+=0 0 0 2000px'}, 2000);
    }else if(total == 3.14){
    	$('#pie').animate({margin: '+= 0 0 0 3000px'}, 1500);
    }else if(total == 360){
    	$('#calculator').addClass('spin');
    }else if(total >= 1000000){
    	$('.screen').css({transform: 'scale(2,2)'});
    }else if(total == 36){
    	$('.clear').addClass('roll');
    }
}


function shake(div,interval,distance,times){
    $('.clear, .screen').css('position','relative');
    for(var iter=0;iter<(times+1);iter++){
        $('.clear, .screen').animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
    }//for
    $('.clear, .screen').animate({ left: 0},interval);
}//shake


// function rotateCalc(){
// 		$('#calculator').css({transform: 'roatate(720deg)'});
// }

