// ─── NEW COURSES DATA ─────────────────────────────────────────────────────
// 6 new courses: Elementary, Advanced, American English,
// Kids English, Travel English, Academic English

export const NEW_COURSES = [

  // ══════════════════════════════════════════════════════════════════
  //  ELEMENTARY (A2–B1)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'elementary',
    title: 'Elementary English',
    level: 'A2–B1',
    description: 'Bridge the gap between beginner and intermediate. Build confidence with real conversations, everyday grammar, and practical vocabulary.',
    color: '#10B981',
    icon: '🌿',
    xpPerLesson: 25,
    units: [
      {
        id: 'el1', title: 'Talking About Your Life', icon: '👤',
        lessons: [
          {
            id: 'el1l1', title: 'My Daily Routine', type: 'dialogue', xp: 25,
            content: {
              intro: 'Read this real-life dialogue and learn how to talk about your daily routine!',
              dialogue: `**Sara meets her new colleague Ahmed at work.**\n\nSara: Good morning, Ahmed! How was your commute?\n\nAhmed: Pretty long actually! I wake up at 6 AM, have a quick breakfast, then take the metro for about 45 minutes.\n\nSara: That sounds tiring. Do you always start work at 8?\n\nAhmed: Yes, but I don't mind. I usually grab a coffee first and check my emails before the meetings start.\n\nSara: I usually work from home on Mondays. It saves me so much time!\n\nAhmed: Lucky you! I prefer the office though — it helps me focus better.\n\nSara: That makes sense. What do you do after work?\n\nAhmed: I go to the gym three times a week. Then I cook dinner and watch something on Netflix. Pretty simple life!\n\nSara: Sounds balanced! We should grab lunch sometime and talk more.\n\nAhmed: Definitely! How about this Thursday?\n\nSara: Thursday works perfectly for me!`,
              vocabulary: [
                { word: 'Commute',      translation: 'التنقل للعمل',   example: 'My commute takes 30 minutes by bus.' },
                { word: 'Pretty',       translation: 'إلى حدٍ ما',     example: 'The exam was pretty difficult.' },
                { word: 'Mind',         translation: 'يهتم/يمانع',     example: 'I don\'t mind waiting for you.' },
                { word: 'Grab',         translation: 'يأخذ بسرعة',     example: 'Let me grab a coffee before we start.' },
                { word: 'Focus',        translation: 'يركز',           example: 'I need silence to focus on my work.' },
                { word: 'Balanced',     translation: 'متوازن',         example: 'Try to have a balanced lifestyle.' },
              ],
              key_points: [
                'Use **present simple** for regular habits and routines: "I wake up at 6 AM."',
                'Use **usually / always / sometimes** to say how often you do things.',
                'Phrases like **"I don\'t mind"** and **"I prefer"** help express personal preferences naturally.',
              ],
              fun_fact: 'Did you know? The average commute time worldwide is about 40 minutes each way — that\'s over 300 hours a year spent travelling to work!',
              exercises: [
                { type: 'multiple_choice', question: 'How long is Ahmed\'s commute?', options: ['30 minutes', '45 minutes', '1 hour', '15 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'What does Ahmed do before meetings?', options: ['Goes to the gym', 'Grabs coffee and checks emails', 'Has breakfast', 'Takes the metro'], answer: 1 },
                { type: 'fill_blank',      question: 'Sara usually works ___ home on Mondays.', answer: 'from', hint: 'Preposition' },
                { type: 'multiple_choice', question: 'How many times a week does Ahmed go to the gym?', options: ['Two', 'Three', 'Four', 'Every day'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [lunch / should / We / grab / sometime]', words: ['lunch','should','We','grab','sometime'], answer: 'We should grab lunch sometime' },
                { type: 'fill_blank',      question: 'Thursday ___ perfectly for me!', answer: 'works', hint: 'A synonym for "is fine"' },
                { type: 'multiple_choice', question: 'What does "I don\'t mind" mean?', options: ['I hate it', 'It\'s not okay', 'I\'m okay with it', 'I prefer not to'], answer: 2 },
                { type: 'fill_blank',      question: 'Ahmed says the office helps him ___ better.', answer: 'focus', hint: 'Concentrate' },
              ],
            },
          },
          {
            id: 'el1l2', title: 'Talking About the Past', type: 'grammar', xp: 25,
            content: {
              intro: 'Learn to tell stories using the simple past tense!',
              explanation: '📝 **Simple Past — Telling Stories:**\n\n**Regular verbs:** add -ed\n• work → work**ed** · play → play**ed** · live → liv**ed**\n\n**Irregular verbs (must memorize):**\n| Base | Past | Example |\n|------|------|---------|\n| go | went | *I went to Cairo.* |\n| see | saw | *She saw a movie.* |\n| eat | ate | *We ate together.* |\n| have | had | *He had a great time.* |\n| buy | bought | *They bought a car.* |\n| come | came | *She came early.* |\n\n**Negative:** didn\'t + base verb\n• *I didn\'t go.* · *She didn\'t see it.*\n\n**Question:** Did + subject + base verb?\n• *Did you go?* · *What did she say?*',
              examples: [
                'Last weekend, I visited my grandmother.',
                'We didn\'t watch the game — we went to a restaurant instead.',
                'Did you enjoy the party? — Yes, it was amazing!',
                'She woke up late and missed the bus.',
              ],
              key_points: [
                'Regular verbs form the past tense by adding **-ed**: walk → walked, work → worked.',
                'Irregular verbs must be **memorized**: go → went, buy → bought, see → saw.',
                'Negatives use **didn\'t + base form**: "I didn\'t go" (NOT "I didn\'t went").',
                'Questions use **Did + subject + base form**: "Did you enjoy it?"',
              ],
              common_mistakes: [
                { wrong: 'I buyed a new phone.', correct: 'I bought a new phone.', explanation: '"buy" is irregular — its past form is "bought", not "buyed".' },
                { wrong: 'She didn\'t went to school.', correct: 'She didn\'t go to school.', explanation: 'After "didn\'t", always use the base verb form, not past tense.' },
                { wrong: 'Did she went home?', correct: 'Did she go home?', explanation: '"Did" already marks past tense; the main verb must be in base form.' },
              ],
              tips: [
                'Group irregular verbs into patterns to memorize them faster: ring/rang/rung, sing/sang/sung, swim/swam/swum.',
                'Time expressions like **yesterday, last week, ago** are strong signals to use simple past.',
              ],
              exercises: [
                { type: 'fill_blank',      question: 'Yesterday, I ___ (go) to the market.', answer: 'went', hint: 'Irregular past of "go"' },
                { type: 'multiple_choice', question: 'She ___ a delicious cake for the party.', options: ['make', 'maked', 'made', 'making'], answer: 2 },
                { type: 'fill_blank',      question: 'We ___ (not/watch) TV last night.', answer: "didn't watch", hint: 'didn\'t + base verb' },
                { type: 'reorder',         question: 'Reorder: [you / Did / enjoy / trip / the]', words: ['you','Did','enjoy','trip','the'], answer: 'Did you enjoy the trip' },
                { type: 'multiple_choice', question: '"I buyed a new phone." — What is wrong?', options: ['Nothing', '"buyed" should be "bought"', '"a" should be "an"', 'Wrong word order'], answer: 1 },
                { type: 'fill_blank',      question: 'What ___ you ___ (do) last weekend?', answer: 'did / do', hint: 'Question form of past simple' },
                { type: 'multiple_choice', question: 'Which sentence is correct?', options: ['She didn\'t ate anything.', 'She didn\'t eat anything.', 'She not ate anything.', 'She no ate anything.'], answer: 1 },
                { type: 'fill_blank',      question: 'They ___ (buy) a new car last month.', answer: 'bought', hint: 'Irregular past of "buy"' },
              ],
            },
          },
          {
            id: 'el1l3', title: 'Describing People', type: 'vocabulary', xp: 25,
            content: {
              intro: 'Learn rich vocabulary to describe people\'s appearance and personality!',
              vocabulary: [
                { word: 'Slim / Thin',    translation: 'نحيف',           example: 'She is slim and tall.' },
                { word: 'Curly',          translation: 'مجعد',           example: 'He has curly brown hair.' },
                { word: 'Beard / Mustache', translation: 'لحية/شارب',   example: 'He has a thick beard.' },
                { word: 'Cheerful',       translation: 'مبهج/مرح',       example: 'She is always cheerful and smiling.' },
                { word: 'Reliable',       translation: 'موثوق',          example: 'He is reliable — always on time.' },
                { word: 'Shy',            translation: 'خجول',           example: 'She was shy at first but opened up.' },
                { word: 'Outgoing',       translation: 'اجتماعي',        example: 'He is very outgoing and loves parties.' },
                { word: 'Stubborn',       translation: 'عنيد',           example: 'Don\'t be stubborn — listen to advice.' },
                { word: 'Broad-shouldered', translation: 'عريض المنكبين', example: 'He is tall and broad-shouldered.' },
                { word: 'Thoughtful',     translation: 'متأمل/مراعٍ',    example: 'She is very thoughtful — always remembers your birthday.' },
              ],
              key_points: [
                'Split descriptions into **appearance** (how someone looks) and **personality** (how someone acts).',
                'Use **"She has..."** for features: "She has curly hair / a warm smile."',
                'Use **"She is..."** for personality traits: "She is reliable / outgoing / shy."',
              ],
              tips: [
                'Avoid generic words like "nice" or "good" — use specific words like "thoughtful", "cheerful", or "reliable" to sound more natural.',
                'Combine appearance and personality in one sentence: "He\'s a tall, broad-shouldered man with a cheerful, outgoing personality."',
              ],
              fun_fact: 'Research shows people form a first impression of someone\'s personality within 100 milliseconds of seeing their face!',
              exercises: [
                { type: 'multiple_choice', question: 'The opposite of "shy" is:', options: ['Quiet', 'Outgoing', 'Stubborn', 'Slim'], answer: 1 },
                { type: 'fill_blank',      question: 'You can always trust him — he is very ___.', answer: 'reliable', hint: 'Someone you can depend on' },
                { type: 'match',           question: 'Match personality words', pairs: [['Cheerful','مبهج'],['Shy','خجول'],['Stubborn','عنيد'],['Outgoing','اجتماعي']] },
                { type: 'multiple_choice', question: '"Curly" describes:', options: ['Weight', 'Height', 'Hair type', 'Eye color'], answer: 2 },
                { type: 'fill_blank',      question: 'She has ___ hair that bounces when she walks.', answer: 'curly', hint: 'Opposite of straight' },
                { type: 'multiple_choice', question: 'Which word describes someone who keeps their promises?', options: ['Stubborn', 'Slim', 'Reliable', 'Curly'], answer: 2 },
                { type: 'fill_blank',      question: 'He is very ___ — he loves meeting new people.', answer: 'outgoing', hint: 'Sociable/extroverted' },
                { type: 'multiple_choice', question: '"Thoughtful" means:', options: ['Forgetful', 'Considerate and caring', 'Loud and energetic', 'Stubborn'], answer: 1 },
              ],
            },
          },
          {
            id: 'el1l4', title: 'Likes, Dislikes & Opinions', type: 'speaking', xp: 25,
            content: {
              intro: 'Express your opinions and preferences naturally!',
              explanation: '🗣️ **Expressing Opinions:**\n\n**Likes:**\n• I love / I enjoy / I\'m into / I\'m a big fan of...\n• I\'m really keen on...\n\n**Dislikes:**\n• I can\'t stand / I\'m not into / I\'m not keen on...\n• I\'m not a big fan of...\n\n**Neutral opinions:**\n• I don\'t mind...\n• It\'s okay / It\'s not bad.\n• I\'m on the fence about...\n\n**Strong opinions:**\n• To be honest, I think...\n• Personally, I believe...\n• In my opinion, ...\n• As far as I\'m concerned, ...\n\n💡 **Don\'t just say "I like it." Expand!**\n❌ *I like coffee.*\n✅ *I\'m a big fan of coffee, especially in the morning — it really helps me focus.*',
              key_points: [
                'Always **expand** your opinion with a reason: not just "I like it" but "I like it because..."',
                'Use **"I\'m on the fence"** when you are genuinely undecided — it sounds natural and thoughtful.',
                'Phrases like **"As far as I\'m concerned"** and **"Personally, I believe"** make opinions sound more confident.',
              ],
              tips: [
                'When speaking, vary your opinion phrases — don\'t just say "I think" every time. Try "In my view", "Personally", or "From my perspective".',
                'Practice giving your opinion on everyday topics: food, films, sports, travel — this builds fluency fast.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase expresses a STRONG dislike?', options: ['I don\'t mind it.', 'It\'s okay I guess.', 'I can\'t stand it!', 'I\'m on the fence.'], answer: 2 },
                { type: 'fill_blank',      question: 'To be ___, I think the movie was disappointing.', answer: 'honest', hint: 'To be ___ = frankly' },
                { type: 'reorder',         question: 'Reorder: [opinion / my / In / best / football / is / sport / the]', words: ['opinion','my','In','best','football','is','sport','the'], answer: 'In my opinion football is the best sport' },
                { type: 'multiple_choice', question: '"I\'m on the fence about it" means:', options: ['I hate it', 'I love it', 'I can\'t decide', 'I don\'t know what it is'], answer: 2 },
                { type: 'fill_blank',      question: 'As ___ as I\'m concerned, education is the most important thing.', answer: 'far', hint: 'As ___ as I\'m concerned' },
                { type: 'multiple_choice', question: 'Which is the most expanded opinion statement?', options: ['I like it.', 'I enjoy it a lot.', 'I\'m a big fan of jazz, especially late at night — it really relaxes me.', 'It\'s good.'], answer: 2 },
                { type: 'fill_blank',      question: 'Personally, I ___ that technology has changed our lives for the better.', answer: 'believe', hint: 'Personally, I believe / think' },
                { type: 'multiple_choice', question: '"I\'m not keen on spicy food" means:', options: ['I love spicy food', 'I don\'t really like spicy food', 'I\'ve never tried spicy food', 'I\'m allergic to spicy food'], answer: 1 },
              ],
            },
          },
          {
            id: 'el1l5', title: 'Story: The Job Interview', type: 'story', xp: 25,
            content: {
              intro: 'Read this story about a job interview and answer the questions!',
              text: `**The Job Interview**\n\nKarim had been looking for a job for three months. Finally, he got a call from a tech company — they wanted to interview him for a software developer position.\n\nThe night before the interview, Karim prepared carefully. He ironed his best shirt, researched the company online, and practiced answering common interview questions in the mirror. He went to bed early but couldn't sleep — he was too nervous.\n\nThe next morning, he woke up, had a light breakfast, and left home 30 minutes early to avoid being late. When he arrived at the office building, his heart was beating fast.\n\nThe interviewer, Ms. Layla, greeted him warmly. "Good morning, Karim. Please take a seat. Can I get you some water?"\n\n"Yes, please. Thank you," Karim replied, trying to sound confident.\n\nThe interview lasted 45 minutes. Ms. Layla asked about his experience, his problem-solving skills, and why he wanted to work there. Karim answered honestly and clearly.\n\nAt the end, she smiled and said, "We'll be in touch within a week."\n\nThree days later, Karim received an email. He took a deep breath and opened it. He had got the job!\n\nHe called his mother immediately. "I got it, Mama!" he shouted.\n\n"I always knew you could do it," she said proudly.`,
              key_points: [
                'Notice the **past perfect**: "Karim had been looking for a job" — this describes something that happened before another past event.',
                'The phrase **"We\'ll be in touch"** is a common way to end an interview politely.',
                'Good preparation (researching the company, practising answers) is a key theme — and a useful life lesson!',
              ],
              fun_fact: 'Did you know? The average job interview lasts between 45 and 90 minutes, and most interviewers decide whether to hire someone within the first 5 minutes!',
              exercises: [
                { type: 'multiple_choice', question: 'How long had Karim been looking for a job?', options: ['One month', 'Two months', 'Three months', 'Six months'], answer: 2 },
                { type: 'multiple_choice', question: 'Why couldn\'t Karim sleep the night before?', options: ['He was sick', 'He was too nervous', 'He was too excited about a party', 'His room was too hot'], answer: 1 },
                { type: 'fill_blank',      question: 'Karim left home ___ minutes early to avoid being late.', answer: '30', hint: 'Look in paragraph 3' },
                { type: 'multiple_choice', question: 'How long did the interview last?', options: ['30 minutes', '45 minutes', '1 hour', '20 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'How did Karim find out he got the job?', options: ['By phone call', 'By letter', 'By email', 'Ms. Layla told him in person'], answer: 2 },
                { type: 'fill_blank',      question: '"We\'ll be ___ touch within a week." (Ms. Layla)', answer: 'in', hint: 'Be in ___' },
                { type: 'multiple_choice', question: 'What did Karim do to prepare the night before?', options: ['Slept early only', 'Researched, practised, and ironed his shirt', 'Called Ms. Layla', 'Read about the job online only'], answer: 1 },
                { type: 'fill_blank',      question: '"I always knew you could ___ it," his mother said proudly.', answer: 'do', hint: 'You can do it!' },
              ],
            },
          },
          {
            id: 'el1l6', title: 'Making Plans', type: 'dialogue', xp: 25,
            content: {
              intro: 'Learn how to make, accept and decline plans in English!',
              dialogue: `**Nada texts her friend Mona:**\n\nNada: Hey! Are you free this Saturday?\n\nMona: I think so — what did you have in mind?\n\nNada: There's a new café that just opened near the mall. I heard they have amazing desserts. Want to check it out?\n\nMona: That sounds lovely! What time were you thinking?\n\nNada: Maybe around 3 PM? We could have coffee and then do some shopping afterwards.\n\nMona: Perfect! Oh wait — I just remembered I have a dentist appointment at 3:30. Can we make it a bit earlier? Like 1 PM?\n\nNada: 1 PM works for me! Shall I book a table just in case?\n\nMona: Good idea. The place might be busy on weekends.\n\nNada: Done! I booked it for 1 PM, Saturday, table for two.\n\nMona: Amazing! I'm really looking forward to it. See you then!`,
              vocabulary: [
                { word: 'Have in mind',      translation: 'تفكر في',        example: 'What do you have in mind for dinner?' },
                { word: 'Check out',         translation: 'يتحقق/يزور',     example: 'Let\'s check out that new restaurant.' },
                { word: 'Afterwards',        translation: 'بعد ذلك',        example: 'We had lunch and went shopping afterwards.' },
                { word: 'Just in case',      translation: 'على كل حال/احتياطاً', example: 'Take an umbrella just in case it rains.' },
                { word: 'Look forward to',  translation: 'يتطلع إلى',      example: 'I\'m looking forward to the holiday.' },
                { word: 'Make it',          translation: 'يحضر/يتمكن',     example: 'Can you make it to the meeting tomorrow?' },
                { word: 'Shall I...?',      translation: 'هل أقوم بـ...؟', example: 'Shall I book a table for us?' },
                { word: 'Works for me',     translation: 'يناسبني',         example: '3 PM works for me — see you there!' },
              ],
              key_points: [
                '"**Are you free...?**" and "**What did you have in mind?**" are natural ways to start making plans.',
                '**"Look forward to"** is always followed by a noun or verb+ing: "I\'m looking forward to seeing you."',
                'To suggest an alternative time politely, say: "Could we make it a bit earlier/later?"',
              ],
              fun_fact: 'Did you know? In British English, people often say "Shall I...?" to make polite offers, while Americans more commonly say "Should I...?" or "Do you want me to...?"',
              exercises: [
                { type: 'multiple_choice', question: 'Why can\'t Mona meet at 3 PM?', options: ['She is working', 'She has a dentist appointment', 'She is busy shopping', 'She forgot about the plan'], answer: 1 },
                { type: 'fill_blank',      question: 'I\'m really looking ___ to the weekend!', answer: 'forward', hint: 'Look ___ to = anticipate with excitement' },
                { type: 'multiple_choice', question: '"Just in case" means:', options: ['بالتأكيد', 'للاحتياط', 'في الحال', 'بالمصادفة'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [you / free / Are / Saturday / this]', words: ['you','free','Are','Saturday','this'], answer: 'Are you free this Saturday' },
                { type: 'fill_blank',      question: 'What did you have ___ mind for the weekend?', answer: 'in', hint: 'Have ___ mind' },
                { type: 'multiple_choice', question: '"1 PM works for me" means:', options: ['1 PM is too early', '1 PM is fine for me', '1 PM is too late', 'I prefer a different time'], answer: 1 },
                { type: 'fill_blank',      question: '"Shall I ___ a table for Saturday?" Nada asked.', answer: 'book', hint: 'Reserve a table' },
                { type: 'multiple_choice', question: 'Why did Nada want to book a table in advance?', options: ['Nada was hungry', 'The café might be busy on weekends', 'Mona asked her to', 'It was cheaper online'], answer: 1 },
              ],
            },
          },
        ],
      },
      {
        id: 'el2', title: 'Grammar Building Blocks', icon: '🧱',
        lessons: [
          {
            id: 'el2l1', title: 'Comparatives & Superlatives', type: 'grammar', xp: 25,
            content: {
              intro: 'Compare people, places and things in English!',
              explanation: '📝 **Comparatives & Superlatives:**\n\n**Short adjectives (1-2 syllables):**\n• Comparative: adjective + **-er** + than\n  *tall → tall**er** than · big → bigg**er** than*\n• Superlative: the + adjective + **-est**\n  *tall → the tall**est** · big → the bigg**est***\n\n**Long adjectives (3+ syllables):**\n• Comparative: **more** + adjective + than\n  *more beautiful than · more expensive than*\n• Superlative: **the most** + adjective\n  *the most beautiful · the most expensive*\n\n**Irregular:**\n| Adjective | Comparative | Superlative |\n|-----------|-------------|-------------|\n| good | better | the best |\n| bad | worse | the worst |\n| far | farther | the farthest |\n| little | less | the least |',
              examples: [
                'Cairo is bigger than Alexandria.',
                'She is more intelligent than her sister.',
                'This is the best coffee I\'ve ever had!',
                'Monday is the worst day of the week.',
              ],
              key_points: [
                'Short adjectives (1–2 syllables) use **-er / -est**: tall → taller → tallest.',
                'Long adjectives (3+ syllables) use **more / most**: more comfortable, most comfortable.',
                'Irregular adjectives must be memorized: **good → better → best**, **bad → worse → worst**.',
                'Always use **"than"** after a comparative: "She is taller **than** her brother."',
              ],
              common_mistakes: [
                { wrong: 'She is more tall than him.', correct: 'She is taller than him.', explanation: '"tall" is a short adjective — use -er, not "more".' },
                { wrong: 'This is the most best option.', correct: 'This is the best option.', explanation: '"best" is already a superlative — never add "most" before it.' },
                { wrong: 'He is expensiver than expected.', correct: 'He is more expensive than expected.', explanation: '"expensive" has 3 syllables — use "more expensive", not "expensiver".' },
              ],
              tips: [
                'Use **"as...as"** for equality: "She is as tall as her brother." Use **"not as...as"** for inequality: "This is not as good as I expected."',
                'Double the final consonant for short adjectives ending in consonant-vowel-consonant: big → bigg**er**, hot → hott**er**.',
              ],
              exercises: [
                { type: 'fill_blank',      question: 'Mount Everest is the ___ (high) mountain in the world.', answer: 'highest', hint: 'Superlative of "high"' },
                { type: 'multiple_choice', question: 'Gold is ___ silver.', options: ['expensiver than', 'more expensive than', 'the most expensive', 'expensive than'], answer: 1 },
                { type: 'fill_blank',      question: 'Today is ___ (bad) than yesterday.', answer: 'worse', hint: 'Irregular comparative' },
                { type: 'multiple_choice', question: 'She is the ___ student in the class.', options: ['more hardworking', 'hardworkinger', 'most hardworking', 'hardworkingest'], answer: 2 },
                { type: 'reorder',         question: 'Reorder: [than / is / English / Arabic / easier]', words: ['than','is','English','Arabic','easier'], answer: 'English is easier than Arabic' },
                { type: 'fill_blank',      question: 'This is the ___ (good) film I\'ve seen this year.', answer: 'best', hint: 'Irregular superlative' },
                { type: 'multiple_choice', question: 'Which is correct?', options: ['She is more taller than me.', 'She is tallest than me.', 'She is taller than me.', 'She is the taller than me.'], answer: 2 },
                { type: 'fill_blank',      question: 'Today is ___ (hot) day of the year.', answer: 'the hottest', hint: 'Superlative — double the t' },
              ],
            },
          },
          {
            id: 'el2l2', title: 'Modal Verbs', type: 'grammar', xp: 25,
            content: {
              intro: 'Master modal verbs: can, could, must, should, may, might!',
              explanation: '📝 **Modal Verbs:**\n\n**CAN / COULD** — Ability & Permission\n• *I **can** swim.* (ability)\n• *Can I open the window?* (permission)\n• *Could you help me?* (polite request)\n\n**MUST / HAVE TO** — Obligation\n• *You **must** wear a seatbelt.* (rule)\n• *I **have to** finish this today.* (personal obligation)\n• *Mustn\'t* = prohibition: *You **mustn\'t** smoke here.*\n\n**SHOULD** — Advice\n• *You **should** drink more water.*\n• *You **shouldn\'t** eat so much sugar.*\n\n**MAY / MIGHT** — Possibility\n• *It **may** rain tomorrow.* (quite possible)\n• *She **might** be late.* (less certain)',
              key_points: [
                'Modal verbs are **always followed by the base form** of the verb: "You should **go**" (not "You should going").',
                '**Mustn\'t** = prohibition (you are NOT allowed). **Don\'t have to** = no obligation (you can choose).',
                '**Could** is the past of "can" but also used for polite requests: "Could you help me?" is more polite than "Can you help me?"',
              ],
              common_mistakes: [
                { wrong: 'You should to eat less sugar.', correct: 'You should eat less sugar.', explanation: 'Modal verbs are never followed by "to" — use the bare infinitive.' },
                { wrong: 'You mustn\'t to come if you\'re busy.', correct: 'You don\'t have to come if you\'re busy.', explanation: '"Mustn\'t" means prohibition. "Don\'t have to" means it\'s not necessary.' },
              ],
              tips: [
                'Remember: **must** = strong personal obligation or rule; **have to** = external obligation (law, boss, etc.).',
                'When making polite requests in formal situations, use **"Could you..."** or **"Would you mind...?"** instead of "Can you...".',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'You ___ drink and drive. It\'s illegal!', options: ['should', 'mustn\'t', 'might', 'could'], answer: 1 },
                { type: 'fill_blank',      question: 'You look tired. You ___ go to bed early tonight.', answer: 'should', hint: 'Giving advice' },
                { type: 'multiple_choice', question: '"Could you pass the salt?" is a:', options: ['Question about ability', 'Polite request', 'Permission question', 'Obligation'], answer: 1 },
                { type: 'fill_blank',      question: 'Take an umbrella — it ___ rain later.', answer: 'might', hint: 'Uncertain possibility' },
                { type: 'multiple_choice', question: 'I ___ speak three languages when I was young.', options: ['must', 'should', 'could', 'might'], answer: 2 },
                { type: 'fill_blank',      question: 'You ___ (must/negative) park here — it\'s a no-parking zone.', answer: "mustn't", hint: 'Prohibition' },
                { type: 'multiple_choice', question: '"You don\'t have to come" means:', options: ['You are forbidden to come', 'It is not necessary for you to come', 'You must come', 'You should come'], answer: 1 },
                { type: 'fill_blank',      question: 'She ___ be at home — the lights are on.', answer: 'might', hint: 'Possible but uncertain' },
              ],
            },
          },
          {
            id: 'el2l3', title: 'Prepositions of Time & Place', type: 'grammar', xp: 25,
            content: {
              intro: 'Master the use of prepositions in English!',
              explanation: '📝 **Prepositions — Time & Place:**\n\n**AT — specific time/place**\n• Time: *at 3 PM, at noon, at Christmas, at the weekend*\n• Place: *at the bus stop, at school, at home, at work*\n\n**ON — days/dates/surfaces**\n• *on Monday, on July 4th, on my birthday*\n• *on the table, on the wall, on the left*\n\n**IN — months/years/seasons/enclosed spaces**\n• *in July, in 2024, in summer, in the morning*\n• *in Cairo, in the car, in the room, in bed*\n\n**Common phrases:**\n• *in the end / at the end*\n• *in time / on time*\n• *at last / in the last*\n\n⚠️ **Tricky ones:**\n• *at night* (not in night)\n• *in the morning/afternoon/evening* (not at)',
              key_points: [
                'Remember **AT-ON-IN** in order of specificity: AT (exact point) → ON (surface/day) → IN (inside/period).',
                '**"On time"** = punctual (exactly when expected). **"In time"** = not too late (before a deadline).',
                'Special exceptions: **at night** (not "in night"); **in the morning/evening** (not "at morning").',
              ],
              common_mistakes: [
                { wrong: 'I was born in 5th March.', correct: 'I was born on 5th March.', explanation: 'Specific dates use "on", not "in".' },
                { wrong: 'She woke up at the morning.', correct: 'She woke up in the morning.', explanation: 'Parts of the day (morning, afternoon, evening) use "in", not "at".' },
                { wrong: 'We met in the airport.', correct: 'We met at the airport.', explanation: '"At" is used for locations seen as a point or destination, like airports and stations.' },
              ],
              tips: [
                'A useful memory trick: think of the prepositions as rings — **IN** is the biggest (months, years), **ON** is medium (days, dates), **AT** is the smallest (exact times and points).',
                'Learn common fixed phrases by heart: "at work", "at home", "on holiday", "in bed", "in hospital".',
              ],
              exercises: [
                { type: 'fill_blank',      question: 'She was born ___ 1995.', answer: 'in', hint: 'Years use this preposition' },
                { type: 'multiple_choice', question: 'I\'ll meet you ___ the entrance of the mall.', options: ['in', 'on', 'at', 'by'], answer: 2 },
                { type: 'fill_blank',      question: 'The meeting is ___ Monday morning.', answer: 'on', hint: 'Days use this preposition' },
                { type: 'multiple_choice', question: 'The keys are ___ the table.', options: ['at', 'in', 'on', 'by'], answer: 2 },
                { type: 'fill_blank',      question: 'I usually study ___ night.', answer: 'at', hint: 'Special phrase: ___ night' },
                { type: 'multiple_choice', question: 'We arrived ___ time — the show hadn\'t started yet.', options: ['at', 'on', 'in', 'by'], answer: 1 },
                { type: 'fill_blank',      question: 'The conference is ___ July, ___ the 15th.', answer: 'in / on', hint: 'Month = in; date = on' },
                { type: 'multiple_choice', question: '"She is in hospital" means:', options: ['She works as a doctor', 'She is a patient there', 'She is visiting someone', 'She is near the hospital'], answer: 1 },
              ],
            },
          },
          {
            id: 'el2l4', title: 'Countable vs Uncountable Nouns', type: 'grammar', xp: 25,
            content: {
              intro: 'Learn how to use some, any, much, many, a few, a little!',
              explanation: '📝 **Countable vs Uncountable:**\n\n**Countable** (can count: 1, 2, 3...):\n• *a book, two books, some books*\n• Use: **many, a few, several, a number of**\n\n**Uncountable** (cannot count):\n• *water, rice, music, advice, information, money, time*\n• Use: **much, a little, a great deal of**\n\n**SOME & ANY:**\n• **Some** = positive sentences + offers\n  *I have **some** money. Would you like **some** tea?*\n• **Any** = negative sentences + questions\n  *I don\'t have **any** money. Do you have **any** sugar?*\n\n**Common mistakes:**\n❌ *an information* → ✅ *some information / a piece of information*\n❌ *many money* → ✅ *much money / a lot of money*\n❌ *advices* → ✅ *advice* (no plural!)',
              key_points: [
                'Use **many / a few** with countable nouns: "many books", "a few students".',
                'Use **much / a little** with uncountable nouns: "much time", "a little water".',
                'Words like **advice, information, news, furniture, luggage** are uncountable in English — no plural form.',
              ],
              common_mistakes: [
                { wrong: 'She gave me some advices.', correct: 'She gave me some advice.', explanation: '"advice" is uncountable in English — it has no plural form.' },
                { wrong: 'There are many furnitures in the room.', correct: 'There is a lot of furniture in the room.', explanation: '"furniture" is uncountable — use "a lot of" and a singular verb.' },
                { wrong: 'I don\'t have some time.', correct: 'I don\'t have any time.', explanation: 'In negative sentences, use "any" not "some".' },
              ],
              tips: [
                'When in doubt whether a noun is countable, ask: "Can I say two of them?" Two books? Yes — countable. Two informations? No — uncountable.',
                '"A lot of" works with BOTH countable and uncountable nouns, making it a safe choice when you\'re unsure.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How ___ sugar do you want in your coffee?', options: ['many', 'much', 'few', 'number'], answer: 1 },
                { type: 'fill_blank',      question: 'She gave me ___ good advice. (some/any)', answer: 'some', hint: 'Positive sentence' },
                { type: 'multiple_choice', question: 'There aren\'t ___ students in the class today.', options: ['much', 'some', 'many', 'little'], answer: 2 },
                { type: 'fill_blank',      question: 'I only have ___ little time — let\'s be quick.', answer: 'a', hint: 'A ___ little (small amount)' },
                { type: 'multiple_choice', question: 'Which is CORRECT?', options: ['I need some informations.', 'I need an information.', 'I need some information.', 'I need informations.'], answer: 2 },
                { type: 'fill_blank',      question: 'Do you have ___ questions before we start?', answer: 'any', hint: 'Questions use this' },
                { type: 'multiple_choice', question: '"Luggage" is:', options: ['Countable', 'Uncountable', 'Both', 'Neither'], answer: 1 },
                { type: 'fill_blank',      question: 'I have ___ few friends here, but they\'re very kind.', answer: 'a', hint: 'A ___ few = a small number (positive)' },
              ],
            },
          },
          {
            id: 'el2l5', title: 'Story: Lost in the City', type: 'story', xp: 25,
            content: {
              intro: 'Read this story and practice your reading comprehension!',
              text: `**Lost in the City**\n\nIt was Sarah's first time visiting Istanbul. She had saved money for two years to make this trip, and she was determined to enjoy every moment.\n\nOn her second day, she decided to explore the city alone. She took the tram to the historic district and walked through the narrow, colourful streets. The smells from the spice market were incredible — cinnamon, cardamom, and exotic teas filled the air.\n\nAfter a few hours, Sarah realised she was completely lost. She didn't have a local SIM card, and her phone's battery was at 3%. She felt a moment of panic.\n\nA kind elderly man noticed her worried expression. "Are you lost, my friend?" he asked in surprisingly good English.\n\n"Yes! I'm trying to get back to Taksim Square," Sarah replied.\n\n"Ah, that's quite far from here. Come, I'll walk you to the tram stop." He pointed down a winding street.\n\nAs they walked, he told her about the history of the neighbourhood — buildings that were hundreds of years old, a fountain built by a sultan, and a hidden garden that tourists never found.\n\nAt the tram stop, he said, "Istanbul has many secrets. Come back when you have more time!"\n\nSarah thanked him warmly. What could have been a disaster had turned into the best memory of her trip.`,
              key_points: [
                'Notice the **past perfect**: "She had saved money for two years" — an action completed before the story begins.',
                '**"What could have been a disaster had turned into..."** — this is a powerful way to show an unexpected positive outcome.',
                'Descriptive language (narrow streets, spice market smells) makes writing come alive — look for sensory details.',
              ],
              fun_fact: 'Istanbul is the only city in the world that spans two continents — Europe and Asia. Its historic district, where Sarah gets lost, contains over 2,000 years of history!',
              exercises: [
                { type: 'multiple_choice', question: 'How long did Sarah save money for the trip?', options: ['One year', 'Six months', 'Two years', 'Three years'], answer: 2 },
                { type: 'multiple_choice', question: 'What was the problem with her phone?', options: ['It was broken', 'She lost it', 'Battery was at 3%', 'She had no signal'], answer: 2 },
                { type: 'fill_blank',      question: 'Sarah was trying to get back to ___ Square.', answer: 'Taksim', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What did the elderly man do?', options: ['Called her a taxi', 'Walked her to the tram stop', 'Lent her his phone', 'Took her to her hotel'], answer: 1 },
                { type: 'multiple_choice', question: 'The word "winding" in the story means:', options: ['متسخ', 'متعرج', 'طويل', 'ضيق'], answer: 1 },
                { type: 'fill_blank',      question: 'What could have been a disaster had ___ into the best memory.', answer: 'turned', hint: 'turned/changed/become' },
                { type: 'multiple_choice', question: 'Why did Sarah feel a moment of panic?', options: ['She lost her bag', 'She was lost with a nearly dead phone and no local SIM', 'She couldn\'t find the spice market', 'She missed the last tram'], answer: 1 },
                { type: 'fill_blank',      question: 'Sarah was ___ to enjoy every moment of her trip.', answer: 'determined', hint: 'Fully committed / resolved' },
              ],
            },
          },
          {
            id: 'el2l6', title: 'Writing: Informal Email', type: 'writing', xp: 25,
            content: {
              intro: 'Write a friendly email to a friend or relative!',
              explanation: '✍️ **Informal Email Structure:**\n\n**Subject:** Keep it casual and clear\n• *Just checking in!* · *Great news!* · *About this weekend...*\n\n**Opening:**\n• *Hi [Name]! / Hey [Name],*\n• *Hope you\'re doing well!*\n• *It\'s been a while since we last spoke!*\n\n**Body:** Write naturally, like you\'re talking\n• Share news: *Guess what happened!*\n• Ask questions: *How\'s your new job going?*\n• Make plans: *We should definitely meet up soon!*\n\n**Closing:**\n• *Take care! / Talk soon! / Miss you!*\n• *Lots of love, / Best, / Cheers,*\n\n💡 **Informal vs Formal:**\n| Informal | Formal |\n|---------|--------|\n| Hi! | Dear Mr. Smith, |\n| Thanks a lot! | Thank you very much. |\n| I\'m writing because... | I am writing to... |\n| ASAP | as soon as possible |',
              sampleAnswer: 'Hey Sara!\n\nHope you\'re doing great! It feels like ages since we last caught up.\n\nGuess what? I just got promoted at work! I\'m so excited — it\'s been a long time coming. We should definitely celebrate together soon!\n\nHow about you? How\'s the new apartment working out? You must send me photos!\n\nLet me know when you\'re free and we\'ll sort something out.\n\nTalk soon!\nLayla 😊',
              key_points: [
                'Informal emails use **contractions** (I\'m, you\'re, it\'s) and everyday language — avoid stiff formal phrases.',
                'Always **ask questions** about the reader — this makes emails feel warm and engaging, not one-sided.',
                'End with a friendly **call to action**: "Let me know when you\'re free!" or "We should catch up soon!"',
              ],
              tips: [
                'The subject line should hint at the email\'s content: "Great news!" is more engaging than a blank subject line.',
                'Read your email aloud before sending — if it sounds natural when spoken, it will read naturally too.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Which opening is appropriate for an informal email?', options: ['Dear Sir/Madam,', 'To Whom It May Concern,', 'Hey Ahmed!', 'I am writing to inform you that'], answer: 2 },
                { type: 'fill_blank',      question: 'It\'s been ___ while since we last spoke!', answer: 'a', hint: 'It\'s been ___ while' },
                { type: 'multiple_choice', question: 'Which is an informal way to say "I will contact you soon"?', options: ['I shall be in touch.', 'Talk soon!', 'I look forward to your response.', 'Yours faithfully,'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [you / Hope / well / doing / \'re]', words: ["you","Hope","well","doing","'re"], answer: "Hope you're doing well" },
                { type: 'multiple_choice', question: 'Which closing is appropriate for an informal email to a friend?', options: ['Yours sincerely,', 'Lots of love,', 'Respectfully yours,', 'To whom it may concern,'], answer: 1 },
                { type: 'fill_blank',      question: 'Guess ___! I just got a new job!', answer: 'what', hint: 'Guess ___ = exciting news opener' },
                { type: 'multiple_choice', question: '"It\'s been ages!" in an informal email means:', options: ['You are very old', 'It has been a very long time', 'Ages ago you did something', 'Time goes slowly'], answer: 1 },
                { type: 'fill_blank',      question: 'Let me know when you\'re free and we\'ll ___ something out.', answer: 'sort', hint: 'Arrange/organise' },
              ],
            },
          },
        ],
      },
      {
        id: 'el3', title: 'Real-Life English', icon: '🏙️',
        lessons: [
          {
            id: 'el3l1', title: 'At the Doctor', type: 'dialogue', xp: 25,
            content: {
              intro: 'Practice a real conversation at the doctor\'s office!',
              dialogue: `**Patient:** Good morning, doctor. I've been feeling unwell for the past three days.\n\n**Doctor:** I'm sorry to hear that. What seems to be the problem?\n\n**Patient:** I have a terrible headache, a sore throat, and I've been sneezing a lot. I also feel quite tired.\n\n**Doctor:** Any fever?\n\n**Patient:** Yes, I checked this morning — it was 38.5 degrees.\n\n**Doctor:** Have you taken any medication?\n\n**Patient:** Only paracetamol for the fever.\n\n**Doctor:** Let me examine you. [After examination] You have a viral infection — probably the flu. I'll prescribe some antibiotics and nasal spray.\n\n**Patient:** Should I stay home from work?\n\n**Doctor:** Absolutely. You need at least 3 days of rest. Drink plenty of fluids and avoid cold weather.\n\n**Patient:** Thank you, doctor. When should I come back if I don't feel better?\n\n**Doctor:** If you don't improve within 5 days, or if you develop a high fever above 39.5, come back immediately.`,
              vocabulary: [
                { word: 'Sore throat',    translation: 'التهاب الحلق',   example: 'I have a sore throat from the cold weather.' },
                { word: 'Prescribe',      translation: 'يصف (دواء)',     example: 'The doctor prescribed antibiotics.' },
                { word: 'Viral infection',translation: 'عدوى فيروسية',   example: 'A viral infection can\'t be treated with antibiotics.' },
                { word: 'Fluids',         translation: 'سوائل',          example: 'Drink plenty of fluids when you\'re sick.' },
                { word: 'Develop',        translation: 'يطور/تظهر',      example: 'He developed a fever during the night.' },
                { word: 'Immediately',    translation: 'فوراً',          example: 'Call the doctor immediately if it gets worse.' },
                { word: 'Examine',        translation: 'يفحص',           example: 'The doctor will examine you now.' },
                { word: 'Symptoms',       translation: 'أعراض',          example: 'What are your symptoms?' },
              ],
              key_points: [
                'Use **"I\'ve been feeling..."** (present perfect continuous) to describe an illness that started in the past and continues.',
                'Key phrases: **"I have a temperature / a sore throat / a headache"** — all use "have", not "I am".',
                'Polite patient language: "Could you tell me...?", "Should I...?", "When should I come back?"',
              ],
              fun_fact: 'Did you know? The word "doctor" comes from the Latin word "docere" meaning "to teach" — historically, doctors were expected to educate patients about their health!',
              exercises: [
                { type: 'multiple_choice', question: 'How long has the patient been feeling unwell?', options: ['One day', 'Two days', 'Three days', 'A week'], answer: 2 },
                { type: 'fill_blank',      question: 'The doctor said to drink plenty of ___.', answer: 'fluids', hint: 'Water and other liquids' },
                { type: 'multiple_choice', question: 'What did the doctor prescribe?', options: ['Paracetamol only', 'Antibiotics and nasal spray', 'Vitamin C', 'Nothing'], answer: 1 },
                { type: 'fill_blank',      question: 'You need at least ___ days of rest.', answer: '3', hint: 'Look in the doctor\'s advice' },
                { type: 'multiple_choice', question: 'When should the patient return immediately?', options: ['After 5 days', 'If fever goes above 39.5', 'When they feel better', 'Every day'], answer: 1 },
                { type: 'fill_blank',      question: 'The patient only took ___ for the fever before seeing the doctor.', answer: 'paracetamol', hint: 'A common pain/fever medication' },
                { type: 'multiple_choice', question: 'What does "prescribe" mean?', options: ['To diagnose an illness', 'To officially recommend a medicine', 'To take medication', 'To examine a patient'], answer: 1 },
                { type: 'fill_blank',      question: 'Avoid ___ weather while you recover.', answer: 'cold', hint: 'The doctor\'s advice about weather' },
              ],
            },
          },
          {
            id: 'el3l2', title: 'Shopping & Bargaining', type: 'dialogue', xp: 25,
            content: {
              intro: 'Learn how to shop, ask about prices, and bargain!',
              dialogue: `**Customer:** Excuse me, how much is this leather bag?\n\n**Seller:** That one is 450 pounds.\n\n**Customer:** Hmm, that seems a bit expensive. Is there any discount?\n\n**Seller:** For you, I can do 400. It's genuine leather, very high quality.\n\n**Customer:** I appreciate that, but I saw a similar one for 320 at the other shop.\n\n**Seller:** Ah, but that's not real leather! This one will last for years. How about 380? That's my final offer.\n\n**Customer:** Could you do 350? I'm buying two gifts today.\n\n**Seller:** [thinks for a moment] Alright, 350 — but only because you're buying two things!\n\n**Customer:** Perfect! I'll take it. Do you accept card payments?\n\n**Seller:** Yes, we accept Visa and Mastercard. Or cash — your choice.\n\n**Customer:** I'll pay cash. Thank you, you've been very helpful!\n\n**Seller:** My pleasure! Come back anytime. Enjoy your gifts!`,
              vocabulary: [
                { word: 'Genuine',        translation: 'حقيقي/أصيل',    example: 'This is genuine Italian leather.' },
                { word: 'Last',           translation: 'يدوم',           example: 'Quality products last longer.' },
                { word: 'Final offer',    translation: 'العرض الأخير',   example: '200 is my final offer — take it or leave it.' },
                { word: 'Bargain',        translation: 'يتفاوض/صفقة',   example: 'She\'s great at bargaining at markets.' },
                { word: 'My pleasure',    translation: 'بكل سرور',       example: 'Thank you for your help! — My pleasure!' },
                { word: 'Discount',       translation: 'خصم',            example: 'Is there any discount for buying two?' },
                { word: 'Reasonable',     translation: 'معقول (سعر)',    example: 'The price is very reasonable for the quality.' },
              ],
              key_points: [
                'Start bargaining politely: **"Is there any discount?"** or **"Could you do a better price?"**',
                'Use justification to strengthen your offer: **"I\'m buying two things"** or **"I saw a lower price elsewhere."**',
                'Know when to accept: **"That works for me"** or **"Deal!"** closes the negotiation naturally.',
              ],
              fun_fact: 'Bargaining is common in markets across the Middle East, Africa, and Asia, but is considered unusual in supermarkets and department stores in Western countries!',
              exercises: [
                { type: 'multiple_choice', question: 'What was the original price of the bag?', options: ['320', '380', '350', '450'], answer: 3 },
                { type: 'fill_blank',      question: 'That\'s my ___ offer — I can\'t go lower.', answer: 'final', hint: 'Last = ___' },
                { type: 'multiple_choice', question: 'What payment methods does the seller accept?', options: ['Cash only', 'Card only', 'Cash or card', 'Bank transfer'], answer: 2 },
                { type: 'fill_blank',      question: 'The customer got the bag for ___ pounds.', answer: '350', hint: 'The agreed price' },
                { type: 'multiple_choice', question: 'Why did the seller agree to reduce the price?', options: ['He felt sorry for the customer', 'The customer was buying two gifts', 'The bag was on sale', 'The customer paid cash'], answer: 1 },
                { type: 'fill_blank',      question: 'This is ___ leather — it\'s not fake.', answer: 'genuine', hint: 'Real / authentic' },
                { type: 'multiple_choice', question: '"Take it or leave it" means:', options: ['Take the item for free', 'This is my final offer — decide now', 'I can lower the price more', 'The item is available elsewhere'], answer: 1 },
                { type: 'fill_blank',      question: '"___ products last longer than cheap ones."', answer: 'Quality', hint: 'High-quality / well-made' },
              ],
            },
          },
          {
            id: 'el3l3', title: 'Asking for & Giving Directions', type: 'vocabulary', xp: 25,
            content: {
              intro: 'Give and follow directions like a native speaker!',
              vocabulary: [
                { word: 'Turn left/right',   translation: 'انعطف يساراً/يميناً', example: 'Turn left at the traffic lights.' },
                { word: 'Go straight ahead', translation: 'اذهب مستقيماً',        example: 'Go straight ahead for 200 metres.' },
                { word: 'Take the first/second...', translation: 'خذ الأول/الثاني', example: 'Take the second exit on the roundabout.' },
                { word: 'Next to / Beside',  translation: 'بجانب',               example: 'It\'s next to the pharmacy.' },
                { word: 'Opposite',          translation: 'مقابل',               example: 'The bank is opposite the park.' },
                { word: 'Roundabout',        translation: 'دوار/ميدان',          example: 'At the roundabout, take the third exit.' },
                { word: 'Landmark',          translation: 'معلم بارز',           example: 'The mosque is a good landmark to look for.' },
                { word: 'You can\'t miss it',translation: 'لن تفوتك/واضحة جداً', example: 'It\'s the big red building — you can\'t miss it!' },
                { word: 'On your left/right', translation: 'على يسارك/يمينك',    example: 'The post office will be on your right.' },
                { word: 'At the end of',     translation: 'في نهاية',            example: 'The hotel is at the end of the street.' },
              ],
              key_points: [
                'When asking for directions, say: **"Excuse me, could you tell me how to get to...?"** or **"Could you point me in the direction of...?"**',
                'Use **landmarks** (well-known buildings, parks, traffic lights) to make directions easy to follow.',
                '"**On your left/right**" refers to the direction as you are walking forward.',
              ],
              tips: [
                'When giving directions to a tourist, speak slowly, use simple language, and offer to repeat if needed: "Would you like me to say that again?"',
                'Draw a quick map or use your phone to show directions visually — sometimes this is clearer than words!',
              ],
              fun_fact: 'Before GPS, "landmarks" were literally marks on land — trees, rocks or buildings that travellers used to navigate. The word dates back to Old English!',
              exercises: [
                { type: 'multiple_choice', question: 'What does "Go straight ahead" mean?', options: ['انعطف يميناً', 'ارجع للخلف', 'اذهب مستقيماً', 'انعطف يساراً'], answer: 2 },
                { type: 'fill_blank',      question: 'The hotel is ___ the train station. (مقابل)', answer: 'opposite', hint: 'Facing / across from' },
                { type: 'reorder',         question: 'Reorder: [left / lights / Turn / at / the / traffic]', words: ['left','lights','Turn','at','the','traffic'], answer: 'Turn left at the traffic lights' },
                { type: 'multiple_choice', question: '"You can\'t miss it" means:', options: ['It\'s very hidden', 'It\'s very obvious/visible', 'You will definitely get lost', 'It\'s closed'], answer: 1 },
                { type: 'fill_blank',      question: 'The pharmacy is ___ the end of this street.', answer: 'at', hint: 'At the end of' },
                { type: 'multiple_choice', question: '"Take the second exit at the roundabout" means:', options: ['Turn left before the roundabout', 'Exit the roundabout at the second road', 'Go straight through the roundabout', 'Make a U-turn at the roundabout'], answer: 1 },
                { type: 'fill_blank',      question: 'The post office will be ___ your left, next to the bank.', answer: 'on', hint: 'On your left/right' },
                { type: 'multiple_choice', question: 'A "landmark" is best described as:', options: ['A road sign', 'A well-known building or feature used for navigation', 'A map', 'A type of road'], answer: 1 },
              ],
            },
          },
          {
            id: 'el3l4', title: 'On the Phone', type: 'dialogue', xp: 25,
            content: {
              intro: 'Master telephone English for work and everyday life!',
              dialogue: `**Receptionist:** Good afternoon, Global Solutions. How can I help you?\n\n**Caller:** Hello, could I speak to Mr. Hassan in the Sales department, please?\n\n**Receptionist:** I'm afraid Mr. Hassan is in a meeting at the moment. Can I take a message?\n\n**Caller:** Yes, please. This is Sara Khalil from TechCorp. Could you ask him to call me back when he's free?\n\n**Receptionist:** Of course, Ms. Khalil. Can I confirm your number?\n\n**Caller:** It's 010-555-3421. I'm available until 5 PM today.\n\n**Receptionist:** Let me read that back: 010-555-3421, available until 5 PM. Is that right?\n\n**Caller:** That's correct, thank you.\n\n**Receptionist:** I'll pass the message on. Is there anything else I can help you with?\n\n**Caller:** No, that's all. Thank you for your help.\n\n**Receptionist:** My pleasure. Have a good afternoon, Ms. Khalil.\n\n**Caller:** You too. Goodbye!`,
              vocabulary: [
                { word: 'Hold the line',   translation: 'انتظر على الخط',  example: 'Please hold the line while I transfer you.' },
                { word: 'Take a message', translation: 'يأخذ رسالة',       example: 'He\'s not here. Can I take a message?' },
                { word: 'Call back',      translation: 'يرد/يتصل مجدداً', example: 'I\'ll ask him to call you back.' },
                { word: 'Confirm',        translation: 'يؤكد',             example: 'Can you confirm your email address?' },
                { word: 'Pass on',        translation: 'يمرر/ينقل',        example: 'I\'ll pass on your message right away.' },
                { word: 'Available',      translation: 'متاح',             example: 'I\'m available from 2 PM onwards.' },
                { word: 'Transfer',       translation: 'يحول المكالمة',    example: 'Let me transfer you to the right department.' },
                { word: 'Read back',      translation: 'يعيد القراءة للتأكيد', example: 'Let me read that back to you: 010-555...' },
              ],
              key_points: [
                'Opening a professional call: **"Good morning, [Company]. How can I help you?"** — always state the company name.',
                'When the person is unavailable, offer: **"Can I take a message?"** or **"Shall I ask them to call you back?"**',
                'Always **confirm** important details (names, numbers) by reading them back: "Let me read that back to you..."',
              ],
              tips: [
                'Speak clearly and slowly on the phone — the other person cannot see your facial expressions, so your tone of voice matters more.',
                'Always end a professional call politely: "Thank you for calling. Have a good day!"',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Why can\'t the caller speak to Mr. Hassan?', options: ['He is not in the office', 'He is in a meeting', 'He is on holiday', 'He doesn\'t want to talk'], answer: 1 },
                { type: 'fill_blank',      question: 'Could you ask him to ___ me back?', answer: 'call', hint: 'Phone = call' },
                { type: 'multiple_choice', question: 'What does "Hold the line" mean?', options: ['Hang up the phone', 'Wait on the phone', 'Speak louder', 'Call again later'], answer: 1 },
                { type: 'fill_blank',      question: 'I\'ll ___ the message on to him right away.', answer: 'pass', hint: 'To deliver/transmit' },
                { type: 'reorder',         question: 'Reorder: [take / I / message / a / Can]', words: ['take','I','message','a','Can'], answer: 'Can I take a message' },
                { type: 'multiple_choice', question: 'Why does the receptionist read back the phone number?', options: ['To be polite', 'To confirm accuracy and avoid mistakes', 'Company policy requires it', 'The caller asked her to'], answer: 1 },
                { type: 'fill_blank',      question: 'Let me ___ you to the sales department.', answer: 'transfer', hint: 'Connect to another line' },
                { type: 'multiple_choice', question: '"I\'m afraid Mr. Hassan is unavailable" is:', options: ['Rude', 'A polite way to say he cannot take the call', 'An apology', 'A mistake'], answer: 1 },
              ],
            },
          },
          {
            id: 'el3l5', title: 'Story: The Surprise Party', type: 'story', xp: 25,
            content: {
              intro: 'Read this fun story and test your comprehension!',
              text: `**The Surprise Party**\n\nRami had completely forgotten that his birthday was coming up. He had been so busy with his new job that he hadn't even thought about it.\n\nOn Saturday morning, his friend Lina texted him: "Hey! Want to grab lunch at La Piazza? I need to tell you some news."\n\nRami agreed, thinking it would be a normal lunch. He put on casual clothes — jeans and a simple shirt — and took a taxi to the restaurant.\n\nWhen he walked through the door, the lights were off. Strange, he thought. He took a step forward.\n\n"SURPRISE!"\n\nTwenty of his closest friends jumped out from behind the tables. The lights came on, and Rami saw balloons everywhere, a huge chocolate cake, and a banner that read: "Happy 30th Birthday, Rami!"\n\nHe stood there, completely speechless for a moment. Then he burst out laughing.\n\n"Did you seriously forget your own birthday?" Lina asked, laughing.\n\n"I've been so busy!" he said. "I genuinely forgot. This is... I don't know what to say."\n\n"Then don't say anything — just enjoy it!" she replied.\n\nIt turned out to be the most memorable birthday Rami had ever had. Sometimes, the best moments in life are the ones you never see coming.`,
              key_points: [
                '**"Burst out laughing"** and **"burst into tears"** are idiomatic ways to describe sudden, uncontrolled emotions.',
                'The phrase **"the ones you never see coming"** means unexpected events — a great expression to use in storytelling.',
                'Notice the story uses **past perfect** ("had forgotten", "had been") to give background before the main events.',
              ],
              fun_fact: 'Surprise parties have been recorded as far back as ancient Rome! Today, research shows that genuine surprises trigger a strong burst of dopamine in the brain — the "feel-good" chemical!',
              exercises: [
                { type: 'multiple_choice', question: 'Why had Rami forgotten his birthday?', options: ['He was travelling', 'He was busy with his new job', 'He doesn\'t celebrate birthdays', 'He was unwell'], answer: 1 },
                { type: 'fill_blank',      question: 'Rami wore jeans and a simple ___ to the restaurant.', answer: 'shirt', hint: 'Casual top' },
                { type: 'multiple_choice', question: 'How many friends were at the party?', options: ['Ten', 'Fifteen', 'Twenty', 'Twenty-five'], answer: 2 },
                { type: 'multiple_choice', question: '"Burst out laughing" means:', options: ['Cried suddenly', 'Started laughing suddenly', 'Stopped laughing', 'Laughed quietly'], answer: 1 },
                { type: 'fill_blank',      question: 'Sometimes the best moments are the ones you never see ___.', answer: 'coming', hint: 'Never see it ___' },
                { type: 'multiple_choice', question: 'What was the moral/lesson of the story?', options: ['Always remember your birthday', 'Good friends always surprise you', 'Unexpected moments can be the most special', 'Don\'t work too hard'], answer: 2 },
                { type: 'fill_blank',      question: 'Rami stood there completely ___ for a moment.', answer: 'speechless', hint: 'Unable to speak from shock/emotion' },
                { type: 'multiple_choice', question: 'What did the banner read?', options: ['"Happy Birthday from Lina!"', '"Happy 30th Birthday, Rami!"', '"Surprise, Rami!"', '"We love you, Rami!"'], answer: 1 },
              ],
            },
          },
          {
            id: 'el3l6', title: 'Social Media & Technology', type: 'vocabulary', xp: 25,
            content: {
              intro: 'Modern vocabulary for technology and social media!',
              vocabulary: [
                { word: 'Scroll',         translation: 'يتصفح (بالأسفل)', example: 'I spent an hour scrolling through Instagram.' },
                { word: 'Upload',         translation: 'يرفع (ملف)',       example: 'She uploaded her photos to the cloud.' },
                { word: 'Stream',         translation: 'يبث/يشاهد بث',    example: 'I stream movies on Netflix every evening.' },
                { word: 'Go viral',       translation: 'ينتشر بسرعة',     example: 'His video went viral overnight.' },
                { word: 'Tag',            translation: 'يشير/يضع تاغ',    example: 'She tagged me in a funny post.' },
                { word: 'Notification',   translation: 'إشعار',           example: 'Turn off your notifications during class.' },
                { word: 'Update',         translation: 'يحدّث',           example: 'You need to update your app.' },
                { word: 'Crash',          translation: 'يتعطل',           example: 'My phone crashed and I lost everything.' },
                { word: 'DM (direct message)', translation: 'رسالة مباشرة', example: 'Send me a DM if you want the details.' },
                { word: 'Trending',       translation: 'رائج/الأكثر تداولاً', example: 'That hashtag is trending on Twitter right now.' },
              ],
              key_points: [
                'Many tech words are **verbs** used as nouns too: "I\'ll send a DM" / "DM me" or "It\'s trending" / "Check the trends".',
                '"**Go viral**" describes content that spreads extremely rapidly across the internet, often reaching millions of people.',
                'Tech vocabulary changes quickly — new terms like "story", "reel", and "thread" have gained specific digital meanings.',
              ],
              tips: [
                'Learning tech vocabulary in context (while actually using the apps) is the fastest way to master it.',
                'Many English tech terms are used directly in Arabic without translation — so you may already know more than you think!',
              ],
              fun_fact: 'The word "viral" to describe spreading content online was first used in the early 2000s — borrowed from biology, where viruses spread rapidly from person to person!',
              exercises: [
                { type: 'multiple_choice', question: '"Go viral" means:', options: ['Get a computer virus', 'Spread rapidly online', 'Delete content', 'Log out'], answer: 1 },
                { type: 'fill_blank',      question: 'She ___ her holiday photos to Facebook.', answer: 'uploaded', hint: 'Put files online' },
                { type: 'match',           question: 'Match tech vocabulary', pairs: [['Scroll','يتصفح'],['Stream','يبث'],['Tag','يشير'],['Crash','يتعطل']] },
                { type: 'multiple_choice', question: 'What does "notification" mean?', options: ['إشعار', 'رسالة', 'مكالمة', 'تحديث'], answer: 0 },
                { type: 'fill_blank',      question: 'That hashtag is ___ on Twitter right now.', answer: 'trending', hint: 'Very popular at this moment' },
                { type: 'multiple_choice', question: '"DM me" means:', options: ['Call me', 'Send me a direct private message', 'Tag me in a post', 'Follow me'], answer: 1 },
                { type: 'fill_blank',      question: 'My laptop ___ during the presentation and I lost my work.', answer: 'crashed', hint: 'Stopped working suddenly' },
                { type: 'multiple_choice', question: '"Scroll" in the context of social media means:', options: ['Delete a post', 'Move down through content on screen', 'Take a screenshot', 'Reply to a comment'], answer: 1 },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  TRAVEL ENGLISH
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'travel',
    title: 'Travel English',
    level: 'A2–B2',
    description: 'Master all the English you need for airports, hotels, restaurants, sightseeing, and emergencies while travelling.',
    color: '#F59E0B',
    icon: '✈️',
    xpPerLesson: 30,
    units: [
      {
        id: 'tr1', title: 'At the Airport', icon: '🛫',
        lessons: [
          {
            id: 'tr1l1', title: 'Check-in & Security', type: 'dialogue', xp: 30,
            content: {
              intro: 'Navigate airport check-in and security like a pro!',
              dialogue: `**Check-in Counter:**\n\nAgent: Good morning! Passport and booking reference, please.\n\nPassenger: Here you go. I have an e-ticket on my phone.\n\nAgent: That's fine. Are you checking in any luggage?\n\nPassenger: Yes, one large suitcase. And I have a carry-on bag.\n\nAgent: The suitcase is 23 kilos — that's within the limit. Would you prefer a window or aisle seat?\n\nPassenger: Aisle, please. I prefer to stretch my legs.\n\nAgent: Perfect. Your boarding pass is on your phone. Boarding starts at Gate 14 at 10:30. The plane departs at 11:00.\n\nPassenger: Is there anything I should know about security?\n\nAgent: Yes — remove laptops and liquids from your bag. Liquids must be in containers of 100ml or less.\n\nPassenger: Got it. And how long does it take to get to Gate 14?\n\nAgent: About 15 minutes walking. Have a great flight!\n\nPassenger: Thank you so much!`,
              vocabulary: [
                { word: 'Check-in',       translation: 'تسجيل الوصول',   example: 'Online check-in opens 24 hours before.' },
                { word: 'Carry-on',       translation: 'حقيبة اليد',      example: 'Your carry-on must fit in the overhead bin.' },
                { word: 'Aisle',          translation: 'ممر',             example: 'I prefer the aisle seat for easy movement.' },
                { word: 'Boarding pass',  translation: 'بطاقة الصعود',    example: 'Show your boarding pass at the gate.' },
                { word: 'Depart',         translation: 'يغادر',           example: 'The flight departs at 11 AM.' },
                { word: 'Overhead bin',   translation: 'الخزانة العلوية', example: 'Please put your bag in the overhead bin.' },
                { word: 'Booking reference', translation: 'رقم الحجز',    example: 'Your booking reference is on your e-ticket.' },
                { word: 'Within the limit', translation: 'ضمن الحد المسموح', example: 'Your bag is within the weight limit.' },
              ],
              key_points: [
                'At check-in, you\'ll need your **passport** and **booking reference** (or e-ticket).',
                'The standard liquid rule at airport security: containers must be **100ml or less**, placed in a **clear resealable bag**.',
                'Always know your **gate number** and **boarding time** — boarding usually closes 20–30 minutes before departure.',
              ],
              fun_fact: 'Did you know? The world\'s busiest airport (Atlanta Hartsfield-Jackson) handles over 100 million passengers per year — that\'s more than one passenger every second, day and night!',
              exercises: [
                { type: 'multiple_choice', question: 'How heavy was the suitcase?', options: ['20 kg', '23 kg', '25 kg', '30 kg'], answer: 1 },
                { type: 'fill_blank',      question: 'Boarding starts at Gate 14 at ___ AM.', answer: '10:30', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What seat did the passenger choose?', options: ['Window', 'Middle', 'Aisle', 'First class'], answer: 2 },
                { type: 'fill_blank',      question: 'Liquids must be in containers of ___ ml or less.', answer: '100', hint: 'Standard airport rule' },
                { type: 'multiple_choice', question: '"Depart" means:', options: ['يصل', 'يغادر', 'يتأخر', 'يلغي'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [pass / boarding / your / Show / gate / at / the]', words: ['pass','boarding','your','Show','gate','at','the'], answer: 'Show your boarding pass at the gate' },
                { type: 'fill_blank',      question: 'Please put your bag in the ___ bin above your seat.', answer: 'overhead', hint: 'Above your head storage' },
                { type: 'multiple_choice', question: 'Why does the passenger prefer an aisle seat?', options: ['Better view', 'More legroom / easier to stretch legs', 'Closer to the exit', 'Cheaper price'], answer: 1 },
              ],
            },
          },
          {
            id: 'tr1l2', title: 'On the Plane', type: 'dialogue', xp: 30,
            content: {
              intro: 'Handle in-flight situations confidently!',
              dialogue: `**Flight Attendant:** Welcome aboard! Can I see your boarding pass?\n\nPassenger: Sure, here it is. I'm in 24C.\n\nFlight Attendant: That's just ahead on your left.\n\n[Later in the flight]\n\nFlight Attendant: Would you like something to drink?\n\nPassenger: Yes, please. Can I have orange juice? And could I also get a blanket? It's a bit cold.\n\nFlight Attendant: Of course! We also have a meal service in about 20 minutes — chicken or pasta?\n\nPassenger: Pasta, please. Excuse me — could I also get some headphones?\n\nFlight Attendant: Absolutely! [Returns with items] Here you go. Is there anything else?\n\nPassenger: Actually, yes. The person in front has reclined their seat quite far back. Is there anything that can be done?\n\nFlight Attendant: I understand. Let me have a word with them.\n\nPassenger: That's very kind. Also, how much longer is the flight?\n\nFlight Attendant: About 2 hours and 40 minutes remaining. We land at 3:15 local time.\n\nPassenger: Perfect. Thank you for your help!`,
              vocabulary: [
                { word: 'Welcome aboard', translation: 'أهلاً بك على متن', example: 'Welcome aboard Flight EK201 to Dubai!' },
                { word: 'Recline',        translation: 'يميل للخلف',      example: 'May I recline my seat?' },
                { word: 'Remaining',      translation: 'متبقي',           example: '2 hours remaining until landing.' },
                { word: 'Meal service',   translation: 'خدمة الوجبات',    example: 'Meal service will begin shortly.' },
                { word: 'Have a word',    translation: 'يتكلم/يحادث',     example: 'Let me have a word with the manager.' },
                { word: 'Sparkling water', translation: 'مياه غازية',     example: 'Would you like still or sparkling water?' },
                { word: 'Fasten seatbelt', translation: 'يربط حزام الأمان', example: 'Please fasten your seatbelt for landing.' },
              ],
              key_points: [
                'Use **polite question forms** when making requests on a plane: "Could I have...?" / "Would it be possible to...?"',
                '"**Have a word with**" someone means to speak briefly and privately — it is neutral or slightly serious in tone.',
                'When complaining about another passenger, be polite and indirect: "The person in front has reclined quite far — is there anything that can be done?"',
              ],
              fun_fact: 'Commercial airline food is intentionally seasoned more heavily than restaurant food — at altitude, cabin pressure reduces your sense of taste and smell by up to 30%!',
              exercises: [
                { type: 'multiple_choice', question: 'What did the passenger order to drink?', options: ['Water', 'Coffee', 'Orange juice', 'Tea'], answer: 2 },
                { type: 'fill_blank',      question: 'The meal service starts in ___ minutes.', answer: '20', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What was the passenger\'s complaint?', options: ['The food was cold', 'The seat was broken', 'The person in front reclined too far', 'The flight was delayed'], answer: 2 },
                { type: 'fill_blank',      question: 'We land at ___ local time.', answer: '3:15', hint: 'The arrival time mentioned' },
                { type: 'multiple_choice', question: '"Have a word with someone" means:', options: ['Argue with someone', 'Talk briefly to someone', 'Write a note to someone', 'Ignore someone'], answer: 1 },
                { type: 'fill_blank',      question: 'Please ___ your seatbelt — we are about to land.', answer: 'fasten', hint: 'Secure/buckle' },
                { type: 'multiple_choice', question: 'How much flight time was remaining?', options: ['1 hour 40 minutes', '2 hours 40 minutes', '3 hours', '45 minutes'], answer: 1 },
                { type: 'fill_blank',      question: 'Could I also get a ___? It\'s a bit cold.', answer: 'blanket', hint: 'A cover to keep warm' },
              ],
            },
          },
          {
            id: 'tr1l3', title: 'Immigration & Customs', type: 'dialogue', xp: 30,
            content: {
              intro: 'Handle passport control and customs confidently!',
              dialogue: `**Immigration Officer:** Good afternoon. Passport please.\n\nTraveller: Here you are.\n\nOfficer: What is the purpose of your visit?\n\nTraveller: Tourism. I'm here to visit the historic sites and explore the city.\n\nOfficer: How long are you planning to stay?\n\nTraveller: Ten days.\n\nOfficer: Where will you be staying?\n\nTraveller: At the Grand Palace Hotel in the city centre.\n\nOfficer: Do you have a return ticket?\n\nTraveller: Yes, my return flight is on the 15th. Here's the booking confirmation.\n\nOfficer: Very good. Do you have anything to declare at customs?\n\nTraveller: Just some personal items and gifts for family. Nothing over the limit.\n\nOfficer: How much cash are you carrying?\n\nTraveller: About $800 — well within the $10,000 limit.\n\nOfficer: Excellent. Enjoy your stay! Welcome to the country.\n\nTraveller: Thank you very much!`,
              vocabulary: [
                { word: 'Purpose of visit', translation: 'الغرض من الزيارة', example: 'What is the purpose of your visit?' },
                { word: 'Declare',           translation: 'يعلن/يصرح',        example: 'Do you have anything to declare?' },
                { word: 'Return ticket',     translation: 'تذكرة العودة',      example: 'Please show your return ticket.' },
                { word: 'Within the limit',  translation: 'ضمن الحد المسموح', example: 'Your luggage is within the limit.' },
                { word: 'Customs',           translation: 'الجمارك',           example: 'You must pass through customs.' },
                { word: 'Visa',              translation: 'تأشيرة',            example: 'Do you have a valid visa for entry?' },
                { word: 'Length of stay',    translation: 'مدة الإقامة',       example: 'What is your intended length of stay?' },
              ],
              key_points: [
                'Common immigration questions: **"Purpose of visit?"**, **"How long are you staying?"**, **"Where will you be staying?"**',
                'Always have your **return ticket** and **hotel booking** ready — officers may ask to see them.',
                '"**Declare**" at customs means officially stating that you are bringing goods above the permitted limit into the country.',
              ],
              fun_fact: 'The word "passport" comes from French "passe-port" meaning "to pass through a port/gate" — originally it was literally a document to pass through a city gate!',
              exercises: [
                { type: 'multiple_choice', question: 'Why is the traveller visiting?', options: ['Business', 'Education', 'Tourism', 'Medical treatment'], answer: 2 },
                { type: 'fill_blank',      question: 'The traveller is staying for ___ days.', answer: 'ten', hint: 'The number mentioned' },
                { type: 'multiple_choice', question: 'How much cash is the traveller carrying?', options: ['$500', '$800', '$1000', '$10,000'], answer: 1 },
                { type: 'fill_blank',      question: 'Do you have anything to ___ at customs?', answer: 'declare', hint: 'Official announcement of goods' },
                { type: 'reorder',         question: 'Reorder: [your / is / purpose / What / visit / of]', words: ['your','is','purpose','What','visit','of'], answer: 'What is your purpose of visit' },
                { type: 'fill_blank',      question: 'The traveller is staying at the Grand Palace ___ in the city centre.', answer: 'Hotel', hint: 'A place to stay' },
                { type: 'multiple_choice', question: '"Nothing to declare" at customs means:', options: ['You have no luggage', 'You are not bringing any taxable goods above the limit', 'You are a citizen', 'You have no cash'], answer: 1 },
                { type: 'fill_blank',      question: 'My ___ flight is on the 15th — here is the confirmation.', answer: 'return', hint: 'The flight back home' },
              ],
            },
          },
          {
            id: 'tr1l4', title: 'Airport Vocabulary', type: 'vocabulary', xp: 30,
            content: {
              intro: 'Master all the essential airport vocabulary!',
              vocabulary: [
                { word: 'Terminal',         translation: 'مبنى المطار',     example: 'Flight EK201 departs from Terminal 3.' },
                { word: 'Departure lounge', translation: 'صالة المغادرة',   example: 'Wait in the departure lounge.' },
                { word: 'Connecting flight',translation: 'رحلة متصلة',      example: 'I have a 2-hour layover on my connecting flight.' },
                { word: 'Layover',          translation: 'توقف مؤقت',       example: 'I have a 3-hour layover in Dubai.' },
                { word: 'Baggage claim',    translation: 'استلام الأمتعة',  example: 'Your bags will be at baggage claim belt 4.' },
                { word: 'Delayed',          translation: 'متأخر',           example: 'Your flight is delayed by 2 hours.' },
                { word: 'Cancelled',        translation: 'ملغي',            example: 'I\'m afraid your flight has been cancelled.' },
                { word: 'Gate',             translation: 'بوابة',           example: 'Please proceed to Gate 22.' },
                { word: 'Arrivals / Departures', translation: 'الوصول / المغادرة', example: 'Check the departures board for your gate.' },
                { word: 'Boarding time',    translation: 'وقت الصعود',      example: 'Boarding time is 30 minutes before departure.' },
              ],
              key_points: [
                'A **layover** is a stop between flights — it can be a few hours or even overnight.',
                '"**Delayed**" means the flight is late but will still go. "**Cancelled**" means the flight will not operate at all.',
                'Always check the **departures board** regularly — gates can change at the last minute.',
              ],
              tips: [
                'On a connecting flight, allow at least 90 minutes between flights — less and you risk missing your connection.',
                'Download your airline\'s app for real-time updates on delays, gate changes, and boarding alerts.',
              ],
              fun_fact: 'Dubai International Airport held the record for the world\'s busiest international airport for several years running, connecting over 220 destinations across 6 continents!',
              exercises: [
                { type: 'multiple_choice', question: 'Where do you wait before boarding?', options: ['Baggage claim', 'Departure lounge', 'Immigration', 'Customs'], answer: 1 },
                { type: 'fill_blank',      question: 'Your bags will be at ___ claim belt 5.', answer: 'baggage', hint: 'Where you collect your luggage' },
                { type: 'match',           question: 'Match airport words', pairs: [['Terminal','مبنى المطار'],['Gate','بوابة'],['Layover','توقف مؤقت'],['Delayed','متأخر']] },
                { type: 'multiple_choice', question: 'A "connecting flight" means:', options: ['A direct flight', 'A flight with a stop in between', 'A cancelled flight', 'A cheap flight'], answer: 1 },
                { type: 'fill_blank',      question: 'I have a 3-hour ___ in Istanbul before my next flight.', answer: 'layover', hint: 'A stop between flights' },
                { type: 'multiple_choice', question: 'What should you do if your flight is "cancelled"?', options: ['Wait at the gate', 'Go to the airline desk for rebooking', 'Go home', 'Call the pilot'], answer: 1 },
                { type: 'fill_blank',      question: 'Please proceed to ___ 22 for boarding.', answer: 'Gate', hint: 'The specific departure point' },
                { type: 'multiple_choice', question: 'A "layover" in an airport means:', options: ['A comfortable seat', 'A temporary stop between connecting flights', 'A cancelled flight', 'An extra bag fee'], answer: 1 },
              ],
            },
          },
          {
            id: 'tr1l5', title: 'Travel Emergencies', type: 'dialogue', xp: 30,
            content: {
              intro: 'Handle travel problems and emergencies calmly!',
              dialogue: `**Passenger:** Excuse me, I think my bag has been lost.\n\nStaff: I'm sorry to hear that. Can you describe the bag?\n\nPassenger: It's a large black suitcase with a red ribbon tied to the handle. It also has my name tag on it: Sara Ahmed.\n\nStaff: When did you last see it?\n\nPassenger: I checked it in at Cairo Airport on Flight MS831. It should have arrived here.\n\nStaff: Let me check the system. [pause] I can see your bag is still in Cairo — it missed the connecting flight.\n\nPassenger: Oh no! I need it — all my medication is in there.\n\nStaff: Don't worry. We'll arrange for it to be sent on the next available flight. It should arrive within 8 hours. In the meantime, we can give you a toiletries kit and reimburse any essential purchases.\n\nPassenger: That's a relief. What do I need to do?\n\nStaff: Just fill out this Lost Baggage Report and give me your hotel address. We'll deliver it directly to your hotel.\n\nPassenger: Thank you so much. You've been very helpful.`,
              vocabulary: [
                { word: 'Missing',        translation: 'مفقود',           example: 'I need to report a missing bag.' },
                { word: 'Name tag',       translation: 'بطاقة الاسم',     example: 'Put a name tag on all your luggage.' },
                { word: 'Reimburse',      translation: 'يعوض/يسدد',       example: 'We will reimburse your travel expenses.' },
                { word: 'Toiletries',     translation: 'أدوات النظافة',   example: 'The hotel provided a free toiletries kit.' },
                { word: 'In the meantime', translation: 'في غضون ذلك',   example: 'In the meantime, here is a temporary card.' },
                { word: 'Lost property', translation: 'الأشياء المفقودة', example: 'Report your bag at the lost property desk.' },
                { word: 'Fill out a form', translation: 'يملأ نموذجاً',   example: 'Please fill out this form to report the bag.' },
              ],
              key_points: [
                'When reporting lost luggage, describe it clearly: **colour, size, any distinctive features** (ribbons, stickers, tags).',
                'Keep your **baggage receipt** — it has the unique tag number that allows the airline to track your bag.',
                '"**In the meantime**" is a useful phrase meaning "while we wait for this to be resolved".',
              ],
              fun_fact: 'Airlines worldwide lose or mishandle about 5 bags per thousand passengers. Most lost bags (about 85%) are found and returned within 48 hours!',
              exercises: [
                { type: 'multiple_choice', question: 'What is special about Sara\'s suitcase?', options: ['It is green', 'It has a red ribbon on the handle', 'It has wheels', 'It is very large'], answer: 1 },
                { type: 'fill_blank',      question: 'The bag ___ the connecting flight in Cairo.', answer: 'missed', hint: 'Didn\'t make it onto...' },
                { type: 'multiple_choice', question: 'What will the airline give Sara in the meantime?', options: ['Money', 'A new suitcase', 'A toiletries kit', 'A hotel room'], answer: 2 },
                { type: 'fill_blank',      question: 'We will ___ any essential purchases you make.', answer: 'reimburse', hint: 'Pay back/compensate' },
                { type: 'multiple_choice', question: 'Where will the bag be delivered?', options: ['The airport', 'Her home', 'Her hotel', 'The embassy'], answer: 2 },
                { type: 'fill_blank',      question: 'The bag should arrive within ___ hours.', answer: '8', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'Why is Sara particularly worried about the bag?', options: ['It has expensive clothes', 'Her medication is in it', 'It contains her laptop', 'It has important documents'], answer: 1 },
                { type: 'fill_blank',      question: 'Please fill out this Lost Baggage ___ and give me your hotel address.', answer: 'Report', hint: 'An official form to complete' },
              ],
            },
          },
          {
            id: 'tr1l6', title: 'Booking & Reservations', type: 'vocabulary', xp: 30,
            content: {
              intro: 'Make reservations for hotels, restaurants and tours!',
              vocabulary: [
                { word: 'Book / Reserve',    translation: 'يحجز',             example: 'I\'d like to book a room for two nights.' },
                { word: 'Availability',      translation: 'التوافر',          example: 'Do you have availability this weekend?' },
                { word: 'Confirmation',      translation: 'تأكيد',            example: 'You\'ll receive a confirmation email.' },
                { word: 'Check-in date',     translation: 'تاريخ الوصول',     example: 'Your check-in date is March 15th.' },
                { word: 'Check-out date',    translation: 'تاريخ المغادرة',   example: 'Check-out is before 12 noon.' },
                { word: 'Cancellation policy', translation: 'سياسة الإلغاء', example: 'Free cancellation up to 48 hours before.' },
                { word: 'Fully booked',      translation: 'محجوز بالكامل',    example: 'I\'m afraid we are fully booked this weekend.' },
                { word: 'Deposit',           translation: 'عربون/دفعة مقدمة', example: 'A 20% deposit is required at booking.' },
                { word: 'Refund',            translation: 'استرداد المبلغ',   example: 'I\'d like a full refund as I cancelled in time.' },
                { word: 'Non-refundable',    translation: 'غير قابل للاسترداد', example: 'This is a non-refundable rate — no changes allowed.' },
              ],
              key_points: [
                'Always check the **cancellation policy** before booking — "free cancellation" saves you money if plans change.',
                '"**Fully booked**" means no availability at all. "**Limited availability**" means only a few spots remain.',
                'Keep your **booking confirmation number** — you\'ll need it at check-in and for any changes or cancellations.',
              ],
              tips: [
                'Book accommodation well in advance for popular travel dates (holidays, festivals, school breaks).',
                'Read reviews on booking platforms — look for recent ones as standards can change significantly.',
              ],
              fun_fact: 'The online booking industry is worth over $800 billion worldwide. Booking.com alone lists over 28 million accommodation options across 228 countries!',
              exercises: [
                { type: 'multiple_choice', question: '"Fully booked" means:', options: ['Very expensive', 'No rooms available', 'Good reviews', 'Recently opened'], answer: 1 },
                { type: 'fill_blank',      question: 'Do you have ___ for this Saturday night?', answer: 'availability', hint: 'Are rooms/tables free?' },
                { type: 'multiple_choice', question: 'A "deposit" is:', options: ['Full payment', 'A partial payment in advance', 'A refund', 'A discount'], answer: 1 },
                { type: 'match',           question: 'Match booking words', pairs: [['Book','يحجز'],['Deposit','عربون'],['Confirmation','تأكيد'],['Cancellation','إلغاء']] },
                { type: 'fill_blank',      question: 'I cancelled in time — I expect a full ___.', answer: 'refund', hint: 'Money returned to you' },
                { type: 'multiple_choice', question: 'A "non-refundable" rate means:', options: ['You can cancel for free', 'You cannot get your money back if you cancel', 'The rate is very cheap', 'Breakfast is included'], answer: 1 },
                { type: 'fill_blank',      question: 'Free ___ is available up to 48 hours before check-in.', answer: 'cancellation', hint: 'The ability to cancel without penalty' },
                { type: 'multiple_choice', question: 'When does free cancellation save you money?', options: ['Never — you always lose the deposit', 'When your plans change and you need to cancel', 'Only if you use a credit card', 'When you book last minute'], answer: 1 },
              ],
            },
          },
        ],
      },
      {
        id: 'tr2', title: 'Hotels & Accommodation', icon: '🏨',
        lessons: [
          {
            id: 'tr2l1', title: 'Checking In & Out', type: 'dialogue', xp: 30,
            content: {
              intro: 'Handle hotel check-in and check-out like a native!',
              dialogue: `**Receptionist:** Good evening! Welcome to The Royal Hotel. Do you have a reservation?\n\n**Guest:** Yes, I booked a room online. The name is Rami Hassan.\n\n**Receptionist:** Let me check... Yes, I have a Deluxe Double Room for 3 nights. Is that right?\n\n**Guest:** That's correct. What does the room include?\n\n**Receptionist:** It includes daily breakfast, free Wi-Fi, and access to the pool and gym. I'll need your passport and a credit card for incidentals.\n\n**Guest:** Sure, here they are. Is early check-in possible? I arrived quite early today.\n\n**Receptionist:** Your room is actually ready! You're lucky — it was just cleaned. Here are your key cards. Room 412, fourth floor. The elevator is to your left.\n\n**Guest:** Brilliant! One more thing — could you arrange a wake-up call for 7 AM tomorrow?\n\n**Receptionist:** Of course. Is there anything else?\n\n**Guest:** Where is the nearest pharmacy?\n\n**Receptionist:** There's one just two minutes' walk — turn right out of the hotel. Enjoy your stay!\n\n**Guest:** Thank you so much!`,
              vocabulary: [
                { word: 'Incidentals',   translation: 'نفقات عرضية',    example: 'We need a card on file for incidentals.' },
                { word: 'Key card',      translation: 'بطاقة المفتاح',  example: 'Use your key card to enter the room.' },
                { word: 'Wake-up call',  translation: 'مكالمة إيقاظ',   example: 'Could you arrange a wake-up call at 6?' },
                { word: 'Early check-in',translation: 'وصول مبكر',      example: 'Early check-in is subject to availability.' },
                { word: 'Late check-out',translation: 'مغادرة متأخرة',  example: 'Can I arrange a late check-out until 2 PM?' },
                { word: 'Reception',     translation: 'الاستقبال',       example: 'Call reception if you need anything.' },
                { word: 'Room number',   translation: 'رقم الغرفة',      example: 'Your room number is 412 on the fourth floor.' },
              ],
              key_points: [
                'At hotel check-in you\'ll need your **passport/ID** and a **credit card** (for incidentals/security deposit).',
                '**"Subject to availability"** means something can be arranged if possible, but is not guaranteed.',
                'Use polite requests at the hotel: **"Could you arrange...?"** / **"Would it be possible to...?"**',
              ],
              fun_fact: 'The word "hotel" comes from the French "hôtel", which originally meant a large mansion or townhouse. The first hotel to use the word in English opened in London in 1769!',
              exercises: [
                { type: 'multiple_choice', question: 'What type of room did Rami book?', options: ['Standard Single', 'Deluxe Double', 'Suite', 'Twin Room'], answer: 1 },
                { type: 'fill_blank',      question: 'Breakfast, Wi-Fi, pool and ___ are all included.', answer: 'gym', hint: 'Exercise facility' },
                { type: 'multiple_choice', question: 'What did the guest ask for at 7 AM?', options: ['Breakfast in room', 'A taxi', 'A wake-up call', 'The bill'], answer: 2 },
                { type: 'fill_blank',      question: 'The elevator is to your ___.', answer: 'left', hint: 'Direction given by receptionist' },
                { type: 'reorder',         question: 'Reorder: [could / wake-up / a / arrange / you / call]', words: ['could','wake-up','a','arrange','you','call'], answer: 'could you arrange a wake-up call' },
                { type: 'multiple_choice', question: '"Incidentals" on a hotel bill refers to:', options: ['Room cost', 'Extra charges like minibar or phone calls', 'Breakfast', 'Tax'], answer: 1 },
                { type: 'fill_blank',      question: 'Rami is on the fourth floor in Room ___.', answer: '412', hint: 'His room number' },
                { type: 'multiple_choice', question: 'Why was Rami lucky about early check-in?', options: ['He paid extra for it', 'The room was already cleaned and ready', 'The receptionist made an exception', 'It was included in his booking'], answer: 1 },
              ],
            },
          },
          {
            id: 'tr2l2', title: 'Requesting Room Service', type: 'dialogue', xp: 30,
            content: {
              intro: 'Order room service and request hotel facilities!',
              dialogue: `**Guest:** [calls front desk] Hello, this is Room 412. I'd like to order room service, please.\n\n**Staff:** Of course! What can I get for you?\n\n**Guest:** I'd like a club sandwich with fries, a Caesar salad, and a bottle of still water.\n\n**Staff:** Any sauces or special requests?\n\n**Guest:** Extra ketchup, please. And could you also send up some extra towels? I only have two and I need four.\n\n**Staff:** No problem at all. The food will be with you in approximately 30 minutes, and I'll send the towels up immediately.\n\n**Guest:** Thank you. Oh, one more thing — the TV remote isn't working.\n\n**Staff:** I apologize for the inconvenience. I'll send someone up to look at it right away.\n\n**Guest:** That's great. Thank you!\n\n**Staff:** Is there anything else I can help with?\n\n**Guest:** Actually, could you tell me what time the pool closes tonight?\n\n**Staff:** The pool closes at 10 PM. Is that all?\n\n**Guest:** Yes, that's everything. Thanks so much!`,
              vocabulary: [
                { word: 'Room service',    translation: 'خدمة الغرف',     example: 'I\'d like to order room service, please.' },
                { word: 'Still water',     translation: 'مياه غير غازية', example: 'Still or sparkling water?' },
                { word: 'Approximately',   translation: 'تقريباً',        example: 'It will take approximately 20 minutes.' },
                { word: 'Inconvenience',   translation: 'إزعاج',          example: 'I apologize for any inconvenience.' },
                { word: 'Send up',         translation: 'يرسل إلى الغرفة', example: 'I\'ll send up extra pillows for you.' },
                { word: 'Extra',           translation: 'إضافي',          example: 'Could I have some extra towels?' },
                { word: 'Right away',      translation: 'فوراً/حالاً',    example: 'I\'ll send someone right away.' },
              ],
              key_points: [
                'When ordering room service, clearly state: **what you want**, **any special requests**, and any **time constraints**.',
                'Politely report problems: **"I apologize for the inconvenience"** is the standard hotel response to any issue.',
                '"**Right away**" and "**immediately**" both mean instantly — use them to indicate urgency.',
              ],
              tips: [
                'When requesting items be sent to your room, say: "Could you send up some extra towels/pillows?" — "send up" specifically means to send something to a hotel room.',
                'If you have a problem in your room, always call the front desk rather than waiting — hotels want to fix issues quickly.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What food did the guest order?', options: ['Pizza and salad', 'Club sandwich, fries and Caesar salad', 'Burger and fries', 'Pasta and bread'], answer: 1 },
                { type: 'fill_blank',      question: 'The food will arrive in approximately ___ minutes.', answer: '30', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What was wrong with the TV?', options: ['Screen was broken', 'Sound was off', 'Remote wasn\'t working', 'Wrong channel'], answer: 2 },
                { type: 'fill_blank',      question: 'The pool closes at ___ PM.', answer: '10', hint: 'The closing time mentioned' },
                { type: 'reorder',         question: 'Reorder: [the / for / apologize / inconvenience / I]', words: ['the','for','apologize','inconvenience','I'], answer: 'I apologize for the inconvenience' },
                { type: 'fill_blank',      question: 'The guest asked for extra ___ — he only had two.', answer: 'towels', hint: 'For drying yourself' },
                { type: 'multiple_choice', question: 'What sauce did the guest want?', options: ['Mayonnaise', 'Mustard', 'Extra ketchup', 'Hot sauce'], answer: 2 },
                { type: 'fill_blank',      question: 'I\'ll send someone up to look at it ___ away.', answer: 'right', hint: 'Right ___ = immediately' },
              ],
            },
          },
          {
            id: 'tr2l3', title: 'Describing a Hotel', type: 'writing', xp: 30,
            content: {
              intro: 'Write a hotel review like on TripAdvisor or Booking.com!',
              explanation: '✍️ **Writing a Hotel Review:**\n\n**Useful phrases:**\n\n⭐ **Positive:**\n• The staff were incredibly helpful and friendly.\n• The location is perfect — right in the city centre.\n• The room was spotlessly clean and well-equipped.\n• Excellent value for money.\n• I would highly recommend this hotel.\n• I will definitely be coming back!\n\n👎 **Negative:**\n• Unfortunately, the room was smaller than expected.\n• The noise from the street was quite disturbing.\n• The WiFi connection was unreliable.\n• The breakfast was disappointing — limited options.\n• The check-in process was slow and disorganised.\n\n💡 **Structure your review:**\n1. Overall impression (⭐ rating)\n2. What you liked\n3. What could be improved\n4. Recommendation',
              sampleAnswer: '⭐⭐⭐⭐⭐ The Grand Palace Hotel — Excellent Stay!\n\nI stayed at the Grand Palace for 3 nights in March and I was thoroughly impressed. The staff were incredibly welcoming and nothing was too much trouble for them.\n\nThe room was spotlessly clean, modern, and had a fantastic view of the old city. The breakfast was outstanding — a huge variety of both local and international options.\n\nThe location is perfect — walking distance from all the main attractions and plenty of restaurants nearby.\n\nIf I could mention one improvement: the lifts were quite slow during busy times. But this is a minor issue.\n\nI would absolutely recommend this hotel and will definitely be returning on my next visit!',
              key_points: [
                'Good reviews are **balanced** — mention both positives and any minor negatives to sound credible and helpful.',
                'Use **specific details**: "The breakfast had 20+ options" is more useful than just "The breakfast was good."',
                'Strong closing phrases: **"I would highly recommend..."** and **"I will definitely be returning"** signal genuine satisfaction.',
              ],
              tips: [
                'Write your review shortly after your stay while details are fresh — mention specific names of staff or experiences that stood out.',
                'Avoid extreme language unless fully justified — "the WORST hotel EVER" is less credible than "there were several significant issues".',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase expresses strong satisfaction?', options: ['It was okay.', 'I would highly recommend it.', 'The noise was disturbing.', 'The WiFi was unreliable.'], answer: 1 },
                { type: 'fill_blank',      question: 'The room was ___ clean and well-equipped.', answer: 'spotlessly', hint: 'Perfectly/immaculately' },
                { type: 'multiple_choice', question: 'What does "value for money" mean?', options: ['Very expensive', 'Good quality at a fair price', 'Very cheap', 'Overpriced'], answer: 1 },
                { type: 'fill_blank',      question: 'I will ___ be coming back!', answer: 'definitely', hint: 'Certainly/without doubt' },
                { type: 'multiple_choice', question: 'What is the recommended structure for a hotel review?', options: ['Only positives, then stars', 'Impression, likes, improvements, recommendation', 'Date, price, name, stars', 'Location only'], answer: 1 },
                { type: 'fill_blank',      question: 'Nothing was too much ___ for the staff.', answer: 'trouble', hint: 'They were very willing to help' },
                { type: 'multiple_choice', question: 'Which is a constructive way to mention a negative?', options: ['This place is terrible!', 'If I could mention one improvement: the lifts were slow.', 'Never going back.', 'Zero stars for everything.'], answer: 1 },
                { type: 'fill_blank',      question: 'The hotel is in a ___ location — walking distance from all attractions.', answer: 'perfect', hint: 'Ideal / excellent' },
              ],
            },
          },
          {
            id: 'tr2l4', title: 'Types of Accommodation', type: 'vocabulary', xp: 30,
            content: {
              intro: 'Learn vocabulary for different types of places to stay!',
              vocabulary: [
                { word: 'Hostel',          translation: 'نزل شبابي',      example: 'Hostels are budget-friendly for backpackers.' },
                { word: 'Bed & Breakfast', translation: 'فندق صغير مع فطور', example: 'A B&B is cosy and personal.' },
                { word: 'Boutique hotel',  translation: 'فندق بوتيك',     example: 'The boutique hotel had unique design in each room.' },
                { word: 'Self-catering',   translation: 'شقة بمطبخ',      example: 'I prefer self-catering apartments — I can cook.' },
                { word: 'All-inclusive',   translation: 'الكل في واحد',   example: 'All-inclusive resorts include meals and drinks.' },
                { word: 'Amenities',       translation: 'وسائل الراحة',   example: 'The hotel has excellent amenities: spa, gym, pool.' },
                { word: 'En-suite',        translation: 'حمام خاص',       example: 'An en-suite room has a private bathroom.' },
                { word: 'Complimentary',   translation: 'مجاني',          example: 'Complimentary breakfast is included.' },
                { word: 'Shared facilities', translation: 'مرافق مشتركة', example: 'In a hostel, you often use shared facilities.' },
                { word: 'Resort',          translation: 'منتجع',          example: 'We stayed at a beach resort in Sharm El-Sheikh.' },
              ],
              key_points: [
                '**All-inclusive** means meals, drinks, and activities are included in one price — great for families on a budget.',
                '**Self-catering** accommodation has kitchen facilities — ideal for longer stays or groups who prefer home cooking.',
                '"**Complimentary**" means free as part of your stay — complimentary breakfast, Wi-Fi, or parking.',
              ],
              tips: [
                'Hostels are not just for students — many offer private rooms alongside dormitories, and they\'re a great way to meet other travellers.',
                'When booking, check what "all-inclusive" actually covers — some resorts include alcoholic drinks, others don\'t.',
              ],
              fun_fact: 'The world\'s first hotel to officially be rated 7-star is the Burj Al Arab in Dubai — though the actual industry standard only goes up to 5 stars!',
              exercises: [
                { type: 'multiple_choice', question: 'What is a "hostel" best known for?', options: ['Luxury', 'Budget-friendly prices', 'Only for families', 'Fine dining'], answer: 1 },
                { type: 'fill_blank',      question: 'The hotel offers ___ breakfast every morning. (مجاني)', answer: 'complimentary', hint: 'Free of charge' },
                { type: 'match',           question: 'Match accommodation words', pairs: [['Hostel','نزل شبابي'],['Amenities','وسائل الراحة'],['En-suite','حمام خاص'],['All-inclusive','الكل في واحد']] },
                { type: 'multiple_choice', question: '"Self-catering" accommodation means:', options: ['Free meals included', 'Kitchen to cook yourself', 'Room service only', 'Breakfast only'], answer: 1 },
                { type: 'fill_blank',      question: 'An en-___ room has its own private bathroom.', answer: 'suite', hint: 'En-suite = private bathroom attached' },
                { type: 'multiple_choice', question: 'Which type of accommodation is best for a backpacker on a tight budget?', options: ['Boutique hotel', 'All-inclusive resort', 'Hostel', 'Bed & Breakfast'], answer: 2 },
                { type: 'fill_blank',      question: 'The hotel\'s ___ include a spa, pool, and fitness centre.', answer: 'amenities', hint: 'Facilities and services offered' },
                { type: 'multiple_choice', question: 'A "Bed & Breakfast" is best described as:', options: ['A large luxury hotel', 'A small personal accommodation with breakfast included', 'An apartment with a kitchen', 'A resort with all meals'], answer: 1 },
              ],
            },
          },
          {
            id: 'tr2l5', title: 'Story: A Memorable Trip', type: 'story', xp: 30,
            content: {
              intro: 'Read this travel story and practise your comprehension!',
              text: `**A Memorable Trip**\n\nNour had always dreamed of visiting Japan. When she finally booked her tickets for a two-week trip in spring, she could barely contain her excitement.\n\nShe arrived in Tokyo on a warm April morning and was immediately struck by how organised and clean everything was. The trains ran on time to the second, the streets were spotless, and even in the middle of rush hour, everyone was politely quiet.\n\nOn her third day, she visited Kyoto. The famous bamboo forest was breathtaking — tall green stalks stretching endlessly upwards, with filtered sunlight creating an almost magical atmosphere. She sat on a bench and wrote in her journal for an hour.\n\nIn a small teahouse, she met a Japanese woman named Yuki, who spoke excellent English. They shared tea and conversation for two hours, discussing their cultures, families, and dreams. When they said goodbye, Yuki gave Nour a small origami crane.\n\n"In Japan, we say 1,000 paper cranes bring good luck," Yuki explained with a smile.\n\nNour carried that crane carefully all the way home. Back in Cairo, she placed it on her desk.\n\nSomewhere in the world, she thought, Yuki was probably folding another crane — and that made her smile every time she looked at it.`,
              key_points: [
                '"**Could barely contain her excitement**" is a vivid idiom meaning she was extremely excited and could hardly hold it in.',
                'The story uses **vivid sensory description** ("filtered sunlight", "politely quiet") — a technique that brings writing to life.',
                'The ending uses **imagination and reflection** — thinking about Yuki folding cranes is a poetic way to end a travel story.',
              ],
              fun_fact: 'The Japanese art of origami (paper folding) dates back to the 6th century. The legend of 1,000 cranes became famous through the story of Sadako Sasaki, a young girl who folded cranes during her illness in 1955.',
              exercises: [
                { type: 'multiple_choice', question: 'When did Nour visit Japan?', options: ['Winter', 'Summer', 'Spring', 'Autumn'], answer: 2 },
                { type: 'fill_blank',      question: 'She was struck by how ___ and clean everything was.', answer: 'organised', hint: 'Efficient/well-arranged' },
                { type: 'multiple_choice', question: 'What did Nour do in the bamboo forest?', options: ['Took photos for an hour', 'Wrote in her journal', 'Met Yuki', 'Had tea'], answer: 1 },
                { type: 'multiple_choice', question: 'What did Yuki give Nour?', options: ['A book about Japan', 'Green tea', 'An origami crane', 'A photo'], answer: 2 },
                { type: 'fill_blank',      question: '1,000 paper cranes are said to bring good ___.', answer: 'luck', hint: 'Fortune/blessing' },
                { type: 'multiple_choice', question: 'The word "breathtaking" means:', options: ['Scary', 'Extremely beautiful', 'Very crowded', 'Disappointing'], answer: 1 },
                { type: 'fill_blank',      question: 'Nour could ___ contain her excitement when she booked the tickets.', answer: 'barely', hint: 'Hardly / almost not' },
                { type: 'multiple_choice', question: 'Where did Nour and Yuki meet?', options: ['In the bamboo forest', 'On the train', 'In a small teahouse', 'At a Tokyo market'], answer: 2 },
              ],
            },
          },
          {
            id: 'tr2l6', title: 'Sightseeing & Asking for Help', type: 'dialogue', xp: 30,
            content: {
              intro: 'Ask for help and information while sightseeing!',
              dialogue: `**Tourist:** Excuse me, could you help me? I'm looking for the National Museum.\n\n**Local:** Of course! It's about a 10-minute walk from here. Go straight down this road until you reach a big roundabout.\n\n**Tourist:** Okay, straight ahead...\n\n**Local:** Yes, then turn left. You'll see a large park on your right. The museum is right opposite the park — you can't miss it.\n\n**Tourist:** Is it open today? I heard museums are sometimes closed on Mondays.\n\n**Local:** The National Museum is open every day actually, from 9 AM to 5 PM. But it gets very crowded after 11 AM, so I'd recommend going early.\n\n**Tourist:** Good tip! Is there an entrance fee?\n\n**Local:** Yes — 50 Egyptian pounds for adults, 25 for students. Students need to show their ID.\n\n**Tourist:** That's very reasonable. Are there guided tours available?\n\n**Local:** Yes, tours start at 10 AM and 2 PM. They last about 90 minutes and are very informative.\n\n**Tourist:** Perfect! This has been incredibly helpful. Thank you so much.\n\n**Local:** My pleasure! Enjoy your visit!`,
              vocabulary: [
                { word: 'Entrance fee',    translation: 'رسوم الدخول',    example: 'The entrance fee is $5 per person.' },
                { word: 'Guided tour',     translation: 'جولة مع مرشد',   example: 'A guided tour is more informative.' },
                { word: 'Informative',     translation: 'معلوماتي/مفيد',  example: 'The exhibition was very informative.' },
                { word: 'Reasonable',      translation: 'معقول',          example: 'The prices here are very reasonable.' },
                { word: 'Crowded',         translation: 'مزدحم',          example: 'The market is crowded on weekends.' },
                { word: 'Student ID',      translation: 'بطاقة الطالب',   example: 'Show your student ID for the discount.' },
                { word: 'Attraction',      translation: 'معلم سياحي',     example: 'The Pyramids are Egypt\'s most famous attraction.' },
              ],
              key_points: [
                'When asking about a tourist attraction, always ask: **opening hours**, **entrance fee**, **guided tours**, and **best time to visit**.',
                '**"I\'d recommend going early"** — locals often have the best tips to avoid crowds.',
                'Carry your **student ID** when travelling — many museums worldwide offer significant student discounts.',
              ],
              fun_fact: 'The world\'s most visited museum is the Louvre in Paris, with over 9 million visitors annually. Its most famous painting — the Mona Lisa — is actually quite small: only 77 × 53 cm!',
              exercises: [
                { type: 'multiple_choice', question: 'What time does the museum open?', options: ['8 AM', '9 AM', '10 AM', '11 AM'], answer: 1 },
                { type: 'fill_blank',      question: 'The museum is ___ the park.', answer: 'opposite', hint: 'Facing/across from' },
                { type: 'multiple_choice', question: 'What time do guided tours start?', options: ['9 AM and 1 PM', '10 AM and 2 PM', '11 AM and 3 PM', '10 AM and 3 PM'], answer: 1 },
                { type: 'fill_blank',      question: 'The entrance fee is very ___ — only 50 pounds.', answer: 'reasonable', hint: 'Fair/affordable' },
                { type: 'reorder',         question: 'Reorder: [miss / can\'t / it / You]', words: ["miss","can't","it","You"], answer: "You can't miss it" },
                { type: 'multiple_choice', question: 'Why does the local recommend going before 11 AM?', options: ['The tours are cheaper in the morning', 'It gets very crowded after 11 AM', 'The museum closes at noon', 'The best exhibits are in the morning only'], answer: 1 },
                { type: 'fill_blank',      question: 'Students need to show their ___ for the reduced price.', answer: 'ID', hint: 'Identification card' },
                { type: 'multiple_choice', question: 'How long does the guided tour last?', options: ['60 minutes', '90 minutes', '2 hours', '45 minutes'], answer: 1 },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  KIDS ENGLISH
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'kids',
    title: 'Kids English',
    level: 'A1 (Ages 6–12)',
    description: 'Fun, colourful English lessons for children! Learn through stories, songs, games and exciting exercises.',
    color: '#EC4899',
    icon: '🌈',
    xpPerLesson: 15,
    units: [
      {
        id: 'k1', title: 'Hello World!', icon: '👋',
        lessons: [
          {
            id: 'k1l1', title: 'Hello! My Name Is...', type: 'vocabulary', xp: 15,
            content: {
              intro: '👋 Welcome! Let\'s learn how to say hello and tell people your name!',
              vocabulary: [
                { word: 'Hello!',           translation: 'مرحباً!',        example: 'Hello! I am Ahmed.' },
                { word: 'My name is...',    translation: 'اسمي...',        example: 'My name is Sara. What is your name?' },
                { word: 'Nice to meet you!',translation: 'يسعدني لقاؤك!', example: 'Nice to meet you! I am 8 years old.' },
                { word: 'How old are you?', translation: 'كم عمرك؟',      example: 'How old are you? I am 9 years old.' },
                { word: 'Goodbye!',         translation: 'وداعاً!',        example: 'Goodbye! See you tomorrow!' },
                { word: 'Please',           translation: 'من فضلك',        example: 'Please sit down!' },
                { word: 'Thank you!',       translation: 'شكراً!',         example: 'Thank you! You are very kind!' },
              ],
              key_points: [
                'Say **"Hello!"** or **"Hi!"** to greet someone at any time of day.',
                'When you first meet someone, say: **"Nice to meet you!"**',
                'When you leave, say: **"Goodbye!"** or **"See you later!"**',
              ],
              tips: [
                'Practice saying your name in English: "My name is ___. What is your name?"',
                'Smile when you say hello — it makes people happy! 😊',
              ],
              fun_fact: 'Did you know? People say "hello" in over 6,500 different languages around the world! In English, we say Hello, Hi, Hey, and Howdy!',
              exercises: [
                { type: 'multiple_choice', question: '🌟 How do you say "مرحباً"?', options: ['Goodbye', 'Hello', 'Please', 'Thank you'], answer: 1 },
                { type: 'fill_blank',      question: 'My ___ is Ahmed. (اسمي)', answer: 'name', hint: 'My ___ is...' },
                { type: 'multiple_choice', question: '🎉 What do you say when you first meet someone?', options: ['Goodbye!', 'I am hungry!', 'Nice to meet you!', 'See you later!'], answer: 2 },
                { type: 'reorder',         question: '🧩 Make a sentence: [is / name / My / Sara]', words: ['is','name','My','Sara'], answer: 'My name is Sara' },
                { type: 'fill_blank',      question: '🌙 ___ ! See you tomorrow! (وداعاً)', answer: 'Goodbye', hint: 'What you say when leaving' },
                { type: 'multiple_choice', question: '🙏 What do you say to be polite when asking for something?', options: ['Give me!', 'I want!', 'Please!', 'Now!'], answer: 2 },
                { type: 'fill_blank',      question: '😊 ___ you! (شكراً)', answer: 'Thank', hint: 'Thank ___!' },
                { type: 'multiple_choice', question: '👋 When do you say "Hello"?', options: ['Only in the morning', 'Only at night', 'Only to friends', 'Any time of day!'], answer: 3 },
              ],
            },
          },
          {
            id: 'k1l2', title: 'Numbers 1–20', type: 'vocabulary', xp: 15,
            content: {
              intro: '🔢 Let\'s count from 1 to 20! Can you learn all the numbers?',
              vocabulary: [
                { word: 'One, Two, Three',     translation: 'واحد، اثنان، ثلاثة',       example: 'One cat, two dogs, three birds!' },
                { word: 'Four, Five, Six',      translation: 'أربعة، خمسة، ستة',        example: 'I have five fingers on each hand.' },
                { word: 'Seven, Eight, Nine',   translation: 'سبعة، ثمانية، تسعة',      example: 'Seven days in a week.' },
                { word: 'Ten, Eleven, Twelve',  translation: 'عشرة، أحد عشر، اثنا عشر', example: 'Twelve months in a year.' },
                { word: 'Thirteen to Twenty',   translation: 'ثلاثة عشر إلى عشرون',     example: 'Sixteen candles on the birthday cake!' },
              ],
              key_points: [
                'Numbers 1–12 each have a unique name to memorize.',
                'Numbers 13–19 end in **"-teen"**: thirteen, fourteen, fifteen...',
                '**Twenty** = 20. After twenty: twenty-one, twenty-two, twenty-three...',
              ],
              tips: [
                'Count objects around you to practise: fingers, books, chairs, windows!',
                'Sing number songs to remember them — music makes learning fun! 🎵',
              ],
              fun_fact: 'Did you know? English numbers are used all over the world! When you go shopping or travel, you can use English numbers everywhere!',
              exercises: [
                { type: 'multiple_choice', question: '🎈 How many fingers do we have on both hands?', options: ['Eight', 'Nine', 'Ten', 'Twelve'], answer: 2 },
                { type: 'fill_blank',      question: '⭐ One, two, ___, four, five!', answer: 'three', hint: 'Between 2 and 4' },
                { type: 'multiple_choice', question: '📅 How many days are in a week?', options: ['Five', 'Six', 'Seven', 'Eight'], answer: 2 },
                { type: 'fill_blank',      question: '🍎 There are ___ months in a year.', answer: 'twelve', hint: 'Write the number in words' },
                { type: 'multiple_choice', question: '🌟 What comes after nineteen?', options: ['Eighteen', 'Twenty-one', 'Fifteen', 'Twenty'], answer: 3 },
                { type: 'fill_blank',      question: '🕯️ She is ___ years old! (15)', answer: 'fifteen', hint: 'Fifteen candles!' },
                { type: 'multiple_choice', question: '🐑 How many sheep? 🐑🐑🐑🐑🐑🐑🐑', options: ['Five', 'Six', 'Seven', 'Eight'], answer: 2 },
                { type: 'fill_blank',      question: '📚 I have ___ books in my bag. (11)', answer: 'eleven', hint: '10 + 1 = ??' },
              ],
            },
          },
          {
            id: 'k1l3', title: 'Colors of the Rainbow', type: 'vocabulary', xp: 15,
            content: {
              intro: '🌈 Let\'s learn all the beautiful colors!',
              vocabulary: [
                { word: 'Red 🔴',    translation: 'أحمر', example: 'The apple is red. 🍎' },
                { word: 'Orange 🟠', translation: 'برتقالي', example: 'Oranges are orange! 🍊' },
                { word: 'Yellow 🟡', translation: 'أصفر', example: 'The sun is yellow. ☀️' },
                { word: 'Green 🟢',  translation: 'أخضر', example: 'Grass is green. 🌿' },
                { word: 'Blue 🔵',   translation: 'أزرق', example: 'The sky is blue. 🌤️' },
                { word: 'Purple 🟣', translation: 'بنفسجي', example: 'Grapes are purple. 🍇' },
                { word: 'Pink 🩷',   translation: 'وردي', example: 'Flamingos are pink. 🦩' },
                { word: 'White ⚪',  translation: 'أبيض', example: 'Snow is white. ❄️' },
                { word: 'Black ⚫',  translation: 'أسود', example: 'Night is black. 🌙' },
                { word: 'Brown 🟤',  translation: 'بني', example: 'Chocolate is brown! 🍫' },
              ],
              key_points: [
                'Use **"is"** to describe one thing: "The apple **is** red."',
                'Use **"are"** for more than one thing: "Apples **are** red."',
                'You can mix colors: red + yellow = **orange**, blue + yellow = **green**!',
              ],
              tips: [
                'Look around the room and say colors in English: "The wall is white. The door is brown."',
                'Draw a rainbow and label each color in English! 🌈',
              ],
              fun_fact: 'A rainbow always has the same 7 colors in the same order: Red, Orange, Yellow, Green, Blue, Indigo, Violet. Remember: ROY G BIV!',
              exercises: [
                { type: 'multiple_choice', question: '☀️ What color is the sun?', options: ['Blue', 'Green', 'Yellow', 'Red'], answer: 2 },
                { type: 'fill_blank',      question: '🍎 Apples are ___.', answer: 'red', hint: 'A warm color' },
                { type: 'multiple_choice', question: '🌤️ The sky is:', options: ['Green', 'Blue', 'Yellow', 'Pink'], answer: 1 },
                { type: 'match',           question: '🌈 Match the colors!', pairs: [['Red','أحمر'],['Blue','أزرق'],['Green','أخضر'],['Yellow','أصفر']] },
                { type: 'fill_blank',      question: '❄️ Snow is ___.', answer: 'white', hint: 'Opposite of black' },
                { type: 'multiple_choice', question: '🍫 What color is chocolate?', options: ['Yellow', 'Pink', 'Brown', 'Purple'], answer: 2 },
                { type: 'fill_blank',      question: '🍇 Grapes are ___.', answer: 'purple', hint: 'A mix of red and blue' },
                { type: 'multiple_choice', question: '🌙 At night the sky is:', options: ['White', 'Yellow', 'Blue', 'Black'], answer: 3 },
              ],
            },
          },
          {
            id: 'k1l4', title: 'Animals & Sounds', type: 'vocabulary', xp: 15,
            content: {
              intro: '🐾 Let\'s learn animals and the sounds they make!',
              vocabulary: [
                { word: 'Dog 🐕',    translation: 'كلب',    example: 'A dog says: WOOF WOOF!' },
                { word: 'Cat 🐈',    translation: 'قطة',    example: 'A cat says: MEOW!' },
                { word: 'Cow 🐄',    translation: 'بقرة',   example: 'A cow says: MOO!' },
                { word: 'Sheep 🐑',  translation: 'خروف',   example: 'A sheep says: BAA!' },
                { word: 'Duck 🦆',   translation: 'بطة',    example: 'A duck says: QUACK QUACK!' },
                { word: 'Lion 🦁',   translation: 'أسد',    example: 'A lion says: ROAR!' },
                { word: 'Elephant 🐘', translation: 'فيل', example: 'Elephants are the biggest land animals!' },
                { word: 'Bird 🐦',   translation: 'طائر',   example: 'Birds can fly! TWEET TWEET!' },
              ],
              key_points: [
                'Animals that live on farms: **cow, sheep, duck, dog**.',
                'Wild animals: **lion, elephant**.',
                'We say an animal **"says"** a sound: "A dog **says** WOOF!"',
              ],
              tips: [
                'Make the animal sounds out loud when you practise — it\'s fun and helps you remember! 🎉',
                'Draw each animal and write its name next to it!',
              ],
              fun_fact: 'Did you know? Elephants are the only animals that cannot jump! But they are fantastic swimmers and use their trunks like snorkels! 🐘',
              exercises: [
                { type: 'multiple_choice', question: '🐕 What sound does a dog make?', options: ['MEOW', 'MOO', 'WOOF WOOF', 'QUACK'], answer: 2 },
                { type: 'fill_blank',      question: '🐄 A cow says: ___!', answer: 'MOO', hint: 'The sound a cow makes' },
                { type: 'multiple_choice', question: '🦁 Which animal says ROAR?', options: ['Sheep', 'Duck', 'Cat', 'Lion'], answer: 3 },
                { type: 'match',           question: '🎯 Match animals to their sounds!', pairs: [['Dog','WOOF'],['Cat','MEOW'],['Duck','QUACK'],['Cow','MOO']] },
                { type: 'fill_blank',      question: '🐦 ___ can fly!', answer: 'Birds', hint: 'Animals with wings' },
                { type: 'multiple_choice', question: '🐑 A sheep says:', options: ['MOO', 'QUACK', 'BAA', 'ROAR'], answer: 2 },
                { type: 'fill_blank',      question: '🐘 ___ are the biggest land animals!', answer: 'Elephants', hint: 'The largest animal on land' },
                { type: 'multiple_choice', question: '🐦 What do birds do that most animals cannot?', options: ['Run fast', 'Swim', 'Fly', 'Sleep standing up'], answer: 2 },
              ],
            },
          },
          {
            id: 'k1l5', title: 'My Body', type: 'vocabulary', xp: 15,
            content: {
              intro: '🧍 Let\'s learn the parts of the body!',
              vocabulary: [
                { word: 'Head 👤',   translation: 'رأس',   example: 'I wear a hat on my head.' },
                { word: 'Eyes 👀',   translation: 'عيون',  example: 'I have two eyes to see.' },
                { word: 'Nose 👃',   translation: 'أنف',   example: 'I smell with my nose.' },
                { word: 'Mouth 👄',  translation: 'فم',    example: 'I eat and speak with my mouth.' },
                { word: 'Ears 👂',   translation: 'آذان',  example: 'I hear with my ears.' },
                { word: 'Hands 🤲',  translation: 'يدان',  example: 'I write with my hands.' },
                { word: 'Feet 🦶',   translation: 'قدمان', example: 'I walk with my feet.' },
                { word: 'Tummy 🫃',  translation: 'بطن',   example: 'My tummy is hungry!' },
              ],
              key_points: [
                'We have **two** of some body parts: two eyes, two ears, two hands, two feet.',
                'We have **one** of some body parts: one nose, one mouth, one tummy.',
                'Each body part has a **job**: eyes = see, ears = hear, nose = smell, mouth = eat/talk.',
              ],
              tips: [
                'Point to each body part and say its name in English — "This is my nose! This is my ear!"',
                'Sing "Head, Shoulders, Knees and Toes" — it\'s a fun way to learn body parts! 🎵',
              ],
              fun_fact: 'Did you know? Your nose can smell over 1 TRILLION different smells! And your eyes can see about 10 million different colors! Amazing! 👃👀',
              exercises: [
                { type: 'multiple_choice', question: '👀 What do we use to see?', options: ['Ears', 'Nose', 'Eyes', 'Mouth'], answer: 2 },
                { type: 'fill_blank',      question: '✋ I write with my ___.', answer: 'hands', hint: 'The body parts at the end of your arms' },
                { type: 'multiple_choice', question: '👂 What do we use to hear?', options: ['Eyes', 'Nose', 'Mouth', 'Ears'], answer: 3 },
                { type: 'match',           question: '🎯 Match body parts!', pairs: [['Eyes','عيون'],['Nose','أنف'],['Ears','آذان'],['Feet','قدمان']] },
                { type: 'fill_blank',      question: '🦶 I walk with my ___.', answer: 'feet', hint: 'Bottom of your legs' },
                { type: 'multiple_choice', question: '👃 What do we use to smell?', options: ['Mouth', 'Nose', 'Ears', 'Eyes'], answer: 1 },
                { type: 'fill_blank',      question: '😋 I eat with my ___.', answer: 'mouth', hint: 'On your face, below your nose' },
                { type: 'multiple_choice', question: '🤲 How many hands do we have?', options: ['One', 'Two', 'Three', 'Four'], answer: 1 },
              ],
            },
          },
          {
            id: 'k1l6', title: 'Story: The Little Red Hen', type: 'story', xp: 15,
            content: {
              intro: '📖 Let\'s read a fun story! The Little Red Hen!',
              text: `**The Little Red Hen** 🐔\n\nOnce upon a time, there was a Little Red Hen. She lived on a farm with a cat 🐱, a dog 🐕, and a duck 🦆.\n\nOne day, the Little Red Hen found some seeds. "Who will help me plant these seeds?" she asked.\n\n"Not I!" said the cat.\n"Not I!" said the dog.\n"Not I!" said the duck.\n\n"Then I will do it myself!" said the Little Red Hen. And she did.\n\nThe seeds grew into wheat 🌾. "Who will help me cut the wheat?" she asked.\n\n"Not I!" said the cat.\n"Not I!" said the dog.\n"Not I!" said the duck.\n\n"Then I will do it myself!" And she did.\n\nFinally, she baked a beautiful loaf of bread 🍞.\n\n"Who will help me eat the bread?" she asked.\n\n"I will!" said the cat.\n"I will!" said the dog.\n"I will!" said the duck.\n\n"No!" said the Little Red Hen. "I will eat it myself. I did all the work!"\n\nAnd she ate every last piece! 😄\n\n**The End! 🌟**\n\n*Lesson: If you help with the work, you get to share the reward!*`,
              key_points: [
                '"**Not I!"** means "I will not do it" — it\'s a polite but firm refusal.',
                '"**Once upon a time**" — this is how many English stories begin!',
                'The lesson of the story: if you **help** with the work, you get to **share** the reward.',
              ],
              fun_fact: 'The Little Red Hen is a famous folk tale told in many countries! It teaches children about the importance of working together and helping others. 🌾',
              exercises: [
                { type: 'multiple_choice', question: '🐔 Where did the Little Red Hen live?', options: ['In a house', 'On a farm', 'In a forest', 'In a city'], answer: 1 },
                { type: 'multiple_choice', question: '🌱 What did the Hen find?', options: ['Bread', 'Corn', 'Seeds', 'Flowers'], answer: 2 },
                { type: 'fill_blank',      question: '"Not ___ !" said the cat, dog and duck.', answer: 'I', hint: 'First person pronoun' },
                { type: 'multiple_choice', question: '🍞 What did the Hen make?', options: ['A cake', 'A pie', 'A loaf of bread', 'Cookies'], answer: 2 },
                { type: 'multiple_choice', question: '🌟 What is the lesson of the story?', options: ['Cats are lazy', 'If you help with work, you share the reward', 'Hens are selfish', 'Ducks don\'t like bread'], answer: 1 },
                { type: 'fill_blank',      question: '"Once ___ a time, there was a Little Red Hen."', answer: 'upon', hint: 'Once upon a time...' },
                { type: 'multiple_choice', question: '🐔 Who lived on the farm?', options: ['A hen, a cat, and a fish', 'A hen, a cat, a dog, and a duck', 'A hen and a dog only', 'A hen, a cow, and a sheep'], answer: 1 },
                { type: 'fill_blank',      question: '"I will ___ it myself!" said the Little Red Hen.', answer: 'do', hint: 'She will do the work alone' },
              ],
            },
          },
        ],
      },
      {
        id: 'k2', title: 'My World', icon: '🌍',
        lessons: [
          {
            id: 'k2l1', title: 'My Family', type: 'vocabulary', xp: 15,
            content: {
              intro: '👨‍👩‍👧‍👦 Let\'s learn about family members!',
              vocabulary: [
                { word: 'Mother 👩',       translation: 'أم', example: 'My mother is kind and beautiful.' },
                { word: 'Father 👨',       translation: 'أب', example: 'My father is strong and funny.' },
                { word: 'Sister 👧',       translation: 'أخت', example: 'My sister likes to dance.' },
                { word: 'Brother 👦',      translation: 'أخ', example: 'My brother plays football.' },
                { word: 'Grandmother 👵',  translation: 'جدة', example: 'My grandmother makes yummy cookies!' },
                { word: 'Grandfather 👴',  translation: 'جد', example: 'My grandfather tells great stories.' },
                { word: 'Baby 👶',         translation: 'طفل رضيع', example: 'The baby is very cute!' },
                { word: 'Uncle / Aunt',    translation: 'عم/خال/عمة/خالة', example: 'My uncle is very funny!' },
              ],
              key_points: [
                'Use **"My"** to talk about your family: "My mother", "My brother", "My sister".',
                '**Parents** = mother + father together.',
                '**Grandparents** = grandmother + grandfather.',
              ],
              tips: [
                'Draw your family tree and write each person\'s name and family word in English!',
                'Practice saying: "I have a brother. His name is ___. I have a sister. Her name is ___."',
              ],
              fun_fact: 'Did you know? In English, "Mom" and "Mum" both mean mother — "Mom" is American English and "Mum" is British English! Both are correct! 🇺🇸🇬🇧',
              exercises: [
                { type: 'multiple_choice', question: '👩 Who is your mother?', options: ['Your father\'s mother', 'Your female parent', 'Your sister', 'Your aunt'], answer: 1 },
                { type: 'fill_blank',      question: 'My ___ tells great stories! (جد)', answer: 'grandfather', hint: 'Your father\'s father' },
                { type: 'match',           question: '🎯 Match family words!', pairs: [['Mother','أم'],['Father','أب'],['Sister','أخت'],['Brother','أخ']] },
                { type: 'multiple_choice', question: '👶 What is a "baby"?', options: ['A very young child', 'A grandfather', 'A sister', 'A teacher'], answer: 0 },
                { type: 'fill_blank',      question: 'My ___ makes yummy cookies! (جدة)', answer: 'grandmother', hint: 'Your father\'s or mother\'s mother' },
                { type: 'multiple_choice', question: '👨‍👩‍👧‍👦 "Parents" means:', options: ['Brothers and sisters', 'Grandparents', 'Mother and father', 'Uncles and aunts'], answer: 2 },
                { type: 'fill_blank',      question: 'My ___ plays football every Saturday! (أخ)', answer: 'brother', hint: 'A male sibling' },
                { type: 'multiple_choice', question: '👧 Your sister is your:', options: ['Male sibling', 'Female parent', 'Female sibling', 'Grandmother'], answer: 2 },
              ],
            },
          },
          {
            id: 'k2l2', title: 'Food I Like', type: 'vocabulary', xp: 15,
            content: {
              intro: '🍕 Let\'s learn yummy food words!',
              vocabulary: [
                { word: 'Pizza 🍕',        translation: 'بيتزا', example: 'I love pizza with cheese!' },
                { word: 'Ice cream 🍦',    translation: 'آيس كريم', example: 'Ice cream is my favourite!' },
                { word: 'Apple 🍎',        translation: 'تفاحة', example: 'An apple a day is healthy!' },
                { word: 'Cake 🎂',         translation: 'كيكة', example: 'I eat cake on my birthday!' },
                { word: 'Milk 🥛',         translation: 'حليب', example: 'Milk makes your bones strong.' },
                { word: 'Sandwich 🥪',     translation: 'ساندويتش', example: 'I have a sandwich for lunch.' },
                { word: 'Banana 🍌',       translation: 'موزة', example: 'Monkeys love bananas!' },
                { word: 'Chocolate 🍫',    translation: 'شوكولاتة', example: 'Chocolate is delicious but eat a little!' },
              ],
              key_points: [
                'Use **"I love"** for your favourite food: "I love pizza!"',
                'Use **"I like"** for food you enjoy: "I like apples."',
                'Use **"I don\'t like"** for food you don\'t enjoy: "I don\'t like vegetables!"',
              ],
              tips: [
                'Make a list of 5 foods you love in English!',
                'Practice saying: "My favourite food is ___!"',
              ],
              fun_fact: 'Did you know? Pizza was invented in Italy, but today Americans eat about 3 billion pizzas every year — that\'s about 23 pounds of pizza per person! 🍕',
              exercises: [
                { type: 'multiple_choice', question: '🍦 What is your favourite cold sweet?', options: ['Milk', 'Ice cream', 'Bread', 'Rice'], answer: 1 },
                { type: 'fill_blank',      question: '🎂 I eat ___ on my birthday!', answer: 'cake', hint: 'Birthday ___' },
                { type: 'match',           question: '🍕 Match the foods!', pairs: [['Pizza','بيتزا'],['Milk','حليب'],['Apple','تفاحة'],['Banana','موزة']] },
                { type: 'multiple_choice', question: '🐒 What do monkeys love?', options: ['Pizza', 'Milk', 'Bananas', 'Cake'], answer: 2 },
                { type: 'fill_blank',      question: '🥛 ___ makes your bones strong!', answer: 'Milk', hint: 'A white drink from cows' },
                { type: 'multiple_choice', question: '🥪 When do you eat a sandwich?', options: ['For breakfast only', 'For lunch or a snack', 'Only for dinner', 'Never'], answer: 1 },
                { type: 'fill_blank',      question: '🍎 An ___ a day keeps the doctor away!', answer: 'apple', hint: 'A red or green fruit' },
                { type: 'multiple_choice', question: '🍫 When should you eat chocolate?', options: ['All day every day', 'A little, not too much', 'Never', 'Only on weekdays'], answer: 1 },
              ],
            },
          },
          {
            id: 'k2l3', title: 'School Subjects', type: 'vocabulary', xp: 15,
            content: {
              intro: '🏫 What do you study at school? Let\'s learn!',
              vocabulary: [
                { word: 'English 📚',   translation: 'الإنجليزية', example: 'I learn English every day.' },
                { word: 'Maths ➕',     translation: 'رياضيات', example: '2 + 2 = 4. I love maths!' },
                { word: 'Science 🔬',  translation: 'علوم', example: 'Science is about how the world works.' },
                { word: 'Art 🎨',      translation: 'فنون', example: 'In art class, I draw and paint.' },
                { word: 'Music 🎵',    translation: 'موسيقى', example: 'I play the guitar in music class.' },
                { word: 'PE / Sports ⚽', translation: 'التربية البدنية', example: 'PE is my favourite — I love running!' },
                { word: 'Geography 🗺️', translation: 'جغرافيا', example: 'I learn about countries in geography.' },
                { word: 'History 📜',  translation: 'تاريخ', example: 'History teaches us about the past.' },
              ],
              key_points: [
                'Use **"I study"** + subject: "I study English every day."',
                'Use **"I love / like / don\'t like"** + subject: "I love Art!"',
                '**PE** stands for Physical Education — it\'s the sports class!',
              ],
              tips: [
                'Make a timetable in English showing which subject you have each day!',
                'Practice saying: "My favourite subject is ___ because ___."',
              ],
              fun_fact: 'Did you know? Children in Finland only start school at age 7, but Finnish students score among the highest in the world in reading and science! 📚',
              exercises: [
                { type: 'multiple_choice', question: '🎨 In which class do you draw and paint?', options: ['Maths', 'Science', 'Art', 'History'], answer: 2 },
                { type: 'fill_blank',      question: '⚽ ___ is my favourite class — I love running!', answer: 'PE', hint: 'Physical Education' },
                { type: 'multiple_choice', question: '🗺️ What do you learn in Geography?', options: ['Numbers', 'Animals', 'Countries and places', 'Music'], answer: 2 },
                { type: 'match',           question: '📚 Match subjects!', pairs: [['English','الإنجليزية'],['Maths','رياضيات'],['Art','فنون'],['Music','موسيقى']] },
                { type: 'fill_blank',      question: '🔬 ___ is about how the world works.', answer: 'Science', hint: 'Experiments and discoveries!' },
                { type: 'multiple_choice', question: '📜 What does History teach us?', options: ['Numbers and sums', 'About the past', 'How to draw', 'Countries and maps'], answer: 1 },
                { type: 'fill_blank',      question: '🎵 I play the guitar in ___ class.', answer: 'Music', hint: 'Songs and instruments' },
                { type: 'multiple_choice', question: '➕ In Maths, what is 2 + 2?', options: ['Three', 'Four', 'Five', 'Six'], answer: 1 },
              ],
            },
          },
          {
            id: 'k2l4', title: 'The Alphabet Song', type: 'vocabulary', xp: 15,
            content: {
              intro: '🎵 Let\'s sing and learn the English alphabet!',
              explanation: '🔤 **The English Alphabet — 26 Letters!**\n\n**Uppercase:** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n\n**Fun words for each letter:**\n🍎 **A** - Apple · 🐝 **B** - Bee · 🐱 **C** - Cat\n🐶 **D** - Dog · 🥚 **E** - Egg · 🐟 **F** - Fish\n🍇 **G** - Grape · 🏠 **H** - House · 🍦 **I** - Ice cream\n🎃 **J** - Juice · 🔑 **K** - Key · 🦁 **L** - Lion\n🌙 **M** - Moon · 👃 **N** - Nose · 🍊 **O** - Orange\n🍕 **P** - Pizza · 👸 **Q** - Queen · 🌹 **R** - Rose\n☀️ **S** - Sun · 🌳 **T** - Tree · ☂️ **U** - Umbrella\n🎻 **V** - Violin · 🌊 **W** - Wave · ❌ **X** - X-ray\n🪁 **Y** - Yo-yo · 🦓 **Z** - Zebra\n\n🎵 **Sing it!** A-B-C-D-E-F-G, H-I-J-K-L-M-N-O-P, Q-R-S, T-U-V, W-X-Y and Z! Now I know my ABCs!',
              key_points: [
                'The English alphabet has **26 letters** — from A to Z.',
                'Letters can be **uppercase** (big: A, B, C) or **lowercase** (small: a, b, c).',
                'Every English word is made of letters from this alphabet!',
              ],
              tips: [
                'Sing the Alphabet Song every morning — it\'s the fastest way to learn all 26 letters!',
                'Write each letter on a card with a picture — A = Apple, B = Bee...',
              ],
              fun_fact: 'Did you know? The letter "E" is the most common letter in the English language. The letter "Z" is the least common! 🔤',
              exercises: [
                { type: 'multiple_choice', question: '🍎 A is for ___?', options: ['Ant', 'Apple', 'Arm', 'All of these'], answer: 3 },
                { type: 'fill_blank',      question: '🦓 Z is for ___.', answer: 'Zebra', hint: 'A black and white striped animal' },
                { type: 'multiple_choice', question: '🌙 M is for ___?', options: ['Map', 'Moon', 'Mouse', 'All of these'], answer: 3 },
                { type: 'fill_blank',      question: '☀️ S is for ___.', answer: 'Sun', hint: 'The bright thing in the sky' },
                { type: 'multiple_choice', question: '🐶 How many letters are in the English alphabet?', options: ['24', '25', '26', '28'], answer: 2 },
                { type: 'fill_blank',      question: '🐟 F is for ___.', answer: 'Fish', hint: 'It lives in water' },
                { type: 'multiple_choice', question: '🦁 L is for ___?', options: ['Lamp', 'Lion', 'Lemon', 'All of these'], answer: 3 },
                { type: 'fill_blank',      question: '☂️ U is for ___.', answer: 'Umbrella', hint: 'You use it when it rains' },
              ],
            },
          },
          {
            id: 'k2l5', title: 'Story: The Very Hungry Caterpillar', type: 'story', xp: 15,
            content: {
              intro: '📖 Read this fun story about a hungry caterpillar!',
              text: `**The Very Hungry Caterpillar 🐛**\n\nOn Monday, a tiny caterpillar hatched from an egg. He was very, very hungry!\n\nOn Monday 🍎, he ate through ONE apple. But he was still hungry.\n\nOn Tuesday 🍐, he ate through TWO pears. But he was still hungry.\n\nOn Wednesday 🍓, he ate through THREE strawberries. But he was still hungry.\n\nOn Thursday 🍫, he ate through FOUR chocolates. But he was still hungry.\n\nOn Friday 🍕, he ate through FIVE slices of pizza! Yum!\n\nBut that night... he had a VERY bad tummy ache! 😣\n\nOn Saturday, he ate only one nice, green leaf. He felt much better!\n\nThen he made a cocoon 🏠 around himself. He stayed inside for two weeks.\n\nWhen he came out, he was not a caterpillar anymore. He was a beautiful butterfly! 🦋\n\n**The End! 🌟**`,
              key_points: [
                'Days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, **Saturday**, Sunday.',
                'Numbers in the story: one, two, three, four, five.',
                'The caterpillar changes from a **caterpillar** to a **butterfly** — this is called metamorphosis!',
              ],
              fun_fact: 'The Very Hungry Caterpillar is a real book written by Eric Carle in 1969! It has been translated into over 60 languages and has sold more than 50 million copies! 🐛🦋',
              exercises: [
                { type: 'multiple_choice', question: '🍎 What did the caterpillar eat on Monday?', options: ['Pears', 'Strawberries', 'An apple', 'Chocolate'], answer: 2 },
                { type: 'fill_blank',      question: '🍐 On Tuesday, he ate ___ pears.', answer: 'two', hint: 'The number 2 in words' },
                { type: 'multiple_choice', question: '😣 Why did he have a tummy ache?', options: ['He was sick', 'He ate too much', 'He fell down', 'It was cold'], answer: 1 },
                { type: 'multiple_choice', question: '🦋 What did the caterpillar become?', options: ['A bird', 'A bee', 'A butterfly', 'A dragonfly'], answer: 2 },
                { type: 'fill_blank',      question: 'He stayed in the cocoon for ___ weeks.', answer: 'two', hint: 'The number mentioned in the story' },
                { type: 'multiple_choice', question: '🍕 How many pizza slices did he eat on Friday?', options: ['Three', 'Four', 'Five', 'Six'], answer: 2 },
                { type: 'fill_blank',      question: 'On Saturday he ate one green ___ and felt better.', answer: 'leaf', hint: 'From a plant or tree' },
                { type: 'multiple_choice', question: '📅 What day did the caterpillar hatch from the egg?', options: ['Sunday', 'Friday', 'Monday', 'Wednesday'], answer: 2 },
              ],
            },
          },
          {
            id: 'k2l6', title: 'Classroom Commands', type: 'vocabulary', xp: 15,
            content: {
              intro: '🏫 Learn the commands your teacher uses in class!',
              vocabulary: [
                { word: 'Sit down! 🪑',    translation: 'اجلس!',          example: 'Everyone sit down, please!' },
                { word: 'Stand up! 🧍',    translation: 'قف!',             example: 'Stand up and stretch!' },
                { word: 'Be quiet! 🤫',    translation: 'اهدأ!',           example: 'Be quiet — the exam is starting!' },
                { word: 'Open your book! 📖', translation: 'افتح كتابك!', example: 'Open your book to page 12.' },
                { word: 'Listen carefully! 👂', translation: 'استمع بعناية!', example: 'Listen carefully to the instructions.' },
                { word: 'Write it down! ✏️', translation: 'اكتبها!',       example: 'Write it down in your notebook.' },
                { word: 'Raise your hand! ✋', translation: 'ارفع يدك!',  example: 'Raise your hand if you know the answer.' },
                { word: 'Well done! 🌟',    translation: 'أحسنت!',         example: 'Well done! That\'s correct!' },
              ],
              key_points: [
                'Classroom commands help the teacher manage the class — it\'s important to follow them!',
                'When you know the answer, always **raise your hand** — don\'t shout out.',
                '"**Well done!**" and "**Good job!**" are what your teacher says when you do something correctly!',
              ],
              tips: [
                'Practise these commands at home — ask someone to give you the command and you do the action!',
                'When you don\'t understand, say: "Could you repeat that please?" or "I don\'t understand."',
              ],
              fun_fact: 'Did you know? In some countries like Japan, students clean their own classrooms every day — it teaches them to respect their school! 🏫',
              exercises: [
                { type: 'multiple_choice', question: '✋ What do you do when you know the answer?', options: ['Shout it out', 'Raise your hand', 'Stay silent', 'Write it'], answer: 1 },
                { type: 'fill_blank',      question: '📖 ___ your book to page 10.', answer: 'Open', hint: 'Command to open' },
                { type: 'multiple_choice', question: '🌟 Your teacher says "Well done!" — what does it mean?', options: ['أعد المحاولة', 'اهدأ', 'أحسنت', 'اجلس'], answer: 2 },
                { type: 'match',           question: '🎯 Match the commands!', pairs: [['Sit down','اجلس'],['Stand up','قف'],['Be quiet','اهدأ'],['Well done','أحسنت']] },
                { type: 'fill_blank',      question: '✏️ Write it ___ in your notebook.', answer: 'down', hint: 'Write it down = record it' },
                { type: 'multiple_choice', question: '🤫 When does your teacher say "Be quiet"?', options: ['At lunch time', 'During an exam or important instruction', 'During PE class', 'At home'], answer: 1 },
                { type: 'fill_blank',      question: '👂 ___ carefully to the instructions!', answer: 'Listen', hint: 'Pay attention with your ears' },
                { type: 'multiple_choice', question: '🧍 "Stand up!" means:', options: ['Sit down', 'Be quiet', 'Get up from your seat', 'Raise your hand'], answer: 2 },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  ACADEMIC ENGLISH
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'academic',
    title: 'Academic English',
    level: 'B2–C1',
    description: 'Master university-level English: academic writing, critical reading, research skills, and presentation techniques.',
    color: '#6366F1',
    icon: '🎓',
    xpPerLesson: 45,
    units: [
      {
        id: 'ac1', title: 'Academic Writing', icon: '✍️',
        lessons: [
          {
            id: 'ac1l1', title: 'Academic Writing Style', type: 'grammar', xp: 45,
            content: {
              intro: 'Master the formal style required in academic writing!',
              explanation: '📝 **Academic Writing Style:**\n\n**Key principles:**\n\n1️⃣ **Formal vocabulary**\n❌ *get* → ✅ *obtain / acquire*\n❌ *show* → ✅ *demonstrate / illustrate*\n❌ *use* → ✅ *utilise / employ*\n❌ *think* → ✅ *argue / contend / maintain*\n❌ *a lot of* → ✅ *a significant number of / considerable*\n\n2️⃣ **Avoid contractions**\n❌ *it\'s, don\'t, can\'t* → ✅ *it is, do not, cannot*\n\n3️⃣ **Use passive voice** (focus on research, not the researcher)\n❌ *I conducted a survey* → ✅ *A survey was conducted*\n\n4️⃣ **Hedging language** (avoid absolute statements)\n❌ *This proves that...* → ✅ *This suggests / indicates that...*\n❌ *All students fail...* → ✅ *Many students tend to...*\n\n5️⃣ **Nominalization** (turn verbs into nouns)\n❌ *analyse* → ✅ *analysis*\n❌ *investigate* → ✅ *investigation*',
              key_points: [
                'Academic writing avoids **contractions** (it\'s → it is), **slang**, and **first-person** wherever possible.',
                '**Hedging** (may, might, suggests, indicates) is required — avoid absolute claims like "This proves..."',
                '**Nominalization** makes writing denser and more formal: "The investigation was conducted" rather than "We investigated."',
                'Use **passive voice** to focus on research findings, not the researcher.',
              ],
              common_mistakes: [
                { wrong: 'The results show a lot of improvement.', correct: 'The results demonstrate considerable improvement.', explanation: '"Show" and "a lot of" are too informal for academic writing.' },
                { wrong: 'I think this proves that technology is bad.', correct: 'This evidence suggests that technology may have negative effects.', explanation: '"I think" and "proves" should be avoided — use hedging language instead.' },
                { wrong: 'It\'s clear that we need to do more research.', correct: 'It is evident that further research is required.', explanation: 'Expand contractions and use more formal vocabulary.' },
              ],
              tips: [
                'Before submitting academic work, do a "contraction check" — search for apostrophes (\'s, n\'t, \'re) and expand them.',
                'Build a personal list of informal→formal word swaps: get→obtain, show→demonstrate, use→utilise.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Which is more appropriate for academic writing?', options: ['The results show a lot of improvement.', 'The results demonstrate considerable improvement.', 'The results are really good.', 'We got better results.'], answer: 1 },
                { type: 'fill_blank',      question: 'The formal academic word for "use" is ___.', answer: 'utilise', hint: 'A more formal synonym' },
                { type: 'multiple_choice', question: 'Which sentence uses correct academic hedging?', options: ['This proves all students struggle.', 'This suggests many students may struggle.', 'I think students struggle.', 'Students definitely struggle.'], answer: 1 },
                { type: 'fill_blank',      question: '"Don\'t" should be written as ___ in academic writing.', answer: 'do not', hint: 'Expand the contraction' },
                { type: 'multiple_choice', question: 'The academic passive form of "I surveyed 50 students" is:', options: ['50 students were surveyed.', 'I did survey 50 students.', '50 students have surveyed.', 'We surveyed 50 students.'], answer: 0 },
                { type: 'fill_blank',      question: 'The nominalization of "analyse" is ___.', answer: 'analysis', hint: 'The noun form' },
                { type: 'multiple_choice', question: 'Which word is most appropriate in academic writing?', options: ['get', 'obtain', 'grab', 'pick up'], answer: 1 },
                { type: 'fill_blank',      question: 'The nominalization of "investigate" is ___.', answer: 'investigation', hint: 'Turn the verb into a noun' },
              ],
            },
          },
          {
            id: 'ac1l2', title: 'Essay Structure', type: 'writing', xp: 45,
            content: {
              intro: 'Learn the perfect structure for academic essays!',
              explanation: '📝 **Academic Essay Structure:**\n\n**Introduction (~10-15% of word count):**\n• Hook/opening statement\n• Background context\n• Thesis statement (your main argument)\n• Outline of structure (In this essay, I will firstly... secondly... finally...)\n\n**Body Paragraphs (PEEL structure):**\n• **P**oint — topic sentence stating the main idea\n• **E**vidence — quote, data, or example\n• **E**xplanation — analyse the evidence\n• **L**ink — connect back to thesis/lead to next point\n\n**Conclusion (~10% of word count):**\n• Restate thesis (different words)\n• Summarise key points\n• Broader implications / recommendations\n• Final thought\n\n**Useful academic phrases:**\n📌 *This essay will argue that...*\n📌 *Evidence suggests that...*\n📌 *As demonstrated above...*\n📌 *In conclusion, it is evident that...*',
              key_points: [
                'The **introduction** should end with a clear **thesis statement** — your central argument in 1–2 sentences.',
                'Use the **PEEL structure** for every body paragraph: Point → Evidence → Explanation → Link.',
                'The **conclusion** should never introduce new arguments — only summarise and reflect on what was already discussed.',
              ],
              tips: [
                'Write your thesis statement first, before anything else — it acts as a compass for the entire essay.',
                'Aim for each body paragraph to be 150–200 words in a standard 1,000-word essay — enough to develop one idea fully.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'In PEEL, what does the "E" for Evidence involve?', options: ['Explaining your opinion', 'Providing a quote or data', 'Ending the paragraph', 'Expanding the argument'], answer: 1 },
                { type: 'fill_blank',      question: 'The thesis statement appears in the ___.', answer: 'introduction', hint: 'First section of the essay' },
                { type: 'multiple_choice', question: 'Which phrase is appropriate to start a conclusion?', options: ['Let me tell you about...', 'In conclusion, it is evident that...', 'I think that...', 'Firstly, I will show...'], answer: 1 },
                { type: 'fill_blank',      question: 'In PEEL, "L" stands for ___ to thesis.', answer: 'link', hint: 'Connect back' },
                { type: 'multiple_choice', question: 'Academic writing should avoid:', options: ['Passive voice', 'Formal vocabulary', 'Contractions like "it\'s"', 'Complex sentences'], answer: 2 },
                { type: 'fill_blank',      question: 'In PEEL, "P" stands for the ___ sentence of the paragraph.', answer: 'topic', hint: 'The main idea sentence' },
                { type: 'multiple_choice', question: 'The conclusion should:', options: ['Introduce new arguments', 'Only summarise and reflect on discussed points', 'Be longer than the introduction', 'Start with "In my opinion"'], answer: 1 },
                { type: 'fill_blank',      question: 'This essay will ___ that social media has changed communication.', answer: 'argue', hint: 'Present and defend a position' },
              ],
            },
          },
          {
            id: 'ac1l3', title: 'Referencing & Citations', type: 'grammar', xp: 45,
            content: {
              intro: 'Learn how to cite sources and avoid plagiarism!',
              explanation: '📚 **Referencing in Academic Writing:**\n\n**Why reference?**\n• Gives credit to original authors\n• Supports your arguments\n• Avoids plagiarism\n\n**APA Style (common in social sciences):**\n• In-text: *(Smith, 2020, p.45)*\n• Reference list: *Smith, J. (2020). Title. Publisher.*\n\n**Harvard Style:**\n• In-text: *(Smith, 2020)*\n• Reference list: *Smith, J. (2020) Title. City: Publisher.*\n\n**Signal phrases to introduce quotes:**\n• *According to Smith (2020),...*\n• *As Brown (2019) argues,...*\n• *Research by Jones (2021) suggests that...*\n• *In the words of Taylor (2018),...*\n\n**Paraphrasing (recommended over direct quotes):**\n❌ *"The results showed a 45% increase" (Smith, 2020)*\n✅ *Smith (2020) found that rates increased by nearly half.*\n\n⚠️ **Plagiarism** = using someone\'s words/ideas without credit. This is a serious academic offence!',
              key_points: [
                '**Paraphrasing** (rewriting in your own words + citing) is generally preferred over direct quotation in academic writing.',
                'Signal phrases (**"According to"**, **"As X argues"**) integrate sources smoothly and show critical engagement.',
                '**Plagiarism** includes not just copying text, but also using ideas, data, or structures without attribution.',
              ],
              common_mistakes: [
                { wrong: 'Smith (2020) says "The results showed improvement."', correct: 'Smith (2020) argues that the results demonstrated improvement.', explanation: 'Use present tense (argues, suggests, notes) when citing academic sources.' },
                { wrong: 'According to Smith, results improved.', correct: 'According to Smith (2020), results improved.', explanation: 'Always include the year in in-text citations.' },
              ],
              tips: [
                'Use a reference manager (Zotero, Mendeley) to automatically format your citations in APA, Harvard, or any other style.',
                'When paraphrasing, change both the vocabulary AND the sentence structure — changing only a few words is still considered plagiarism.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is the purpose of referencing in academic writing?', options: ['To make essays longer', 'To give credit and support arguments', 'To show off knowledge', 'To confuse readers'], answer: 1 },
                { type: 'fill_blank',      question: 'According ___ Smith (2020), results improved significantly.', answer: 'to', hint: 'According ___ someone' },
                { type: 'multiple_choice', question: 'Using someone\'s ideas without credit is called:', options: ['Summarising', 'Paraphrasing', 'Plagiarism', 'Referencing'], answer: 2 },
                { type: 'multiple_choice', question: 'Which signal phrase is correct?', options: ['Smith says...', 'According to Smith (2020),...', 'Smith think that...', 'Like Smith said,...'], answer: 1 },
                { type: 'fill_blank',      question: 'Paraphrasing means expressing someone\'s ideas in your ___ words.', answer: 'own', hint: 'Your personal/individual' },
                { type: 'multiple_choice', question: 'In APA style, what does an in-text citation include?', options: ['Author name only', 'Author and year', 'Title and page', 'Just the year'], answer: 1 },
                { type: 'fill_blank',      question: 'As Brown (2019) ___, this approach has significant limitations.', answer: 'argues', hint: 'A signal verb in present tense' },
                { type: 'multiple_choice', question: 'Which is better academic practice?', options: ['Using many direct quotes', 'Paraphrasing with citation', 'No citations at all', 'Only using old sources'], answer: 1 },
              ],
            },
          },
          {
            id: 'ac1l4', title: 'Critical Analysis', type: 'reading', xp: 45,
            content: {
              intro: 'Develop critical thinking skills for academic reading!',
              explanation: '🧠 **Critical Analysis Skills:**\n\n**What is critical analysis?**\nNot just describing what something says, but evaluating it — strengths, weaknesses, implications.\n\n**Questions to ask when reading:**\n• What is the main argument/claim?\n• What evidence is provided?\n• Is the evidence reliable? (source, date, methodology)\n• Are there any biases or assumptions?\n• What are the counter-arguments?\n• What are the implications?\n\n**Critical language:**\n📌 *While X argues that..., this view overlooks...*\n📌 *Although X provides compelling evidence, it fails to consider...*\n📌 *A significant strength of this study is...*\n📌 *However, a limitation of this approach is...*\n📌 *This finding supports / contradicts the theory that...*\n\n**Levels of engagement:**\n1. Description (what it says)\n2. Analysis (why it matters)\n3. Evaluation (how strong/weak it is)\n4. Synthesis (connecting multiple sources)',
              key_points: [
                'Critical analysis goes **beyond description** — it evaluates quality, bias, assumptions, and implications.',
                'Always consider **counter-arguments**: "While X argues... this view overlooks..." shows sophisticated thinking.',
                '**Synthesis** (connecting multiple sources to build an argument) is the highest academic skill and what distinguishes excellent work.',
              ],
              tips: [
                'When reading any academic source, annotate it: mark the main claim, supporting evidence, limitations, and any bias you notice.',
                'Practise the four levels: describe what the text says → analyse why it matters → evaluate how strong it is → synthesise with other sources.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Critical analysis means:', options: ['Describing what a text says', 'Evaluating strengths and weaknesses', 'Agreeing with everything', 'Finding spelling mistakes'], answer: 1 },
                { type: 'fill_blank',      question: 'A significant ___ of this study is its large sample size.', answer: 'strength', hint: 'Positive aspect' },
                { type: 'multiple_choice', question: 'Which phrase introduces a critical counter-argument?', options: ['Furthermore,...', 'Although X argues..., this view overlooks...', 'In conclusion,...', 'For example,...'], answer: 1 },
                { type: 'multiple_choice', question: 'What is the highest level of critical engagement?', options: ['Description', 'Analysis', 'Evaluation', 'Synthesis'], answer: 3 },
                { type: 'fill_blank',      question: 'However, a ___ of this approach is the small sample size.', answer: 'limitation', hint: 'Negative aspect/weakness' },
                { type: 'multiple_choice', question: 'When evaluating a source, "bias" refers to:', options: ['Spelling errors', 'A tendency to favour one perspective over others', 'Outdated data', 'Formal language'], answer: 1 },
                { type: 'fill_blank',      question: 'This finding ___ the theory proposed by earlier researchers.', answer: 'supports', hint: 'Agrees with / backs up' },
                { type: 'multiple_choice', question: '"While X argues... this view overlooks..." is an example of:', options: ['Summarising', 'Introducing a counter-argument', 'Concluding', 'Paraphrasing'], answer: 1 },
              ],
            },
          },
          {
            id: 'ac1l5', title: 'Reading: Climate Change Article', type: 'reading', xp: 45,
            content: {
              intro: 'Read and critically analyse an academic-style article!',
              key_points: [
                'Notice how the article presents **multiple scholarly perspectives** (Nordhaus, Stern, Keen) — this is the standard approach in academic writing.',
                '**"Anthropogenic"** = caused by human activity. This is a key academic term in environmental science.',
                'The conclusion acknowledges **limitations** of the current models — this intellectual honesty is expected in academic writing.',
              ],
              fun_fact: 'William Nordhaus shared the 2018 Nobel Prize in Economics for his work on integrating climate change into long-run macroeconomic analysis — making him the first economist to mathematically model the costs of climate change.',
              text: `**The Economic Consequences of Climate Change**\n\nThe relationship between climate change and economic development has become one of the most debated topics in contemporary policy discourse. While scientific consensus has firmly established the reality of anthropogenic climate change, economists continue to debate the magnitude of its financial implications.\n\nA landmark study by Nordhaus (2018), which earned its author the Nobel Prize in Economics, estimated that limiting global warming to 3.5°C above pre-industrial levels would cost approximately 2.1% of global GDP. This figure, while significant, was considerably lower than earlier projections by Stern (2006), who argued that unmitigated climate change could reduce global consumption by 5-20% permanently.\n\nCritics of both models, however, argue that they fundamentally underestimate the systemic risks posed by climate change. Keen (2020) contends that conventional economic models fail to account for ecological tipping points — thresholds beyond which environmental damage becomes self-reinforcing and potentially irreversible.\n\nThe distributional dimension of climate change further complicates economic analysis. Research consistently demonstrates that the most severe economic impacts will be experienced by developing nations in tropical regions, despite these countries contributing least to historical emissions. This raises profound questions of global equity and justice that purely economic models struggle to capture.\n\nIn conclusion, while economic modelling provides valuable insights into the costs of climate action and inaction, the full implications of climate change — particularly its interaction with inequality, political stability, and ecological systems — may exceed the capacity of current economic frameworks to quantify.`,
              exercises: [
                { type: 'multiple_choice', question: 'What did Nordhaus estimate climate change would cost?', options: ['2.1% of global GDP', '5-20% of consumption', '3.5% of GDP', '1% of global income'], answer: 0 },
                { type: 'fill_blank',      question: 'Nordhaus won the Nobel Prize in ___.', answer: 'Economics', hint: 'The academic field mentioned' },
                { type: 'multiple_choice', question: 'What is a "tipping point" according to Keen?', options: ['The highest temperature', 'A threshold beyond which damage becomes irreversible', 'The cost of climate action', 'The point where growth stops'], answer: 1 },
                { type: 'multiple_choice', question: 'Who will suffer the MOST severe economic impacts?', options: ['Developed wealthy nations', 'Countries with high emissions', 'Developing tropical nations', 'Island nations only'], answer: 2 },
                { type: 'fill_blank',      question: 'The article says climate change raises questions of global equity and ___.', answer: 'justice', hint: 'Fairness and ___' },
                { type: 'multiple_choice', question: 'The word "anthropogenic" in the text means:', options: ['Natural causes', 'Caused by human activity', 'Scientific theory', 'Economic factor'], answer: 1 },
              ],
            },
          },
          {
            id: 'ac1l6', title: 'Academic Presentations', type: 'speaking', xp: 45,
            content: {
              intro: 'Deliver confident academic presentations!',
              key_points: [
                'Use **signposting language** throughout: "Moving on to...", "As I mentioned...", "In conclusion..." — this guides your audience.',
                'The **opening** and **closing** are the most remembered parts of any presentation — make them strong and clear.',
                'When handling questions, **never bluff** — "I don\'t have data on that, but..." is more credible than a fabricated answer.',
              ],
              tips: [
                'Practise your opening three sentences until they\'re completely natural — starting confidently sets the tone for the whole presentation.',
                'Use pauses deliberately: a 2-second pause before a key point signals importance and gives the audience time to absorb information.',
              ],
              explanation: '🎤 **Academic Presentation Language:**\n\n**Opening:**\n• *Good morning/afternoon. Today I will be presenting my research on...*\n• *My presentation is divided into [X] sections. First, I will outline...*\n• *By the end of this presentation, you will have a clear understanding of...*\n\n**Signposting (helping the audience follow):**\n• *Moving on to my second point,...*\n• *As you can see from this slide,...*\n• *I would like to draw your attention to...*\n• *This graph illustrates the relationship between...*\n• *Before I conclude, let me summarise the key points...*\n\n**Handling questions:**\n• *That\'s an interesting question. I would argue that...*\n• *I\'m glad you raised that point. However,...*\n• *That falls slightly outside the scope of my research, but...*\n• *I don\'t have data on that specific aspect, but...*\n\n**Closing:**\n• *In conclusion, my research demonstrates that...*\n• *The implications of these findings suggest...*\n• *Thank you for your attention. I am happy to take any questions.*',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase helps the audience follow your presentation structure?', options: ['I think...', 'Moving on to my second point,...', 'Anyway,...', 'So yeah,...'], answer: 1 },
                { type: 'fill_blank',      question: 'I would like to draw your ___ to this chart.', answer: 'attention', hint: 'Focus their notice' },
                { type: 'multiple_choice', question: 'When you don\'t have data on something, you should say:', options: ['Make up an answer', 'I don\'t have data on that specific aspect, but...', 'Skip the question', 'Pretend you didn\'t hear'], answer: 1 },
                { type: 'fill_blank',      question: 'Thank you for your ___. I am happy to take questions.', answer: 'attention', hint: 'For listening/watching' },
                { type: 'reorder',         question: 'Reorder: [conclude / let / Before / I / summarise / me]', words: ['conclude','let','Before','I','summarise','me'], answer: 'Before I conclude let me summarise' },
              ],
            },
          },
        ],
      },
      {
        id: 'ac2', title: 'Research & Critical Thinking', icon: '🔬',
        lessons: [
          {
            id: 'ac2l1', title: 'Evaluating Sources', type: 'reading', xp: 45,
            content: {
              intro: 'Learn to critically assess the quality and reliability of sources!',
              key_points: [
                'The **CRAAP test** (Currency, Relevance, Authority, Accuracy, Purpose) is a practical checklist for evaluating any source.',
                '**Peer-reviewed** sources are checked by other experts in the field before publication — this is the gold standard for academic evidence.',
                'Even strong sources can be **biased** — always consider the author\'s perspective, funding sources, and publication context.',
              ],
              tips: [
                'For most university assignments, Wikipedia is acceptable as a starting point only — follow its references to the original sources.',
                'When assessing currency, consider the field: a 2010 source might be fine for history but outdated for technology or medicine.',
              ],
              explanation: '📖 **The CRAAP Test for Evaluating Sources:**\n\n• **C**urrency — Is the source up to date?\n• **R**elevance — Does it relate to your research?\n• **A**uthority — Who wrote it? Are they qualified?\n• **A**ccuracy — Is it supported by evidence?\n• **P**urpose — Is it to inform, persuade, or sell?\n\n**Strong sources:**\n✅ Peer-reviewed journal articles\n✅ Government and institutional reports\n✅ Books by established scholars\n\n**Weak sources:**\n❌ Anonymous websites\n❌ Wikipedia (as a primary source)\n❌ Opinion blogs without evidence\n❌ Outdated data in fast-changing fields',
              exercises: [
                { type: 'multiple_choice', question: 'The "A" for Authority in CRAAP means:', options: ['The article is accurate', 'The author is qualified and credible', 'The article is recent', 'The article has a clear purpose'], answer: 1 },
                { type: 'multiple_choice', question: 'Which is the strongest academic source?', options: ['A Wikipedia article', 'A peer-reviewed journal article', 'An opinion blog', 'A social media post'], answer: 1 },
                { type: 'fill_blank', question: 'Currency refers to whether the source is up to ___.', answer: 'date', hint: 'Recent vs old information' },
                { type: 'multiple_choice', question: 'A source written to sell a product is biased in terms of:', options: ['Currency', 'Authority', 'Purpose', 'Accuracy'], answer: 2 },
                { type: 'fill_blank', question: 'Peer-___ journal articles are generally considered the most reliable.', answer: 'reviewed', hint: 'Checked by other experts' },
                { type: 'translate', question: 'Translate: يجب تقييم المصادر بعناية قبل الاستشهاد بها', answer: 'Sources must be carefully evaluated before citing them', hint: 'must be evaluated before...' },
              ],
            },
          },
          {
            id: 'ac2l2', title: 'Paraphrasing & Avoiding Plagiarism', type: 'writing', xp: 45,
            content: {
              intro: 'Use sources ethically and paraphrase effectively!',
              key_points: [
                'True paraphrasing means changing **both the vocabulary AND the sentence structure** — changing only words is "patchwriting" and still counts as plagiarism.',
                'Always **cite the source** even when paraphrasing — using someone\'s idea without credit is plagiarism, even if the words are different.',
                'Direct quotes should be used **sparingly** in academic writing — prefer paraphrase to show you understand the material.',
              ],
              common_mistakes: [
                { wrong: 'Patchwriting: "Smith (2020) says climate modification is the most pressing dilemma confronting humankind."', correct: 'Smith (2020) argues that climate change demands immediate global action, as its effects compound over time.', explanation: 'Simply swapping synonyms is still plagiarism. You must restructure the entire sentence and add your own synthesis.' },
              ],
              tips: [
                'The "read, cover, write, check" method is the most effective for paraphrasing — if you can write from memory, you truly understood it.',
                'Use a plagiarism checker (Turnitin, Grammarly) on drafts — not just before submission, but during the writing process.',
              ],
              explanation: '✍️ **Paraphrasing vs Quoting:**\n\n**Paraphrase** — rewrite in your own words (most preferred)\n• Change vocabulary AND sentence structure\n• Keep the original meaning\n\n**Direct quote** — use sparingly, use quotation marks\n• Best for distinctive phrasing or key definitions\n\n**Steps to paraphrase:**\n1. Read the original carefully\n2. Cover it and write from memory\n3. Check you\'ve changed both words and structure\n4. Always cite the source\n\n**Citation formats:** APA, MLA, Harvard\n• APA: *(Smith, 2020, p. 45)*\n• Harvard: *(Smith 2020: 45)*\n\n**Plagiarism** = using someone else\'s ideas without credit — even accidentally.',
              exercises: [
                { type: 'multiple_choice', question: 'Paraphrasing means:', options: ['Copying text word for word', 'Rewriting ideas in your own words', 'Summarising only main points', 'Translating from another language'], answer: 1 },
                { type: 'fill_blank', question: 'When you directly quote, you must use ___ marks.', answer: 'quotation', hint: '"Like this"' },
                { type: 'multiple_choice', question: 'Plagiarism includes:', options: ['Only copying full paragraphs', 'Using any ideas without citing the source', 'Using your own analysis', 'Citing sources correctly'], answer: 1 },
                { type: 'multiple_choice', question: 'The first step in paraphrasing is:', options: ['Changing a few words', 'Reading the original carefully', 'Copying it out first', 'Finding a synonym for every word'], answer: 1 },
                { type: 'fill_blank', question: 'APA in-text citation format: (Author, year, ___ number)', answer: 'page', hint: 'p. ___' },
                { type: 'translate', question: 'Translate: الاقتباس بدون إشارة مرجعية يُعدّ سرقة أدبية', answer: 'Quoting without a reference is considered plagiarism', hint: 'is considered plagiarism' },
              ],
            },
          },
          {
            id: 'ac2l3', title: 'Academic Vocabulary: Hedging', type: 'grammar', xp: 45,
            content: {
              intro: 'Use hedging language to sound more academic and precise!',
              key_points: [
                '**Hedging** is not weakness — it shows intellectual honesty that your claims are based on evidence, not absolute certainty.',
                'Use **modal verbs** (may, might, could) + **hedging verbs** (suggest, appear, indicate) + **hedging adverbs** (possibly, generally, typically).',
                'Avoid overconfident language in academic writing: "This **proves** that..." → "This **suggests** that..."',
              ],
              common_mistakes: [
                { wrong: 'This proves that technology always improves education.', correct: 'The evidence suggests that technology may enhance educational outcomes in certain contexts.', explanation: 'Academic claims are rarely absolute. "Proves" and "always" are too strong without overwhelming evidence.' },
                { wrong: 'It is possibly maybe somewhat likely that...', correct: 'It is likely that... / Evidence suggests that...', explanation: 'Stacking multiple hedges ("possibly maybe somewhat") sounds uncertain and unclear. One hedge per claim is sufficient.' },
              ],
              tips: [
                'Hedging is especially important when interpreting results, making predictions, or generalising from limited data.',
                'Read academic papers and highlight hedging language — you\'ll be surprised how often "may", "appear to", and "tend to" appear.',
              ],
              explanation: '📝 **Hedging in Academic Writing:**\n\nHedging makes claims more cautious and academically appropriate.\n\n**Modal verbs:**\n• *may, might, could, would, should*\n• *This **may** indicate a trend.*\n\n**Adverbs:**\n• *possibly, probably, apparently, seemingly, generally*\n• *Results **generally** suggest...*\n\n**Verbs:**\n• *seem, appear, suggest, indicate, tend to*\n• *The data **suggests** that...*\n\n**Nouns:**\n• *possibility, tendency, likelihood*\n• *There is a **likelihood** that...*\n\n**Avoid overconfident claims:**\n• ❌ *This proves that technology is always beneficial.*\n• ✅ *This suggests that technology may have several benefits.*',
              exercises: [
                { type: 'multiple_choice', question: 'Which sentence uses hedging correctly?', options: ['Technology always improves lives.', 'Technology may improve quality of life in some contexts.', 'Technology never causes harm.', 'Technology is definitely the solution.'], answer: 1 },
                { type: 'fill_blank', question: 'The results ___ that further research is needed.', answer: 'suggest', hint: 'A hedging verb' },
                { type: 'multiple_choice', question: '"Possibly" is an example of a hedging:', options: ['Verb', 'Noun', 'Adverb', 'Conjunction'], answer: 2 },
                { type: 'fill_blank', question: 'There is a ___ that the results were affected by external factors.', answer: 'possibility', hint: 'A hedging noun' },
                { type: 'multiple_choice', question: 'Why do academics use hedging?', options: ['To sound less confident', 'To avoid making overly strong unsupported claims', 'To confuse the reader', 'To save space'], answer: 1 },
                { type: 'translate', question: 'Translate: يبدو أن هذه النتائج تشير إلى ارتباط', answer: 'These findings appear to suggest a correlation', hint: 'appear to suggest...' },
              ],
            },
          },
          {
            id: 'ac2l4', title: 'Reading: Peer-Reviewed Article', type: 'reading', xp: 45,
            content: {
              intro: 'Practice reading an academic journal article!',
              key_points: [
                'Academic articles follow a standard structure: **Abstract → Introduction → Methodology → Results → Discussion → Conclusion**.',
                '**"Correlation does not imply causation"** is one of the most important principles in research — two things happening together doesn\'t mean one causes the other.',
                'Notice how the discussion **hedges** the findings: "may fragment attention", "cannot be established" — this is careful academic language.',
              ],
              fun_fact: 'The peer review process typically takes 3–6 months before an article is published. Some articles wait over a year. This careful checking process is why peer-reviewed sources are considered the gold standard in academia.',
              text: `**Abstract**\nThis study examines the relationship between social media use and academic performance among university students in Egypt. A sample of 412 students completed self-report questionnaires measuring daily social media usage and Grade Point Average (GPA).\n\n**Results**\nFindings indicate a significant negative correlation (r = -0.43, p < 0.01) between daily social media use exceeding three hours and academic performance. Students who used social media for more than three hours per day had GPAs approximately 0.6 points lower than those who used it for less than one hour daily.\n\n**Discussion**\nThese findings align with previous research suggesting that excessive social media use may fragment attention, reduce study time, and disrupt sleep patterns. However, it should be noted that correlation does not imply causation; students who are already struggling academically may be more likely to seek distraction online.\n\n**Conclusion**\nWhile a causal relationship cannot be established, the evidence suggests that universities should consider developing digital wellness programs to support healthy technology habits among students.`,
              exercises: [
                { type: 'multiple_choice', question: 'How many students participated in the study?', options: ['142', '240', '412', '500'], answer: 2 },
                { type: 'fill_blank', question: 'Students using social media more than 3 hours had GPAs ___ points lower.', answer: '0.6', hint: 'Find the exact number' },
                { type: 'multiple_choice', question: 'What does the study conclude about causation?', options: ['Social media definitely causes lower grades', 'A causal relationship is confirmed', 'A causal relationship cannot be established', 'Social media has no effect at all'], answer: 2 },
                { type: 'multiple_choice', question: 'The correlation found was:', options: ['Positive and weak', 'Negative and significant', 'Positive and significant', 'There was no correlation'], answer: 1 },
                { type: 'fill_blank', question: 'The study recommends developing digital ___ programs.', answer: 'wellness', hint: 'Health-related programs for technology use' },
                { type: 'multiple_choice', question: '"Correlation does not imply causation" means:', options: ['Two things that happen together are not necessarily connected', 'If two things are related, one causes the other', 'Statistics prove relationships', 'The study had errors'], answer: 0 },
              ],
            },
          },
          {
            id: 'ac2l5', title: 'Writing: Literature Review', type: 'writing', xp: 45,
            content: {
              intro: 'Write a strong literature review section for research papers!',
              key_points: [
                'A literature review is a **critical synthesis**, not a list of summaries. You must connect, compare, and evaluate sources.',
                'Organise by **theme or argument**, not by author or date — this shows conceptual thinking.',
                'Identify the **research gap** your study fills: "While previous studies have examined X, few have investigated Y..."',
              ],
              tips: [
                'Use a matrix (spreadsheet) to track sources: columns for author, year, key argument, methodology, and how it relates to your research.',
                'Aim for at least one piece of synthesis language per paragraph: "Similarly...", "In contrast...", "Building on this work..."',
              ],
              explanation: '✍️ **The Literature Review:**\n\n**Purpose:**\n• Show what research already exists\n• Identify gaps your study addresses\n• Demonstrate critical thinking\n\n**Structure:**\n1. Thematic grouping (not just a list of summaries)\n2. Synthesis — connect different studies\n3. Critique — note limitations and contradictions\n4. Your position — where does your study fit?\n\n**Key phrases:**\n• *Smith (2020) argues that...*\n• *Several studies have found that...*\n• *Contrasting findings emerge from...*\n• *A significant gap in the literature is...*\n• *Building on the work of...*\n• *The present study extends previous research by...*',
              exercises: [
                { type: 'multiple_choice', question: 'A literature review is NOT:', options: ['A list of what others found', 'A critical synthesis of existing research', 'A demonstration of your research context', 'Your personal opinion without evidence'], answer: 3 },
                { type: 'fill_blank', question: 'A significant ___ in the literature is the lack of longitudinal studies.', answer: 'gap', hint: 'Missing area in research' },
                { type: 'multiple_choice', question: 'Which phrase introduces a contrast between studies?', options: ['Building on the work of...', 'Contrasting findings emerge from...', 'Several studies have found...', 'Smith (2020) argues that...'], answer: 1 },
                { type: 'fill_blank', question: 'The present study ___ previous research by examining long-term effects.', answer: 'extends', hint: 'Goes further than' },
                { type: 'multiple_choice', question: 'Literature should be organised:', options: ['Alphabetically by author', 'By date published', 'Thematically around key ideas', 'In the order you read them'], answer: 2 },
                { type: 'translate', question: 'Translate: تبني هذه الدراسة على أعمال سابقة في المجال', answer: 'This study builds on previous work in the field', hint: 'builds on previous work...' },
              ],
            },
          },
          {
            id: 'ac2l6', title: 'Discussion & Conclusion Writing', type: 'writing', xp: 45,
            content: {
              intro: 'Write powerful discussion and conclusion sections!',
              key_points: [
                'The discussion **interprets** results — don\'t just repeat what you found; explain what it **means** in the context of your field.',
                'Always acknowledge **limitations** — this strengthens your credibility rather than weakening it.',
                'The conclusion should answer the implicit question: "**So what?**" — what do your findings mean for the real world?',
              ],
              tips: [
                'Avoid the word "prove" in your discussion — use "suggest", "indicate", or "imply" instead to maintain academic caution.',
                'The best conclusions open up new questions. End with a forward-looking statement: "Future research might investigate..." — this shows scholarly thinking.',
              ],
              explanation: '✍️ **Discussion Section:**\n• Interpret results — what do they mean?\n• Connect to existing literature\n• Explain unexpected findings\n• Acknowledge limitations\n\n**Conclusion Section:**\n• Summarise key findings\n• State the significance\n• Suggest implications for practice/policy\n• Recommend future research\n\n**Discussion phrases:**\n• *These findings are consistent with...*\n• *Contrary to expectations,...*\n• *A possible explanation is...*\n• *This may be attributed to...*\n\n**Conclusion phrases:**\n• *In summary, this study has shown...*\n• *The findings have important implications for...*\n• *Future research should investigate...*',
              exercises: [
                { type: 'multiple_choice', question: 'The Discussion section should:', options: ['List your methodology', 'Interpret what your results mean', 'Introduce your research question', 'Only summarise other studies'], answer: 1 },
                { type: 'fill_blank', question: 'These findings are ___ with previous research by Smith (2019).', answer: 'consistent', hint: 'In agreement with' },
                { type: 'multiple_choice', question: '"Contrary to expectations" introduces:', options: ['A result that confirms your hypothesis', 'An expected finding', 'An unexpected or surprising finding', 'A literature review'], answer: 2 },
                { type: 'fill_blank', question: 'Future research should ___ the long-term effects of this intervention.', answer: 'investigate', hint: 'Examine or study further' },
                { type: 'multiple_choice', question: 'Limitations should be mentioned in:', options: ['The introduction only', 'The literature review', 'The discussion section', 'The abstract only'], answer: 2 },
                { type: 'translate', question: 'Translate: تحمل هذه النتائج آثاراً مهمة على السياسة التعليمية', answer: 'These findings have important implications for educational policy', hint: 'have important implications for...' },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  AMERICAN ENGLISH
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'american',
    title: 'American English',
    level: 'B1–C1',
    description: 'Learn American slang, culture, pronunciation, and the differences between American and British English.',
    color: '#EF4444',
    icon: '🇺🇸',
    xpPerLesson: 35,
    units: [
      {
        id: 'am1', title: 'American Slang & Expressions', icon: '🗣️',
        lessons: [
          {
            id: 'am1l1', title: 'Everyday American Slang', type: 'vocabulary', xp: 35,
            content: {
              intro: 'Sound like a native American English speaker with these essential slang words!',
              key_points: [
                'American slang changes quickly — words like "sick" (great) and "vibe" are currently very common in everyday speech.',
                'Slang is **informal** — use it with friends, not in professional settings, academic writing, or formal emails.',
                '**"Dude"** is used by both male and female Americans informally. **"Man"** is used the same way.',
              ],
              tips: [
                'Watch American TV shows and movies (Friends, The Office, Stranger Things) to hear slang used naturally in context.',
                'Don\'t force slang — use it when it feels natural. Overusing it sounds unnatural to native speakers.',
              ],
              fun_fact: 'The word "cool" to mean "great" or "fashionable" has been in use since the 1930s jazz era — making it one of the longest-lasting American slang words ever!',
              vocabulary: [
                { word: 'Awesome / Cool',    translation: 'رائع',              example: '"That movie was awesome!" / "Cool, let\'s go!"' },
                { word: 'Hang out',          translation: 'يقضي وقتاً مع',    example: '"Want to hang out this weekend?"' },
                { word: 'What\'s up?',        translation: 'ما الأخبار؟',      example: '"Hey! What\'s up?" "Not much, you?"' },
                { word: 'No worries',         translation: 'لا قلق',            example: '"Sorry I\'m late!" "No worries, man!"' },
                { word: 'Totally',            translation: 'تماماً',            example: '"Do you agree?" "Totally!"' },
                { word: 'Dude / Man',         translation: 'صاحبي/يا رجل',     example: '"Dude, you won\'t believe this!"' },
                { word: 'Bummer',             translation: 'محبط',              example: '"I failed the test." "Oh, that\'s a bummer!"' },
                { word: 'Sick (adj)',          translation: 'رائع جداً (سلانغ)', example: '"That skateboard trick was sick!"' },
                { word: 'Bail',               translation: 'ينسحب/يغادر',      example: '"He bailed on us at the last minute."' },
                { word: 'Vibe',               translation: 'أجواء/طاقة',        example: '"I love the vibe in this coffee shop."' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"That\'s a bummer!" means:', options: ['That\'s amazing!', 'That\'s disappointing!', 'That\'s confusing!', 'That\'s expensive!'], answer: 1 },
                { type: 'fill_blank',      question: '"Hey, ___ up? How are you?" — American greeting', answer: "what's", hint: 'American informal greeting' },
                { type: 'multiple_choice', question: '"He bailed on us" means:', options: ['He helped us', 'He paid for us', 'He cancelled/left at the last minute', 'He joined us'], answer: 2 },
                { type: 'match',           question: 'Match American slang', pairs: [['Awesome','رائع'],['Hang out','يقضي وقتاً'],['Totally','تماماً'],['Vibe','أجواء']] },
                { type: 'fill_blank',      question: '"Want to ___ out this weekend?" (يقضي وقتاً)', answer: 'hang', hint: 'Hang ___ out' },
                { type: 'multiple_choice', question: 'In American slang, "sick" can mean:', options: ['Ill/unwell', 'Extremely good/cool', 'Tired', 'Angry'], answer: 1 },
              ],
            },
          },
          {
            id: 'am1l2', title: 'American vs British English', type: 'vocabulary', xp: 35,
            content: {
              intro: 'Learn the key differences between American and British English!',
              key_points: [
                'American and British English differ in **vocabulary, spelling, and pronunciation** — but speakers of each understand the other well.',
                'Key spelling differences: American drops the **"u"** (color/colour, favorite/favourite) and uses **"-ize"** (organize/organise).',
                'The **"pants" trap** is famous — in American English "pants" = trousers, but in British English "pants" = underwear!',
              ],
              tips: [
                'Pick ONE variety (American or British) for your writing and be consistent. Mixing "colour" with "organize" looks unprofessional.',
                'Most international English tests (IELTS, TOEFL) accept both varieties — just be consistent throughout your test.',
              ],
              fun_fact: 'American English was actually influenced by 18th-century British English — many words that sound "American" (like "fall" for autumn) were common in Britain first, but the British later switched to the French-influenced "autumn".',
              vocabulary: [
                { word: 'Apartment (US) / Flat (UK)',     translation: 'شقة',          example: 'US: "I live in an apartment." UK: "I live in a flat."' },
                { word: 'Elevator (US) / Lift (UK)',      translation: 'مصعد',         example: 'US: "Take the elevator." UK: "Take the lift."' },
                { word: 'Truck (US) / Lorry (UK)',        translation: 'شاحنة',        example: 'US: "A big truck blocked the road." ' },
                { word: 'Cookie (US) / Biscuit (UK)',     translation: 'بسكويت',       example: 'US: "Chocolate chip cookies!" UK: "Biscuits!"' },
                { word: 'Vacation (US) / Holiday (UK)',   translation: 'إجازة',        example: 'US: "summer vacation" UK: "summer holiday"' },
                { word: 'Math (US) / Maths (UK)',         translation: 'رياضيات',      example: 'US: "I love math class." UK: "I love maths."' },
                { word: 'Subway (US) / Underground (UK)', translation: 'مترو',         example: 'US: "Take the subway." UK: "Take the underground."' },
                { word: 'Pants (US) = trousers. UK: pants = underwear!', translation: 'مهم جداً!', example: 'US: "Nice pants!" UK: This means something different!' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What do Americans call a "flat"?', options: ['House', 'Apartment', 'Studio', 'Dorm'], answer: 1 },
                { type: 'fill_blank',      question: 'In the US, "Take the ___." In the UK, "Take the lift."', answer: 'elevator', hint: 'American word for lift' },
                { type: 'multiple_choice', question: 'Americans say "vacation". British say:', options: ['Vacay', 'Holiday', 'Retreat', 'Break'], answer: 1 },
                { type: 'match',           question: 'Match US vs UK words', pairs: [['Cookie (US)','Biscuit (UK)'],['Subway (US)','Underground (UK)'],['Truck (US)','Lorry (UK)'],['Math (US)','Maths (UK)']] },
                { type: 'multiple_choice', question: '⚠️ In British English, "pants" means:', options: ['Trousers', 'Underwear', 'Shorts', 'Socks'], answer: 1 },
              ],
            },
          },
          {
            id: 'am1l3', title: 'American Culture & Small Talk', type: 'dialogue', xp: 35,
            content: {
              intro: 'Understand American culture and how Americans make small talk!',
              key_points: [
                'Americans often use **"How are you?"** as a greeting, not a genuine question — the expected answer is "Good, thanks!" not a detailed health update.',
                '**Small talk topics** Americans love: sports, weather, where you\'re from, your job, local events.',
                '**Avoid** in small talk: politics, religion, money, and personal questions like "How much do you earn?"',
              ],
              tips: [
                'In American culture, being too formal can feel cold or unfriendly. Match the casual tone of the people around you.',
                'Americans often extend invitations ("We should get together sometime!") that aren\'t always meant literally. If someone means it, they\'ll suggest a specific time and date.',
              ],
              dialogue: `**At a neighbourhood BBQ:**\n\nNeighbour: Hey there! You must be the new guy on the block! I'm Dave.\n\nNew guy: Hi Dave! I'm Omar. Just moved in last week.\n\nDave: No kidding! Where are you from originally?\n\nOmar: I'm from Egypt, but I've been in the States for about three years now.\n\nDave: Oh wow, that's fascinating! How are you finding it here?\n\nOmar: Honestly? I love it. People are super friendly. Though I'm still getting used to how early everything closes!\n\nDave: Ha! Yeah, we're early birds here. You should come to our game night sometime — every Friday. No pressure though.\n\nOmar: That sounds fun! I'd love to. What do you guys play?\n\nDave: Board games, cards, sometimes video games. My wife makes her famous chili. You've gotta try it.\n\nOmar: I'm in! That's really kind of you.\n\nDave: Hey, what are neighbors for? Can I get you a burger? They're almost done on the grill.\n\nOmar: Sure! How do you like yours?\n\nDave: Medium. You?\n\nOmar: Same for me. Thanks, Dave. I think I'm gonna like it here!`,
              vocabulary: [
                { word: 'New guy on the block', translation: 'الجديد في الحي',   example: '"Welcome! You\'re the new guy on the block!"' },
                { word: 'No kidding!',           translation: 'لا تمزح!/حقاً؟', example: '"I won the lottery!" "No kidding!"' },
                { word: 'The States',            translation: 'أمريكا (عامية)',  example: '"I\'ve lived in the States for 5 years."' },
                { word: 'Super',                 translation: 'جداً (تأكيد)',    example: '"She\'s super smart." "That\'s super helpful!"' },
                { word: 'No pressure',           translation: 'بلا ضغط',        example: '"Come if you want — no pressure!"' },
                { word: 'You\'ve gotta',          translation: 'يجب عليك',       example: '"You\'ve gotta try this pizza!"' },
                { word: 'I\'m in!',               translation: 'أنا معاكم!',     example: '"Want to join us?" "I\'m in!"' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What does "the States" refer to?', options: ['UK states', 'United States of America', 'Australian states', 'Canadian provinces'], answer: 1 },
                { type: 'fill_blank',      question: '"You\'ve ___ try this!" means "You must try this!"', answer: 'gotta', hint: 'Informal must = gotta' },
                { type: 'multiple_choice', question: '"No pressure" means:', options: ['There is a deadline', 'You don\'t have to do it if you don\'t want to', 'It is urgent', 'You must come'], answer: 1 },
                { type: 'fill_blank',      question: '"I\'m ___!" means I want to join/participate.', answer: 'in', hint: '"I\'m in" or "I\'m out"' },
                { type: 'multiple_choice', question: '"No kidding!" expresses:', options: ['Boredom', 'Surprise or confirmation', 'Disagreement', 'Confusion'], answer: 1 },
              ],
            },
          },
          {
            id: 'am1l4', title: 'American Idioms', type: 'vocabulary', xp: 35,
            content: {
              intro: 'Master essential American idioms to sound natural!',
              key_points: [
                'Idioms are **fixed phrases** whose meaning cannot be understood word-by-word — "bite the bullet" has nothing to do with bullets!',
                'Idioms add **color and naturalness** to speech — native speakers use them constantly without even noticing.',
                'Context matters: many idioms are **informal** — don\'t use "hit the road" in a business presentation.',
              ],
              tips: [
                'Learn idioms in **categories** (travel idioms, food idioms, body idioms) — this helps you remember and recall them faster.',
                'When you encounter an unknown idiom, google it with "idiom meaning" — dictionaries like Merriam-Webster have idiom sections.',
              ],
              fun_fact: 'The idiom "bite the bullet" comes from the American Civil War era, when soldiers bit on bullets during surgery to endure pain without anesthesia. Today it means to endure something unpleasant!',
              vocabulary: [
                { word: 'Bite the bullet',        translation: 'يتحمل الأمر رغم صعوبته', example: '"Just bite the bullet and go to the dentist!"' },
                { word: 'Hit the road',           translation: 'يغادر/يبدأ الرحلة',       example: '"We should hit the road — it\'s getting late."' },
                { word: 'Break a leg!',           translation: 'حظاً موفقاً!',             example: '"Break a leg at your interview today!"' },
                { word: 'Couch potato',           translation: 'شخص كسول يشاهد التلفاز',  example: '"Don\'t be a couch potato — get some exercise!"' },
                { word: 'Hit the sack',           translation: 'يذهب للنوم',               example: '"I\'m exhausted — time to hit the sack."' },
                { word: 'Spill the beans',        translation: 'يكشف السر',                example: '"Come on, spill the beans! What happened?"' },
                { word: 'Under the weather',      translation: 'غير بخير',                 example: '"I\'m feeling under the weather today."' },
                { word: 'Cost an arm and a leg',  translation: 'يكلف ثروة',               example: '"That car cost an arm and a leg!"' },
                { word: 'Bite off more than you can chew', translation: 'يتحمل أكثر مما يستطيع', example: '"Don\'t bite off more than you can chew."' },
                { word: 'The ball is in your court', translation: 'القرار بيدك',           example: '"I made my offer. The ball is in your court now."' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"I\'m feeling under the weather." means:', options: ['I\'m outside in bad weather', 'I\'m not feeling well', 'I\'m feeling great', 'I\'m cold'], answer: 1 },
                { type: 'fill_blank',      question: '"___ the beans! I want to know everything!"', answer: 'Spill', hint: 'Reveal a secret' },
                { type: 'multiple_choice', question: '"Break a leg!" is said to someone who is about to:', options: ['Go to sleep', 'Eat dinner', 'Perform or take a test', 'Play sports'], answer: 2 },
                { type: 'match',           question: 'Match American idioms', pairs: [['Hit the sack','يذهب للنوم'],['Hit the road','يغادر'],['Couch potato','شخص كسول'],['Spill the beans','يكشف السر']] },
                { type: 'fill_blank',      question: 'That new iPhone costs an arm and a ___.', answer: 'leg', hint: 'Arm and ___' },
                { type: 'multiple_choice', question: '"The ball is in your court" means:', options: ['Let\'s play basketball', 'It\'s your decision now', 'The game is over', 'Start the meeting'], answer: 1 },
              ],
            },
          },
          {
            id: 'am1l5', title: 'American Pronunciation Tips', type: 'speaking', xp: 35,
            content: {
              intro: 'Learn the key features of American pronunciation!',
              key_points: [
                'The **Flap T** is one of the most distinctive American features: "t" between vowels sounds like a soft "d" — "water" sounds like "WAH-der".',
                'Americans always pronounce the **rhotic "r"** — the r in "car", "water", "better" is never silent (unlike British English).',
                '**Reductions** like "gonna" (going to) and "wanna" (want to) are completely normal in American casual speech.',
              ],
              tips: [
                'Shadowing is the best technique: choose an American TV clip, listen carefully, then repeat out loud trying to match the exact sounds, rhythm, and speed.',
                'Focus on the flap T first — mastering just this one feature makes your English sound dramatically more American.',
              ],
              explanation: '🎙️ **American Pronunciation Features:**\n\n1️⃣ **The Rhotic R** — Americans always pronounce the "r"\n• *car* /kɑːr/ · *water* /ˈwɔːtər/ · *better* /ˈbetər/\n• British: car /kɑː/ (the r is silent!)\n\n2️⃣ **The Flap T** — "t" between vowels sounds like "d"\n• *water* = "WAH-der" · *butter* = "BUH-der"\n• *better* = "BEH-der" · *city* = "SIH-dee"\n\n3️⃣ **Vowel sounds differ**\n• *can\'t* — British /kɑːnt/ → American /kænt/\n• *dance* — British /dɑːns/ → American /dæns/\n\n4️⃣ **Stress patterns**\n• *ad-DRESS (n) → AD-dress (US)* \n• *ga-RAGE (UK) → ga-RAGE (US similar)*\n\n5️⃣ **Reduction & Linking**\n• *going to* → "gonna" · *want to* → "wanna"\n• *did you* → "didja" · *what are you* → "watcha"\n\n📺 **Practice resources:**\n• American films & TV: Friends, The Office, Grey\'s Anatomy\n• American news: CNN, NBC\n• Podcasts: NPR, This American Life',
              exercises: [
                { type: 'multiple_choice', question: 'In American English, the "t" in "water" sounds like:', options: ['t', 'd', 'th', 'r'], answer: 1 },
                { type: 'fill_blank',      question: '"Going to" in casual American speech becomes "___ to".', answer: 'gonna', hint: 'Reduced form' },
                { type: 'multiple_choice', question: 'What is the "rhotic r" feature?', options: ['R is always silent', 'R is always pronounced', 'R is only at the start of words', 'R sounds like L'], answer: 1 },
                { type: 'multiple_choice', question: '"Want to" in casual American speech becomes:', options: ['wanto', 'wanna', 'wanting', 'want'], answer: 1 },
                { type: 'fill_blank',      question: 'In American English, the word "butter" is pronounced "BUH-___"', answer: 'der', hint: 'The flap T makes it sound like D' },
              ],
            },
          },
          {
            id: 'am1l6', title: 'Story: First Day in New York', type: 'story', xp: 35,
            content: {
              intro: 'Read this story about arriving in New York City!',
              key_points: [
                'Notice American idiomatic language: **"the concrete jungle"** (big city), **"bear hug"** (very strong hug), **"give it a week"** (be patient).',
                'The story uses vivid **sensory language** (wall of cold air, glittering skyline, sky painted orange and pink) — a technique to make writing come alive.',
                'The ending **"call it home"** is an example of figurative language — home here means a place where you belong emotionally, not literally.',
              ],
              fun_fact: 'New York City was the first capital of the United States (1789–1790). It\'s home to over 800 languages, making it the most linguistically diverse city on Earth!',
              text: `**First Day in New York**\n\nKhalid stepped out of JFK Airport and was immediately hit by a wall of cold January air. He zipped up his jacket and stared at the yellow taxis lined up outside. He had watched New York in a hundred movies, but nothing could have prepared him for the real thing.\n\nHe grabbed a cab to Manhattan. The driver, a talkative man from Pakistan, immediately asked: "First time in the city?"\n\n"Is it that obvious?" Khalid laughed.\n\n"You\'ve got the look," the driver grinned. "Wide eyes, phone out, head spinning around. Classic."\n\nAs they crossed the bridge into Manhattan, the skyline rose before him — impossibly tall buildings glittering against the grey winter sky. Khalid pressed his face against the window like a child.\n\nHis cousin Tariq met him at the hotel in Midtown. "Welcome to the concrete jungle!" he said, pulling him into a bear hug.\n\n"I can\'t believe I\'m actually here," Khalid said.\n\n"Wait till you try a real New York bagel," Tariq said. "That\'s when it hits you for real."\n\nThey spent the afternoon walking through Central Park, eating hot dogs from a street cart, and watching the ice skaters. By the time the sun set, painting the sky orange and pink above the skyscrapers, Khalid had already decided: he never wanted to leave.\n\n"You know what?" he told Tariq. "I think I get why people fall in love with this city."\n\nTariq smiled. "Give it a week. You\'ll be calling it home."`,
              exercises: [
                { type: 'multiple_choice', question: 'Where did Khalid arrive from?', options: ['It is not mentioned', 'He flew into JFK Airport', 'He took the train', 'He drove to New York'], answer: 1 },
                { type: 'multiple_choice', question: 'What month was it when Khalid arrived?', options: ['October', 'December', 'January', 'March'], answer: 2 },
                { type: 'fill_blank',      question: 'The taxi driver said Khalid had "the ___."', answer: 'look', hint: 'He could tell by his appearance' },
                { type: 'multiple_choice', question: 'What did Tariq call New York?', options: ['The Big Apple', 'The Concrete Jungle', 'The City that Never Sleeps', 'The Empire City'], answer: 1 },
                { type: 'fill_blank',      question: 'They ate hot dogs from a street ___.', answer: 'cart', hint: 'A small mobile food stand' },
                { type: 'multiple_choice', question: 'The phrase "fall in love with" means:', options: ['Fall down near something', 'Become very fond of something', 'Feel scared of something', 'Feel disappointed by something'], answer: 1 },
              ],
            },
          },
        ],
      },
      {
        id: 'am2', title: 'American Life & Culture', icon: '🏙️',
        lessons: [
          {
            id: 'am2l1', title: 'American Workplace Culture', type: 'dialogue', xp: 35,
            content: {
              intro: 'Learn how Americans communicate in a professional setting!',
              key_points: [
                'American workplaces (especially tech) are often **casual and first-name** — even with CEOs. This informality doesn\'t mean unprofessional.',
                '**"Flat hierarchy"** means fewer management levels — ideas flow more freely, but you\'re also expected to speak up and contribute.',
                'Key American work phrases: **"standup"** (brief daily meeting), **"onboarding"** (new employee training), **"all-hands"** (company-wide meeting).',
              ],
              tips: [
                'In American work culture, "silence is not golden" — contribute your ideas in meetings. Being quiet is often read as disengagement.',
                'Master professional American English: "reach out" (contact), "circle back" (follow up), "move the needle" (make progress), "bandwidth" (capacity/time).',
              ],
              dialogue: `**Emma (manager) and Tariq (new employee) at a US tech company.**\n\nEmma: Hey Tariq! Glad you could make it to the standup. How's the onboarding going?\n\nTariq: Pretty good, thanks! There's a lot to take in, but the team has been super helpful.\n\nEmma: Awesome. Don't hesitate to reach out if you hit any roadblocks. We have an open-door policy here — feel free to ping me anytime on Slack.\n\nTariq: I really appreciate that. One quick question — how formal are meetings here?\n\nEmma: Ha! This is Silicon Valley — we're pretty casual. First names always, even with leadership. Just come prepared, be concise, and follow up in writing if decisions are made.\n\nTariq: Got it. And the Friday all-hands — do people actually speak up?\n\nEmma: Absolutely! We encourage everyone to share feedback. Silence is not golden here — we'd rather hear your take than have you nodding along.\n\nTariq: That's actually refreshing. At my last company, it was very hierarchical.\n\nEmma: Yeah, flat hierarchy is part of our DNA. Just bring your A-game and you'll do great!`,
              vocabulary: [
                { word: 'Standup', translation: 'اجتماع قصير واقف', example: 'Our daily standup starts at 9 AM sharp.' },
                { word: 'Onboarding', translation: 'تأهيل الموظف الجديد', example: 'Onboarding takes about two weeks.' },
                { word: 'Open-door policy', translation: 'سياسة الباب المفتوح', example: 'My manager has an open-door policy.' },
                { word: 'Ping', translation: 'تواصل/أرسل رسالة', example: 'Ping me when the report is ready.' },
                { word: 'All-hands', translation: 'اجتماع الشركة بأكملها', example: 'The CEO hosts a monthly all-hands meeting.' },
                { word: 'Bring your A-game', translation: 'يبذل قصارى جهده', example: 'This presentation matters — bring your A-game.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What does "open-door policy" mean?', options: ['Offices have no doors', 'Employees can approach managers freely', 'Meetings are held outdoors', 'The building is always open'], answer: 1 },
                { type: 'fill_blank', question: 'Emma says to "ping" her on ___ anytime.', answer: 'Slack', hint: 'A messaging app used in offices' },
                { type: 'multiple_choice', question: 'What does "flat hierarchy" mean?', options: ['A company with no employees', 'A company with few management levels', 'A very formal workplace', 'A startup with no rules'], answer: 1 },
                { type: 'fill_blank', question: '"Bring your ___-game" means to perform at your best.', answer: 'A', hint: 'The first letter of the alphabet' },
                { type: 'multiple_choice', question: 'How should American work meetings end according to Emma?', options: ['With silence', 'With a long discussion', 'With written follow-up of decisions', 'With a casual chat'], answer: 2 },
                { type: 'translate', question: 'Translate: نحن نشجع الجميع على مشاركة آرائهم', answer: 'We encourage everyone to share their opinions', hint: 'We encourage everyone to...' },
              ],
            },
          },
          {
            id: 'am2l2', title: 'American Holidays & Traditions', type: 'vocabulary', xp: 35,
            content: {
              intro: 'Understand American holidays and the cultural context behind them!',
              key_points: [
                '**Thanksgiving** (4th Thursday of November) is arguably the most culturally important American holiday — it\'s about family, gratitude, and food.',
                '**The Fourth of July** celebrates independence from Britain in 1776 — celebrated with fireworks, BBQs, and parades.',
                '**Black Friday** (the day after Thanksgiving) is the biggest shopping day of the year — now also includes "Cyber Monday" for online deals.',
              ],
              tips: [
                'If you\'re invited to a Thanksgiving dinner, it\'s polite to ask "Can I bring anything?" and to compliment the food — especially the turkey!',
                'Understanding American holidays helps you understand American idioms: "It\'s not Thanksgiving yet!" (said when someone expects too much).',
              ],
              fun_fact: 'The name "Black Friday" refers to retailers going from "in the red" (losing money) to "in the black" (making profit) — the day when many stores finally became profitable for the year!',
              vocabulary: [
                { word: 'Thanksgiving', translation: 'عيد الشكر', example: 'Thanksgiving is celebrated on the 4th Thursday of November.' },
                { word: 'Fourth of July', translation: 'يوم الاستقلال الأمريكي', example: 'Fireworks light up the sky on the Fourth of July.' },
                { word: 'Super Bowl Sunday', translation: 'نهائي دوري كرة القدم الأمريكية', example: 'Super Bowl Sunday is basically an unofficial national holiday.' },
                { word: 'Labor Day', translation: 'يوم العمال', example: 'Labor Day marks the unofficial end of summer in the US.' },
                { word: 'Black Friday', translation: 'الجمعة السوداء', example: 'Black Friday sales start right after Thanksgiving.' },
                { word: 'Spring Break', translation: 'عطلة الربيع المدرسية', example: 'College students often travel during Spring Break.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'When is Thanksgiving celebrated?', options: ['Last Thursday of November', '4th Thursday of November', 'First Friday of November', 'November 25th always'], answer: 1 },
                { type: 'fill_blank', question: 'Labor Day marks the unofficial end of ___.', answer: 'summer', hint: 'The warm season' },
                { type: 'multiple_choice', question: '"Black Friday" is famous for:', options: ['A national day of mourning', 'Massive shopping sales after Thanksgiving', 'The start of winter', 'A sports championship'], answer: 1 },
                { type: 'match', question: 'Match holidays to descriptions', pairs: [['Thanksgiving','family meals & gratitude'],['Fourth of July','independence & fireworks'],['Black Friday','shopping deals'],['Labor Day','end of summer']] },
                { type: 'fill_blank', question: 'The ___ Bowl is American football\'s biggest game.', answer: 'Super', hint: 'Super Bowl Sunday' },
                { type: 'translate', question: 'Translate: عيد الاستقلال الأمريكي يُحتفل به في الرابع من يوليو', answer: 'American Independence Day is celebrated on the Fourth of July', hint: 'is celebrated on...' },
              ],
            },
          },
          {
            id: 'am2l3', title: 'American Pronunciation Patterns', type: 'speaking', xp: 35,
            content: {
              intro: 'Master the sounds that make American English distinct!',
              key_points: [
                'The **Flap T** (water = "WAH-der") and **rhotic R** (car with a clear R) are the two most distinctive American pronunciation features.',
                'Americans **drop syllables** in fast speech: "comfortable" → 3 syllables, "interesting" → 3 syllables (not 4).',
                '**Reductions** (gonna, wanna, kinda) are natural and normal in spoken American English — not "lazy" speech.',
              ],
              tips: [
                'Choose one American speaker you love listening to (a podcaster, actor, journalist) and shadow them — repeat their words exactly as you hear them.',
                'Don\'t try to change your accent overnight. Focus on ONE feature per week: week 1 = rhotic R, week 2 = flap T, etc.',
              ],
              explanation: '🗣️ **American vs British Pronunciation:**\n\n**Rhotic R:** Americans always pronounce the "r" even at end of words\n• *car, better, mother* — you hear the R clearly\n\n**Flap T:** Between vowels, "t" sounds like a soft "d"\n• *water → wa-der | better → be-der | butter → bu-der*\n• *city → si-dy | pretty → pri-dy*\n\n**O sound:** American "o" is often more open\n• *hot* → sounds like "haht"\n• *top* → sounds like "tahp"\n\n**Dropped syllables:**\n• *comfortable → comf-ter-ble (3 syllables)*\n• *family → fam-lee (2 syllables)*\n• *interesting → in-tres-ting (3 syllables)*\n\n**Contractions (very common in speech):**\n• gonna (going to) · wanna (want to) · gotta (got to) · kinda (kind of)',
              exercises: [
                { type: 'multiple_choice', question: 'In American English, the "t" in "water" sounds like:', options: ['A hard T', 'A soft D', 'Silent', 'A TH sound'], answer: 1 },
                { type: 'fill_blank', question: 'Americans always pronounce the ___ even at the end of words like "car".', answer: 'r', hint: 'A consonant letter' },
                { type: 'multiple_choice', question: '"Gonna" is an informal spoken form of:', options: ['got to', 'going to', 'got a', 'gone to'], answer: 1 },
                { type: 'multiple_choice', question: 'How many syllables does American "comfortable" have?', options: ['4', '3', '2', '5'], answer: 1 },
                { type: 'fill_blank', question: '"Wanna" is a contraction of "___ to".', answer: 'want', hint: 'I wanna go = I want to go' },
                { type: 'multiple_choice', question: 'The Flap T rule applies:', options: ['At the start of words', 'Between two vowels', 'At the end of sentences', 'Before the letter S'], answer: 1 },
              ],
            },
          },
          {
            id: 'am2l4', title: 'American Food Culture', type: 'dialogue', xp: 35,
            content: {
              intro: 'Navigate American restaurants and food culture like a local!',
              key_points: [
                'In American restaurants, the **server** (not "waiter") typically introduces themselves by name and checks back multiple times.',
                'American portions are famously large — **sharing dishes** is completely normal and servers expect this.',
                'Key restaurant phrase: **"Can I get you started with drinks?"** means they\'re ready to take your drink order first.',
              ],
              tips: [
                'Tipping in the US is not optional — 18–20% of the bill is expected for good service. Not tipping is considered rude.',
                'If you have dietary restrictions, American restaurants are generally very accommodating — just ask "Can I substitute...?" or "Is there a vegetarian option?"',
              ],
              dialogue: `**At a diner in Boston — Layla and her American friend Marcus.**\n\nWaiter: Hi folks! I'm Jake and I'll be your server today. Can I start you off with some drinks?\n\nLayla: I'd love an iced tea, please.\n\nMarcus: I'll take a coffee — black, no sugar.\n\nWaiter: Sure thing! And are you ready to order, or do you need a few minutes?\n\nLayla: I think I need a minute — the menu is huge! What do you recommend?\n\nWaiter: Our breakfast burritos are super popular. And if you've got a sweet tooth, the pancake stack is off the charts!\n\nMarcus: She's a foodie — she'll love both. (to Layla) Just a heads up, portions here are massive. You might wanna share.\n\nLayla: Good call. I'll take the pancake stack to share, and a side of scrambled eggs.\n\nWaiter: Great choice! And would you like that with bacon?\n\nLayla: Actually, could I substitute it for avocado? I'm vegetarian.\n\nWaiter: Absolutely! No problem at all. I'll get that right out for you.`,
              vocabulary: [
                { word: 'Server', translation: 'النادل (الأمريكية)', example: 'In the US, "server" is preferred over "waiter/waitress".' },
                { word: 'Sweet tooth', translation: 'محبّ للحلويات', example: 'She has a real sweet tooth — loves desserts.' },
                { word: 'Off the charts', translation: 'استثنائي/رائع جداً', example: 'The food at that restaurant is off the charts!' },
                { word: 'Foodie', translation: 'عاشق الطعام', example: 'He\'s a real foodie — always trying new restaurants.' },
                { word: 'Heads up', translation: 'تنبيه مسبق', example: 'Just a heads up — the traffic is bad today.' },
                { word: 'Good call', translation: 'قرار جيد', example: '"Should we leave early?" "Good call!"' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Server" in an American restaurant means:', options: ['A computer', 'The person who brings food', 'The restaurant manager', 'A chef'], answer: 1 },
                { type: 'fill_blank', question: '"Off the ___" means exceptionally good.', answer: 'charts', hint: 'Off the charts' },
                { type: 'multiple_choice', question: '"Heads up" means:', options: ['Look up at the ceiling', 'An advance warning or notice', 'An exclamation of surprise', 'A type of game'], answer: 1 },
                { type: 'fill_blank', question: '"___ call!" — said when someone makes a smart decision.', answer: 'Good', hint: 'Expressing approval of a decision' },
                { type: 'multiple_choice', question: 'Why does Marcus suggest sharing the food?', options: ['It\'s cheaper', 'Portions are very large', 'The food is spicy', 'There\'s a sharing discount'], answer: 1 },
                { type: 'translate', question: 'Translate: هل يمكنني استبدال البيكون بالأفوكادو؟', answer: 'Could I substitute the bacon for avocado?', hint: 'Could I substitute... for...?' },
              ],
            },
          },
          {
            id: 'am2l5', title: 'American English: Phrasal Verbs', type: 'vocabulary', xp: 35,
            content: {
              intro: 'Master the phrasal verbs Americans use every day!',
              key_points: [
                'Phrasal verbs are very common in **spoken and informal American English** — knowing them is key to sounding natural.',
                'Many phrasal verbs have both **literal and figurative** meanings: "check out" can literally mean to leave a hotel or figuratively mean "look at this!"',
                '**Business phrasal verbs** are especially important: "follow up", "reach out", "touch base", "wrap up" appear in emails and meetings constantly.',
              ],
              tips: [
                'Learn phrasal verbs in **context sentences**, not as isolated definitions — this helps you use them correctly and remember them longer.',
                'The best way to practice is to use them in your own emails and conversations. Replace formal verbs with their phrasal verb equivalents: "contact" → "reach out".',
              ],
              fun_fact: 'English has over 10,000 phrasal verbs — more than any other language. They\'re one of the biggest challenges for non-native speakers, but mastering the top 50 most common ones covers the vast majority of everyday usage.',
              vocabulary: [
                { word: 'Figure out', translation: 'يكتشف / يفهم', example: 'I can\'t figure out how to use this app.' },
                { word: 'Reach out', translation: 'يتواصل مع', example: 'Feel free to reach out if you have questions.' },
                { word: 'Check out', translation: 'يتحقق من / يزور', example: 'Check out this amazing restaurant downtown.' },
                { word: 'Touch base', translation: 'يتواصل للتحقق', example: 'Let\'s touch base later this week.' },
                { word: 'Follow up', translation: 'يتابع', example: 'I\'ll follow up with an email after the meeting.' },
                { word: 'Hang tight', translation: 'انتظر قليلاً', example: 'Hang tight — I\'ll be there in five minutes.' },
                { word: 'Bail (on someone)', translation: 'يتخلى عن', example: 'She bailed on our plans at the last minute.' },
                { word: 'Zone out', translation: 'يغيب عقله / يشرد', example: 'Sorry, I zoned out — can you repeat that?' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Reach out" means:', options: ['Stretch your arm', 'Contact someone', 'Leave a place', 'Help someone move'], answer: 1 },
                { type: 'fill_blank', question: 'I\'ll ___ up with you after the meeting via email.', answer: 'follow', hint: 'follow up' },
                { type: 'multiple_choice', question: 'If someone "bails" on you, they:', options: ['Arrive early', 'Pay for your meal', 'Cancel plans at the last minute', 'Ask you for help'], answer: 2 },
                { type: 'fill_blank', question: 'Sorry, I ___ out for a second — what did you say?', answer: 'zoned', hint: 'zone out = lose focus' },
                { type: 'multiple_choice', question: '"Touch base" means:', options: ['Touch a ball', 'Make brief contact to check in', 'Arrive at a location', 'Start a meeting'], answer: 1 },
                { type: 'translate', question: 'Translate: انتظر قليلاً - سأتواصل معك قريباً', answer: 'Hang tight - I will reach out to you soon', hint: 'Hang tight... reach out...' },
              ],
            },
          },
          {
            id: 'am2l6', title: 'Story: The American Dream', type: 'story', xp: 35,
            content: {
              intro: 'Read a story about ambition, hard work, and the American Dream!',
              key_points: [
                'Notice the powerful **metaphor**: "the alarm clocks" represents the endless hard work and sacrifice required — not luck.',
                'The phrase **"borderline crazy"** is an informal intensifier meaning something is almost too extreme or irrational.',
                'Nadia\'s conclusion reframes the American Dream as a **negotiation** — a sophisticated, nuanced view, not a naive one.',
              ],
              fun_fact: 'The phrase "American Dream" was popularised by historian James Truslow Adams in 1931 in his book "The Epic of America." He defined it as "a dream of a land in which life should be better and richer and fuller for everyone."',
              text: `**The Long Way Up**\n\nNadia came to the United States with two suitcases, $800, and a determination that was, in her own words, "either courageous or borderline crazy."\n\nShe had left her job as an accountant in Amman to pursue a Master's degree in data science in Boston. The first winter nearly broke her. The cold was unlike anything she had experienced, and her part-time job at a coffee shop barely covered her rent. She sometimes worked double shifts — arriving at 5 AM and leaving at 2 PM, then heading straight to class.\n\n"People talked about the American Dream as if it were something you just stumbled upon," she later wrote in a blog that eventually reached half a million readers. "What they don't tell you is the alarm clocks. The endless alarm clocks."\n\nThree years later, Nadia was hired as a senior analyst at a tech firm in Cambridge, earning four times her Amman salary. She now mentors students from the Middle East navigating the same system she once found so overwhelming.\n\n"The Dream is real," she says. "But it's not a gift. It's a negotiation — between what you're willing to sacrifice and what you're hoping to gain."`,
              exercises: [
                { type: 'multiple_choice', question: 'Where did Nadia come from?', options: ['Cairo', 'Beirut', 'Amman', 'Dubai'], answer: 2 },
                { type: 'fill_blank', question: 'Nadia worked ___ shifts — arriving at 5 AM.', answer: 'double', hint: 'Two full shifts in one day' },
                { type: 'multiple_choice', question: 'How many readers did Nadia\'s blog eventually reach?', options: ['100,000', '250,000', '500,000', '1 million'], answer: 2 },
                { type: 'multiple_choice', question: 'What does Nadia describe the American Dream as?', options: ['A guaranteed success for all immigrants', 'A myth that doesn\'t exist', 'A negotiation between sacrifice and gain', 'Something easy to achieve with talent'], answer: 2 },
                { type: 'fill_blank', question: 'Nadia now ___ students from the Middle East.', answer: 'mentors', hint: 'Guides and supports others' },
                { type: 'multiple_choice', question: '"Stumbled upon" most likely means:', options: ['Worked hard for', 'Found by accident', 'Lost completely', 'Dreamed about'], answer: 1 },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  ADVANCED (C1–C2)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'advanced',
    title: 'Advanced English',
    level: 'C1–C2',
    description: 'Master sophisticated English: complex grammar, advanced vocabulary, nuanced writing, and native-like expression.',
    color: '#DC2626',
    icon: '🔥',
    xpPerLesson: 50,
    units: [
      {
        id: 'adv1', title: 'Advanced Grammar', icon: '⚡',
        lessons: [
          {
            id: 'adv1l1', title: 'Inversion for Emphasis', type: 'grammar', xp: 50,
            content: {
              intro: 'Use inversion to add emphasis and sophistication to your writing and speech!',
              key_points: [
                '**Inversion** is used in formal writing and advanced speech to add emphasis — it signals a C1/C2 level of command.',
                'After negative adverbials (**Never, Rarely, Not only, Hardly, No sooner**), the auxiliary verb comes BEFORE the subject.',
                'Inverted conditionals (**Had I known / Were I to leave / Should you need**) replace "if" clauses in formal writing.',
              ],
              common_mistakes: [
                { wrong: 'Never I have seen such beauty.', correct: 'Never have I seen such beauty.', explanation: 'After "Never", the auxiliary ("have") must come before the subject ("I").' },
                { wrong: 'Not only she passed, but also she got the highest mark.', correct: 'Not only did she pass, but she also got the highest mark.', explanation: 'After "Not only", use did + subject + base verb: "Not only did she pass".' },
              ],
              tips: [
                'In IELTS or advanced writing, use ONE inversion structure per essay — this is enough to demonstrate range without sounding unnatural.',
                'Inversion is common in formal speeches, academic writing, and literary texts. In casual conversation, it sounds overly dramatic.',
              ],
              explanation: '📝 **Inversion:**\n\nInversion means putting the auxiliary verb BEFORE the subject for emphasis. It\'s used in formal writing and advanced speech.\n\n**Negative adverbials:**\n• *Never* have I seen such courage.\n• *Rarely* does one encounter such talent.\n• *Not only* did she pass, *but* she got the highest mark.\n• *Hardly* had I arrived *when* the meeting started.\n• *No sooner* had he left *than* the phone rang.\n• *Under no circumstances* should you sign without reading.\n\n**Only constructions:**\n• *Only when* I read the contract *did I* realise the problem.\n• *Only by* working hard *can you* succeed.\n• *Only then* did the truth emerge.\n\n**Conditionals (formal):**\n• *Had I known* = If I had known\n• *Were I to leave* = If I were to leave\n• *Should you need help* = If you should need help',
              examples: [
                'Never have I witnessed such dedication to learning.',
                'Not only did she finish the project early, but she also exceeded all targets.',
                'Had I realised the difficulty, I would have started earlier.',
                'Under no circumstances should this information be shared.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Complete: "___ had I sat down when the alarm rang."', options: ['Rarely', 'Hardly', 'Never', 'Seldom'], answer: 1 },
                { type: 'fill_blank',      question: 'Not only ___ she late, but she forgot the report.', answer: 'was', hint: 'Inverted auxiliary verb' },
                { type: 'multiple_choice', question: '"Had I known about this" is equivalent to:', options: ['If I have known', 'If I had known', 'If I know', 'When I knew'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [such / Never / have / seen / I / beauty]', words: ['such','Never','have','seen','I','beauty'], answer: 'Never have I seen such beauty' },
                { type: 'fill_blank',      question: 'Under no circumstances ___ you share this password.', answer: 'should', hint: 'Modal verb inverted' },
                { type: 'multiple_choice', question: '"Should you need assistance" formally means:', options: ['You need assistance', 'If you need assistance', 'Because you need assistance', 'Although you need assistance'], answer: 1 },
              ],
            },
          },
          {
            id: 'adv1l2', title: 'Subjunctive Mood', type: 'grammar', xp: 50,
            content: {
              intro: 'Master the subjunctive — the formal mood for wishes, suggestions, and hypotheticals!',
              key_points: [
                'The **present subjunctive** uses the bare infinitive (base verb) after verbs like suggest, recommend, insist, demand: "I insist that he **be** present."',
                'The **past subjunctive** uses "were" for ALL subjects: "If I **were** you..." / "I wish she **were** here." — never "was" in formal writing.',
                'Set expressions like **"Come what may"**, **"Be that as it may"**, **"Suffice it to say"** are frozen subjunctive forms — memorise them.',
              ],
              common_mistakes: [
                { wrong: 'I suggest that he is more careful.', correct: 'I suggest that he be more careful.', explanation: 'After suggest/recommend/insist/demand, use the base verb (subjunctive), not the present tense.' },
                { wrong: 'If I was you, I would leave.', correct: 'If I were you, I would leave.', explanation: 'In the past subjunctive, "were" is used for ALL subjects including "I" — "was" is informal/non-standard.' },
              ],
              tips: [
                'American English uses the subjunctive more commonly than British English: Americans say "I suggest he be present" while the British might say "I suggest he should be present."',
                'The subjunctive is disappearing in everyday speech but is still expected in formal writing, legal documents, and academic contexts.',
              ],
              explanation: '📝 **The Subjunctive Mood:**\n\n**1. Present subjunctive** (formal recommendations)\n• Use base verb after: suggest, recommend, insist, demand, propose, request that...\n• *I suggest that he **be** present.* (not "is")\n• *The committee demands that she **submit** the report.*\n• *It is essential that you **arrive** on time.*\n\n**2. Past subjunctive** (wishes & hypotheticals)\n• Use "were" for ALL subjects\n• *If I **were** you, I would reconsider.* ✅\n• *I wish she **were** here.* ✅\n• *Were this not true, we would be in trouble.*\n\n**3. Set expressions:**\n• *God save the Queen!* · *Long live the President!*\n• *Far be it from me to...*\n• *Come what may,* I will persevere.\n• *Be that as it may,...*\n• *Suffice it to say,...*',
              exercises: [
                { type: 'fill_blank',      question: 'I recommend that he ___ (to be) more careful.', answer: 'be', hint: 'Present subjunctive — base verb' },
                { type: 'multiple_choice', question: 'Which is correct? "I wish she ___ here."', options: ['is', 'was', 'were', 'will be'], answer: 2 },
                { type: 'fill_blank',      question: 'It is essential that every student ___ (submit) by Friday.', answer: 'submit', hint: 'No -s ending in subjunctive' },
                { type: 'multiple_choice', question: '"Be that as it may" means:', options: ['That is certain', 'Despite that', 'Because of that', 'If that is true'], answer: 1 },
                { type: 'fill_blank',      question: 'The doctor insisted that she ___ (stay) in hospital.', answer: 'stay', hint: 'Base form subjunctive' },
              ],
            },
          },
          {
            id: 'adv1l3', title: 'Cleft Sentences for Emphasis', type: 'grammar', xp: 50,
            content: {
              intro: 'Use cleft sentences to add emphasis and focus — an advanced technique!',
              key_points: [
                '**It-cleft** ("It was Sara who...") emphasises WHO, WHAT, or WHERE by fronting the information after "It was/is".',
                '**Wh-cleft** ("What I need is rest") emphasises the NEW information by placing it at the end after "is/was".',
                '**All-cleft** ("All it takes is practice") downplays the effort needed — it says "only this is required".',
              ],
              common_mistakes: [
                { wrong: 'It was that Sara who told me.', correct: 'It was Sara who told me.', explanation: 'Don\'t add "that" after the noun in an it-cleft. Use "who" for people, "that" for things: "It was the book that changed me."' },
                { wrong: 'What I want it is a holiday.', correct: 'What I want is a holiday.', explanation: 'In a wh-cleft, don\'t repeat the subject: "What I want is..." not "What I want it is..."' },
              ],
              tips: [
                'Cleft sentences are very natural in spoken English for emphasis: "It\'s money that causes most arguments" sounds more emphatic than "Money causes most arguments."',
                'In academic writing, wh-clefts are particularly useful: "What this study demonstrates is..." draws attention to your key finding.',
              ],
              explanation: '📝 **Cleft Sentences:**\n\nUsed to emphasize a particular part of a sentence.\n\n**It-cleft:**\n• Normal: *Sara told me the secret.*\n• Emphasis on Sara: ***It was Sara*** *who told me the secret.*\n• Emphasis on secret: *It was **the secret** that Sara told me.*\n\n**Wh-cleft (pseudo-cleft):**\n• Normal: *I need rest.*\n• Emphasis: *What I need is rest.*\n\n• Normal: *He did the wrong thing.*\n• Emphasis: *What he did was (the) wrong thing.*\n\n**All-cleft:**\n• *All I want is a quiet evening.*\n• *All she needed was someone to listen.*\n• *All it takes is practice.*\n\n💡 Cleft sentences are very common in:**\n• Spoken English for emphasis\n• Academic writing to highlight key arguments\n• Journalism',
              exercises: [
                { type: 'reorder',         question: 'Make a cleft: [was / hard work / It / that / succeeded / he / with]', words: ['was','hard work','It','that','succeeded','he','with'], answer: 'It was with hard work that he succeeded' },
                { type: 'fill_blank',      question: 'What I really want is ___ to the sea. (a holiday)', answer: 'a holiday', hint: 'Complete the wh-cleft' },
                { type: 'multiple_choice', question: '"It was Ahmed who called me" emphasizes:', options: ['That someone called', 'Who made the call', 'When the call was made', 'Why Ahmed called'], answer: 1 },
                { type: 'fill_blank',      question: 'All it ___ is a little patience.', answer: 'takes', hint: 'All it takes/needs' },
                { type: 'multiple_choice', question: 'Which is a correct wh-cleft?', options: ['Where she went was Paris.', 'What she did was cry.', 'Who she saw was him.', 'When she left was noon.'], answer: 1 },
              ],
            },
          },
          {
            id: 'adv1l4', title: 'Advanced Vocabulary: Precision', type: 'vocabulary', xp: 50,
            content: {
              intro: 'Use precise, sophisticated vocabulary to express yourself with nuance!',
              key_points: [
                '**Precision** in vocabulary means choosing the word that captures the exact shade of meaning — "contentious" is more precise than "controversial".',
                'Words like **"ostensibly"** and **"tacit"** are not just advanced — they convey ideas that simpler words cannot express as concisely.',
                'Learn the **etymology** of words (roots, prefixes, suffixes) to decode unfamiliar vocabulary: "inextricably" = in + extric(are) + ably.',
              ],
              tips: [
                'Read quality long-form journalism (The Atlantic, The Economist, New Yorker) and highlight every word you don\'t know. Look them up immediately.',
                'Don\'t use advanced vocabulary to impress — use it only when it adds precision. A well-chosen simple word beats a poorly used complex one.',
              ],
              fun_fact: 'English has the largest vocabulary of any language, estimated at 170,000+ words in current use. A native speaker knows roughly 20,000–35,000 words actively. A C2 learner typically knows 16,000–20,000!',
              vocabulary: [
                { word: 'Nuanced',          translation: 'دقيق/متعدد الأبعاد',   example: 'A nuanced understanding of the issue is required.' },
                { word: 'Ostensibly',       translation: 'ظاهرياً',               example: 'Ostensibly, the policy helps the poor.' },
                { word: 'Tacit',            translation: 'ضمني',                  example: 'There was a tacit agreement between them.' },
                { word: 'Perfunctory',      translation: 'سطحي/شكلي',             example: 'He gave a perfunctory nod and moved on.' },
                { word: 'Juxtapose',        translation: 'يضع جنباً إلى جنب',     example: 'The film juxtaposes war and childhood innocence.' },
                { word: 'Inextricably',     translation: 'بصورة لا تنفصل',        example: 'Poverty and crime are inextricably linked.' },
                { word: 'Contentious',      translation: 'خلافي/مثير للجدل',      example: 'Abortion is a highly contentious issue.' },
                { word: 'Paradoxically',    translation: 'بشكل متناقض',           example: 'Paradoxically, more choice can lead to less satisfaction.' },
                { word: 'Insidious',        translation: 'خبيث/يتسلل بهدوء',      example: 'Corruption has an insidious effect on society.' },
                { word: 'Precipitate (v)',  translation: 'يُعجّل بحدوث شيء',      example: 'The scandal precipitated his resignation.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Ostensibly" means:', options: ['Obviously', 'On the surface / apparently', 'Certainly', 'Surprisingly'], answer: 1 },
                { type: 'fill_blank',      question: 'Poverty and disease are ___ linked.', answer: 'inextricably', hint: 'Cannot be separated' },
                { type: 'multiple_choice', question: '"Tacit agreement" means:', options: ['Written agreement', 'Unspoken/implied agreement', 'Legal agreement', 'Strong disagreement'], answer: 1 },
                { type: 'match',           question: 'Match advanced vocabulary', pairs: [['Nuanced','دقيق'],['Contentious','خلافي'],['Insidious','خبيث'],['Paradoxically','بشكل متناقض']] },
                { type: 'fill_blank',      question: 'The financial crisis ___ widespread unemployment.', answer: 'precipitated', hint: 'Caused/triggered suddenly' },
                { type: 'multiple_choice', question: '"A perfunctory response" describes:', options: ['A detailed and thoughtful response', 'A hasty, shallow response', 'A rude response', 'A long response'], answer: 1 },
              ],
            },
          },
          {
            id: 'adv1l5', title: 'Reading: Dystopian Literature', type: 'reading', xp: 50,
            content: {
              intro: 'Read and analyse a complex literary passage!',
              key_points: [
                'The passage argues that **voluntary oppression** (freedom surrendered) is more dangerous than **imposed oppression** — a central theme in dystopian fiction.',
                '**"Prescient"** = showing remarkable foresight. The passage calls Huxley\'s vision "more prescient" because it more accurately predicts modern media addiction.',
                'The final paragraph draws an explicit parallel to **modern technology** (algorithms, social media) — this is the author\'s key argument.',
              ],
              fun_fact: 'George Orwell\'s "Nineteen Eighty-Four" was written in 1948 — Orwell simply reversed the last two digits to get the title year. Published in 1949, it remains one of the most cited works in political discourse worldwide.',
              text: `**On the Nature of Freedom in Dystopian Fiction**\n\nThe dystopian genre, from Orwell's Nineteen Eighty-Four to Huxley's Brave New World, has long served as literature's most powerful lens through which to examine the paradoxical nature of freedom. What distinguishes these works from mere political allegory is their insistence that oppression is most effective — and most insidious — when it is internalised rather than externally imposed.\n\nOrwell's Oceania operates through terror and surveillance, the perpetual threat of violence maintaining conformity through fear. Yet it is Winston's ultimate, voluntary capitulation — his genuine love for Big Brother — that represents the regime's true triumph. Freedom, in this schema, is not extinguished by force but by the willing surrender of the will to be free.\n\nHuxley presents a more seductive, and perhaps more prescient, vision. In the World State, citizens are not coerced but conditioned — pharmacologically pacified by soma, distracted by sensory entertainment, and rendered incapable of the sustained reflection required for genuine autonomy. As Huxley himself observed in his later essays, "A really efficient totalitarian state would be one in which the all-powerful executive of political bosses and their army of managers control a population of slaves who do not have to be coerced, because they love their servitude."\n\nThis distinction — between freedom denied and freedom surrendered — has acquired renewed relevance in an age of algorithmic curation, dopamine-driven engagement, and the voluntary surrender of privacy in exchange for convenience. The question that both novels ultimately pose is not whether we are free, but whether we have the capacity — or the desire — to recognise our own unfreedom.`,
              exercises: [
                { type: 'multiple_choice', question: 'According to the passage, oppression is most effective when it is:', options: ['Visible and violent', 'Internalised by individuals', 'Supported by law', 'Imposed by foreign powers'], answer: 1 },
                { type: 'multiple_choice', question: 'What represents the "true triumph" of Big Brother in the passage?', options: ['Winston\'s imprisonment', 'Winston\'s torture', 'Winston\'s voluntary love for Big Brother', 'Winston\'s death'], answer: 2 },
                { type: 'fill_blank',      question: 'In Huxley\'s World State, citizens are pacified by a drug called ___.', answer: 'soma', hint: 'Look in the second body paragraph' },
                { type: 'multiple_choice', question: 'The word "prescient" in the passage means:', options: ['Incorrect', 'Old-fashioned', 'Showing foresight about the future', 'Politically biased'], answer: 2 },
                { type: 'multiple_choice', question: 'The passage suggests that modern technology:', options: ['Has made us freer', 'Parallels dystopian themes of willing surrender', 'Is entirely harmless', 'Is different from anything in dystopian fiction'], answer: 1 },
                { type: 'fill_blank',      question: 'The passage argues that both novels ask if we have the capacity to recognise our own ___.', answer: 'unfreedom', hint: 'The opposite of freedom' },
              ],
            },
          },
          {
            id: 'adv1l6', title: 'Advanced Writing: Argumentation', type: 'writing', xp: 50,
            content: {
              intro: 'Write compelling, sophisticated arguments at C1–C2 level!',
              key_points: [
                '**Concession + Refutation** is the most powerful argumentation technique: acknowledge the opposing view, then show why it fails.',
                '**Qualifying your claims** ("In most cases...", "Under certain circumstances...") shows intellectual precision — not weakness.',
                '**Sophisticated connectives** like "Notwithstanding", "By the same token", and "Insofar as" immediately signal C1+ writing.',
              ],
              common_mistakes: [
                { wrong: 'This clearly proves that technology is bad.', correct: 'This evidence strongly suggests that technology, in certain contexts, may have detrimental effects.', explanation: 'Absolute claims ("clearly proves", "always", "never") are logically vulnerable. Qualified claims are harder to refute.' },
                { wrong: 'In conclusion, as I said before...', correct: 'In conclusion, the evidence presented suggests that...', explanation: '"As I said before" in a conclusion is redundant and informal. Summarise the argument\'s significance, not just repeat it.' },
              ],
              tips: [
                'The concession-refutation structure ("While X is true, Y shows...") is the clearest sign of a sophisticated thinker — use it in every argument.',
                'Read opinion pieces in quality newspapers (The Economist, The Guardian) and analyse their argumentation structure before writing your own.',
              ],
              explanation: '✍️ **Advanced Argumentation Techniques:**\n\n**1. Concession + Refutation (most powerful technique):**\n• Acknowledge the opposing view, then counter it\n• *While it is true that X, this argument fails to account for...*\n• *Proponents of X rightly point out that..., however, this perspective overlooks...*\n• *Although X appears compelling on the surface, closer examination reveals...*\n\n**2. Qualifying your claims:**\n• *In most cases / Generally speaking / With notable exceptions...*\n• *Under certain circumstances / In specific contexts...*\n• *To a considerable degree / To some extent...*\n\n**3. Sophisticated connectives:**\n• *Notwithstanding this,* (= despite this)\n• *By the same token,* (= similarly)\n• *Insofar as* (= to the extent that)\n• *Inasmuch as* (= because / to the degree that)\n• *Hitherto* (= until now)\n• *Henceforth* (= from this point on)\n\n**4. Impersonal structures:**\n• *It could be argued that...*\n• *There is a strong case for...*\n• *One might contend that...*\n• *It remains to be seen whether...*',
              exercises: [
                { type: 'multiple_choice', question: '"Notwithstanding" means:', options: ['Because of', 'As a result', 'Despite', 'In addition to'], answer: 2 },
                { type: 'fill_blank',      question: 'While it is true that technology creates jobs, this argument ___ to account for automation.', answer: 'fails', hint: 'Concession + refutation structure' },
                { type: 'multiple_choice', question: '"By the same token" is used to introduce:', options: ['A contrasting point', 'A similar/parallel point', 'A conclusion', 'An example'], answer: 1 },
                { type: 'fill_blank',      question: 'It ___ be argued that social media has negative effects.', answer: 'could', hint: 'Impersonal modal' },
                { type: 'multiple_choice', question: 'Which phrase introduces a concession most effectively?', options: ['I think X is wrong.', 'Although X appears compelling, closer examination reveals...', 'X is totally false.', 'Nobody believes X.'], answer: 1 },
                { type: 'fill_blank',      question: '"Hitherto" means: up ___ now.', answer: 'until', hint: 'Up ___ / till now' },
              ],
            },
          },
        ],
      },
      {
        id: 'adv2', title: 'Mastery Vocabulary & Style', icon: '🎯',
        lessons: [
          {
            id: 'adv2l1', title: 'Nuanced Vocabulary', type: 'vocabulary', xp: 50,
            content: {
              intro: 'Command subtle differences between near-synonyms!',
              key_points: [
                '**Nuanced vocabulary** means understanding the subtle differences: "reticent" (reluctant to speak) ≠ "reluctant" (unwilling in general).',
                'Many advanced words are **stronger or more specific** versions of simpler words: "exacerbate" is stronger than "worsen"; "elicit" is more precise than "get".',
                'Words like **"tacit"** and **"ostensibly"** are especially useful because they convey complex ideas in a single word.',
              ],
              tips: [
                'When you learn a new C1/C2 word, also learn what it\'s NOT: "reticent" is only used for speech/sharing information, not for reluctance in general.',
                'Build vocabulary maps: link new words to their synonyms, antonyms, collocations, and one example sentence you create yourself.',
              ],
              fun_fact: 'The word "tacit" comes from the Latin "tacitus" (silent). Many of our most sophisticated English words come from Latin and Greek — which is why learning roots dramatically speeds up vocabulary acquisition.',
              vocabulary: [
                { word: 'Allude (to)', translation: 'يُلمّح إلى', example: 'The author alludes to Greek mythology throughout the novel.' },
                { word: 'Elicit', translation: 'يستدعي/يستثير', example: 'The speech elicited strong emotions from the crowd.' },
                { word: 'Exacerbate', translation: 'يُفاقم', example: 'Stress can exacerbate health problems.' },
                { word: 'Ostensibly', translation: 'في الظاهر', example: 'The policy was ostensibly designed to help the poor.' },
                { word: 'Predicated on', translation: 'مبني على', example: 'Success is predicated on consistent effort.' },
                { word: 'Reticent', translation: 'كتوم/متحفظ', example: 'She was reticent about sharing her personal life.' },
                { word: 'Tacit', translation: 'ضمني/غير معلن', example: 'There was a tacit agreement between the two parties.' },
                { word: 'Unequivocal', translation: 'لا لبس فيه/قاطع', example: 'Her support was unequivocal.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Exacerbate" means:', options: ['To improve', 'To worsen', 'To explain', 'To prevent'], answer: 1 },
                { type: 'fill_blank', question: 'The decision was ___ made to save costs, but the real reason was different.', answer: 'ostensibly', hint: 'Apparently but not really' },
                { type: 'multiple_choice', question: '"Tacit" agreement means:', options: ['A written contract', 'An unspoken understanding', 'A legal dispute', 'A verbal argument'], answer: 1 },
                { type: 'fill_blank', question: 'Her support for the campaign was ___ — there was no doubt.', answer: 'unequivocal', hint: 'Completely clear and certain' },
                { type: 'match', question: 'Match the advanced words', pairs: [['Allude','يلمح'],['Elicit','يستثير'],['Reticent','كتوم'],['Tacit','ضمني']] },
                { type: 'translate', question: 'Translate: التقدم مبني على العمل الجاد والمثابرة', answer: 'Progress is predicated on hard work and perseverance', hint: 'is predicated on...' },
              ],
            },
          },
          {
            id: 'adv2l2', title: 'Discourse & Cohesion', type: 'grammar', xp: 50,
            content: {
              intro: 'Control the flow and coherence of complex texts!',
              key_points: [
                '**Cohesion** = the mechanical links between sentences (pronouns, synonyms, discourse markers). **Coherence** = the logical flow of ideas.',
                'Use **reference substitution** to avoid repetition: don\'t repeat "the policy" five times — use "it", "this measure", "the reform", "these changes".',
                '**Concession markers** ("Granted...", "Admittedly...", "While it cannot be denied...") signal intellectual sophistication and honest argumentation.',
              ],
              common_mistakes: [
                { wrong: 'However, but, the results were different.', correct: 'However, the results differed significantly.', explanation: 'Don\'t combine "however" and "but" — they both introduce contrast. Use one or the other.' },
                { wrong: 'In addition, furthermore, also more...', correct: 'Furthermore, the data also reveals...', explanation: 'Using multiple addition markers in one sentence is repetitive. Choose the strongest one.' },
              ],
              tips: [
                'Read your writing aloud — if you stumble or it sounds choppy, you\'re missing cohesion. Smooth writing sounds natural when spoken.',
                'For every paragraph, check the first and last sentence: the first should announce the topic, the last should create a link to the next paragraph.',
              ],
              explanation: '📝 **Advanced Discourse Markers:**\n\n**Concession (giving ground before arguing):**\n• *Granted, ... nevertheless,...*\n• *Admittedly, ... yet,...*\n• *While it cannot be denied that...*\n\n**Reformulation (saying it differently):**\n• *In other words,...* · *That is to say,...*\n• *To put it another way,...*\n\n**Logical conclusion:**\n• *It therefore follows that...*\n• *The logical implication is...*\n• *This inevitably leads to...*\n\n**Reference and substitution:**\n• Using pronouns, synonyms, and demonstratives to avoid repetition\n• *The policy was introduced in 2020. **It** was designed to...*\n• *The reforms... **These changes** have...*',
              exercises: [
                { type: 'multiple_choice', question: '"Granted, costs are high; nevertheless, the benefits outweigh them." This shows:', options: ['Agreement', 'Concession followed by a counter-argument', 'A conclusion', 'An example'], answer: 1 },
                { type: 'fill_blank', question: '___, it cannot be denied that social media connects people globally.', answer: 'Admittedly', hint: 'Concession word' },
                { type: 'multiple_choice', question: '"In other words" is a marker of:', options: ['Contrast', 'Concession', 'Reformulation', 'Addition'], answer: 2 },
                { type: 'fill_blank', question: 'It therefore ___ that stricter regulation is necessary.', answer: 'follows', hint: 'It therefore follows that...' },
                { type: 'multiple_choice', question: 'Using "these changes" instead of repeating "the reforms" is an example of:', options: ['Inversion', 'Reference and substitution', 'Passive voice', 'Inversion'], answer: 1 },
                { type: 'translate', question: 'Translate: بالرغم من أن التكاليف مرتفعة، إلا أن الفوائد تفوقها', answer: 'Granted the costs are high nevertheless the benefits outweigh them', hint: 'Granted... nevertheless...' },
              ],
            },
          },
          {
            id: 'adv2l3', title: 'Advanced Reading: Critical Analysis', type: 'reading', xp: 50,
            content: {
              intro: 'Analyse complex texts for argument, bias, and implication!',
              key_points: [
                'The passage contrasts two types: **"maximisers"** (seek the best option) and **"satisficers"** (accept "good enough") — satisficers are happier.',
                'Notice the **balanced structure**: the passage presents Schwartz\'s theory, then introduces critics. This is academic objectivity in action.',
                'The final paragraph uses **"considerable"** and **"intensified"** — hedged but emphatic language that evaluates the significance of the debate.',
              ],
              fun_fact: 'Barry Schwartz\'s book "The Paradox of Choice" (2004) became widely influential. His TED Talk on the same topic has over 16 million views. The "satisficer" concept was originally coined by economist Herbert Simon in 1956.',
              text: `**The Paradox of Choice**\n\nIn his influential work, psychologist Barry Schwartz argues that an abundance of options does not lead to greater happiness but rather to increased anxiety and paralysis. This phenomenon, which he terms "the paradox of choice," challenges the fundamental economic assumption that more options always benefit consumers.\n\nSchwartz distinguishes between two types of decision-makers: "maximisers," who seek the very best option, and "satisficers," who settle for "good enough." Paradoxically, satisficers tend to report higher levels of satisfaction, as they are less troubled by the opportunities they have forfeited.\n\nCritics of Schwartz's theory argue that choice is still preferable to lack of choice, and that the problem lies not with options themselves but with an individual\'s decision-making framework. They suggest that structured decision-making strategies — such as setting non-negotiable criteria before evaluating options — can mitigate the psychological burden of choice.\n\nThe implications for consumer behaviour, public policy, and personal wellbeing are considerable, and the debate has intensified as the digital economy continues to multiply the choices available in virtually every domain of life.`,
              exercises: [
                { type: 'multiple_choice', question: 'What does "the paradox of choice" refer to?', options: ['Having no choices available', 'More choices leading to less happiness', 'The joy of selecting from many options', 'Economic models of consumer behaviour'], answer: 1 },
                { type: 'multiple_choice', question: 'According to Schwartz, who is HAPPIER on average?', options: ['Maximisers', 'Satisficers', 'Economists', 'Both equally'], answer: 1 },
                { type: 'fill_blank', question: 'Critics suggest that ___ decision-making strategies can reduce the burden of choice.', answer: 'structured', hint: 'Find the word before "decision-making" in paragraph 3' },
                { type: 'multiple_choice', question: 'The word "mitigate" in the text means:', options: ['Increase', 'Eliminate', 'Reduce', 'Measure'], answer: 2 },
                { type: 'multiple_choice', question: 'Which best describes the author\'s tone?', options: ['Strongly in favour of Schwartz', 'Strongly against Schwartz', 'Balanced and analytical', 'Humorous and informal'], answer: 2 },
                { type: 'fill_blank', question: 'The digital economy has ___ the choices available in most areas of life.', answer: 'multiplied', hint: 'Increased greatly in number' },
              ],
            },
          },
          {
            id: 'adv2l4', title: 'Idiomatic & Figurative Language', type: 'vocabulary', xp: 50,
            content: {
              intro: 'Use figurative language like a native speaker!',
              key_points: [
                'Idioms like **"the elephant in the room"** and **"a double-edged sword"** appear in serious journalism, academic discussions, and business writing.',
                '**"Catch-22"** (from Joseph Heller\'s novel) is now a common English expression for any no-win situation — a great example of literature entering everyday language.',
                'Figurative language makes writing **vivid and memorable** — use it strategically, not constantly, for maximum impact.',
              ],
              tips: [
                'Collect idioms you encounter while reading — keep a notebook specifically for figurative language. Context teaches meaning better than any dictionary.',
                'Advanced idioms like "go against the grain" and "throw caution to the wind" are appropriate in both formal essays and informal conversation.',
              ],
              fun_fact: '"Catch-22" was coined by novelist Joseph Heller in his 1961 novel — it entered dictionaries and everyday English within years of publication, a rare example of a literary term becoming universal common usage.',
              vocabulary: [
                { word: 'Catch-22', translation: 'مأزق لا مفر منه', example: 'You need experience to get a job, but a job to get experience — a classic catch-22.' },
                { word: 'Red tape', translation: 'بيروقراطية', example: 'The project was delayed by bureaucratic red tape.' },
                { word: 'The elephant in the room', translation: 'الأمر الصعب الذي يتجاهله الجميع', example: 'Budget cuts are the elephant in the room nobody wants to discuss.' },
                { word: 'A double-edged sword', translation: 'سيف ذو حدين', example: 'Technology is a double-edged sword — it connects and isolates us.' },
                { word: 'Throw caution to the wind', translation: 'يتصرف بتهور', example: 'She threw caution to the wind and quit her job to travel.' },
                { word: 'Go against the grain', translation: 'يخالف التيار', example: 'His unconventional ideas go against the grain.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"A double-edged sword" means:', options: ['A literal weapon', 'Something with both advantages and disadvantages', 'A very sharp argument', 'A two-sided debate'], answer: 1 },
                { type: 'fill_blank', question: 'Talking about salary cuts was the ___ in the room.', answer: 'elephant', hint: 'The uncomfortable topic everyone avoids' },
                { type: 'multiple_choice', question: '"Red tape" refers to:', options: ['Physical tape', 'A country\'s flag', 'Excessive bureaucracy', 'An official document'], answer: 2 },
                { type: 'fill_blank', question: 'Taking such a risky investment was ___ caution to the wind.', answer: 'throwing', hint: 'throw caution to the wind' },
                { type: 'multiple_choice', question: '"Go against the grain" means:', options: ['Work with others', 'Follow popular opinion', 'Act against what is normal', 'Be very productive'], answer: 2 },
                { type: 'translate', question: 'Translate: التكنولوجيا سيف ذو حدين في مجال التعليم', answer: 'Technology is a double-edged sword in education', hint: 'a double-edged sword...' },
              ],
            },
          },
          {
            id: 'adv2l5', title: 'Writing: The Art of Persuasion', type: 'writing', xp: 50,
            content: {
              intro: 'Craft compelling arguments using rhetorical devices!',
              key_points: [
                'The **tricolon** (rule of three) is the most powerful rhetorical device — "Life, liberty, and the pursuit of happiness" — three elements feel complete and memorable.',
                '**Rhetorical questions** engage the reader directly: "Can we afford to ignore this?" forces the reader to mentally answer "No."',
                '**Statistical authority** lends credibility: one precise statistic with a named source is worth more than three vague claims.',
              ],
              tips: [
                'Study great speeches (Churchill, Obama, MLK) and identify the rhetorical devices they use — this teaches persuasion better than any textbook.',
                'Vary your persuasive techniques: use a tricolon once, a rhetorical question once, a statistic once — variety creates dynamism.',
              ],
              explanation: '✍️ **Rhetorical Devices:**\n\n**Tricolon** (rule of three):\n• *Education empowers individuals, strengthens communities, and transforms nations.*\n\n**Anaphora** (repeated opening):\n• *We need investment. We need reform. We need action.*\n\n**Rhetorical question:**\n• *Can we afford to ignore the evidence any longer?*\n\n**Concession + rebuttal:**\n• *While critics argue... , the evidence overwhelmingly demonstrates...*\n\n**Statistical authority:**\n• *According to UNESCO, 750 million adults worldwide cannot read or write.*\n\n**Appeal to consequence:**\n• *If we fail to act, future generations will bear the cost.*',
              exercises: [
                { type: 'multiple_choice', question: '"Education empowers, inspires, and transforms." This is a:', options: ['Rhetorical question', 'Tricolon', 'Anaphora', 'Concession'], answer: 1 },
                { type: 'fill_blank', question: '"Can we afford to ___ the evidence?" is a rhetorical question.', answer: 'ignore', hint: 'To disregard or not pay attention to' },
                { type: 'multiple_choice', question: 'Anaphora means:', options: ['Repeating the same sentence ending', 'Repeating the same word or phrase at the start', 'Using three points', 'Asking a question'], answer: 1 },
                { type: 'fill_blank', question: 'If we ___ to act now, the damage will be irreversible.', answer: 'fail', hint: 'Appeal to consequence: If we fail...' },
                { type: 'multiple_choice', question: 'Which sentence uses statistical authority?', options: ['I think education is important.', 'According to UNESCO, 750 million adults cannot read.', 'Education is clearly crucial.', 'We all know education matters.'], answer: 1 },
                { type: 'translate', question: 'Translate: هل يمكننا أن نتجاهل هذا الدليل بعد الآن؟', answer: 'Can we afford to ignore this evidence any longer?', hint: 'Can we afford to...' },
              ],
            },
          },
          {
            id: 'adv2l6', title: 'Speaking: Advanced Discussion', type: 'speaking', xp: 50,
            content: {
              intro: 'Engage in high-level discussion with sophistication and nuance!',
              key_points: [
                '**Hedging** in discussion ("It could be argued...", "To a certain extent...") shows intellectual caution — it\'s a sign of sophistication, not weakness.',
                'The phrase **"I\'d nuance that by saying..."** is extremely powerful — it lets you partially agree while refining the idea.',
                '**"That raises an interesting question about..."** shows you\'re thinking critically and extending the conversation beyond the surface level.',
              ],
              tips: [
                'Practice discussions with a timer: speak for 90 seconds on any topic without stopping. This builds the fluency required for C1/C2 speaking.',
                'In academic discussions, the goal is not to "win" but to advance understanding — listen actively and build on what others say.',
              ],
              explanation: '🗣️ **C1/C2 Discussion Skills:**\n\n**Hedging (making statements more tentative):**\n• *It could be argued that...*\n• *There is some evidence to suggest...*\n• *To a certain extent,...*\n• *It is worth bearing in mind that...*\n\n**Challenging ideas politely:**\n• *That\'s an interesting perspective, although I\'d push back slightly on...*\n• *I take your point, but the evidence also suggests...*\n• *I\'d nuance that by saying...*\n\n**Showing intellectual engagement:**\n• *That raises an interesting question about...*\n• *The implications of that are quite far-reaching...*\n• *I\'d like to build on that point...*',
              exercises: [
                { type: 'multiple_choice', question: '"It could be argued that" is an example of:', options: ['Making a strong claim', 'Hedging', 'Agreeing completely', 'Giving an example'], answer: 1 },
                { type: 'fill_blank', question: 'That raises an interesting ___ about the role of government.', answer: 'question', hint: 'That raises an interesting question...' },
                { type: 'multiple_choice', question: '"I\'d nuance that by saying..." is used to:', options: ['Completely disagree', 'Add subtle refinement to an idea', 'Change the topic', 'Ask for clarification'], answer: 1 },
                { type: 'fill_blank', question: 'To a certain ___, technology has improved education.', answer: 'extent', hint: 'To a certain extent...' },
                { type: 'multiple_choice', question: 'Which phrase politely challenges an idea?', options: ['You\'re wrong.', 'I completely disagree.', 'I take your point, but the evidence also suggests...', 'That\'s not true at all.'], answer: 2 },
                { type: 'translate', question: 'Translate: يمكن القول إن العولمة لها فوائد وعيوب', answer: 'It could be argued that globalisation has both benefits and drawbacks', hint: 'It could be argued that...' },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  ENGLISH FOR FREELANCERS (B1–C1)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'freelancer',
    title: 'English for Freelancers',
    level: 'B1–C1',
    description: 'Master professional English for freelance work. Write winning proposals, communicate with clients across technical, marketing, and creative fields, and handle negotiations with confidence.',
    color: '#8B5CF6',
    icon: '💼',
    xpPerLesson: 35,
    units: [

      // ── Unit 1: Winning Clients ────────────────────────────────────
      {
        id: 'fr1', title: 'Winning Clients', icon: '🤝',
        lessons: [

          // fr1l1 ─ Writing a Winning Proposal
          {
            id: 'fr1l1', title: 'Writing a Winning Proposal', type: 'grammar', xp: 35,
            content: {
              intro: 'Learn the structure, language, and professional tone that turn a job posting into a signed contract.',
              explanation: `📝 **The 5-Part Freelance Proposal Formula:**

**① Opening Hook** — Show you understand their problem.
> *"I noticed your landing page has a high bounce rate. I've helped three SaaS companies reduce bounce by 35% using targeted UX copy — and I can do the same for you."*

**② Proof of Fit** — One relevant achievement, briefly.
> *"In my last project for a Fintech startup, I redesigned their onboarding flow and increased sign-ups by 28%."*

**③ Your Approach** — What you will do, step by step.
> *"I would start with a 30-minute discovery call, then deliver a wireframe within 3 days and the full design within 10."*

**④ Deliverables & Timeline** — Be specific.
> *"Deliverables: 5 responsive pages, source files, and a style guide. Timeline: 12 business days."*

**⑤ Soft CTA** — Invite next step without pressure.
> *"If this sounds like a good fit, I'd love to jump on a quick call at your convenience."*

---
**Grammar: Modal Verbs for Professional Proposals**

| Modal | Use | Example |
|-------|-----|---------|
| **would** | Polite plan | *I would start with research.* |
| **can** | Confident ability | *I can deliver in 5 days.* |
| **could** | Flexible option | *We could also add a mobile version.* |
| **will** | Strong commitment | *I will send a draft by Friday.* |

**Tip:** Avoid "I think I can maybe…" — it sounds unsure. Use "I will" and "I can" with confidence.`,
              examples: [
                'I would love to discuss how I can help you achieve your goals.',
                'I can deliver the first draft within 48 hours.',
                'Having worked with 20+ e-commerce brands, I understand exactly what you need.',
                'If you\'d like to move forward, I\'m available for a call this week.',
              ],
              key_points: [
                'Start with **their problem**, not your skills — show you read the brief carefully.',
                'Use **modal verbs** (would, can, will) to sound confident and professional, not tentative.',
                'Be **specific** about deliverables and timelines — vague proposals lose to specific ones.',
                'End with a **soft call-to-action** that makes it easy for the client to say yes.',
              ],
              common_mistakes: [
                { wrong: 'I think I might be able to do this project maybe.', correct: 'I can deliver this project within your timeline.', explanation: 'Stacking "think", "might", "maybe" sounds uncertain. Clients choose freelancers who project confidence.' },
                { wrong: 'I am very hardworking and passionate about my work.', correct: 'In my last project, I increased email open rates by 40%.', explanation: 'Generic adjectives mean nothing. Replace them with specific, measurable achievements.' },
                { wrong: 'Please let me know if you want to hire me.', correct: 'I\'d love to jump on a 15-minute call — are you free this week?', explanation: 'A specific next step (call, demo) is more actionable than a vague "let me know".' },
              ],
              tips: [
                'Read the entire job post twice before writing. Mirror the client\'s exact words — if they say "fast turnaround", use that phrase.',
                'Keep proposals under 300 words. Clients read dozens of proposals; shorter and focused wins over long and generic.',
                'Personalise the first sentence every time — copy-paste proposals are obvious and get rejected.',
              ],
              fun_fact: 'Research from Upwork shows that proposals sent within the first hour of a job being posted are 3× more likely to be accepted than those sent later.',
              exercises: [
                { type: 'multiple_choice', question: 'What should the opening of a freelance proposal focus on?', options: ['Your years of experience', 'The client\'s problem and your understanding of it', 'Your hourly rate', 'A list of your skills'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ deliver the first draft within 48 hours. (strong commitment)', answer: 'will', hint: 'Modal verb for a firm promise' },
                { type: 'multiple_choice', question: 'Which sentence sounds most professional in a proposal?', options: ['I think maybe I could try to help.', 'I am very passionate about design.', 'I can increase your conversion rate — I did it for 5 similar clients.', 'Please hire me for this job.'], answer: 2 },
                { type: 'fill_blank', question: '___ we could also include a mobile version at no extra cost. (flexible offer)', answer: 'Alternatively', hint: 'A word that introduces an optional addition' },
                { type: 'multiple_choice', question: 'A "soft CTA" at the end of a proposal means:', options: ['Demanding the client respond immediately', 'Inviting the next step without pressure', 'Saying you need the money urgently', 'Listing all your previous clients'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [a / I / schedule / call / would / love / to]', words: ['a','I','schedule','call','would','love','to'], answer: 'I would love to schedule a call' },
                { type: 'fill_blank', question: 'Having worked with 20+ e-commerce brands, I ___ exactly what you need.', answer: 'understand', hint: 'Shows knowledge from experience' },
                { type: 'multiple_choice', question: 'How long should a freelance proposal ideally be?', options: ['50 words', 'Under 300 words', '500–800 words', 'As long as possible to show effort'], answer: 1 },
              ],
            },
          },

          // fr1l2 ─ The First Client Call
          {
            id: 'fr1l2', title: 'The First Client Call', type: 'dialogue', xp: 35,
            content: {
              intro: 'A great discovery call builds trust, uncovers the real brief, and sets the stage for a long-term relationship. Read this real scenario!',
              dialogue: `**Omar (freelance UX designer) is on a video call with Rachel (founder of a health-tech startup).**

Rachel: Hi Omar, thanks for jumping on this call! I loved your proposal — it was the most specific one we received.

Omar: Thanks, Rachel! I spent some time on your website before writing it. I noticed the checkout flow has quite a few steps — is that a pain point for you?

Rachel: Exactly! Our drop-off rate at checkout is around 60%, which is really hurting our revenue.

Omar: Okay, that's super helpful context. Can I ask — are most of your users on mobile or desktop?

Rachel: About 70% are on mobile, actually.

Omar: That explains a lot. Mobile checkout flows need to be much shorter. My approach would be to simplify it to 3 steps maximum and add a progress indicator so users know how close they are to finishing.

Rachel: That sounds great. What would the timeline look like?

Omar: I'd start with a 2-day research phase — looking at your analytics and competitor flows. Then I'd deliver wireframes by day 5 and the final interactive prototype by day 12.

Rachel: Perfect. And what about revisions?

Omar: My packages include two rounds of revisions, which is usually more than enough. If we need more, we can discuss an hourly rate for additional changes.

Rachel: That sounds fair. What's your rate for this?

Omar: Based on what you've described, I'd estimate $1,800 for the full project. That includes the research, wireframes, prototype, and two revision rounds.

Rachel: Let me discuss with my co-founder and come back to you by Thursday. Is that okay?

Omar: Absolutely, no rush at all. I'll send a brief summary of what we discussed so you have everything in one place.

Rachel: That would be really helpful. Thanks, Omar!

Omar: My pleasure — speak soon, Rachel!`,
              vocabulary: [
                { word: 'Discovery call',    translation: 'مكالمة استكشافية',    example: 'The discovery call helped us understand what the client really needed.' },
                { word: 'Drop-off rate',     translation: 'معدل التسرب',          example: 'A 60% drop-off rate at checkout means 6 in 10 users abandon the purchase.' },
                { word: 'Pain point',        translation: 'نقطة الألم / المشكلة', example: 'What\'s your biggest pain point with your current website?' },
                { word: 'Wireframe',         translation: 'مخطط الواجهة',         example: 'I will send wireframes for your approval before moving to the final design.' },
                { word: 'Prototype',         translation: 'نموذج أولي',           example: 'The interactive prototype lets you click through the design like a real product.' },
                { word: 'Revision round',    translation: 'جولة تعديلات',         example: 'Two revision rounds are included in the price.' },
                { word: 'Deliverable',       translation: 'مُخرَج / ناتج العمل',  example: 'The deliverables are: a style guide, 5 pages, and source files.' },
                { word: 'Estimate',          translation: 'تقدير / سعر مبدئي',    example: 'My estimate for the full project is $2,000.' },
              ],
              key_points: [
                'Open with **a specific observation** about their business — it proves you did your research.',
                'Ask about **context** (device, user type, goals) before proposing solutions — listen first.',
                '**Summarise your approach** clearly: research phase → wireframes → prototype → revisions.',
                'Mention **what\'s included** in your price to prevent scope creep later.',
                'End with **a clear next step** and offer to send a written summary — clients appreciate this.',
              ],
              tips: [
                'Ask one question at a time. Firing five questions at once overwhelms clients and makes you seem disorganised.',
                'Take notes during the call and send a follow-up email within 2 hours: "Great speaking with you — here\'s a summary of what we discussed…"',
                'Never quote a price cold on the call. If they ask, give a range: "Based on what you\'ve shared, it would likely be $1,500–$2,200."',
              ],
              fun_fact: 'Studies on freelance platforms show that freelancers who ask at least 3 questions during a discovery call close 45% more contracts than those who immediately pitch their services.',
              exercises: [
                { type: 'multiple_choice', question: 'Why did Rachel like Omar\'s proposal?', options: ['It was the cheapest', 'It was the most specific', 'He had the most experience', 'He responded fastest'], answer: 1 },
                { type: 'fill_blank', question: 'Omar said the checkout flow has quite a ___ steps.', answer: 'few', hint: 'Means "many" in a negative context' },
                { type: 'multiple_choice', question: 'What is Omar\'s plan for the research phase?', options: ['Interview users', 'Look at analytics and competitor flows', 'Build the full prototype', 'Redesign the homepage'], answer: 1 },
                { type: 'fill_blank', question: 'My packages include two rounds of ___, which is usually more than enough.', answer: 'revisions', hint: 'Changes made after the first draft' },
                { type: 'multiple_choice', question: 'What does Omar offer to send after the call?', options: ['A new proposal', 'A contract', 'A brief summary of what they discussed', 'A full invoice'], answer: 2 },
                { type: 'fill_blank', question: 'Omar says: "Absolutely, no ___."', answer: 'rush', hint: 'Means there is no urgency / pressure' },
                { type: 'multiple_choice', question: 'What should you do if a client asks for a price immediately on a call?', options: ['Refuse to answer', 'Give a specific fixed price', 'Give a price range', 'Say you will only quote by email'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [I / discussed / summary / what / a / send / will / we / of]', words: ['I','discussed','summary','what','a','send','will','we','of'], answer: 'I will send a summary of what we discussed' },
              ],
            },
          },

          // fr1l3 ─ Professional Email Phrases
          {
            id: 'fr1l3', title: 'Professional Email Phrases', type: 'vocabulary', xp: 35,
            content: {
              intro: 'The right phrase at the right moment keeps client relationships smooth and professional. Master these 10 essential freelancer email phrases.',
              vocabulary: [
                { word: 'As per our discussion',    translation: 'كما ناقشنا',              example: 'As per our discussion, I am sending the revised brief.' },
                { word: 'Please find attached',     translation: 'يرجى الاطلاع على المرفق', example: 'Please find attached the first draft for your review.' },
                { word: 'Looking forward to your feedback', translation: 'أتطلع إلى ملاحظاتك', example: 'Looking forward to your feedback on the design.' },
                { word: 'Could you clarify',        translation: 'هل يمكنك توضيح',          example: 'Could you clarify the target audience for this campaign?' },
                { word: 'I wanted to follow up',    translation: 'أردت المتابعة',            example: 'I wanted to follow up on the proposal I sent last week.' },
                { word: 'Happy to jump on a call',  translation: 'يسعدني التحدث عبر المكالمة', example: 'If it\'s easier, I\'m happy to jump on a call to discuss this.' },
                { word: 'Kindly note that',         translation: 'يُرجى الإحاطة بأن',        example: 'Kindly note that the deadline is this Friday.' },
                { word: 'I appreciate your patience', translation: 'أقدّر صبرك',             example: 'I appreciate your patience — I\'ll send the final version by EOD.' },
                { word: 'EOD / EOP',                translation: 'نهاية اليوم / نهاية الأسبوع', example: 'I will deliver the report by EOD Friday.' },
                { word: 'Scope creep',              translation: 'توسع نطاق العمل دون اتفاق',  example: 'Adding five extra pages is scope creep — it would require a new quote.' },
              ],
              key_points: [
                '**"As per our discussion"** refers back to a previous call or email — always use it when reminding the client of an agreement.',
                '**"Please find attached"** is the standard phrase for sending documents — never just write "here it is".',
                '**EOD** = End of Day. **EOP** = End of Project. These are very common in professional communication.',
                '**Scope creep** is when a client keeps adding small requests that were not in the original agreement — address it early and professionally.',
              ],
              common_mistakes: [
                { wrong: 'Here is the file.', correct: 'Please find attached the first draft for your review.', explanation: '"Please find attached" is the professional standard for sending documents in a business email.' },
                { wrong: 'When will you pay me?', correct: 'I wanted to follow up regarding the invoice I sent on Monday.', explanation: 'Never ask directly about payment — use a polite follow-up phrase.' },
                { wrong: 'I can add that for free.', correct: 'That sounds great! As that falls outside our original scope, I would quote $150 for the addition.', explanation: 'Never give away extra work for free. Acknowledge the request positively, then address the scope and cost.' },
              ],
              tips: [
                'Always end emails with a clear next step: "Please let me know if you have any questions" or "I\'ll follow up on Thursday if I haven\'t heard back."',
                'Keep emails short — 5 sentences or fewer if possible. Clients are busy. Long emails often go unread.',
                'Use **bullet points** for lists of deliverables or questions. Numbered questions get answers; paragraph questions often get ignored.',
              ],
              fun_fact: 'The average professional receives 121 emails per day. A clear subject line and a first sentence that gets straight to the point increases reply rates by 40%.',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase is used when attaching a document to an email?', options: ['Looking forward to your feedback', 'Please find attached', 'As per our discussion', 'Kindly note that'], answer: 1 },
                { type: 'fill_blank', question: '___ our discussion, I am sending the revised contract.', answer: 'As per', hint: '3 words that refer back to a previous conversation' },
                { type: 'multiple_choice', question: 'A client asks you to add 3 extra pages that were not in the agreement. This is called:', options: ['A revision', 'Scope creep', 'A deliverable', 'A deadline extension'], answer: 1 },
                { type: 'fill_blank', question: 'I will send the final version by ___ today.', answer: 'EOD', hint: 'Abbreviation for "End of Day"' },
                { type: 'multiple_choice', question: 'What is wrong with writing "When will you pay me?" in an email?', options: ['It\'s too short', 'It\'s too direct and unprofessional', 'It uses the wrong tense', 'Nothing is wrong with it'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ to follow up on the proposal I sent last week.', answer: 'wanted', hint: 'Past tense — makes the follow-up sound softer' },
                { type: 'multiple_choice', question: 'To handle scope creep professionally, you should:', options: ['Do the extra work for free to keep the client happy', 'Ignore the request', 'Acknowledge it positively, then quote for the additional work', 'Cancel the project'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [your / forward / feedback / Looking / to]', words: ['your','forward','feedback','Looking','to'], answer: 'Looking forward to your feedback' },
              ],
            },
          },
        ],
      },

      // ── Unit 2: Field-Specific Communication ──────────────────────
      {
        id: 'fr2', title: 'Field-Specific Communication', icon: '🎯',
        lessons: [

          // fr2l1 ─ Working with Tech Clients
          {
            id: 'fr2l1', title: 'Working with Tech Clients', type: 'dialogue', xp: 35,
            content: {
              intro: 'Tech clients use a lot of jargon. Learn how to communicate clearly, ask the right questions, and sound credible — even when the specs get technical.',
              dialogue: `**Layla (freelance full-stack developer) is on a Slack call with David (CTO of a B2B SaaS startup).**

David: Hey Layla, thanks for taking this. So, the core issue is that our API response times are spiking under load. We're on AWS, running Node with a PostgreSQL backend.

Layla: Got it. Are these spikes happening on specific endpoints, or is it across the board?

David: Mainly the /reports endpoint. It runs some heavy aggregation queries on a table with about 8 million rows.

Layla: That makes sense — 8 million rows without proper indexing or query optimisation will definitely cause slowdowns. Have you already tried adding indexes on the columns you're filtering by?

David: We have a few, but I don't think they're being used correctly. The queries aren't parameterised either.

Layla: Okay. So there are two things I'd tackle first: optimise the queries and add composite indexes where needed. That alone could cut response times by 60–70%. If that's not enough, we can look at caching with Redis.

David: Redis — yes, we've been thinking about that. What's your timeline to investigate and give us a recommendation?

Layla: I'd need read access to the database and the codebase. Give me two days to analyse the bottlenecks and I'll send you a prioritised list of fixes with estimated impact.

David: Works for me. One more thing — we're also thinking of migrating to a microservices architecture later this year. Should we factor that in now?

Layla: That's a bigger conversation. For now, let's solve the immediate performance problem — it's completely independent. Once that's stable, I'm happy to consult on the migration plan separately.

David: Perfect, that's exactly the kind of focused approach we need. Let's do it.`,
              vocabulary: [
                { word: 'API (Application Programming Interface)', translation: 'واجهة برمجة التطبيقات', example: 'Our API sends data to the mobile app in real time.' },
                { word: 'Response time',      translation: 'وقت الاستجابة',       example: 'The API response time increased from 200ms to 4 seconds under load.' },
                { word: 'Endpoint',           translation: 'نقطة النهاية (رابط API)', example: 'The /users endpoint returns all registered accounts.' },
                { word: 'Query optimisation', translation: 'تحسين الاستعلام',      example: 'Query optimisation reduced the page load time by half.' },
                { word: 'Index / Indexing',   translation: 'فهرسة قاعدة البيانات', example: 'Adding an index on the email column speeds up searches dramatically.' },
                { word: 'Caching',            translation: 'التخزين المؤقت',        example: 'Redis caching stores frequent queries so the database doesn\'t run them repeatedly.' },
                { word: 'Bottleneck',         translation: 'عنق الزجاجة / نقطة الإبطاء', example: 'We identified the bottleneck — it was one slow database query.' },
                { word: 'Microservices',      translation: 'الخدمات المصغّرة',      example: 'A microservices architecture splits the app into small independent services.' },
              ],
              key_points: [
                'Ask **specific scoping questions** first: "Is this on specific endpoints or across the board?" — it shows expertise.',
                'Translate technical diagnosis into **business impact**: "This could cut response times by 60–70%."',
                '**Prioritise the immediate problem** before discussing larger architectural changes — stay focused.',
                'When asked to expand scope, acknowledge it and **defer it gracefully**: "That\'s a bigger conversation — let\'s solve the immediate problem first."',
              ],
              tips: [
                'If a client uses a technical term you don\'t know, don\'t pretend — say: "Could you give me more context on how you\'re using X?" It\'s better than delivering the wrong thing.',
                'Always ask for access (codebase, database, analytics) before quoting a timeline. You can\'t estimate what you can\'t see.',
                'Frame your solutions in terms of business outcome, not just technical detail. CTOs care about uptime and revenue, not just code quality.',
              ],
              fun_fact: 'A 100ms improvement in page load time can increase conversion rates by 1% — which is why tech clients obsess over performance numbers.',
              exercises: [
                { type: 'multiple_choice', question: 'What is causing the API slowdown according to the dialogue?', options: ['Too many users logging in', 'Heavy aggregation queries on a large table', 'A bug in the mobile app', 'Wrong AWS configuration'], answer: 1 },
                { type: 'fill_blank', question: 'Layla says: "There are two things I\'d ___ first: optimise the queries and add composite indexes."', answer: 'tackle', hint: 'Means "address" or "deal with"' },
                { type: 'multiple_choice', question: 'What does "bottleneck" mean in a technical context?', options: ['A type of database table', 'The slowest part of a system that limits performance', 'A security vulnerability', 'A caching strategy'], answer: 1 },
                { type: 'fill_blank', question: 'That alone could ___ response times by 60–70%.', answer: 'cut', hint: 'Means "reduce" or "decrease"' },
                { type: 'multiple_choice', question: 'When the client asks about migrating to microservices, Layla:', options: ['Agrees to include it in the current project', 'Ignores the question', 'Defers it and focuses on the immediate problem', 'Says she doesn\'t know about microservices'], answer: 2 },
                { type: 'fill_blank', question: 'Give me two days to analyse the ___ and I\'ll send you a prioritised list.', answer: 'bottlenecks', hint: 'Points of slowness in the system' },
                { type: 'multiple_choice', question: 'Before quoting a timeline, Layla asks for:', options: ['The company\'s revenue figures', 'Read access to the database and codebase', 'A signed contract first', 'The client\'s budget'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [the / Let\'s / immediate / solve / problem / performance]', words: ["Let's",'solve','the','immediate','performance','problem'], answer: "Let's solve the immediate performance problem" },
              ],
            },
          },

          // fr2l2 ─ Marketing & Creative Briefs
          {
            id: 'fr2l2', title: 'Marketing & Creative Briefs', type: 'vocabulary', xp: 35,
            content: {
              intro: 'Marketing clients speak a specific language. Master these terms to understand briefs, ask smart questions, and deliver exactly what they expect.',
              vocabulary: [
                { word: 'Creative brief',      translation: 'الموجز الإبداعي',        example: 'The creative brief outlines the campaign goals, audience, and tone of voice.' },
                { word: 'Target audience',     translation: 'الجمهور المستهدف',        example: 'Our target audience is women aged 25–40 interested in sustainable fashion.' },
                { word: 'Brand voice',         translation: 'صوت العلامة التجارية',    example: 'Our brand voice is friendly, professional, and a little playful.' },
                { word: 'Copy / Copywriting',  translation: 'النصوص التسويقية / كتابة الإعلانات', example: 'The copywriter wrote punchy copy for the Facebook ads.' },
                { word: 'CTR (Click-Through Rate)', translation: 'معدل النقر',        example: 'The ad had a 4.5% CTR, which is above the industry average.' },
                { word: 'Conversion',          translation: 'تحويل (تحقيق الهدف)',     example: 'We optimised the landing page to increase conversions.' },
                { word: 'Funnel',              translation: 'قمع التسويق',             example: 'The top of the funnel attracts awareness; the bottom drives purchases.' },
                { word: 'Deliverables',        translation: 'مُخرجات العمل',           example: 'The deliverables for this campaign are: 3 ad creatives, 5 captions, and 1 landing page.' },
                { word: 'Tone of voice',       translation: 'أسلوب التواصل',           example: 'Use a warm, empathetic tone of voice for the healthcare client.' },
                { word: 'KPIs (Key Performance Indicators)', translation: 'مؤشرات الأداء الرئيسية', example: 'The KPIs are CTR above 3% and cost-per-click below $0.80.' },
              ],
              key_points: [
                'Always ask for a **creative brief** before starting any marketing project — it prevents misunderstandings.',
                '**Brand voice** defines how a company "sounds" — always ask: formal or casual? Playful or serious? Bold or understated?',
                '**KPIs** tell you how success is measured — ask about them upfront so your work is judged on the right metrics.',
                '**Deliverables** must be agreed in writing before the project starts — number of ads, word counts, image dimensions, etc.',
              ],
              common_mistakes: [
                { wrong: 'I will write good ads for you.', correct: 'I will create 3 ad variations targeting your 25–40 female demographic, optimised for a CTR above 3%.', explanation: 'Vague promises signal a junior freelancer. Be specific about what you\'ll deliver and how you\'ll measure success.' },
                { wrong: 'What do you want the ads to say?', correct: 'Could you share the creative brief, and what\'s the primary KPI for this campaign — CTR, conversions, or brand awareness?', explanation: '"What do you want?" sounds passive. A professional asks about strategy and objectives.' },
                { wrong: 'I\'ll do whatever the client wants.', correct: 'Based on the brief, I\'d recommend a conversational tone — studies show it outperforms formal copy for your target demographic.', explanation: 'Clients hire experts for their opinion. Don\'t just execute — advise. It raises your perceived value.' },
              ],
              tips: [
                'Ask for **examples of content the client loves and hates** — it tells you more about brand voice than any written description.',
                'When a client says "make it pop" or "make it modern", ask them to show you 3 examples they consider "modern". Subjective words mean different things to different people.',
                'Confirm **file formats and dimensions** before designing anything. Clients often ask for a "social media graphic" without specifying if it\'s for Instagram Stories (9:16) or Facebook feed (1:1).',
              ],
              fun_fact: 'Marketing emails with personalised subject lines are 26% more likely to be opened — which is why copywriters who understand data earn significantly more than those who don\'t.',
              exercises: [
                { type: 'multiple_choice', question: 'What is a "creative brief"?', options: ['A short creative story', 'A document outlining campaign goals, audience, and tone', 'A type of invoice for creative work', 'A 30-second ad script'], answer: 1 },
                { type: 'fill_blank', question: 'Our ___ is women aged 25–40 interested in sustainable fashion.', answer: 'target audience', hint: 'The specific group the marketing is aimed at' },
                { type: 'multiple_choice', question: 'CTR stands for:', options: ['Creative Team Response', 'Click-Through Rate', 'Client Total Revenue', 'Content Transfer Rate'], answer: 1 },
                { type: 'fill_blank', question: 'The ad had a 4.5% ___, which is above the industry average.', answer: 'CTR', hint: 'Abbreviation for Click-Through Rate' },
                { type: 'multiple_choice', question: 'A client asks you to "make it pop." What should you do?', options: ['Use bright colours', 'Ask them to show examples of what they consider "pop"', 'Write bolder headlines', 'Add more images'], answer: 1 },
                { type: 'fill_blank', question: '___ define how success is measured — ask about them before starting work.', answer: 'KPIs', hint: 'Abbreviation for Key Performance Indicators' },
                { type: 'multiple_choice', question: 'What is "scope creep" in a marketing project?', options: ['Writing copy that\'s too long', 'The client adding extra requests not in the original agreement', 'A campaign that targets the wrong audience', 'Missing a KPI target'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [brief / the / sharing / Could / creative / you]', words: ['brief','the','sharing','Could','creative','you'], answer: 'Could you sharing the creative brief' },
              ],
            },
          },

          // fr2l3 ─ Rates, Revisions & Deadlines
          {
            id: 'fr2l3', title: 'Rates, Revisions & Deadlines', type: 'dialogue', xp: 35,
            content: {
              intro: 'Money conversations are awkward — until you have the right phrases. Learn how to negotiate rates, handle revision requests, and push back on unrealistic deadlines professionally.',
              dialogue: `**Nour (freelance graphic designer) is on a call with James (marketing manager at a fashion brand).**

James: Hi Nour! We loved your portfolio. We need a full brand identity — logo, colour palette, typography, and brand guidelines. What's your rate?

Nour: Thanks, James! Brand identity projects are typically $2,500–$4,000 depending on the scope and number of concepts. Could you tell me more about the timeline and what's included?

James: We need it done in two weeks, and we'd want three logo concepts to choose from.

Nour: Two weeks is quite tight for a full brand identity. Realistically, I'd need four weeks to deliver something that truly represents your brand well. Rushing this kind of work often means you end up redoing it in six months.

James: I see your point. Could we do three weeks?

Nour: Three weeks works for me. I'd deliver three logo concepts at the end of week one, collect your feedback, refine the chosen direction, and deliver the full brand kit by the end of week three.

James: That sounds good. And how many revisions are included?

Nour: Two rounds of revisions are included at each stage. If we need more, I charge $80 per hour for additional changes.

James: Fair enough. And what about the price — could you do $2,000?

Nour: I appreciate that, James. My rate for this scope is $2,800 — that covers three concepts, two revision rounds per stage, and a full brand guidelines PDF. What I can offer is a 10% early-payment discount if you pay 50% upfront.

James: That's actually helpful — we can do that. So $2,520 total with the deposit?

Nour: Exactly. I'll send the contract and invoice today.

James: Perfect. Looking forward to working with you!`,
              vocabulary: [
                { word: 'Scope',              translation: 'نطاق العمل',                 example: 'The scope of the project includes logo, website, and business cards.' },
                { word: 'Rate',               translation: 'السعر / الأجر',              example: 'My rate for branding projects is $3,000 fixed.' },
                { word: 'Deposit / Upfront',  translation: 'دفعة مقدمة',                example: 'I require 50% upfront before starting the project.' },
                { word: 'Brand kit',          translation: 'حزمة الهوية التجارية',       example: 'The brand kit includes logos in all formats, colour codes, and font files.' },
                { word: 'Rush fee',           translation: 'رسوم الاستعجال',             example: 'For a 48-hour turnaround, I charge a 30% rush fee.' },
                { word: 'Revise / Revision',  translation: 'تعديل / مراجعة',            example: 'Two revision rounds are included; additional changes are billed hourly.' },
                { word: 'Tight deadline',     translation: 'موعد نهائي ضيق',            example: 'Two weeks is a tight deadline for a full rebrand.' },
                { word: 'Retainer',           translation: 'عقد خدمة شهري ثابت',        example: 'We agreed on a monthly retainer of $800 for social media graphics.' },
              ],
              key_points: [
                'Give a **price range** first, then ask about scope — you can\'t quote accurately without knowing the full brief.',
                'When a deadline is unrealistic, **explain the business risk** of rushing ("you\'ll end up redoing it") rather than just refusing.',
                '**Never drop your rate without getting something in return** — offer a discount only tied to a condition (early payment, reduced scope).',
                'Always follow up a verbal agreement with a **written contract** — it protects both sides.',
              ],
              common_mistakes: [
                { wrong: 'Okay, I can do it for $2,000.', correct: 'My rate for this scope is $2,800. What I can offer is a 10% early-payment discount.', explanation: 'Dropping your rate without a condition signals that your prices aren\'t real. Always tie a discount to something.' },
                { wrong: 'I can\'t do it in two weeks.', correct: 'Two weeks is quite tight for this scope. Realistically, four weeks would give us the quality you deserve.', explanation: 'A flat refusal sounds inflexible. Explain the risk and offer an alternative timeline.' },
                { wrong: 'How many changes do you want?', correct: 'Two rounds of revisions are included. Additional changes are billed at $80/hour.', explanation: 'Never ask an open question about revisions — set the number upfront or revisions will be unlimited.' },
              ],
              tips: [
                'Always include a **revision clause** in your contract. Without it, clients may request unlimited changes for free.',
                'If a client haggles aggressively, offer to **reduce the scope** rather than the rate: "I could do logo only for $1,500 — the full brand kit would be $2,800."',
                'Send invoices with a **clear payment schedule**: 50% before, 50% on delivery. It reduces the risk of non-payment significantly.',
              ],
              fun_fact: 'Research shows that freelancers who charge a deposit are 80% less likely to experience non-payment — the deposit filters out clients who aren\'t serious.',
              exercises: [
                { type: 'multiple_choice', question: 'Why does Nour suggest 4 weeks instead of 2?', options: ['She is too busy with other projects', 'Rushing brand identity work risks having to redo it later', 'She charges more for longer projects', 'She needs more concepts to choose from'], answer: 1 },
                { type: 'fill_blank', question: 'My rate for this ___ is $2,800.', answer: 'scope', hint: 'The range and details of the work agreed upon' },
                { type: 'multiple_choice', question: 'When a client asks for a lower price, Nour:', options: ['Immediately agrees to $2,000', 'Refuses to negotiate at all', 'Offers a conditional discount tied to early payment', 'Ignores the request'], answer: 2 },
                { type: 'fill_blank', question: 'I require 50% ___ before starting the project.', answer: 'upfront', hint: 'Means "in advance" / before work begins' },
                { type: 'multiple_choice', question: 'How many revision rounds are included in Nour\'s package?', options: ['One per stage', 'Two per stage', 'Unlimited', 'Three total'], answer: 1 },
                { type: 'fill_blank', question: 'For a 48-hour turnaround, I charge a 30% ___ fee.', answer: 'rush', hint: 'Extra charge for urgent work' },
                { type: 'multiple_choice', question: 'What is a "retainer" in freelancing?', options: ['A deposit for a single project', 'A monthly fixed fee for ongoing services', 'An hourly rate', 'A revision charge'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [the / I\'ll / contract / today / invoice / and / send]', words: ["I'll",'send','the','contract','and','invoice','today'], answer: "I'll send the contract and invoice today" },
              ],
            },
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  TOEFL PREPARATION (B2–C1)
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'toefl',
    title: 'TOEFL Preparation',
    level: 'B2–C1',
    description: 'Ace the TOEFL iBT with targeted strategies for all four sections — Reading, Listening, Speaking, and Writing. Master the question types, templates, and techniques used by top scorers worldwide.',
    color: '#0EA5E9',
    icon: '📝',
    xpPerLesson: 40,
    units: [

      // ── Unit 1: Reading & Listening Mastery ───────────────────────
      {
        id: 'tfl1', title: 'Reading & Listening Mastery', icon: '👂',
        lessons: [

          // tfl1l1 ─ TOEFL Reading Question Types
          {
            id: 'tfl1l1', title: 'TOEFL Reading — 7 Question Types', type: 'grammar', xp: 40,
            content: {
              intro: 'Master all 7 TOEFL reading question types and the exact strategy for each — this alone can add 5+ points to your Reading score.',
              explanation: `📖 **TOEFL Reading — Know Your Enemy:**

The TOEFL Reading section: **2 passages × 10 questions = 54 minutes total.**
Each passage is ~700 words on an academic topic (science, history, social science).

---
**① Factual / Detail Questions** *(3–4 per passage)*
> *"According to paragraph 2, which of the following is true about X?"*
✅ Strategy: Scan — go directly to the paragraph mentioned. Never re-read the whole passage.

**② Negative Factual ("NOT / EXCEPT")** *(1 per passage)*
> *"Which of the following is NOT mentioned in the passage?"*
✅ Strategy: Eliminate the 3 answers you can verify in the text — the one left is correct.

**③ Inference Questions** *(1–2 per passage)*
> *"What can be inferred about X?"*
✅ Strategy: The answer is implied, not stated. Stay close to the text — never leap too far.

**④ Rhetorical Purpose** *(1 per passage)*
> *"Why does the author mention X in paragraph 3?"*
✅ Strategy: Ask yourself: what argument is the author supporting here?

**⑤ Vocabulary in Context** *(2 per passage)*
> *"The word 'X' is closest in meaning to..."*
✅ Strategy: Cover the options, predict your own synonym first, then match.

**⑥ Sentence Simplification** *(1 per passage)*
> *"Which sentence best expresses the essential meaning?"*
✅ Strategy: Keep the main idea; drop examples and minor details.

**⑦ Prose Summary** *(1 per passage — worth 2 points)*
> Choose 3 of 6 statements that best summarise the entire passage.
✅ Strategy: Wrong options are either too specific (minor details) or contradict the text.

---
**The 3-Minute Reading Routine:**
1. Read only the **first sentence of each paragraph** (60 seconds — builds a mental map)
2. Read the **question** before going back to the relevant paragraph
3. **Never answer from memory** — always verify directly in the passage`,
              examples: [
                'According to paragraph 3, the main reason glaciers are retreating is rising global temperatures.',
                'The word "facilitate" in line 14 is closest in meaning to "enable".',
                'The author mentions the 1906 earthquake in order to illustrate the destructive power of seismic activity.',
                'It can be inferred from paragraph 4 that early astronomers lacked the technology to observe distant galaxies.',
              ],
              key_points: [
                'Always read the **question first**, then return to the specific paragraph — never answer from memory.',
                'For **Negative Factual** questions, verify 3 correct statements and eliminate them — the remaining option is the answer.',
                'For **Vocabulary in Context**, predict your own synonym before reading the options — this prevents trap answers from misleading you.',
                'For **Prose Summary**, wrong options are either minor details or directly contradict the passage.',
              ],
              common_mistakes: [
                { wrong: 'Answering inference questions based on general knowledge about the topic.', correct: 'Only use information stated or clearly implied in the passage.', explanation: 'TOEFL inference questions test reading comprehension — not topic knowledge. An answer that sounds true but is not in the text is always wrong.' },
                { wrong: 'Spending equal time on every question.', correct: 'Invest extra time on Prose Summary (worth 2 points) and move quickly past single-point detail questions.', explanation: 'Time management is critical. Prose Summary is the highest-value question in the section.' },
                { wrong: 'Re-reading the entire passage for every question.', correct: 'Skim the first sentence of each paragraph, then navigate to the relevant section for each question.', explanation: 'The first sentence of each paragraph maps the passage structure. Use it as a guide instead of re-reading everything.' },
              ],
              tips: [
                'Mentally note the **topic of each paragraph** as you skim — this map tells you exactly where to look for each question.',
                'TOEFL rarely uses absolute language like "always", "never", or "all" in correct answers — these are usually traps.',
                'In Vocabulary questions, the correct answer is the meaning of the word **as used in that specific sentence** — not its most common general meaning.',
              ],
              fun_fact: 'The TOEFL Reading section uses authentic academic texts from real university textbooks and journals — the same texts that North American university students read in class.',
              exercises: [
                { type: 'multiple_choice', question: 'In a Negative Factual ("NOT") question, your strategy should be to:', options: ['Find the one detail that the passage does NOT include', 'Eliminate the 3 answers that ARE supported in the passage', 'Choose the most surprising answer', 'Read the entire passage again before answering'], answer: 1 },
                { type: 'fill_blank', question: 'The TOEFL Reading section has 2 passages and ___ questions per passage.', answer: '10', hint: 'A round number' },
                { type: 'multiple_choice', question: 'For Vocabulary in Context questions, the best strategy is to:', options: ['Choose the most common dictionary meaning of the word', 'Predict your own synonym before looking at the answer choices', 'Choose the longest option available', 'Pick the word that sounds most academic'], answer: 1 },
                { type: 'fill_blank', question: 'For inference questions, only use information ___ or clearly implied in the passage.', answer: 'stated', hint: 'Directly written / expressed in the text' },
                { type: 'multiple_choice', question: 'The Prose Summary question is worth how many points?', options: ['1 point', '2 points', '3 points', '0.5 points'], answer: 1 },
                { type: 'fill_blank', question: 'Wrong answers in Prose Summary are either too ___ (minor details) or contradict the text.', answer: 'specific', hint: 'The opposite of general / broad' },
                { type: 'multiple_choice', question: 'A Rhetorical Purpose question asks:', options: ['What a word means in context', 'Why the author included a specific piece of information', 'Which sentence best summarises the passage', 'What can be inferred about a topic'], answer: 1 },
                { type: 'reorder', question: 'Reorder the reading strategy: [paragraph / Read / question / the / then / the / return / to]', words: ['paragraph','Read','question','the','then','the','return','to'], answer: 'Read the question then return to the paragraph' },
              ],
            },
          },

          // tfl1l2 ─ TOEFL Listening — University Lecture
          {
            id: 'tfl1l2', title: 'TOEFL Listening — University Lecture', type: 'dialogue', xp: 40,
            content: {
              intro: 'Read this full TOEFL-style university lecture on cognitive dissonance, then answer the comprehension questions — just like in the real test.',
              dialogue: `**[TOEFL Listening — Academic Lecture: Introduction to Psychology]**
**Professor Williams addresses students in an introductory psychology class.**

Professor Williams: Alright, let's pick up where we left off. Today I want to discuss a concept introduced by psychologist Leon Festinger in 1957 — cognitive dissonance. Has anyone come across this term?

[A few students raise their hands.]

Professor Williams: Good. At its core, cognitive dissonance refers to the mental discomfort a person experiences when they hold two or more contradictory beliefs simultaneously — or when their actions conflict with their beliefs. Take someone who knows smoking is harmful — they've read the studies, they understand the risks — yet they continue to smoke. The tension between "I know this is bad" and "I'm doing it anyway" — that is cognitive dissonance.

Student: Is it like feeling guilty?

Professor Williams: Great question. Guilt is related, but cognitive dissonance is broader. It's not exclusively about guilt — it's about any psychological tension arising when two cognitions, which is the technical term for beliefs or attitudes, are in conflict. And crucially, our brains are motivated to reduce this discomfort. Festinger identified three strategies.

First, we can change one of the conflicting beliefs. The smoker might say, "The health risks are actually exaggerated." Second, we can seek new information that supports one belief over the other — focusing on the rare study suggesting minimal risk. Third — and this is the most interesting — we can reduce the importance of one belief entirely. The smoker tells themselves: "I could be hit by a bus tomorrow anyway."

Student: Does this apply to everyday decisions, not just extreme cases?

Professor Williams: Absolutely — in fact, it shows up constantly. Consider buying an expensive product. After the purchase, people unconsciously seek out positive reviews and ignore negative ones. Why? Because reading a negative review creates dissonance: "I paid a lot for something that may not be worth it." This is called post-purchase rationalisation. Marketers rely on this.

Understanding cognitive dissonance matters beyond psychology — it applies to marketing, political science, and public health. It explains why people resist changing their minds even when presented with clear evidence. The brain does not always follow logic — it follows comfort.`,
              vocabulary: [
                { word: 'Cognitive dissonance', translation: 'التنافر المعرفي',       example: 'Cognitive dissonance occurs when a person\'s beliefs and actions contradict each other.' },
                { word: 'Contradictory',         translation: 'متناقض',               example: 'The two studies reached contradictory conclusions about the same medication.' },
                { word: 'Cognition',             translation: 'إدراك / تفكير',         example: 'Cognition refers to mental processes such as thinking, reasoning, and remembering.' },
                { word: 'Rationalisation',       translation: 'التبرير',               example: 'His explanation was mere rationalisation — not a logical reason.' },
                { word: 'Unconsciously',         translation: 'بشكل غير واعٍ',          example: 'People unconsciously favour information that confirms their existing beliefs.' },
                { word: 'Crucial',               translation: 'بالغ الأهمية',          example: 'It is crucial to review your notes before the examination.' },
                { word: 'Conflicting',           translation: 'متعارض',               example: 'The witnesses provided conflicting accounts of the incident.' },
              ],
              key_points: [
                'In TOEFL Listening, you **can take notes** — write the main idea and key examples as you listen. Do not try to write every word.',
                'Professors signal important points with phrases: **"Now, crucially…"**, **"The key point here is…"**, **"This is important because…"**',
                'Student questions often **introduce a new angle** the professor then elaborates on — these exchanges are frequently tested.',
                'The standard TOEFL lecture structure: **introduce concept → define it → give example → explain significance**.',
              ],
              tips: [
                'Note the main idea of each section and key examples only — do not try to transcribe the lecture.',
                'Pay close attention when the professor says "Now…" or "In fact…" — these phrases signal a shift to an important point.',
                'For conversation tracks (student + advisor), focus on: the purpose of the meeting and the final decision reached.',
              ],
              fun_fact: 'TOEFL Listening tracks deliberately include natural speech features like hesitations and self-corrections to reflect authentic academic English — this is by design, not an error.',
              exercises: [
                { type: 'multiple_choice', question: 'What is cognitive dissonance, according to the professor?', options: ['A type of memory disorder', 'The mental discomfort of holding two contradictory beliefs simultaneously', 'A marketing strategy used by companies', 'The process of making rational decisions'], answer: 1 },
                { type: 'fill_blank', question: 'Cognitive dissonance was introduced by Leon Festinger in ___.', answer: '1957', hint: 'Mid-20th century year' },
                { type: 'multiple_choice', question: 'Which of the following is NOT one of the three ways to reduce cognitive dissonance?', options: ['Changing one of the conflicting beliefs', 'Acquiring new supporting information', 'Reducing the importance of one belief', 'Accepting both conflicting beliefs as equally valid'], answer: 3 },
                { type: 'fill_blank', question: 'After buying an expensive product, seeking only positive reviews is called post-purchase ___.', answer: 'rationalisation', hint: 'The act of justifying a decision after making it' },
                { type: 'multiple_choice', question: 'Why does the professor use the smoking example?', options: ['To argue that smoking is less dangerous than believed', 'To illustrate the definition of cognitive dissonance concretely', 'To present a study by Festinger on health behaviour', 'To warn students about the dangers of smoking'], answer: 1 },
                { type: 'fill_blank', question: 'The technical term for thoughts, beliefs, or attitudes is ___.', answer: 'cognition', hint: 'The singular form of the word used by the professor' },
                { type: 'multiple_choice', question: 'According to the professor, cognitive dissonance explains why people:', options: ['Make rational decisions based on evidence', 'Resist changing their minds even when faced with clear evidence', 'Are naturally motivated to learn new information', 'Always follow logical reasoning'], answer: 1 },
                { type: 'reorder', question: 'Reorder the lecture structure: [significance / concept / example / definition / Explain / Introduce]', words: ['significance','concept','example','definition','Explain','Introduce'], answer: 'Introduce concept definition example Explain significance' },
              ],
            },
          },

          // tfl1l3 ─ High-Frequency TOEFL Academic Vocabulary
          {
            id: 'tfl1l3', title: 'High-Frequency TOEFL Academic Vocabulary', type: 'vocabulary', xp: 40,
            content: {
              intro: '10 high-frequency Academic Word List terms that appear across all four TOEFL sections. Mastering these boosts your Reading score, sharpens your Listening comprehension, and elevates your Speaking and Writing.',
              vocabulary: [
                { word: 'Attribute (v)',    translation: 'يُعزو / يُنسب',            example: 'Scientists attribute the rise in sea levels to increased carbon emissions.' },
                { word: 'Facilitate',      translation: 'يُسهِّل / يُيسِّر',         example: 'Technology facilitates communication between people across different countries.' },
                { word: 'Integral',        translation: 'أساسي / لا غنى عنه',        example: 'Exercise is an integral part of a healthy lifestyle.' },
                { word: 'Subsequent',      translation: 'لاحق / تالٍ',               example: 'The initial study was flawed, but subsequent research corrected the errors.' },
                { word: 'Infer',           translation: 'يستنتج / يستخلص',           example: 'From the data, we can infer that demand for electric vehicles is growing.' },
                { word: 'Scrutinise',      translation: 'يفحص بدقة / يُمحِّص',      example: 'The committee will scrutinise all applications before making a decision.' },
                { word: 'Undermine',       translation: 'يُقوِّض / يُضعِف',          example: 'Lack of sleep can undermine academic performance significantly.' },
                { word: 'Unprecedented',   translation: 'غير مسبوق',                 example: 'The pandemic caused unprecedented disruption to global supply chains.' },
                { word: 'Disseminate',     translation: 'يُنشر / يُذيع',             example: 'Social media disseminates information — and misinformation — at incredible speed.' },
                { word: 'Elaborate (v)',   translation: 'يُفصِّل / يشرح بالتفصيل',  example: 'Could you elaborate on your second point? I\'d like more detail.' },
              ],
              key_points: [
                'These 10 words come from the **Academic Word List (AWL)** — they appear in university-level texts across all disciplines tested on the TOEFL.',
                '**"Attribute X to Y"** is a critical phrase pattern: *"Researchers attribute the decline to habitat loss."* Learn it as a fixed collocation.',
                '**"Subsequent"** means "coming after in time or order" — do not confuse it with "consequent", which implies a causal relationship.',
                'In TOEFL Writing, using precise academic vocabulary instead of simple words can raise your Language Use score from a 3 to a 4.',
              ],
              common_mistakes: [
                { wrong: 'The problem is very big and has no solution.', correct: 'The problem is unprecedented and has proven difficult to resolve.', explanation: 'Replace informal intensifiers like "very big" with precise academic vocabulary to demonstrate the range that TOEFL rewards.' },
                { wrong: 'I think global warming causes many problems.', correct: 'Rising temperatures can be attributed to increased greenhouse gas emissions, which subsequently undermine food security.', explanation: 'Chaining "attribute", "subsequently", and "undermine" in one sentence shows the vocabulary density that earns top Writing scores.' },
                { wrong: 'The professor said more about the topic.', correct: 'The professor elaborated on the concept of cognitive dissonance.', explanation: '"Elaborate on" is the precise academic phrasing. Use it in Speaking and Writing instead of vague constructions like "said more".' },
              ],
              tips: [
                'Learn every word in its **collocations**: "attribute X to Y", "integral part of", "scrutinise carefully", "disseminate information" — this is how proficient speakers actually use them.',
                'Create one sentence per word about a TOEFL essay topic (environment, technology, education, globalisation) — this doubles as Writing practice.',
                'The full Academic Word List contains 570 word families. Mastering the top 200 gives you coverage of approximately 10% of all academic text.',
              ],
              fun_fact: 'The Academic Word List was created by Averil Coxhead at Victoria University of Wellington, New Zealand in 2000 — built by analysing 3.5 million words from academic texts across 28 subject areas.',
              exercises: [
                { type: 'multiple_choice', question: 'Which sentence uses "attribute" correctly?', options: ['She attributed the meeting to 3 PM.', 'The increase in obesity is attributed to sedentary lifestyles.', 'He attributed a new car last year.', 'The report attributes in the data.'], answer: 1 },
                { type: 'fill_blank', question: 'Exercise is an ___ part of a healthy lifestyle.', answer: 'integral', hint: 'Means essential / fundamental' },
                { type: 'multiple_choice', question: 'What does "scrutinise" mean?', options: ['Ignore completely', 'Examine carefully and in detail', 'Summarise briefly', 'Copy accurately'], answer: 1 },
                { type: 'fill_blank', question: 'The initial study was flawed, but ___ research corrected the errors.', answer: 'subsequent', hint: 'Means coming after in time' },
                { type: 'multiple_choice', question: 'Which word means "to spread information widely"?', options: ['Undermine', 'Infer', 'Disseminate', 'Facilitate'], answer: 2 },
                { type: 'fill_blank', question: 'Lack of sleep can ___ academic performance significantly.', answer: 'undermine', hint: 'Means gradually weaken' },
                { type: 'multiple_choice', question: 'Something described as "unprecedented" means:', options: ['It has happened many times before', 'It was slightly unusual', 'Nothing like it had ever happened before', 'It was expected and planned for'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [habitat / Scientists / loss / the / decline / to / attribute]', words: ['habitat','Scientists','loss','the','decline','to','attribute'], answer: 'Scientists attribute the decline to habitat loss' },
              ],
            },
          },
        ],
      },

      // ── Unit 2: Speaking & Writing Tasks ──────────────────────────
      {
        id: 'tfl2', title: 'Speaking & Writing Tasks', icon: '✍️',
        lessons: [

          // tfl2l1 ─ TOEFL Speaking — Task Templates
          {
            id: 'tfl2l1', title: 'TOEFL Speaking — Task Templates', type: 'dialogue', xp: 40,
            content: {
              intro: 'Follow a real TOEFL Speaking coaching session — learn the exact template and scoring criteria for Task 1 (Independent) and Task 2 (Integrated), with model answers and feedback.',
              dialogue: `**[TOEFL Speaking Coaching Session]**
**Ms. Kim (TOEFL Speaking coach) is working with Ahmed (target score: TOEFL 100+).**

Ms. Kim: Let's work on Task 1 today — the Independent Speaking Task. You have 15 seconds to prepare and 45 seconds to speak. The prompt is: "Do you prefer studying alone or studying with others? Use specific reasons and examples to support your answer."

Ahmed: [After 15 seconds] I prefer studying alone because I can focus more easily. When I study with others, there are many distractions. For example, when I was preparing for my university entrance exam, I studied alone in the library every day for three months. I scored very high and got into my first-choice university. Also, studying alone lets me go at my own pace — I can spend more time on difficult topics without feeling rushed. For these reasons, I believe studying alone is more effective for me.

Ms. Kim: That was excellent, Ahmed — about 42 seconds, which is perfect. You had three things examiners love: a clear position stated immediately, a specific personal example, and a closing that links back to the question. One improvement: replace "Also" with "Furthermore" or "In addition" — it sounds more academic and demonstrates range.

Ahmed: Should I always use a personal example?

Ms. Kim: Not always — but a personal example is the safest option. You are unlikely to run out of things to say when discussing your own experience. The core formula is: **Position → Reason 1 → Specific Example → Reason 2 → Concluding link.** Delivered fluently, that structure earns a 26–30.

Ahmed: What about Task 2 — the Integrated Speaking Task?

Ms. Kim: Task 2 is very different. You read a short passage, listen to a lecture that relates to it, then speak for 60 seconds summarising the connection. You are not giving your opinion — you are reporting. So the language changes: instead of "I think", you say "According to the reading…" and "The professor argues that…". The most common mistake on Task 2 is sharing a personal view. Avoid it — just report the content.

Ahmed: What if I lose my train of thought while speaking?

Ms. Kim: Use strategic filler phrases: "What I mean is…", "To give a specific example…", "As I was saying…" — these buy you a second to recover without sounding lost. Silence is penalised; fluent filler phrases are not.`,
              vocabulary: [
                { word: 'Independent Speaking Task', translation: 'مهمة التحدث المستقلة',   example: 'In the Independent Speaking Task, you express and support your own opinion.' },
                { word: 'Integrated Speaking Task',  translation: 'مهمة التحدث المتكاملة',  example: 'The Integrated Speaking Task requires combining information from reading and listening.' },
                { word: 'Fluency',                   translation: 'الطلاقة',                 example: 'TOEFL Speaking fluency means smooth delivery with minimal pauses.' },
                { word: 'Coherence',                 translation: 'الترابط / التماسك',       example: 'Good coherence means your ideas flow logically from one point to the next.' },
                { word: 'Filler phrase',             translation: 'عبارة ملء',               example: '"What I mean is" and "To elaborate on that" are effective filler phrases.' },
                { word: 'Concluding link',           translation: 'رابط ختامي',              example: 'End your response with: "For these reasons, I believe that..."' },
              ],
              key_points: [
                'Task 1 (Independent): State your **position in the very first sentence** — examiners need to hear it immediately.',
                'Task 1 formula: **Position → Reason 1 → Specific Example → Reason 2 → Concluding link** (45 seconds = approximately 6 sentences).',
                'Task 2 (Integrated): You are a **reporter, not an opinion-giver**. Use "According to the reading…" and "The professor argues that…"',
                'Never leave **more than 2 seconds of silence** — use strategic fillers: "What I mean is…", "To give a specific example…"',
              ],
              tips: [
                'Record yourself practising TOEFL Speaking tasks and listen back. You will immediately notice hesitations and grammar errors that you don\'t catch while speaking.',
                'Aim for 40–45 seconds on Task 1 and 55–60 seconds on Task 2 — stopping early signals you have run out of ideas.',
                'Use varied connectors: "Furthermore", "In addition", "As a result", "Consequently" — these demonstrate language range and raise your score.',
              ],
              fun_fact: 'TOEFL Speaking responses are evaluated by both a human rater and an automated AI system called SpeechRater. The final score is a combination of both evaluations.',
              exercises: [
                { type: 'multiple_choice', question: 'In Task 1 (Independent Speaking), when should you state your position?', options: ['At the end, as a conclusion', 'In the middle, after giving reasons', 'In the very first sentence', 'It does not matter when you state it'], answer: 2 },
                { type: 'fill_blank', question: 'The preparation time for Task 1 is ___ seconds.', answer: '15', hint: 'Less than half a minute' },
                { type: 'multiple_choice', question: 'In Task 2 (Integrated Speaking), you should:', options: ['Give your personal opinion on the topic', 'Argue for one side of the debate', 'Report information from the reading and lecture without giving your own view', 'Only summarise the listening passage'], answer: 2 },
                { type: 'fill_blank', question: 'For Integrated Speaking, use phrases like "According to the reading" and "The professor ___ that".', answer: 'argues', hint: 'The professor makes a point or claim' },
                { type: 'multiple_choice', question: 'What is the ideal speaking time for Task 1?', options: ['30–35 seconds', '40–45 seconds', '55–60 seconds', 'Exactly 45 seconds always'], answer: 1 },
                { type: 'fill_blank', question: '"For these reasons, I believe studying alone is more effective" is an example of a ___ link.', answer: 'concluding', hint: 'It wraps up / closes the response' },
                { type: 'multiple_choice', question: 'What should you do if you lose your train of thought while speaking?', options: ['Stop and restart from the beginning', 'Stay silent until you remember', 'Use a filler phrase like "What I mean is..."', 'Speak more quietly and slowly'], answer: 2 },
                { type: 'reorder', question: 'Reorder the Task 1 template: [Example / Reason 1 / link / Position / Reason 2 / Concluding]', words: ['Example','Reason 1','link','Position','Reason 2','Concluding'], answer: 'Position Reason 1 Example Reason 2 Concluding link' },
              ],
            },
          },

          // tfl2l2 ─ TOEFL Writing — Integrated Task
          {
            id: 'tfl2l2', title: 'TOEFL Writing — Integrated Task', type: 'grammar', xp: 40,
            content: {
              intro: 'Learn the exact 3-step process and paragraph template for the TOEFL Integrated Writing Task — read a passage, listen to a lecture, write 150–225 words contrasting the two in 20 minutes.',
              explanation: `✍️ **TOEFL Integrated Writing — The Complete Guide:**

**What you do:**
1. **Read** a passage (3 minutes) — 3 main points supporting a claim
2. **Listen** to a lecture (2 minutes) — the professor challenges the reading
3. **Write** 150–225 words (20 minutes) — summarise how the lecture casts doubt on the reading

⚠️ **Critical rule:** The lecture almost ALWAYS contradicts or challenges the reading. Your job is to show how.

---
**4-Paragraph Template:**

**¶1 — Introduction (2 sentences)**
> "The reading passage argues that [main claim]. However, the lecturer challenges this view, contending that [main counter-claim]."

**¶2 — First Contrast (3–4 sentences)**
> "First, the reading claims that [Point 1]. The lecturer, however, argues that [Counter-point 1]. According to the professor, [supporting detail]."

**¶3 — Second Contrast (3–4 sentences)**
> "Furthermore, the reading states that [Point 2]. The lecturer contradicts this by pointing out that [Counter-point 2]."

**¶4 — Third Contrast (3–4 sentences)**
> "Finally, the passage asserts that [Point 3]. The professor disputes this, noting that [Counter-point 3]."

---
**Attribution Language — Use This:**

| Attributing to the Reading | Attributing to the Lecture |
|---------------------------|---------------------------|
| The reading claims / argues / states | The lecturer challenges / refutes / disputes |
| According to the passage | According to the professor |
| The author asserts | The professor counters by arguing |

---
**Four Pitfalls That Cost Points:**
❌ Giving your own opinion (you are a reporter only)
❌ Summarising only the reading and ignoring the lecture
❌ Copying sentences directly from the reading passage
✅ 150–225 words with 3 clear contrasting paragraphs earns the top score`,
              examples: [
                'Introduction: "The reading argues that wind energy is a cost-effective alternative to fossil fuels. However, the lecturer challenges this, contending that long-term costs are far higher than the passage claims."',
                'First contrast: "First, the reading claims wind turbines have minimal impact on wildlife. The lecturer, however, disputes this, citing studies showing significant bird and bat mortality near turbine farms."',
                'Second contrast: "Furthermore, the passage states that wind energy is reliable. The lecturer contradicts this by pointing out that wind is intermittent and requires expensive backup power systems."',
                'Third contrast: "Finally, the author asserts that turbine manufacturing creates jobs. The professor counters by arguing that most components are imported, creating very few local employment opportunities."',
              ],
              key_points: [
                'The lecture **almost always contradicts** the reading — your task is to show how and why, not to agree with either side.',
                'Never give your own opinion. Use **reporting language**: "The lecturer argues…", "According to the professor…", "The reading claims…"',
                'Aim for exactly **3 contrasting paragraphs** — one per main point. This is the structure scorers expect.',
                'Paraphrase the reading in your own words — copy **no more than key technical terms** from the original passage.',
              ],
              common_mistakes: [
                { wrong: 'I think wind energy is better because it is clean and renewable.', correct: 'The reading argues that wind energy is cost-effective. The lecturer, however, challenges this by presenting evidence of hidden long-term costs.', explanation: 'Never express your opinion in Integrated Writing. You are a reporter summarising the relationship between two sources — not a commentator.' },
                { wrong: 'The reading supports wind energy. The lecture also supports wind energy.', correct: 'While the reading supports wind energy on three grounds, the lecturer systematically challenges each of those points.', explanation: 'If you write that both sources agree, you have misunderstood the task. The lecture almost always challenges the reading.' },
                { wrong: 'Wind energy is cost-effective because turbines are cheap to build.', correct: 'According to the reading, wind energy is cost-effective. The professor, however, contends that this claim overlooks significant maintenance and grid-integration costs.', explanation: 'Always attribute ideas to their source. Stating claims as facts suggests you have not read the prompt carefully.' },
              ],
              tips: [
                'Take notes in two columns during reading and listening: **Reading | Lecture**. Your essay structure practically writes itself from those notes.',
                'You can look at the reading passage while writing — use it. Paraphrase specific details instead of relying on memory.',
                'Start each body paragraph with the reading\'s claim first, then the lecture\'s challenge. This contrast structure is exactly what top-scoring responses demonstrate.',
              ],
              fun_fact: 'The TOEFL Integrated Writing task was designed to simulate a real university assignment: read an academic article, attend a lecture on the same topic, then write a response connecting the two sources.',
              exercises: [
                { type: 'multiple_choice', question: 'In the Integrated Writing Task, the lecture typically:', options: ['Supports all three points from the reading', 'Provides additional examples for the reading', 'Challenges or casts doubt on the reading', 'Introduces a completely unrelated topic'], answer: 2 },
                { type: 'fill_blank', question: 'The target word count for Integrated Writing is ___ to 225 words.', answer: '150', hint: 'The minimum word count' },
                { type: 'multiple_choice', question: 'Which sentence correctly attributes an idea to the reading?', options: ['Wind energy is very clean and cheap.', 'In my opinion, wind energy is better.', 'The reading passage argues that wind energy is cost-effective.', 'Wind energy is clearly the energy of the future.'], answer: 2 },
                { type: 'fill_blank', question: 'The lecturer ___ the reading\'s claim by presenting new evidence.', answer: 'challenges', hint: 'Disagrees with / disputes' },
                { type: 'multiple_choice', question: 'Should you give your personal opinion in the Integrated Writing task?', options: ['Yes, in the conclusion paragraph', 'Yes, if you agree with the lecture', 'No — only report the views of the reading and lecture', 'Only if the prompt specifically asks for it'], answer: 2 },
                { type: 'fill_blank', question: 'Take notes in two columns while reading and listening: "Reading" and "___ "', answer: 'Lecture', hint: 'The audio source' },
                { type: 'multiple_choice', question: 'What is the correct structure for each body paragraph?', options: ['Your opinion → evidence → conclusion', 'Reading\'s claim → Lecture\'s challenge → supporting detail', 'Introduction → three examples → summary', 'Definition → example → contrast'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [disputes / the / reading / lecturer / the / claim / however / this]', words: ['disputes','the','reading','lecturer','the','claim','however','this'], answer: 'the lecturer however disputes this the reading claim' },
              ],
            },
          },

          // tfl2l3 ─ TOEFL Writing — Independent Task
          {
            id: 'tfl2l3', title: 'TOEFL Writing — Independent Task', type: 'grammar', xp: 40,
            content: {
              intro: 'Write a perfect TOEFL Independent Essay in 30 minutes. Master the 5-paragraph template, learn to generate ideas under pressure, and discover the language that lifts your score from a 3 to a 4.',
              explanation: `✍️ **TOEFL Independent Writing — The Complete Guide:**

**What you do:** Write a 300–400 word essay responding to a prompt about your opinion or preference. 30 minutes. 1 prompt.

**Common prompt types:**
• "Do you agree or disagree that..."
• "Which of the following do you prefer, and why?"
• "Some people think X, others think Y. Which view do you support?"

---
**The 5-Paragraph Template:**

**¶1 — Introduction (3 sentences)**
> ① Hook — restate the topic in general terms
> ② Thesis — your clear, direct position
> ③ Road map — "I will support this view with two reasons."

**¶2 — Body Paragraph 1 (4–5 sentences)**
> Topic sentence → Explanation → Specific Example → Impact / Result

**¶3 — Body Paragraph 2 (4–5 sentences)**
> Topic sentence → Explanation → Specific Example → Impact / Result

**¶4 — Counter-Argument *(optional but boosts score)* (3 sentences)**
> "Admittedly, some argue that [opposite view]. However, [your rebuttal]."

**¶5 — Conclusion (2 sentences)**
> Restate thesis in different words → Broader implication

---
**Transition Phrases That Score Points:**

| Function | Phrases |
|----------|---------|
| Add a point | Furthermore, In addition, Moreover |
| Contrast | However, Nevertheless, On the other hand |
| Give example | For instance, To illustrate, As an example |
| Show result | As a result, Consequently, Therefore |
| Concede | Admittedly, It is true that, While some argue... |

---
**30-Minute Time Plan:**
• 2 min — Brainstorm (3 ideas, pick 2 strongest)
• 3 min — Outline
• 22 min — Write
• 3 min — Proofread (subject-verb agreement, articles, tense)`,
              examples: [
                'Introduction: "In recent decades, the debate over online versus traditional education has intensified. I firmly believe that traditional classroom learning is more effective for most students. I will support this position with two key reasons: social development and structured accountability."',
                'Body paragraph: "First and foremost, traditional education fosters essential social skills. In a physical classroom, students collaborate, debate, and navigate interpersonal challenges — competencies online environments cannot fully replicate. For instance, a student who participates regularly in group projects develops communication and leadership skills that are indispensable in professional life."',
                'Counter-argument: "Admittedly, online education offers unparalleled flexibility, making quality learning accessible to people with demanding schedules. However, this convenience often comes at the cost of discipline and engagement, as many online learners struggle without the structure of a physical classroom."',
                'Conclusion: "In conclusion, while online education has genuine merits, the social, collaborative, and structural advantages of traditional classrooms make it the superior option for comprehensive learning. As education systems evolve, preserving these human elements must remain a priority."',
              ],
              key_points: [
                'State your **thesis clearly in the introduction** — never leave the examiner guessing your position.',
                'Each body paragraph requires a **specific example** — vague, general statements score lower on the Development rubric.',
                'The **counter-argument paragraph** is optional but powerful — it demonstrates sophisticated argumentation and raises your score.',
                'Aim for **300–400 words** — essays under 250 words are consistently penalised for underdevelopment.',
              ],
              common_mistakes: [
                { wrong: 'Technology is good and bad. It depends on the person.', correct: 'I firmly believe that the benefits of technology in education outweigh its drawbacks, primarily because it increases accessibility and personalises learning.', explanation: 'A "both sides" answer with no clear position reads as undeveloped. Take a specific, defensible stance and argue it consistently.' },
                { wrong: 'For example, many people use technology every day.', correct: 'For example, my younger sister used Khan Academy to study calculus independently, ultimately scoring in the top 5% of her university entrance exam.', explanation: 'Vague examples do not earn development points. Specific examples — even invented ones — demonstrate the analytical depth TOEFL rewards.' },
                { wrong: 'In conclusion, these are my reasons why technology is important.', correct: 'In conclusion, while traditional methods have enduring value, integrating technology into education is indispensable in preparing students for a rapidly changing digital world.', explanation: 'A conclusion that only restates "these are my reasons" adds no value. Always connect your argument to a broader implication.' },
              ],
              tips: [
                'You do not need real examples — you can invent studies, statistics, and scenarios. TOEFL does not fact-check. A specific invented example always outperforms a vague real one.',
                'Vary sentence structure: mix simple, compound, and complex sentences. Using only short sentences limits your score even when your ideas are strong.',
                'Proofread for three common errors: subject-verb agreement, article usage (a/an/the), and tense consistency. These account for the majority of grammar errors by non-native writers.',
              ],
              fun_fact: 'TOEFL Independent essays are scored by two raters — a human examiner and an AI system called e-rater. If their scores differ by more than 1 point, a third human rater is called in to make the final decision.',
              exercises: [
                { type: 'multiple_choice', question: 'What is the recommended word count for the Independent Writing Task?', options: ['150–225 words', '250–299 words', '300–400 words', 'Over 500 words'], answer: 2 },
                { type: 'fill_blank', question: 'State your ___ clearly in the introduction so the examiner knows your position immediately.', answer: 'thesis', hint: 'Your main argument / stance' },
                { type: 'multiple_choice', question: 'Which phrase is best for introducing a counter-argument?', options: ['Furthermore,', 'Admittedly, some argue that...', 'For instance,', 'As a result,'], answer: 1 },
                { type: 'fill_blank', question: 'You have ___ minutes total to write the Independent Essay.', answer: '30', hint: 'Half an hour' },
                { type: 'multiple_choice', question: 'What makes a body paragraph example "specific" and score-worthy?', options: ['It must come from your personal life experience', 'It includes names, numbers, or detailed context', 'It must be at least 5 sentences long', 'It must reference a published academic study'], answer: 1 },
                { type: 'fill_blank', question: '"___, it is true that online education offers flexibility. However, this often comes at the cost of discipline."', answer: 'Admittedly', hint: 'A word used to acknowledge an opposing point before rebutting it' },
                { type: 'multiple_choice', question: 'How should you spend the first 5 minutes of the Independent Writing task?', options: ['Start writing immediately to maximise time', 'Read the prompt three times in silence', 'Brainstorm and create an outline before writing', 'Write freely, then plan and reorganise afterwards'], answer: 2 },
                { type: 'reorder', question: 'Reorder the essay structure: [Conclusion / Body 2 / Introduction / Counter-argument / Body 1]', words: ['Conclusion','Body 2','Introduction','Counter-argument','Body 1'], answer: 'Introduction Body 1 Body 2 Counter-argument Conclusion' },
              ],
            },
          },
        ],
      },
    ],
  },

]

export default NEW_COURSES
