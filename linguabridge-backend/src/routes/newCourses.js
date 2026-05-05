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
              exercises: [
                { type: 'multiple_choice', question: 'How long is Ahmed\'s commute?', options: ['30 minutes', '45 minutes', '1 hour', '15 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'What does Ahmed do before meetings?', options: ['Goes to the gym', 'Grabs coffee and checks emails', 'Has breakfast', 'Takes the metro'], answer: 1 },
                { type: 'fill_blank',      question: 'Sara usually works ___ home on Mondays.', answer: 'from', hint: 'Preposition' },
                { type: 'multiple_choice', question: 'How many times a week does Ahmed go to the gym?', options: ['Two', 'Three', 'Four', 'Every day'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [lunch / should / We / grab / sometime]', words: ['lunch','should','We','grab','sometime'], answer: 'We should grab lunch sometime' },
                { type: 'fill_blank',      question: 'Thursday ___ perfectly for me!', answer: 'works', hint: 'A synonym for "is fine"' },
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
              exercises: [
                { type: 'fill_blank',      question: 'Yesterday, I ___ (go) to the market.', answer: 'went', hint: 'Irregular past of "go"' },
                { type: 'multiple_choice', question: 'She ___ a delicious cake for the party.', options: ['make', 'maked', 'made', 'making'], answer: 2 },
                { type: 'fill_blank',      question: 'We ___ (not/watch) TV last night.', answer: "didn't watch", hint: 'didn\'t + base verb' },
                { type: 'reorder',         question: 'Reorder: [you / Did / enjoy / trip / the]', words: ['you','Did','enjoy','trip','the'], answer: 'Did you enjoy the trip' },
                { type: 'multiple_choice', question: '"I buyed a new phone." — What is wrong?', options: ['Nothing', '"buyed" should be "bought"', '"a" should be "an"', 'Wrong word order'], answer: 1 },
                { type: 'fill_blank',      question: 'What ___ you ___ (do) last weekend?', answer: 'did / do', hint: 'Question form of past simple' },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'The opposite of "shy" is:', options: ['Quiet', 'Outgoing', 'Stubborn', 'Slim'], answer: 1 },
                { type: 'fill_blank',      question: 'You can always trust him — he is very ___.', answer: 'reliable', hint: 'Someone you can depend on' },
                { type: 'match',           question: 'Match personality words', pairs: [['Cheerful','مبهج'],['Shy','خجول'],['Stubborn','عنيد'],['Outgoing','اجتماعي']] },
                { type: 'multiple_choice', question: '"Curly" describes:', options: ['Weight', 'Height', 'Hair type', 'Eye color'], answer: 2 },
                { type: 'fill_blank',      question: 'She has ___ hair that bounces when she walks.', answer: 'curly', hint: 'Opposite of straight' },
              ],
            },
          },
          {
            id: 'el1l4', title: 'Likes, Dislikes & Opinions', type: 'speaking', xp: 25,
            content: {
              intro: 'Express your opinions and preferences naturally!',
              explanation: '🗣️ **Expressing Opinions:**\n\n**Likes:**\n• I love / I enjoy / I\'m into / I\'m a big fan of...\n• I\'m really keen on...\n\n**Dislikes:**\n• I can\'t stand / I\'m not into / I\'m not keen on...\n• I\'m not a big fan of...\n\n**Neutral opinions:**\n• I don\'t mind...\n• It\'s okay / It\'s not bad.\n• I\'m on the fence about...\n\n**Strong opinions:**\n• To be honest, I think...\n• Personally, I believe...\n• In my opinion, ...\n• As far as I\'m concerned, ...\n\n💡 **Don\'t just say "I like it." Expand!**\n❌ *I like coffee.*\n✅ *I\'m a big fan of coffee, especially in the morning — it really helps me focus.*',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase expresses a STRONG dislike?', options: ['I don\'t mind it.', 'It\'s okay I guess.', 'I can\'t stand it!', 'I\'m on the fence.'], answer: 2 },
                { type: 'fill_blank',      question: 'To be ___, I think the movie was disappointing.', answer: 'honest', hint: 'To be ___ = frankly' },
                { type: 'reorder',         question: 'Reorder: [opinion / my / In / best / football / is / sport / the]', words: ['opinion','my','In','best','football','is','sport','the'], answer: 'In my opinion football is the best sport' },
                { type: 'multiple_choice', question: '"I\'m on the fence about it" means:', options: ['I hate it', 'I love it', 'I can\'t decide', 'I don\'t know what it is'], answer: 2 },
                { type: 'fill_blank',      question: 'As ___ as I\'m concerned, education is the most important thing.', answer: 'far', hint: 'As ___ as I\'m concerned' },
              ],
            },
          },
          {
            id: 'el1l5', title: 'Story: The Job Interview', type: 'story', xp: 25,
            content: {
              intro: 'Read this story about a job interview and answer the questions!',
              text: `**The Job Interview**\n\nKarim had been looking for a job for three months. Finally, he got a call from a tech company — they wanted to interview him for a software developer position.\n\nThe night before the interview, Karim prepared carefully. He ironed his best shirt, researched the company online, and practiced answering common interview questions in the mirror. He went to bed early but couldn't sleep — he was too nervous.\n\nThe next morning, he woke up, had a light breakfast, and left home 30 minutes early to avoid being late. When he arrived at the office building, his heart was beating fast.\n\nThe interviewer, Ms. Layla, greeted him warmly. "Good morning, Karim. Please take a seat. Can I get you some water?"\n\n"Yes, please. Thank you," Karim replied, trying to sound confident.\n\nThe interview lasted 45 minutes. Ms. Layla asked about his experience, his problem-solving skills, and why he wanted to work there. Karim answered honestly and clearly.\n\nAt the end, she smiled and said, "We'll be in touch within a week."\n\nThree days later, Karim received an email. He took a deep breath and opened it. He had got the job!\n\nHe called his mother immediately. "I got it, Mama!" he shouted.\n\n"I always knew you could do it," she said proudly.`,
              exercises: [
                { type: 'multiple_choice', question: 'How long had Karim been looking for a job?', options: ['One month', 'Two months', 'Three months', 'Six months'], answer: 2 },
                { type: 'multiple_choice', question: 'Why couldn\'t Karim sleep the night before?', options: ['He was sick', 'He was too nervous', 'He was too excited about a party', 'His room was too hot'], answer: 1 },
                { type: 'fill_blank',      question: 'Karim left home ___ minutes early to avoid being late.', answer: '30', hint: 'Look in paragraph 3' },
                { type: 'multiple_choice', question: 'How long did the interview last?', options: ['30 minutes', '45 minutes', '1 hour', '20 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'How did Karim find out he got the job?', options: ['By phone call', 'By letter', 'By email', 'Ms. Layla told him in person'], answer: 2 },
                { type: 'fill_blank',      question: '"We\'ll be ___ touch within a week." (Ms. Layla)', answer: 'in', hint: 'Be in ___' },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Why can\'t Mona meet at 3 PM?', options: ['She is working', 'She has a dentist appointment', 'She is busy shopping', 'She forgot about the plan'], answer: 1 },
                { type: 'fill_blank',      question: 'I\'m really looking ___ to the weekend!', answer: 'forward', hint: 'Look ___ to = anticipate with excitement' },
                { type: 'multiple_choice', question: '"Just in case" means:', options: ['بالتأكيد', 'للاحتياط', 'في الحال', 'بالمصادفة'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [you / free / Are / Saturday / this]', words: ['you','free','Are','Saturday','this'], answer: 'Are you free this Saturday' },
                { type: 'fill_blank',      question: 'What did you have ___ mind for the weekend?', answer: 'in', hint: 'Have ___ mind' },
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
              exercises: [
                { type: 'fill_blank',      question: 'Mount Everest is the ___ (high) mountain in the world.', answer: 'highest', hint: 'Superlative of "high"' },
                { type: 'multiple_choice', question: 'Gold is ___ silver.', options: ['expensiver than', 'more expensive than', 'the most expensive', 'expensive than'], answer: 1 },
                { type: 'fill_blank',      question: 'Today is ___ (bad) than yesterday.', answer: 'worse', hint: 'Irregular comparative' },
                { type: 'multiple_choice', question: 'She is the ___ student in the class.', options: ['more hardworking', 'hardworkinger', 'most hardworking', 'hardworkingest'], answer: 2 },
                { type: 'reorder',         question: 'Reorder: [than / is / English / Arabic / easier]', words: ['than','is','English','Arabic','easier'], answer: 'English is easier than Arabic' },
                { type: 'fill_blank',      question: 'This is the ___ (good) film I\'ve seen this year.', answer: 'best', hint: 'Irregular superlative' },
              ],
            },
          },
          {
            id: 'el2l2', title: 'Modal Verbs', type: 'grammar', xp: 25,
            content: {
              intro: 'Master modal verbs: can, could, must, should, may, might!',
              explanation: '📝 **Modal Verbs:**\n\n**CAN / COULD** — Ability & Permission\n• *I **can** swim.* (ability)\n• *Can I open the window?* (permission)\n• *Could you help me?* (polite request)\n\n**MUST / HAVE TO** — Obligation\n• *You **must** wear a seatbelt.* (rule)\n• *I **have to** finish this today.* (personal obligation)\n• *Mustn\'t* = prohibition: *You **mustn\'t** smoke here.*\n\n**SHOULD** — Advice\n• *You **should** drink more water.*\n• *You **shouldn\'t** eat so much sugar.*\n\n**MAY / MIGHT** — Possibility\n• *It **may** rain tomorrow.* (quite possible)\n• *She **might** be late.* (less certain)',
              exercises: [
                { type: 'multiple_choice', question: 'You ___ drink and drive. It\'s illegal!', options: ['should', 'mustn\'t', 'might', 'could'], answer: 1 },
                { type: 'fill_blank',      question: 'You look tired. You ___ go to bed early tonight.', answer: 'should', hint: 'Giving advice' },
                { type: 'multiple_choice', question: '"Could you pass the salt?" is a:', options: ['Question about ability', 'Polite request', 'Permission question', 'Obligation'], answer: 1 },
                { type: 'fill_blank',      question: 'Take an umbrella — it ___ rain later.', answer: 'might', hint: 'Uncertain possibility' },
                { type: 'multiple_choice', question: 'I ___ speak three languages when I was young.', options: ['must', 'should', 'could', 'might'], answer: 2 },
                { type: 'fill_blank',      question: 'You ___ (must/negative) park here — it\'s a no-parking zone.', answer: "mustn't", hint: 'Prohibition' },
              ],
            },
          },
          {
            id: 'el2l3', title: 'Prepositions of Time & Place', type: 'grammar', xp: 25,
            content: {
              intro: 'Master the use of prepositions in English!',
              explanation: '📝 **Prepositions — Time & Place:**\n\n**AT — specific time/place**\n• Time: *at 3 PM, at noon, at Christmas, at the weekend*\n• Place: *at the bus stop, at school, at home, at work*\n\n**ON — days/dates/surfaces**\n• *on Monday, on July 4th, on my birthday*\n• *on the table, on the wall, on the left*\n\n**IN — months/years/seasons/enclosed spaces**\n• *in July, in 2024, in summer, in the morning*\n• *in Cairo, in the car, in the room, in bed*\n\n**Common phrases:**\n• *in the end / at the end*\n• *in time / on time*\n• *at last / in the last*\n\n⚠️ **Tricky ones:**\n• *at night* (not in night)\n• *in the morning/afternoon/evening* (not at)',
              exercises: [
                { type: 'fill_blank',      question: 'She was born ___ 1995.', answer: 'in', hint: 'Years use this preposition' },
                { type: 'multiple_choice', question: 'I\'ll meet you ___ the entrance of the mall.', options: ['in', 'on', 'at', 'by'], answer: 2 },
                { type: 'fill_blank',      question: 'The meeting is ___ Monday morning.', answer: 'on', hint: 'Days use this preposition' },
                { type: 'multiple_choice', question: 'The keys are ___ the table.', options: ['at', 'in', 'on', 'by'], answer: 2 },
                { type: 'fill_blank',      question: 'I usually study ___ night.', answer: 'at', hint: 'Special phrase: ___ night' },
                { type: 'multiple_choice', question: 'We arrived ___ time — the show hadn\'t started yet.', options: ['at', 'on', 'in', 'by'], answer: 1 },
              ],
            },
          },
          {
            id: 'el2l4', title: 'Countable vs Uncountable Nouns', type: 'grammar', xp: 25,
            content: {
              intro: 'Learn how to use some, any, much, many, a few, a little!',
              explanation: '📝 **Countable vs Uncountable:**\n\n**Countable** (can count: 1, 2, 3...):\n• *a book, two books, some books*\n• Use: **many, a few, several, a number of**\n\n**Uncountable** (cannot count):\n• *water, rice, music, advice, information, money, time*\n• Use: **much, a little, a great deal of**\n\n**SOME & ANY:**\n• **Some** = positive sentences + offers\n  *I have **some** money. Would you like **some** tea?*\n• **Any** = negative sentences + questions\n  *I don\'t have **any** money. Do you have **any** sugar?*\n\n**Common mistakes:**\n❌ *an information* → ✅ *some information / a piece of information*\n❌ *many money* → ✅ *much money / a lot of money*\n❌ *advices* → ✅ *advice* (no plural!)',
              exercises: [
                { type: 'multiple_choice', question: 'How ___ sugar do you want in your coffee?', options: ['many', 'much', 'few', 'number'], answer: 1 },
                { type: 'fill_blank',      question: 'She gave me ___ good advice. (some/any)', answer: 'some', hint: 'Positive sentence' },
                { type: 'multiple_choice', question: 'There aren\'t ___ students in the class today.', options: ['much', 'some', 'many', 'little'], answer: 2 },
                { type: 'fill_blank',      question: 'I only have ___ little time — let\'s be quick.', answer: 'a', hint: 'A ___ little (small amount)' },
                { type: 'multiple_choice', question: 'Which is CORRECT?', options: ['I need some informations.', 'I need an information.', 'I need some information.', 'I need informations.'], answer: 2 },
                { type: 'fill_blank',      question: 'Do you have ___ questions before we start?', answer: 'any', hint: 'Questions use this' },
              ],
            },
          },
          {
            id: 'el2l5', title: 'Story: Lost in the City', type: 'story', xp: 25,
            content: {
              intro: 'Read this story and practice your reading comprehension!',
              text: `**Lost in the City**\n\nIt was Sarah's first time visiting Istanbul. She had saved money for two years to make this trip, and she was determined to enjoy every moment.\n\nOn her second day, she decided to explore the city alone. She took the tram to the historic district and walked through the narrow, colourful streets. The smells from the spice market were incredible — cinnamon, cardamom, and exotic teas filled the air.\n\nAfter a few hours, Sarah realised she was completely lost. She didn't have a local SIM card, and her phone's battery was at 3%. She felt a moment of panic.\n\nA kind elderly man noticed her worried expression. "Are you lost, my friend?" he asked in surprisingly good English.\n\n"Yes! I'm trying to get back to Taksim Square," Sarah replied.\n\n"Ah, that's quite far from here. Come, I'll walk you to the tram stop." He pointed down a winding street.\n\nAs they walked, he told her about the history of the neighbourhood — buildings that were hundreds of years old, a fountain built by a sultan, and a hidden garden that tourists never found.\n\nAt the tram stop, he said, "Istanbul has many secrets. Come back when you have more time!"\n\nSarah thanked him warmly. What could have been a disaster had turned into the best memory of her trip.`,
              exercises: [
                { type: 'multiple_choice', question: 'How long did Sarah save money for the trip?', options: ['One year', 'Six months', 'Two years', 'Three years'], answer: 2 },
                { type: 'multiple_choice', question: 'What was the problem with her phone?', options: ['It was broken', 'She lost it', 'Battery was at 3%', 'She had no signal'], answer: 2 },
                { type: 'fill_blank',      question: 'Sarah was trying to get back to ___ Square.', answer: 'Taksim', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What did the elderly man do?', options: ['Called her a taxi', 'Walked her to the tram stop', 'Lent her his phone', 'Took her to her hotel'], answer: 1 },
                { type: 'multiple_choice', question: 'The word "winding" in the story means:', options: ['متسخ', 'متعرج', 'طويل', 'ضيق'], answer: 1 },
                { type: 'fill_blank',      question: 'What could have been a disaster had ___ into the best memory.', answer: 'turned', hint: 'turned/changed/become' },
              ],
            },
          },
          {
            id: 'el2l6', title: 'Writing: Informal Email', type: 'writing', xp: 25,
            content: {
              intro: 'Write a friendly email to a friend or relative!',
              explanation: '✍️ **Informal Email Structure:**\n\n**Subject:** Keep it casual and clear\n• *Just checking in!* · *Great news!* · *About this weekend...*\n\n**Opening:**\n• *Hi [Name]! / Hey [Name],*\n• *Hope you\'re doing well!*\n• *It\'s been a while since we last spoke!*\n\n**Body:** Write naturally, like you\'re talking\n• Share news: *Guess what happened!*\n• Ask questions: *How\'s your new job going?*\n• Make plans: *We should definitely meet up soon!*\n\n**Closing:**\n• *Take care! / Talk soon! / Miss you!*\n• *Lots of love, / Best, / Cheers,*\n\n💡 **Informal vs Formal:**\n| Informal | Formal |\n|---------|--------|\n| Hi! | Dear Mr. Smith, |\n| Thanks a lot! | Thank you very much. |\n| I\'m writing because... | I am writing to... |\n| ASAP | as soon as possible |',
              sampleAnswer: 'Hey Sara!\n\nHope you\'re doing great! It feels like ages since we last caught up.\n\nGuess what? I just got promoted at work! I\'m so excited — it\'s been a long time coming. We should definitely celebrate together soon!\n\nHow about you? How\'s the new apartment working out? You must send me photos!\n\nLet me know when you\'re free and we\'ll sort something out.\n\nTalk soon!\nLayla 😊',
              exercises: [
                { type: 'multiple_choice', question: 'Which opening is appropriate for an informal email?', options: ['Dear Sir/Madam,', 'To Whom It May Concern,', 'Hey Ahmed!', 'I am writing to inform you that'], answer: 2 },
                { type: 'fill_blank',      question: 'It\'s been ___ while since we last spoke!', answer: 'a', hint: 'It\'s been ___ while' },
                { type: 'multiple_choice', question: 'Which is an informal way to say "I will contact you soon"?', options: ['I shall be in touch.', 'Talk soon!', 'I look forward to your response.', 'Yours faithfully,'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [you / Hope / well / doing / \'re]', words: ["you","Hope","well","doing","'re"], answer: "Hope you're doing well" },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How long has the patient been feeling unwell?', options: ['One day', 'Two days', 'Three days', 'A week'], answer: 2 },
                { type: 'fill_blank',      question: 'The doctor said to drink plenty of ___.', answer: 'fluids', hint: 'Water and other liquids' },
                { type: 'multiple_choice', question: 'What did the doctor prescribe?', options: ['Paracetamol only', 'Antibiotics and nasal spray', 'Vitamin C', 'Nothing'], answer: 1 },
                { type: 'fill_blank',      question: 'You need at least ___ days of rest.', answer: '3', hint: 'Look in the doctor\'s advice' },
                { type: 'multiple_choice', question: 'When should the patient return immediately?', options: ['After 5 days', 'If fever goes above 39.5', 'When they feel better', 'Every day'], answer: 1 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What was the original price of the bag?', options: ['320', '380', '350', '450'], answer: 3 },
                { type: 'fill_blank',      question: 'That\'s my ___ offer — I can\'t go lower.', answer: 'final', hint: 'Last = ___' },
                { type: 'multiple_choice', question: 'What payment methods does the seller accept?', options: ['Cash only', 'Card only', 'Cash or card', 'Bank transfer'], answer: 2 },
                { type: 'fill_blank',      question: 'The customer got the bag for ___ pounds.', answer: '350', hint: 'The agreed price' },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What does "Go straight ahead" mean?', options: ['انعطف يميناً', 'ارجع للخلف', 'اذهب مستقيماً', 'انعطف يساراً'], answer: 2 },
                { type: 'fill_blank',      question: 'The hotel is ___ the train station. (مقابل)', answer: 'opposite', hint: 'Facing / across from' },
                { type: 'reorder',         question: 'Reorder: [left / lights / Turn / at / the / traffic]', words: ['left','lights','Turn','at','the','traffic'], answer: 'Turn left at the traffic lights' },
                { type: 'multiple_choice', question: '"You can\'t miss it" means:', options: ['It\'s very hidden', 'It\'s very obvious/visible', 'You will definitely get lost', 'It\'s closed'], answer: 1 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Why can\'t the caller speak to Mr. Hassan?', options: ['He is not in the office', 'He is in a meeting', 'He is on holiday', 'He doesn\'t want to talk'], answer: 1 },
                { type: 'fill_blank',      question: 'Could you ask him to ___ me back?', answer: 'call', hint: 'Phone = call' },
                { type: 'multiple_choice', question: 'What does "Hold the line" mean?', options: ['Hang up the phone', 'Wait on the phone', 'Speak louder', 'Call again later'], answer: 1 },
                { type: 'fill_blank',      question: 'I\'ll ___ the message on to him right away.', answer: 'pass', hint: 'To deliver/transmit' },
                { type: 'reorder',         question: 'Reorder: [take / I / message / a / Can]', words: ['take','I','message','a','Can'], answer: 'Can I take a message' },
              ],
            },
          },
          {
            id: 'el3l5', title: 'Story: The Surprise Party', type: 'story', xp: 25,
            content: {
              intro: 'Read this fun story and test your comprehension!',
              text: `**The Surprise Party**\n\nRami had completely forgotten that his birthday was coming up. He had been so busy with his new job that he hadn't even thought about it.\n\nOn Saturday morning, his friend Lina texted him: "Hey! Want to grab lunch at La Piazza? I need to tell you some news."\n\nRami agreed, thinking it would be a normal lunch. He put on casual clothes — jeans and a simple shirt — and took a taxi to the restaurant.\n\nWhen he walked through the door, the lights were off. Strange, he thought. He took a step forward.\n\n"SURPRISE!"\n\nTwenty of his closest friends jumped out from behind the tables. The lights came on, and Rami saw balloons everywhere, a huge chocolate cake, and a banner that read: "Happy 30th Birthday, Rami!"\n\nHe stood there, completely speechless for a moment. Then he burst out laughing.\n\n"Did you seriously forget your own birthday?" Lina asked, laughing.\n\n"I've been so busy!" he said. "I genuinely forgot. This is... I don't know what to say."\n\n"Then don't say anything — just enjoy it!" she replied.\n\nIt turned out to be the most memorable birthday Rami had ever had. Sometimes, the best moments in life are the ones you never see coming.`,
              exercises: [
                { type: 'multiple_choice', question: 'Why had Rami forgotten his birthday?', options: ['He was travelling', 'He was busy with his new job', 'He doesn\'t celebrate birthdays', 'He was unwell'], answer: 1 },
                { type: 'fill_blank',      question: 'Rami wore jeans and a simple ___ to the restaurant.', answer: 'shirt', hint: 'Casual top' },
                { type: 'multiple_choice', question: 'How many friends were at the party?', options: ['Ten', 'Fifteen', 'Twenty', 'Twenty-five'], answer: 2 },
                { type: 'multiple_choice', question: '"Burst out laughing" means:', options: ['Cried suddenly', 'Started laughing suddenly', 'Stopped laughing', 'Laughed quietly'], answer: 1 },
                { type: 'fill_blank',      question: 'Sometimes the best moments are the ones you never see ___.', answer: 'coming', hint: 'Never see it ___' },
                { type: 'multiple_choice', question: 'What was the moral/lesson of the story?', options: ['Always remember your birthday', 'Good friends always surprise you', 'Unexpected moments can be the most special', 'Don\'t work too hard'], answer: 2 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Go viral" means:', options: ['Get a computer virus', 'Spread rapidly online', 'Delete content', 'Log out'], answer: 1 },
                { type: 'fill_blank',      question: 'She ___ her holiday photos to Facebook.', answer: 'uploaded', hint: 'Put files online' },
                { type: 'match',           question: 'Match tech vocabulary', pairs: [['Scroll','يتصفح'],['Stream','يبث'],['Tag','يشير'],['Crash','يتعطل']] },
                { type: 'multiple_choice', question: 'What does "notification" mean?', options: ['إشعار', 'رسالة', 'مكالمة', 'تحديث'], answer: 0 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How heavy was the suitcase?', options: ['20 kg', '23 kg', '25 kg', '30 kg'], answer: 1 },
                { type: 'fill_blank',      question: 'Boarding starts at Gate 14 at ___ AM.', answer: '10:30', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What seat did the passenger choose?', options: ['Window', 'Middle', 'Aisle', 'First class'], answer: 2 },
                { type: 'fill_blank',      question: 'Liquids must be in containers of ___ ml or less.', answer: '100', hint: 'Standard airport rule' },
                { type: 'multiple_choice', question: '"Depart" means:', options: ['يصل', 'يغادر', 'يتأخر', 'يلغي'], answer: 1 },
                { type: 'reorder',         question: 'Reorder: [pass / boarding / your / Show / gate / at / the]', words: ['pass','boarding','your','Show','gate','at','the'], answer: 'Show your boarding pass at the gate' },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What did the passenger order to drink?', options: ['Water', 'Coffee', 'Orange juice', 'Tea'], answer: 2 },
                { type: 'fill_blank',      question: 'The meal service starts in ___ minutes.', answer: '20', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What was the passenger\'s complaint?', options: ['The food was cold', 'The seat was broken', 'The person in front reclined too far', 'The flight was delayed'], answer: 2 },
                { type: 'fill_blank',      question: 'We land at ___ local time.', answer: '3:15', hint: 'The arrival time mentioned' },
                { type: 'multiple_choice', question: '"Have a word with someone" means:', options: ['Argue with someone', 'Talk briefly to someone', 'Write a note to someone', 'Ignore someone'], answer: 1 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Why is the traveller visiting?', options: ['Business', 'Education', 'Tourism', 'Medical treatment'], answer: 2 },
                { type: 'fill_blank',      question: 'The traveller is staying for ___ days.', answer: 'ten', hint: 'The number mentioned' },
                { type: 'multiple_choice', question: 'How much cash is the traveller carrying?', options: ['$500', '$800', '$1000', '$10,000'], answer: 1 },
                { type: 'fill_blank',      question: 'Do you have anything to ___ at customs?', answer: 'declare', hint: 'Official announcement of goods' },
                { type: 'reorder',         question: 'Reorder: [your / is / purpose / What / visit / of]', words: ['your','is','purpose','What','visit','of'], answer: 'What is your purpose of visit' },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Where do you wait before boarding?', options: ['Baggage claim', 'Departure lounge', 'Immigration', 'Customs'], answer: 1 },
                { type: 'fill_blank',      question: 'Your bags will be at ___ claim belt 5.', answer: 'baggage', hint: 'Where you collect your luggage' },
                { type: 'match',           question: 'Match airport words', pairs: [['Terminal','مبنى المطار'],['Gate','بوابة'],['Layover','توقف مؤقت'],['Delayed','متأخر']] },
                { type: 'multiple_choice', question: 'A "connecting flight" means:', options: ['A direct flight', 'A flight with a stop in between', 'A cancelled flight', 'A cheap flight'], answer: 1 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is special about Sara\'s suitcase?', options: ['It is green', 'It has a red ribbon on the handle', 'It has wheels', 'It is very large'], answer: 1 },
                { type: 'fill_blank',      question: 'The bag ___ the connecting flight in Cairo.', answer: 'missed', hint: 'Didn\'t make it onto...' },
                { type: 'multiple_choice', question: 'What will the airline give Sara in the meantime?', options: ['Money', 'A new suitcase', 'A toiletries kit', 'A hotel room'], answer: 2 },
                { type: 'fill_blank',      question: 'We will ___ any essential purchases you make.', answer: 'reimburse', hint: 'Pay back/compensate' },
                { type: 'multiple_choice', question: 'Where will the bag be delivered?', options: ['The airport', 'Her home', 'Her hotel', 'The embassy'], answer: 2 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Fully booked" means:', options: ['Very expensive', 'No rooms available', 'Good reviews', 'Recently opened'], answer: 1 },
                { type: 'fill_blank',      question: 'Do you have ___ for this Saturday night?', answer: 'availability', hint: 'Are rooms/tables free?' },
                { type: 'multiple_choice', question: 'A "deposit" is:', options: ['Full payment', 'A partial payment in advance', 'A refund', 'A discount'], answer: 1 },
                { type: 'match',           question: 'Match booking words', pairs: [['Book','يحجز'],['Deposit','عربون'],['Confirmation','تأكيد'],['Cancellation','إلغاء']] },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What type of room did Rami book?', options: ['Standard Single', 'Deluxe Double', 'Suite', 'Twin Room'], answer: 1 },
                { type: 'fill_blank',      question: 'Breakfast, Wi-Fi, pool and ___ are all included.', answer: 'gym', hint: 'Exercise facility' },
                { type: 'multiple_choice', question: 'What did the guest ask for at 7 AM?', options: ['Breakfast in room', 'A taxi', 'A wake-up call', 'The bill'], answer: 2 },
                { type: 'fill_blank',      question: 'The elevator is to your ___.', answer: 'left', hint: 'Direction given by receptionist' },
                { type: 'reorder',         question: 'Reorder: [could / wake-up / a / arrange / you / call]', words: ['could','wake-up','a','arrange','you','call'], answer: 'could you arrange a wake-up call' },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What food did the guest order?', options: ['Pizza and salad', 'Club sandwich, fries and Caesar salad', 'Burger and fries', 'Pasta and bread'], answer: 1 },
                { type: 'fill_blank',      question: 'The food will arrive in approximately ___ minutes.', answer: '30', hint: 'Look in the dialogue' },
                { type: 'multiple_choice', question: 'What was wrong with the TV?', options: ['Screen was broken', 'Sound was off', 'Remote wasn\'t working', 'Wrong channel'], answer: 2 },
                { type: 'fill_blank',      question: 'The pool closes at ___ PM.', answer: '10', hint: 'The closing time mentioned' },
                { type: 'reorder',         question: 'Reorder: [the / for / apologize / inconvenience / I]', words: ['the','for','apologize','inconvenience','I'], answer: 'I apologize for the inconvenience' },
              ],
            },
          },
          {
            id: 'tr2l3', title: 'Describing a Hotel', type: 'writing', xp: 30,
            content: {
              intro: 'Write a hotel review like on TripAdvisor or Booking.com!',
              explanation: '✍️ **Writing a Hotel Review:**\n\n**Useful phrases:**\n\n⭐ **Positive:**\n• The staff were incredibly helpful and friendly.\n• The location is perfect — right in the city centre.\n• The room was spotlessly clean and well-equipped.\n• Excellent value for money.\n• I would highly recommend this hotel.\n• I will definitely be coming back!\n\n👎 **Negative:**\n• Unfortunately, the room was smaller than expected.\n• The noise from the street was quite disturbing.\n• The WiFi connection was unreliable.\n• The breakfast was disappointing — limited options.\n• The check-in process was slow and disorganised.\n\n💡 **Structure your review:**\n1. Overall impression (⭐ rating)\n2. What you liked\n3. What could be improved\n4. Recommendation',
              sampleAnswer: '⭐⭐⭐⭐⭐ The Grand Palace Hotel — Excellent Stay!\n\nI stayed at the Grand Palace for 3 nights in March and I was thoroughly impressed. The staff were incredibly welcoming and nothing was too much trouble for them.\n\nThe room was spotlessly clean, modern, and had a fantastic view of the old city. The breakfast was outstanding — a huge variety of both local and international options.\n\nThe location is perfect — walking distance from all the main attractions and plenty of restaurants nearby.\n\nIf I could mention one improvement: the lifts were quite slow during busy times. But this is a minor issue.\n\nI would absolutely recommend this hotel and will definitely be returning on my next visit!',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase expresses strong satisfaction?', options: ['It was okay.', 'I would highly recommend it.', 'The noise was disturbing.', 'The WiFi was unreliable.'], answer: 1 },
                { type: 'fill_blank',      question: 'The room was ___ clean and well-equipped.', answer: 'spotlessly', hint: 'Perfectly/immaculately' },
                { type: 'multiple_choice', question: 'What does "value for money" mean?', options: ['Very expensive', 'Good quality at a fair price', 'Very cheap', 'Overpriced'], answer: 1 },
                { type: 'fill_blank',      question: 'I will ___ be coming back!', answer: 'definitely', hint: 'Certainly/without doubt' },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is a "hostel" best known for?', options: ['Luxury', 'Budget-friendly prices', 'Only for families', 'Fine dining'], answer: 1 },
                { type: 'fill_blank',      question: 'The hotel offers ___ breakfast every morning. (مجاني)', answer: 'complimentary', hint: 'Free of charge' },
                { type: 'match',           question: 'Match accommodation words', pairs: [['Hostel','نزل شبابي'],['Amenities','وسائل الراحة'],['En-suite','حمام خاص'],['All-inclusive','الكل في واحد']] },
                { type: 'multiple_choice', question: '"Self-catering" accommodation means:', options: ['Free meals included', 'Kitchen to cook yourself', 'Room service only', 'Breakfast only'], answer: 1 },
              ],
            },
          },
          {
            id: 'tr2l5', title: 'Story: A Memorable Trip', type: 'story', xp: 30,
            content: {
              intro: 'Read this travel story and practise your comprehension!',
              text: `**A Memorable Trip**\n\nNour had always dreamed of visiting Japan. When she finally booked her tickets for a two-week trip in spring, she could barely contain her excitement.\n\nShe arrived in Tokyo on a warm April morning and was immediately struck by how organised and clean everything was. The trains ran on time to the second, the streets were spotless, and even in the middle of rush hour, everyone was politely quiet.\n\nOn her third day, she visited Kyoto. The famous bamboo forest was breathtaking — tall green stalks stretching endlessly upwards, with filtered sunlight creating an almost magical atmosphere. She sat on a bench and wrote in her journal for an hour.\n\nIn a small teahouse, she met a Japanese woman named Yuki, who spoke excellent English. They shared tea and conversation for two hours, discussing their cultures, families, and dreams. When they said goodbye, Yuki gave Nour a small origami crane.\n\n"In Japan, we say 1,000 paper cranes bring good luck," Yuki explained with a smile.\n\nNour carried that crane carefully all the way home. Back in Cairo, she placed it on her desk.\n\nSomewhere in the world, she thought, Yuki was probably folding another crane — and that made her smile every time she looked at it.`,
              exercises: [
                { type: 'multiple_choice', question: 'When did Nour visit Japan?', options: ['Winter', 'Summer', 'Spring', 'Autumn'], answer: 2 },
                { type: 'fill_blank',      question: 'She was struck by how ___ and clean everything was.', answer: 'organised', hint: 'Efficient/well-arranged' },
                { type: 'multiple_choice', question: 'What did Nour do in the bamboo forest?', options: ['Took photos for an hour', 'Wrote in her journal', 'Met Yuki', 'Had tea'], answer: 1 },
                { type: 'multiple_choice', question: 'What did Yuki give Nour?', options: ['A book about Japan', 'Green tea', 'An origami crane', 'A photo'], answer: 2 },
                { type: 'fill_blank',      question: '1,000 paper cranes are said to bring good ___.', answer: 'luck', hint: 'Fortune/blessing' },
                { type: 'multiple_choice', question: 'The word "breathtaking" means:', options: ['Scary', 'Extremely beautiful', 'Very crowded', 'Disappointing'], answer: 1 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What time does the museum open?', options: ['8 AM', '9 AM', '10 AM', '11 AM'], answer: 1 },
                { type: 'fill_blank',      question: 'The museum is ___ the park.', answer: 'opposite', hint: 'Facing/across from' },
                { type: 'multiple_choice', question: 'What time do guided tours start?', options: ['9 AM and 1 PM', '10 AM and 2 PM', '11 AM and 3 PM', '10 AM and 3 PM'], answer: 1 },
                { type: 'fill_blank',      question: 'The entrance fee is very ___ — only 50 pounds.', answer: 'reasonable', hint: 'Fair/affordable' },
                { type: 'reorder',         question: 'Reorder: [miss / can\'t / it / You]', words: ["miss","can't","it","You"], answer: "You can't miss it" },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: '🌟 How do you say "مرحباً"?', options: ['Goodbye', 'Hello', 'Please', 'Thank you'], answer: 1 },
                { type: 'fill_blank',      question: 'My ___ is Ahmed. (اسمي)', answer: 'name', hint: 'My ___ is...' },
                { type: 'multiple_choice', question: '🎉 What do you say when you first meet someone?', options: ['Goodbye!', 'I am hungry!', 'Nice to meet you!', 'See you later!'], answer: 2 },
                { type: 'reorder',         question: '🧩 Make a sentence: [is / name / My / Sara]', words: ['is','name','My','Sara'], answer: 'My name is Sara' },
                { type: 'fill_blank',      question: '🌙 ___ ! See you tomorrow! (وداعاً)', answer: 'Goodbye', hint: 'What you say when leaving' },
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
              exercises: [
                { type: 'multiple_choice', question: '🎈 How many fingers do we have on both hands?', options: ['Eight', 'Nine', 'Ten', 'Twelve'], answer: 2 },
                { type: 'fill_blank',      question: '⭐ One, two, ___, four, five!', answer: 'three', hint: 'Between 2 and 4' },
                { type: 'multiple_choice', question: '📅 How many days are in a week?', options: ['Five', 'Six', 'Seven', 'Eight'], answer: 2 },
                { type: 'fill_blank',      question: '🍎 There are ___ months in a year.', answer: 'twelve', hint: 'Write the number in words' },
                { type: 'multiple_choice', question: '🌟 What comes after nineteen?', options: ['Eighteen', 'Twenty-one', 'Fifteen', 'Twenty'], answer: 3 },
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
              exercises: [
                { type: 'multiple_choice', question: '☀️ What color is the sun?', options: ['Blue', 'Green', 'Yellow', 'Red'], answer: 2 },
                { type: 'fill_blank',      question: '🍎 Apples are ___.', answer: 'red', hint: 'A warm color' },
                { type: 'multiple_choice', question: '🌤️ The sky is:', options: ['Green', 'Blue', 'Yellow', 'Pink'], answer: 1 },
                { type: 'match',           question: '🌈 Match the colors!', pairs: [['Red','أحمر'],['Blue','أزرق'],['Green','أخضر'],['Yellow','أصفر']] },
                { type: 'fill_blank',      question: '❄️ Snow is ___.', answer: 'white', hint: 'Opposite of black' },
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
              exercises: [
                { type: 'multiple_choice', question: '🐕 What sound does a dog make?', options: ['MEOW', 'MOO', 'WOOF WOOF', 'QUACK'], answer: 2 },
                { type: 'fill_blank',      question: '🐄 A cow says: ___!', answer: 'MOO', hint: 'The sound a cow makes' },
                { type: 'multiple_choice', question: '🦁 Which animal says ROAR?', options: ['Sheep', 'Duck', 'Cat', 'Lion'], answer: 3 },
                { type: 'match',           question: '🎯 Match animals to their sounds!', pairs: [['Dog','WOOF'],['Cat','MEOW'],['Duck','QUACK'],['Cow','MOO']] },
                { type: 'fill_blank',      question: '🐦 ___ can fly!', answer: 'Birds', hint: 'Animals with wings' },
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
              exercises: [
                { type: 'multiple_choice', question: '👀 What do we use to see?', options: ['Ears', 'Nose', 'Eyes', 'Mouth'], answer: 2 },
                { type: 'fill_blank',      question: '✋ I write with my ___.', answer: 'hands', hint: 'The body parts at the end of your arms' },
                { type: 'multiple_choice', question: '👂 What do we use to hear?', options: ['Eyes', 'Nose', 'Mouth', 'Ears'], answer: 3 },
                { type: 'match',           question: '🎯 Match body parts!', pairs: [['Eyes','عيون'],['Nose','أنف'],['Ears','آذان'],['Feet','قدمان']] },
                { type: 'fill_blank',      question: '🦶 I walk with my ___.', answer: 'feet', hint: 'Bottom of your legs' },
              ],
            },
          },
          {
            id: 'k1l6', title: 'Story: The Little Red Hen', type: 'story', xp: 15,
            content: {
              intro: '📖 Let\'s read a fun story! The Little Red Hen!',
              text: `**The Little Red Hen** 🐔\n\nOnce upon a time, there was a Little Red Hen. She lived on a farm with a cat 🐱, a dog 🐕, and a duck 🦆.\n\nOne day, the Little Red Hen found some seeds. "Who will help me plant these seeds?" she asked.\n\n"Not I!" said the cat.\n"Not I!" said the dog.\n"Not I!" said the duck.\n\n"Then I will do it myself!" said the Little Red Hen. And she did.\n\nThe seeds grew into wheat 🌾. "Who will help me cut the wheat?" she asked.\n\n"Not I!" said the cat.\n"Not I!" said the dog.\n"Not I!" said the duck.\n\n"Then I will do it myself!" And she did.\n\nFinally, she baked a beautiful loaf of bread 🍞.\n\n"Who will help me eat the bread?" she asked.\n\n"I will!" said the cat.\n"I will!" said the dog.\n"I will!" said the duck.\n\n"No!" said the Little Red Hen. "I will eat it myself. I did all the work!"\n\nAnd she ate every last piece! 😄\n\n**The End! 🌟**\n\n*Lesson: If you help with the work, you get to share the reward!*`,
              exercises: [
                { type: 'multiple_choice', question: '🐔 Where did the Little Red Hen live?', options: ['In a house', 'On a farm', 'In a forest', 'In a city'], answer: 1 },
                { type: 'multiple_choice', question: '🌱 What did the Hen find?', options: ['Bread', 'Corn', 'Seeds', 'Flowers'], answer: 2 },
                { type: 'fill_blank',      question: '"Not ___ !" said the cat, dog and duck.', answer: 'I', hint: 'First person pronoun' },
                { type: 'multiple_choice', question: '🍞 What did the Hen make?', options: ['A cake', 'A pie', 'A loaf of bread', 'Cookies'], answer: 2 },
                { type: 'multiple_choice', question: '🌟 What is the lesson of the story?', options: ['Cats are lazy', 'If you help with work, you share the reward', 'Hens are selfish', 'Ducks don\'t like bread'], answer: 1 },
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
              ],
              exercises: [
                { type: 'multiple_choice', question: '👩 Who is your mother?', options: ['Your father\'s mother', 'Your female parent', 'Your sister', 'Your aunt'], answer: 1 },
                { type: 'fill_blank',      question: 'My ___ tells great stories! (جد)', answer: 'grandfather', hint: 'Your father\'s father' },
                { type: 'match',           question: '🎯 Match family words!', pairs: [['Mother','أم'],['Father','أب'],['Sister','أخت'],['Brother','أخ']] },
                { type: 'multiple_choice', question: '👶 What is a "baby"?', options: ['A very young child', 'A grandfather', 'A sister', 'A teacher'], answer: 0 },
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
              exercises: [
                { type: 'multiple_choice', question: '🍦 What is your favourite cold sweet?', options: ['Milk', 'Ice cream', 'Bread', 'Rice'], answer: 1 },
                { type: 'fill_blank',      question: '🎂 I eat ___ on my birthday!', answer: 'cake', hint: 'Birthday ___' },
                { type: 'match',           question: '🍕 Match the foods!', pairs: [['Pizza','بيتزا'],['Milk','حليب'],['Apple','تفاحة'],['Banana','موزة']] },
                { type: 'multiple_choice', question: '🐒 What do monkeys love?', options: ['Pizza', 'Milk', 'Bananas', 'Cake'], answer: 2 },
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
              exercises: [
                { type: 'multiple_choice', question: '🎨 In which class do you draw and paint?', options: ['Maths', 'Science', 'Art', 'History'], answer: 2 },
                { type: 'fill_blank',      question: '⚽ ___ is my favourite class — I love running!', answer: 'PE', hint: 'Physical Education' },
                { type: 'multiple_choice', question: '🗺️ What do you learn in Geography?', options: ['Numbers', 'Animals', 'Countries and places', 'Music'], answer: 2 },
                { type: 'match',           question: '📚 Match subjects!', pairs: [['English','الإنجليزية'],['Maths','رياضيات'],['Art','فنون'],['Music','موسيقى']] },
              ],
            },
          },
          {
            id: 'k2l4', title: 'The Alphabet Song', type: 'vocabulary', xp: 15,
            content: {
              intro: '🎵 Let\'s sing and learn the English alphabet!',
              explanation: '🔤 **The English Alphabet — 26 Letters!**\n\n**Uppercase:** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n\n**Fun words for each letter:**\n🍎 **A** - Apple · 🐝 **B** - Bee · 🐱 **C** - Cat\n🐶 **D** - Dog · 🥚 **E** - Egg · 🐟 **F** - Fish\n🍇 **G** - Grape · 🏠 **H** - House · 🍦 **I** - Ice cream\n🎃 **J** - Juice · 🔑 **K** - Key · 🦁 **L** - Lion\n🌙 **M** - Moon · 👃 **N** - Nose · 🍊 **O** - Orange\n🍕 **P** - Pizza · 👸 **Q** - Queen · 🌹 **R** - Rose\n☀️ **S** - Sun · 🌳 **T** - Tree · ☂️ **U** - Umbrella\n🎻 **V** - Violin · 🌊 **W** - Wave · ❌ **X** - X-ray\n🪁 **Y** - Yo-yo · 🦓 **Z** - Zebra\n\n🎵 **Sing it!** A-B-C-D-E-F-G, H-I-J-K-L-M-N-O-P, Q-R-S, T-U-V, W-X-Y and Z! Now I know my ABCs!',
              exercises: [
                { type: 'multiple_choice', question: '🍎 A is for ___?', options: ['Ant', 'Apple', 'Arm', 'All of these'], answer: 3 },
                { type: 'fill_blank',      question: '🦓 Z is for ___.', answer: 'Zebra', hint: 'A black and white striped animal' },
                { type: 'multiple_choice', question: '🌙 M is for ___?', options: ['Map', 'Moon', 'Mouse', 'All of these'], answer: 3 },
                { type: 'fill_blank',      question: '☀️ S is for ___.', answer: 'Sun', hint: 'The bright thing in the sky' },
                { type: 'multiple_choice', question: '🐶 How many letters are in the English alphabet?', options: ['24', '25', '26', '28'], answer: 2 },
              ],
            },
          },
          {
            id: 'k2l5', title: 'Story: The Very Hungry Caterpillar', type: 'story', xp: 15,
            content: {
              intro: '📖 Read this fun story about a hungry caterpillar!',
              text: `**The Very Hungry Caterpillar 🐛**\n\nOn Monday, a tiny caterpillar hatched from an egg. He was very, very hungry!\n\nOn Monday 🍎, he ate through ONE apple. But he was still hungry.\n\nOn Tuesday 🍐, he ate through TWO pears. But he was still hungry.\n\nOn Wednesday 🍓, he ate through THREE strawberries. But he was still hungry.\n\nOn Thursday 🍫, he ate through FOUR chocolates. But he was still hungry.\n\nOn Friday 🍕, he ate through FIVE slices of pizza! Yum!\n\nBut that night... he had a VERY bad tummy ache! 😣\n\nOn Saturday, he ate only one nice, green leaf. He felt much better!\n\nThen he made a cocoon 🏠 around himself. He stayed inside for two weeks.\n\nWhen he came out, he was not a caterpillar anymore. He was a beautiful butterfly! 🦋\n\n**The End! 🌟**`,
              exercises: [
                { type: 'multiple_choice', question: '🍎 What did the caterpillar eat on Monday?', options: ['Pears', 'Strawberries', 'An apple', 'Chocolate'], answer: 2 },
                { type: 'fill_blank',      question: '🍐 On Tuesday, he ate ___ pears.', answer: 'two', hint: 'The number 2 in words' },
                { type: 'multiple_choice', question: '😣 Why did he have a tummy ache?', options: ['He was sick', 'He ate too much', 'He fell down', 'It was cold'], answer: 1 },
                { type: 'multiple_choice', question: '🦋 What did the caterpillar become?', options: ['A bird', 'A bee', 'A butterfly', 'A dragonfly'], answer: 2 },
                { type: 'fill_blank',      question: 'He stayed in the cocoon for ___ weeks.', answer: 'two', hint: 'The number mentioned in the story' },
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
              exercises: [
                { type: 'multiple_choice', question: '✋ What do you do when you know the answer?', options: ['Shout it out', 'Raise your hand', 'Stay silent', 'Write it'], answer: 1 },
                { type: 'fill_blank',      question: '📖 ___ your book to page 10.', answer: 'Open', hint: 'Command to open' },
                { type: 'multiple_choice', question: '🌟 Your teacher says "Well done!" — what does it mean?', options: ['أعد المحاولة', 'اهدأ', 'أحسنت', 'اجلس'], answer: 2 },
                { type: 'match',           question: '🎯 Match the commands!', pairs: [['Sit down','اجلس'],['Stand up','قف'],['Be quiet','اهدأ'],['Well done','أحسنت']] },
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
              exercises: [
                { type: 'multiple_choice', question: 'Which is more appropriate for academic writing?', options: ['The results show a lot of improvement.', 'The results demonstrate considerable improvement.', 'The results are really good.', 'We got better results.'], answer: 1 },
                { type: 'fill_blank',      question: 'The formal academic word for "use" is ___.', answer: 'utilise', hint: 'A more formal synonym' },
                { type: 'multiple_choice', question: 'Which sentence uses correct academic hedging?', options: ['This proves all students struggle.', 'This suggests many students may struggle.', 'I think students struggle.', 'Students definitely struggle.'], answer: 1 },
                { type: 'fill_blank',      question: '"Don\'t" should be written as ___ in academic writing.', answer: 'do not', hint: 'Expand the contraction' },
                { type: 'multiple_choice', question: 'The academic passive form of "I surveyed 50 students" is:', options: ['50 students were surveyed.', 'I did survey 50 students.', '50 students have surveyed.', 'We surveyed 50 students.'], answer: 0 },
                { type: 'fill_blank',      question: 'The nominalization of "analyse" is ___.', answer: 'analysis', hint: 'The noun form' },
              ],
            },
          },
          {
            id: 'ac1l2', title: 'Essay Structure', type: 'writing', xp: 45,
            content: {
              intro: 'Learn the perfect structure for academic essays!',
              explanation: '📝 **Academic Essay Structure:**\n\n**Introduction (~10-15% of word count):**\n• Hook/opening statement\n• Background context\n• Thesis statement (your main argument)\n• Outline of structure (In this essay, I will firstly... secondly... finally...)\n\n**Body Paragraphs (PEEL structure):**\n• **P**oint — topic sentence stating the main idea\n• **E**vidence — quote, data, or example\n• **E**xplanation — analyse the evidence\n• **L**ink — connect back to thesis/lead to next point\n\n**Conclusion (~10% of word count):**\n• Restate thesis (different words)\n• Summarise key points\n• Broader implications / recommendations\n• Final thought\n\n**Useful academic phrases:**\n📌 *This essay will argue that...*\n📌 *Evidence suggests that...*\n📌 *As demonstrated above...*\n📌 *In conclusion, it is evident that...*',
              exercises: [
                { type: 'multiple_choice', question: 'In PEEL, what does the "E" for Evidence involve?', options: ['Explaining your opinion', 'Providing a quote or data', 'Ending the paragraph', 'Expanding the argument'], answer: 1 },
                { type: 'fill_blank',      question: 'The thesis statement appears in the ___.', answer: 'introduction', hint: 'First section of the essay' },
                { type: 'multiple_choice', question: 'Which phrase is appropriate to start a conclusion?', options: ['Let me tell you about...', 'In conclusion, it is evident that...', 'I think that...', 'Firstly, I will show...'], answer: 1 },
                { type: 'fill_blank',      question: 'In PEEL, "L" stands for ___ to thesis.', answer: 'link', hint: 'Connect back' },
                { type: 'multiple_choice', question: 'Academic writing should avoid:', options: ['Passive voice', 'Formal vocabulary', 'Contractions like "it\'s"', 'Complex sentences'], answer: 2 },
              ],
            },
          },
          {
            id: 'ac1l3', title: 'Referencing & Citations', type: 'grammar', xp: 45,
            content: {
              intro: 'Learn how to cite sources and avoid plagiarism!',
              explanation: '📚 **Referencing in Academic Writing:**\n\n**Why reference?**\n• Gives credit to original authors\n• Supports your arguments\n• Avoids plagiarism\n\n**APA Style (common in social sciences):**\n• In-text: *(Smith, 2020, p.45)*\n• Reference list: *Smith, J. (2020). Title. Publisher.*\n\n**Harvard Style:**\n• In-text: *(Smith, 2020)*\n• Reference list: *Smith, J. (2020) Title. City: Publisher.*\n\n**Signal phrases to introduce quotes:**\n• *According to Smith (2020),...*\n• *As Brown (2019) argues,...*\n• *Research by Jones (2021) suggests that...*\n• *In the words of Taylor (2018),...*\n\n**Paraphrasing (recommended over direct quotes):**\n❌ *"The results showed a 45% increase" (Smith, 2020)*\n✅ *Smith (2020) found that rates increased by nearly half.*\n\n⚠️ **Plagiarism** = using someone\'s words/ideas without credit. This is a serious academic offence!',
              exercises: [
                { type: 'multiple_choice', question: 'What is the purpose of referencing in academic writing?', options: ['To make essays longer', 'To give credit and support arguments', 'To show off knowledge', 'To confuse readers'], answer: 1 },
                { type: 'fill_blank',      question: 'According ___ Smith (2020), results improved significantly.', answer: 'to', hint: 'According ___ someone' },
                { type: 'multiple_choice', question: 'Using someone\'s ideas without credit is called:', options: ['Summarising', 'Paraphrasing', 'Plagiarism', 'Referencing'], answer: 2 },
                { type: 'multiple_choice', question: 'Which signal phrase is correct?', options: ['Smith says...', 'According to Smith (2020),...', 'Smith think that...', 'Like Smith said,...'], answer: 1 },
                { type: 'fill_blank',      question: 'Paraphrasing means expressing someone\'s ideas in your ___ words.', answer: 'own', hint: 'Your personal/individual' },
              ],
            },
          },
          {
            id: 'ac1l4', title: 'Critical Analysis', type: 'reading', xp: 45,
            content: {
              intro: 'Develop critical thinking skills for academic reading!',
              explanation: '🧠 **Critical Analysis Skills:**\n\n**What is critical analysis?**\nNot just describing what something says, but evaluating it — strengths, weaknesses, implications.\n\n**Questions to ask when reading:**\n• What is the main argument/claim?\n• What evidence is provided?\n• Is the evidence reliable? (source, date, methodology)\n• Are there any biases or assumptions?\n• What are the counter-arguments?\n• What are the implications?\n\n**Critical language:**\n📌 *While X argues that..., this view overlooks...*\n📌 *Although X provides compelling evidence, it fails to consider...*\n📌 *A significant strength of this study is...*\n📌 *However, a limitation of this approach is...*\n📌 *This finding supports / contradicts the theory that...*\n\n**Levels of engagement:**\n1. Description (what it says)\n2. Analysis (why it matters)\n3. Evaluation (how strong/weak it is)\n4. Synthesis (connecting multiple sources)',
              exercises: [
                { type: 'multiple_choice', question: 'Critical analysis means:', options: ['Describing what a text says', 'Evaluating strengths and weaknesses', 'Agreeing with everything', 'Finding spelling mistakes'], answer: 1 },
                { type: 'fill_blank',      question: 'A significant ___ of this study is its large sample size.', answer: 'strength', hint: 'Positive aspect' },
                { type: 'multiple_choice', question: 'Which phrase introduces a critical counter-argument?', options: ['Furthermore,...', 'Although X argues..., this view overlooks...', 'In conclusion,...', 'For example,...'], answer: 1 },
                { type: 'multiple_choice', question: 'What is the highest level of critical engagement?', options: ['Description', 'Analysis', 'Evaluation', 'Synthesis'], answer: 3 },
                { type: 'fill_blank',      question: 'However, a ___ of this approach is the small sample size.', answer: 'limitation', hint: 'Negative aspect/weakness' },
              ],
            },
          },
          {
            id: 'ac1l5', title: 'Reading: Climate Change Article', type: 'reading', xp: 45,
            content: {
              intro: 'Read and critically analyse an academic-style article!',
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
    ],
  },
]

export default NEW_COURSES