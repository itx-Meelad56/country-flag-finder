
let input = document.getElementById('input');
let flagImg = document.getElementById('flagImg');
let alertPara = document.getElementById('alertPara');
let btn = document.getElementById('btn')


btn.addEventListener('click', () => {
    if (!input.value) {
        alertPara.style.display = 'inline-block'
        alertPara.textContent = 'Enter country name (e.g. Pakistan)'
        return;
    };

    let api = fetch(`https://restcountries.com/v3.1/name/${input.value}`)
        .then(res => res.json())
        .then((result) => {
            alertPara.style.display = 'none'
            let [{ flags: { png } }] = result
            flagImg.src = png
        }).catch(() => {
            alertPara.style.display = 'inline-block'
            alertPara.textContent = 'You entered an invalid country name.'
            flagImg.src = ''
        })
})



