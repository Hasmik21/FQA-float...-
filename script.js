let askedQuestionsIcon = document.querySelectorAll('.asked-questions .asked-questions__block .asked-questions__questions .asked-questions__item .asked-questions__icon');
let askedQuestionsAnswer = document.querySelectorAll('.asked-questions__answer-text');
let askedQuestionsQuestion = document.querySelectorAll('.asked-questions .asked-questions__block .asked-questions__questions .asked-questions__item .asked-questions__question');
let minusIcon  = document.querySelectorAll('.asked-questions .asked-questions__block .asked-questions__questions .asked-questions__item .asked-questions__icon .asked-questions__icon-minus');
let plusIcon = document.querySelectorAll('.asked-questions .asked-questions__block .asked-questions__questions .asked-questions__item .asked-questions__icon .asked-questions__icon-plus');
let clicked = false;

askedQuestionsIcon.forEach((item, index) => {
    item.onclick = () => {
        if(clicked) {
            askedQuestionsAnswer[index].style = `display: none; margin: 20px 0 0px 0;`;
            askedQuestionsQuestion[index].style = `color: #333`;  
            plusIcon[index].style.display = 'block';
            minusIcon[index].style.display ='none';
            clicked = false;
        } else {
            askedQuestionsAnswer[index].style = `display: block; margin: 20px 0 0px 0;`;
            askedQuestionsQuestion[index].style = `color: orange`;
            plusIcon[index].style.display = 'none';
            minusIcon[index].style.display ='block';
            clicked = true;
        }
    }
});
















const options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", ()=>{
    for (let j = 0; j < options.length; j++) {
      if(options[j].classList.contains("selected")){
        options[j].classList.remove("selected");
      }
    }

    options[i].classList.add("selected");
    for (let k = 0; k < options.length; k++) {
      options[k].classList.add("selectall");
    }

    let forVal = options[i].getAttribute("for");
    let selectInput = document.querySelector("#"+forVal);
    let getAtt = selectInput.getAttribute("type");
    if(getAtt == "checkbox"){
      selectInput.setAttribute("type", "radio");
    }else if(selectInput.checked == true){
      options[i].classList.remove("selected");
      selectInput.setAttribute("type", "checkbox");
    }

    let array = [];
    for (let l = 0; l < options.length; l++) {
      if(options[l].classList.contains("selected")){
        array.push(l);
      }
    }
    if(array.length == 0){
      for (let m = 0; m < options.length; m++) {
        options[m].removeAttribute("class");
      }
    }
  });
}

