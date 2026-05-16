import { useState, useRef, useEffect, useCallback } from 'react'

// ── Knowledge Base ─────────────────────────────────────────────────────────────
// Each entry: { id, category, patterns[], reply(ctx), followUps[], tip? }
const KB = [
  // ── Greetings ──
  {
    id: 'greet', category: 'general',
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings', 'howdy', 'hiya', 'what\'s up', 'whats up'],
    reply: () => "Hello! 👋 I'm **Luna**, your personal English tutor!\n\nI can help you with:\n• 📝 Grammar & tenses\n• 📚 Vocabulary & idioms\n• ✍️ Writing skills\n• 🗣️ Speaking & pronunciation\n• 🎯 IELTS / TOEFL prep\n• 🧩 Interactive exercises\n\nWhat would you like to work on today?",
    followUps: ['Explain present perfect', 'Common idioms', 'IELTS tips', 'Quiz me on grammar'],
  },
  {
    id: 'how_are_you', category: 'general',
    patterns: ['how are you', 'how r u', 'how do you do', 'are you okay', 'you good'],
    reply: () => "I'm doing wonderfully, thank you for asking! 😄\n\nI'm always ready to help you improve your English. Whether it's grammar, vocabulary, writing, or speaking — I've got you covered!\n\nWhat shall we work on?",
    followUps: ['Show me grammar topics', 'Vocabulary building', 'Take a quiz'],
  },

  // ── Grammar: Tenses ──
  {
    id: 'present_simple', category: 'grammar',
    patterns: ['present simple', 'simple present', 'present tense', 'present form'],
    reply: () => "📝 **Present Simple Tense**\n\n**When to use it:**\n• Habits & routines: *I drink coffee every morning.*\n• Facts & truths: *Water boils at 100°C.*\n• Schedules: *The train leaves at 8 AM.*\n• Feelings & opinions: *She loves music.*\n\n**Structure:**\n• ✅ I/you/we/they + base verb: *I walk, they play*\n• ✅ He/she/it + verb + **s/es**: *She walks, he watches*\n• ❌ Questions: *Do you work here? Does she know?*\n• ❌ Negatives: *I don't like it. She doesn't agree.*\n\n💡 **Tip:** Add -es after sh, ch, x, o, s: *watches, goes, fixes*",
    followUps: ['Present continuous', 'Present perfect', 'Quiz me on tenses', 'Common tense mistakes'],
  },
  {
    id: 'present_continuous', category: 'grammar',
    patterns: ['present continuous', 'present progressive', 'am is are doing', 'ing form', 'currently doing'],
    reply: () => "📝 **Present Continuous Tense**\n\n**When to use it:**\n• Actions happening NOW: *She is studying right now.*\n• Temporary situations: *I'm staying at a hotel this week.*\n• Planned future: *We're meeting tomorrow at 3.*\n• Changing/developing trends: *English is becoming global.*\n\n**Structure:** Subject + am/is/are + verb**-ing**\n• *I am working | She is sleeping | They are running*\n\n**Spelling rules for -ing:**\n• Most verbs: add -ing → *work → working*\n• End in -e: drop e → *write → writing*\n• Short verb (CVC): double last letter → *run → running*\n\n⚠️ **State verbs DON'T use continuous:**\n• ❌ *I am knowing the answer.*\n• ✅ *I know the answer.*\n*Know, love, hate, want, need, believe, own...*",
    followUps: ['Present simple', 'Past continuous', 'State verbs explained', 'Quiz me'],
  },
  {
    id: 'past_simple', category: 'grammar',
    patterns: ['past simple', 'simple past', 'past tense', 'yesterday', 'last year', 'irregular verbs'],
    reply: () => "📝 **Past Simple Tense**\n\n**When to use it:**\n• Completed actions: *I visited Cairo last week.*\n• A sequence of past events: *He woke up, showered, and left.*\n• Past habits: *She walked to school every day.*\n\n**Structure:**\n• Regular verbs: + **-ed** → *walked, played, watched*\n• Irregular verbs: different form → *go→went, eat→ate, see→saw*\n\n**Questions & Negatives use DID:**\n• *Did you go? | I didn't see it.*\n\n📋 **Key irregular verbs:**\n| Base | Past |\n|------|------|\n| go | went |\n| have | had |\n| make | made |\n| take | took |\n| come | came |\n| know | knew |\n| give | gave |",
    followUps: ['Past continuous', 'Past perfect', 'Irregular verbs list', 'Quiz me on past tense'],
  },
  {
    id: 'past_continuous', category: 'grammar',
    patterns: ['past continuous', 'past progressive', 'was doing', 'were doing', 'was playing'],
    reply: () => "📝 **Past Continuous Tense**\n\n**When to use it:**\n• Action IN PROGRESS at a past moment: *At 8pm, I was reading.*\n• Background action interrupted: *I was cooking **when** she called.*\n• Two parallel past actions: *He was studying **while** she was sleeping.*\n• Setting a scene: *The sun was shining and birds were singing...*\n\n**Structure:** Subject + was/were + verb**-ing**\n• *I/he/she/it was + -ing*\n• *You/we/they were + -ing*\n\n🔑 **Key connector words:**\n• **When** → interrupting action (past simple)\n• **While** → parallel actions (both continuous)",
    followUps: ['Past simple', 'Past perfect', 'When vs While', 'Quiz me'],
  },
  {
    id: 'present_perfect', category: 'grammar',
    patterns: ['present perfect', 'have been', 'has been', 'have done', 'has done', 'ever never just already yet'],
    reply: () => "📝 **Present Perfect Tense**\n\n**When to use it:**\n• Life experience: *Have you ever visited London?*\n• Recent action (result matters): *She has just finished her report.*\n• Unfinished time period: *I have lived here for 5 years.*\n• With: **ever, never, just, already, yet, for, since**\n\n**Structure:** have/has + **past participle**\n• *I have eaten | She has gone | They have seen*\n\n⚠️ **Never use with specific past times!**\n• ❌ *I have visited Paris yesterday.*\n• ✅ *I visited Paris yesterday.* (Past Simple)\n• ✅ *I have visited Paris before.* (PP - experience)\n\n🔑 **For vs Since:**\n• **For** + duration: *for 3 years, for a week*\n• **Since** + point in time: *since 2020, since Monday*",
    followUps: ['Present perfect continuous', 'Past simple vs present perfect', 'Quiz me', 'For vs Since'],
  },
  {
    id: 'past_perfect', category: 'grammar',
    patterns: ['past perfect', 'had done', 'had been', 'pluperfect', 'before in the past'],
    reply: () => "📝 **Past Perfect Tense**\n\n**When to use it:**\nTo show that one past action happened BEFORE another past action.\n\n**Structure:** had + past participle\n• *She had already left when I arrived.*\n• *By the time the film started, we had found our seats.*\n\n📊 **Timeline thinking:**\n```\nOLDER ←──────── NEWER\nhad eaten     →  arrived at party\nhad finished  →  she called me\n```\n\n**Common patterns:**\n• *When I arrived, he **had already** gone.*\n• *I **had never** seen snow before that trip.*\n• *By 2020, she **had worked** there for 10 years.*\n\n💡 **Tip:** Use past perfect to avoid confusion about which event happened first!",
    followUps: ['Present perfect', 'Past simple', 'Quiz me on perfect tenses'],
  },
  {
    id: 'future', category: 'grammar',
    patterns: ['future tense', 'will', 'going to', 'future simple', 'shall', 'will be doing', 'future plans'],
    reply: () => "📝 **Future Tenses**\n\n🔹 **Will** — spontaneous decisions, offers, predictions:\n• *I'll help you with that! (just decided)*\n• *It will probably rain tomorrow.*\n• *She will be a great doctor one day.*\n\n🔹 **Going to** — plans already made, evidence-based predictions:\n• *I'm going to study medicine. (planned)*\n• *Look at those clouds — it's going to rain!*\n\n🔹 **Present Continuous** — fixed arrangements:\n• *I'm meeting the doctor at 3pm tomorrow.*\n\n🔹 **Future Continuous** — action in progress at a future time:\n• *This time tomorrow, I'll be flying to Dubai.*\n\n🔹 **Future Perfect** — completed before a future point:\n• *By June, I will have finished my degree.*",
    followUps: ['Will vs Going to quiz', 'Future continuous', 'Future perfect', 'Quiz me'],
  },
  {
    id: 'conditionals', category: 'grammar',
    patterns: ['conditional', 'if clause', 'if sentence', 'zero conditional', 'first conditional', 'second conditional', 'third conditional', 'mixed conditional'],
    reply: () => "📝 **Conditionals**\n\n0️⃣ **Zero** — general truths, scientific facts:\n• *If you heat water to 100°C, **it boils**.*\n• Structure: If + present, present\n\n1️⃣ **First** — real, possible future:\n• *If it rains tomorrow, **I will stay** home.*\n• Structure: If + present, will + base\n\n2️⃣ **Second** — unreal/hypothetical present/future:\n• *If I **were** rich, I **would travel** the world.*\n• Structure: If + past, would + base\n⚠️ Use *were* for ALL subjects (not *was*) in formal English\n\n3️⃣ **Third** — impossible past (regrets):\n• *If I **had studied** harder, I **would have passed**.*\n• Structure: If + past perfect, would have + past participle\n\n🔀 **Mixed** — past condition, present result:\n• *If I **had taken** that job, I **would be** rich now.*",
    followUps: ['Quiz me on conditionals', 'Wish sentences', 'Second conditional practice', 'Third conditional examples'],
  },
  {
    id: 'passive_voice', category: 'grammar',
    patterns: ['passive', 'passive voice', 'active passive', 'is made', 'was built', 'be done', 'by the agent'],
    reply: () => "📝 **Passive Voice**\n\n**When to use passive:**\n• The action is more important than the doer\n• We don't know who did the action\n• Formal/academic writing\n\n**Active → Passive formula:**\nObject + **be** (conjugated) + **past participle** + (by + agent)\n\n| Tense | Active | Passive |\n|-------|--------|---------|\n| Present S | They make cars here. | Cars **are made** here. |\n| Past S | She wrote the report. | The report **was written** by her. |\n| Present P | They have fixed it. | It **has been fixed**. |\n| Future | They will deliver it. | It **will be delivered**. |\n\n💡 **Tip for academic writing:**\n*The experiment was conducted...* (passive = objective tone)",
    followUps: ['Passive voice quiz', 'Reported speech', 'Academic writing tips', 'Quiz me'],
  },
  {
    id: 'reported_speech', category: 'grammar',
    patterns: ['reported speech', 'indirect speech', 'direct speech', 'he said that', 'she told me', 'reported questions'],
    reply: () => "📝 **Reported Speech (Indirect Speech)**\n\n**Tense backshift rules:**\n| Direct | Reported |\n|--------|----------|\n| present simple | → past simple |\n| past simple | → past perfect |\n| will | → would |\n| can | → could |\n| present perfect | → past perfect |\n\n**Examples:**\n• *\"I am tired.\"* → She said **she was tired**.\n• *\"I will call you.\"* → He said **he would call** me.\n• *\"I have finished.\"* → She said **she had finished**.\n\n**Reporting questions:**\n• Yes/No: *\"Are you ready?\"* → He asked **if I was ready**.\n• Wh-: *\"Where do you live?\"* → She asked **where I lived**.\n⚠️ No inversion in reported questions!\n❌ *He asked where did I live.*\n✅ *He asked where I lived.*\n\n**Reporting verbs:** said, told, asked, explained, suggested, warned, promised",
    followUps: ['Quiz me on reported speech', 'Passive voice', 'Grammar exercises'],
  },
  {
    id: 'articles', category: 'grammar',
    patterns: ['article', 'a or an', 'the', 'when to use a', 'when to use an', 'when to use the', 'definite article', 'indefinite article', 'no article'],
    reply: () => "📝 **Articles: a, an, the**\n\n🔹 **A** — consonant sounds (first mention):\n• *a book, a university ('yoo' sound), a European*\n\n🔹 **An** — vowel sounds:\n• *an apple, an hour (h is silent), an honest man*\n\n🔹 **The** — specific/known/unique things:\n• *the book I told you about (specific)*\n• *the sun, the moon, the Eiffel Tower (unique)*\n• *the sky, the internet (only one exists)*\n\n🔹 **No article (Ø)** — general/plural/uncountable:\n• *Ø Music makes me happy.*\n• *Ø Dogs are friendly animals.*\n• *Ø Water is essential for life.*\n\n⚠️ **Tricky cases:**\n• *school/hospital/prison* (general purpose) → no article\n• *the school* (specific building) → use the",
    followUps: ['Articles quiz', 'Prepositions', 'Common grammar mistakes', 'Quiz me'],
  },
  {
    id: 'prepositions', category: 'grammar',
    patterns: ['preposition', 'in on at', 'prepositions of time', 'prepositions of place', 'at the end', 'in the end'],
    reply: () => "📝 **Prepositions**\n\n⏰ **Time:**\n• **AT** — clock time, holidays: *at 5pm, at Christmas, at night*\n• **ON** — days & dates: *on Monday, on July 4th, on my birthday*\n• **IN** — months, years, seasons, long periods: *in July, in 2024, in summer, in the morning*\n\n📍 **Place:**\n• **AT** — specific point/location: *at the bus stop, at home, at work*\n• **ON** — surfaces/lines: *on the table, on the wall, on the street*\n• **IN** — enclosed spaces: *in the box, in Egypt, in the car, in a room*\n\n🔑 **Common preposition phrases:**\n• *interested **in*** | *good **at*** | *afraid **of***\n• *depend **on*** | *arrive **at/in*** | *listen **to***\n• *congratulate ... **on*** | *apologize **for***\n\n💡 **At/in for cities:** Arrive **in** a city, but **at** specific spots inside it.",
    followUps: ['Prepositions quiz', 'Common preposition mistakes', 'Articles', 'Quiz me'],
  },

  // ── Vocabulary ──
  {
    id: 'idioms', category: 'vocabulary',
    patterns: ['idiom', 'idioms', 'common phrases', 'english expression', 'expressions', 'slang'],
    reply: () => "🗣️ **Common English Idioms**\n\n• **Break a leg** → Good luck!\n• **Hit the nail on the head** → Exactly right\n• **Under the weather** → Feeling sick\n• **Bite the bullet** → Endure something painful\n• **Cost an arm and a leg** → Very expensive\n• **Once in a blue moon** → Very rarely\n• **It's raining cats and dogs** → Raining very hard\n• **Let the cat out of the bag** → Reveal a secret\n• **Spill the beans** → Share secret information\n• **Beat around the bush** → Avoid the main topic\n• **Hit the sack** → Go to bed\n• **Piece of cake** → Very easy\n• **Kill two birds with one stone** → Achieve two things at once\n• **The ball is in your court** → It's your decision now\n\n💡 **Tip:** Learn 2-3 idioms per week and use them in sentences!",
    followUps: ['More idioms', 'Phrasal verbs', 'Vocabulary quiz', 'Business idioms'],
  },
  {
    id: 'phrasal_verbs', category: 'vocabulary',
    patterns: ['phrasal verb', 'phrasal verbs', 'two word verb', 'give up', 'look up', 'put off', 'come across'],
    reply: () => "📚 **Essential Phrasal Verbs**\n\n**With GET:**\n• **Get along (with)** — have a good relationship: *We get along well.*\n• **Get over** — recover from: *It took weeks to get over the flu.*\n• **Get rid of** — eliminate: *Get rid of old clothes.*\n\n**With PUT:**\n• **Put off** — postpone: *Don't put off your homework.*\n• **Put up with** — tolerate: *I can't put up with noise.*\n• **Put across** — communicate: *She put her ideas across clearly.*\n\n**With LOOK:**\n• **Look up** — search for: *Look up the meaning.*\n• **Look forward to** — anticipate: *I look forward to seeing you.*\n• **Look into** — investigate: *Police are looking into it.*\n\n**With COME:**\n• **Come across** — find unexpectedly: *I came across an old letter.*\n• **Come up with** — think of: *She came up with a great plan.*\n\n⚠️ **Separable vs Inseparable** — some can split:\n• ✅ *Look the word up* OR *Look up the word*\n• ❌ *Look into it* (NOT *look it into*)",
    followUps: ['More phrasal verbs', 'Idioms', 'Collocations', 'Quiz me'],
  },
  {
    id: 'collocations', category: 'vocabulary',
    patterns: ['collocation', 'collocations', 'word combinations', 'make do', 'strong collocations', 'natural english'],
    reply: () => "📚 **Collocations** — words that go naturally together\n\n**Make vs Do:**\n• **MAKE:** a mistake, a decision, a suggestion, money, an effort, a noise, a difference, friends\n• **DO:** homework, exercise, research, your best, a course, damage, harm\n\n**Strong adjective collocations:**\n• *deeply in love / asleep / concerned*\n• *highly recommended / skilled / unlikely*\n• *totally exhausted / wrong / different*\n• *seriously ill / injured / consider*\n\n**Verb + noun collocations:**\n• *pass/fail/take* an exam\n• *give/make/deliver* a speech\n• *break/keep/make* a promise\n• *achieve/reach/meet* a goal\n\n💡 **Why collocations matter:** Native speakers choose these naturally. Learning them makes your English sound much more fluent!",
    followUps: ['Phrasal verbs', 'Vocabulary building tips', 'IELTS vocabulary', 'Quiz me'],
  },
  {
    id: 'synonyms', category: 'vocabulary',
    patterns: ['synonym', 'synonyms', 'another word for', 'different word for', 'word instead of'],
    reply: () => "📚 **Powerful Synonyms to Upgrade Your Writing**\n\n**Instead of GOOD:** excellent, outstanding, remarkable, splendid, superb, commendable\n\n**Instead of BAD:** dreadful, appalling, disastrous, inadequate, substandard, inferior\n\n**Instead of BIG:** enormous, substantial, vast, immense, colossal, considerable\n\n**Instead of SAY:** state, claim, argue, suggest, assert, emphasize, acknowledge\n\n**Instead of SHOW:** demonstrate, illustrate, reveal, highlight, indicate, prove\n\n**Instead of IMPORTANT:** crucial, essential, significant, fundamental, critical, vital\n\n**Instead of HAPPY:** delighted, thrilled, elated, content, overjoyed, pleased\n\n💡 **IELTS tip:** Avoid repeating the same word — use synonyms to show range!",
    followUps: ['Academic vocabulary', 'IELTS writing tips', 'Collocations', 'Quiz me'],
  },
  {
    id: 'pronunciation', category: 'speaking',
    patterns: ['pronunciation', 'pronounce', 'how to say', 'silent letter', 'silent letters', 'accent', 'stress'],
    reply: () => "🗣️ **Pronunciation Guide**\n\n**Silent letters:**\n• Silent **K** before N: *know, knife, knee, knock*\n• Silent **W** before R: *write, wrong, wrap, wrist*\n• Silent **G** before N: *sign, foreign, gnome, align*\n• Silent **B** after M: *climb, bomb, comb, thumb*\n• Silent **H**: *hour, honest, heir, ghost*\n\n**Tricky vowel sounds:**\n• 'ou': *out /aʊ/ | soup /uː/ | could /ʊ/ | country /ʌ/*\n• 'ea': *eat /iː/ | bread /ɛ/ | steak /eɪ/*\n• 'ough': *through /uː/ | though /oʊ/ | tough /ʌ/*\n\n**Word stress patterns:**\n• 2-syllable nouns: stress first → **TA**-ble, **CI**-ty\n• 2-syllable verbs: stress second → re-CORD, ex-PORT\n• Words ending -tion/-sion: stress syllable before → edu-CA-tion\n\n🎧 **Practice tip:** Use forvo.com to hear words pronounced by native speakers!",
    followUps: ['British vs American English', 'Speaking tips', 'Common mispronunciations', 'Quiz me'],
  },
  {
    id: 'word_of_day', category: 'vocabulary',
    patterns: ['word of the day', 'new word', 'advanced word', 'sophisticated word', 'impress', 'c2 word', 'b2 word'],
    reply: () => {
      const words = [
        { word: 'Serendipity', pos: 'noun', def: 'Finding something good without looking for it', example: 'Meeting my best friend was pure serendipity.' },
        { word: 'Ephemeral', pos: 'adj', def: 'Lasting for only a short time', example: 'Fame can be ephemeral — enjoy it while it lasts.' },
        { word: 'Perspicacious', pos: 'adj', def: 'Having a ready insight; shrewd', example: 'The perspicacious manager spotted the flaw immediately.' },
        { word: 'Ubiquitous', pos: 'adj', def: 'Present or found everywhere', example: 'Smartphones have become ubiquitous in modern life.' },
        { word: 'Loquacious', pos: 'adj', def: 'Tending to talk a great deal', example: 'My loquacious neighbor talks for hours.' },
        { word: 'Sycophant', pos: 'noun', def: 'A person who tries to gain favor by flattering others', example: 'The boss was surrounded by sycophants.' },
        { word: 'Pernicious', pos: 'adj', def: 'Having a harmful effect, especially gradually', example: 'The pernicious influence of misinformation spreads slowly.' },
      ]
      const w = words[Math.floor(Math.random() * words.length)]
      return `📖 **Word of the Day**\n\n🌟 **${w.word}** *(${w.pos})*\n\n**Meaning:** ${w.def}\n\n**Example:** *${w.example}*\n\n💡 Try using this word in a sentence today!`
    },
    followUps: ['Another word', 'Synonyms', 'Academic vocabulary', 'Vocabulary quiz'],
  },

  // ── Writing ──
  {
    id: 'essay_writing', category: 'writing',
    patterns: ['essay', 'how to write essay', 'essay structure', 'essay tips', 'paragraph', 'body paragraph'],
    reply: () => "✍️ **Essay Writing Structure**\n\n**📌 Introduction (10%)**\n• Hook: question, quote, surprising fact\n• Background: 1-2 sentences of context\n• Thesis: your main argument/position\n\n**📌 Body Paragraphs (80%) — each paragraph:**\n• Topic sentence (main idea)\n• Evidence / example\n• Explanation (why does this matter?)\n• Linking to thesis\n\n**📌 Conclusion (10%)**\n• Restate thesis (different words!)\n• Summarize key points\n• Final thought, recommendation, or prediction\n\n🔑 **Paragraph formula (PEEL):**\n**P**oint → **E**vidence → **E**xplanation → **L**ink back\n\n**Linking words by function:**\n• Add: *furthermore, moreover, in addition*\n• Contrast: *however, nevertheless, on the other hand*\n• Result: *therefore, consequently, as a result*\n• Example: *for instance, such as, for example*",
    followUps: ['IELTS writing tips', 'Academic vocabulary', 'Linking words', 'Writing quiz'],
  },
  {
    id: 'email_writing', category: 'writing',
    patterns: ['email', 'formal email', 'business email', 'write email', 'professional email', 'letter writing'],
    reply: () => "📧 **Professional Email Writing**\n\n**Subject line** — specific & clear:\n• ✅ *Meeting Request — Thursday 3pm*\n• ❌ *Hi* or *Important*\n\n**Salutation:**\n• Formal: *Dear Mr./Ms. [Last Name],*\n• Semi-formal: *Dear [First Name],*\n• Unknown: *To Whom It May Concern,*\n\n**Opening line options:**\n• *I hope this email finds you well.*\n• *I am writing to enquire about...*\n• *I am contacting you regarding...*\n\n**Body:** Short paragraphs (3-4 lines each)\n\n**Closing:**\n• *Best regards,* (most common)\n• *Yours sincerely,* (formal, named recipient)\n• *Yours faithfully,* (formal, unknown recipient)\n\n**Common email phrases:**\n• *Please find attached...*\n• *I look forward to hearing from you.*\n• *Should you have any questions, please don't hesitate to contact me.*",
    followUps: ['Formal vs informal writing', 'Essay writing', 'IELTS letter task', 'Writing quiz'],
  },
  {
    id: 'linking_words', category: 'writing',
    patterns: ['linking words', 'connectors', 'transition words', 'discourse markers', 'however therefore', 'linking phrases'],
    reply: () => "✍️ **Linking Words & Connectors**\n\n**To ADD information:**\n*Furthermore, Moreover, In addition, Additionally, Also, Besides*\n\n**To CONTRAST:**\n*However, Nevertheless, On the other hand, In contrast, Whereas, Despite, Although, Even though*\n\n**To show RESULT/CAUSE:**\n*Therefore, Consequently, As a result, Hence, Thus, This leads to*\n\n**To give EXAMPLES:**\n*For instance, For example, Such as, To illustrate, Namely*\n\n**To CONCLUDE:**\n*In conclusion, To sum up, Overall, In summary, To conclude*\n\n**To show TIME sequence:**\n*Firstly, Then, Subsequently, Eventually, Finally, Meanwhile*\n\n⚠️ **Avoid overusing 'also' and 'and' — vary your connectors!**\n\n💡 **IELTS tip:** Using a range of linking words improves your Coherence & Cohesion score!",
    followUps: ['IELTS writing tips', 'Essay structure', 'Academic vocabulary', 'Quiz me'],
  },

  // ── Speaking ──
  {
    id: 'speaking_tips', category: 'speaking',
    patterns: ['speaking', 'speak english', 'speaking tips', 'fluency', 'fluent', 'how to speak', 'improve speaking', 'confidence'],
    reply: () => "🗣️ **How to Improve Speaking Fluency**\n\n**Daily habits:**\n1. 🗣️ **Think in English** — narrate your day mentally\n2. 📱 **Shadowing** — listen to a native speaker and repeat simultaneously\n3. 🎙️ **Record yourself** — listen back and spot issues\n4. 📺 **Watch English content** — with subtitles first, then without\n5. 🗺️ **Describe images** — look at photos and describe them aloud\n\n**In conversations:**\n• Use **filler phrases** to buy time: *That's a great question, Let me think...*\n• **Paraphrase** when you don't know a word: *It's a thing you use to...*\n• Ask for clarification: *Could you repeat that? / What do you mean by...?*\n\n**Building confidence:**\n• Start small — even talking to yourself counts!\n• Mistakes are evidence of learning, not failure\n• IELTS speaking: give full answers, never just Yes/No\n\n🚀 **Key truth:** Fluency comes from speaking, not just studying!",
    followUps: ['Pronunciation tips', 'IELTS speaking tips', 'Common spoken mistakes', 'Quiz me'],
  },
  {
    id: 'british_american', category: 'speaking',
    patterns: ['british english', 'american english', 'uk vs us', 'british vs american', 'difference british american', 'colour color'],
    reply: () => "🇬🇧 vs 🇺🇸 **British vs American English**\n\n**Spelling differences:**\n| British | American |\n|---------|----------|\n| colour | color |\n| organisation | organization |\n| centre | center |\n| travelled | traveled |\n| cheque | check |\n| grey | gray |\n\n**Vocabulary differences:**\n| British | American |\n|---------|----------|\n| flat | apartment |\n| lift | elevator |\n| biscuit | cookie |\n| chips | fries |\n| boot (of car) | trunk |\n| queue | line |\n| autumn | fall |\n\n**Grammar differences:**\n• *Have you got...?* (British) vs *Do you have...?* (American)\n• *I've just eaten* (British) vs *I just ate* (American)\n\n💡 Both are correct — just be consistent in your writing!",
    followUps: ['Pronunciation', 'IELTS tips', 'Vocabulary building', 'Quiz me'],
  },

  // ── Exam Prep ──
  {
    id: 'ielts', category: 'exam',
    patterns: ['ielts', 'ielts tips', 'ielts writing', 'ielts speaking', 'ielts reading', 'ielts listening', 'ielts band', 'ielts score'],
    reply: () => "🎯 **IELTS Exam Guide**\n\n**Writing Task 1 (20 min):**\n• Describe a graph/chart/diagram (150+ words)\n• Focus on key trends & comparisons\n• Don't give opinions\n\n**Writing Task 2 (40 min):**\n• Essay (250+ words)\n• Plan 5 min → Write 30 min → Check 5 min\n• Use PEEL paragraph structure\n\n**Speaking:**\n• Part 1: Personal questions (4-5 min)\n• Part 2: Long turn — speak 1-2 min on a topic card\n• Part 3: Discussion on abstract topics\n• ✅ Extend answers — never just Yes/No\n• ✅ Use a range of vocabulary & tenses\n\n**Reading:**\n• Skim text first, then answer\n• T/F/NG: 'Not Given' = text doesn't mention it\n• Always look for paraphrases of keywords\n\n**Listening:**\n• Read questions BEFORE audio\n• Spelling counts!\n• Watch for distractors (they mention wrong answer first)\n\n📌 **Score bands:** 5=Modest | 6=Competent | 7=Good | 8=Very Good | 9=Expert",
    followUps: ['IELTS Writing Task 2 tips', 'IELTS vocabulary', 'Practice essay', 'TOEFL vs IELTS'],
  },
  {
    id: 'toefl', category: 'exam',
    patterns: ['toefl', 'toefl tips', 'toefl preparation', 'toefl writing', 'toefl speaking'],
    reply: () => "🎯 **TOEFL Exam Guide**\n\n**Reading (54-72 min):**\n• 3-4 academic passages\n• Focus: main idea, author's purpose, vocabulary in context\n\n**Listening (41-57 min):**\n• Take notes — key points only\n• Focus on main idea, attitude, organization\n\n**Speaking (17 min, 4 tasks):**\n• Tasks 1-2: Independent (your opinion)\n• Tasks 3-4: Integrated (read/listen → speak)\n• Use **PREP** template: Point → Reason → Example → Point\n• Speak clearly and at natural pace\n\n**Writing (50 min, 2 tasks):**\n• Integrated: Read 3 min + Listen + Write 20 min (150-225 words)\n• Academic Discussion: 10 min, 100+ words\n\n📊 **Score:** 0-120 total | Most universities need 80+\n\n💡 **IELTS vs TOEFL:**\n• IELTS: British-style, face-to-face speaking\n• TOEFL: American-style, computer-based, academic focus",
    followUps: ['IELTS tips', 'Academic vocabulary', 'Essay writing', 'Speaking practice'],
  },

  // ── Common Mistakes ──
  {
    id: 'mistakes', category: 'grammar',
    patterns: ['mistake', 'mistakes', 'common mistake', 'error', 'wrong grammar', 'typical errors', 'avoid mistakes'],
    reply: () => "⚠️ **Top 10 Common English Mistakes**\n\n1. ❌ *I am agree* → ✅ *I agree*\n2. ❌ *She don't know* → ✅ *She doesn't know*\n3. ❌ *Yesterday I have eaten* → ✅ *Yesterday I ate*\n4. ❌ *I am very boring* → ✅ *I am very bored*\n5. ❌ *He told me that he is tired* → ✅ *He told me that he **was** tired*\n6. ❌ *I look forward to hear* → ✅ *I look forward to **hearing***\n7. ❌ *Can you explain me?* → ✅ *Can you explain **to** me?*\n8. ❌ *I have 20 years* → ✅ *I am 20 years old*\n9. ❌ *The informations are...* → ✅ *The information is...* (uncountable!)\n10. ❌ *We discussed about it* → ✅ *We discussed it* (no 'about'!)\n\n**Uncountable nouns to remember:**\n*advice, information, furniture, luggage, equipment, news, traffic, weather*\nThese never take a plural -s!",
    followUps: ['More mistakes', 'Uncountable nouns', 'Articles', 'Grammar quiz'],
  },
  {
    id: 'confused_words', category: 'vocabulary',
    patterns: ['confused words', 'confusing words', 'affect effect', 'since for', 'its it\'s', 'than then', 'there their they\'re', 'which that', 'who whom'],
    reply: () => "🔀 **Commonly Confused Words**\n\n**Affect vs Effect:**\n• *Affect* = verb: *The rain **affected** the game.*\n• *Effect* = noun: *The **effect** was immediate.*\n\n**Lie vs Lay:**\n• *Lie* (intransitive): *I **lie** down when I'm tired.*\n• *Lay* (transitive): *Please **lay** the book on the table.*\n\n**Its vs It's:**\n• *Its* = possessive: *The cat licked **its** paw.*\n• *It's* = it is: ***It's** raining outside.*\n\n**Then vs Than:**\n• *Then* = time: *First study, **then** relax.*\n• *Than* = comparison: *English is harder **than** I expected.*\n\n**Who vs Whom:**\n• *Who* = subject: ***Who** called you?*\n• *Whom* = object: *To **whom** did you speak?*\n\n**Fewer vs Less:**\n• *Fewer* = countable: ***Fewer** students passed.*\n• *Less* = uncountable: ***Less** time remains.*",
    followUps: ['More confused words', 'Common mistakes', 'Grammar quiz', 'Quiz me'],
  },

  // ── Courses & Platform ──
  {
    id: 'courses', category: 'general',
    patterns: ['course', 'courses', 'enroll', 'which course', 'recommend course', 'what course', 'start learning', 'beginner course'],
    reply: () => "🎓 **LinguaBridge Courses**\n\n• 🌱 **Beginner English** — Start from zero, master basics\n• 🌿 **Elementary English** — Build on fundamentals\n• 📘 **Intermediate English** — Express complex ideas\n• 🔥 **Advanced English** — Near-native proficiency\n• 🎓 **Academic English** — University & professional writing\n• 🇺🇸 **American English** — US culture & accent\n• ✈️ **Travel English** — Communicate on the go\n• 🎨 **Kids English** — Fun learning for children\n\nVisit the **Courses** page to explore, enroll, and track your progress! 📈\n\n💡 **Not sure your level?** Take our free placement quiz when you sign up!",
    followUps: ['IELTS preparation', 'Placement quiz info', 'How courses work', 'Grammar basics'],
  },
  {
    id: 'motivation', category: 'general',
    patterns: ['motivation', 'motivate', 'hard', 'difficult', 'give up', 'cant do', "can't learn", 'struggle', 'frustrated', 'too hard', 'hopeless'],
    reply: () => "💪 **You've Got This — Don't Give Up!**\n\nEvery expert was once a beginner. Language learning is a marathon, not a sprint. On days when it feels hard, remember:\n\n🌟 **Research shows:**\n• It takes ~480-720 hours to reach B2 in English\n• 15 minutes a day consistently beats 2 hours occasionally\n• Every mistake you make is a step forward\n• Babies make thousands of errors before speaking fluently — and so do language learners!\n\n🔑 **Practical tips for tough days:**\n• Switch to something fun — watch a series or listen to music\n• Track your wins — look at how far you've come\n• Set micro-goals: *\"I'll learn 3 new words today\"*\n• Find a learning buddy for accountability\n\n*\"You don't have to be great to start, but you have to start to be great.\"*\n\nWhat specific topic is challenging you? I'm here to help! 🚀",
    followUps: ['Study tips', 'Speaking confidence', 'Grammar basics', 'Take a quiz'],
  },
  {
    id: 'study_tips', category: 'general',
    patterns: ['study tips', 'how to study', 'study english', 'learn english fast', 'improve english', 'best way to learn'],
    reply: () => "📚 **Proven English Study Strategies**\n\n**The Science-Backed methods:**\n\n1. 🔁 **Spaced Repetition** — Review words at increasing intervals (use Anki app)\n2. 📖 **Extensive Reading** — Read content slightly above your level\n3. 🎧 **Active Listening** — Listen, then write what you heard (dictation)\n4. 🗣️ **Output practice** — Speaking & writing forces active memory use\n5. 🧩 **Contextual learning** — Learn words in sentences, not in isolation\n\n**Daily schedule (30 min/day):**\n• 5 min: Review flashcards\n• 10 min: Read an article or lesson\n• 10 min: Watch/listen to English content\n• 5 min: Write 3-5 sentences using new vocabulary\n\n**Free resources:**\n• BBC Learning English\n• TED Talks (with transcripts)\n• LinguaBridge courses 😊\n• Podcasts: 6 Minute English, English We Speak",
    followUps: ['Vocabulary building', 'Grammar practice', 'Speaking tips', 'Quiz me'],
  },
  {
    id: 'vocabulary_building', category: 'vocabulary',
    patterns: ['vocabulary', 'learn words', 'new words', 'improve vocabulary', 'word list', 'remember words', 'forget words'],
    reply: () => "📚 **Master English Vocabulary — The Right Way**\n\n**Step 1: Learn in context**\n• Don't memorize isolated words\n• Read the word in 2-3 example sentences\n• Understand the connotation, not just definition\n\n**Step 2: Use word families**\n• *create → creation → creative → creatively → creativity*\n• Learning one root = learning many words!\n\n**Step 3: Spaced repetition apps**\n• Anki (free, very powerful)\n• Quizlet\n• LinguaBridge built-in exercises\n\n**Step 4: Active use within 24 hours**\n• Write 2 sentences with the new word\n• Say it aloud 5 times\n• Use it in conversation that day\n\n**Step 5: Daily input**\n• Read 15-20 minutes daily (news, books, articles)\n• 5-10 new words per day = 1,800-3,600 per year!\n\n🎯 **Goal:** Build to 5,000 words for B2 level, 10,000+ for C1",
    followUps: ['Word of the day', 'Collocations', 'IELTS vocabulary', 'Vocabulary quiz'],
  },

  // ── Thank / Goodbye ──
  {
    id: 'thanks', category: 'general',
    patterns: ['thank', 'thanks', 'thank you', 'thx', 'ty', 'appreciate', 'helpful', 'great answer'],
    reply: () => "You're very welcome! 😊 It's a pleasure helping you learn English!\n\nRemember: consistency is the key to fluency. Even 10-15 minutes of practice every day will take you far.\n\nIs there anything else you'd like to explore? I'm always here! 🌟",
    followUps: ['More grammar topics', 'Vocabulary practice', 'Quiz me', 'Study tips'],
  },
  {
    id: 'bye', category: 'general',
    patterns: ['bye', 'goodbye', 'see you', 'see ya', 'later', 'good night', 'good bye', 'ciao', 'farewell'],
    reply: () => "Goodbye! 👋 It was great chatting with you!\n\n🌟 **Before you go, quick tips:**\n• Try to use one new English word today\n• Listen to or watch something in English\n• Practice makes permanent!\n\nCome back anytime — Luna is always here to help! 💙",
    followUps: [],
  },
  {
    id: 'help', category: 'general',
    patterns: ['help', 'what can you do', 'what do you know', 'topics', 'menu', 'options', 'commands', 'what can i ask'],
    reply: () => "🤖 **Here's everything I can help with:**\n\n📝 **Grammar**\nTenses, conditionals, passive voice, reported speech, articles, prepositions\n\n📚 **Vocabulary**\nIdioms, phrasal verbs, collocations, synonyms, confused words, word of the day\n\n✍️ **Writing**\nEssay structure, email writing, linking words, academic style\n\n🗣️ **Speaking & Pronunciation**\nFluency tips, silent letters, word stress, British vs American English\n\n🎯 **Exam Prep**\nIELTS strategies, TOEFL guide, academic vocabulary\n\n🧩 **Interactive**\nType **'quiz me'** for a grammar/vocabulary challenge!\n\n💡 **Tips**\nStudy strategies, motivation, vocabulary building methods\n\nJust ask naturally — like talking to a teacher! 😊",
    followUps: ['Quiz me on grammar', 'Explain present perfect', 'IELTS tips', 'Common idioms'],
  },
  {
    id: 'quiz_request', category: 'general',
    patterns: ['quiz me', 'test me', 'exercise', 'practice', 'give me a question', 'challenge me', 'question please', 'grammar test', 'vocab test'],
    reply: () => '__EXERCISE__', // special marker
    followUps: [],
  },
]

// ── Exercise Bank ──────────────────────────────────────────────────────────────
const EXERCISES = [
  {
    type: 'mcq',
    question: "Choose the correct sentence:",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not like coffee.",
    ],
    correct: 2,
    explanation: "✅ **She doesn't like coffee.**\n\nWith he/she/it, we use **doesn't** (not don't), followed by the BASE form of the verb (not 'likes').",
    category: 'grammar',
  },
  {
    type: 'mcq',
    question: "Which sentence uses the Present Perfect correctly?",
    options: [
      "I have visited Rome last year.",
      "I visited Rome last year.",
      "I am visited Rome.",
      "I visit Rome last year.",
    ],
    correct: 1,
    explanation: "✅ **I visited Rome last year.**\n\nWith a specific past time expression (*last year*), we always use **Past Simple**, NOT Present Perfect.\n\n✅ Correct PP: *I have visited Rome.* (no time mentioned — just the experience)",
    category: 'grammar',
  },
  {
    type: 'mcq',
    question: "Complete: 'If I _____ you, I would apologize immediately.'",
    options: ["am", "was", "were", "will be"],
    correct: 2,
    explanation: "✅ **were** — This is the **Second Conditional** (hypothetical situation).\n\nIn 2nd conditional: If + subject + **were** (formal) or was, ...\n\nUsing *were* for all subjects is considered more grammatically correct in formal English: *If I were you... / If she were here...*",
    category: 'grammar',
  },
  {
    type: 'mcq',
    question: "What does the idiom 'bite the bullet' mean?",
    options: [
      "To eat something hard",
      "To endure a painful situation with courage",
      "To shoot someone",
      "To remain silent",
    ],
    correct: 1,
    explanation: "✅ **To endure a painful situation with courage.**\n\nOrigin: Before modern anesthesia, soldiers literally bit on a bullet to endure the pain of surgery.\n\nExample: *I didn't want to apologize, but I bit the bullet and did it.*",
    category: 'vocabulary',
  },
  {
    type: 'mcq',
    question: "Which word CANNOT be used in plural form?",
    options: ["Advice", "Idea", "Problem", "Book"],
    correct: 0,
    explanation: "✅ **Advice** is an **uncountable noun** — it cannot be pluralized!\n\n❌ *advices* → ✅ *pieces of advice*\n\nOther uncountable nouns: *information, furniture, luggage, equipment, news, traffic*\n\nAlways use them with singular verbs: *The information **is** correct.*",
    category: 'vocabulary',
  },
  {
    type: 'mcq',
    question: "'I ___ here for 5 years.' — Which is correct?",
    options: [
      "am living",
      "live",
      "have been living",
      "lived",
    ],
    correct: 2,
    explanation: "✅ **have been living** — Present Perfect Continuous.\n\nThis shows an action that **started in the past and continues now**.\n\n*I have been living here for 5 years.* (I started 5 years ago and still live here)\n\nKey clue: **for** + duration + ongoing situation → Present Perfect (Continuous)",
    category: 'grammar',
  },
  {
    type: 'mcq',
    question: "Choose the correct preposition: 'She's been waiting ___ 3 o'clock.'",
    options: ["for", "since", "during", "from"],
    correct: 1,
    explanation: "✅ **since** — used with a **specific point in time** (3 o'clock, Monday, 2020, childhood)\n\n**For** = duration: *for 2 hours, for a week*\n**Since** = starting point: *since 3pm, since Monday, since I was a child*",
    category: 'grammar',
  },
  {
    type: 'mcq',
    question: "Which sentence is in the PASSIVE voice?",
    options: [
      "The chef prepared the meal.",
      "The meal was prepared by the chef.",
      "The chef is preparing the meal.",
      "The chef had prepared the meal.",
    ],
    correct: 1,
    explanation: "✅ **The meal was prepared by the chef.**\n\nPassive voice structure: Object + **be** (conjugated) + **past participle** + (by + agent)\n\n*was prepared* = was + past participle → Passive!\n\nThe object (*the meal*) becomes the subject, and the agent (*the chef*) is optional.",
    category: 'grammar',
  },
  {
    type: 'mcq',
    question: "Which phrasal verb means 'to postpone'?",
    options: ["Put up with", "Put off", "Put out", "Put on"],
    correct: 1,
    explanation: "✅ **Put off** = to postpone/delay\n\n*Don't put off your study — do it now!*\n\n• **Put up with** = to tolerate (*I can't put up with the noise.*)\n• **Put out** = to extinguish a fire, or to inconvenience (*The firefighters put out the fire.*)\n• **Put on** = to wear, or to perform (*Put on your coat.*)",
    category: 'vocabulary',
  },
  {
    type: 'mcq',
    question: "Which is the correct reported speech?\nDirect: 'I will call you tomorrow,' he said.",
    options: [
      "He said that he will call me the next day.",
      "He said that he would call me the next day.",
      "He said that he would call me tomorrow.",
      "He told that he would call me the next day.",
    ],
    correct: 1,
    explanation: "✅ **He said that he would call me the next day.**\n\nIn reported speech:\n• *will* → **would**\n• *tomorrow* → **the next day** (time expressions shift too)\n• Use *said* without an object, *told* WITH an object: *He told **me** that...*",
    category: 'grammar',
  },
]

// ── Follow-up chips for fallback ───────────────────────────────────────────────
const DEFAULT_FOLLOW_UPS = [
  'Grammar tenses', 'Common idioms', 'IELTS tips', 'Quiz me', 'Study tips', 'Speaking fluency',
]

// ── Context-aware responses ────────────────────────────────────────────────────
const FOLLOW_UP_RESPONSES = {
  more: {
    idioms: "🗣️ **More English Idioms:**\n\n• **Burn the midnight oil** → Work late into the night\n• **Miss the boat** → Miss an opportunity\n• **The tip of the iceberg** → A small visible part of a larger problem\n• **Sit on the fence** → Avoid taking sides\n• **Hit the ground running** → Start something with great energy\n• **In hot water** → In trouble\n• **A blessing in disguise** → Something good that seemed bad at first\n• **Pull someone's leg** → To joke or tease someone\n• **Under the radar** → Without attracting attention\n• **Go the extra mile** → Make more effort than required",
    phrasal_verbs: "📚 **More Phrasal Verbs:**\n\n**With TURN:**\n• **Turn up** → arrive/appear: *She turned up late.*\n• **Turn down** → refuse: *He turned down the offer.*\n• **Turn out** → result: *It turned out to be a great trip.*\n\n**With BRING:**\n• **Bring up** → raise (child) or mention: *She brought up an interesting point.*\n• **Bring about** → cause: *The rain brought about flooding.*\n\n**With BREAK:**\n• **Break down** → stop working / lose emotional control\n• **Break through** → achieve success after difficulty\n• **Break up** → end a relationship",
    mistakes: "⚠️ **More Common Mistakes:**\n\n11. ❌ *I am knowing* → ✅ *I know* (state verb — no continuous!)\n12. ❌ *Can you borrow me?* → ✅ *Can you lend me?* (borrow = receive, lend = give)\n13. ❌ *I didn't went* → ✅ *I didn't go* (base form after did)\n14. ❌ *He's married with her* → ✅ *He's married to her*\n15. ❌ *She made a research* → ✅ *She did research* (uncountable!)\n16. ❌ *I am very used to speak* → ✅ *I am very used to speaking* (used to + -ing)\n17. ❌ *It depends of* → ✅ *It depends on*\n18. ❌ *According to my opinion* → ✅ *In my opinion* (not 'according to')",
  },
  example: "Here's another example to help clarify! Let me know if you'd like me to go deeper on any grammar point, or type **'quiz me'** to test your understanding! 😊",
}

// ── Matching Logic ─────────────────────────────────────────────────────────────
function scoreEntry(entry, lower) {
  let score = 0
  for (const p of entry.patterns) {
    if (lower.includes(p)) score += p.split(' ').length // multi-word patterns score higher
  }
  return score
}

function getMatch(input) {
  const lower = input.toLowerCase().trim()
  let best = null, bestScore = 0
  for (const entry of KB) {
    const s = scoreEntry(entry, lower)
    if (s > bestScore) { best = entry; bestScore = s }
  }
  return bestScore > 0 ? best : null
}

// Context-aware: detect follow-up intent
function isFollowUp(input) {
  const l = input.toLowerCase()
  return l.includes('more') || l.includes('another') || l.includes('again') || l.includes('example') || l.includes('explain more') || l.includes('tell me more') || l.includes('give me more')
}

// ── Format text ────────────────────────────────────────────────────────────────
function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code style="background:rgba(0,0,0,0.08);padding:2px 6px;border-radius:4px;font-size:0.82em;font-family:monospace">$1</code>')
    .replace(/\n/g, '<br/>')
}

// ── Typing dots ────────────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '10px 14px' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: '#9CA3AF', animation: 'lunaTyping 1.2s ease infinite', animationDelay: `${i * 0.2}s` }} />
      ))}
    </div>
  )
}

// ── Exercise component ─────────────────────────────────────────────────────────
function ExerciseCard({ exercise, onAnswer, answered }) {
  const [selected, setSelected] = useState(null)

  if (!exercise) return null

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    onAnswer(idx, idx === exercise.correct, exercise.explanation)
  }

  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#6B7280', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        🧩 Grammar Quiz
      </div>
      <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1F2937', marginBottom: 10, lineHeight: 1.5 }}
        dangerouslySetInnerHTML={{ __html: formatText(exercise.question) }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {exercise.options.map((opt, i) => {
          let bg = 'white', border = '#E5E7EB', color = '#374151'
          if (answered) {
            if (i === exercise.correct) { bg = '#DCFCE7'; border = '#16A34A'; color = '#15803D' }
            else if (i === selected && i !== exercise.correct) { bg = '#FEE2E2'; border = '#DC2626'; color = '#B91C1C' }
          } else if (selected === i) { bg = '#EFF6FF'; border = '#2563EB'; color = '#1E40AF' }

          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={answered}
              style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 9, padding: '8px 12px', textAlign: 'left', fontSize: '0.81rem', color, cursor: answered ? 'default' : 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', fontWeight: answered && i === exercise.correct ? 700 : 400 }}>
              {answered && i === exercise.correct && '✅ '}
              {answered && i === selected && i !== exercise.correct && '❌ '}
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Quick prompt categories ────────────────────────────────────────────────────
const QUICK_CATEGORIES = {
  all: [
    { label: '📝 Present perfect', text: 'Explain present perfect tense' },
    { label: '🗣️ Idioms', text: 'Teach me common English idioms' },
    { label: '✍️ Essay tips', text: 'How to write a good essay' },
    { label: '🎯 IELTS', text: 'Give me IELTS writing tips' },
    { label: '🧩 Quiz me', text: 'Quiz me on grammar' },
    { label: '⚠️ Mistakes', text: 'Common English mistakes' },
  ],
  grammar: [
    { label: 'Present simple', text: 'Explain present simple tense' },
    { label: 'Past tenses', text: 'Explain past simple tense' },
    { label: 'Present perfect', text: 'Explain present perfect tense' },
    { label: 'Conditionals', text: 'Explain conditionals with examples' },
    { label: 'Passive voice', text: 'Explain passive voice' },
    { label: 'Reported speech', text: 'Explain reported speech' },
    { label: 'Articles', text: 'When to use a, an, the' },
    { label: 'Prepositions', text: 'Explain in on at prepositions' },
  ],
  vocabulary: [
    { label: 'Idioms', text: 'Teach me common English idioms' },
    { label: 'Phrasal verbs', text: 'Common phrasal verbs' },
    { label: 'Collocations', text: 'What are collocations?' },
    { label: 'Synonyms', text: 'Give me useful synonyms' },
    { label: 'Word of the day', text: 'Give me word of the day' },
    { label: 'Confused words', text: 'Explain commonly confused words' },
  ],
  writing: [
    { label: 'Essay structure', text: 'How to write a good essay' },
    { label: 'Email writing', text: 'How to write a professional email' },
    { label: 'Linking words', text: 'Teach me linking words' },
    { label: 'Academic vocab', text: 'Advanced vocabulary for writing' },
  ],
  speaking: [
    { label: 'Fluency tips', text: 'How to improve speaking fluency' },
    { label: 'Pronunciation', text: 'Help with pronunciation and silent letters' },
    { label: 'IELTS speaking', text: 'IELTS speaking tips' },
    { label: 'British vs American', text: 'What is the difference between British and American English?' },
  ],
  exam: [
    { label: 'IELTS guide', text: 'Complete IELTS exam guide' },
    { label: 'TOEFL tips', text: 'TOEFL exam tips and guide' },
    { label: 'IELTS writing', text: 'IELTS writing task 2 tips' },
    { label: 'Academic vocab', text: 'IELTS vocabulary tips' },
  ],
}

// ── Main Chatbot ───────────────────────────────────────────────────────────────
export default function Chatbot() {
  const [isOpen,      setIsOpen]      = useState(false)
  const [isExpanded,  setIsExpanded]  = useState(false)
  const [messages,    setMessages]    = useState([{
    role: 'bot',
    text: "Hi! I'm **Luna** 🌙, your personal English tutor!\n\nI can help you with grammar, vocabulary, writing, speaking tips, and exam prep.\n\nType **'help'** to see all topics, or **'quiz me'** for an interactive exercise!\n\nWhat would you like to learn today? 😊",
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    followUps: ['📝 Grammar tenses', '📚 Vocabulary', '🎯 IELTS tips', '🧩 Quiz me'],
  }])
  const [input,       setInput]       = useState('')
  const [typing,      setTyping]      = useState(false)
  const [showQuick,   setShowQuick]   = useState(true)
  const [quickCat,    setQuickCat]    = useState('all')
  const [unread,      setUnread]      = useState(0)
  const [lastTopic,   setLastTopic]   = useState(null) // track last KB entry id
  const [exerciseIdx, setExerciseIdx] = useState(() => Math.floor(Math.random() * EXERCISES.length))
  const [pendingExercise, setPendingExercise] = useState(null) // exercise waiting for answer
  const [copied,      setCopied]      = useState(null) // index of copied message
  const [voiceActive, setVoiceActive] = useState(false)

  const endRef   = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 150) }
  }, [isOpen])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // ── Voice Input ──
  const startVoice = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) { alert('Voice input is not supported in this browser. Try Chrome!'); return }
    const recognition = new SR()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.onstart = () => setVoiceActive(true)
    recognition.onend   = () => setVoiceActive(false)
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript
      setInput(transcript)
      setTimeout(() => sendMessage(transcript), 200)
    }
    recognition.onerror = () => setVoiceActive(false)
    recognition.start()
  }, [])

  // ── Copy message ──
  const copyMessage = (text, idx) => {
    const plain = text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1').replace(/`(.*?)`/g, '$1')
    navigator.clipboard?.writeText(plain).then(() => {
      setCopied(idx)
      setTimeout(() => setCopied(null), 1800)
    })
  }

  // ── Handle exercise answer ──
  const handleExerciseAnswer = useCallback((msgIdx, optionIdx, correct, explanation) => {
    setMessages(prev => prev.map((m, i) => i === msgIdx ? { ...m, exerciseAnswered: true } : m))
    setPendingExercise(null)

    const delay = 500
    setTyping(true)
    setTimeout(() => {
      const resultText = correct
        ? `🎉 **Correct! Well done!**\n\n${explanation}`
        : `❌ **Not quite — but let's learn from it!**\n\n${explanation}`

      // Pick next exercise
      setExerciseIdx(prev => (prev + 1) % EXERCISES.length)

      setMessages(prev => [...prev, {
        role: 'bot',
        text: resultText,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        followUps: correct
          ? ['Another question! 🧩', 'Explain present perfect', 'More grammar tips']
          : ['Try another question', 'Explain the grammar', 'More examples'],
      }])
      setTyping(false)
    }, delay)
  }, [])

  // ── Send message ──
  const sendMessage = useCallback((text) => {
    const msg = (text || input).trim()
    if (!msg) return
    setShowQuick(false)
    setInput('')

    const userMsg = {
      role: 'user',
      text: msg,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages(prev => [...prev, userMsg])
    setTyping(true)

    const delay = 500 + Math.random() * 600

    setTimeout(() => {
      const lower = msg.toLowerCase().trim()
      let replyText = ''
      let followUps = DEFAULT_FOLLOW_UPS.slice(0, 4)
      let exercise = null

      // Check for "another/more" follow-up
      if (isFollowUp(lower) && lastTopic) {
        const more = FOLLOW_UP_RESPONSES.more[lastTopic]
        replyText = more || `Here's a deeper look at that topic! Type any specific topic name (like "present perfect" or "idioms") to explore more, or type **'quiz me'** to test yourself! 😊`
      } else {
        const match = getMatch(msg)
        if (match) {
          setLastTopic(match.id)
          const rawReply = match.reply()
          if (rawReply === '__EXERCISE__') {
            // Exercise mode
            const ex = EXERCISES[exerciseIdx]
            setPendingExercise(ex)
            exercise = ex
            replyText = "🧩 **Let's test your English!**\n\nChoose the best answer:"
            followUps = []
          } else {
            replyText = rawReply
            followUps = match.followUps?.length ? match.followUps : DEFAULT_FOLLOW_UPS.slice(0, 4)
          }
        } else {
          // Fallback — try to be helpful
          replyText = `🤔 I didn't catch that exactly, but I'm here to help!\n\nTry asking about:\n• A grammar topic: *"Explain conditionals"*\n• Vocabulary: *"Teach me idioms"*\n• Exams: *"IELTS writing tips"*\n• Or type **'help'** to see everything I can do!\n\nYou can also type **'quiz me'** for a fun grammar challenge! 🧩`
          followUps = ['Quiz me on grammar', 'Explain present perfect', 'Common idioms', 'Help']
        }
      }

      const botMsg = {
        role: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        followUps,
        exercise,
        exerciseAnswered: false,
      }
      setMessages(prev => [...prev, botMsg])
      setTyping(false)
      if (!isOpen) setUnread(u => u + 1)
    }, delay)
  }, [input, lastTopic, exerciseIdx, isOpen])

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const clearChat = () => {
    setMessages([{
      role: 'bot',
      text: "Chat cleared! 😊 Fresh start — what English topic shall we tackle?",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      followUps: ['Quiz me on grammar', 'Common idioms', 'IELTS tips', 'Study tips'],
    }])
    setShowQuick(true)
    setQuickCat('all')
    setLastTopic(null)
  }

  const w = isExpanded ? 460 : 370
  const h = isExpanded ? 680 : 560

  const CAT_TABS = [
    { id: 'all',       label: '✦ All'       },
    { id: 'grammar',   label: '📝 Grammar'   },
    { id: 'vocabulary',label: '📚 Vocab'     },
    { id: 'writing',   label: '✍️ Writing'   },
    { id: 'speaking',  label: '🗣️ Speaking'  },
    { id: 'exam',      label: '🎯 Exams'     },
  ]

  return (
    <>
      <style>{`
        @keyframes lunaTyping {
          0%,60%,100% { transform:translateY(0); opacity:0.4; }
          30% { transform:translateY(-5px); opacity:1; }
        }
        @keyframes lunaOpen {
          from { opacity:0; transform:translateY(16px) scale(0.95); }
          to   { opacity:1; transform:translateY(0)    scale(1); }
        }
        @keyframes lunaMsgIn {
          from { opacity:0; transform:translateY(6px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes lunaPulse {
          0%   { transform:scale(1);   opacity:0.7; }
          100% { transform:scale(1.6); opacity:0; }
        }
        @keyframes lunaVoice {
          0%,100% { box-shadow:0 0 0 0 rgba(239,68,68,0.4); }
          50%     { box-shadow:0 0 0 8px rgba(239,68,68,0); }
        }
        .luna-quick-chip:hover { background:#EFF6FF!important; border-color:#2563EB!important; color:#1E40AF!important; }
        .luna-fab:hover        { transform:scale(1.1)!important; }
        .luna-input:focus      { border-color:#2563EB!important; box-shadow:0 0 0 3px rgba(37,99,235,0.1)!important; }
        .luna-cat-tab:hover    { background:#F1F5F9!important; }
        .luna-copy-btn:hover   { opacity:1!important; }
        .luna-header-btn:hover { background:rgba(255,255,255,0.22)!important; }
      `}</style>

      {/* ── Chat Window ── */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: 90, right: 24,
          width: w, height: h,
          background: '#F8FAFC',
          borderRadius: 20,
          boxShadow: '0 24px 64px rgba(0,0,0,0.16), 0 8px 20px rgba(0,0,0,0.08)',
          display: 'flex', flexDirection: 'column',
          zIndex: 9998, overflow: 'hidden',
          animation: 'lunaOpen 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          border: '1px solid #E5E7EB',
        }}>

          {/* ── Header ── */}
          <div style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
            padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 9,
            flexShrink: 0,
          }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', border: '2px solid rgba(255,255,255,0.25)', flexShrink: 0 }}>🌙</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem' }}>Luna — English Tutor</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.67rem', whiteSpace: 'nowrap' }}>AI-powered · Always Online</span>
              </div>
            </div>
            {[
              { title: isExpanded ? 'Shrink' : 'Expand', icon: isExpanded ? '⊟' : '⊞', action: () => setIsExpanded(e => !e) },
              { title: 'Clear chat', icon: '🗑', action: clearChat },
              { title: 'Close', icon: '✕', action: () => setIsOpen(false), fontSize: '1rem' },
            ].map(({ title, icon, action, fontSize }) => (
              <button key={title} onClick={action} title={title} className="luna-header-btn"
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 7, color: 'white', cursor: 'pointer', padding: '5px 8px', fontSize: fontSize || '0.82rem', transition: 'background 0.15s', flexShrink: 0 }}>
                {icon}
              </button>
            ))}
          </div>

          {/* ── Messages ── */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 11px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {messages.map((msg, i) => {
              const isBot = msg.role === 'bot'
              const msgIdx = i
              return (
                <div key={i} style={{ animation: 'lunaMsgIn 0.25s ease', marginBottom: 4 }}>
                  <div style={{ display: 'flex', flexDirection: isBot ? 'row' : 'row-reverse', alignItems: 'flex-end', gap: 7 }}>
                    {isBot && (
                      <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#1E40AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', flexShrink: 0 }}>🌙</div>
                    )}
                    <div style={{ maxWidth: '82%', position: 'relative' }}>
                      <div
                        style={{
                          padding: msg.exercise ? '11px 13px' : '9px 13px',
                          borderRadius: isBot ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                          background: isBot ? 'white' : 'linear-gradient(135deg,#2563EB,#1E40AF)',
                          color: isBot ? '#1F2937' : 'white',
                          fontSize: '0.828rem', lineHeight: 1.65,
                          boxShadow: isBot ? '0 2px 8px rgba(0,0,0,0.06)' : '0 3px 10px rgba(37,99,235,0.25)',
                          border: isBot ? '1px solid #F1F5F9' : 'none',
                        }}>
                        <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                        {msg.exercise && (
                          <ExerciseCard
                            exercise={msg.exercise}
                            answered={msg.exerciseAnswered}
                            onAnswer={(optIdx, correct, explanation) => handleExerciseAnswer(msgIdx, optIdx, correct, explanation)}
                          />
                        )}
                      </div>
                      {/* Copy button for bot messages */}
                      {isBot && !msg.exercise && (
                        <button
                          className="luna-copy-btn"
                          onClick={() => copyMessage(msg.text, i)}
                          title="Copy"
                          style={{ position: 'absolute', top: 6, right: 6, background: 'none', border: 'none', cursor: 'pointer', opacity: 0.3, fontSize: '0.7rem', color: '#6B7280', padding: '2px 4px', borderRadius: 4, transition: 'opacity 0.15s' }}>
                          {copied === i ? '✅' : '⎘'}
                        </button>
                      )}
                      <div style={{ fontSize: '0.61rem', color: '#9CA3AF', marginTop: 3, textAlign: isBot ? 'left' : 'right', paddingLeft: isBot ? 4 : 0 }}>
                        {msg.time}
                      </div>
                    </div>
                  </div>

                  {/* Follow-up chips after bot message */}
                  {isBot && msg.followUps?.length > 0 && i === messages.length - 1 && !typing && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 7, marginLeft: 33, paddingRight: 8 }}>
                      {msg.followUps.map((fu, fi) => (
                        <button key={fi} className="luna-quick-chip"
                          onClick={() => sendMessage(fu)}
                          style={{ padding: '4px 10px', border: '1px solid #E5E7EB', borderRadius: 20, background: 'white', color: '#6B7280', fontSize: '0.68rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s', whiteSpace: 'nowrap' }}>
                          {fu}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#1E40AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem' }}>🌙</div>
                <div style={{ background: 'white', borderRadius: '16px 16px 16px 4px', border: '1px solid #F1F5F9', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* ── Quick Prompts ── */}
          {showQuick && !typing && (
            <div style={{ background: 'white', borderTop: '1px solid #F1F5F9', flexShrink: 0 }}>
              {/* Category tabs */}
              <div style={{ display: 'flex', gap: 2, padding: '6px 8px 4px', overflowX: 'auto', scrollbarWidth: 'none' }}>
                {CAT_TABS.map(tab => (
                  <button key={tab.id} className="luna-cat-tab"
                    onClick={() => setQuickCat(tab.id)}
                    style={{ padding: '3px 9px', borderRadius: 20, border: 'none', background: quickCat === tab.id ? '#EFF6FF' : 'transparent', color: quickCat === tab.id ? '#1E40AF' : '#6B7280', fontWeight: quickCat === tab.id ? 700 : 400, fontSize: '0.65rem', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'all 0.15s' }}>
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Prompt chips */}
              <div style={{ padding: '4px 8px 8px', display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {(QUICK_CATEGORIES[quickCat] || []).map((p, i) => (
                  <button key={i} className="luna-quick-chip"
                    onClick={() => sendMessage(p.text)}
                    style={{ padding: '4px 9px', border: '1px solid #E5E7EB', borderRadius: 20, background: 'white', color: '#6B7280', fontSize: '0.69rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s', whiteSpace: 'nowrap' }}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Input area ── */}
          <div style={{ background: 'white', borderTop: '1px solid #F1F5F9', padding: '9px 10px', display: 'flex', gap: 6, alignItems: 'flex-end', flexShrink: 0 }}>
            {/* Voice button */}
            <button onClick={startVoice} title="Voice input"
              style={{ width: 34, height: 34, borderRadius: 10, background: voiceActive ? '#FEE2E2' : '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0, animation: voiceActive ? 'lunaVoice 1s infinite' : 'none', transition: 'all 0.2s' }}>
              🎙️
            </button>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              onFocus={() => setShowQuick(false)}
              placeholder="Ask about grammar, idioms, IELTS..."
              rows={1}
              className="luna-input"
              style={{ flex: 1, padding: '8px 12px', border: '1.5px solid #E5E7EB', borderRadius: 12, fontSize: '0.828rem', fontFamily: 'inherit', resize: 'none', lineHeight: 1.5, maxHeight: 90, outline: 'none', transition: 'all 0.2s', color: '#1F2937', background: '#FAFAFA' }}
              onInput={e => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 90) + 'px' }}
            />
            <button onClick={() => sendMessage()} disabled={!input.trim() || typing}
              style={{ width: 36, height: 36, borderRadius: 10, background: input.trim() && !typing ? 'linear-gradient(135deg,#2563EB,#1E40AF)' : '#E5E7EB', border: 'none', cursor: input.trim() && !typing ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', boxShadow: input.trim() && !typing ? '0 3px 10px rgba(37,99,235,0.3)' : 'none' }}>
              <svg width="14" height="14" fill="none" stroke={input.trim() && !typing ? 'white' : '#9CA3AF'} strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div style={{ background: 'white', padding: '3px 12px 6px', textAlign: 'center', fontSize: '0.6rem', color: '#D1D5DB', borderTop: '1px solid #F9FAFB', flexShrink: 0 }}>
            Luna AI · English Learning Assistant · LinguaBridge
          </div>
        </div>
      )}

      {/* ── FAB ── */}
      <button onClick={() => { setIsOpen(o => !o); if (!isOpen) setShowQuick(true) }}
        className="luna-fab"
        style={{ position: 'fixed', bottom: 24, right: 24, width: 58, height: 58, borderRadius: '50%', background: isOpen ? 'linear-gradient(135deg,#EF4444,#DC2626)' : 'linear-gradient(135deg,#2563EB,#1E40AF)', border: 'none', boxShadow: isOpen ? '0 6px 20px rgba(239,68,68,0.4)' : '0 6px 20px rgba(37,99,235,0.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)', fontSize: '1.35rem' }}>
        {!isOpen && (
          <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '3px solid rgba(37,99,235,0.35)', animation: 'lunaPulse 2s ease-out infinite' }} />
        )}
        {unread > 0 && !isOpen && (
          <div style={{ position: 'absolute', top: -3, right: -3, width: 18, height: 18, background: '#EF4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'white', fontWeight: 700, border: '2px solid white' }}>
            {unread}
          </div>
        )}
        {isOpen
          ? <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : '🌙'
        }
      </button>
    </>
  )
}
