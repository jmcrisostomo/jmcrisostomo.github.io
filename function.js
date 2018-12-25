$(document).ready(function($) {
	var get_month = moment().month();
	var get_day = moment().date();

	var foo = get_month + '-' + get_day;
	console.log(foo);
	if(foo == '1-1'){
		$('.description').text('Manigong Bagong Taon!');
	}
	else if(foo == '5-12'){
		$('.description').text('Happy Independence Day!');
		$('.description').append('<span><img src="https://media.giphy.com/media/dChn3so34WFdC/giphy.gif" alt="Philippine_Flag" style="height: 32px;width: auto;position: absolute;"></span>');

	}
	else if(foo == '5-17'){
		$('.description').text('Happy Father\'s Day!');
	}
	else if(foo == '7-18'){
		$('.description').text('Happy Birthday to Me! :)');
	}
	else if(foo == '12-25'){
		$('.description').text('Merry Christmas! <3');
	}
	// $('.description').text('Today: ' + get_month + '-' + get_day);	
});
