import NEW_COURSES from './newCourses'

// ─── Original courses (kept + expanded) ──────────────────────────────────
export const ORIGINAL_COURSES = [
  {
    id: 'beginner',
    title: 'Beginner English',
    level: 'A1–A2',
    description: 'Start your English journey from scratch. Learn greetings, numbers, colors, and basic sentences.',
    color: '#22C55E',
    icon: '🌱',
    xpPerLesson: 20,
    units: [
      {
        id: 'b1', title: 'Greetings & Introductions', icon: '👋',
        lessons: [
          {
            id: 'b1l1', title: 'Hello & Goodbye', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn how to greet people in English!',
              vocabulary: [
                { word: 'Hello', translation: 'مرحبا', example: 'Hello! My name is Sarah.' },
                { word: 'Hi', translation: 'مرحبا', example: 'Hi! How are you?' },
                { word: 'Good morning', translation: 'صباح الخير', example: 'Good morning! Did you sleep well?' },
                { word: 'Good afternoon', translation: 'مساء الخير', example: 'Good afternoon, Mr. Smith.' },
                { word: 'Good evening', translation: 'مساء الخير', example: 'Good evening! Welcome.' },
                { word: 'Goodbye', translation: 'وداعاً', example: 'Goodbye! See you tomorrow.' },
                { word: 'See you later', translation: 'أراك لاحقاً', example: 'See you later, friend!' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How do you greet someone in the morning?', options: ['Good evening', 'Good morning', 'Goodbye', 'Good night'], answer: 1 },
                { type: 'multiple_choice', question: 'Which word means "مرحبا"?', options: ['Goodbye', 'Hello', 'Sorry', 'Please'], answer: 1 },
                { type: 'fill_blank', question: 'Complete: "___ morning! How are you?"', answer: 'Good', hint: 'It starts with G' },
                { type: 'match', question: 'Match the greetings', pairs: [['Hello','مرحبا'],['Goodbye','وداعاً'],['Good morning','صباح الخير'],['See you later','أراك لاحقاً']] },
                { type: 'reorder', question: 'Put the words in order:', words: ['My', 'name', 'is', 'Ahmed'], answer: 'My name is Ahmed' },
              ],
            },
          },
          {
            id: 'b1l2', title: 'My Name Is...', type: 'grammar', xp: 20,
            content: {
              intro: 'Learn how to introduce yourself!',
              explanation: '📝 **Introducing Yourself:**\n\n• **My name is** + [name]\n  *My name is Sara.*\n\n• **I am** = **I\'m** (short form)\n  *I\'m from Egypt.*\n\n• **Nice to meet you** — say this when meeting someone!',
              examples: ['My name is Sara. I\'m from Egypt.', 'Hello! I\'m Ahmed. Nice to meet you!'],
              exercises: [
                { type: 'fill_blank', question: '___ name is Maria.', answer: 'My', hint: 'Possessive pronoun' },
                { type: 'multiple_choice', question: '"I am" can be shortened to:', options: ["I'm", "Im", "Am", "I're"], answer: 0 },
                { type: 'reorder', question: 'Reorder: [is / name / Ahmed / My]', words: ['is', 'name', 'Ahmed', 'My'], answer: 'My name is Ahmed' },
                { type: 'fill_blank', question: 'Hello! ___ am John.', answer: 'I', hint: 'First person pronoun' },
                { type: 'multiple_choice', question: 'What do you say after meeting someone?', options: ['Goodbye', 'Nice to meet you', 'Good night', 'Sorry'], answer: 1 },
                { type: 'translate', question: 'Translate: "اسمي سارة"', answer: 'My name is Sara', hint: 'Use "My name is"' },
              ],
            },
          },
          {
            id: 'b1l3', title: 'Where Are You From?', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn to talk about where you are from!',
              vocabulary: [
                { word: 'I am from Egypt', translation: 'أنا من مصر', example: 'I am from Egypt, a beautiful country.' },
                { word: 'Where are you from?', translation: 'من أين أنت؟', example: 'Where are you from? I am from Brazil.' },
                { word: 'I live in', translation: 'أعيش في', example: 'I live in Cairo.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How do you ask where someone is from?', options: ['What is your name?', 'Where are you from?', 'How old are you?', 'Do you speak English?'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ from Egypt.', answer: 'am', hint: 'Form of "to be"' },
                { type: 'translate', question: 'Translate: "أنا من مصر"', answer: 'I am from Egypt', hint: 'Start with "I am from"' },
                { type: 'reorder', question: 'Reorder: [from / you / Where / are]', words: ['from', 'you', 'Where', 'are'], answer: 'Where are you from' },
                { type: 'multiple_choice', question: 'What does "city" mean?', options: ['دولة', 'قارة', 'مدينة', 'قرية'], answer: 2 },
              ],
            },
          },
          {
            id: 'b1l4', title: 'Numbers 1–20', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Master the numbers 1 to 20!',
              vocabulary: [
                { word: 'One (1)', translation: 'واحد', example: 'I have one brother.' },
                { word: 'Five (5)', translation: 'خمسة', example: 'Five fingers on each hand.' },
                { word: 'Ten (10)', translation: 'عشرة', example: 'Ten students in the class.' },
                { word: 'Twenty (20)', translation: 'عشرون', example: 'Twenty days left.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is "خمسة" in English?', options: ['Four', 'Six', 'Five', 'Seven'], answer: 2 },
                { type: 'multiple_choice', question: 'How do you write 15 in words?', options: ['Fifty', 'Fifteen', 'Twelve', 'Twenty'], answer: 1 },
                { type: 'fill_blank', question: 'One, two, ___, four, five', answer: 'three', hint: 'Between 2 and 4' },
                { type: 'multiple_choice', question: 'What comes after nineteen?', options: ['Eighteen', 'Twenty-one', 'Twenty', 'Eleven'], answer: 2 },
                { type: 'fill_blank', question: 'I have ___ (10) apples.', answer: 'ten', hint: 'Write the number in words' },
              ],
            },
          },
          {
            id: 'b1l5', title: 'Colors & Shapes', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn colors and shapes!',
              vocabulary: [
                { word: 'Red', translation: 'أحمر', example: 'The apple is red.' },
                { word: 'Blue', translation: 'أزرق', example: 'The sky is blue.' },
                { word: 'Green', translation: 'أخضر', example: 'Grass is green.' },
                { word: 'Circle', translation: 'دائرة', example: 'A wheel is a circle.' },
                { word: 'Square', translation: 'مربع', example: 'A box is a square.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What color is the sky?', options: ['Red', 'Green', 'Blue', 'Yellow'], answer: 2 },
                { type: 'match', question: 'Match colors', pairs: [['Red','أحمر'],['Blue','أزرق'],['Green','أخضر'],['Yellow','أصفر']] },
                { type: 'fill_blank', question: 'The apple is ___.', answer: 'red', hint: 'A warm color' },
                { type: 'multiple_choice', question: 'What shape is a wheel?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 2 },
                { type: 'translate', question: 'Translate: "السماء زرقاء"', answer: 'The sky is blue', hint: 'Use "The sky is"' },
              ],
            },
          },
          {
            id: 'b1l6', title: 'Daily Routine', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Talk about what you do every day!',
              vocabulary: [
                { word: 'Wake up', translation: 'أستيقظ', example: 'I wake up at 7 AM.' },
                { word: 'Eat breakfast', translation: 'أتناول الفطور', example: 'I eat breakfast at 8 AM.' },
                { word: 'Go to school/work', translation: 'أذهب للمدرسة/العمل', example: 'I go to school at 9 AM.' },
                { word: 'Go to sleep', translation: 'أذهب للنوم', example: 'I go to sleep at 11 PM.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What do you do first in the morning?', options: ['Have dinner', 'Wake up', 'Go to sleep', 'Have lunch'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ up at 7 AM every day.', answer: 'wake', hint: 'The first thing in the morning' },
                { type: 'reorder', question: 'Reorder: [breakfast / I / at / eat / 8 AM]', words: ['breakfast', 'I', 'at', 'eat', '8 AM'], answer: 'I eat breakfast at 8 AM' },
                { type: 'multiple_choice', question: '"Have dinner" means:', options: ['أتناول الفطور', 'أتناول الغداء', 'أتناول العشاء', 'أشرب القهوة'], answer: 2 },
                { type: 'translate', question: 'Translate: "أذهب للنوم في الساعة 11"', answer: 'I go to sleep at 11', hint: 'I go to sleep at...' },
              ],
            },
          },
        ],
      },
      {
        id: 'b2', title: 'Basic Grammar', icon: '📝',
        lessons: [
          {
            id: 'b2l1', title: 'I am / You are / He is', type: 'grammar', xp: 20,
            content: {
              intro: 'Learn the verb "to be"!',
              explanation: '📝 **The verb "to be":**\n\n| Subject | Verb | Short |\n|---------|------|-------|\n| I | am | I\'m |\n| You | are | You\'re |\n| He/She/It | is | He\'s |\n| We/They | are | We\'re |',
              examples: ['I am happy.', 'You are kind.', 'She is a teacher.', 'We are friends.'],
              exercises: [
                { type: 'fill_blank', question: 'She ___ a doctor.', answer: 'is', hint: 'He/She/It + ?' },
                { type: 'multiple_choice', question: 'I ___ a student.', options: ['is', 'are', 'am', 'be'], answer: 2 },
                { type: 'fill_blank', question: 'They ___ my friends.', answer: 'are', hint: 'Plural subjects' },
                { type: 'reorder', question: 'Reorder: [teacher / a / She / is]', words: ['teacher', 'a', 'She', 'is'], answer: 'She is a teacher' },
                { type: 'multiple_choice', question: '"We are" shortened is:', options: ["We're", "We'd", "We've", "We'll"], answer: 0 },
                { type: 'translate', question: 'Translate: "هو طالب"', answer: 'He is a student', hint: 'He is a...' },
              ],
            },
          },
          {
            id: 'b2l2', title: 'Present Simple', type: 'grammar', xp: 20,
            content: {
              intro: 'Talk about habits and routines!',
              explanation: '📝 **Present Simple:**\n\n✅ **Positive:** I/You/We/They + base verb · He/She/It + verb-s\n• *I work.* · *She work**s**.*\n\n❌ **Negative:** don\'t / doesn\'t + base verb\n• *I **don\'t** like coffee.* · *He **doesn\'t** like tea.*\n\n❓ **Question:** Do/Does + subject + base verb\n• *Do you like music?* · *Does she work here?*',
              examples: ['I eat breakfast every day.', 'She works in a hospital.', 'They don\'t watch TV.'],
              exercises: [
                { type: 'fill_blank', question: 'She ___ (like) coffee.', answer: 'likes', hint: 'He/She/It needs -s' },
                { type: 'multiple_choice', question: 'I ___ like spiders.', options: ["don't", "doesn't", "isn't", "aren't"], answer: 0 },
                { type: 'reorder', question: 'Reorder: [like / Do / pizza / you]', words: ['like', 'Do', 'pizza', 'you'], answer: 'Do you like pizza' },
                { type: 'fill_blank', question: 'He ___ like vegetables.', answer: "doesn't", hint: 'He/She/It negative' },
                { type: 'multiple_choice', question: 'Which is correct?', options: ['She like cats.', 'She likes cats.', 'She liking cats.', 'She liked cats.'], answer: 1 },
                { type: 'translate', question: 'Translate: "هي لا تشرب قهوة"', answer: "She doesn't drink coffee", hint: "She doesn't..." },
              ],
            },
          },
          {
            id: 'b2l3', title: 'Family Members', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn words for family members!',
              vocabulary: [
                { word: 'Mother', translation: 'أم', example: 'My mother is a teacher.' },
                { word: 'Father', translation: 'أب', example: 'My father works in a hospital.' },
                { word: 'Brother', translation: 'أخ', example: 'I have two brothers.' },
                { word: 'Sister', translation: 'أخت', example: 'My sister is funny.' },
                { word: 'Grandmother', translation: 'جدة', example: 'My grandmother makes great food.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is "أخت" in English?', options: ['Brother', 'Mother', 'Sister', 'Daughter'], answer: 2 },
                { type: 'fill_blank', question: 'My ___ is a teacher.', answer: 'mother', hint: 'Female parent' },
                { type: 'match', question: 'Match family words', pairs: [['Mother','أم'],['Father','أب'],['Brother','أخ'],['Sister','أخت']] },
                { type: 'multiple_choice', question: '"Grandfather" means:', options: ['جدة', 'جد', 'أب', 'عم'], answer: 1 },
                { type: 'translate', question: 'Translate: "أخي طويل"', answer: 'My brother is tall', hint: 'My brother is...' },
              ],
            },
          },
          {
            id: 'b2l4', title: 'Days & Months', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn the days of the week and months!',
              vocabulary: [
                { word: 'Monday', translation: 'الاثنين', example: 'School starts on Monday.' },
                { word: 'Friday', translation: 'الجمعة', example: 'Friday is a holiday.' },
                { word: 'January', translation: 'يناير', example: 'January is the first month.' },
                { word: 'December', translation: 'ديسمبر', example: 'December is the last month.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What day comes after Monday?', options: ['Sunday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 2 },
                { type: 'fill_blank', question: '___ is the first month of the year.', answer: 'January', hint: 'Starts with J' },
                { type: 'multiple_choice', question: 'What is "الجمعة" in English?', options: ['Thursday', 'Saturday', 'Sunday', 'Friday'], answer: 3 },
                { type: 'reorder', question: 'Put in order:', words: ['Monday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 'Monday Tuesday Wednesday Thursday' },
                { type: 'translate', question: 'Translate: "اليوم هو الجمعة"', answer: 'Today is Friday', hint: 'Today is...' },
              ],
            },
          },
          {
            id: 'b2l5', title: 'Food & Drinks', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn common food and drink words!',
              vocabulary: [
                { word: 'Water', translation: 'ماء', example: 'I drink water every day.' },
                { word: 'Bread', translation: 'خبز', example: 'I eat bread for breakfast.' },
                { word: 'Rice', translation: 'أرز', example: 'Rice is popular in Egypt.' },
                { word: 'Coffee', translation: 'قهوة', example: 'I drink coffee in the morning.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What does "خبز" mean?', options: ['Rice', 'Bread', 'Milk', 'Tea'], answer: 1 },
                { type: 'fill_blank', question: 'I drink ___ every day.', answer: 'water', hint: 'Essential liquid' },
                { type: 'match', question: 'Match food items', pairs: [['Water','ماء'],['Rice','أرز'],['Coffee','قهوة'],['Bread','خبز']] },
                { type: 'multiple_choice', question: '"Coffee" means:', options: ['شاي', 'عصير', 'قهوة', 'ماء'], answer: 2 },
                { type: 'translate', question: 'Translate: "أنا أحب الأرز"', answer: 'I like rice', hint: 'I like...' },
              ],
            },
          },
          {
            id: 'b2l6', title: 'My Home', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn words for rooms and things in your home!',
              vocabulary: [
                { word: 'Bedroom', translation: 'غرفة النوم', example: 'I sleep in my bedroom.' },
                { word: 'Kitchen', translation: 'مطبخ', example: 'We cook in the kitchen.' },
                { word: 'Living room', translation: 'غرفة المعيشة', example: 'We watch TV in the living room.' },
                { word: 'Bathroom', translation: 'حمام', example: 'The bathroom is upstairs.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Where do you cook food?', options: ['Bedroom', 'Bathroom', 'Kitchen', 'Living room'], answer: 2 },
                { type: 'fill_blank', question: 'We sleep in the ___.', answer: 'bedroom', hint: 'Room for sleeping' },
                { type: 'multiple_choice', question: '"نافذة" means:', options: ['Door', 'Window', 'Table', 'Chair'], answer: 1 },
                { type: 'match', question: 'Match rooms', pairs: [['Bedroom','غرفة النوم'],['Kitchen','مطبخ'],['Bathroom','حمام'],['Living room','غرفة المعيشة']] },
                { type: 'translate', question: 'Translate: "المطبخ كبير"', answer: 'The kitchen is big', hint: 'The kitchen is...' },
              ],
            },
          },
        ],
      },
      {
        id: 'b3', title: 'Reading & Stories', icon: '📖',
        lessons: [
          {
            id: 'b3l1', title: 'My Family (Story)', type: 'story', xp: 20,
            content: {
              intro: 'Read a short story and answer questions!',
              text: `**My Family**\n\nHello! My name is Ahmed. I am from Egypt. I live in Cairo.\n\nI have a small family. My father\'s name is Hassan. He is a doctor. My mother\'s name is Fatima. She is a teacher.\n\nI have one brother. His name is Ali. He is 15 years old. I also have one sister. Her name is Sara. She is 10 years old.\n\nI love my family very much!`,
              exercises: [
                { type: 'multiple_choice', question: 'Where is Ahmed from?', options: ['Jordan', 'Egypt', 'Saudi Arabia', 'Morocco'], answer: 1 },
                { type: 'multiple_choice', question: 'What is Ahmed\'s father\'s job?', options: ['Teacher', 'Engineer', 'Doctor', 'Policeman'], answer: 2 },
                { type: 'fill_blank', question: 'Ahmed\'s mother is a ___.', answer: 'teacher', hint: 'Look in the text' },
                { type: 'multiple_choice', question: 'How old is Sara?', options: ['12', '15', '8', '10'], answer: 3 },
                { type: 'multiple_choice', question: 'How many siblings does Ahmed have?', options: ['One', 'Three', 'Two', 'Four'], answer: 2 },
              ],
            },
          },
          {
            id: 'b3l2', title: 'Weather & Seasons', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Talk about the weather and seasons!',
              vocabulary: [
                { word: 'Hot', translation: 'حار', example: 'It is very hot in summer.' },
                { word: 'Cold', translation: 'بارد', example: 'It is cold in winter.' },
                { word: 'Sunny', translation: 'مشمس', example: 'It is a sunny day today.' },
                { word: 'Rainy', translation: 'ممطر', example: 'Take an umbrella — it is rainy.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is the weather when you need an umbrella?', options: ['Sunny', 'Windy', 'Rainy', 'Hot'], answer: 2 },
                { type: 'fill_blank', question: 'It is very ___ in summer.', answer: 'hot', hint: 'Opposite of cold' },
                { type: 'match', question: 'Match weather words', pairs: [['Hot','حار'],['Cold','بارد'],['Sunny','مشمس'],['Rainy','ممطر']] },
                { type: 'translate', question: 'Translate: "الطقس بارد اليوم"', answer: 'The weather is cold today', hint: 'The weather is...' },
              ],
            },
          },
          {
            id: 'b3l3', title: 'At the Market (Story)', type: 'story', xp: 20,
            content: {
              intro: 'Read about shopping at a market!',
              text: `**At the Market**\n\nEvery Saturday, I go to the market with my mother. The market is near our house.\n\nWe buy many things. We buy vegetables like tomatoes, onions, and potatoes. We also buy fruits like apples, oranges, and bananas.\n\nMy mother always asks: "How much is this?" The sellers are friendly and helpful.\n\nAfter shopping, we go home and cook a delicious lunch. I love Saturdays!`,
              exercises: [
                { type: 'multiple_choice', question: 'When do they go to the market?', options: ['Friday', 'Sunday', 'Saturday', 'Monday'], answer: 2 },
                { type: 'multiple_choice', question: 'What does the mother ask sellers?', options: ['What is this?', 'How much is this?', 'Where is this?', 'Is this good?'], answer: 1 },
                { type: 'fill_blank', question: 'The market is ___ their house.', answer: 'near', hint: 'Not far, but...' },
                { type: 'multiple_choice', question: 'What do they do after shopping?', options: ['Sleep', 'Watch TV', 'Cook lunch', 'Play football'], answer: 2 },
              ],
            },
          },
          {
            id: 'b3l4', title: 'Question Words', type: 'grammar', xp: 20,
            content: {
              intro: 'Learn how to ask questions in English!',
              explanation: '📝 **Question Words:**\n\n• **What** — ماذا/ما: *What is your name?*\n• **Where** — أين: *Where do you live?*\n• **When** — متى: *When is your birthday?*\n• **Who** — من: *Who is your teacher?*\n• **Why** — لماذا: *Why are you late?*\n• **How** — كيف: *How are you?*\n• **How much** — كم (لا يعد): *How much does it cost?*\n• **How many** — كم (يعد): *How many books do you have?*',
              exercises: [
                { type: 'multiple_choice', question: '___ do you live? (أين)', options: ['What', 'When', 'Where', 'Who'], answer: 2 },
                { type: 'fill_blank', question: '___ is your name?', answer: 'What', hint: 'Asking for information' },
                { type: 'multiple_choice', question: '"Why are you late?" asks about:', options: ['Time', 'Place', 'Reason', 'Person'], answer: 2 },
                { type: 'fill_blank', question: '___ many students are in the class?', answer: 'How', hint: 'How ___ many' },
                { type: 'translate', question: 'Translate: "كم عمرك؟"', answer: 'How old are you?', hint: 'How old are you?' },
              ],
            },
          },
          {
            id: 'b3l5', title: 'Writing: About Me', type: 'writing', xp: 20,
            content: {
              intro: 'Practice writing about yourself!',
              explanation: '✍️ **About Me — Useful phrases:**\n\n• My name is...\n• I am ... years old.\n• I live in...\n• I am a student / teacher\n• I like / I don\'t like...\n• Every day, I...\n• My favourite... is...',
              sampleAnswer: 'My name is Layla. I am 22 years old. I am from Egypt and I live in Cairo. I am a university student. I like reading books and watching movies. Every day, I study English for one hour.',
              exercises: [
                { type: 'fill_blank', question: 'My name ___ Sara.', answer: 'is', hint: 'Verb to be' },
                { type: 'multiple_choice', question: 'Which is correct?', options: ['I am from of Egypt.', 'I am from Egypt.', 'I from Egypt am.', 'From Egypt I am.'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [student / a / I / am]', words: ['student', 'a', 'I', 'am'], answer: 'I am a student' },
                { type: 'translate', question: 'Translate: "أنا أحب العربي"', answer: 'I like Arabic', hint: 'I like...' },
              ],
            },
          },
          {
            id: 'b3l6', title: 'Speaking: Introduce Yourself', type: 'speaking', xp: 20,
            content: {
              intro: 'Practice speaking about yourself!',
              explanation: '🗣️ **Introduction script:**\n\n*"Hello! My name is [name]. I am [age] years old. I am from [country] and I live in [city]. I am a [job/student]. I like [hobby]. Nice to meet you!"*\n\n💡 **Tips:**\n• Speak slowly and clearly\n• Don\'t worry about mistakes\n• Practice in front of a mirror',
              phrases: ['Hello, my name is...', 'I am ... years old.', 'I am from...', 'I like...', 'Nice to meet you!'],
              exercises: [
                { type: 'multiple_choice', question: 'What do you say at the END of an introduction?', options: ['My name is...', 'I am from...', 'Nice to meet you!', 'I like...'], answer: 2 },
                { type: 'reorder', question: 'Order the introduction:', words: ['meet', 'Nice', 'to', 'you'], answer: 'Nice to meet you' },
                { type: 'fill_blank', question: 'Hello! My ___ is Ahmed.', answer: 'name', hint: 'What we call ourselves' },
                { type: 'translate', question: 'Translate: "يسعدني لقاؤك"', answer: 'Nice to meet you', hint: 'Nice to meet you' },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'intermediate',
    title: 'Intermediate English',
    level: 'B1–B2',
    description: 'Build on your foundation with complex grammar, expanded vocabulary, and real-world communication.',
    color: '#3B82F6',
    icon: '📘',
    xpPerLesson: 30,
    units: [
      {
        id: 'i1', title: 'Perfect Tenses', icon: '⏰',
        lessons: [
          {
            id: 'i1l1', title: 'Present Perfect', type: 'grammar', xp: 30,
            content: {
              intro: 'Master the present perfect tense!',
              explanation: '📝 **Present Perfect:** have/has + past participle\n\n✅ **Uses:**\n1. Experience: *I have visited Paris.*\n2. Recent action: *She has just arrived.*\n3. Unfinished time: *He has worked here for 5 years.*\n\n⚠️ **Irregular verbs:** go→gone, eat→eaten, see→seen',
              examples: ['I have never eaten sushi.', 'She has just called me.', 'Have you ever been to London?'],
              exercises: [
                { type: 'fill_blank', question: 'I ___ (never/visit) Japan.', answer: 'have never visited', hint: 'have + never + past participle' },
                { type: 'multiple_choice', question: 'She ___ just finished her homework.', options: ['have', 'has', 'had', 'is'], answer: 1 },
                { type: 'fill_blank', question: 'He ___ (work) here since 2018.', answer: 'has worked', hint: 'has + past participle' },
                { type: 'multiple_choice', question: 'Which uses Present Perfect correctly?', options: ['I have went yesterday.', 'I have gone to Paris last year.', 'I have been to Paris.', 'I have go to Paris.'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [ever / you / Have / sushi / eaten]', words: ['ever', 'you', 'Have', 'sushi', 'eaten'], answer: 'Have you ever eaten sushi' },
                { type: 'translate', question: 'Translate: "لقد زرت لندن من قبل"', answer: 'I have visited London before', hint: 'I have visited...' },
              ],
            },
          },
          {
            id: 'i1l2', title: 'Conditionals 1 & 2', type: 'grammar', xp: 30,
            content: {
              intro: 'Master first and second conditionals!',
              explanation: '📝 **Conditionals:**\n\n**1st** (real future): If + present, will + verb\n• *If it rains, I will stay home.*\n\n**2nd** (unreal): If + past, would + verb\n• *If I were rich, I would travel everywhere.*\n\n⚠️ Always use **"were"** in 2nd conditional!',
              examples: ['If I study hard, I will pass.', 'If I were a bird, I would fly everywhere.'],
              exercises: [
                { type: 'multiple_choice', question: 'If it ___ tomorrow, we will cancel.', options: ['rained', 'rains', 'will rain', 'rain'], answer: 1 },
                { type: 'fill_blank', question: 'If I ___ you, I would study more.', answer: 'were', hint: 'Always "were" in 2nd conditional' },
                { type: 'multiple_choice', question: 'If she had money, she ___ a car.', options: ['will buy', 'would buy', 'buys', 'bought'], answer: 1 },
                { type: 'translate', question: 'Translate: "لو كنت أنا، سأدرس أكثر"', answer: 'If I were you I would study more', hint: 'If I were you...' },
              ],
            },
          },
          {
            id: 'i1l3', title: 'Passive Voice', type: 'grammar', xp: 30,
            content: {
              intro: 'Master the passive voice!',
              explanation: '📝 **Passive Voice:**\n\nActive → Passive\n• Present: is/are + past participle\n• Past: was/were + past participle\n• Future: will be + past participle\n\n*The chef cooked the meal.* → *The meal was cooked.*',
              exercises: [
                { type: 'fill_blank', question: 'The letter ___ (write) by Ahmed.', answer: 'was written', hint: 'was/were + past participle' },
                { type: 'multiple_choice', question: 'Passive: "They build houses here." →', options: ['Houses build here.', 'Houses are built here.', 'Houses were built here.', 'Houses being built here.'], answer: 1 },
                { type: 'fill_blank', question: 'The results ___ (record) yesterday.', answer: 'were recorded', hint: 'were + past participle' },
                { type: 'translate', question: 'Translate: "هذا الكتاب كُتب عام 1990"', answer: 'This book was written in 1990', hint: 'was written in...' },
              ],
            },
          },
          {
            id: 'i1l4', title: 'Business Vocabulary', type: 'vocabulary', xp: 30,
            content: {
              intro: 'Essential vocabulary for the workplace!',
              vocabulary: [
                { word: 'Deadline', translation: 'موعد نهائي', example: 'The deadline is Friday at 5 PM.' },
                { word: 'Meeting', translation: 'اجتماع', example: 'We have a meeting at 10 AM.' },
                { word: 'Report', translation: 'تقرير', example: 'Please submit the report by Monday.' },
                { word: 'Strategy', translation: 'استراتيجية', example: 'What is our strategy for next year?' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Deadline" means:', options: ['بداية العمل', 'موعد نهائي', 'إجازة', 'ترقية'], answer: 1 },
                { type: 'fill_blank', question: 'I have a ___ with my manager at 3 PM.', answer: 'meeting', hint: 'When people gather' },
                { type: 'match', question: 'Match business words', pairs: [['Deadline','موعد نهائي'],['Meeting','اجتماع'],['Report','تقرير'],['Strategy','استراتيجية']] },
                { type: 'translate', question: 'Translate: "اجتماعنا يوم الاثنين"', answer: 'Our meeting is on Monday', hint: 'Our meeting is...' },
              ],
            },
          },
          {
            id: 'i1l5', title: 'Reading: Technology Article', type: 'reading', xp: 30,
            content: {
              intro: 'Read a news article and practice comprehension!',
              text: `**AI Transforms Language Learning**\n\nArtificial intelligence is changing how people learn foreign languages. New apps use AI to personalise lessons, correct pronunciation, and provide instant feedback.\n\nDr. Sarah Johnson says: "AI can analyse a learner\'s weaknesses and create a unique study plan. This was impossible just ten years ago."\n\nHowever, experts warn that technology cannot replace human interaction. "You still need to practise with real people," says language coach Miguel Torres.\n\nLanguage learning apps have seen a 300% increase in users since 2020.`,
              exercises: [
                { type: 'multiple_choice', question: 'What is the main topic?', options: ['Social media', 'AI and language learning', 'University education', 'Computer programming'], answer: 1 },
                { type: 'fill_blank', question: 'Language learning apps have seen a ___% increase.', answer: '300', hint: 'Look for the percentage' },
                { type: 'multiple_choice', question: 'What does Miguel Torres say AI CANNOT replace?', options: ['Grammar lessons', 'Vocabulary practice', 'Human interaction', 'Writing exercises'], answer: 2 },
              ],
            },
          },
          {
            id: 'i1l6', title: 'Writing: Opinion Essay', type: 'writing', xp: 30,
            content: {
              intro: 'Write a structured opinion essay!',
              explanation: '✍️ **Opinion Essay Structure:**\n\n**Introduction:** Background + thesis\n**Body 1:** First reason + example\n**Body 2:** Second reason + example\n**Conclusion:** Restate + summary\n\n**Useful phrases:**\n• *In my opinion,...*\n• *Furthermore,...*\n• *In conclusion,...*',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase introduces an opinion?', options: ['In contrast,', 'In my opinion,', 'For example,', 'As a result,'], answer: 1 },
                { type: 'fill_blank', question: '___ of all, technology has changed education.', answer: 'First', hint: 'First/Second...' },
                { type: 'multiple_choice', question: 'Which word ADDS another point?', options: ['However', 'In contrast', 'Furthermore', 'Although'], answer: 2 },
                { type: 'translate', question: 'Translate: "في رأيي، التعليم مهم جداً"', answer: 'In my opinion education is very important', hint: 'In my opinion...' },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'ielts',
    title: 'IELTS Preparation',
    level: 'B2–C1',
    description: 'Comprehensive IELTS preparation covering all four skills with test strategies.',
    color: '#8B5CF6',
    icon: '🎓',
    xpPerLesson: 50,
    units: [
      {
        id: 'ie1', title: 'IELTS Writing', icon: '📊',
        lessons: [
          {
            id: 'ie1l1', title: 'Task 1: Describing Charts', type: 'writing', xp: 50,
            content: {
              intro: 'Learn how to describe graphs and charts for IELTS Task 1!',
              explanation: '📊 **IELTS Writing Task 1:**\n\n**Structure (min 150 words):**\n1. Introduction — paraphrase the title\n2. Overview — 2 main trends (NO data)\n3. Details — specific data\n\n**Language:**\n📈 *Rise:* increase, grow, climb, soar\n📉 *Fall:* decrease, drop, decline, plunge\n\n• *reached a peak of...*\n• *accounted for...*\n• *increased by 20%* (change) vs *increased to 40%* (new level)',
              exercises: [
                { type: 'multiple_choice', question: 'The overview should contain:', options: ['All specific data', 'Main overall trends (no data)', 'Your opinion', 'A conclusion'], answer: 1 },
                { type: 'fill_blank', question: 'The graph shows a sharp ___ in sales. (decrease)', answer: 'decline', hint: 'A synonym for decrease' },
                { type: 'multiple_choice', question: 'Minimum word count for Task 1:', options: ['100', '120', '150', '200'], answer: 2 },
                { type: 'translate', question: 'Translate: "ارتفعت المبيعات بنسبة 20%"', answer: 'Sales increased by 20%', hint: 'Sales increased by...' },
              ],
            },
          },
          {
            id: 'ie1l2', title: 'Task 2: Opinion Essays', type: 'writing', xp: 50,
            content: {
              intro: 'Write high-scoring IELTS Task 2 essays!',
              explanation: '✍️ **IELTS Task 2 (250+ words):**\n\n**Introduction:** Background + thesis\n**Body 1:** Primary argument + evidence\n**Body 2:** Secondary argument + evidence\n**Conclusion:** Restate + implications\n\n**Scoring (25% each):**\n• Task Achievement · Coherence & Cohesion\n• Lexical Resource · Grammatical Range',
              exercises: [
                { type: 'multiple_choice', question: 'IELTS Task 2 minimum word count:', options: ['200', '250', '300', '350'], answer: 1 },
                { type: 'fill_blank', question: 'In ___, it is clear that technology benefits education.', answer: 'conclusion', hint: 'Last paragraph starter' },
                { type: 'multiple_choice', question: 'Which introduces a second argument?', options: ['In contrast', 'Furthermore', 'On the other hand', 'However'], answer: 1 },
              ],
            },
          },
          {
            id: 'ie1l3', title: 'IELTS Speaking Part 1', type: 'speaking', xp: 50,
            content: {
              intro: 'Ace IELTS Speaking Part 1!',
              explanation: '🎤 **IELTS Speaking Part 1 (4-5 minutes):**\n\nPersonal questions about: home, work/study, hobbies, daily routine.\n\n✅ **AREA technique:**\n• **A**nswer · **R**eason · **E**xample · **A**lternative\n\n❌ Avoid one-word answers!\n✅ *"Yes, I love cooking because it relaxes me. For example, I try new recipes every weekend."*',
              exercises: [
                { type: 'multiple_choice', question: 'Part 1 lasts approximately:', options: ['1-2 minutes', '4-5 minutes', '10 minutes', '15 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'Best answer to "Do you like music?":', options: ['Yes.', 'Yes, I do.', 'Yes, I love music because it helps me relax. For example...', 'Music is good.'], answer: 2 },
                { type: 'fill_blank', question: 'AREA: Answer, Reason, Example, and ___.', answer: 'Alternative', hint: 'The fourth element' },
              ],
            },
          },
          {
            id: 'ie1l4', title: 'Advanced IELTS Vocabulary', type: 'vocabulary', xp: 50,
            content: {
              intro: 'Learn advanced vocabulary for a high IELTS band score!',
              vocabulary: [
                { word: 'Paramount', translation: 'بالغ الأهمية', example: 'Education is of paramount importance.' },
                { word: 'Unprecedented', translation: 'غير مسبوق', example: 'The pandemic caused unprecedented disruption.' },
                { word: 'Consequently', translation: 'وبالتالي', example: 'The company failed. Consequently, it closed.' },
                { word: 'Nevertheless', translation: 'ومع ذلك', example: 'It was difficult. Nevertheless, she succeeded.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Paramount" means:', options: ['صغير', 'بالغ الأهمية', 'غير متأكد', 'نادر'], answer: 1 },
                { type: 'fill_blank', question: 'The flood caused ___ damage. (غير مسبوق)', answer: 'unprecedented', hint: 'Never seen before' },
                { type: 'match', question: 'Match advanced words', pairs: [['Paramount','بالغ الأهمية'],['Unprecedented','غير مسبوق'],['Consequently','وبالتالي'],['Nevertheless','ومع ذلك']] },
                { type: 'translate', question: 'Translate: "وبالتالي، يجب علينا التصرف الآن"', answer: 'Consequently we must act now', hint: 'Consequently...' },
              ],
            },
          },
          {
            id: 'ie1l5', title: 'Reading: Skimming & Scanning', type: 'reading', xp: 50,
            content: {
              intro: 'Master key IELTS reading strategies!',
              explanation: '📖 **Reading Strategies:**\n\n🔍 **Skimming** — get the main idea quickly\n• Read title, headings, first/last sentences\n• 1-2 minutes for a full article\n\n🎯 **Scanning** — find specific information\n• Look for keywords, numbers, names\n• Don\'t read every word!',
              exercises: [
                { type: 'multiple_choice', question: 'Scanning helps you find:', options: ['The main idea', 'Specific details', 'The author\'s opinion', 'The text structure'], answer: 1 },
                { type: 'multiple_choice', question: 'To find a date in an article, use:', options: ['Skimming', 'Scanning', 'Both equally', 'Neither'], answer: 1 },
                { type: 'fill_blank', question: 'To get the main idea quickly, use ___.', answer: 'skimming', hint: 'Fast reading technique' },
              ],
            },
          },
          {
            id: 'ie1l6', title: 'IELTS Listening Strategies', type: 'listening', xp: 50,
            content: {
              intro: 'Master IELTS listening strategies!',
              explanation: '🎧 **IELTS Listening Tips:**\n\n1. **Before listening:** Read questions, predict answer types\n2. **While listening:** Take notes, focus on keywords\n3. **After listening:** Check spelling carefully\n\n**Key rules:**\n• Answers come in ORDER of questions\n• Spelling mistakes = WRONG\n• Listen for paraphrasing (different words, same meaning)\n\n**Accents:** British, American, Australian — prepare for all!',
              exercises: [
                { type: 'multiple_choice', question: 'In IELTS listening, answers appear:', options: ['Randomly', 'In reverse', 'In question order', 'All at the end'], answer: 2 },
                { type: 'multiple_choice', question: 'When should you read the questions?', options: ['After listening', 'While listening', 'Before listening', 'It doesn\'t matter'], answer: 2 },
                { type: 'fill_blank', question: 'Spelling mistakes in answers are counted as ___.', answer: 'wrong', hint: 'Incorrect' },
              ],
            },
          },
        ],
      },
    ],
  },
]

// ─── Merge all courses ─────────────────────────────────────────────────────
export const COURSES = [...ORIGINAL_COURSES, ...NEW_COURSES]

// ─── Helper functions ──────────────────────────────────────────────────────
export function getCourseById(id) {
  return COURSES.find(c => c.id === id)
}

export function getAllLessons(courseId) {
  const course = getCourseById(courseId)
  if (!course) return []
  return course.units.flatMap(u =>
    u.lessons.map(l => ({ ...l, unitId: u.id, unitTitle: u.title, unitIcon: u.icon }))
  )
}

export function getProgressKey(courseId) {
  return `lb_progress_${courseId}`
}

export function loadProgress(courseId) {
  try {
    const raw = localStorage.getItem(getProgressKey(courseId))
    return raw ? JSON.parse(raw) : { completedLessons: [], xp: 0, lastActivity: null }
  } catch { return { completedLessons: [], xp: 0, lastActivity: null } }
}

export function saveProgress(courseId, progress) {
  localStorage.setItem(getProgressKey(courseId), JSON.stringify({
    ...progress,
    lastActivity: new Date().toISOString()
  }))
}

export function getTotalLessons(courseId) {
  const course = getCourseById(courseId)
  if (!course) return 0
  return course.units.reduce((a, u) => a + u.lessons.length, 0)
}

export function getCompletionPercent(courseId) {
  const total = getTotalLessons(courseId)
  const prog  = loadProgress(courseId)
  if (total === 0) return 0
  return Math.round(((prog.completedLessons?.length || 0) / total) * 100)
}

export function isLessonUnlocked(courseId, unitIdx, lessonIdx) {
  const course = getCourseById(courseId)
  if (!course) return false
  const prog = loadProgress(courseId)
  if (unitIdx === 0 && lessonIdx === 0) return true
  for (let ui = 0; ui < unitIdx; ui++) {
    for (const l of course.units[ui].lessons) {
      if (!prog.completedLessons?.includes(l.id)) return false
    }
  }
  for (let li = 0; li < lessonIdx; li++) {
    if (!prog.completedLessons?.includes(course.units[unitIdx].lessons[li].id)) return false
  }
  return true
}