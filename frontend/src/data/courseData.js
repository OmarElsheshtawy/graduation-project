// ─── Complete LinguaBridge Course Data ────────────────────────────────────
// 6 levels × 5 units × 4 lessons each = 120 lessons total
// Exercise types: multiple_choice, fill_blank, match, reorder, translate, speaking

export const COURSES = [

  // ════════════════════════════════════════════════════════
  //  BEGINNER (A1–A2)
  // ════════════════════════════════════════════════════════
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
        id: 'b1',
        title: 'Greetings & Introductions',
        icon: '👋',
        lessons: [
          {
            id: 'b1l1',
            title: 'Hello & Goodbye',
            type: 'vocabulary',
            xp: 20,
            content: {
              intro: 'Learn how to greet people in English!',
              vocabulary: [
                { word: 'Hello', translation: 'مرحبا', example: 'Hello! My name is Sarah.' },
                { word: 'Hi', translation: 'مرحبا', example: 'Hi! How are you?' },
                { word: 'Good morning', translation: 'صباح الخير', example: 'Good morning! Did you sleep well?' },
                { word: 'Good afternoon', translation: 'مساء الخير', example: 'Good afternoon, Mr. Smith.' },
                { word: 'Good evening', translation: 'مساء الخير', example: 'Good evening! Welcome.' },
                { word: 'Goodbye', translation: 'وداعاً', example: 'Goodbye! See you tomorrow.' },
                { word: 'Bye', translation: 'باي', example: 'Bye! Have a nice day.' },
                { word: 'See you later', translation: 'أراك لاحقاً', example: 'See you later, friend!' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How do you greet someone in the morning?', options: ['Good evening', 'Good morning', 'Goodbye', 'Good night'], answer: 1 },
                { type: 'multiple_choice', question: 'Which word means "مرحبا"?', options: ['Goodbye', 'Hello', 'Sorry', 'Please'], answer: 1 },
                { type: 'fill_blank', question: 'Complete: "___ morning! How are you?"', answer: 'Good', hint: 'It starts with G' },
                { type: 'match', question: 'Match the greetings with their meanings', pairs: [['Hello','مرحبا'],['Goodbye','وداعاً'],['Good morning','صباح الخير'],['See you later','أراك لاحقاً']] },
                { type: 'multiple_choice', question: 'What do you say when you leave?', options: ['Hello', 'Good morning', 'Goodbye', 'Please'], answer: 2 },
                { type: 'reorder', question: 'Put the words in order:', words: ['My', 'name', 'is', 'Ahmed'], answer: 'My name is Ahmed' },
              ],
            },
          },
          {
            id: 'b1l2',
            title: 'My Name Is...',
            type: 'grammar',
            xp: 20,
            content: {
              intro: 'Learn how to introduce yourself using "I am" and "My name is".',
              explanation: '📝 **Introducing Yourself:**\n\n• **My name is** + [name]\n  *My name is Sara.*\n\n• **I am** + [name] (informal)\n  *I am Ahmed.*\n\n• **I\'m** = I am (short form)\n  *I\'m from Egypt.*\n\n• **Nice to meet you** — say this when meeting someone new!',
              examples: [
                'My name is Sara. I\'m from Egypt.',
                'Hello! I\'m Ahmed. Nice to meet you!',
                'Hi! My name is Lisa. What\'s your name?',
              ],
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
            id: 'b1l3',
            title: 'Where Are You From?',
            type: 'vocabulary',
            xp: 20,
            content: {
              intro: 'Learn to talk about where you are from!',
              vocabulary: [
                { word: 'I am from Egypt', translation: 'أنا من مصر', example: 'I am from Egypt, a beautiful country.' },
                { word: 'Where are you from?', translation: 'من أين أنت؟', example: 'Where are you from? I am from Brazil.' },
                { word: 'Country', translation: 'دولة/بلد', example: 'What country are you from?' },
                { word: 'City', translation: 'مدينة', example: 'I live in the city of Cairo.' },
                { word: 'I live in', translation: 'أعيش في', example: 'I live in Cairo.' },
                { word: 'Originally', translation: 'في الأصل', example: 'I am originally from Alexandria.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How do you ask someone where they are from?', options: ['What is your name?', 'Where are you from?', 'How old are you?', 'Do you speak English?'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ from Egypt.', answer: 'am', hint: 'Form of "to be"' },
                { type: 'translate', question: 'Translate: "أنا من مصر"', answer: 'I am from Egypt', hint: 'Start with "I am from"' },
                { type: 'reorder', question: 'Reorder: [from / you / Where / are]', words: ['from', 'you', 'Where', 'are'], answer: 'Where are you from' },
                { type: 'multiple_choice', question: 'What does "city" mean?', options: ['دولة', 'قارة', 'مدينة', 'قرية'], answer: 2 },
              ],
            },
          },
          {
            id: 'b1l4',
            title: 'Numbers 1–20',
            type: 'vocabulary',
            xp: 20,
            content: {
              intro: 'Master the numbers 1 to 20 in English!',
              vocabulary: [
                { word: 'One (1)', translation: 'واحد', example: 'I have one brother.' },
                { word: 'Two (2)', translation: 'اثنان', example: 'She has two cats.' },
                { word: 'Three (3)', translation: 'ثلاثة', example: 'There are three books.' },
                { word: 'Four (4)', translation: 'أربعة', example: 'I am four years old.' },
                { word: 'Five (5)', translation: 'خمسة', example: 'Five fingers on each hand.' },
                { word: 'Ten (10)', translation: 'عشرة', example: 'Ten students in the class.' },
                { word: 'Fifteen (15)', translation: 'خمسة عشر', example: 'Fifteen minutes to go.' },
                { word: 'Twenty (20)', translation: 'عشرون', example: 'Twenty days left.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is "خمسة" in English?', options: ['Four', 'Six', 'Five', 'Seven'], answer: 2 },
                { type: 'multiple_choice', question: 'How do you write 15 in words?', options: ['Fifty', 'Fifteen', 'Twelve', 'Twenty'], answer: 1 },
                { type: 'fill_blank', question: 'One, two, ___, four, five', answer: 'three', hint: 'The number between 2 and 4' },
                { type: 'multiple_choice', question: 'What comes after nineteen?', options: ['Eighteen', 'Twenty-one', 'Twenty', 'Eleven'], answer: 2 },
                { type: 'fill_blank', question: 'I have ___ (10) apples.', answer: 'ten', hint: 'Write the number in words' },
              ],
            },
          },
        ],
      },
      {
        id: 'b2',
        title: 'Colors & Shapes',
        icon: '🎨',
        lessons: [
          {
            id: 'b2l1',
            title: 'Basic Colors',
            type: 'vocabulary',
            xp: 20,
            content: {
              intro: 'Learn the most common colors in English!',
              vocabulary: [
                { word: 'Red', translation: 'أحمر', example: 'The apple is red.' },
                { word: 'Blue', translation: 'أزرق', example: 'The sky is blue.' },
                { word: 'Green', translation: 'أخضر', example: 'Grass is green.' },
                { word: 'Yellow', translation: 'أصفر', example: 'The sun is yellow.' },
                { word: 'Black', translation: 'أسود', example: 'The night is black.' },
                { word: 'White', translation: 'أبيض', example: 'Snow is white.' },
                { word: 'Orange', translation: 'برتقالي', example: 'Oranges are orange.' },
                { word: 'Purple', translation: 'بنفسجي', example: 'Grapes are purple.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What color is the sky?', options: ['Red', 'Green', 'Blue', 'Yellow'], answer: 2 },
                { type: 'match', question: 'Match colors with their Arabic meanings', pairs: [['Red','أحمر'],['Blue','أزرق'],['Green','أخضر'],['White','أبيض']] },
                { type: 'fill_blank', question: 'The apple is ___.', answer: 'red', hint: 'A warm color' },
                { type: 'multiple_choice', question: 'What does "أسود" mean in English?', options: ['White', 'Black', 'Gray', 'Brown'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [is / sky / blue / The]', words: ['is', 'sky', 'blue', 'The'], answer: 'The sky is blue' },
              ],
            },
          },
          {
            id: 'b2l2', title: 'Shapes & Sizes', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn shapes and size words!',
              vocabulary: [
                { word: 'Circle', translation: 'دائرة', example: 'A wheel is a circle.' },
                { word: 'Square', translation: 'مربع', example: 'A box is a square.' },
                { word: 'Triangle', translation: 'مثلث', example: 'A triangle has three sides.' },
                { word: 'Big / Large', translation: 'كبير', example: 'The elephant is big.' },
                { word: 'Small / Little', translation: 'صغير', example: 'The ant is small.' },
                { word: 'Tall', translation: 'طويل', example: 'He is very tall.' },
                { word: 'Short', translation: 'قصير', example: 'She is short.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'How many sides does a triangle have?', options: ['Two', 'Three', 'Four', 'Five'], answer: 1 },
                { type: 'fill_blank', question: 'An elephant is ___.', answer: 'big', hint: 'Opposite of small' },
                { type: 'multiple_choice', question: 'What shape is a wheel?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 2 },
                { type: 'translate', question: 'Translate: "الفيل كبير"', answer: 'The elephant is big', hint: 'Use "The ... is ..."' },
              ],
            },
          },
          {
            id: 'b2l3', title: 'Family Members', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn words for family members!',
              vocabulary: [
                { word: 'Mother / Mom', translation: 'أم', example: 'My mother is a teacher.' },
                { word: 'Father / Dad', translation: 'أب', example: 'My father works in a hospital.' },
                { word: 'Brother', translation: 'أخ', example: 'I have two brothers.' },
                { word: 'Sister', translation: 'أخت', example: 'My sister is funny.' },
                { word: 'Grandmother', translation: 'جدة', example: 'My grandmother makes great food.' },
                { word: 'Grandfather', translation: 'جد', example: 'My grandfather is 75 years old.' },
                { word: 'Son', translation: 'ابن', example: 'Their son is a doctor.' },
                { word: 'Daughter', translation: 'ابنة', example: 'She has one daughter.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is "أخت" in English?', options: ['Brother', 'Mother', 'Sister', 'Daughter'], answer: 2 },
                { type: 'fill_blank', question: 'My ___ is a teacher. (أم)', answer: 'mother', hint: 'Female parent' },
                { type: 'match', question: 'Match family words', pairs: [['Mother','أم'],['Father','أب'],['Brother','أخ'],['Sister','أخت']] },
                { type: 'multiple_choice', question: '"Grandfather" means:', options: ['جدة', 'جد', 'أب', 'عم'], answer: 1 },
              ],
            },
          },
          {
            id: 'b2l4', title: 'Days of the Week', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn the 7 days of the week!',
              vocabulary: [
                { word: 'Monday', translation: 'الاثنين', example: 'School starts on Monday.' },
                { word: 'Tuesday', translation: 'الثلاثاء', example: 'I have a class on Tuesday.' },
                { word: 'Wednesday', translation: 'الأربعاء', example: 'Wednesday is the middle of the week.' },
                { word: 'Thursday', translation: 'الخميس', example: 'We meet on Thursday.' },
                { word: 'Friday', translation: 'الجمعة', example: 'Friday is a holiday.' },
                { word: 'Saturday', translation: 'السبت', example: 'I relax on Saturday.' },
                { word: 'Sunday', translation: 'الأحد', example: 'Sunday is a family day.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What day comes after Monday?', options: ['Sunday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 2 },
                { type: 'fill_blank', question: '___ is the last day of the week.', answer: 'Sunday', hint: 'Starts with S' },
                { type: 'multiple_choice', question: 'What is "الجمعة" in English?', options: ['Thursday', 'Saturday', 'Sunday', 'Friday'], answer: 3 },
                { type: 'reorder', question: 'What is the correct order?', words: ['Monday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 'Monday Tuesday Wednesday Thursday' },
              ],
            },
          },
        ],
      },
      {
        id: 'b3',
        title: 'Simple Sentences',
        icon: '💬',
        lessons: [
          {
            id: 'b3l1', title: 'I am / You are / He is', type: 'grammar', xp: 20,
            content: {
              intro: 'Learn the verb "to be" — the most important verb in English!',
              explanation: '📝 **The verb "to be":**\n\n| Subject | Verb | Short |\n|---------|------|-------|\n| I | am | I\'m |\n| You | are | You\'re |\n| He | is | He\'s |\n| She | is | She\'s |\n| It | is | It\'s |\n| We | are | We\'re |\n| They | are | They\'re |\n\n✅ **Examples:**\n• I am a student.\n• She is a teacher.\n• They are happy.',
              examples: ['I am happy.', 'You are kind.', 'He is tall.', 'She is smart.', 'We are friends.'],
              exercises: [
                { type: 'fill_blank', question: 'She ___ a doctor.', answer: 'is', hint: 'He/She/It + ?' },
                { type: 'multiple_choice', question: 'I ___ a student.', options: ['is', 'are', 'am', 'be'], answer: 2 },
                { type: 'fill_blank', question: 'They ___ my friends.', answer: 'are', hint: 'Plural subjects use this' },
                { type: 'multiple_choice', question: '"We are" can be shortened to:', options: ["We're", "We'd", "We've", "We'll"], answer: 0 },
                { type: 'reorder', question: 'Reorder: [teacher / a / She / is]', words: ['teacher', 'a', 'She', 'is'], answer: 'She is a teacher' },
                { type: 'fill_blank', question: 'He ___ very tall.', answer: 'is', hint: 'Singular third person' },
              ],
            },
          },
          {
            id: 'b3l2', title: 'Questions with "Are you?"', type: 'grammar', xp: 20,
            content: {
              intro: 'Learn to ask and answer simple questions!',
              explanation: '📝 **Yes/No Questions with "to be":**\n\nTo make a question, put the verb BEFORE the subject:\n\n• *You are a student.* → **Are you a student?**\n• *She is happy.* → **Is she happy?**\n• *They are ready.* → **Are they ready?**\n\n✅ **Short answers:**\n• Are you a student? → **Yes, I am.** / **No, I\'m not.**\n• Is she happy? → **Yes, she is.** / **No, she isn\'t.**',
              examples: ['Are you ready? — Yes, I am!', 'Is he your brother? — No, he isn\'t.', 'Are they students? — Yes, they are.'],
              exercises: [
                { type: 'reorder', question: 'Make a question: [you / Are / student / a]', words: ['you', 'Are', 'student', 'a'], answer: 'Are you a student' },
                { type: 'multiple_choice', question: 'Short answer for "Are you okay?" = Yes, ___', options: ['you are', 'I am', 'he is', 'I be'], answer: 1 },
                { type: 'fill_blank', question: '___ she your sister?', answer: 'Is', hint: 'Question with he/she/it' },
                { type: 'multiple_choice', question: 'Which is correct?', options: ['Are you ready?', 'You are ready?', 'Is you ready?', 'Am you ready?'], answer: 0 },
              ],
            },
          },
          {
            id: 'b3l3', title: 'My Daily Routine', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Talk about what you do every day!',
              vocabulary: [
                { word: 'Wake up', translation: 'أستيقظ', example: 'I wake up at 7 AM.' },
                { word: 'Eat breakfast', translation: 'أتناول الفطور', example: 'I eat breakfast at 8 AM.' },
                { word: 'Go to school/work', translation: 'أذهب للمدرسة/العمل', example: 'I go to school at 9 AM.' },
                { word: 'Have lunch', translation: 'أتناول الغداء', example: 'We have lunch at 1 PM.' },
                { word: 'Come home', translation: 'أعود للبيت', example: 'I come home at 5 PM.' },
                { word: 'Have dinner', translation: 'أتناول العشاء', example: 'We have dinner at 8 PM.' },
                { word: 'Go to sleep', translation: 'أذهب للنوم', example: 'I go to sleep at 11 PM.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What do you do first in the morning?', options: ['Have dinner', 'Wake up', 'Go to sleep', 'Have lunch'], answer: 1 },
                { type: 'fill_blank', question: 'I ___ up at 7 AM every day.', answer: 'wake', hint: 'The first thing in the morning' },
                { type: 'reorder', question: 'Reorder: [breakfast / I / at / eat / 8 AM]', words: ['breakfast', 'I', 'at', 'eat', '8 AM'], answer: 'I eat breakfast at 8 AM' },
                { type: 'multiple_choice', question: '"Have dinner" means:', options: ['أتناول الفطور', 'أتناول الغداء', 'أتناول العشاء', 'أشرب القهوة'], answer: 2 },
              ],
            },
          },
          {
            id: 'b3l4', title: 'Food & Drinks', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn common food and drink words!',
              vocabulary: [
                { word: 'Water', translation: 'ماء', example: 'I drink water every day.' },
                { word: 'Bread', translation: 'خبز', example: 'I eat bread for breakfast.' },
                { word: 'Rice', translation: 'أرز', example: 'Rice is popular in Egypt.' },
                { word: 'Chicken', translation: 'دجاج', example: 'I like grilled chicken.' },
                { word: 'Apple', translation: 'تفاحة', example: 'An apple a day keeps the doctor away.' },
                { word: 'Milk', translation: 'حليب', example: 'Children drink milk every day.' },
                { word: 'Coffee', translation: 'قهوة', example: 'I drink coffee in the morning.' },
                { word: 'Tea', translation: 'شاي', example: 'Would you like some tea?' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What does "خبز" mean?', options: ['Rice', 'Bread', 'Milk', 'Tea'], answer: 1 },
                { type: 'fill_blank', question: 'I drink ___ every day. (ماء)', answer: 'water', hint: 'Essential liquid' },
                { type: 'match', question: 'Match food items', pairs: [['Water','ماء'],['Rice','أرز'],['Tea','شاي'],['Apple','تفاحة']] },
                { type: 'multiple_choice', question: '"Coffee" means:', options: ['شاي', 'عصير', 'قهوة', 'ماء'], answer: 2 },
              ],
            },
          },
        ],
      },
      {
        id: 'b4',
        title: 'Present Simple',
        icon: '📅',
        lessons: [
          {
            id: 'b4l1', title: 'I like / I don\'t like', type: 'grammar', xp: 20,
            content: {
              intro: 'Express your preferences in English!',
              explanation: '📝 **Present Simple with "like":**\n\n✅ **Positive:** Subject + like/likes + noun/verb-ing\n• I **like** pizza.\n• She **likes** reading.\n\n❌ **Negative:** Subject + don\'t/doesn\'t + like\n• I **don\'t like** spiders.\n• He **doesn\'t like** coffee.\n\n❓ **Question:** Do/Does + subject + like?\n• **Do** you **like** music?\n• **Does** she **like** chocolate?\n\n⚠️ He/She/It → add **-s**: like → **likes**',
              examples: ['I like football.', 'She likes cats.', 'We don\'t like noise.', 'Does he like pizza?'],
              exercises: [
                { type: 'fill_blank', question: 'She ___ (like) coffee. (positive)', answer: 'likes', hint: 'He/She/It needs -s' },
                { type: 'multiple_choice', question: 'I ___ like spiders.', options: ["don't", "doesn't", "isn't", "aren't"], answer: 0 },
                { type: 'reorder', question: 'Reorder: [like / Do / pizza / you]', words: ['like', 'Do', 'pizza', 'you'], answer: 'Do you like pizza' },
                { type: 'fill_blank', question: 'He ___ like vegetables. (negative)', answer: "doesn't", hint: 'He/She/It negative' },
                { type: 'multiple_choice', question: 'Which is correct?', options: ['She like cats.', 'She likes cats.', 'She liking cats.', 'She liked cats.'], answer: 1 },
              ],
            },
          },
          {
            id: 'b4l2', title: 'Daily Actions', type: 'grammar', xp: 20,
            content: {
              intro: 'Talk about what you do every day using Present Simple!',
              explanation: '📝 **Present Simple for habits & routines:**\n\n✅ Use for things you do **regularly**:\n• I **work** every day.\n• She **studies** English.\n• He **goes** to the gym.\n\n⚠️ **He/She/It rules:**\n• work → work**s**\n• study → stud**ies** (y → ies)\n• go → go**es** (add -es after o/s/x/ch/sh)\n\n💡 Time expressions: always, usually, often, sometimes, never',
              examples: ['I usually wake up at 7 AM.', 'She always drinks coffee.', 'He never eats fast food.'],
              exercises: [
                { type: 'fill_blank', question: 'She ___ (study) English every day.', answer: 'studies', hint: 'y → ies for he/she/it' },
                { type: 'multiple_choice', question: 'He ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], answer: 1 },
                { type: 'fill_blank', question: 'I always ___ (drink) water.', answer: 'drink', hint: 'No change for I/You/We/They' },
                { type: 'multiple_choice', question: '"She always ___ breakfast." Which is correct?', options: ['eat', 'ate', 'eats', 'eating'], answer: 2 },
              ],
            },
          },
          {
            id: 'b4l3', title: 'Weather & Seasons', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Talk about the weather and seasons!',
              vocabulary: [
                { word: 'Hot', translation: 'حار', example: 'It is very hot in summer.' },
                { word: 'Cold', translation: 'بارد', example: 'It is cold in winter.' },
                { word: 'Sunny', translation: 'مشمس', example: 'It is a sunny day today.' },
                { word: 'Rainy', translation: 'ممطر', example: 'Take an umbrella — it is rainy.' },
                { word: 'Windy', translation: 'عاصف', example: 'It is windy outside.' },
                { word: 'Summer', translation: 'صيف', example: 'I love summer holidays.' },
                { word: 'Winter', translation: 'شتاء', example: 'It snows in winter.' },
                { word: 'Spring', translation: 'ربيع', example: 'Flowers bloom in spring.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What is the weather when you need an umbrella?', options: ['Sunny', 'Windy', 'Rainy', 'Hot'], answer: 2 },
                { type: 'fill_blank', question: 'It is very ___ in summer. (حار)', answer: 'hot', hint: 'Opposite of cold' },
                { type: 'match', question: 'Match weather words', pairs: [['Hot','حار'],['Cold','بارد'],['Sunny','مشمس'],['Winter','شتاء']] },
              ],
            },
          },
          {
            id: 'b4l4', title: 'My Home', type: 'vocabulary', xp: 20,
            content: {
              intro: 'Learn words for rooms and things in your home!',
              vocabulary: [
                { word: 'Bedroom', translation: 'غرفة النوم', example: 'I sleep in my bedroom.' },
                { word: 'Kitchen', translation: 'مطبخ', example: 'We cook in the kitchen.' },
                { word: 'Bathroom', translation: 'حمام', example: 'The bathroom is upstairs.' },
                { word: 'Living room', translation: 'غرفة المعيشة', example: 'We watch TV in the living room.' },
                { word: 'Door', translation: 'باب', example: 'Please close the door.' },
                { word: 'Window', translation: 'نافذة', example: 'Open the window, please.' },
                { word: 'Table', translation: 'طاولة', example: 'The food is on the table.' },
                { word: 'Chair', translation: 'كرسي', example: 'Sit on the chair.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: 'Where do you cook food?', options: ['Bedroom', 'Bathroom', 'Kitchen', 'Living room'], answer: 2 },
                { type: 'fill_blank', question: 'We sleep in the ___.', answer: 'bedroom', hint: 'Room for sleeping' },
                { type: 'multiple_choice', question: '"نافذة" means:', options: ['Door', 'Window', 'Table', 'Chair'], answer: 1 },
              ],
            },
          },
        ],
      },
      {
        id: 'b5',
        title: 'Reading Practice',
        icon: '📖',
        lessons: [
          {
            id: 'b5l1', title: 'My Family (Reading)', type: 'reading', xp: 20,
            content: {
              intro: 'Read a short text and answer questions!',
              text: `**My Family**\n\nHello! My name is Ahmed. I am from Egypt. I live in Cairo.\n\nI have a small family. My father's name is Hassan. He is a doctor. My mother's name is Fatima. She is a teacher.\n\nI have one brother. His name is Ali. He is 15 years old. I also have one sister. Her name is Sara. She is 10 years old.\n\nI love my family very much!`,
              exercises: [
                { type: 'multiple_choice', question: 'Where is Ahmed from?', options: ['Jordan', 'Egypt', 'Saudi Arabia', 'Morocco'], answer: 1 },
                { type: 'multiple_choice', question: 'What is Ahmed\'s father\'s job?', options: ['Teacher', 'Engineer', 'Doctor', 'Policeman'], answer: 2 },
                { type: 'fill_blank', question: 'Ahmed\'s mother is a ___.', answer: 'teacher', hint: 'Look in the text' },
                { type: 'multiple_choice', question: 'How old is Sara?', options: ['12', '15', '8', '10'], answer: 3 },
                { type: 'multiple_choice', question: 'How many siblings does Ahmed have?', options: ['One', 'Three', 'Two', 'Four'], answer: 2 },
              ],
            },
          },
          { id: 'b5l2', title: 'At the Market (Reading)', type: 'reading', xp: 20,
            content: {
              intro: 'Read about shopping at a market!',
              text: `**At the Market**\n\nEvery Saturday, I go to the market with my mother. The market is near our house.\n\nWe buy many things at the market. We buy vegetables like tomatoes, onions, and potatoes. We also buy fruits like apples, oranges, and bananas.\n\nMy mother always talks to the sellers. She asks: "How much is this?" The sellers are friendly and helpful.\n\nAfter shopping, we go home and my mother cooks a delicious lunch. I love Saturdays!`,
              exercises: [
                { type: 'multiple_choice', question: 'When does the writer go to the market?', options: ['Friday', 'Sunday', 'Saturday', 'Monday'], answer: 2 },
                { type: 'multiple_choice', question: 'What question does the mother ask?', options: ['What is this?', 'How much is this?', 'Where is this?', 'Is this good?'], answer: 1 },
                { type: 'fill_blank', question: 'The market is ___ their house.', answer: 'near', hint: 'Not far, but...' },
                { type: 'multiple_choice', question: 'What do they NOT buy?', options: ['Tomatoes', 'Bananas', 'Meat', 'Apples'], answer: 2 },
              ],
            },
          },
          { id: 'b5l3', title: 'Writing: About Me', type: 'writing', xp: 20,
            content: {
              intro: 'Practice writing about yourself!',
              explanation: '✍️ **How to write about yourself:**\n\n1. Start with your name: *My name is...*\n2. Say where you are from: *I am from...*\n3. Talk about your family: *I have...*\n4. Describe your likes: *I like...*\n5. Talk about your daily routine: *Every day, I...*\n\n📝 **Useful phrases:**\n• My name is...\n• I am ... years old.\n• I live in...\n• I am a student / teacher / doctor\n• I like / I don\'t like...\n• Every day, I...',
              writingPrompt: 'Write 5-6 sentences about yourself using the phrases above.',
              sampleAnswer: 'My name is Layla. I am 22 years old. I am from Egypt and I live in Cairo. I am a university student. I like reading books and watching movies. Every day, I study English for one hour.',
              exercises: [
                { type: 'fill_blank', question: 'Complete: "My name ___ Sara."', answer: 'is', hint: 'Verb to be' },
                { type: 'multiple_choice', question: 'Which sentence is correct?', options: ['I am from of Egypt.', 'I am from Egypt.', 'I from Egypt am.', 'From Egypt I am.'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [student / a / I / am]', words: ['student', 'a', 'I', 'am'], answer: 'I am a student' },
              ],
            },
          },
          { id: 'b5l4', title: 'Speaking: Introduce Yourself', type: 'speaking', xp: 20,
            content: {
              intro: 'Practice speaking about yourself!',
              explanation: '🗣️ **How to introduce yourself in English:**\n\n**Script to practice:**\n\n*"Hello! My name is [name]. I am [age] years old. I am from [country] and I live in [city]. I am a [job/student].*\n\n*I have [family]. I like [hobby/food/activity].*\n\n*It\'s nice to meet you!"*\n\n💡 **Tips for speaking:**\n• Speak slowly and clearly\n• Don\'t worry about mistakes\n• Practice in front of a mirror\n• Record yourself and listen back',
              phrases: [
                'Hello, my name is...',
                'I am ... years old.',
                'I am from...',
                'I am a student / teacher.',
                'I like...',
                'Nice to meet you!',
              ],
              exercises: [
                { type: 'multiple_choice', question: 'What do you say at the END of an introduction?', options: ['My name is...', 'I am from...', 'Nice to meet you!', 'I like...'], answer: 2 },
                { type: 'reorder', question: 'Order the introduction correctly:', words: ['meet', 'Nice', 'to', 'you'], answer: 'Nice to meet you' },
                { type: 'fill_blank', question: 'Hello! My ___ is Ahmed.', answer: 'name', hint: 'What we call ourselves' },
              ],
            },
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  INTERMEDIATE (B1–B2)
  // ════════════════════════════════════════════════════════
  {
    id: 'intermediate',
    title: 'Intermediate English',
    level: 'B1–B2',
    description: 'Expand your grammar, vocabulary, and communication skills for real-world situations.',
    color: '#3B82F6',
    icon: '📘',
    xpPerLesson: 30,
    units: [
      {
        id: 'i1',
        title: 'Perfect Tenses',
        icon: '⏰',
        lessons: [
          {
            id: 'i1l1', title: 'Present Perfect', type: 'grammar', xp: 30,
            content: {
              intro: 'Master the present perfect tense!',
              explanation: '📝 **Present Perfect:**\n\nForm: **have/has + past participle**\n\n✅ **Uses:**\n1. **Experience** (ever/never): *I have visited Paris.*\n2. **Recent action** (just): *She has just arrived.*\n3. **Unfinished time** (for/since): *He has worked here for 5 years.*\n4. **Result** (already/yet): *I have already eaten.*\n\n⚠️ **Irregular verbs:**\n• go → gone, eat → eaten\n• see → seen, write → written\n• take → taken, make → made',
              examples: ['I have never eaten sushi.', 'She has just called me.', 'We have lived here since 2020.', 'Have you ever been to London?'],
              exercises: [
                { type: 'fill_blank', question: 'I ___ (never/visit) Japan.', answer: 'have never visited', hint: 'have + never + past participle' },
                { type: 'multiple_choice', question: 'She ___ just finished her homework.', options: ['have', 'has', 'had', 'is'], answer: 1 },
                { type: 'fill_blank', question: 'He ___ (work) here since 2018.', answer: 'has worked', hint: 'has + past participle' },
                { type: 'multiple_choice', question: 'Which sentence uses Present Perfect correctly?', options: ['I have went yesterday.', 'I have gone to Paris last year.', 'I have been to Paris.', 'I have go to Paris.'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [ever / you / Have / sushi / eaten]', words: ['ever', 'you', 'Have', 'sushi', 'eaten'], answer: 'Have you ever eaten sushi' },
              ],
            },
          },
          {
            id: 'i1l2', title: 'Past Perfect', type: 'grammar', xp: 30,
            content: {
              intro: 'Learn the past perfect — actions before another past action!',
              explanation: '📝 **Past Perfect:**\n\nForm: **had + past participle**\n\n✅ **Use:** One past action happened BEFORE another past action.\n\n• *By the time she arrived, I **had already left**.*\n• *He **hadn\'t eaten** before the meeting.*\n• *When I got home, my family **had gone** to sleep.*\n\n💡 **Time expressions:**\n• by the time, before, after, when, already, just, never',
              examples: ['I had studied for hours before the exam.', 'She had never seen snow before she visited Canada.', 'When he called, I had already made dinner.'],
              exercises: [
                { type: 'fill_blank', question: 'By the time she arrived, he ___ (leave) already.', answer: 'had already left', hint: 'had + past participle' },
                { type: 'multiple_choice', question: 'We ___ never seen such a beautiful place.', options: ['have', 'had', 'has', 'did'], answer: 1 },
                { type: 'multiple_choice', question: 'Which is correct?', options: ['I had went home.', 'I had go home.', 'I had gone home.', 'I had goes home.'], answer: 2 },
                { type: 'fill_blank', question: 'When I arrived, the film ___ (start) already.', answer: 'had already started', hint: 'had + past participle' },
              ],
            },
          },
          {
            id: 'i1l3', title: 'Future Perfect', type: 'grammar', xp: 30,
            content: {
              intro: 'Talk about actions that will be completed by a future time!',
              explanation: '📝 **Future Perfect:**\n\nForm: **will have + past participle**\n\n✅ **Use:** An action that will be COMPLETED before a specific future time.\n\n• *By next year, I **will have graduated**.*\n• *She **will have finished** the project by Friday.*\n• *They **will have lived** here for 10 years next month.*\n\n💡 **Key words:** by (a time), by the time, before',
              examples: ['By 2030, scientists will have found a cure.', 'I will have finished by tomorrow.'],
              exercises: [
                { type: 'fill_blank', question: 'By next year, I ___ (finish) my degree.', answer: 'will have finished', hint: 'will have + past participle' },
                { type: 'multiple_choice', question: 'By Friday, she ___ the report.', options: ['will finish', 'will have finished', 'has finished', 'finished'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [will / By / I / graduated / have / June]', words: ['will', 'By', 'I', 'graduated', 'have', 'June'], answer: 'By June I will have graduated' },
              ],
            },
          },
          {
            id: 'i1l4', title: 'Conditionals 1 & 2', type: 'grammar', xp: 30,
            content: {
              intro: 'Master first and second conditionals!',
              explanation: '📝 **Conditionals:**\n\n**1st Conditional** — Real/possible future:\n• *If it **rains**, I **will stay** home.*\n• If + present simple, will + verb\n\n**2nd Conditional** — Unreal/hypothetical:\n• *If I **were** rich, I **would travel** everywhere.*\n• If + past simple, would + verb\n\n⚠️ Always use **"were"** (not "was") after "if" in 2nd conditional:\n• *If I **were** you...* ✅\n• *If I **was** you...* ❌ (informal)',
              examples: ['If I study hard, I will pass.', 'If I were a bird, I would fly everywhere.', 'If she calls, tell her I\'m busy.'],
              exercises: [
                { type: 'multiple_choice', question: 'If it ___ tomorrow, we will cancel the trip.', options: ['rained', 'rains', 'will rain', 'rain'], answer: 1 },
                { type: 'fill_blank', question: 'If I ___ (be) you, I would study more.', answer: 'were', hint: 'Always use "were" in 2nd conditional' },
                { type: 'multiple_choice', question: '2nd Conditional: If she had money, she ___ a car.', options: ['will buy', 'would buy', 'buys', 'bought'], answer: 1 },
                { type: 'reorder', question: 'Reorder: [will / I / study / pass / If / I]', words: ['will', 'I', 'study', 'pass', 'If', 'I'], answer: 'If I study I will pass' },
              ],
            },
          },
        ],
      },
      {
        id: 'i2',
        title: 'Business Vocabulary',
        icon: '💼',
        lessons: [
          {
            id: 'i2l1', title: 'Workplace Words', type: 'vocabulary', xp: 30,
            content: {
              intro: 'Essential vocabulary for the workplace!',
              vocabulary: [
                { word: 'Deadline', translation: 'موعد نهائي', example: 'The deadline is Friday at 5 PM.' },
                { word: 'Meeting', translation: 'اجتماع', example: 'We have a meeting at 10 AM.' },
                { word: 'Colleague', translation: 'زميل', example: 'My colleague helped me with the project.' },
                { word: 'Manager', translation: 'مدير', example: 'I reported to my manager.' },
                { word: 'Presentation', translation: 'عرض تقديمي', example: 'I gave a presentation to the team.' },
                { word: 'Report', translation: 'تقرير', example: 'Please submit the report by Monday.' },
                { word: 'Budget', translation: 'ميزانية', example: 'We need to cut the budget.' },
                { word: 'Strategy', translation: 'استراتيجية', example: 'What is our strategy for next year?' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Deadline" means:', options: ['بداية العمل', 'موعد نهائي', 'إجازة', 'ترقية'], answer: 1 },
                { type: 'fill_blank', question: 'I have a ___ with my manager at 3 PM.', answer: 'meeting', hint: 'When people gather to discuss work' },
                { type: 'match', question: 'Match business words', pairs: [['Deadline','موعد نهائي'],['Colleague','زميل'],['Budget','ميزانية'],['Report','تقرير']] },
                { type: 'multiple_choice', question: 'A "colleague" is:', options: ['رئيس', 'زميل', 'عميل', 'موظف جديد'], answer: 1 },
              ],
            },
          },
          {
            id: 'i2l2', title: 'Email Phrases', type: 'writing', xp: 30,
            content: {
              intro: 'Learn professional email phrases for work!',
              explanation: '📧 **Professional Email Phrases:**\n\n**Opening:**\n• Dear Mr./Ms. [Name],\n• I hope this email finds you well.\n• I am writing to...\n• Further to our conversation...\n\n**Body:**\n• Please find attached...\n• I would like to request...\n• Could you please...\n• I would be grateful if...\n\n**Closing:**\n• Please do not hesitate to contact me.\n• I look forward to hearing from you.\n• Best regards, / Kind regards,\n• Yours sincerely,',
              examples: ['I am writing to request a meeting.', 'Please find the report attached.', 'I look forward to your response.'],
              exercises: [
                { type: 'multiple_choice', question: 'How do you start a formal email?', options: ['Hey!', 'Hi there!', 'Dear Mr. Smith,', 'Yo!'], answer: 2 },
                { type: 'fill_blank', question: 'I ___ forward to hearing from you.', answer: 'look', hint: 'I look/see/wait...' },
                { type: 'multiple_choice', question: 'Which closing is most professional?', options: ['See ya!', 'Bye!', 'Best regards,', 'Later!'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [hesitate / do / to / not / contact / Please / me]', words: ['hesitate', 'do', 'to', 'not', 'contact', 'Please', 'me'], answer: 'Please do not hesitate to contact me' },
              ],
            },
          },
          {
            id: 'i2l3', title: 'Presentations', type: 'speaking', xp: 30,
            content: {
              intro: 'Learn how to structure and deliver a presentation!',
              explanation: '🎤 **Presentation Language:**\n\n**Introduction:**\n• *Good morning/afternoon, everyone.*\n• *Today, I\'m going to talk about...*\n• *My presentation is divided into three parts.*\n\n**Moving between points:**\n• *First... / Secondly... / Finally...*\n• *Moving on to...*\n• *As I mentioned earlier...*\n\n**Showing visuals:**\n• *As you can see in this chart...*\n• *This graph shows...*\n\n**Concluding:**\n• *To summarize...*\n• *In conclusion...*\n• *Thank you for your attention.*\n• *Are there any questions?*',
              exercises: [
                { type: 'multiple_choice', question: 'How do you start a presentation?', options: ['Thank you for your attention.', 'Good morning, everyone.', 'Are there any questions?', 'In conclusion...'], answer: 1 },
                { type: 'fill_blank', question: '___ summarize, our results were positive.', answer: 'To', hint: 'To/In/For...' },
                { type: 'multiple_choice', question: 'What do you say to move to the next point?', options: ['Thank you', 'Moving on to...', 'In conclusion', 'Questions?'], answer: 1 },
              ],
            },
          },
          {
            id: 'i2l4', title: 'Negotiation Language', type: 'speaking', xp: 30,
            content: {
              intro: 'Learn phrases for negotiations and meetings!',
              explanation: '🤝 **Negotiation Phrases:**\n\n**Making proposals:**\n• *I\'d like to suggest...*\n• *What if we...?*\n• *How about...?*\n\n**Agreeing:**\n• *That sounds reasonable.*\n• *I think that works.*\n• *We can agree on that.*\n\n**Disagreeing politely:**\n• *I see your point, but...*\n• *I\'m afraid that\'s not possible.*\n• *Unfortunately, we can\'t...*\n\n**Compromising:**\n• *Can we meet halfway?*\n• *Perhaps we could...*\n• *Would you be willing to...?*',
              exercises: [
                { type: 'multiple_choice', question: 'How do you disagree politely?', options: ['No!', 'That\'s wrong!', 'I see your point, but...', 'Absolutely not!'], answer: 2 },
                { type: 'fill_blank', question: 'What ___ we split the cost?', answer: 'if', hint: 'What if / How about' },
                { type: 'multiple_choice', question: '"Can we meet halfway?" means:', options: ['أين نلتقي؟', 'هل نتفق على حل وسط؟', 'متى نلتقي؟', 'هل يمكننا الاجتماع؟'], answer: 1 },
              ],
            },
          },
        ],
      },
      {
        id: 'i3', title: 'Reading Skills', icon: '📰',
        lessons: [
          {
            id: 'i3l1', title: 'News Article: Technology', type: 'reading', xp: 30,
            content: {
              intro: 'Read a news article and practice comprehension skills!',
              text: `**AI Transforms Language Learning**\n\nArtificial intelligence is changing how people learn foreign languages. New apps use AI to personalise lessons, correct pronunciation, and provide instant feedback.\n\nDr. Sarah Johnson, a linguistics professor at Oxford University, says: "AI can analyse a learner's weaknesses and create a unique study plan for each student. This was impossible just ten years ago."\n\nHowever, experts warn that technology cannot replace human interaction. "You still need to practise with real people," says language coach Miguel Torres. "AI helps, but conversation with native speakers is irreplaceable."\n\nLanguage learning apps have seen a 300% increase in users since 2020. The trend shows no signs of slowing down.`,
              exercises: [
                { type: 'multiple_choice', question: 'What is the main topic of the article?', options: ['Social media', 'AI and language learning', 'University education', 'Computer programming'], answer: 1 },
                { type: 'multiple_choice', question: 'What can AI analyse according to Dr. Johnson?', options: ['Student age', 'Student weaknesses', 'Student nationality', 'Student grades'], answer: 1 },
                { type: 'fill_blank', question: 'Language learning apps have seen a ___% increase.', answer: '300', hint: 'Look for the percentage in the article' },
                { type: 'multiple_choice', question: 'What does Miguel Torres say AI CANNOT replace?', options: ['Grammar lessons', 'Vocabulary practice', 'Human interaction', 'Writing exercises'], answer: 2 },
                { type: 'multiple_choice', question: 'The word "irreplaceable" means:', options: ['لا يمكن الاستغناء عنه', 'رخيص', 'سهل', 'قديم'], answer: 0 },
              ],
            },
          },
          {
            id: 'i3l2', title: 'Skimming & Scanning', type: 'reading', xp: 30,
            content: {
              intro: 'Learn two important reading strategies!',
              explanation: '📖 **Reading Strategies:**\n\n🔍 **Skimming** — Read QUICKLY to get the main idea:\n• Read the title and headings\n• Read first and last sentences of each paragraph\n• Look at images/charts\n• Time: 1-2 minutes for a full article\n\n🎯 **Scanning** — Look for SPECIFIC information:\n• Know what you\'re looking for (a name, date, number)\n• Let your eyes move quickly over the text\n• Stop when you find the target word/phrase\n• Don\'t read every word!\n\n💡 **When to use each:**\n• Skimming: What is this article about?\n• Scanning: What year was the company founded?',
              exercises: [
                { type: 'multiple_choice', question: 'Which strategy do you use to find a specific date?', options: ['Skimming', 'Scanning', 'Both equally', 'Neither'], answer: 1 },
                { type: 'multiple_choice', question: 'Skimming helps you understand:', options: ['Specific details', 'The main idea', 'Exact numbers', 'All vocabulary'], answer: 1 },
                { type: 'fill_blank', question: 'To get the main idea quickly, you use ___.', answer: 'skimming', hint: 'Fast reading for general understanding' },
                { type: 'multiple_choice', question: 'In an IELTS reading test, if you need to find a person\'s name, you should:', options: ['Read everything carefully', 'Scan for capital letters', 'Skim the whole text', 'Skip the question'], answer: 1 },
              ],
            },
          },
          {
            id: 'i3l3', title: 'Inference Skills', type: 'reading', xp: 30,
            content: {
              intro: 'Learn to read between the lines and make inferences!',
              explanation: '🧠 **Making Inferences:**\n\nAn inference is a conclusion you draw from evidence — not stated directly in the text.\n\n📝 **How to make inferences:**\n1. Read what the text SAYS\n2. Think about what you KNOW\n3. Draw a logical CONCLUSION\n\n**Example:**\n*Text: "Ahmed put on his coat, grabbed his umbrella, and looked out at the grey sky."*\n\nInference: It is raining or about to rain. ☔\n(The text doesn\'t say "it was raining" but we can conclude this from the clues.)\n\n💡 IELTS uses this skill in True/False/Not Given questions!',
              exercises: [
                { type: 'multiple_choice', question: '"She slammed her book shut and walked out of the exam room." What can we infer?', options: ['She passed the exam.', 'She is a teacher.', 'She was frustrated.', 'She finished early.'], answer: 2 },
                { type: 'multiple_choice', question: 'What is an inference?', options: ['A direct quote from the text', 'A conclusion based on evidence', 'A vocabulary definition', 'A summary'], answer: 1 },
                { type: 'fill_blank', question: 'When making inferences, you read ___ the lines.', answer: 'between', hint: 'Read "between" or "below"?' },
              ],
            },
          },
          {
            id: 'i3l4', title: 'Opinion Writing', type: 'writing', xp: 30,
            content: {
              intro: 'Learn to express and support your opinions in writing!',
              explanation: '✍️ **Opinion Writing Structure:**\n\n**Introduction:**\n• State your opinion clearly\n• *In my opinion, ... / I believe that... / It is my view that...*\n\n**Body Paragraph 1 (first reason):**\n• *First of all, ... / The main reason is ...*\n• Give evidence/example\n\n**Body Paragraph 2 (second reason):**\n• *Furthermore, ... / In addition, ...*\n• Give evidence/example\n\n**Counter-argument (optional):**\n• *Some people argue that... However,...*\n\n**Conclusion:**\n• *In conclusion, I firmly believe that...*\n• Restate opinion + summary',
              exercises: [
                { type: 'multiple_choice', question: 'Which phrase introduces an opinion?', options: ['In contrast,', 'In my opinion,', 'For example,', 'As a result,'], answer: 1 },
                { type: 'fill_blank', question: '___ of all, technology has changed education.', answer: 'First', hint: 'First/Second/Third...' },
                { type: 'multiple_choice', question: 'Which phrase ADDS another point?', options: ['However', 'In contrast', 'Furthermore', 'On the other hand'], answer: 2 },
                { type: 'reorder', question: 'Reorder: [conclusion / In / believe / I / firmly]', words: ['conclusion', 'In', 'believe', 'I', 'firmly'], answer: 'In conclusion I firmly believe' },
              ],
            },
          },
        ],
      },
      {
        id: 'i4', title: 'Listening Skills', icon: '🎧',
        lessons: [
          {
            id: 'i4l1', title: 'Listening for Gist', type: 'listening', xp: 30,
            content: {
              intro: 'Learn to listen for the main idea!',
              explanation: '🎧 **Listening for Gist:**\n\n**Gist** = the main idea or general meaning\n\n✅ **How to listen for gist:**\n• Don\'t try to understand every word\n• Focus on repeated words/themes\n• Listen for topic sentences (usually at the start)\n• Use context clues\n\n📝 **Common gist questions:**\n• *What is the main topic of the conversation?*\n• *What is the speaker\'s main purpose?*\n• *What is the general mood of the speaker?*\n\n💡 In IELTS Listening, the first question often tests gist!',
              dialogue: `[Audio transcript]\nWoman: Good morning! Can I help you?\nMan: Yes, I\'d like to book a table for tonight.\nWoman: How many people?\nMan: Four adults and two children.\nWoman: 7 PM or 9 PM?\nMan: 7 PM would be great.\nWoman: Perfect! Can I have your name?\nMan: Ahmed Hassan.\nWoman: Great, Mr. Hassan. Table for six at 7 PM tonight!`,
              exercises: [
                { type: 'multiple_choice', question: 'What is the main purpose of the conversation?', options: ['Ordering food', 'Booking a hotel', 'Booking a restaurant table', 'Making a complaint'], answer: 2 },
                { type: 'multiple_choice', question: 'How many people will come?', options: ['4', '2', '6', '8'], answer: 2 },
                { type: 'fill_blank', question: 'The reservation is for ___ PM.', answer: '7', hint: 'Listen for the time' },
                { type: 'multiple_choice', question: 'The man\'s surname is:', options: ['Mohammed', 'Hassan', 'Ahmed', 'Ali'], answer: 1 },
              ],
            },
          },
          {
            id: 'i4l2', title: 'Note-Taking Skills', type: 'listening', xp: 30,
            content: {
              intro: 'Learn effective note-taking while listening!',
              explanation: '📝 **Note-Taking Strategies:**\n\n✅ **Do:**\n• Use abbreviations: w/ (with), b/c (because), → (leads to), = (equals)\n• Write key words only, not full sentences\n• Use symbols: ↑ (increase), ↓ (decrease), ? (unsure)\n• Organize with numbers or bullets\n\n❌ **Don\'t:**\n• Try to write everything\n• Stop listening to write\n• Use full sentences\n\n🎯 **For IELTS:**\n• Read questions BEFORE listening\n• Predict the type of answer (number, name, date)\n• Answers come in order\n• Check spelling carefully',
              exercises: [
                { type: 'multiple_choice', question: 'What does "↑" mean in notes?', options: ['decrease', 'increase', 'equal', 'important'], answer: 1 },
                { type: 'multiple_choice', question: 'In IELTS listening, when should you read the questions?', options: ['After listening', 'While listening', 'Before listening', 'It doesn\'t matter'], answer: 2 },
                { type: 'fill_blank', question: '"w/" is an abbreviation for ___.', answer: 'with', hint: 'Common preposition' },
                { type: 'multiple_choice', question: 'In IELTS listening, answers appear:', options: ['In random order', 'In reverse order', 'In the order of questions', 'All at the end'], answer: 2 },
              ],
            },
          },
          {
            id: 'i4l3', title: 'Accents & Varieties', type: 'listening', xp: 30,
            content: {
              intro: 'Understand different English accents!',
              explanation: '🌍 **English Accents Around the World:**\n\n**British English (UK):**\n• Received Pronunciation (RP) — "standard" British\n• Pronunciation: "can\'t" (kɑːnt), "bath" (bɑːθ)\n\n**American English (US):**\n• General American — most widely understood\n• Pronunciation: "can\'t" (kænt), "r" is pronounced more strongly\n\n**Australian English:**\n• Rising intonation at end of sentences\n• "day" sounds like "die"\n\n💡 **IELTS tip:** The listening test includes British, American, Australian, and other accents. Expose yourself to all of them!\n\n📺 **Resources:** BBC News (British), CNN (American), ABC Australia (Australian)',
              exercises: [
                { type: 'multiple_choice', question: 'IELTS listening includes accents from:', options: ['Only British', 'Only American', 'Only Australian', 'Multiple varieties'], answer: 3 },
                { type: 'multiple_choice', question: 'Which resource is best for British English listening?', options: ['CNN', 'BBC News', 'ABC Australia', 'NBC'], answer: 1 },
                { type: 'fill_blank', question: 'Expose yourself to ___ accents to improve listening.', answer: 'different', hint: 'Not one, but many' },
              ],
            },
          },
          {
            id: 'i4l4', title: 'Conversation Practice', type: 'speaking', xp: 30,
            content: {
              intro: 'Practice natural English conversations!',
              explanation: '🗣️ **Natural Conversation Tips:**\n\n**Starting conversations:**\n• *What do you think about...?*\n• *Have you heard about...?*\n• *I was wondering if...*\n\n**Keeping conversations going:**\n• Ask follow-up questions\n• Show interest: *Really? / That\'s interesting! / Tell me more.*\n• Share your own experience: *I had a similar experience...*\n\n**Politely interrupting:**\n• *Sorry to interrupt, but...*\n• *Can I just add...*\n\n**Ending conversations:**\n• *It was nice talking to you.*\n• *I\'ve got to go, but...*\n• *Let\'s catch up soon!*',
              exercises: [
                { type: 'multiple_choice', question: 'How do you show interest in a conversation?', options: ['Stay silent', 'Change the topic', 'Say "Really? Tell me more!"', 'Check your phone'], answer: 2 },
                { type: 'fill_blank', question: 'Sorry to ___, but I have a question.', answer: 'interrupt', hint: 'Politely break into a conversation' },
                { type: 'multiple_choice', question: 'Which phrase politely ends a conversation?', options: ['I don\'t care.', 'Let\'s catch up soon!', 'Stop talking.', 'Whatever.'], answer: 1 },
              ],
            },
          },
        ],
      },
      {
        id: 'i5', title: 'Advanced Grammar', icon: '⚡',
        lessons: [
          {
            id: 'i5l1', title: 'Passive Voice', type: 'grammar', xp: 30,
            content: {
              intro: 'Master the passive voice!',
              explanation: '📝 **Passive Voice:**\n\n**Active:** Subject does the action\n• *The chef **cooked** the meal.*\n\n**Passive:** Focus on the action/result\n• *The meal **was cooked** by the chef.*\n\n**Forms:**\n| Tense | Passive |\n|-------|---------|\n| Present | am/is/are + past participle |\n| Past | was/were + past participle |\n| Present Perfect | has/have been + past participle |\n| Future | will be + past participle |\n\n✅ **Use passive when:**\n• The agent is unknown: *The window was broken.*\n• The agent is unimportant: *The law was passed.*\n• Formal/scientific writing: *The results were recorded.*',
              examples: ['English is spoken worldwide.', 'The report was written by Sara.', 'The project has been completed.', 'The building will be demolished.'],
              exercises: [
                { type: 'fill_blank', question: 'The letter ___ (write) by Ahmed. (past passive)', answer: 'was written', hint: 'was/were + past participle' },
                { type: 'multiple_choice', question: 'Passive: "They build houses here." →', options: ['Houses build here.', 'Houses are built here.', 'Houses were built here.', 'Houses being built here.'], answer: 1 },
                { type: 'fill_blank', question: 'The results ___ (record) yesterday. (past passive)', answer: 'were recorded', hint: 'were + past participle' },
                { type: 'multiple_choice', question: 'Future passive of "They will announce results" is:', options: ['Results will announced.', 'Results will be announced.', 'Results would be announced.', 'Results are announced.'], answer: 1 },
              ],
            },
          },
          {
            id: 'i5l2', title: 'Relative Clauses', type: 'grammar', xp: 30,
            content: {
              intro: 'Learn to use who, which, that, where, and whose!',
              explanation: '📝 **Relative Clauses:**\n\nAdd information about a noun:\n\n• **who** — for people\n  *The woman **who** called is my teacher.*\n\n• **which** — for things\n  *The book **which** I bought is interesting.*\n\n• **that** — for people or things (informal)\n  *The man **that** I met was friendly.*\n\n• **where** — for places\n  *The city **where** I grew up is beautiful.*\n\n• **whose** — for possession\n  *The student **whose** work is best will win.*\n\n**Defining vs Non-defining:**\n• Defining (no commas): *The man who called is here.*\n• Non-defining (commas): *My brother, who lives in London, is a doctor.*',
              exercises: [
                { type: 'fill_blank', question: 'The woman ___ called me is my aunt.', answer: 'who', hint: 'For people' },
                { type: 'multiple_choice', question: 'The city ___ I was born is Cairo.', options: ['who', 'which', 'where', 'whose'], answer: 2 },
                { type: 'fill_blank', question: 'The car ___ he bought is expensive.', answer: 'which', hint: 'For things (or "that")' },
                { type: 'multiple_choice', question: 'The student ___ bag was stolen reported it.', options: ['who', 'which', 'where', 'whose'], answer: 3 },
              ],
            },
          },
          {
            id: 'i5l3', title: 'Reported Speech', type: 'grammar', xp: 30,
            content: {
              intro: 'Learn to report what others have said!',
              explanation: '📝 **Reported Speech (Indirect Speech):**\n\nChange direct speech to reported speech:\n\n**Tense shifts (backshift):**\n• *"I **am** tired."* → He said he **was** tired.\n• *"I **work** here."* → She said she **worked** there.\n• *"I **have seen** it."* → He said he **had seen** it.\n• *"I **will come**."* → She said she **would come**.\n\n**Pronoun changes:** I → he/she, you → I/they\n**Place/time changes:** here → there, now → then, today → that day\n\n**Reporting verbs:** said, told, asked, explained, admitted, promised',
              exercises: [
                { type: 'fill_blank', question: '"I am happy." → She said she ___ happy.', answer: 'was', hint: 'Present → Past in reported speech' },
                { type: 'multiple_choice', question: '"I will call you." → He said he ___ call me.', options: ['will', 'would', 'shall', 'should'], answer: 1 },
                { type: 'fill_blank', question: '"I have finished." → She said she ___ finished.', answer: 'had', hint: 'Present perfect → Past perfect' },
                { type: 'multiple_choice', question: '"I live here." → He said he lived ___.', options: ['here', 'there', 'now', 'then'], answer: 1 },
              ],
            },
          },
          {
            id: 'i5l4', title: 'Modals: Possibility & Deduction', type: 'grammar', xp: 30,
            content: {
              intro: 'Master modal verbs for possibility and deduction!',
              explanation: '📝 **Modals for Deduction:**\n\n**Present deduction:**\n• **must** — almost certain (positive): *He must be tired — he worked all day.*\n• **can\'t** — almost certain (negative): *She can\'t be at home — I saw her leave.*\n• **might/could** — possible: *It might rain later.*\n\n**Past deduction:**\n• **must have** + past participle: *He must have forgotten.*\n• **can\'t have** + past participle: *She can\'t have seen that.*\n• **might have** + past participle: *They might have left early.*\n\n💡 **Strength of certainty:**\ncouldn\'t have → can\'t → might → could → should → must',
              exercises: [
                { type: 'multiple_choice', question: 'He ___ be Ahmed\'s brother — they look exactly the same!', options: ['can\'t', 'must', 'might not', 'could'], answer: 1 },
                { type: 'fill_blank', question: 'She ___ (not/be) at school — it\'s Sunday!', answer: "can't be", hint: 'Impossible in present' },
                { type: 'multiple_choice', question: 'I\'m not sure, but she ___ have taken the wrong train.', options: ['must', 'can\'t', 'might', 'will'], answer: 2 },
                { type: 'fill_blank', question: 'He ___ (forget) — he never forgets anything!', answer: "can't have forgotten", hint: 'Impossible in past' },
              ],
            },
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  IELTS PREPARATION
  // ════════════════════════════════════════════════════════
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
        id: 'ie1', title: 'IELTS Writing Task 1', icon: '📊',
        lessons: [
          {
            id: 'ie1l1', title: 'Describing Charts', type: 'writing', xp: 50,
            content: {
              intro: 'Learn how to describe graphs, charts and diagrams for IELTS Task 1!',
              explanation: '📊 **IELTS Writing Task 1 — Charts & Graphs:**\n\n**Structure (minimum 150 words):**\n1. **Introduction** — paraphrase the title (don\'t copy!)\n2. **Overview** — 2 main trends (no data!)\n3. **Details 1** — specific data with figures\n4. **Details 2** — more specific data\n\n**Useful language:**\n\n📈 *Increase:* rise, grow, climb, soar, surge, go up\n📉 *Decrease:* fall, drop, decline, decrease, plunge\n➡️ *Stay same:* remain stable, plateau, level off\n🔄 *Fluctuate:* vary, fluctuate, be volatile\n\n**Data language:**\n• ...reached a peak of... / ...hit a low of...\n• ...accounted for... / ...stood at...\n• ...increased by 20% / ...increased to 40%',
              exercises: [
                { type: 'multiple_choice', question: 'In Task 1, the overview paragraph should contain:', options: ['All specific data', 'The main overall trends (no data)', 'Your opinion', 'A conclusion'], answer: 1 },
                { type: 'fill_blank', question: 'The graph shows a sharp ___ in sales in 2020. (decrease)', answer: 'decline', hint: 'A synonym for decrease' },
                { type: 'multiple_choice', question: '"Increased by 20%" means:', options: ['ارتفع إلى ٢٠٪', 'ارتفع بنسبة ٢٠٪', 'انخفض بنسبة ٢٠٪', 'بلغ ٢٠٪'], answer: 1 },
                { type: 'multiple_choice', question: 'The minimum word count for Task 1 is:', options: ['100', '120', '150', '200'], answer: 2 },
                { type: 'fill_blank', question: 'Sales ___ a peak of $5 million in 2019.', answer: 'reached', hint: 'reached / hit / achieved' },
              ],
            },
          },
          {
            id: 'ie1l2', title: 'Process Diagrams', type: 'writing', xp: 50,
            content: {
              intro: 'Describe processes and diagrams for IELTS Task 1!',
              explanation: '🔄 **Describing Processes:**\n\n**Sequence language:**\n• First, / To begin, / Initially,\n• Then, / Next, / After this,\n• Following this, / Subsequently,\n• Finally, / Lastly, / At the end,\n\n**Passive voice (essential for processes):**\n• *The material is heated.*\n• *The product is then packaged.*\n• *Water is filtered and purified.*\n\n**Useful verbs:**\n• is produced / is manufactured\n• is transported / is delivered\n• is combined with / is mixed with\n• is converted into / is transformed\n\n💡 **Tip:** Processes almost ALWAYS use passive voice because we focus on what happens, not who does it.',
              exercises: [
                { type: 'multiple_choice', question: 'Which tense is most common in process descriptions?', options: ['Active past tense', 'Passive present tense', 'Active future tense', 'Perfect tense'], answer: 1 },
                { type: 'fill_blank', question: 'First, the materials ___ (collect).', answer: 'are collected', hint: 'Passive present' },
                { type: 'reorder', question: 'Reorder: [heated / the / is / material / Then]', words: ['heated', 'the', 'is', 'material', 'Then'], answer: 'Then the material is heated' },
                { type: 'multiple_choice', question: 'Which word shows the FINAL step?', options: ['Initially', 'Subsequently', 'Meanwhile', 'Finally'], answer: 3 },
              ],
            },
          },
          {
            id: 'ie1l3', title: 'Task 2: Opinion Essays', type: 'writing', xp: 50,
            content: {
              intro: 'Write high-scoring IELTS Task 2 opinion essays!',
              explanation: '✍️ **IELTS Task 2 — Opinion Essay (250+ words):**\n\n**Structure:**\n\n**Introduction (50 words):**\n• Background sentence\n• Thesis: *This essay will argue that...*\n\n**Body 1 (100 words):**\n• Topic sentence: *The primary reason is...*\n• Explanation + example\n\n**Body 2 (100 words):**\n• *Furthermore / In addition,...*\n• Explanation + example\n\n**Conclusion (50 words):**\n• *In conclusion, it is clear that...*\n• Restate your position\n\n**Scoring (each worth 25%):**\n• Task Achievement\n• Coherence & Cohesion\n• Lexical Resource (vocabulary)\n• Grammatical Range & Accuracy',
              exercises: [
                { type: 'multiple_choice', question: 'IELTS Task 2 minimum word count is:', options: ['200', '250', '300', '350'], answer: 1 },
                { type: 'multiple_choice', question: 'Task 2 is worth ___ of your Writing score.', options: ['25%', '33%', '50%', '67%'], answer: 3 },
                { type: 'fill_blank', question: 'In ___, it is clear that technology benefits education.', answer: 'conclusion', hint: 'Last paragraph starter' },
                { type: 'multiple_choice', question: 'Which phrase introduces a second argument?', options: ['In contrast', 'Furthermore', 'On the other hand', 'However'], answer: 1 },
              ],
            },
          },
          {
            id: 'ie1l4', title: 'Cohesion & Coherence', type: 'writing', xp: 50,
            content: {
              intro: 'Improve your band score with better linking and flow!',
              explanation: '🔗 **Cohesion & Coherence:**\n\n**Linking words by function:**\n\n📌 *Adding:* Furthermore, Moreover, In addition, Also\n🔄 *Contrasting:* However, Nevertheless, On the other hand, Despite\n📍 *Cause/Effect:* Therefore, Consequently, As a result, Hence\n🎯 *Example:* For example, For instance, Such as, Namely\n📊 *Sequence:* First, Subsequently, Finally, Meanwhile\n📝 *Conclusion:* In conclusion, Overall, To summarize\n\n⚠️ **Common mistakes:**\n• ❌ Starting every sentence with "Also"\n• ❌ Overusing "However"\n• ✅ Vary your linking words!\n• ✅ One main idea per paragraph',
              exercises: [
                { type: 'multiple_choice', question: '"The company lost money. ___, it had to close." Which word fits?', options: ['Furthermore', 'Consequently', 'However', 'For instance'], answer: 1 },
                { type: 'fill_blank', question: 'Technology has benefits. ___, it also has drawbacks.', answer: 'However', hint: 'Contrast linking word' },
                { type: 'multiple_choice', question: 'Which word adds a similar point?', options: ['However', 'Nevertheless', 'Moreover', 'Although'], answer: 2 },
                { type: 'multiple_choice', question: 'Good coherence means:', options: ['Using many linking words', 'Ideas flow logically and clearly', 'Long paragraphs', 'Complex vocabulary'], answer: 1 },
              ],
            },
          },
        ],
      },
      {
        id: 'ie2', title: 'IELTS Speaking', icon: '🎤',
        lessons: [
          {
            id: 'ie2l1', title: 'Speaking Part 1', type: 'speaking', xp: 50,
            content: {
              intro: 'Ace IELTS Speaking Part 1 — personal questions!',
              explanation: '🎤 **IELTS Speaking Part 1 (4-5 minutes):**\n\nThe examiner asks about familiar topics: home, work/study, hobbies, family, daily routine.\n\n✅ **How to answer:**\n• Give a 2-3 sentence answer (not too short, not too long)\n• Use the **AREA** technique:\n  - **A**nswer the question\n  - **R**eason (why/how)\n  - **E**xample\n  - **A**lternative (or add more info)\n\n**Example:**\nQ: *Do you enjoy cooking?*\nA: *Yes, I really enjoy cooking. I find it relaxing after a busy day at work. For example, at weekends I often try new recipes from different countries. It\'s also a great way to bring family together.*\n\n⚠️ **Avoid:** One-word answers!',
              exercises: [
                { type: 'multiple_choice', question: 'IELTS Speaking Part 1 lasts approximately:', options: ['1-2 minutes', '4-5 minutes', '10 minutes', '15 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'Which is the best answer to "Do you like music?"', options: ['Yes.', 'Yes, I do.', 'Yes, I love music because it helps me relax. For example, I listen to it when I study.', 'Music is very good.'], answer: 2 },
                { type: 'fill_blank', question: 'AREA stands for Answer, Reason, Example, and ___.', answer: 'Alternative', hint: 'Add more or a different angle' },
              ],
            },
          },
          {
            id: 'ie2l2', title: 'Speaking Part 2: Long Turn', type: 'speaking', xp: 50,
            content: {
              intro: 'Master the IELTS Speaking Part 2 long turn!',
              explanation: '🎤 **IELTS Speaking Part 2 (3-4 minutes):**\n\nYou receive a task card. You have 1 minute to prepare, then speak for 1-2 minutes.\n\n**Sample task card:**\n*Describe a place you have visited that you particularly enjoyed.*\n*You should say:*\n*• where it is*\n*• when you visited*\n*• what you did there*\n*• and explain why you enjoyed it*\n\n✅ **Tips:**\n• Use your 1 minute to note key points\n• Use ALL the bullet points on the card\n• Use a variety of tenses\n• Speak naturally — don\'t memorize!\n• End with a strong concluding sentence\n\n🎯 **Target:** 1.5-2 minutes of speech',
              exercises: [
                { type: 'multiple_choice', question: 'How much preparation time do you have in Part 2?', options: ['30 seconds', '1 minute', '2 minutes', '5 minutes'], answer: 1 },
                { type: 'multiple_choice', question: 'You should speak for approximately:', options: ['30 seconds', '1 minute', '2 minutes', '5 minutes'], answer: 2 },
                { type: 'fill_blank', question: 'In Part 2, you should address ___ the bullet points.', answer: 'all', hint: 'Every / All / Some?' },
              ],
            },
          },
          {
            id: 'ie2l3', title: 'Fluency & Coherence', type: 'speaking', xp: 50,
            content: {
              intro: 'Improve your fluency for a higher IELTS band score!',
              explanation: '🗣️ **Fluency & Coherence Tips:**\n\n**What examiners listen for:**\n• Speaks at natural pace (not too fast/slow)\n• Doesn\'t pause too much\n• Ideas are connected and logical\n• Uses discourse markers naturally\n\n**Discourse markers to use:**\n• *Well, ...* / *Actually, ...*\n• *As I was saying,...*\n• *What I mean is,...*\n• *To be honest,...*\n• *Having said that,...*\n• *Come to think of it,...*\n\n**Fillers (use sparingly):**\n• *That\'s an interesting question...*\n• *Let me think about that for a moment...*\n\n⚠️ **Avoid:** Long silences, repeating "ummm", repeating the question word-for-word.',
              exercises: [
                { type: 'multiple_choice', question: 'Which is an appropriate filler in IELTS?', options: ['Ummm... ummm...', 'That\'s an interesting question, let me think...', 'I don\'t know.', 'Can you repeat?'], answer: 1 },
                { type: 'fill_blank', question: '"___ said that, I do think there are some advantages." (discourse marker)', answer: 'Having', hint: 'Having/Being/Doing' },
                { type: 'multiple_choice', question: 'A band 7 speaker:', options: ['Never pauses', 'Speaks very fast', 'Speaks at natural pace with minimal hesitation', 'Uses perfect grammar always'], answer: 2 },
              ],
            },
          },
          {
            id: 'ie2l4', title: 'Vocabulary for High Scores', type: 'vocabulary', xp: 50,
            content: {
              intro: 'Learn advanced vocabulary to boost your IELTS band score!',
              vocabulary: [
                { word: 'Paramount', translation: 'بالغ الأهمية', example: 'Education is of paramount importance.' },
                { word: 'Unprecedented', translation: 'غير مسبوق', example: 'The pandemic caused unprecedented disruption.' },
                { word: 'Fundamental', translation: 'جوهري/أساسي', example: 'This is a fundamental problem.' },
                { word: 'Substantial', translation: 'كبير/ملحوظ', example: 'There has been a substantial increase.' },
                { word: 'Consequently', translation: 'وبالتالي', example: 'The company failed. Consequently, it closed.' },
                { word: 'Nevertheless', translation: 'ومع ذلك', example: 'It was difficult. Nevertheless, she succeeded.' },
                { word: 'Albeit', translation: 'وإن كان', example: 'It was a success, albeit a small one.' },
                { word: 'Proliferation', translation: 'انتشار/تكاثر', example: 'The proliferation of smartphones has changed life.' },
              ],
              exercises: [
                { type: 'multiple_choice', question: '"Paramount" means:', options: ['صغير', 'بالغ الأهمية', 'غير متأكد', 'نادر'], answer: 1 },
                { type: 'fill_blank', question: 'The flood caused ___ (غير مسبوق) damage.', answer: 'unprecedented', hint: 'Never seen before' },
                { type: 'multiple_choice', question: '"Nevertheless" is used to:', options: ['Add a similar point', 'Give an example', 'Show contrast/surprise', 'Show cause'], answer: 2 },
                { type: 'match', question: 'Match advanced vocabulary', pairs: [['Paramount','بالغ الأهمية'],['Substantial','كبير'],['Consequently','وبالتالي'],['Unprecedented','غير مسبوق']] },
              ],
            },
          },
        ],
      },
    ],
  },
]

// Helper: get all lessons flat
export function getCourseById(courseId) {
  return COURSES.find(c => c.id === courseId)
}

export function getAllLessons(courseId) {
  const course = COURSES.find(c => c.id === courseId)
  if (!course) return []
  return course.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id, unitTitle: u.title })))
}

export function getTotalLessons(courseId) {
  return getAllLessons(courseId).length
}

export function getCompletionPercent(courseId) {
  const total = getTotalLessons(courseId)
  if (total === 0) return 0
  const { completedLessons = [] } = loadProgress(courseId)
  const done = Math.min(completedLessons.length, total)
  return Math.round((done / total) * 100)
}

// Helper: get progress key
export function getProgressKey(courseId) {
  return `lb_progress_${courseId}`
}

// Helper: load progress from localStorage
export function loadProgress(courseId) {
  try {
    const raw = localStorage.getItem(getProgressKey(courseId))
    return raw ? JSON.parse(raw) : { completedLessons: [], xp: 0, streak: 0, lastActivity: null }
  } catch { return { completedLessons: [], xp: 0, streak: 0, lastActivity: null } }
}

// Helper: save progress
export function saveProgress(courseId, progress) {
  localStorage.setItem(getProgressKey(courseId), JSON.stringify(progress))
}
