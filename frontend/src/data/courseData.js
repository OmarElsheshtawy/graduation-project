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
                { word: 'Good night', translation: 'تصبح على خير', example: 'Good night! Sleep well.' },
                { word: 'Take care', translation: 'اعتنِ بنفسك', example: 'Bye! Take care.' },
                { word: 'Have a nice day', translation: 'يوم سعيد', example: 'Have a nice day at school!' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How do you greet someone in the morning?', options: ['Good evening', 'Good morning', 'Goodbye', 'Good night'], answer: 1 },
                { type: 'multiple_choice', question: 'Which word means "مرحبا"?', options: ['Goodbye', 'Hello', 'Sorry', 'Please'], answer: 1 },
                { type: 'fill_blank', question: 'Complete: "___ morning! How are you?"', answer: 'Good', hint: 'It starts with G' },
                { type: 'match', question: 'Match the greetings', pairs: [['Hello','مرحبا'],['Goodbye','وداعاً'],['Good morning','صباح الخير'],['See you later','أراك لاحقاً']] },
                { type: 'reorder', question: 'Put the words in order:', words: ['My', 'name', 'is', 'Ahmed'], answer: 'My name is Ahmed' },
                { type: 'multiple_choice', question: 'What do you say before going to sleep?', options: ['Good morning', 'Good evening', 'Good night', 'Good afternoon'], answer: 2 },
                { type: 'fill_blank', question: '"___ care!" — said when saying goodbye.', answer: 'Take', hint: 'Starts with T' },
                { type: 'translate', question: 'Translate: "يوم سعيد!"', answer: 'Have a nice day!', hint: 'Have a...' },
              ],
              key_points: [
                'Use **Hello** or **Hi** for informal greetings with friends',
                'Use **Good morning / afternoon / evening** for more formal situations',
                '**Good night** is only used when someone is going to sleep — not as a greeting',
              ],
              tips: [
                'Smile when you greet someone — it makes communication more friendly and natural!',
                'Vary your greetings to avoid sounding repetitive. Try "Hi", "Hey", or "How\'s it going?"',
              ],
              fun_fact: 'The word "hello" only became popular after the invention of the telephone in 1876 — before that, people said "ahoy" to answer calls!',
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
                { type: 'fill_blank', question: 'I ___ a student. (use the correct form)', answer: 'am', hint: 'First person singular of "to be"' },
                { type: 'multiple_choice', question: 'Which sentence is correct?', options: ['My name Ahmed.', 'Name my is Ahmed.', 'My name is Ahmed.', 'Is my name Ahmed.'], answer: 2 },
              ],
              key_points: [
                'Use **My name is** to state your name formally, or **I\'m** for a casual introduction',
                '**I am** contracts to **I\'m** in everyday speech — both are correct',
                'Always say **Nice to meet you** when introduced to someone new',
              ],
              common_mistakes: [
                { wrong: 'My name Ahmed.', correct: 'My name is Ahmed.', explanation: 'You must include the verb "is" — never skip it' },
                { wrong: 'I am name Sara.', correct: 'My name is Sara.', explanation: 'Use "My name is", not "I am name"' },
              ],
              tips: [
                'Practice contractions out loud: "I\'m Ahmed" sounds more natural than "I am Ahmed" in conversation.',
                'After "Nice to meet you," the other person usually replies "Nice to meet you too!" — learn both sides of the exchange.',
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
                { word: 'Country', translation: 'دولة / بلد', example: 'Egypt is a country in Africa.' },
                { word: 'City', translation: 'مدينة', example: 'Cairo is a big city.' },
                { word: 'Capital', translation: 'عاصمة', example: 'The capital of Egypt is Cairo.' },
                { word: 'Nationality', translation: 'جنسية', example: 'My nationality is Egyptian.' },
                { word: 'Language', translation: 'لغة', example: 'I speak the Arabic language.' },
                { word: 'I am originally from', translation: 'أنا في الأصل من', example: 'I am originally from Alexandria.' },
                { word: 'Hometown', translation: 'مسقط الرأس / المدينة الأصلية', example: 'My hometown is Luxor.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How do you ask where someone is from?', options: ['What is your name?', 'Where are you from?', 'How old are you?', 'Do you speak English?'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ from Egypt.', answer: 'am', hint: 'Form of "to be"' },
                { type: 'translate', question: 'Translate: "أنا من مصر"', answer: 'I am from Egypt', hint: 'Start with "I am from"' },
                { type: 'reorder', question: 'Reorder: [from / you / Where / are]', words: ['from', 'you', 'Where', 'are'], answer: 'Where are you from' },
                { type: 'multiple_choice', question: 'What does "city" mean?', options: ['دولة', 'قارة', 'مدينة', 'قرية'], answer: 2 },
                { type: 'fill_blank', question: 'The ___ of Egypt is Cairo.', answer: 'capital', hint: 'The main government city' },
                { type: 'multiple_choice', question: 'What is "جنسية" in English?', options: ['Language', 'City', 'Nationality', 'Country'], answer: 2 },
                { type: 'translate', question: 'Translate: "مدينتي الأصلية هي الإسكندرية"', answer: 'My hometown is Alexandria', hint: 'My hometown is...' },
              ],
              key_points: [
                'Use **I am from** + country to say your origin: *I am from Egypt.*',
                'Use **I live in** + city to say where you currently stay: *I live in Cairo.*',
                '**Nationality** describes what you are — Egyptian, French, Brazilian — usually ends in "-an" or "-ian"',
              ],
              tips: [
                'Learn the names of countries AND their nationalities together — it saves time later!',
                'When meeting someone new, "Where are you from?" is a common, friendly question — don\'t be shy to ask.',
              ],
              fun_fact: 'There are 195 countries in the world today — and English is spoken as an official language in over 50 of them!',
            },
          },
          {
            id: 'b1l4', title: 'Numbers 1–20', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Master the numbers 1 to 20!',
              vocabulary: [
                { word: 'One (1)', translation: 'واحد', example: 'I have one brother.' },
                { word: 'Two (2)', translation: 'اثنان', example: 'I have two eyes.' },
                { word: 'Three (3)', translation: 'ثلاثة', example: 'There are three cats.' },
                { word: 'Five (5)', translation: 'خمسة', example: 'Five fingers on each hand.' },
                { word: 'Seven (7)', translation: 'سبعة', example: 'There are seven days in a week.' },
                { word: 'Ten (10)', translation: 'عشرة', example: 'Ten students in the class.' },
                { word: 'Eleven (11)', translation: 'أحد عشر', example: 'Eleven players are on the team.' },
                { word: 'Fifteen (15)', translation: 'خمسة عشر', example: 'I am fifteen years old.' },
                { word: 'Eighteen (18)', translation: 'ثمانية عشر', example: 'She is eighteen years old.' },
                { word: 'Twenty (20)', translation: 'عشرون', example: 'Twenty days left.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is "خمسة" in English?', options: ['Four', 'Six', 'Five', 'Seven'], answer: 2 },
                { type: 'multiple_choice', question: 'How do you write 15 in words?', options: ['Fifty', 'Fifteen', 'Twelve', 'Twenty'], answer: 1 },
                { type: 'fill_blank', question: 'One, two, ___, four, five', answer: 'three', hint: 'Between 2 and 4' },
                { type: 'multiple_choice', question: 'What comes after nineteen?', options: ['Eighteen', 'Twenty-one', 'Twenty', 'Eleven'], answer: 2 },
                { type: 'fill_blank', question: 'I have ___ (10) apples.', answer: 'ten', hint: 'Write the number in words' },
                { type: 'multiple_choice', question: 'How many days are in a week?', options: ['Five', 'Six', 'Seven', 'Eight'], answer: 2 },
                { type: 'fill_blank', question: 'Ten + eight = ___', answer: 'eighteen', hint: 'Write the sum in words' },
                { type: 'translate', question: 'Translate: "أحد عشر لاعباً في الفريق"', answer: 'Eleven players on the team', hint: 'Eleven...' },
              ],
              key_points: [
                'Numbers 1–10 must be memorised individually: one, two, three, four, five, six, seven, eight, nine, ten',
                'Numbers **11–19** follow a pattern: **eleven, twelve**, then thirteen, fourteen... nineteen (add -teen)',
                '**Twenty** is the only two-digit number in this set — learn it separately',
              ],
              tips: [
                'Say the numbers out loud every day — counting objects around you is a great practice habit.',
                'Notice the spelling traps: "thirteen" not "threeteen", "fifteen" not "fiveteen".',
              ],
              fun_fact: 'The number 7 is considered lucky in many cultures, and it is the most common "favourite number" when people are asked worldwide!',
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
                { word: 'Yellow', translation: 'أصفر', example: 'The sun is yellow.' },
                { word: 'White', translation: 'أبيض', example: 'Snow is white.' },
                { word: 'Black', translation: 'أسود', example: 'The night is black.' },
                { word: 'Circle', translation: 'دائرة', example: 'A wheel is a circle.' },
                { word: 'Square', translation: 'مربع', example: 'A box is a square.' },
                { word: 'Triangle', translation: 'مثلث', example: 'A triangle has three sides.' },
                { word: 'Rectangle', translation: 'مستطيل', example: 'A door is a rectangle.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What color is the sky?', options: ['Red', 'Green', 'Blue', 'Yellow'], answer: 2 },
                { type: 'match', question: 'Match colors', pairs: [['Red','أحمر'],['Blue','أزرق'],['Green','أخضر'],['Yellow','أصفر']] },
                { type: 'fill_blank', question: 'The apple is ___.', answer: 'red', hint: 'A warm color' },
                { type: 'multiple_choice', question: 'What shape is a wheel?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 2 },
                { type: 'translate', question: 'Translate: "السماء زرقاء"', answer: 'The sky is blue', hint: 'Use "The sky is"' },
                { type: 'multiple_choice', question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], answer: 1 },
                { type: 'fill_blank', question: 'Snow is ___.', answer: 'white', hint: 'Very light color' },
                { type: 'translate', question: 'Translate: "الباب مستطيل"', answer: 'The door is a rectangle', hint: 'The door is a...' },
              ],
              key_points: [
                'Colors are **adjectives** — they describe nouns: *a red car*, *the blue sky*',
                'Shapes are **nouns** — use "is a": *The wheel is a circle.*',
                'In English, adjectives come **before** the noun: *a green apple* (not *an apple green*)',
              ],
              tips: [
                'Look around your room and name the color of every object you see — this builds vocabulary fast.',
                'Remember shapes by real objects: circle = wheel, square = window, triangle = pizza slice.',
              ],
              fun_fact: 'The color blue did not have a word in many ancient languages — ancient Greek, for example, had no word specifically for "blue"!',
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
                { word: 'Have lunch', translation: 'أتناول الغداء', example: 'I have lunch at 1 PM.' },
                { word: 'Come home', translation: 'أعود للمنزل', example: 'I come home at 4 PM.' },
                { word: 'Do homework', translation: 'أعمل الواجب', example: 'I do homework after school.' },
                { word: 'Have dinner', translation: 'أتناول العشاء', example: 'We have dinner at 8 PM.' },
                { word: 'Watch TV', translation: 'أشاهد التلفزيون', example: 'I watch TV in the evening.' },
                { word: 'Take a shower', translation: 'أستحم', example: 'I take a shower every morning.' },
                { word: 'Go to sleep', translation: 'أذهب للنوم', example: 'I go to sleep at 11 PM.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What do you do first in the morning?', options: ['Have dinner', 'Wake up', 'Go to sleep', 'Have lunch'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ up at 7 AM every day.', answer: 'wake', hint: 'The first thing in the morning' },
                { type: 'reorder', question: 'Reorder: [breakfast / I / at / eat / 8 AM]', words: ['breakfast', 'I', 'at', 'eat', '8 AM'], answer: 'I eat breakfast at 8 AM' },
                { type: 'multiple_choice', question: '"Have dinner" means:', options: ['أتناول الفطور', 'أتناول الغداء', 'أتناول العشاء', 'أشرب القهوة'], answer: 2 },
                { type: 'translate', question: 'Translate: "أذهب للنوم في الساعة 11"', answer: 'I go to sleep at 11', hint: 'I go to sleep at...' },
                { type: 'fill_blank', question: 'I ___ a shower every morning.', answer: 'take', hint: 'take a shower' },
                { type: 'multiple_choice', question: 'What does "Come home" mean?', options: ['أذهب للعمل', 'أعود للمنزل', 'أستيقظ', 'أتناول الفطور'], answer: 1 },
                { type: 'translate', question: 'Translate: "أعمل الواجب بعد المدرسة"', answer: 'I do homework after school', hint: 'I do homework after...' },
              ],
              key_points: [
                'Daily routine verbs use **Present Simple** because they happen regularly: *I wake up*, *She eats breakfast*',
                'Use time words to organise your routine: **in the morning**, **at noon**, **in the evening**, **at night**',
                '**Wake up** and **get up** are similar — wake up = stop sleeping; get up = leave the bed',
              ],
              tips: [
                'Write your own daily routine in English — use "I" and the present simple tense for every activity.',
                'Learn the meals in order: breakfast → lunch → dinner. Each has its own time of day.',
              ],
              fun_fact: 'Studies show that people who follow a consistent morning routine are more productive — and the word "routine" comes from French, meaning "regular path"!',
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
                { type: 'fill_blank', question: 'You ___ very tall.', answer: 'are', hint: '"you" always uses this form' },
                { type: 'multiple_choice', question: 'Which sentence is correct?', options: ['He am tall.', 'He are tall.', 'He is tall.', 'He be tall.'], answer: 2 },
              ],
              key_points: [
                'Use **am** with **I** only: *I am happy.*',
                'Use **is** with he, she, it, and singular nouns: *She is a teacher.*',
                'Use **are** with you, we, they, and plural nouns: *They are students.*',
              ],
              common_mistakes: [
                { wrong: 'She am a teacher.', correct: 'She is a teacher.', explanation: '"am" is only used with "I" — use "is" with she/he/it' },
                { wrong: 'They is my friends.', correct: 'They are my friends.', explanation: 'Use "are" with plural subjects like "they"' },
                { wrong: 'I are tired.', correct: 'I am tired.', explanation: '"I" always uses "am", never "are"' },
              ],
              tips: [
                'Learn "to be" forms by heart — they appear in almost every English sentence.',
                'Practice contractions in speech: "I\'m", "She\'s", "They\'re" sound much more natural than the full forms.',
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
                { type: 'fill_blank', question: '___ he play football? Yes, he does.', answer: 'Does', hint: 'Question form for he/she/it' },
                { type: 'multiple_choice', question: '"They ___ speak English." (negative)', options: ["don't", "doesn't", "isn't", "aren't"], answer: 0 },
              ],
              key_points: [
                'With **he/she/it**, add **-s** to the verb: *She work**s**. He eat**s**.*',
                'Negatives use **don\'t** (I/you/we/they) or **doesn\'t** (he/she/it) + base verb',
                'Questions use **Do** (I/you/we/they) or **Does** (he/she/it) + subject + base verb',
              ],
              common_mistakes: [
                { wrong: 'She don\'t like music.', correct: "She doesn't like music.", explanation: 'Use "doesn\'t" — not "don\'t" — with he/she/it' },
                { wrong: 'Does she likes cats?', correct: 'Does she like cats?', explanation: 'After does/do, always use the BASE verb (no -s)' },
                { wrong: 'I works here.', correct: 'I work here.', explanation: 'Never add -s with "I" — only he/she/it gets -s' },
              ],
              tips: [
                'The -s on the third person (he/she/it) is one of the most common beginner mistakes — practise it deliberately.',
                'Use the present simple for habits (every day, usually, always) and facts (The sun rises in the east).',
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
                { word: 'Grandfather', translation: 'جد', example: 'My grandfather tells great stories.' },
                { word: 'Son', translation: 'ابن', example: 'He is my son.' },
                { word: 'Daughter', translation: 'ابنة', example: 'She is their only daughter.' },
                { word: 'Uncle', translation: 'عم / خال', example: 'My uncle lives in London.' },
                { word: 'Aunt', translation: 'عمة / خالة', example: 'My aunt bakes delicious cakes.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is "أخت" in English?', options: ['Brother', 'Mother', 'Sister', 'Daughter'], answer: 2 },
                { type: 'fill_blank', question: 'My ___ is a teacher.', answer: 'mother', hint: 'Female parent' },
                { type: 'match', question: 'Match family words', pairs: [['Mother','أم'],['Father','أب'],['Brother','أخ'],['Sister','أخت']] },
                { type: 'multiple_choice', question: '"Grandfather" means:', options: ['جدة', 'جد', 'أب', 'عم'], answer: 1 },
                { type: 'translate', question: 'Translate: "أخي طويل"', answer: 'My brother is tall', hint: 'My brother is...' },
                { type: 'fill_blank', question: 'She is their only ___.', answer: 'daughter', hint: 'Female child' },
                { type: 'multiple_choice', question: 'What is "عمة" in English?', options: ['Uncle', 'Aunt', 'Grandmother', 'Sister'], answer: 1 },
                { type: 'translate', question: 'Translate: "جدي يحكي قصصاً رائعة"', answer: 'My grandfather tells great stories', hint: 'My grandfather tells...' },
              ],
              key_points: [
                'Family words often come in pairs: **mother/father**, **son/daughter**, **brother/sister**, **grandmother/grandfather**',
                'Use **My** + family word to show possession: *My mother, My uncle, My sister*',
                'The female version of uncle is **aunt** — both are used for your parents\' siblings',
              ],
              tips: [
                'Draw your own family tree in English — label each person with their relationship to you.',
                'Learn both the male and female version of each family word together as a pair.',
              ],
              fun_fact: 'English has no grammatical gender for most family words — "cousin" for example can be male or female, unlike Arabic which has separate words for each!',
            },
          },
          {
            id: 'b2l4', title: 'Days & Months', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn the days of the week and months!',
              vocabulary: [
                { word: 'Monday', translation: 'الاثنين', example: 'School starts on Monday.' },
                { word: 'Wednesday', translation: 'الأربعاء', example: 'We have a test on Wednesday.' },
                { word: 'Friday', translation: 'الجمعة', example: 'Friday is a holiday.' },
                { word: 'Weekend', translation: 'نهاية الأسبوع', example: 'I relax on the weekend.' },
                { word: 'January', translation: 'يناير', example: 'January is the first month.' },
                { word: 'March', translation: 'مارس', example: 'Spring begins in March.' },
                { word: 'June', translation: 'يونيو', example: 'School finishes in June.' },
                { word: 'September', translation: 'سبتمبر', example: 'School starts again in September.' },
                { word: 'November', translation: 'نوفمبر', example: 'It is cold in November.' },
                { word: 'December', translation: 'ديسمبر', example: 'December is the last month.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What day comes after Monday?', options: ['Sunday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 2 },
                { type: 'fill_blank', question: '___ is the first month of the year.', answer: 'January', hint: 'Starts with J' },
                { type: 'multiple_choice', question: 'What is "الجمعة" in English?', options: ['Thursday', 'Saturday', 'Sunday', 'Friday'], answer: 3 },
                { type: 'reorder', question: 'Put in order:', words: ['Monday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 'Monday Tuesday Wednesday Thursday' },
                { type: 'translate', question: 'Translate: "اليوم هو الجمعة"', answer: 'Today is Friday', hint: 'Today is...' },
                { type: 'multiple_choice', question: 'Which month comes after August?', options: ['July', 'October', 'September', 'November'], answer: 2 },
                { type: 'fill_blank', question: 'I relax on the ___.', answer: 'weekend', hint: 'Saturday and Sunday together' },
                { type: 'translate', question: 'Translate: "الربيع يبدأ في مارس"', answer: 'Spring begins in March', hint: 'Spring begins in...' },
              ],
              key_points: [
                'Days of the week and months always start with a **capital letter** in English: Monday, January',
                'Use **on** with days: *on Monday, on Friday* — and **in** with months: *in January, in June*',
                'There are 7 days in a week and 12 months in a year — learn their order by heart',
              ],
              tips: [
                'A useful trick: 30 days has September, April, June and November — all others have 31, except February.',
                'Notice that all months from September onwards end in a number: Sep-TEM-ber (7), Oct-O-ber (8), Novem-ber (9), Decem-ber (10) — they were originally the 7th–10th months in the Roman calendar!',
              ],
              fun_fact: 'The days of the week in English are named after planets and Norse gods — Sunday (Sun), Monday (Moon), Tuesday (Tyr), Wednesday (Woden), Thursday (Thor)!',
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
                { word: 'Tea', translation: 'شاي', example: 'Would you like a cup of tea?' },
                { word: 'Milk', translation: 'حليب', example: 'Children drink milk every day.' },
                { word: 'Egg', translation: 'بيضة', example: 'I eat an egg for breakfast.' },
                { word: 'Chicken', translation: 'دجاج', example: 'I cooked chicken for dinner.' },
                { word: 'Apple', translation: 'تفاحة', example: 'An apple a day keeps the doctor away.' },
                { word: 'Juice', translation: 'عصير', example: 'I drink orange juice in the morning.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What does "خبز" mean?', options: ['Rice', 'Bread', 'Milk', 'Tea'], answer: 1 },
                { type: 'fill_blank', question: 'I drink ___ every day.', answer: 'water', hint: 'Essential liquid' },
                { type: 'match', question: 'Match food items', pairs: [['Water','ماء'],['Rice','أرز'],['Coffee','قهوة'],['Bread','خبز']] },
                { type: 'multiple_choice', question: '"Coffee" means:', options: ['شاي', 'عصير', 'قهوة', 'ماء'], answer: 2 },
                { type: 'translate', question: 'Translate: "أنا أحب الأرز"', answer: 'I like rice', hint: 'I like...' },
                { type: 'fill_blank', question: 'I eat an ___ for breakfast.', answer: 'egg', hint: 'A common breakfast item' },
                { type: 'multiple_choice', question: 'What is "حليب" in English?', options: ['Tea', 'Juice', 'Milk', 'Coffee'], answer: 2 },
                { type: 'translate', question: 'Translate: "هل تريد كوباً من الشاي؟"', answer: 'Would you like a cup of tea?', hint: 'Would you like...' },
              ],
              key_points: [
                'Many food words are **uncountable** in English: water, rice, bread — do not add -s to these',
                'Use **a/an** with countable foods: *an egg*, *a chicken* (one piece)',
                'The phrase **"Would you like...?"** is the polite way to offer food or drinks',
              ],
              tips: [
                'When you eat or drink something, say its English name out loud — this ties the word to a real experience.',
                'Learn drinks separately from food — they often use "drink" not "eat": *I drink tea*, not *I eat tea*.',
              ],
              fun_fact: 'The word "coffee" comes from the Arabic word "qahwa" (قهوة) — coffee was discovered in Ethiopia and spread through the Arab world before reaching Europe!',
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
                { word: 'Window', translation: 'نافذة', example: 'Open the window — it\'s hot.' },
                { word: 'Door', translation: 'باب', example: 'Please close the door.' },
                { word: 'Table', translation: 'طاولة', example: 'We eat at the table.' },
                { word: 'Chair', translation: 'كرسي', example: 'Sit on the chair, please.' },
                { word: 'Sofa', translation: 'أريكة', example: 'I relax on the sofa.' },
                { word: 'Garden', translation: 'حديقة', example: 'We have a small garden.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Where do you cook food?', options: ['Bedroom', 'Bathroom', 'Kitchen', 'Living room'], answer: 2 },
                { type: 'fill_blank', question: 'We sleep in the ___.', answer: 'bedroom', hint: 'Room for sleeping' },
                { type: 'multiple_choice', question: '"نافذة" means:', options: ['Door', 'Window', 'Table', 'Chair'], answer: 1 },
                { type: 'match', question: 'Match rooms', pairs: [['Bedroom','غرفة النوم'],['Kitchen','مطبخ'],['Bathroom','حمام'],['Living room','غرفة المعيشة']] },
                { type: 'translate', question: 'Translate: "المطبخ كبير"', answer: 'The kitchen is big', hint: 'The kitchen is...' },
                { type: 'fill_blank', question: 'I relax on the ___.', answer: 'sofa', hint: 'Comfortable seat in living room' },
                { type: 'multiple_choice', question: '"حديقة" means:', options: ['Garden', 'Kitchen', 'Bedroom', 'Garage'], answer: 0 },
                { type: 'translate', question: 'Translate: "من فضلك أغلق الباب"', answer: 'Please close the door', hint: 'Please close the...' },
              ],
              key_points: [
                'Use **in** for rooms: *in the kitchen, in the bedroom* — you are inside them',
                'Use **on** for surfaces: *on the table, on the sofa, on the floor*',
                'Many home words can be combined: *living room* (two words), *bedroom* (one word) — check each one',
              ],
              tips: [
                'Walk around your home and name every room and object you see — this is one of the best ways to learn home vocabulary.',
                'Learn furniture and rooms together so you always know which room each piece of furniture belongs in.',
              ],
              fun_fact: 'The word "window" comes from Old Norse "vindauga" meaning "wind eye" — because windows were originally just holes in the wall to let in air and light!',
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
              key_points: [
                'Read actively — underline names, ages and jobs as you find them in the text',
                'Use context clues: if the text says "He is a doctor" we know that person\'s job',
                'Possessives show ownership: **father\'s name** means "the name belonging to the father"',
              ],
              fun_fact: 'The name "Ahmed" is one of the most popular names in the Arab world — it comes from the Arabic root meaning "most praised".',
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
                { word: 'Windy', translation: 'عاصف', example: 'It is very windy outside.' },
                { word: 'Cloudy', translation: 'غائم', example: 'The sky is cloudy today.' },
                { word: 'Spring', translation: 'الربيع', example: 'Flowers bloom in spring.' },
                { word: 'Summer', translation: 'الصيف', example: 'We go to the beach in summer.' },
                { word: 'Autumn/Fall', translation: 'الخريف', example: 'Leaves fall in autumn.' },
                { word: 'Winter', translation: 'الشتاء', example: 'It snows in winter.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is the weather when you need an umbrella?', options: ['Sunny', 'Windy', 'Rainy', 'Hot'], answer: 2 },
                { type: 'fill_blank', question: 'It is very ___ in summer.', answer: 'hot', hint: 'Opposite of cold' },
                { type: 'match', question: 'Match weather words', pairs: [['Hot','حار'],['Cold','بارد'],['Sunny','مشمس'],['Rainy','ممطر']] },
                { type: 'translate', question: 'Translate: "الطقس بارد اليوم"', answer: 'The weather is cold today', hint: 'The weather is...' },
                { type: 'multiple_choice', question: 'Which season comes after spring?', options: ['Autumn', 'Winter', 'Summer', 'Spring'], answer: 2 },
                { type: 'fill_blank', question: 'Leaves fall in ___.', answer: 'autumn', hint: 'Also called "fall"' },
                { type: 'multiple_choice', question: '"غائم" means:', options: ['Sunny', 'Rainy', 'Windy', 'Cloudy'], answer: 3 },
                { type: 'translate', question: 'Translate: "الهواء شديد خارجاً"', answer: 'It is very windy outside', hint: 'It is very windy...' },
              ],
              key_points: [
                'Use **"It is"** or **"It\'s"** to describe weather: *It is sunny. It\'s cold.*',
                'Weather adjectives often end in **-y**: sun → sunny, rain → rainy, wind → windy, cloud → cloudy',
                'The four seasons are: **spring, summer, autumn (fall), winter**',
              ],
              tips: [
                'Start a habit of describing the weather in English every morning — it\'s great daily practice!',
                '"Autumn" is the British English word; "fall" is the American English word for the same season.',
              ],
              fun_fact: 'The UK is famous for talking about weather constantly — it is often said that discussing the weather is the most common conversation starter in British culture!',
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
              key_points: [
                'The word **"every"** signals a routine that repeats: *every Saturday* = each Saturday without exception',
                '"**How much is this?**" is the key phrase for asking prices — memorise it for real shopping situations',
                'Notice the list of items: **vegetables** (tomatoes, onions, potatoes) and **fruits** (apples, oranges, bananas)',
              ],
              fun_fact: 'The word "market" comes from Latin "mercatus" (trade) — and the planet Mercury was the Roman god of trade, which is why both words share the same root!',
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
                { type: 'multiple_choice', question: '"___ is your birthday?" (متى)', options: ['Where', 'When', 'What', 'Who'], answer: 1 },
                { type: 'fill_blank', question: '___ is your teacher? (من)', answer: 'Who', hint: 'Asking about a person' },
                { type: 'translate', question: 'Translate: "كم يكلف هذا؟"', answer: 'How much does this cost?', hint: 'How much does...' },
              ],
              key_points: [
                'Use **How many** with countable nouns: *How many books?* — and **How much** with uncountable nouns: *How much water?*',
                '**Who** asks about a person; **What** asks about a thing; **Where** asks about a place; **When** asks about time',
                'Question words come at the **beginning** of the sentence, followed by the auxiliary verb: *Where **do** you live?*',
              ],
              common_mistakes: [
                { wrong: 'How many money do you have?', correct: 'How much money do you have?', explanation: '"Money" is uncountable — use "how much" not "how many"' },
                { wrong: 'Where you live?', correct: 'Where do you live?', explanation: 'Don\'t forget the auxiliary verb "do" in questions' },
              ],
              tips: [
                'Remember the question words by their Arabic equivalents: What=ماذا, Where=أين, When=متى, Who=من, Why=لماذا, How=كيف',
                'Practice by asking yourself questions every day in English — it makes question word order feel natural.',
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
                { type: 'fill_blank', question: 'My ___ subject is English.', answer: 'favourite', hint: 'The thing you like most' },
                { type: 'multiple_choice', question: 'Which sentence correctly states your age?', options: ['I am 20 years.', 'I have 20 years.', 'I am 20 years old.', 'My age is 20 years old.'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [books / like / I / reading]', words: ['books', 'like', 'I', 'reading'], answer: 'I like reading books' },
                { type: 'translate', question: 'Translate: "كل يوم، أدرس الإنجليزية لمدة ساعة"', answer: 'Every day I study English for one hour', hint: 'Every day, I study...' },
              ],
              key_points: [
                'A "writing about yourself" paragraph follows this order: Name → Age → Country/City → Job/Study → Likes',
                'Use **I am** for facts (age, profession) and **I like** for preferences',
                'End sentences with a full stop (.) and start new ones with a capital letter',
              ],
              tips: [
                'Write three sentences about yourself right now — it\'s the best way to practise this lesson.',
                'Read the sample answer out loud after writing your own — compare sentence structure.',
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
                { type: 'multiple_choice', question: 'Which is the best order for an introduction?', options: ['Hobby → Name → Age', 'Name → Age → Country → Hobby', 'Country → Hobby → Name', 'Age → Name → Hobby'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ from Egypt and I live in Cairo.', answer: 'am', hint: 'Verb to be with I' },
                { type: 'reorder', question: 'Reorder: [years / I / 20 / am / old]', words: ['years', 'I', '20', 'am', 'old'], answer: 'I am 20 years old' },
                { type: 'translate', question: 'Translate: "أنا طالب وأحب الرياضيات"', answer: 'I am a student and I like mathematics', hint: 'I am a student and I like...' },
              ],
              key_points: [
                'A good self-introduction follows a natural order: Name → Origin → Job/Study → Hobbies → Closing',
                'Speak slowly and clearly — listeners appreciate pace over speed',
                'Ending with **"Nice to meet you!"** invites the other person to respond and continue the conversation',
              ],
              tips: [
                'Record yourself speaking your introduction — play it back to hear how natural it sounds.',
                'Practice in front of a mirror to build confidence with eye contact and body language.',
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
              key_points: [
                'Use **have/has** + past participle — *have* with I/you/we/they, *has* with he/she/it',
                'Use the present perfect for **experiences** (ever/never), **recent news** (just), and **duration** (for/since)',
                'Never use the present perfect with a specific finished time like "yesterday" or "last year" — use past simple instead',
              ],
              common_mistakes: [
                { wrong: 'I have visited Paris last year.', correct: 'I visited Paris last year.', explanation: '"Last year" is a finished time — use past simple, not present perfect' },
                { wrong: 'She have finished the work.', correct: 'She has finished the work.', explanation: 'Use "has" (not "have") with she/he/it' },
                { wrong: 'Have you ever went abroad?', correct: 'Have you ever been abroad?', explanation: 'After "have/has", use the past participle: go → gone (or been)' },
              ],
              tips: [
                'Learn the most common irregular past participles: go→gone, eat→eaten, see→seen, write→written, take→taken.',
                'The signal words "ever", "never", "just", "already", "yet", "since", "for" are strong clues that present perfect is needed.',
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
                { type: 'fill_blank', question: 'If you ___ (study), you will pass the exam. (1st conditional)', answer: 'study', hint: 'Present simple in the if-clause' },
                { type: 'multiple_choice', question: 'Which is a 2nd conditional sentence?', options: ['If I win, I will be happy.', 'If I were a doctor, I would help people.', 'If it rains, take an umbrella.', 'If she arrives, call me.'], answer: 1 },
              ],
              key_points: [
                '**1st conditional** = real/possible future: *If + present simple, will + base verb*',
                '**2nd conditional** = imaginary/unlikely: *If + past simple, would + base verb*',
                'In 2nd conditional, always use **"were"** for all subjects (not "was"): *If I were you... If she were rich...*',
              ],
              common_mistakes: [
                { wrong: 'If I will study, I will pass.', correct: 'If I study, I will pass.', explanation: 'Never use "will" in the if-clause of a 1st conditional — use present simple' },
                { wrong: 'If I was rich, I would travel.', correct: 'If I were rich, I would travel.', explanation: 'In 2nd conditionals, "were" is used for all subjects in formal English' },
              ],
              tips: [
                'Remember: 1st conditional = realistic future possibility. 2nd conditional = dreaming or unlikely situations.',
                'A useful test: can this actually happen? Yes → 1st conditional. Unlikely/impossible → 2nd conditional.',
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
                { type: 'multiple_choice', question: 'Active: "They will open the shop." Passive →', options: ['The shop will open.', 'The shop will be opened.', 'The shop is opened.', 'The shop was opened.'], answer: 1 },
                { type: 'fill_blank', question: 'English ___ (speak) in many countries.', answer: 'is spoken', hint: 'Present passive: is + past participle' },
              ],
              key_points: [
                'Passive voice = **be (is/are/was/were/will be)** + past participle',
                'Use passive when the **action is more important** than who does it, or the agent is unknown',
                'To mention who did it, add **"by"**: *The cake was made **by** my mother.*',
              ],
              common_mistakes: [
                { wrong: 'The letter was wrote by him.', correct: 'The letter was written by him.', explanation: '"wrote" is simple past — in passive you need the past participle: "written"' },
                { wrong: 'The window is broke.', correct: 'The window is broken.', explanation: 'Past participle of "break" is "broken", not "broke"' },
              ],
              tips: [
                'Passive voice is very common in formal writing, news, and science — learn to recognise and produce it.',
                'Quick test: can you insert "by someone" after the verb? If yes, it\'s passive: *The book was written (by someone).*',
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
                { word: 'Budget', translation: 'ميزانية', example: 'We need to stay within the budget.' },
                { word: 'Client', translation: 'عميل', example: 'The client was happy with our work.' },
                { word: 'Colleague', translation: 'زميل عمل', example: 'She is a colleague of mine.' },
                { word: 'Negotiate', translation: 'يتفاوض', example: 'We need to negotiate the contract.' },
                { word: 'Proposal', translation: 'اقتراح / عرض', example: 'She submitted a proposal to the board.' },
                { word: 'Feedback', translation: 'تغذية راجعة / تعليقات', example: 'We received positive feedback from clients.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Deadline" means:', options: ['بداية العمل', 'موعد نهائي', 'إجازة', 'ترقية'], answer: 1 },
                { type: 'fill_blank', question: 'I have a ___ with my manager at 3 PM.', answer: 'meeting', hint: 'When people gather' },
                { type: 'match', question: 'Match business words', pairs: [['Deadline','موعد نهائي'],['Meeting','اجتماع'],['Report','تقرير'],['Strategy','استراتيجية']] },
                { type: 'translate', question: 'Translate: "اجتماعنا يوم الاثنين"', answer: 'Our meeting is on Monday', hint: 'Our meeting is...' },
                { type: 'fill_blank', question: 'We need to stay within the ___.', answer: 'budget', hint: 'The money available' },
                { type: 'multiple_choice', question: '"Colleague" means:', options: ['عميل', 'مدير', 'زميل عمل', 'موظف جديد'], answer: 2 },
                { type: 'translate', question: 'Translate: "تلقينا تعليقات إيجابية من العملاء"', answer: 'We received positive feedback from clients', hint: 'We received positive feedback...' },
                { type: 'fill_blank', question: 'She submitted a ___ to the board of directors.', answer: 'proposal', hint: 'A formal suggestion or plan' },
              ],
              key_points: [
                'Business vocabulary is often formal — avoid slang in workplace emails and meetings',
                '**Deadline** (not "last date"), **budget** (not "money limit"), **feedback** (not "comments") are the preferred professional terms',
                'Learn verbs that go with business nouns: **submit** a report, **meet** a deadline, **attend** a meeting, **negotiate** a contract',
              ],
              tips: [
                'Read business English news (BBC Business, Reuters) for 10 minutes a day to see this vocabulary in real context.',
                'Learn these words as part of phrases (collocations): *miss a deadline*, *hold a meeting*, *submit a report*.',
              ],
              fun_fact: 'The word "salary" comes from the Latin "salarium" — payment in salt — because salt was so valuable in ancient Rome that workers were sometimes paid with it!',
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
              key_points: [
                'Skim the article first to get the main idea, then scan for specific details when answering questions',
                'Expert quotes are important — they often contain the article\'s key argument or counterargument',
                'Numbers and statistics (like 300%) are facts — they appear exactly in the text and are often tested',
              ],
              fun_fact: 'The word "artificial" in "artificial intelligence" comes from Latin "artificialis" — meaning made by human skill or craft — as opposed to natural.',
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
                { type: 'fill_blank', question: '___ conclusion, education is the key to success.', answer: 'In', hint: 'Starts the final paragraph' },
                { type: 'multiple_choice', question: 'Which phrase introduces a contrasting idea?', options: ['Furthermore,', 'In addition,', 'However,', 'For example,'], answer: 2 },
              ],
              key_points: [
                'An opinion essay has 4 parts: **Introduction** → **Body 1** → **Body 2** → **Conclusion**',
                'State your opinion clearly in the introduction using phrases like *"In my opinion..."* or *"I strongly believe that..."*',
                'Use **linking words** to connect ideas: *Furthermore* (add), *However* (contrast), *Therefore* (result)',
              ],
              tips: [
                'Always plan before you write — spend 2 minutes noting your main argument and two supporting reasons.',
                'Never start your conclusion with new ideas — only summarise what you have already said.',
              ],
            },
          },
        ],
      },
      {
        id: 'i2', title: 'Communication Skills', icon: '🗣️',
        lessons: [
          {
            id: 'i2l1', title: 'Reported Speech', type: 'grammar', xp: 30,
            content: {
              intro: 'Learn how to report what others said!',
              explanation: '📝 **Reported Speech:**\n\nDirect → Reported (tense shifts back):\n• "I am tired." → She said she **was** tired.\n• "I will call." → He said he **would** call.\n• "I have finished." → She said she **had** finished.\n\n**Time expression shifts:**\n• now → then · today → that day · tomorrow → the next day · yesterday → the day before\n\n**Reporting verbs:** said, told, asked, explained, warned, promised\n\n⚠️ *said* has NO object · *told* MUST have object\n• She said (that)... ✅ · She told me (that)... ✅\n• She told (that)... ❌',
              examples: [
                '"I love this city." → She said she loved that city.',
                '"We will arrive at noon." → They said they would arrive at noon.',
                '"Did you eat?" → He asked if I had eaten.',
              ],
              exercises: [
                { type: 'multiple_choice', question: '"I am busy." → She said she ___ busy.', options: ['is', 'was', 'were', 'be'], answer: 1 },
                { type: 'fill_blank', question: '"I will help." → He said he ___ help.', answer: 'would', hint: 'will → ?' },
                { type: 'multiple_choice', question: 'Which is correct reported speech for "I work here"?', options: ['He said he works here.', 'He said he worked here.', 'He said he work here.', 'He said he is working here.'], answer: 1 },
                { type: 'fill_blank', question: '"Do you like coffee?" → She asked ___ I liked coffee.', answer: 'if', hint: 'Yes/No question uses if/whether' },
                { type: 'multiple_choice', question: '"today" becomes ___ in reported speech.', options: ['then', 'that day', 'now', 'yesterday'], answer: 1 },
                { type: 'translate', question: 'Translate: قال إنه كان متعباً', answer: 'He said he was tired', hint: 'He said he was...' },
              ],
            },
          },
          {
            id: 'i2l2', title: 'Relative Clauses', type: 'grammar', xp: 30,
            content: {
              intro: 'Combine sentences using who, which, that, where, and whose!',
              explanation: '📝 **Relative Clauses:**\n\n• **who** — for people: *The man **who** called is my brother.*\n• **which** — for things: *The book **which** I bought is great.*\n• **that** — for people or things (informal): *The film **that** we watched was funny.*\n• **where** — for places: *The café **where** we met is closed now.*\n• **whose** — for possession: *The student **whose** phone rang left.*\n\n**Defining vs Non-defining:**\n• Defining (no commas): *The man who called is my boss.* — essential info\n• Non-defining (commas): *My boss, who called earlier, is very strict.* — extra info',
              examples: [
                'The woman who lives next door is a nurse.',
                'This is the city where I was born.',
                'My friend, whose car broke down, took a taxi.',
              ],
              exercises: [
                { type: 'fill_blank', question: 'The student ___ passed the exam was very happy.', answer: 'who', hint: 'For people' },
                { type: 'multiple_choice', question: 'The restaurant ___ we ate last night was excellent.', options: ['who', 'which', 'where', 'whose'], answer: 2 },
                { type: 'fill_blank', question: 'The book ___ I borrowed was very interesting.', answer: 'that', hint: 'For things (informal)' },
                { type: 'multiple_choice', question: 'The girl ___ bag was stolen called the police.', options: ['who', 'which', 'that', 'whose'], answer: 3 },
                { type: 'reorder', question: 'Combine: [The man / who / works here / is very kind]', words: ['The','man','who','works','here','is','very','kind'], answer: 'The man who works here is very kind' },
                { type: 'translate', question: 'Translate: الكتاب الذي اشتريته كان ممتعاً', answer: 'The book that I bought was interesting', hint: 'The book that I...' },
              ],
            },
          },
          {
            id: 'i2l3', title: 'Gerunds & Infinitives', type: 'grammar', xp: 30,
            content: {
              intro: 'Know when to use -ing and when to use to + verb!',
              explanation: '📝 **Gerunds vs Infinitives:**\n\n**Gerund (verb + -ing)** — acts as a noun:\n• After certain verbs: *enjoy, finish, suggest, avoid, mind, keep, consider*\n• *She **enjoys running** every morning.*\n• After prepositions: *He is good **at cooking**.*\n\n**Infinitive (to + base verb)**:\n• After certain verbs: *want, hope, need, decide, plan, refuse, agree, manage*\n• *They **decided to travel** by train.*\n• Purpose: *I study English **to get** a better job.*\n\n**Both possible (meaning changes):**\n• *I stopped **smoking**.* (I quit)\n• *I stopped **to smoke**.* (I paused in order to smoke)',
              exercises: [
                { type: 'fill_blank', question: 'She enjoys ___ (swim) in the sea.', answer: 'swimming', hint: 'After "enjoy" → gerund' },
                { type: 'multiple_choice', question: 'They decided ___ a new house.', options: ['buying', 'buy', 'to buy', 'bought'], answer: 2 },
                { type: 'fill_blank', question: 'He avoided ___ (make) eye contact.', answer: 'making', hint: 'After "avoid" → gerund' },
                { type: 'multiple_choice', question: 'I am good at ___ languages.', options: ['learn', 'to learn', 'learned', 'learning'], answer: 3 },
                { type: 'multiple_choice', question: 'She refused ___ the question.', options: ['answering', 'to answer', 'answer', 'answered'], answer: 1 },
                { type: 'translate', question: 'Translate: أنا أحب السباحة كثيراً', answer: 'I love swimming very much', hint: 'I love swimming...' },
              ],
            },
          },
          {
            id: 'i2l4', title: 'Expressing Opinions & Agreeing', type: 'speaking', xp: 30,
            content: {
              intro: 'Learn to express, support, and challenge opinions naturally!',
              explanation: '🗣️ **Discussion Language:**\n\n**Giving opinions:**\n• *In my view, ...* · *I strongly believe that...*\n• *From my perspective,...* · *As far as I\'m concerned,...*\n\n**Agreeing:**\n• *I completely agree.* · *Absolutely!*\n• *That\'s a good point.* · *You\'re right about that.*\n\n**Disagreeing politely:**\n• *I see your point, but...* · *I\'m not sure I agree...*\n• *With respect, I think...* · *Actually, I\'d argue that...*\n\n**Adding a point:**\n• *Furthermore,...* · *What\'s more,...*\n• *Not only that, but...* · *In addition,...*',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase gives an opinion?', options: ['For example', 'In my view', 'As a result', 'However'], answer: 1 },
                { type: 'fill_blank', question: 'I see your ___, but I don\'t agree.', answer: 'point', hint: 'Polite disagreement phrase' },
                { type: 'multiple_choice', question: 'Which phrase DISAGREES politely?', options: ['Absolutely!', 'I completely agree.', 'I\'m not sure I agree.', 'That\'s right.'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [believe / strongly / I / education / important / is]', words: ['believe','strongly','I','education','important','is'], answer: 'I strongly believe education is important' },
                { type: 'fill_blank', question: '___ my perspective, social media has benefits and drawbacks.', answer: 'From', hint: 'From my...' },
                { type: 'multiple_choice', question: 'What does "furthermore" do in a sentence?', options: ['Contrasts ideas', 'Adds more information', 'Shows cause', 'Introduces an example'], answer: 1 },
              ],
            },
          },
          {
            id: 'i2l5', title: 'Reading: Climate & Environment', type: 'reading', xp: 30,
            content: {
              intro: 'Read an environmental article and build comprehension skills!',
              text: `**The Race Against Climate Change**\n\nScientists warn that the world has less than a decade to dramatically cut carbon emissions before the effects of climate change become irreversible. Average global temperatures have risen by 1.2°C since the Industrial Revolution, and rising sea levels are already threatening coastal cities.\n\nDespite growing awareness, global emissions actually increased by 1% last year. The main contributors are the energy sector (34%), transportation (24%), and agriculture (18%).\n\nHowever, there is cause for optimism. Renewable energy capacity doubled globally between 2015 and 2023. Electric vehicle sales increased by 55% last year, and over 140 countries have pledged to reach net-zero emissions by 2050.\n\nDr. Amina Khalil of Cairo University says: "Individual actions matter, but systemic change is essential. We need governments and corporations to lead."\n\nThe next global climate summit will be held in November, where world leaders are expected to announce significant new commitments.`,
              exercises: [
                { type: 'multiple_choice', question: 'By how much have temperatures risen since the Industrial Revolution?', options: ['0.8°C', '1.0°C', '1.2°C', '1.5°C'], answer: 2 },
                { type: 'fill_blank', question: 'Renewable energy capacity ___ globally between 2015 and 2023.', answer: 'doubled', hint: 'Increased by 100%' },
                { type: 'multiple_choice', question: 'Which sector produces the MOST emissions?', options: ['Transportation', 'Agriculture', 'Energy', 'Industry'], answer: 2 },
                { type: 'multiple_choice', question: 'What does Dr. Khalil say is "essential"?', options: ['Individual actions', 'Systemic change', 'Climate summits', 'Renewable energy'], answer: 1 },
                { type: 'fill_blank', question: 'Over 140 countries have pledged to reach net-zero emissions by ___.', answer: '2050', hint: 'Find the year in the text' },
                { type: 'multiple_choice', question: 'The word "irreversible" most likely means:', options: ['Dangerous', 'Cannot be undone', 'Very expensive', 'Slow'], answer: 1 },
              ],
            },
          },
          {
            id: 'i2l6', title: 'Writing: Formal Email & Letters', type: 'writing', xp: 30,
            content: {
              intro: 'Master formal written communication!',
              explanation: '✍️ **Formal Email / Letter Structure:**\n\n**Opening:**\n• *Dear Mr./Ms. [Name],* (known)\n• *To Whom It May Concern,* (unknown)\n\n**Purpose (first line):**\n• *I am writing to enquire about...*\n• *I am writing in response to...*\n• *I am writing to complain about...*\n\n**Body:** Short, clear paragraphs\n\n**Closing:**\n• *I look forward to hearing from you.*\n• *Please do not hesitate to contact me.*\n\n**Sign-off:**\n• *Yours sincerely,* (named recipient)\n• *Yours faithfully,* (unnamed)\n\n**Avoid:** contractions, slang, emotional language',
              exercises: [
                { type: 'multiple_choice', question: 'Use "Yours faithfully" when:', options: ['You know the recipient', 'You don\'t know the name', 'Writing to a friend', 'Writing informally'], answer: 1 },
                { type: 'fill_blank', question: 'I am writing to ___ about the job vacancy.', answer: 'enquire', hint: 'To ask for information' },
                { type: 'multiple_choice', question: 'Which is appropriate for a formal email?', options: ["Hey! What's up?", 'I am writing to request information.', 'URGENT!!!! Please reply!!!', 'Don\'t forget to check this.'], answer: 1 },
                { type: 'fill_blank', question: 'I look forward to ___ from you.', answer: 'hearing', hint: 'look forward to + gerund' },
                { type: 'multiple_choice', question: 'What should formal writing avoid?', options: ['Long sentences', 'Passive voice', 'Contractions like "don\'t"', 'Paragraphs'], answer: 2 },
                { type: 'translate', question: 'Translate: أكتب لأستفسر عن سعر الغرفة', answer: 'I am writing to enquire about the room price', hint: 'I am writing to enquire about...' },
              ],
            },
          },
        ],
      },
      {
        id: 'i3', title: 'Advanced Skills', icon: '🚀',
        lessons: [
          {
            id: 'i3l1', title: 'Third Conditional', type: 'grammar', xp: 30,
            content: {
              intro: 'Talk about impossible past regrets and imaginary situations!',
              explanation: '📝 **Third Conditional (past regrets/impossible past):**\n\nStructure: **If + had + past participle, would have + past participle**\n\n• *If I **had studied** harder, I **would have passed** the exam.*\n• *If she **had left** earlier, she **wouldn\'t have missed** the train.*\n\n**Mixed Conditional (past condition → present result):**\n• *If I **had taken** that job, I **would be** rich now.*\n\n💡 **Uses:**\n• Regrets: *If only I had listened!*\n• Criticism: *If you had saved money, you wouldn\'t be in debt.*\n• Imagining alternative past outcomes',
              exercises: [
                { type: 'fill_blank', question: 'If she ___ (study) more, she would have passed.', answer: 'had studied', hint: 'If + had + past participle' },
                { type: 'multiple_choice', question: 'If I had known about the meeting, I ___ attended.', options: ['will have', 'would have', 'had', 'would'], answer: 1 },
                { type: 'fill_blank', question: 'He wouldn\'t have been late if he ___ (leave) earlier.', answer: 'had left', hint: 'had + past participle' },
                { type: 'multiple_choice', question: 'Which expresses a past regret?', options: ['If I study, I will pass.', 'If I were rich, I would travel.', 'If I had studied, I would have passed.', 'If I study hard, I can pass.'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [had / she / earlier / left / If / she / missed / have / wouldn\'t / the bus]', words: ['had','she','earlier','left','If','she','missed','have','wouldn\'t','the','bus'], answer: 'If she had left earlier she wouldn\'t have missed the bus' },
                { type: 'translate', question: 'Translate: لو كنت سافرت باكراً، لما فاتني الطائرة', answer: 'If I had travelled early I would not have missed the plane', hint: 'If I had..., I would not have...' },
              ],
            },
          },
          {
            id: 'i3l2', title: 'Collocations & Word Partnerships', type: 'vocabulary', xp: 30,
            content: {
              intro: 'Sound more natural by using word combinations native speakers love!',
              vocabulary: [
                { word: 'Make a decision', translation: 'يتخذ قراراً', example: 'It took him a week to make a decision.' },
                { word: 'Do research', translation: 'يجري بحثاً', example: 'She did extensive research for her thesis.' },
                { word: 'Take responsibility', translation: 'يتحمل المسؤولية', example: 'He took full responsibility for the mistake.' },
                { word: 'Pay attention', translation: 'ينتبه', example: 'Please pay attention during the lecture.' },
                { word: 'Give a presentation', translation: 'يقدم عرضاً', example: 'She gave an excellent presentation.' },
                { word: 'Reach a conclusion', translation: 'يتوصل لنتيجة', example: 'We reached the same conclusion independently.' },
                { word: 'Break a record', translation: 'يكسر رقماً قياسياً', example: 'She broke the world record by 2 seconds.' },
                { word: 'Raise awareness', translation: 'يرفع الوعي', example: 'The campaign raised awareness about recycling.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'We need to ___ a decision soon.', options: ['do', 'have', 'make', 'take'], answer: 2 },
                { type: 'fill_blank', question: 'She ___ a presentation to the board of directors.', answer: 'gave', hint: 'give a presentation' },
                { type: 'multiple_choice', question: 'Scientists ___ extensive research into the disease.', options: ['made', 'did', 'had', 'gave'], answer: 1 },
                { type: 'fill_blank', question: 'He needs to ___ responsibility for his actions.', answer: 'take', hint: 'take responsibility' },
                { type: 'match', question: 'Match the collocations', pairs: [['make','a decision'],['do','research'],['take','responsibility'],['raise','awareness']] },
                { type: 'translate', question: 'Translate: يجب أن ننتبه لهذه المشكلة', answer: 'We must pay attention to this problem', hint: 'pay attention to...' },
              ],
            },
          },
          {
            id: 'i3l3', title: 'Reading: Science & Innovation', type: 'reading', xp: 30,
            content: {
              intro: 'Develop advanced reading skills with a science article!',
              text: `**The Age of Biotechnology**\n\nBiotechnology is transforming medicine in ways that seemed impossible just a generation ago. CRISPR gene-editing technology now allows scientists to modify DNA with remarkable precision, raising hopes for curing inherited diseases such as sickle cell anemia and cystic fibrosis.\n\nIn 2023, the first CRISPR-based therapy was approved for use in humans — a milestone described by experts as "the beginning of a new medical era." The treatment, which corrects a genetic mutation in patients\' blood cells, has shown an 80% success rate in clinical trials.\n\nHowever, the technology is not without controversy. Critics argue that gene editing could be misused to create "designer babies" with selected traits, raising profound ethical questions about the limits of scientific intervention.\n\nDr. Fatima Al-Rashid, a bioethicist at Oxford University, warns: "We must distinguish between therapeutic uses, which can save lives, and enhancement uses, which risk deepening social inequality."\n\nAs the technology advances, regulatory frameworks will need to keep pace to ensure that its benefits are shared fairly and its risks managed responsibly.`,
              exercises: [
                { type: 'multiple_choice', question: 'What did CRISPR allow scientists to do?', options: ['Clone animals', 'Modify DNA precisely', 'Create new viruses', 'Build artificial organs'], answer: 1 },
                { type: 'fill_blank', question: 'The first CRISPR therapy had an ___% success rate.', answer: '80', hint: 'Find the percentage' },
                { type: 'multiple_choice', question: 'What is the main concern of critics?', options: ['High cost of treatment', 'Scientific inaccuracy', 'Designer babies and ethics', 'Lack of clinical trials'], answer: 2 },
                { type: 'multiple_choice', question: 'Dr. Al-Rashid\'s position is best described as:', options: ['Completely against CRISPR', 'Fully supportive', 'Cautiously balanced', 'Uncertain'], answer: 2 },
                { type: 'fill_blank', question: 'The first CRISPR therapy was approved in ___.', answer: '2023', hint: 'Find the year' },
                { type: 'multiple_choice', question: '"Profound" in the text most nearly means:', options: ['Simple', 'Deep and serious', 'Unexpected', 'Political'], answer: 1 },
              ],
            },
          },
          {
            id: 'i3l4', title: 'Emphatic Structures', type: 'grammar', xp: 30,
            content: {
              intro: 'Add emphasis and drama to your English with advanced structures!',
              explanation: '📝 **Emphatic Structures:**\n\n**It is/was ... that/who (cleft sentences):**\n• *It was **Ahmed** who called.* (not someone else)\n• *It is **money** that causes most arguments.*\n\n**What-clauses:**\n• *What I need is a good rest.*\n• *What surprised me was his reaction.*\n\n**Inversion for emphasis (after negative adverbials):**\n• *Never have I seen such a beautiful sunset.*\n• *Not only did she pass, but she got full marks.*\n• *Seldom do we get such an opportunity.*\n\n**Do/does/did for emphasis:**\n• *I **do** understand your concern.*\n• *She **did** try her best.*',
              exercises: [
                { type: 'fill_blank', question: '___ was his answer that shocked everyone.', answer: 'It', hint: 'Cleft sentence starter' },
                { type: 'multiple_choice', question: 'Never ___ I seen such a beautiful view.', options: ['I have', 'have', 'did', 'had'], answer: 1 },
                { type: 'fill_blank', question: 'What I really ___ is your support.', answer: 'need', hint: 'What-clause for emphasis' },
                { type: 'multiple_choice', question: 'Which sentence uses emphasis correctly?', options: ['I do know the answer.', 'I am do know the answer.', 'Do I know the answer.', 'I knowing the answer.'], answer: 0 },
                { type: 'reorder', question: 'Reorder: [she / did / her best / do]', words: ['she','did','her','best','do'], answer: 'She did do her best' },
                { type: 'translate', question: 'Translate: ما يدهشني حقاً هو صبره', answer: 'What really amazes me is his patience', hint: 'What ... is...' },
              ],
            },
          },
          {
            id: 'i3l5', title: 'Story: The Interview', type: 'story', xp: 30,
            content: {
              intro: 'Read a story and practice comprehension and inference!',
              text: `**The Interview**\n\nNadia had prepared for weeks. She had read every article about the company, rehearsed answers to fifty interview questions, and chosen her outfit the night before. And yet, as she sat in the waiting room on that Tuesday morning, her confidence seemed to have evaporated completely.\n\nThe receptionist — a cheerful woman in her forties — noticed Nadia's pale expression. "First big interview?" she asked gently.\n\n"Is it that obvious?" Nadia replied with a weak smile.\n\n"Completely," the woman laughed. "I've worked here twenty years. I've seen hundreds of nervous candidates. You know what most of them had in common?"\n\nNadia shook her head.\n\n"They all got the job." The receptionist winked. "The ones who aren't nervous are usually overconfident. Nervousness means you care."\n\nWhen Nadia finally entered the interview room fifteen minutes later, she shook the panel's hands firmly and said: "Good morning. I'm really excited to be here." And strangely, as she said it, she realised it was true.`,
              exercises: [
                { type: 'multiple_choice', question: 'How long had Nadia been preparing?', options: ['A few days', 'Several weeks', 'One month', 'The night before'], answer: 1 },
                { type: 'multiple_choice', question: 'How did the receptionist know Nadia was nervous?', options: ['Nadia told her', 'She looked pale', 'She was shaking', 'She was crying'], answer: 1 },
                { type: 'fill_blank', question: 'The receptionist said nervousness means you ___.', answer: 'care', hint: 'Find the word in the last paragraph before the interview room' },
                { type: 'multiple_choice', question: 'What was surprising about Nadia\'s final statement?', options: ['She lied to the panel', 'She forgot what to say', 'She realised it was genuinely true', 'She was still very nervous'], answer: 2 },
                { type: 'multiple_choice', question: 'The word "evaporated" in context means:', options: ['Increased', 'Disappeared', 'Transformed', 'Strengthened'], answer: 1 },
                { type: 'multiple_choice', question: 'What is the main message of the story?', options: ['Preparation is everything', 'Nervousness can be a positive sign', 'Never talk to strangers', 'Interviews are always terrifying'], answer: 1 },
              ],
            },
          },
          {
            id: 'i3l6', title: 'Speaking: Discussions & Debates', type: 'speaking', xp: 30,
            content: {
              intro: 'Build fluency and confidence in discussions and debates!',
              explanation: '🗣️ **Discussion & Debate Skills:**\n\n**Structuring your argument:**\n1. State your position clearly\n2. Give 2-3 reasons with examples\n3. Address the opposing view\n4. Conclude with a strong statement\n\n**Useful debate phrases:**\n• *I would argue that...* · *The evidence suggests...*\n• *While it is true that... nevertheless...*\n• *Some people claim... however...*\n• *It could be argued that...*\n• *The fact that... demonstrates...*\n\n**Talking more fluently:**\n• Use hesitation phrases: *That\'s an interesting point...*\n• Paraphrase questions: *So you\'re asking whether...*\n• Buy time: *Let me think about that for a moment.*',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase introduces a counterargument?', options: ['I would argue', 'Furthermore', 'While it is true that', 'In conclusion'], answer: 2 },
                { type: 'fill_blank', question: 'The evidence ___ that education improves quality of life.', answer: 'suggests', hint: 'The evidence suggests...' },
                { type: 'multiple_choice', question: 'When you need time to think, you say:', options: ['I don\'t know.', 'Let me think about that for a moment.', 'Can you repeat?', 'I am confused.'], answer: 1 },
                { type: 'fill_blank', question: 'It could be ___ that technology creates more jobs than it destroys.', answer: 'argued', hint: 'It could be argued that...' },
                { type: 'multiple_choice', question: 'Which best concludes a debate argument?', options: ['So, basically...', 'Um, I think...', 'In conclusion, the evidence strongly supports my position.', 'That\'s my answer.'], answer: 2 },
                { type: 'translate', question: 'Translate: بينما صحيح أن التكنولوجيا مفيدة، إلا أن لها عيوباً', answer: 'While it is true that technology is useful it has drawbacks', hint: 'While it is true that...' },
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
              key_points: [
                'Always **paraphrase the title** in your introduction — never copy it word-for-word.',
                'The overview paragraph contains **only the 2–3 most significant trends** — no specific data or numbers.',
                '**"Increased by"** = the amount of change. **"Increased to"** = the new level reached.',
                'Group and compare data rather than describing each line separately — this shows analytical skill.',
              ],
              tips: [
                'Spend 2 minutes reading the chart before writing — identify the biggest trend (overview) and 2–3 supporting details.',
                'Vary your language: use "rose", "climbed", "grew", and "surged" instead of repeating "increased" throughout.',
              ],
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
              key_points: [
                'Your **thesis statement** (opinion) should appear in the introduction AND be reinforced in the conclusion.',
                'Each body paragraph needs one main idea + a reason + an example — the "sandwich" structure.',
                'Never use bullet points or numbered lists in IELTS Task 2 — always write in full paragraphs.',
                'The conclusion should not introduce any new ideas — only restate and summarise.',
              ],
              common_mistakes: [
                { wrong: 'In my personal opinion, I think that...', correct: 'In my opinion, ... / I believe that...', explanation: '"In my personal opinion" is redundant — "personal opinion" and "I think" mean the same thing.' },
                { wrong: 'There are many advantages and disadvantages.', correct: 'Technology offers significant benefits, though it also presents notable drawbacks.', explanation: 'Vague openers score poorly. Start with a specific, developed point.' },
              ],
              tips: [
                'Never go under 250 words — but don\'t write excessively long either. 280–300 words is ideal for quality and time management.',
                'Spend 5 minutes planning: write a quick outline with your thesis and 2 body paragraph ideas before you start.',
              ],
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
              key_points: [
                'Use the **AREA** technique: Answer → Reason → Example → Alternative (or "although sometimes...")',
                'Grammar tenses matter: use **present simple** for habits ("I usually..."), **present perfect** for experiences ("I\'ve been...")',
                'Speak naturally and conversationally — Part 1 is a warm-up, not a formal presentation.',
              ],
              tips: [
                'Don\'t rehearse scripted answers — examiners can tell, and it sounds unnatural. Instead, practice the AREA structure with different topics.',
                'If you don\'t fully understand a question, it\'s fine to say: "Could you repeat that?" or "Do you mean...?"',
              ],
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
                { word: 'Exacerbate', translation: 'يُفاقم/يُشدّد', example: 'Poor diet can exacerbate health problems.' },
                { word: 'Undermine', translation: 'يُقوّض', example: 'Corruption undermines public trust in institutions.' },
                { word: 'Advocate', translation: 'يدعو إلى/يُنادي بـ', example: 'Researchers advocate stricter environmental regulations.' },
                { word: 'Detrimental', translation: 'ضار/مُضرّ', example: 'Excessive screen time is detrimental to children\'s health.' },
                { word: 'Proliferate', translation: 'يتكاثر/ينتشر', example: 'Social media platforms have proliferated rapidly.' },
                { word: 'Foster', translation: 'يُعزّز/يُشجّع', example: 'Education fosters critical thinking and creativity.' },
              ],
              key_points: [
                'Use **"consequently"** and **"therefore"** to show a result; use **"nevertheless"** and **"however"** to show contrast.',
                'Words like **"exacerbate"** and **"undermine"** show sophisticated vocabulary range and boost your Lexical Resource score.',
                'Learn words in collocations: **"foster"** collocates with creativity, relationships, skills — not "make" or "create".',
              ],
              tips: [
                'For IELTS Writing, learn 5–6 high-band words per topic (health, environment, technology, education) and use them naturally.',
                'Don\'t force advanced vocabulary — one incorrect advanced word hurts more than a simple word used correctly.',
              ],
              fun_fact: 'IELTS examiners notice vocabulary variety immediately. Research shows that Band 7+ essays use at least 3–4 different ways to express the same idea across the essay.',
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
              key_points: [
                '**Skimming** = reading quickly for the main idea. Use it to understand the overall structure before answering questions.',
                '**Scanning** = looking for specific information (a date, name, number). Move your eyes quickly until you spot it.',
                'Never read the whole passage word-by-word first — read the questions, then scan for the answers.',
              ],
              tips: [
                'For IELTS reading, you have 60 minutes for 3 passages and 40 questions. That\'s about 1.5 minutes per question — time management is critical.',
                'Underline keywords in each question before you scan the text — this makes scanning much faster.',
              ],
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
              key_points: [
                'Read the questions **before** the audio starts — you get 30–45 seconds to preview. Use this time!',
                'Answers appear in **question order** — don\'t lose your place or you\'ll miss the next answer.',
                'Listen for **paraphrasing**: the speaker will say the same idea in different words from what\'s in the question.',
              ],
              tips: [
                'Predict what type of answer each blank needs (a number? a name? a day?) — this helps you listen for the right thing.',
                'If you miss an answer, don\'t panic — move on to the next question immediately. You can\'t rewind in the real exam.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'In IELTS listening, answers appear:', options: ['Randomly', 'In reverse', 'In question order', 'All at the end'], answer: 2 },
                { type: 'multiple_choice', question: 'When should you read the questions?', options: ['After listening', 'While listening', 'Before listening', 'It doesn\'t matter'], answer: 2 },
                { type: 'fill_blank', question: 'Spelling mistakes in answers are counted as ___.', answer: 'wrong', hint: 'Incorrect' },
              ],
            },
          },
        ],
      },
      {
        id: 'ie2', title: 'Reading & Vocabulary Mastery', icon: '📖',
        lessons: [
          {
            id: 'ie2l1', title: 'True / False / Not Given', type: 'reading', xp: 50,
            content: {
              intro: 'Master the most challenging IELTS reading question type!',
              explanation: '📖 **True / False / Not Given:**\n\n• **TRUE** — the statement matches the text\n• **FALSE** — the statement contradicts the text\n• **NOT GIVEN** — the text doesn\'t mention it\n\n⚠️ **Common trap:** NOT GIVEN ≠ False! If the text doesn\'t say it, it\'s NOT GIVEN.\n\n**Strategy:**\n1. Read the statement carefully\n2. Find the relevant section in the text\n3. Compare word by word — look for paraphrases\n4. Don\'t use your own knowledge!\n\n**Key paraphrase words:**\n• increase = rise, grow, climb, soar\n• decrease = fall, drop, decline, reduce\n• important = crucial, vital, significant',
              key_points: [
                '**NOT GIVEN ≠ FALSE**: "False" means the text *contradicts* the statement. "Not Given" means the text simply doesn\'t discuss it.',
                'Never answer based on your own general knowledge — **only what is explicitly written in the text counts**.',
                'Look for paraphrases: the statement will rarely use the exact same words as the passage.',
              ],
              tips: [
                'When you\'re unsure between False and Not Given, ask yourself: "Does the text say the OPPOSITE?" If yes = False. If the topic is just absent = Not Given.',
                'Work through statements in order — they correspond to the passage from beginning to end.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'The text says "Sales rose by 30%." The statement says "Sales declined." This is:', options: ['True', 'False', 'Not Given'], answer: 1 },
                { type: 'multiple_choice', question: 'The text says "The company employs 500 people." The statement says "The company was founded in 1990." This is:', options: ['True', 'False', 'Not Given'], answer: 2 },
                { type: 'fill_blank', question: 'When a statement contradicts the text, the answer is ___.', answer: 'False', hint: 'Not True, not Not Given' },
                { type: 'multiple_choice', question: 'You should use your own knowledge to answer True/False/Not Given.', options: ['True', 'False', 'Not Given'], answer: 1 },
                { type: 'fill_blank', question: 'If the text doesn\'t mention the information in the statement, the answer is ___.', answer: 'Not Given', hint: 'Third option' },
                { type: 'multiple_choice', question: '"Rise" in IELTS reading is a paraphrase of:', options: ['Fall', 'Increase', 'Maintain', 'Reduce'], answer: 1 },
              ],
            },
          },
          {
            id: 'ie2l2', title: 'Matching Headings', type: 'reading', xp: 50,
            content: {
              intro: 'Learn to match paragraph headings quickly and accurately!',
              explanation: '📖 **Matching Headings Strategy:**\n\n1. **Read headings first** — understand all options\n2. **Find the topic sentence** — usually the first or second sentence of each paragraph\n3. **Match the main idea** — not just a keyword match\n4. **Watch for distractors** — headings may use different vocabulary\n5. **Use elimination** — cross out used headings\n\n**Common heading types:**\n• *The advantages of...* / *Benefits of...*\n• *The reasons for...* / *Why...*\n• *The history of...* / *Background*\n• *Possible solutions* / *How to address...*\n• *The impact of...* / *Effects of...*',
              key_points: [
                'Match the **overall meaning** of the paragraph to the heading — don\'t match just one keyword that appears.',
                'Distractors are headings that contain words from the paragraph but don\'t capture the main idea — be careful!',
                'The topic sentence (usually the first sentence) gives you the main idea of the paragraph. Read it carefully.',
              ],
              tips: [
                'Start with the paragraph you find easiest — build confidence and narrow down remaining options by elimination.',
                'If a heading mentions something the paragraph only mentions briefly (not as the main point), it\'s probably a distractor.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Where is the main idea of a paragraph usually found?', options: ['The last sentence', 'The middle', 'The first or second sentence', 'It can be anywhere'], answer: 2 },
                { type: 'multiple_choice', question: 'If you see "Benefits of technology" as a heading and the paragraph mentions "advantages of AI", this is:', options: ['A wrong match', 'A correct paraphrase match', 'Not Given', 'A distractor'], answer: 1 },
                { type: 'fill_blank', question: 'When matching headings, cross out ___ after you\'ve used them.', answer: 'used headings', hint: 'Options you\'ve already selected' },
                { type: 'multiple_choice', question: 'The best strategy is to match headings based on:', options: ['Just one keyword', 'The overall main idea of the paragraph', 'The final sentence only', 'Personal opinion'], answer: 1 },
                { type: 'multiple_choice', question: '"The causes of pollution" could be a paraphrase of:', options: ['The effects of pollution', 'What makes the air dirty', 'Solutions to pollution', 'History of pollution'], answer: 1 },
                { type: 'fill_blank', question: 'Headings use ___ vocabulary to avoid simple keyword matching.', answer: 'different', hint: 'This is what makes it tricky' },
              ],
            },
          },
          {
            id: 'ie2l3', title: 'Academic Word List (AWL)', type: 'vocabulary', xp: 50,
            content: {
              intro: 'Master the most important academic vocabulary for IELTS band 7+!',
              vocabulary: [
                { word: 'Substantiate', translation: 'يُثبت/يدعم بأدلة', example: 'Please substantiate your claim with evidence.' },
                { word: 'Ambiguous', translation: 'غامض/ملتبس', example: 'The law is ambiguous and needs clarification.' },
                { word: 'Corroborate', translation: 'يؤيد/يدعم', example: 'The findings corroborate earlier research.' },
                { word: 'Mitigate', translation: 'يخفف/يقلل', example: 'Measures were taken to mitigate the damage.' },
                { word: 'Proliferate', translation: 'ينتشر/يتكاثر', example: 'Social media platforms have proliferated rapidly.' },
                { word: 'Dichotomy', translation: 'ثنائية/تقابل', example: 'There is a clear dichotomy between rich and poor.' },
                { word: 'Catalyst', translation: 'محفز', example: 'The crisis acted as a catalyst for reform.' },
                { word: 'Paradigm', translation: 'نموذج/نمط', example: 'This discovery represents a paradigm shift.' },
                { word: 'Scrutinise', translation: 'يفحص بدقة/يُمحّص', example: 'The data was carefully scrutinised by researchers.' },
                { word: 'Alleviate', translation: 'يُخفف/يُريح', example: 'New policies aim to alleviate poverty in rural areas.' },
              ],
              key_points: [
                'The **Academic Word List (AWL)** contains 570 word families that appear frequently in academic texts — learning these dramatically boosts your reading speed.',
                'Learn words in **word families**: *conclude → conclusion → conclusive → conclusively*. This quadruples your vocabulary instantly.',
                'Use **AWL words in context**: "The research **substantiates** the claim that..." is stronger than "The research shows..."',
              ],
              tips: [
                'Read academic articles on BBC, Guardian, or Scientific American to encounter AWL words naturally in context.',
                'When you learn a new AWL word, immediately write your own example sentence — this cements the meaning much better than just memorising definitions.',
              ],
              fun_fact: 'The Academic Word List was developed by Averil Coxhead in New Zealand. Studies show that knowing the AWL covers approximately 10% of all words in academic texts — making it one of the most efficient vocabulary investments for IELTS learners.',
              exercises: [
                { type: 'multiple_choice', question: '"Mitigate" means:', options: ['Increase', 'Reduce or lessen', 'Prevent completely', 'Investigate'], answer: 1 },
                { type: 'fill_blank', question: 'New research ___ the earlier findings.', answer: 'corroborates', hint: 'Supports or confirms' },
                { type: 'multiple_choice', question: '"Catalyst" in academic writing means:', options: ['A chemical reaction', 'Something that causes or speeds up change', 'A type of research', 'A conclusion'], answer: 1 },
                { type: 'match', question: 'Match the academic words', pairs: [['Substantiate','يثبت بأدلة'],['Ambiguous','غامض'],['Proliferate','ينتشر'],['Paradigm','نموذج']] },
                { type: 'fill_blank', question: 'The digital revolution represents a complete ___ shift in communication.', answer: 'paradigm', hint: 'A new model or framework' },
                { type: 'translate', question: 'Translate: هذا البحث يدعم النظرية السابقة', answer: 'This research corroborates the previous theory', hint: 'corroborates...' },
              ],
            },
          },
          {
            id: 'ie2l4', title: 'Summary & Note Completion', type: 'reading', xp: 50,
            content: {
              intro: 'Fill in summaries and notes accurately from reading passages!',
              explanation: '📖 **Summary Completion Strategy:**\n\n**Rule 1: Word limit matters!**\nIf it says "NO MORE THAN TWO WORDS", never write three.\n\n**Rule 2: Find the section**\nSummaries are usually based on one part of the passage — find which section first.\n\n**Rule 3: The word must fit grammatically**\n• If the blank needs a noun, write a noun\n• If it needs an adjective, write an adjective\n\n**Rule 4: Copy exactly**\nUnless asked to paraphrase, take words directly from the text.\n\n**Common traps:**\n• Plural vs singular: *child* vs *children*\n• Articles: *a/an/the* may or may not count in the word limit',
              key_points: [
                'The word limit is strict — **"NO MORE THAN TWO WORDS"** means any answer with three or more words is automatically wrong.',
                'The answer must **fit grammatically** in the sentence — if the gap is after "a", your answer must be singular and start with a consonant sound.',
                'Summary completions are usually based on **one section** of the text, not spread throughout — find the section first.',
              ],
              tips: [
                'Check if articles (a, an, the) count towards the word limit — this is stated in the instructions. If "AND/OR a number" is allowed, a date like "15 March" counts as two words.',
                'Read around the gap carefully — the words before and after tell you what type of word (noun, adjective, verb) is needed.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'If the instruction says "NO MORE THAN TWO WORDS", which answer is wrong?', options: ['"rising temperatures"', '"the climate"', '"global average temperatures"', '"heat"'], answer: 2 },
                { type: 'fill_blank', question: 'Summary answers must fit ___ in the sentence.', answer: 'grammatically', hint: 'They must make grammatical sense' },
                { type: 'multiple_choice', question: 'Summary completion questions are usually based on:', options: ['The whole passage', 'One specific section', 'The introduction only', 'The conclusion'], answer: 1 },
                { type: 'multiple_choice', question: 'Should you paraphrase in summary completion?', options: ['Always', 'Never', 'Unless instructed to', 'Only with verbs'], answer: 2 },
                { type: 'fill_blank', question: 'Words taken directly from the passage must be copied ___.', answer: 'exactly', hint: 'Without changes' },
                { type: 'multiple_choice', question: '"No more than two words AND/OR a number" means you can write:', options: ['Only numbers', 'Two words only', 'One word + a number, two words, or just a number', 'Three words maximum'], answer: 2 },
              ],
            },
          },
          {
            id: 'ie2l5', title: 'Complex Sentence Structures', type: 'grammar', xp: 50,
            content: {
              intro: 'Write sophisticated sentences that earn you Grammatical Range marks!',
              explanation: '📝 **Complex Structures for IELTS Band 7+:**\n\n**Participial phrases:**\n• *Having studied abroad, she understood different cultures.*\n• *Determined to succeed, he studied sixteen hours a day.*\n\n**Nominal clauses:**\n• *What is often overlooked is the human cost.*\n• *The fact that education improves outcomes is well established.*\n\n**Advanced adverbials:**\n• *Despite the challenges, (the team succeeded.)*\n• *Given the evidence, (we must act.)*\n• *Provided that (conditions are met), (change is possible.)*\n\n**Inversion in formal writing:**\n• *Not only does education improve earnings, but it also...*\n• *Under no circumstances should we ignore...*',
              key_points: [
                '**Participial phrases** let you combine two ideas elegantly: "Having analysed the data, the researchers concluded..." avoids repeating "the researchers" twice.',
                '**Nominal clauses** ("What is important is...") are a hallmark of Band 7+ writing — they shift focus and add sophistication.',
                '**Inversion** ("Not only does X..., but Y also...") is one of the clearest signals of advanced grammatical range.',
              ],
              common_mistakes: [
                { wrong: 'Despite of the challenges, they succeeded.', correct: 'Despite the challenges, they succeeded.', explanation: '"Despite" is already a preposition — never add "of" after it. Use "In spite of" if you want to add "of".' },
                { wrong: 'Not only he studies hard, but also works.', correct: 'Not only does he study hard, but he also works.', explanation: 'Inversion requires auxiliary verb before subject: "Not only DOES he STUDY..."' },
              ],
              tips: [
                'Don\'t try to use every complex structure in one essay — this looks forced. Aim for 2–3 complex structures used naturally and correctly.',
                'Practise rewriting simple sentences using advanced structures: "He studied hard. He succeeded." → "Having studied hard, he succeeded."',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Which uses a participial phrase correctly?', options: ['Having graduated, she found a job quickly.', 'She having graduated found a job.', 'When she have graduated, she found work.', 'Graduate having, she found work.'], answer: 0 },
                { type: 'fill_blank', question: '___ the evidence, the government must take action.', answer: 'Given', hint: 'A formal adverbial starter' },
                { type: 'multiple_choice', question: '"Not only does he speak French, ___" — what comes next?', options: ['but also Spanish.', 'but he also speaks Spanish.', 'and he speak Spanish.', 'he also speaks Spanish.'], answer: 1 },
                { type: 'fill_blank', question: 'What is often ___ is the long-term impact on communities.', answer: 'overlooked', hint: 'Nominal clause: What is often...' },
                { type: 'multiple_choice', question: 'Which is most appropriate for an IELTS Task 2 essay?', options: ['The thing is, climate change is bad.', 'What is evident is that climate change poses a critical threat.', 'Climate change = bad. That\'s obvious.', 'Everyone knows climate change is a problem.'], answer: 1 },
                { type: 'translate', question: 'Translate: بالرغم من التحديات، تمكنت الشركة من النجاح', answer: 'Despite the challenges the company managed to succeed', hint: 'Despite the challenges...' },
              ],
            },
          },
          {
            id: 'ie2l6', title: 'IELTS Task 1: Process Diagrams', type: 'writing', xp: 50,
            content: {
              intro: 'Describe how processes work — a common IELTS Task 1 question type!',
              explanation: '📊 **Process Diagram Language:**\n\n**Sequencing:**\n• *First, ... / Initially,...*\n• *Then / Next / Subsequently,...*\n• *After this / Following this,...*\n• *Finally / Eventually / Lastly,...*\n\n**Passive voice (essential for processes):**\n• *Raw materials **are fed** into the machine.*\n• *The liquid **is heated** to 80°C.*\n• *The final product **is packaged** and **distributed**.*\n\n**Stage descriptions:**\n• *At the first stage,...*\n• *In the second phase,...*\n• *The process concludes with...*',
              key_points: [
                'Process diagrams almost always use the **passive voice** because we focus on what happens to things, not who does it.',
                'Use **sequencing adverbs** precisely: "initially", "subsequently", "following this", "ultimately" — avoid repeating "then" throughout.',
                'Count the stages before writing and mention the total in your overview: "The diagram illustrates an eight-stage process..."',
              ],
              tips: [
                'Trace through the entire process with a pencil before writing — understand the full cycle so you don\'t miss any steps.',
                'For cyclical processes (e.g., water cycle), note where the cycle starts and ends — use "The cycle begins when..." and "...returning to the initial stage."',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Process diagrams typically use which voice?', options: ['Active voice', 'Passive voice', 'Both equally', 'Neither'], answer: 1 },
                { type: 'fill_blank', question: '___ the process begins when raw materials are collected.', answer: 'Initially', hint: 'A word for "at the beginning"' },
                { type: 'multiple_choice', question: 'Which correctly describes a process step?', options: ['Workers heat the liquid.', 'The liquid is heated to 80°C.', 'The liquid heats itself.', 'Heating the liquid by workers.'], answer: 1 },
                { type: 'fill_blank', question: '___ this, the materials are sorted and cleaned.', answer: 'Following', hint: 'A sequencing word meaning "after"' },
                { type: 'multiple_choice', question: 'The overview in a process diagram describes:', options: ['Every single stage in detail', 'The overall number of stages and general nature of the process', 'Your opinion of the process', 'Which stage is most important'], answer: 1 },
                { type: 'translate', question: 'Translate: يتم تسخين السائل أولاً ثم تصفيته', answer: 'The liquid is first heated and then filtered', hint: 'is heated... and then filtered...' },
              ],
            },
          },
        ],
      },
      {
        id: 'ie3', title: 'Speaking Excellence', icon: '🎤',
        lessons: [
          {
            id: 'ie3l1', title: 'IELTS Speaking Part 2: Long Turn', type: 'speaking', xp: 50,
            content: {
              intro: 'Deliver a fluent, well-structured 2-minute monologue!',
              explanation: '🎤 **IELTS Speaking Part 2 — The Cue Card:**\n\nYou get a card with a topic and 4 bullet points. You have 1 minute to prepare, then speak for 1-2 minutes.\n\n**Structure your talk:**\n• **Introduction:** Name the topic\n• **Point 1** (bullet 1): Describe/explain\n• **Point 2** (bullet 2): Add detail\n• **Point 3** (bullet 3): Example or story\n• **Conclusion:** Why it\'s memorable/important\n\n**Fluency tips:**\n• Don\'t panic if you lose your place — say *"Let me just think about that..."*\n• Use connectors: *What\'s more, Not only that, In particular*\n• Aim to speak for the FULL 2 minutes\n• The examiner will stop you — don\'t worry about overrunning',
              key_points: [
                'Use your **1-minute preparation time** wisely: jot down 3–4 keywords for each bullet point — don\'t write full sentences.',
                'Start speaking with a **clear introduction**: "I\'d like to talk about a time when..." or "The person I\'m going to describe is..."',
                'Fill time naturally by adding **sensory details and emotions**: not just "what" happened but "how it felt" and "why it mattered".',
              ],
              tips: [
                'Practise the Part 2 "long turn" daily with a timer — describe a place, person, event, or object for exactly 2 minutes. Record yourself.',
                'If you finish your points early, add a concluding reflection: "Looking back, this experience taught me that..." — this fills time and sounds mature.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How long do you have to prepare for Part 2?', options: ['30 seconds', '1 minute', '2 minutes', '5 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'How long should you speak in Part 2?', options: ['30 seconds', '45 seconds', '1-2 minutes', '3-4 minutes'], answer: 2 },
                { type: 'fill_blank', question: 'If you lose your place, say: "Let me just ___ about that."', answer: 'think', hint: 'A natural pause phrase' },
                { type: 'multiple_choice', question: 'You should aim to:', options: ['Finish before 1 minute', 'Fill the full 2 minutes', 'Speak as fast as possible', 'Use bullet points in your notes'], answer: 1 },
                { type: 'fill_blank', question: 'In Part 2, you speak about a topic given on a ___ card.', answer: 'cue', hint: 'The name for the card' },
                { type: 'multiple_choice', question: 'Which connector adds more information?', options: ['However', 'What\'s more', 'On the other hand', 'Although'], answer: 1 },
              ],
            },
          },
          {
            id: 'ie3l2', title: 'IELTS Speaking Part 3: Discussion', type: 'speaking', xp: 50,
            content: {
              intro: 'Handle abstract IELTS Part 3 questions with confidence!',
              explanation: '🎤 **IELTS Speaking Part 3:**\n\nAbstract discussion questions related to the Part 2 topic.\n\n**Types of questions:**\n• *Why do you think...?* (reasons)\n• *How has... changed?* (changes over time)\n• *Do you think... will...?* (future speculation)\n• *What are the advantages/disadvantages of...?*\n• *How important is...?*\n\n**Answering strategy (SPEC):**\n• **S**tate your view\n• **P**rovide a reason\n• **E**xample to support\n• **C**ontrast / alternative view\n\n**Speculating about the future:**\n• *I think it is likely that...*\n• *It seems probable that...*\n• *There\'s a strong possibility that...*',
              key_points: [
                'Part 3 tests your ability to discuss **abstract topics** (society, technology, education) — not just personal experiences.',
                'Always give a **developed answer**: State + Reason + Example + Counter view. Never answer with just one sentence.',
                'Show **lexical range** by linking ideas: "Furthermore...", "On the other hand...", "What\'s more...", "Nevertheless..."',
              ],
              tips: [
                'If a question is too difficult, buy yourself thinking time: "That\'s an interesting question. I\'d say that..." or "It\'s difficult to generalise, but in my view..."',
                'Examiners want to hear you reason, not just list points. Say WHY something is true, not just THAT it is.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Part 3 questions are about:', options: ['Personal experiences', 'Abstract and general topics', 'Reading passages', 'Grammar structures'], answer: 1 },
                { type: 'fill_blank', question: 'There is a strong ___ that AI will change many jobs.', answer: 'possibility', hint: 'Speculating about the future' },
                { type: 'multiple_choice', question: 'When asked "Why do you think...?", you should give:', options: ['Just one word', 'Yes or No', 'Reasons and examples', 'Only statistics'], answer: 2 },
                { type: 'fill_blank', question: 'SPEC: State, Provide, Example, and ___.', answer: 'Contrast', hint: 'The fourth element' },
                { type: 'multiple_choice', question: '"It seems probable that renewable energy will dominate by 2050." This is:', options: ['A fact', 'Future speculation', 'A past regret', 'A condition'], answer: 1 },
                { type: 'translate', question: 'Translate: أعتقد أنه من المرجح أن التعليم الرقمي سيصبح أكثر شيوعاً', answer: 'I think it is likely that digital education will become more common', hint: 'I think it is likely that...' },
              ],
            },
          },
          {
            id: 'ie3l3', title: 'Pronunciation & Intonation', type: 'speaking', xp: 50,
            content: {
              intro: 'Improve clarity, rhythm, and natural-sounding English!',
              explanation: '🗣️ **Pronunciation for IELTS Band 7+:**\n\n**Word stress (key for comprehension):**\n• 2-syllable nouns: **TA**ble, **CIT**y, **BO**ok\n• 2-syllable verbs: re**CORD**, ex**PORT**, pro**DUCE**\n• Adjectives on -ic: e-con-**OM**-ic, sci-en-**TIF**-ic\n\n**Sentence stress (content words get stress):**\n• *I WANT to BUY a NEW CAR.*\n• Function words (a, the, to, at) are usually unstressed\n\n**Intonation patterns:**\n• Falling ↘ — statements, commands: *This is great.↘*\n• Rising ↗ — yes/no questions: *Are you ready?↗*\n• Rise-fall ↗↘ — showing surprise or emphasis\n\n**Linking sounds (connected speech):**\n• *a_lot* (the a links to lot)\n• *turn_it_off* → sounds like "tur-nit-off"',
              key_points: [
                '**Word stress** can change meaning: "**RE**cord" (noun) vs "re**CORD**" (verb). Getting this right immediately sounds more native.',
                '**Sentence stress** focuses on content words (nouns, main verbs, adjectives). Function words (a, the, in, at) are usually reduced.',
                '**Linking sounds** make speech flow naturally — practice connecting words like "turn it off" → "tur-nit-off" to sound fluent.',
              ],
              tips: [
                'Record yourself answering a question, then listen back critically — you\'ll immediately hear unnatural stress patterns you can\'t notice while speaking.',
                'Watch TED Talks and shadow (repeat out loud) what the speaker says, mimicking their exact stress and intonation patterns.',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'In "economy", which syllable is stressed?', options: ['e-', '-con-', '-o-', '-my'], answer: 1 },
                { type: 'multiple_choice', question: 'A rising intonation (↗) is used for:', options: ['Statements', 'Commands', 'Yes/No questions', 'Giving facts'], answer: 2 },
                { type: 'fill_blank', question: 'In "import" (verb), the stress falls on the ___ syllable.', answer: 'second', hint: 'im-PORT' },
                { type: 'multiple_choice', question: '"a lot" sounds like "a_lot" because of:', options: ['Sentence stress', 'Word stress', 'Linking sounds', 'Falling intonation'], answer: 2 },
                { type: 'multiple_choice', question: 'Which words are typically unstressed in a sentence?', options: ['Nouns and adjectives', 'Verbs and adverbs', 'Articles and prepositions', 'All words equally'], answer: 2 },
                { type: 'fill_blank', question: 'Falling intonation ↘ is used for ___ sentences.', answer: 'statement', hint: 'Declarative sentences' },
              ],
            },
          },
          {
            id: 'ie3l4', title: 'IELTS Topic Vocabulary: Society & Technology', type: 'vocabulary', xp: 50,
            content: {
              intro: 'Build the topic vocabulary you need for IELTS Writing and Speaking!',
              vocabulary: [
                { word: 'Digital divide', translation: 'الهوة الرقمية', example: 'The digital divide separates those with and without internet access.' },
                { word: 'Surveillance', translation: 'مراقبة', example: 'Governments use surveillance cameras in public spaces.' },
                { word: 'Automation', translation: 'أتمتة', example: 'Automation is replacing many factory jobs.' },
                { word: 'Demographic shift', translation: 'تحول ديموغرافي', example: 'An ageing population represents a major demographic shift.' },
                { word: 'Socioeconomic inequality', translation: 'عدم المساواة الاجتماعية والاقتصادية', example: 'Education can help reduce socioeconomic inequality.' },
                { word: 'Infrastructure', translation: 'بنية تحتية', example: 'Developing countries need better transport infrastructure.' },
                { word: 'Transparency', translation: 'شفافية', example: 'Transparency in government builds public trust.' },
                { word: 'Sustainable development', translation: 'تنمية مستدامة', example: 'We need sustainable development to protect future generations.' },
                { word: 'Globalisation', translation: 'عولمة', example: 'Globalisation has connected economies and cultures worldwide.' },
                { word: 'Marginalised communities', translation: 'مجتمعات مهمشة', example: 'Technology can empower marginalised communities if access is provided.' },
              ],
              key_points: [
                'IELTS examiners reward **topic-specific vocabulary** — using "socioeconomic inequality" instead of "poor and rich people" signals Band 7+.',
                'Learn words in **collocations**: "address inequality", "combat poverty", "tackle climate change", "foster innovation".',
                'Technology vocabulary is extremely common in IELTS tasks — know both **benefits** ("automation increases efficiency") and **drawbacks** ("surveillance threatens privacy").',
              ],
              tips: [
                'Build a "topic bank" — for each theme (technology, education, environment, health), learn 8–10 key phrases and practice using them in sentences.',
                'Read IELTS Task 2 sample answers on ielts.org and highlight advanced topic vocabulary — then add it to your own active vocabulary.',
              ],
              fun_fact: 'IELTS is taken by over 3.5 million people worldwide every year, making it the world\'s most popular high-stakes English language test. The most common IELTS Task 2 topics are: technology, education, environment, health, and society.',
              exercises: [
                { type: 'multiple_choice', question: '"Automation" means:', options: ['Manual labour', 'Machine-based processes replacing humans', 'Digital communication', 'Global trade'], answer: 1 },
                { type: 'fill_blank', question: 'Better ___ can reduce travel times and boost the economy.', answer: 'infrastructure', hint: 'Roads, bridges, internet cables...' },
                { type: 'match', question: 'Match the terms', pairs: [['Digital divide','الهوة الرقمية'],['Automation','أتمتة'],['Transparency','شفافية'],['Infrastructure','بنية تحتية']] },
                { type: 'fill_blank', question: '___ development ensures resources are available for future generations.', answer: 'Sustainable', hint: 'Long-term, environmentally friendly' },
                { type: 'multiple_choice', question: '"Demographic shift" refers to:', options: ['Changes in technology', 'Changes in population characteristics', 'Changes in government policy', 'Changes in culture'], answer: 1 },
                { type: 'translate', question: 'Translate: الحد من عدم المساواة هدف عالمي', answer: 'Reducing inequality is a global goal', hint: 'Reducing inequality...' },
              ],
            },
          },
          {
            id: 'ie3l5', title: 'Mock IELTS Writing Task 2', type: 'writing', xp: 50,
            content: {
              intro: 'Practice a full Task 2 question with model answer analysis!',
              explanation: '✍️ **Task 2 Question:**\n*"Some people believe that social media has had a negative effect on society. Others disagree. Discuss both views and give your own opinion."*\n\n**Model Answer Structure:**\n\n**Paragraph 1 — Introduction:**\nBackground sentence → Thesis (your opinion)\n\n**Paragraph 2 — View 1 (negative effects):**\nTopic sentence → Evidence → Example\n*Social media can be harmful because... Research by Harvard (2022) found that...*\n\n**Paragraph 3 — View 2 (positive effects):**\nTopic sentence → Evidence → Example\n*On the other hand, social media enables... For instance, during the Arab Spring...*\n\n**Paragraph 4 — Conclusion:**\nRestate both views → Your opinion + reason\n\n**High-score vocabulary:**\n*exacerbate, foster, proliferate, engender, detrimental*',
              key_points: [
                'A "Discuss both views" essay must present **both sides fairly** before giving your own opinion — don\'t ignore one side.',
                'Each body paragraph needs a **topic sentence**, **supporting point**, and a **specific example or evidence**.',
                'Your opinion should be **consistent**: state it in the introduction and reaffirm it in the conclusion.',
              ],
              tips: [
                'Time yourself strictly: 40 minutes for Task 2. Spend 5 minutes planning, 30 minutes writing, 5 minutes checking.',
                'Vary your sentence openings: don\'t start every sentence with "I". Try "It can be argued that...", "One key advantage is...", "As a result, ..."',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'A "Discuss both views" essay should:', options: ['Only argue one side', 'Present both sides AND your opinion', 'Avoid expressing an opinion', 'Have only two paragraphs'], answer: 1 },
                { type: 'fill_blank', question: 'Excessive social media use can ___ feelings of anxiety.', answer: 'exacerbate', hint: 'Make worse' },
                { type: 'multiple_choice', question: 'The THESIS statement should appear in:', options: ['Body paragraph 1', 'The introduction', 'The conclusion only', 'Every paragraph'], answer: 1 },
                { type: 'fill_blank', question: 'Social media can ___ a sense of global community.', answer: 'foster', hint: 'Encourage or develop' },
                { type: 'multiple_choice', question: 'The conclusion should:', options: ['Introduce a new argument', 'Restate the thesis and summarize', 'Only mention the opposing view', 'Use bullet points'], answer: 1 },
                { type: 'translate', question: 'Translate: وسائل التواصل الاجتماعي لها آثار ضارة على صحة الشباب', answer: 'Social media has detrimental effects on young people\'s health', hint: 'has detrimental effects on...' },
              ],
            },
          },
          {
            id: 'ie3l6', title: 'IELTS Band Score Maximiser', type: 'reading', xp: 50,
            content: {
              intro: 'Understand exactly what examiners look for at each band!',
              explanation: '🎯 **IELTS Band Descriptors:**\n\n**Writing (4 criteria × 25% each):**\n• **Task Achievement:** Did you answer all parts?\n• **Coherence & Cohesion:** Is it logically organised?\n• **Lexical Resource:** Range and accuracy of vocabulary\n• **Grammatical Range:** Complex structures, accuracy\n\n**Band 7 Writing needs:**\n✅ 250+ words for Task 2 · 150+ for Task 1\n✅ A clear position maintained throughout\n✅ Well-developed paragraphs with examples\n✅ A variety of complex structures\n✅ Accurate use of collocations\n\n**Common reasons for Band 5-6:**\n❌ Memorised/template responses\n❌ Vocabulary errors that affect meaning\n❌ Off-topic content\n❌ Short answers',
              key_points: [
                'Your score is the **average** of all four criteria — a weakness in one area drags your whole score down.',
                '**Task Achievement** is failed if you don\'t address ALL parts of the question — always re-read the question before concluding.',
                'Band 7 requires "sufficient range of vocabulary to allow flexibility and precision" — this means using words accurately, not just impressively.',
              ],
              tips: [
                'After every practice essay, self-assess: score yourself on each of the 4 criteria (1–9). Identify your weakest criterion and focus your next week of study on that.',
                'For Speaking Band 7, you need "wide range of vocabulary used flexibly and accurately" + "errors only occur as \'slips\'" — accuracy matters as much as range.',
              ],
              fun_fact: 'The IELTS band scale goes from 1 (non-user) to 9 (expert user). Most universities require Band 6.5–7.5. Interestingly, a Band 9 is incredibly rare — even native English speakers don\'t always achieve it!',
              exercises: [
                { type: 'multiple_choice', question: 'Lexical Resource refers to:', options: ['Grammar accuracy', 'Vocabulary range and accuracy', 'Essay structure', 'Sentence length'], answer: 1 },
                { type: 'fill_blank', question: 'Writing Task 2 must be at least ___ words.', answer: '250', hint: 'The minimum word count' },
                { type: 'multiple_choice', question: 'Which is a reason for a lower band score?', options: ['Using complex grammar', 'Having a clear thesis', 'Using memorised template responses', 'Writing more than 250 words'], answer: 2 },
                { type: 'fill_blank', question: 'Coherence & Cohesion refers to logical ___ of ideas.', answer: 'organisation', hint: 'How ideas are arranged and connected' },
                { type: 'multiple_choice', question: 'To improve Grammatical Range, you should use:', options: ['Only simple sentences', 'The same sentence structure throughout', 'A variety of complex structures', 'Very long sentences only'], answer: 2 },
                { type: 'translate', question: 'Translate: تحقيق المهمة يعني الإجابة على جميع أجزاء السؤال', answer: 'Task achievement means answering all parts of the question', hint: 'Task achievement means...' },
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
