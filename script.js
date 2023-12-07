    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "medium",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];

    let score = 0;
    let questionNumber = 0;
    let aus = [];
    let numQuestion = document.getElementById("n_questions");
    let scorePoints = document.getElementById("score");
    let buttonNext = document.getElementById("next");
    let circle = document.getElementById("timer");
    let tempo = 10;


    function quiz(){ 


      if(questions[questionNumber]){
        switch(questions[questionNumber].difficulty){
          case "easy":
            tempo=30;
            break;
          case "medium":
            tempo=45;
            break;
          case "hard":
            tempo=60;
            break;
          default:
            tempo=60;
            break;
        }
      }
      



      let q = document.getElementById("question");
      let boxAnswers = document.getElementById("form");
      boxAnswers.innerHTML = "";
      if(questionNumber<questions.length){
        q.innerText = questions[questionNumber].question;
        answersArray(aus);
        for(let i=0; i<aus.length; i++){
          boxAnswers.innerHTML += 
          "<label><input id='risposta"+i+"' type='radio' name='answer'value ='" + aus[i] + "'><span>" + aus[i] + "</span></label>";
        }
        

        
      }else{
        q.innerText = "Hai completato il quiz";
        buttonNext.style.display = "none";
        numQuestion.innerHTML = "";
        circle.style.display = "none";
        scorePoints.innerHTML = "Hai totalizzato <b>"+score+" punti</b> su "+questions.length;
      }

      aus = [];
      questionNumber++;

      if(questionNumber<=questions.length)
        numQuestion.innerHTML = "Question: "+questionNumber+" <span>/10</span>";

    }

    function setTimer(){
      console.log("son dentro");
      setInterval(function(){
        if(tempo>=0){
          circle.style.background = "#00ffff";
          circle.innerHTML = "<span>" +tempo+ "</span> <br>secondi";
          if(tempo<=10)
            circle.style.background = "red";
        }else{
          
          checkScore();
          quiz();
        }
        tempo--;
        },1000);
        
      }


    quiz();

    

    function answersArray(){
      aus.push(questions[questionNumber].correct_answer);
        for(let i=0; i<questions[questionNumber].incorrect_answers.length; i++){
          aus.push(questions[questionNumber].incorrect_answers[i]);
        }

        aus = shuffleAnswers();

    }

    function shuffleAnswers(){
      let randomAus = [];
      for(let i = aus.length-1; i>=0; i--){
        let index = Math.floor(Math.random() * aus.length);
        randomAus.push(aus[index]);
        aus.splice(index, 1);
      }
      return randomAus;
    }

    function checkScore(){
      let radios = document.getElementsByName("answer");
      for (let i=0;i<radios.length;i++){
        if(radios[i].checked){
          /* console.log(radios[i].value);
          console.log(questions[questionNumber-1].correct_answer); */
          if(radios[i].value === questions[questionNumber-1].correct_answer){
            score++;
            /* console.log(score); */
          }
        }
      }
    }

    


    /* function quiz(){
        let q = document.getElementById("question");
        q.innerText = questions[questionNumber].question;
        let boxAnswers = document.getElementById("box");
        boxAnswers.innerHTML = "";
        if(questions[questionNumber].type === "multiple"){
            let aus = inserimentoValori(questionNumber);
            for(let i=0; i<4; i++){
              boxAnswers.innerHTML += "<label><input type='radio' name='answer'>"+aus[i]+"</label>";
            }

        } else if(questions[questionNumber].type === "boolean"){
          let aus = inserimentoValori(questionNumber);
          for(let i=0; i<2; i++){
            boxAnswers.innerHTML += "<label><input type='radio' name='answer'>"+aus[i]+"</label>";
          }
        }
        

        


        questionNumber+=1;
    }

    quiz();

    function inserimentoValori(number){
      questions[number].incorrect_answers.push(questions[number].correct_answer);
      /* console.log(questions[number].incorrect_answers); */
      

       /* return mischiaElementi(questions[number].incorrect_answers); */  

      /* console.log(questions[number].correct_answer); */
    /* }

    function mischiaElementi(array){
      let currentIndex = array.length-1;
      let aus = [];

      while(currentIndex>=0){
        let index = Math.floor(Math.random() * currentIndex);
        aus.push(array[index]);
        array.splice(index,1);
        currentIndex--;
      };
      return aus;
    } */
