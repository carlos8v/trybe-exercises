function initializeStates() {
    const select = document.querySelector('select');
    const states = {
        'AC': 'Acre',
        'AL': 'Alagoas',
        'AP': 'Amapá',
        'AM': 'Amazonas',
        'BA': 'Bahia',
        'CE': 'Ceará',
        'DF': 'Distrito Federal',
        'ES': 'Espírito Santo',
        'GO': 'Goiás',
        'MA': 'Maranhão',
        'MT': 'Mato Grosso',
        'MS': 'Mato Grosso do Sul',
        'MG': 'Minas Gerais',
        'PA': 'Pará',
        'PB': 'Paraíba',
        'PR': 'Paraná',
        'PE': 'Pernambuco',
        'PI': 'Piauí',
        'RJ': 'Rio de Janeiro',
        'RN': 'Rio Grande do Norte',
        'RS': 'Rio Grande do Sul',
        'RO': 'Rondônia',
        'RR': 'Roraima',
        'SC': 'Santa Catarina',
        'SP': 'São Paulo',
        'SE': 'Sergipe',
        'TO': 'Tocantins'
    }

    for (let key in states) {
        const option = document.createElement('option');
        option.value = key;
        option.innerText = states[key];
        select.appendChild(option);
    }
}

function submitForm(event) {
    event.preventDefault();
    const date = event.target.children[1].children[4].children[1];
    const dateValues = date.value.split('/');
    let error = false;
    if (dateValues.length !== 0) {
        if (parseInt(dateValues[0]) < 0 || parseInt(dateValues[0]) > 31
        || parseInt(dateValues[1]) <= 0 || parseInt*dateValues[1] > 12
        || parseInt(dateValues[2]) < 0) {
            error = true
        }
    }
    if (error) alert('Data incorreta');
    document.querySelector('.wrapper').style.display = 'none';
    showData();
}

function showData() {
    let text = '';
    const select = document.querySelector('select');
    const textarea = document.querySelector('textarea');
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'radio') {
            if (input.checked) {
                text += `<p>${input.name} : ${input.value}</p>`;
            }
        } else {
            text += `<p>${input.name} : ${input.value}</p>`;
        }
    })
    text += `<p>${select.name} : ${select.value}</p>`;
    text += `<p>${textarea.name} : ${textarea.value}<p>`;
    document.querySelector('.data').innerHTML = text;
}

function clean() {
    document.location.reload();
}

document.body.onload = function () {
    initializeStates();
    document.querySelector('.clear').addEventListener('click', clean);
    document.querySelector('form').addEventListener('submit', submitForm);
    document.getElementById('date').DatePickerX.init();
}