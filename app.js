const questions = document.querySelectorAll('.question-container')
const answers = document.querySelectorAll('.answer-container')
const imgshow = document.querySelectorAll('.img-show')
const imgshow2 = document.querySelectorAll('.img-show2')
const imgshow3 = document.querySelectorAll('.img-show3')
const imgshow4 = document.querySelectorAll('.img-show4')
//const imgs = document.querySelectorAll('.img-show')

/*questions.forEach(function(question, index) {
    question.addEventListener('click', function(){
        if (answers[index].style.display === 'none') {
            answers[index].style.display = 'block'
           // imgshow.classList.add('showme1')
           // imgshow2.classList.add('showme2')
        } else {
            answers[index].style.display = 'none'
            //imgshow.classList.remove('showme1')
           // imgshow2.classList.remove('showme2')
        }

        
    })
})*/

imgshow[0].onclick = function(){
    imgshow2[0].style.display = 'block'
    imgshow[0].style.display = 'none'
    answers[0].style.display = 'block'
}

imgshow2[0].onclick = function(){
    imgshow2[0].style.display = 'none'
    imgshow[0].style.display = 'block'
    answers[0].style.display = 'none'
}


imgshow[1].onclick = function(){
    imgshow2[1].style.display = 'block'
    imgshow[1].style.display = 'none'
    answers[1].style.display = 'block'
}

imgshow2[1].onclick = function(){
    imgshow2[1].style.display = 'none'
    imgshow[1].style.display = 'block'
    answers[1].style.display = 'none'
}

imgshow[2].onclick = function(){
    imgshow2[2].style.display = 'block'
    imgshow[2].style.display = 'none'
    answers[2].style.display = 'block'
}

imgshow2[2].onclick = function(){
    imgshow2[2].style.display = 'none'
    imgshow[2].style.display = 'block'
    answers[2].style.display = 'none'
}



imgshow[3].onclick = function(){
    imgshow2[3].style.display = 'block'
    imgshow[3].style.display = 'none'
    answers[3].style.display = 'block'
}

imgshow2[3].onclick = function(){
    imgshow2[3].style.display = 'none'
    imgshow[3].style.display = 'block'
    answers[3].style.display = 'none'
}

/*function displayme(){
    if (imgshow3.style.display === 'block') {
        imgshow3.style.display = 'none'
        answers.style.display = 'block'
    }
    else{
    imgshow4.style.display = 'none'
    imgshow3.style.display = 'block'
    answers.style.display = 'none'
    }
    
}*/

