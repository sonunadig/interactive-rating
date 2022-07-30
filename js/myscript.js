const submit_btn = document.querySelector('.submit-btn');
const card_content_1 = document.querySelector('.card-content-1');
const card_content_2 = document.querySelector('.card-content-2');
const ratingbtns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let rate_score = 3;

submit_btn.addEventListener('click', onSubmit);
ratingbtns.forEach( btn => {

    btn.addEventListener('click', handleRatingBtnClick);

});

function onSubmit(){

    card_content_1.classList.add('hide');
    score.textContent = rate_score;
    card_content_2.classList.remove('hide');
    //console.log('submit click');

}

function handleRatingBtnClick(event) {
    ratingbtns.forEach(btn => {
        btn.classList.remove('active');
    });

    if (event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    rate_score = event.target.textContent;
    //console.log(rate_score);

}

//console.log(ratingbtns);