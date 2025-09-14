
export const QUIZZES = 
{
  quiz: {
    id: 1,
    question: "សេចក្តីណា មិនពិត សម្រាប់និយមន័យគម្រោង?",
    courseId: 1,
  },
  answers: [
    {
      id: 1,
      text: "គម្រោងមានលក្ខណៈឯកត្តា។",
      isCorrect: false,
      order: 1,
      quizId: 1,
    },
    {
      id: 2,
      text: "គម្រោងមានពេលវេលាកំណត់ច្បាស់លាស់។",
      isCorrect: true,
      order: 2,
      quizId: 1,
    },
    {
      id: 3,
      text: "គម្រោងជាការប្រតិបត្តិចម្លងតែម្ដងៗ។",
      isCorrect: false,
      order: 3,
      quizId: 1,
    },
    {
      id: 4,
      text: "គម្រោងមានធនធានកំណត់។",
      isCorrect: false,
      order: 4,
      quizId: 1,
    },
  ] 
}

export const QUIZ =	
[
  {
    id: 1,
    question: "សេចក្តីណា មិនពិត សម្រាប់និយមន័យគម្រោង?",
    option1: "គម្រោងមានលក្ខណៈឯកត្តា។",
    option2: "គម្រោងមានពេលវេលាកំណត់ច្បាស់លាស់។",
    option3: "គម្រោងជាការប្រតិបត្តិចម្លងតែម្ដងៗ។",
    option4: "គម្រោងមានធនធានកំណត់។",  
    answer: 2,
    courseId: 1,
  },
  {
    id: 2,
    question: "ដំណាក់កាលដំបូងនៃវដ្តជីវិតគម្រោងគឺអ្វី?",
    option1: "ការអនុវត្ត", 
    option2: "ការបិទ", 
    option3: "ការចាប់ផ្តើម", 
    option4: "ការត្រួតពិនិត្យ",
    answer: 2,
    courseId: 1,
  },
  {
    id: 3,
    question: "ឧបករណ៍ណា ត្រូវបានប្រើជាញឹកញាប់សម្រាប់កាលវិភាគគម្រោង?",
    option1: "ក្រុមប្រឹក្សា Kanban", 
    option2: "តារាង Gantt", 
    option3: "វិភាគ SWOT", 
    option4: "ការរួមគំនិត",
    answer: 1,
    courseId: 1,
  },
]
