// function getTempCallback (location, callback) {
// 	callback(undefined, 3);
// 	callback('City not found');
// }

// getTempCallback ('Petrozavodsk', function(err, temp) {
// 	if (err) {
// 		console.log('Error: ', err);
// 	} else {
// 		console.log('Success: ', temp);
// 	}
// });
// 
// function getTempPromise (location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function(){
// 			resolve('');
// 		}, 1000);
// 			reject('Город не найден '+location);
// 	});
// }

// getTempPromise('Petrozavodsk').then(function(temp){
// 	console.log('Promise Success: ', temp);
// }, function(err){
// 	console.log('Promise Error: ', err);
// })

// Challenge Area

// function addPromise(a, b) {
// 	return new Promise(function(resolve, reject) {
// 		if (typeof a === 'number' && typeof b === 'number') {
// 			resolve(a+b);
// 		} else {
// 			reject('Что-то пошло не так');
// 		}
// 	});
// }

// addPromise(109, 100).then(function(sum) {
// 	console.log("Сумма: "+sum);
// }, function(errorMessage) {
// 	console.log(errorMessage);
// })

// addPromise(109, "слонёнок").then(function(sum) {
// 	console.log("Сумма: "+sum);
// }, function(errorMessage) {
// 	console.log(errorMessage);
// })