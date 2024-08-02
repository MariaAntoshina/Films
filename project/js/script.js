/* eslint-disable no-empty */
/* eslint-disable indent */
/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genreChange = poster.querySelector('.promo__genre'),
        oldFilms = document.querySelector('.promo__interactive-list'),
        btn = document.querySelector('.add button'),
        checkbox = document.querySelector('.add input[type=checkbox]');


    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            console.log('Добавляем любимый фильм');
        }
    });

    btn.addEventListener('click', (e) => {
        console.log('here')
        let input = e.target.form[0].value;

        if (input.length > 21) {
            movieDB.movies.push(input.slice(0, 21) + '...');
        } else {
            movieDB.movies.push(input);
        }
        mySortingAlgorythm();


        console.log('movieDB', movieDB);
        console.log('oldFilms', oldFilms);
    });

    adv.forEach(item => {
        item.remove();
    });

    genreChange.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';

    mySortingAlgorythm();

    function mySortingAlgorythm() {
        oldFilms.innerHTML = '';
        movieDB.movies.sort();

        movieDB.movies.forEach((film, i) => {
            oldFilms.innerHTML += `<li class="promo__interactive-item"> ${i + 1} ${film}
             <div class="delete"></div></li>`;
        });

        const deleted = document.querySelectorAll('.delete');
        for (let i = 0; i < deleted.length; i++) {

            deleted[i].addEventListener('click', (e) => {
                const filmToDelete = e.target.parentElement.innerText;

                for (const elem of movieDB.movies) {

                    if (filmToDelete.includes(elem.toUpperCase())) {

                        movieDB.movies.splice(movieDB.movies.indexOf(elem), 1);
                    }
                }

                mySortingAlgorythm();

            });
        }
    }
});

function isPangram(string, letterCount) {
    let arr = string.split('');
    let result = true;
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        console.log("char", arr[i]);
        if (arr[i].toUpperCase() != arr[i].toLowerCase()) {
            set.add(arr[i]);
        }
    }
    if (set.size < letterCount) {
        result = false;
    }
    return result;
}
console.log(isPangram('The quick brown fox jumps over he lazy dog', 33));

function deepCount(a) {
    let result = 0;
    result = a.length;
    for (let i of a) {
        if (Array.isArray(i)) {
            result += deepCount(i);
        }
    }

    return result;
}
console.log(deepCount([1, 5, [3,5,[8]]]));
//[1,2,3]
//[1,2,[3,4]]