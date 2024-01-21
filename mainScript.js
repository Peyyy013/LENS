const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  container.classList.add('active');
});
loginLink.addEventListener('click', () => {
  container.classList.remove('active');
});

const btnPopup = document.querySelector('.btnLogin-popup');

btnPopup.addEventListener('click', () => {
  if (container.classList.contains('active-popup')) {
    container.classList.remove('active-popup'); // Remove the login screen if it's active
  } else {
    container.classList.add('active-popup');
  }
});

const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', () => {
  container.classList.remove('active-popup');
});

//Assessment 
document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const feedbackElement = document.getElementById('feedback');
  const nextButton = document.getElementById('nextButton');
  const resultElement = document.getElementById('result');

  const quizData = [
    // Mobile App and Web Development (MAWD)
    {
      id: 1,
      question: 'I enjoy creating and designing user interfaces for websites or mobile apps.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [1, 2], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 2,
      question: 'I find joy in solving coding challenges and debugging software.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [4], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 3,
      question: 'I am interested in staying updated on the latest trends in web and mobile technologies.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [4, 5], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 4,
      question: 'I enjoy collaborating with a team to develop software projects.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [4, 5], 'MAWD': [3, 4], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 5,
      question: 'I have a keen eye for design and user experience in digital applications.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [1, 4], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [] }
    },

    // Humanities and Social Sciences (HUMSS)
    {
      id: 6,
      question: 'I enjoy exploring philosophical concepts and engaging in deep conversations.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [1, 2], 'HUMSS': [4], 'STEM': [], 'MAWD': [2], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 7,
      question: 'I find joy in analyzing historical events and their impact on society.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [3], 'GAS': [5], 'HUMSS': [4], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 8,
      question: 'I am passionate about advocating for social justice and equality.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [4, 5], 'HUMSS': [4], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 9,
      question: 'I enjoy expressing my thoughts and ideas through written essays or articles.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [4], 'HUMSS': [4], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [4, 5] }
    },
    {
      id: 10,
      question: 'I am interested in understanding different cultures and their impact on society.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [3], 'GAS': [5], 'HUMSS': [1, 2], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
    },

    // Accountancy, Business and Management (ABM)
    {
      id: 11,
      question: 'I enjoy analyzing financial data and making strategic business decisions.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4, 5], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [4] }
    },
    {
      id: 12,
      question: 'I find joy in planning and organizing events or projects.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [], 'HUMSS': [4], 'STEM': [], 'MAWD': [], 'Culinary': [4], 'TOPPER': [] }
    },
    {
      id: 13,
      question: 'I have a talent for and enjoy expressing myself through writing or public speaking.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [4], 'HUMSS': [4, 5], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [4, 5] }
    },
    {
      id: 14,
      question: 'I am fascinated by the world of finance and investment.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4, 5], 'GAS': [], 'HUMSS': [3], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
    },
    {
      id: 15,
      question: 'I am interested in understanding how businesses operate and succeed in the market.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4, 5], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [1, 4], 'Culinary': [], 'TOPPER': [] }
    },

    // General Academic Strand (GAS)
    {
      id: 16,
      question: 'I enjoy learning about a variety of subjects and don\'t want to specialize in one area.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree ', 'Strongly Agree'],
      strandScores: { 'ABM': [2, 3], 'GAS': [4, 5], 'HUMSS': [2, 3], 'STEM': [1, 2, 3], 'MAWD': [1, 2], 'Culinary': [], 'TOPPER': [1, 2, 3] }
    },
    {
      id: 17,
      question: 'I am interested in exploring various career paths before deciding on a specific field.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [2, 3], 'GAS': [4, 5], 'HUMSS': [2, 3], 'STEM': [1, 2, 3], 'MAWD': [1, 2], 'Culinary': [], 'TOPPER': [1, 2, 3] }
    },
    {
      id: 18,
      question: 'I enjoy participating in activities that involve critical thinking and problem-solving.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [2, 3], 'GAS': [4, 5], 'HUMSS': [2, 3], 'STEM': [1, 2, 3], 'MAWD': [2], 'Culinary': [], 'TOPPER': [1, 2, 3] }
    },
    {
      id: 19,
      question: 'I am interested in gaining a broad understanding of the world and its complexities.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [2, 3], 'GAS': [4, 5], 'HUMSS': [2, 3], 'STEM': [1, 2, 3], 'MAWD': [], 'Culinary': [], 'TOPPER': [1, 2, 3] }
    },
    {
      id: 20,
      question: 'I enjoy being adaptable and open to learning new things in various fields.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [2, 3], 'GAS': [4, 5], 'HUMSS': [2, 3], 'STEM': [1, 2, 3], 'MAWD': [2], 'Culinary': [], 'TOPPER': [1, 2, 3] }
    },

    // Culinary Arts (Culinary)
    {
      id: 21,
      question: 'I enjoy experimenting with new recipes and creating delicious meals.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [], 'Culinary': [4, 5], 'TOPPER': [] }
    },
    {
      id: 22,
      question: 'I am fascinated by the art and science of cooking and baking.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [], 'Culinary': [4, 5], 'TOPPER': [] }
    },
    {
      id: 23,
      question: 'I enjoy working in a fast-paced and dynamic kitchen environment.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [], 'Culinary': [4, 5], 'TOPPER': [] }
    },
    {
      id: 24,
      question: 'I find joy in presenting dishes in an aesthetically pleasing manner.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [], 'Culinary': [4, 5], 'TOPPER': [] }
    },
    {
      id: 25,
      question: 'I am interested in learning about different cuisines and culinary traditions.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [], 'Culinary': [4, 5], 'TOPPER': [] }
    },

    // TOPPERS (TOPPER)
    {
      id: 26,
      question: 'I enjoy challenging myself with complex problem-solving tasks.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [4, 5], 'HUMSS': [4, 5], 'STEM': [4, 5], 'MAWD': [4], 'Culinary': [4, 5], 'TOPPER': [4, 5] }
    },
    {
      id: 27,
      question: 'I find joy in pursuing academic excellence and continuous learning.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [4, 5], 'HUMSS': [4, 5], 'STEM': [4, 5], 'MAWD': [4], 'Culinary': [4, 5], 'TOPPER': [4, 5] }
    },
    {
      id: 28,
      question: 'I enjoy participating in intellectual discussions and debates.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [4, 5], 'HUMSS': [4, 5], 'STEM': [4, 5], 'MAWD': [], 'Culinary': [], 'TOPPER': [4, 5] }
    },
    {
      id: 29,
      question: 'I am interested in pursuing a career that involves advanced research and analysis.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [4, 5], 'HUMSS': [4, 5], 'STEM': [4, 5], 'MAWD': [], 'Culinary': [], 'TOPPER': [4, 5] }
    },
    {
      id: 30,
      question: 'I enjoy taking on leadership roles in academic or extracurricular activities.',
      options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
      strandScores: { 'ABM': [4], 'GAS': [4, 5], 'HUMSS': [4, 5], 'STEM': [4, 5], 'MAWD': [], 'Culinary': [], 'TOPPER': [4, 5] }
    }
  ];

  let currentQuestionIndex = 0;
  let scores = {
    ABM: 0,
    GAS: 0,
    HUMSS: 0,
    STEM: 0,
    MAWD: 0,
    Culinary: 0,
    TOPPER: 0
  };
  // Shuffle function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle quizData
  shuffleArray(quizData);

  function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'option';
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => checkAnswer(index));
      optionsContainer.appendChild(optionElement);
    });

    feedbackElement.textContent = '';
    nextButton.hidden = true;
  }

  // ...

  function checkAnswer(optionIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedValue = currentQuestion.options[optionIndex];



    // Provide personalized feedback based on the question and selected option

    for (const strand in scores) {
      scores[strand] += currentQuestion.strandScores[strand].includes(optionIndex) ? 1 : 0;
    }

    // Provide personalized feedback based on the question and selected option
    let feedbackMessage = '';

    switch (currentQuestion.id) {
      // Feedback cases...
      // Case 1
      case 1:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in creating and designing user interfaces, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While user interface design might not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in user interface design with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy creating and designing user interfaces. Aspiring UI/UX designer!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'UI/UX maestro! Your strong interest in user interface design is commendable.';
            break;
        }
        break;

      // Case 2
      case 2:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in solving coding challenges and debugging software, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While coding challenges may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in coding challenges with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You find joy in solving coding challenges and debugging software. Future software engineer!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Coding virtuoso! Your strong interest in coding challenges is commendable.';
            break;
        }
        break;

      // Case 3
      case 3:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little interest in staying updated on the latest trends in web and mobile technologies, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While staying updated on tech trends may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in tech trends with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are interested in staying updated on the latest trends in web and mobile technologies. Tech enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Tech aficionado! Your strong interest in tech trends is commendable.';
            break;
        }
        break;

      // Case 4
      case 4:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in collaborating with a team to develop software projects, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While team collaboration may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in team collaboration with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy collaborating with a team to develop software projects. Team player!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Collaboration maestro! Your strong interest in team-based software development is commendable.';
            break;
        }
        break;

      // Case 5
      case 5:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in having a keen eye for design and user experience in digital applications, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While design and user experience may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in design and user experience with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You have a keen eye for design and user experience in digital applications. Design enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Design virtuoso! Your strong interest in creating aesthetically pleasing digital experiences is commendable.';
            break;
        }
        break;

      // Case 6
      case 6:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in exploring philosophical concepts and engaging in deep conversations, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While exploring philosophical concepts may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in philosophical exploration with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy exploring philosophical concepts and engaging in deep conversations. Deep thinker!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Philosopher extraordinaire! Your strong interest in philosophical exploration is commendable.';
            break;
        }
        break;

      // Case 7
      case 7:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in analyzing historical events and their impact on society, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While historical analysis may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in historical analysis with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You find joy in analyzing historical events and their impact on society. History enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'History buff! Your strong interest in historical analysis is commendable.';
            break;
        }
        break;

      // Case 8
      case 8:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little passion for advocating social justice and equality, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While advocating for social justice may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in social justice advocacy with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are passionate about advocating for social justice and equality. Social justice champion!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Social justice advocate! Your strong passion for equality is commendable.';
            break;
        }
        break;

      // Case 9
      case 9:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in expressing thoughts and ideas through written essays or articles, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While expressing thoughts through writing may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in expressing ideas through writing with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy expressing your thoughts and ideas through written essays or articles. Wordsmith!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Literary virtuoso! Your strong interest in expressing ideas through writing is commendable.';
            break;
        }
        break;

      // Case 10
      case 10:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little interest in understanding different cultures and their impact on society, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While cultural understanding may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in cultural understanding with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are interested in understanding different cultures and their impact on society. Cultural explorer!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Cultural connoisseur! Your strong interest in cultural diversity is commendable.';
            break;
        }
        break;

      // Case 11
      case 11:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in analyzing financial data and making strategic business decisions, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While financial analysis may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in financial analysis with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy analyzing financial data and making strategic business decisions. Aspiring financial analyst!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Financial maestro! Your strong interest in financial analysis is commendable.';
            break;
        }
        break;

      // Case 12
      case 12:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in planning and organizing events or projects, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While event planning may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in event planning with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You find joy in planning and organizing events or projects. Event planning enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Event planning virtuoso! Your strong interest in organizing is commendable.';
            break;
        }
        break;

      // Case 13
      case 13:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little talent for expressing yourself through writing or public speaking, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While expression through writing or speaking may not be your top talent, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your talent for expression with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You have a talent for and enjoy expressing yourself through writing or public speaking. Expressive communicator!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Oratorical virtuoso! Your strong talent for expression is commendable.';
            break;
        }
        break;

      // Case 14
      case 14:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little fascination with the world of finance and investment, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While finance may not be your top fascination, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your fascination with finance and investment with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are fascinated by the world of finance and investment. Finance enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Finance maestro! Your strong fascination with finance is commendable.';
            break;
        }
        break;

      // Case 15
      case 15:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little interest in understanding how businesses operate and succeed in the market, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While business operations may not be your top interest, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in business operations with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You have an interest in understanding how businesses operate and succeed in the market. Business enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Business maestro! Your strong interest in business operations is commendable.';
            break;
        }
        break;

      // Case 16
      case 16:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in learning about a variety of subjects and prefer specialization, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While general learning may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in general learning with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy learning about a variety of subjects and prefer not to specialize. Diverse learner!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Versatile learner! Your strong interest in diverse subjects is commendable.';
            break;
        }
        break;

      // Case 17
      case 17:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little interest in exploring various career paths before deciding on a specific field, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While career exploration may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in exploring various career paths with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are interested in exploring various career paths before deciding on a specific field. Career explorer!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Career path navigator! Your strong interest in career exploration is commendable.';
            break;
        }
        break;

      // Case 18
      case 18:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in participating in activities that involve critical thinking and problem-solving, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While critical thinking activities may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in critical thinking and problem-solving with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy participating in activities that involve critical thinking and problem-solving. Critical thinker!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Problem-solving virtuoso! Your strong interest in critical thinking is commendable.';
            break;
        }
        break;

      // Case 19
      case 19:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little interest in gaining a broad understanding of the world and its complexities, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While gaining a broad understanding may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in a broad understanding of the world with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are interested in gaining a broad understanding of the world and its complexities. Inquisitive mind!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'World explorer! Your strong interest in understanding complexities is commendable.';
            break;
        }
        break;

      // Case 20
      case 20:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in being adaptable and open to learning new things in various fields, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While adaptability may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in adaptability and open-mindedness with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy being adaptable and open to learning new things in various fields. Open-minded learner!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Adaptable explorer! Your strong interest in being open to learning is commendable.';
            break;
        }
        break;

      // Case 21
      case 21:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in experimenting with new recipes and creating delicious meals, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While experimenting with recipes may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in experimenting with recipes with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy experimenting with new recipes and creating delicious meals. Culinary artist!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Culinary virtuoso! Your strong interest in culinary arts is commendable.';
            break;
        }
        break;

      // Case 22
      case 22:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little fascination with the art and science of cooking and baking, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While the art and science of cooking may not be your top fascination, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your fascination with the art and science of cooking with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are fascinated by the art and science of cooking and baking. Culinary enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Culinary connoisseur! Your strong fascination with cooking is commendable.';
            break;
        }
        break;

      // Case 23
      case 23:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in working in a fast-paced and dynamic kitchen environment, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While a fast-paced kitchen environment may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your joy in a fast-paced kitchen environment with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy working in a fast-paced and dynamic kitchen environment. Kitchen dynamo!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Culinary dynamo! Your strong joy in a dynamic kitchen environment is commendable.';
            break;
        }
        break;

      // Case 24
      case 24:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in presenting dishes in an aesthetically pleasing manner, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While presenting dishes aesthetically may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your joy in presenting dishes aesthetically with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You find joy in presenting dishes in an aesthetically pleasing manner. Culinary presenter!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Culinary artist! Your strong joy in presenting dishes is commendable.';
            break;
        }
        break;

      // Case 25
      case 25:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little interest in learning about different cuisines and culinary traditions, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While learning about cuisines may not be your top interest, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in learning about cuisines with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are interested in learning about different cuisines and culinary traditions. Culinary explorer!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Culinary connoisseur! Your strong interest in culinary traditions is commendable.';
            break;
        }
        break;

      // Case 26
      case 26:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in challenging yourself with complex problem-solving tasks, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While complex problem-solving may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your joy in challenging problem-solving tasks with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy challenging yourself with complex problem-solving tasks. Problem-solving enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Problem-solving virtuoso! Your strong joy in challenging tasks is commendable.';
            break;
        }
        break;

      // Case 27
      case 27:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in pursuing academic excellence and continuous learning, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While continuous learning may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your joy in pursuing academic excellence with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You find joy in pursuing academic excellence and continuous learning. Continuous learner!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Academic virtuoso! Your strong joy in pursuing excellence is commendable.';
            break;
        }
        break;

      // Case 28
      case 28:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in participating in intellectual discussions and debates, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While intellectual discussions may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your joy in participating in intellectual discussions with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy participating in intellectual discussions and debates. Intellectual debater!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Intellectual virtuoso! Your strong joy in intellectual discussions is commendable.';
            break;
        }
        break;

      // Case 29
      case 29:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little interest in pursuing a career that involves advanced research and analysis, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While advanced research may not be your top interest, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your interest in advanced research and analysis with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You are interested in pursuing a career that involves advanced research and analysis. Research enthusiast!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Research maestro! Your strong interest in advanced research is commendable.';
            break;
        }
        break;

      // Case 30
      case 30:
        switch (selectedValue) {
          case 'Strongly Disagree':
            feedbackMessage = 'If you find little joy in taking on leadership roles in academic or extracurricular activities, you might explore other areas of interest!';
            break;
          case 'Disagree':
            feedbackMessage = 'While leadership roles may not be your top preference, you have a balanced perspective.';
            break;
          case 'Either Agree or Disagree':
            feedbackMessage = 'Balancing your joy in taking on leadership roles with other pursuits!';
            break;
          case 'Agree':
            feedbackMessage = 'You enjoy taking on leadership roles in academic or extracurricular activities. Leader!';
            break;
          case 'Strongly Agree':
            feedbackMessage = 'Leadership virtuoso! Your strong joy in leadership roles is commendable.';
            break;
        }
        break;

      // Default case
      default:
        feedbackMessage = 'No feedback available.';
        break;
    }
    feedbackElement.textContent = feedbackMessage;
    nextButton.hidden = false;
    nextButton.disabled = false;
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      // Find top 3 strands
      const topStrands = Object.keys(scores).sort((a, b) => scores[b] - scores[a]).slice(0, 3);

      let result = '<h2>Your Top 3 Strands:</h2>';
      topStrands.forEach((strand, index) => {
        result += `<p>${index + 1}. ${strand}: ${scores[strand]} points</p>`;
      });

      document.getElementById('result').innerHTML = result;

      // Disable next button after quiz completion
      nextButton.hidden = true;
    }
  }

  // Initial display
  displayQuestion();

  // Add event listener to the next button
  nextButton.addEventListener('click', nextQuestion);
});