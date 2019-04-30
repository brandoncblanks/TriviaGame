


var countTime = newTime("1:00").getTime();

var x = setInterval(function() {

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("Time Remaining").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Time Remaining").innerHTML = "EXPIRED";

  }

}, 5000);

const questions = [
    {
      question: "",
      option1: "",
      option2: "",
      option3: ""
    },
    {
      question: "",
      option1: "",
      option2: "",
      option3: ""
    },
    {
      question: "",
      option1: "",
      option2: "",
      option3: "B"
    },
    {
      question: "",
      option1: "",
      option2: "",
      option3: ""
    }
  ];
  
  function Question (props) {
    return (
      `<h2>${props.question}</h2>
       <div class="form-group">
         <label>${props.option1}</label> 
         <input type="radio" value="${props.option1}" />
       </div>
       <div class="form-group">
         <label>${props.option2}</label> 
         <input type="radio" value="${props.option2}" />
       </div>
       <div class="form-group">
         <label>${props.option3}</label> 
         <input type="radio" value="${props.option3}" />
       </div>`
    );
  }
  
  function QRow (question) {
      return (
        `<div class="row">
              <div class="col">
                ${Question(question)}
              </div>
          </div>`
      );
  }
  
  function renderQuestions () {
    let questionsHtml = "";
    for (let i = 0; i < questions.length; i++) {
      questionsHtml += QRow(questions[i]);
    }
    return questionsHtml;
  }
  
  function QuestionsContainer () {
    return `<div class="container">
      ${renderQuestions()}
    </div>`;
    console.log(question);
  }
  
  const newRow = $("#root").html( QuestionsContainer() );
  
  