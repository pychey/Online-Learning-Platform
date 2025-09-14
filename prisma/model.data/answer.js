const answers = [
  // Q1
  { text: "A. ផែនការរួមសម្រាប់ប្រមូល វាស់វែង និងវិភាគទិន្នន័យ", isCorrect: true, order: 1, quizId: 1 },
  { text: "B. ការបង្ហាញលទ្ធផលស្រាវជ្រាវ", isCorrect: false, order: 2, quizId: 1 },
  { text: "C. ការសរសេររាយការណ៍", isCorrect: false, order: 3, quizId: 1 },
  { text: "D. ការបញ្ចូលទិន្នន័យក្នុងតារាង", isCorrect: false, order: 4, quizId: 1 },

  // Q2
  { text: "A. ទិន្នន័យជាលេខ", isCorrect: true, order: 1, quizId: 2 },
  { text: "B. ទិន្នន័យអត្ថបទ", isCorrect: false, order: 2, quizId: 2 },
  { text: "C. ទិន្នន័យរូបភាព", isCorrect: false, order: 3, quizId: 2 },
  { text: "D. ទិន្នន័យសំឡេង", isCorrect: false, order: 4, quizId: 2 },

  // Q3
  { text: "A. ប្រមូលទិន្នន័យពីមនុស្សច្រើន", isCorrect: true, order: 1, quizId: 3 },
  { text: "B. ការវិភាគទិន្នន័យបឋម", isCorrect: false, order: 2, quizId: 3 },
  { text: "C. ការរៀបចំព័ត៌មានក្នុងតារាង", isCorrect: false, order: 3, quizId: 3 },
  { text: "D. ការគូសក្រាហ្វ", isCorrect: false, order: 4, quizId: 3 },

  // Q4
  { text: "A. អថេរឯករាជ្យ", isCorrect: true, order: 1, quizId: 4 },
  { text: "B. អថេរអាស្រ័យ", isCorrect: false, order: 2, quizId: 4 },
  { text: "C. ទិន្នន័យគុណភាព", isCorrect: false, order: 3, quizId: 4 },
  { text: "D. ការសង្កេតសាមញ្ញ", isCorrect: false, order: 4, quizId: 4 },

  // Q5
  { text: "A. ប្រមូលទិន្នន័យលម្អិត", isCorrect: true, order: 1, quizId: 5 },
  { text: "B. បង្កើតសំណួរ multiple choice", isCorrect: false, order: 2, quizId: 5 },
  { text: "C. បង្ហាញលទ្ធផលតាមក្រាហ្វ", isCorrect: false, order: 3, quizId: 5 },
  { text: "D. គណនាមធ្យមភាគ", isCorrect: false, order: 4, quizId: 5 },

  // Q6
  { text: "A. ពិនិត្យរកកំហុស និងតម្លៃមិនត្រឹមត្រូវ", isCorrect: true, order: 1, quizId: 6 },
  { text: "B. គូសក្រាហ្វ", isCorrect: false, order: 2, quizId: 6 },
  { text: "C. រៀបចំការសម្ភាសន៍", isCorrect: false, order: 3, quizId: 6 },
  { text: "D. កំណត់អថេរឯករាជ្យ", isCorrect: false, order: 4, quizId: 6 },

  // Q7
  { text: "A. ដើម្បីធានាថាកម្មវិធីវិភាគអាចដំណើរការបានត្រឹមត្រូវ", isCorrect: true, order: 1, quizId: 7 },
  { text: "B. ដើម្បីធ្វើឲ្យទិន្នន័យមើលស្អាត", isCorrect: false, order: 2, quizId: 7 },
  { text: "C. ដើម្បីបន្ថែមទិន្នន័យថ្មី", isCorrect: false, order: 3, quizId: 7 },
  { text: "D. ដើម្បីបង្កើតសំណួរទៅកាន់អ្នកឆ្លើយ", isCorrect: false, order: 4, quizId: 7 },

  // Q8
  { text: "A. ភាពញឹកញាប់នៃតម្លៃនីមួយៗ", isCorrect: true, order: 1, quizId: 8 },
  { text: "B. តម្លៃមធ្យមភាគ", isCorrect: false, order: 2, quizId: 8 },
  { text: "C. តម្លៃអតិបរមា", isCorrect: false, order: 3, quizId: 8 },
  { text: "D. ចំនួនសរុបនៃទិន្នន័យ", isCorrect: false, order: 4, quizId: 8 },

  // Q9
  { text: "A. បូកតម្លៃទាំងអស់ ហើយចែកនឹងចំនួនតម្លៃសរុប", isCorrect: true, order: 1, quizId: 9 },
  { text: "B. គណនាតម្លៃចំកណ្តាល", isCorrect: false, order: 2, quizId: 9 },
  { text: "C. យកតម្លៃញឹកញាប់បំផុត", isCorrect: false, order: 3, quizId: 9 },
  { text: "D. បូកតម្លៃអតិបរមានិងអប្បបរមា", isCorrect: false, order: 4, quizId: 9 },

  // Q10
  { text: "A. តម្លៃដែលកើតញឹកញាប់បំផុត", isCorrect: true, order: 1, quizId: 10 },
  { text: "B. តម្លៃដែលស្ថិតនៅចំកណ្តាល", isCorrect: false, order: 2, quizId: 10 },
  { text: "C. តម្លៃសរុបចែកនឹងចំនួនទិន្នន័យ", isCorrect: false, order: 3, quizId: 10 },
  { text: "D. តម្លៃខ្ពស់ជាងគេ", isCorrect: false, order: 4, quizId: 10 },
]
export default answers