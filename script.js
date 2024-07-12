let Button = document.getElementById('btn')
let Content = document.getElementById('content')

Button.addEventListener('click', () => {

    // random number
    let rand = Math.floor(10 + 100 * Math.random())
    Content.innerHTML = rand;

    // random samll alphabat
    let rand_alph = String.fromCharCode(Math.floor(97 + 26 * Math.random()))
    Content.insertAdjacentHTML('afterbegin', rand_alph)

    // random samll alphabat part 2
    let rand_alph2 = String.fromCharCode(Math.floor(97 + 26 * Math.random()))
    Content.insertAdjacentHTML('afterbegin', rand_alph2)
    
    // random samll alphabat part 3
    let rand_alph3 = String.fromCharCode(Math.floor(97 + 26 * Math.random()))
    Content.insertAdjacentHTML('afterbegin', rand_alph3)

    // random Capital alphabat
    let rand_large_alph2 = String.fromCodePoint(Math.floor(65 + 26 * Math.random()))
    Content.insertAdjacentHTML('beforeend', rand_large_alph2)

    // random special character
    let special_character = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~']
    let rand_special_chara = Math.floor(Math.random() * special_character.length)
    let random_char = special_character[rand_special_chara]
    Content.insertAdjacentHTML('beforeend', random_char)

    // random number part 2
    let rand2 = Math.floor(100 + 200 * Math.random())
    Content.insertAdjacentHTML('beforeend', rand2);

    // random Capital alphabat
    let rand_large_alph = String.fromCodePoint(Math.floor(65 + 26 * Math.random()))
    Content.insertAdjacentHTML('beforeend', rand_large_alph)

})