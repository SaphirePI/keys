/*
 *   GAME SCRIPT CORE.
 *  Пожалуйста, не редактируйте если не разбираетесь.
 * Разбираетесь? Тогда отправляйте свои идеи на aspireworld@protonmail.com
*/


async function start() {

    const key = $("#key")
    const points_div = $("#points")

    let points;
    let Points;
    let death = 0;
    let death_strike = 0;

    const codes = {

        '97': 'a',
        '98': 'b',
        '99': 'c',
        '100': 'd',
        '101': 'e',
        '102': 'f',
        '103': 'g',
        '104': 'h',
        '105': 'i',
        '106': 'j',
        '107': 'k',
        '108': 'l',
        '109': 'm',
        '110': 'n',
        '111': 'o',
        '112': 'p',
        '113': 'q',
        '114': 'r',
        '115': 's',
        '116': 't',
        '117': 'u',
        '118': 'v',
        '119': 'w',
        '120': 'x',
        '121': 'y',
        '122': 'z',

    }

    let keycode;
    let active;
    window.onload = () => {
        Points = 0;
        points = 0;

        Rand_keycode()
    }

    function Rand_keycode() {
        keycode = Math.floor(Math.random() * 26) + 97;



        if (!active) {
            death_strike++;
            if (death_strike > 4) {
                $('#tip').html("Проверьте правильность раскладки.")
            } else {
            }
        } else {
            death_strike = 0;
            $('#tip').html("")
        }


        key.html(codes[keycode])
    }

    window.onkeypress = function (e) {
        if (points == Points) {
            if (e.keyCode == keycode) {
                Points++;
                active = true;
                points++;
                points_div.html(points);
                Rand_keycode();
            } else {
                active = false;
                points = 0;
                Points = 0;
                points_div.html(points);
                Rand_keycode()

            }
        } else {
            death_strike++;
            points = 0;
        }

    }

};
start();
