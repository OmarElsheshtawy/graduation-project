// ─── PLACEMENT QUIZ (20 questions, progressive difficulty) ──────────────────
export const PLACEMENT_QUIZ = {
  id: 'placement',
  title: 'English Level Assessment',
  desc: 'Answer 20 questions so we can recommend the right course for you.',
  timeLimit: 0, // no limit
  questions: [
    // ── Beginner (Q1–5) ──────────────────────────────────────────────────────
    {
      id: 'p1', level: 'beginner',
      question: 'Choose the correct greeting:',
      options: ['Good morning!', 'Morning good!', 'Is morning good!', 'Morning is good!'],
      answer: 0,
    },
    {
      id: 'p2', level: 'beginner',
      question: 'What is the correct form? "My name ___ Sara."',
      options: ['am', 'is', 'are', 'be'],
      answer: 1,
    },
    {
      id: 'p3', level: 'beginner',
      question: 'Which sentence is correct?',
      options: ['I have 25 years old.', 'I am 25 years old.', 'I is 25 years old.', 'I be 25 years old.'],
      answer: 1,
    },
    {
      id: 'p4', level: 'beginner',
      question: 'Choose the correct plural: "one book → two ___"',
      options: ['book', 'bookes', 'books', 'bookies'],
      answer: 2,
    },
    {
      id: 'p5', level: 'beginner',
      question: '"She ___ from Egypt." — Fill in the blank.',
      options: ['am', 'is', 'are', 'be'],
      answer: 1,
    },
    // ── Elementary (Q6–10) ───────────────────────────────────────────────────
    {
      id: 'p6', level: 'elementary',
      question: 'Which sentence uses the past simple correctly?',
      options: ['I go to school yesterday.', 'I gone to school yesterday.', 'I went to school yesterday.', 'I was go to school yesterday.'],
      answer: 2,
    },
    {
      id: 'p7', level: 'elementary',
      question: '"I ___ coffee every morning." (habitual action)',
      options: ['drink', 'am drinking', 'drank', 'have drunk'],
      answer: 0,
    },
    {
      id: 'p8', level: 'elementary',
      question: 'Which is a comparative adjective?',
      options: ['tall', 'tallest', 'taller', 'most tall'],
      answer: 2,
    },
    {
      id: 'p9', level: 'elementary',
      question: 'Choose the correct modal: "You ___ eat in the classroom. It\'s not allowed."',
      options: ['should', 'must', 'can', 'mustn\'t'],
      answer: 3,
    },
    {
      id: 'p10', level: 'elementary',
      question: '"There ___ a lot of people at the party last night."',
      options: ['is', 'are', 'was', 'were'],
      answer: 3,
    },
    // ── Intermediate (Q11–15) ────────────────────────────────────────────────
    {
      id: 'p11', level: 'intermediate',
      question: 'Which sentence uses the present perfect correctly?',
      options: [
        'I have seen that movie last week.',
        'I have never seen that movie.',
        'I have see that movie.',
        'I have been see that movie.',
      ],
      answer: 1,
    },
    {
      id: 'p12', level: 'intermediate',
      question: 'Choose the correct passive voice: "The report ___ by the manager yesterday."',
      options: ['written', 'was written', 'is written', 'write'],
      answer: 1,
    },
    {
      id: 'p13', level: 'intermediate',
      question: '"If I ___ you, I would apologise." — Which tense fits?',
      options: ['am', 'was', 'were', 'be'],
      answer: 2,
    },
    {
      id: 'p14', level: 'intermediate',
      question: 'What does "by the time" express?',
      options: ['A place', 'A reason', 'A deadline or sequence of events', 'A contrast'],
      answer: 2,
    },
    {
      id: 'p15', level: 'intermediate',
      question: 'Choose the correct reported speech: She said, "I am tired." →',
      options: [
        'She said she is tired.',
        'She said she was tired.',
        'She said she were tired.',
        'She said she has tired.',
      ],
      answer: 1,
    },
    // ── Advanced (Q16–20) ────────────────────────────────────────────────────
    {
      id: 'p16', level: 'advanced',
      question: 'Identify the correct use of inversion: "Not only ___ late, but he also forgot his report."',
      options: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'],
      answer: 1,
    },
    {
      id: 'p17', level: 'advanced',
      question: 'Which sentence uses a cleft construction?',
      options: [
        'John broke the window.',
        'It was John who broke the window.',
        'John did break the window.',
        'The window was broken by John.',
      ],
      answer: 1,
    },
    {
      id: 'p18', level: 'advanced',
      question: '"The proposal was ___ received by the board." — Best word?',
      options: ['well', 'good', 'nice', 'great'],
      answer: 0,
    },
    {
      id: 'p19', level: 'advanced',
      question: 'What is a "mixed conditional"?',
      options: [
        'A sentence with two independent clauses',
        'A conditional combining different time frames (e.g. past condition + present result)',
        'A sentence using both "if" and "unless"',
        'A conditional without "if"',
      ],
      answer: 1,
    },
    {
      id: 'p20', level: 'advanced',
      question: 'Choose the most academic/formal synonym for "show":',
      options: ['demonstrate', 'display', 'exhibit', 'illustrate'],
      answer: 0,
    },
  ],
}

// Score → recommended course
export function getPlacementResult(score, total) {
  const pct = (score / total) * 100
  if (pct <= 25) return { level: 'Beginner',     courseId: 'beginner',     color: '#22C55E', icon: '🌱', desc: 'Start from the basics and build a solid foundation.' }
  if (pct <= 50) return { level: 'Elementary',   courseId: 'elementary',   color: '#10B981', icon: '🌿', desc: 'You know the basics — time to build real confidence.' }
  if (pct <= 70) return { level: 'Intermediate', courseId: 'intermediate', color: '#3B82F6', icon: '📘', desc: 'Great foundation — now master complex grammar and fluency.' }
  if (pct <= 85) return { level: 'Advanced',     courseId: 'academic',     color: '#6366F1', icon: '🎓', desc: 'Strong skills — sharpen academic and professional English.' }
  return { level: 'Advanced',       courseId: 'advanced',     color: '#DC2626', icon: '🔥', desc: 'Excellent level — master sophisticated expression.' }
}

// ─── COURSE CERTIFICATION QUIZZES (10 questions each) ───────────────────────
export const COURSE_QUIZZES = {

  beginner: {
    title: 'Beginner English — Final Quiz',
    passMark: 70,
    questions: [
      { id: 'bq1', question: 'What does "Good morning" mean?', options: ['مساء الخير', 'صباح الخير', 'تصبح على خير', 'مرحبا'], answer: 1 },
      { id: 'bq2', question: 'Fill in: "My name ___ Ahmed."', options: ['am', 'is', 'are', 'be'], answer: 1 },
      { id: 'bq3', question: 'How many days are in a week?', options: ['five', 'six', 'seven', 'eight'], answer: 2 },
      { id: 'bq4', question: 'Which color is the sky?', options: ['green', 'red', 'blue', 'yellow'], answer: 2 },
      { id: 'bq5', question: '"I ___ from Egypt." — correct verb:', options: ['am', 'is', 'are', 'were'], answer: 0 },
      { id: 'bq6', question: 'Plural of "child":', options: ['childs', 'childes', 'children', 'childrens'], answer: 2 },
      { id: 'bq7', question: 'Which sentence is correct?', options: ['She have a cat.', 'She has a cat.', 'She is have a cat.', 'She having a cat.'], answer: 1 },
      { id: 'bq8', question: 'What do you say when you meet someone for the first time?', options: ['Goodbye', 'See you later', 'Nice to meet you', 'Good night'], answer: 2 },
      { id: 'bq9', question: 'Which is a family member word?', options: ['happy', 'mother', 'red', 'run'], answer: 1 },
      { id: 'bq10', question: '"___ you like tea or coffee?" — correct word:', options: ['Do', 'Does', 'Is', 'Are'], answer: 0 },
    ],
  },

  elementary: {
    title: 'Elementary English — Final Quiz',
    passMark: 70,
    questions: [
      { id: 'eq1', question: '"I ___ to the gym three times last week." (past simple)', options: ['go', 'goes', 'went', 'gone'], answer: 2 },
      { id: 'eq2', question: 'Which is a comparative adjective?', options: ['big', 'biggest', 'bigger', 'most big'], answer: 2 },
      { id: 'eq3', question: 'What does "commute" mean?', options: ['eat out', 'travel to work', 'take a vacation', 'stay home'], answer: 1 },
      { id: 'eq4', question: '"You ___ smoke here — it\'s forbidden."', options: ['should', 'can', 'mustn\'t', 'might'], answer: 2 },
      { id: 'eq5', question: 'Choose the correct sentence:', options: ['There was many people.', 'There were many people.', 'There is many people.', 'There are many peoples.'], answer: 1 },
      { id: 'eq6', question: '"Can you give me ___?" — which fits for an uncountable noun?', options: ['a advice', 'an advice', 'some advice', 'many advice'], answer: 2 },
      { id: 'eq7', question: 'Informal email — which opening is correct?', options: ['Dear Sir/Madam,', 'To whom it may concern,', 'Hey Ahmed,', 'Respected Sir,'], answer: 2 },
      { id: 'eq8', question: '"I don\'t ___ waking up early on weekdays." (tolerate)', options: ['mind', 'care', 'like', 'enjoy'], answer: 0 },
      { id: 'eq9', question: 'Which sentence uses "pretty" as an adverb?', options: ['She is pretty.', 'It was pretty difficult.', 'The pretty girl left.', 'Pretty flowers bloom.'], answer: 1 },
      { id: 'eq10', question: 'At the doctor: "I have a sore ___." — fill in.', options: ['throat', 'thought', 'through', 'though'], answer: 0 },
    ],
  },

  intermediate: {
    title: 'Intermediate English — Final Quiz',
    passMark: 70,
    questions: [
      { id: 'iq1', question: '"I ___ lived here for ten years." (present perfect)', options: ['have', 'had', 'has', 'was'], answer: 0 },
      { id: 'iq2', question: 'Passive voice: "They built this bridge in 1990." →', options: ['This bridge built in 1990.', 'This bridge was built in 1990.', 'This bridge has built in 1990.', 'This bridge is building in 1990.'], answer: 1 },
      { id: 'iq3', question: 'Reported speech: He said, "I will call you." →', options: ['He said he will call me.', 'He said he would call me.', 'He said he called me.', 'He said he has called me.'], answer: 1 },
      { id: 'iq4', question: '"___ I were you, I would apologise." (conditional)', options: ['If', 'When', 'Unless', 'Although'], answer: 0 },
      { id: 'iq5', question: 'Which word is a linking adverb showing contrast?', options: ['Furthermore', 'However', 'Therefore', 'Moreover'], answer: 1 },
      { id: 'iq6', question: '"The meeting has been ___." (cancelled — passive)', options: ['cancel', 'cancelling', 'cancelled', 'cancels'], answer: 2 },
      { id: 'iq7', question: 'Which sentence uses a relative clause correctly?', options: ['The man which called is my uncle.', 'The man who called is my uncle.', 'The man whom called is my uncle.', 'The man that called is my uncle. (wrong context)'], answer: 1 },
      { id: 'iq8', question: '"By the time she arrived, we ___ dinner." (past perfect)', options: ['finish', 'finished', 'have finished', 'had finished'], answer: 3 },
      { id: 'iq9', question: 'Which is a gerund used as a subject?', options: ['She is swimming.', 'Swimming is good exercise.', 'I like to swim.', 'I swam yesterday.'], answer: 1 },
      { id: 'iq10', question: '"He is the person ___ I told you about."', options: ['who', 'which', 'whom', 'whose'], answer: 2 },
    ],
  },

  advanced: {
    title: 'Advanced English — Final Quiz',
    passMark: 75,
    questions: [
      { id: 'aq1', question: 'Inversion: "Not only ___ late, he also forgot his report."', options: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'], answer: 1 },
      { id: 'aq2', question: 'Cleft sentence: "It was Maria ___ solved the problem."', options: ['which', 'who', 'whom', 'whose'], answer: 1 },
      { id: 'aq3', question: 'Mixed conditional: "If I ___ harder at school, I would have a better job now."', options: ['studied', 'had studied', 'would study', 'study'], answer: 1 },
      { id: 'aq4', question: 'Which is an example of subjunctive mood?', options: ['I wish I was rich.', 'I suggest that he study harder.', 'If I am you, I would leave.', 'She insisted to go.'], answer: 1 },
      { id: 'aq5', question: '"The proposal was ___ received." — best adverb:', options: ['good', 'well', 'great', 'nice'], answer: 1 },
      { id: 'aq6', question: 'Identify the nominalization: "The government decided to reduce inflation." →', options: ['The government made a decision to reduce inflation.', 'The government\'s decision to reduce inflation was announced.', 'The government reduced inflation.', 'Inflation was reduced.'], answer: 1 },
      { id: 'aq7', question: '"___ he may be talented, his attitude is poor." (concession)', options: ['Although', 'Because', 'Since', 'Whenever'], answer: 0 },
      { id: 'aq8', question: 'Which sentence uses a dangling modifier?', options: ['Running fast, the finish line was crossed.', 'Running fast, she crossed the finish line.', 'She crossed the finish line by running fast.', 'The finish line was crossed as she ran fast.'], answer: 0 },
      { id: 'aq9', question: 'Choose the most formal synonym for "begin":',  options: ['start', 'kick off', 'commence', 'get going'], answer: 2 },
      { id: 'aq10', question: '"She ___ have known the answer — she studied all night." (logical deduction)', options: ['must', 'should', 'might', 'can'], answer: 0 },
    ],
  },

  academic: {
    title: 'Academic English — Final Quiz',
    passMark: 75,
    questions: [
      { id: 'acq1', question: 'Which phrase is most appropriate in academic writing?', options: ['As you can see,', 'It is evident that', 'Obviously,', 'Everyone knows that'], answer: 1 },
      { id: 'acq2', question: 'What is a thesis statement?', options: ['A question posed in an essay', 'The main argument or claim of an essay', 'A list of evidence', 'The conclusion of an essay'], answer: 1 },
      { id: 'acq3', question: 'In a research paper, a "literature review" is:', options: ['A book review', 'A summary of existing research on a topic', 'A reference list', 'An abstract'], answer: 1 },
      { id: 'acq4', question: 'Which citation style is commonly used in social sciences?', options: ['MLA', 'APA', 'Chicago', 'Harvard'], answer: 1 },
      { id: 'acq5', question: '"The data ___ that the hypothesis is incorrect." (academic verb)', options: ['shows', 'suggests', 'indicate', 'says'], answer: 1 },
      { id: 'acq6', question: 'A "counterargument" in an essay is:', options: ['Your main argument', 'An opposing viewpoint you address', 'Your conclusion', 'Supporting evidence'], answer: 1 },
      { id: 'acq7', question: 'Which word signals a conclusion in academic writing?', options: ['Furthermore', 'However', 'Therefore', 'Nevertheless'], answer: 2 },
      { id: 'acq8', question: 'Paraphrasing means:', options: ['Copying text directly', 'Using your own words to express someone else\'s idea', 'Summarising a whole article', 'Quoting with quotation marks'], answer: 1 },
      { id: 'acq9', question: 'Which is an example of hedging language?', options: ['This proves that…', 'This might suggest that…', 'It is certain that…', 'Clearly, the data shows…'], answer: 1 },
      { id: 'acq10', question: 'An abstract in a research paper is:', options: ['The introduction', 'A brief summary of the entire paper', 'The methodology section', 'The bibliography'], answer: 1 },
    ],
  },

  american: {
    title: 'American English — Final Quiz',
    passMark: 70,
    questions: [
      { id: 'amq1', question: 'What does "hit the sack" mean?', options: ['punch a bag', 'go to sleep', 'leave a job', 'eat lunch'], answer: 1 },
      { id: 'amq2', question: 'American English for "lift" (British) is:', options: ['elevator', 'escalator', 'stairs', 'ladder'], answer: 0 },
      { id: 'amq3', question: '"I\'m beat" means:', options: ['I won', 'I was punched', 'I am very tired', 'I am angry'], answer: 2 },
      { id: 'amq4', question: 'How do Americans spell "colour" (British)?', options: ['colour', 'couler', 'color', 'coller'], answer: 2 },
      { id: 'amq5', question: '"Break a leg!" is an expression meaning:', options: ['Be careful', 'Good luck', 'Stop dancing', 'Hurry up'], answer: 1 },
      { id: 'amq6', question: 'American English for "autumn" is:', options: ['spring', 'winter', 'fall', 'summer'], answer: 2 },
      { id: 'amq7', question: '"It\'s not rocket science" means:', options: ['It is very complex', 'It involves space travel', 'It is not difficult', 'It is a new field'], answer: 2 },
      { id: 'amq8', question: 'American pronunciation: the "t" in "butter" often sounds like:', options: ['a soft d/r (flap)', 'a hard t', 'silent', 'a soft th'], answer: 0 },
      { id: 'amq9', question: '"Hang tight" means:', options: ['hold something firmly', 'wait patiently', 'leave quickly', 'exercise more'], answer: 1 },
      { id: 'amq10', question: 'American English for "chips" (British — thin fried potato slices) is:', options: ['fries', 'crisps', 'chips', 'wafers'], answer: 1 },
    ],
  },

  travel: {
    title: 'Travel English — Final Quiz',
    passMark: 70,
    questions: [
      { id: 'tq1', question: 'At check-in, the agent asks for your "boarding pass". This is:', options: ['Your passport', 'Your ticket/document to board the plane', 'Your luggage tag', 'Your hotel booking'], answer: 1 },
      { id: 'tq2', question: '"Could you ___ me to the nearest metro station?" (ask for directions)', options: ['direct', 'show', 'point', 'guide'], answer: 1 },
      { id: 'tq3', question: 'At immigration the officer asks "What is the purpose of your visit?" You answer:', options: ['I visit for tourism.', 'I am visiting for tourism.', 'I am a tourist.', 'Tourism is my purpose.'], answer: 1 },
      { id: 'tq4', question: 'What does "excess baggage" mean?', options: ['Luggage that is damaged', 'Luggage over the airline\'s weight limit', 'Carry-on baggage', 'Lost luggage'], answer: 1 },
      { id: 'tq5', question: '"I\'d like to ___ a room for two nights." (hotel)', options: ['book', 'buy', 'order', 'take'], answer: 0 },
      { id: 'tq6', question: '"The flight has been ___." (delayed — no more service)', options: ['postponed', 'cancelled', 'delayed', 'rerouted'], answer: 1 },
      { id: 'tq7', question: 'What is "jet lag"?', options: ['A type of carry-on bag', 'Fatigue caused by crossing time zones', 'A discount airline ticket', 'A travel insurance claim'], answer: 1 },
      { id: 'tq8', question: '"Could I have the ___, please?" — asking for the restaurant bill:', options: ['check', 'receipt', 'menu', 'order'], answer: 0 },
      { id: 'tq9', question: '"Do you have anything to ___?" — customs officer', options: ['declare', 'report', 'say', 'show'], answer: 0 },
      { id: 'tq10', question: 'What does "complimentary breakfast" mean at a hotel?', options: ['Breakfast is very good', 'Breakfast is included in the price', 'Breakfast is extra', 'Breakfast is mandatory'], answer: 1 },
    ],
  },

  kids: {
    title: 'Kids English — Final Quiz',
    passMark: 60,
    questions: [
      { id: 'kq1', question: 'What sound does a cat make?', options: ['Woof', 'Meow', 'Moo', 'Roar'], answer: 1 },
      { id: 'kq2', question: 'How many is "five + three"?', options: ['seven', 'eight', 'nine', 'six'], answer: 1 },
      { id: 'kq3', question: 'What color is a banana?', options: ['red', 'blue', 'yellow', 'green'], answer: 2 },
      { id: 'kq4', question: 'Which body part do you use to hear?', options: ['eyes', 'nose', 'ears', 'mouth'], answer: 2 },
      { id: 'kq5', question: '"She is my mother\'s mother." Who is she?', options: ['aunt', 'sister', 'grandmother', 'cousin'], answer: 2 },
      { id: 'kq6', question: 'What letter comes after "D"?', options: ['C', 'E', 'F', 'B'], answer: 1 },
      { id: 'kq7', question: 'Which food is a vegetable?', options: ['apple', 'cake', 'carrot', 'ice cream'], answer: 2 },
      { id: 'kq8', question: '"I ___ to school every day." (go / goes)', options: ['go', 'goes', 'going', 'went'], answer: 0 },
      { id: 'kq9', question: 'What subject do you use numbers in?', options: ['Art', 'Music', 'Math', 'PE'], answer: 2 },
      { id: 'kq10', question: 'Spot the animal: which one can fly?', options: ['dog', 'fish', 'cat', 'bird'], answer: 3 },
    ],
  },
}
