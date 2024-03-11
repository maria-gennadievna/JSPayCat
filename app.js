let fontSizeYes = 16;
let fontSizeOther = 16;


function handleChoice(choice) {
    if (choice === 'no') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('reallySure')" style="font-size: ${fontSizeOther}px;">Вы уверены?</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'reallySure') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('areYouPositive')" style="font-size: ${fontSizeOther}px;">Это точно?</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'areYouPositive') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('pokiePlease')" style="font-size: ${fontSizeOther}px;">Почему ты не хочешь?</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'pokiePlease') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
           <button onclick="handleChoice('justThinkAboutIt')" style="font-size: ${fontSizeOther}px;">Почему это? &#128580; </button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'justThinkAboutIt') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('illBeVerySad')" style="font-size: ${fontSizeOther}px;">Пожалуйста&#128073;&#128072;</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'illBeVerySad') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('illBeVeryVeryVerySad')" style="font-size: ${fontSizeOther}px;">Ну, пожалуйстаааааа~&#128073;&#128072;</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'illBeVeryVeryVerySad') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('illBeVeryVeryVeryVerySad')" style="font-size: ${fontSizeOther}px;">&#128580;&#128073;&#128072;</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'illBeVeryVeryVeryVerySad') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('illBeVeryVeryVeryVeryVerySad')" style="font-size: ${fontSizeOther}px;">Ну купи &#128557;&#128557;</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'illBeVeryVeryVeryVeryVerySad') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('okayIllStopAsking')" style="font-size: ${fontSizeOther}px;">Ну он же хороший!</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'okayIllStopAsking') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('justKiddingPleaseSayYes')" style="font-size: ${fontSizeOther}px;">Не &#128580;</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'justKiddingPleaseSayYes') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('ayaw')" style="font-size: ${fontSizeOther}px;">Ну, ты уже почти согласен)</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'ayaw') {
        document.querySelector('.question').innerText = 'Купите кота?';
        document.querySelector('.choices').innerHTML = `
            <button onclick="handleChoice('yes')" style="font-size: ${fontSizeYes}px;">Да</button>
            <button onclick="handleChoice('reallySure')" style="font-size: ${fontSizeOther}px;">Все еще не хочешь?</button>
        `;
        fontSizeOther = 16;
        fontSizeYes += 8;
    } else if (choice === 'yes') {
        document.querySelector('.container').innerHTML = `
            <img src="3.gif" alt="drags the cat" class="gif">
            <h2 style = "color: white">Ура! &#128150;&#x1F92D;</h2>
			<h2 style = "color: white"> Скоро увидимся!!&#128150;&#128150;&#128150;</h2>
        `;
    }
}

// по ДЗ

let person = {
    'photo': '10.gif',
    'name': 'Белый кот',
    'isChild': false,
    'all': [
        {
            'name' : 'Белый кот',
            'properties': 'Быть милым и радовать',
            'love': 'Рыбку'
        },
    ]
}

let loadButtonElement = document.getElementById('loadButton')
loadButtonElement.onclick = function () {
    console.log('load');

    let imgElement = document.getElementById('photo')
    imgElement.src = person.photo

    let allElement = document.getElementById('all')
    let allString = ''
    for (const cat of person.all) {
        allString += `
            <div>В общем: ${cat.name}</div>
            <div>Способен: ${cat.properties}</div>
            <div>Любит: ${cat.love}</div>
             `
    }
    allElement.innerHTML = allString
}