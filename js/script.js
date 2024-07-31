/* eslint-disable indent */
// /* eslint-disable indent */
// var personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// 	start: function() {
// personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		}
// 	},
// 	rememberMyFilms: function() {
// 		for (var i = 0; i < 2; i++) {
	
	
// 			var filmTitle;
// 			var filmRaiting;
	
// 			while (true) {
// 				filmTitle = prompt('Один из последних просмотренных фильмов?', '').trim();;
// 				if (filmTitle != null && filmTitle.length < 50 && filmTitle != '') {
// 					break;
// 				}
// 			}
	
// 			while (true) {
// 				filmRaiting = prompt('На сколько оцениваете его?', '').trim();
// 				if (filmRaiting != null && filmRaiting.length < 50 && filmRaiting != '') {
// 					break;
// 				}
// 			}
// 		}
// 	},
// 	detectPersonalLevel: function() {
// 		if (personalMovieDB.count <= 10) {
// 			alert('Просмотрено довольно мало фильмов');
// 		}
// 		if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
// 			alert('Вы классический зритель');
// 		}
// 		if (personalMovieDB.count > 30) {
// 			alert('Вы киноман');
// 		}
// 		// personalMovieDB.movies[filmTitle] = filmRaiting;
// 	},
// 	showMyDB: function(hidden) {
// 		if (!hidden)
// 			console.log(personalMovieDB)
// 	},
// 	toggleVisibleMyDB: function(){
// if(personalMovieDB.privat){
// 	personalMovieDB.privat = false;
// } else{
// 	personalMovieDB.privat = true;
// }
// 	},
// 	writeYourGenres: function() {
// 		for (let i = 0; i < 3; i++) {
// 			let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
// 			if (favouriteGenre == '' || favouriteGenre == null){
//  				console.log('Вы ввели некорректные данные или не ввели никаких вообще');
//  				i--;
//  			}else{
// 				personalMovieDB.genres[i] = favouriteGenre;
//  			}
//  		}
//  		personalMovieDB.genres.forEach ((item, i) => {
//  console.log(`Любимый жанр ${i+1} - это ${item} `);
//  		});
// 	}
// };

