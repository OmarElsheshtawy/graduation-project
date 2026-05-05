const router = require('express').Router();
const { protect } = require('../middleware/auth');

router.post('/', protect, async (req, res, next) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ message: 'messages array is required' });
    }

    // Free rule-based responses (no API key needed)
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

    const responses = [
      { patterns: ['grammar', 'tense', 'verb', 'noun', 'adjective'], reply: "Great grammar question! 📝 I recommend checking our Grammar units in the courses. Which specific grammar topic are you struggling with?" },
      { patterns: ['ielts', 'band', 'exam', 'test', 'score'],        reply: "For IELTS preparation 🎯, our IELTS course covers all 4 skills. Key tips: practice daily, read English news, and write timed essays. What section do you need help with?" },
      { patterns: ['vocabulary', 'word', 'meaning', 'synonym'],      reply: "Building vocabulary 📚 is key! Try learning 10 new words daily in context. Our courses have vocabulary units in every lesson. Need specific word help?" },
      { patterns: ['speaking', 'pronunciation', 'accent', 'fluent'], reply: "Speaking fluency 🗣️ comes with daily practice! Try: thinking in English, watching English shows, and recording yourself. Check our Speaking lessons in the courses!" },
      { patterns: ['writing', 'essay', 'email', 'paragraph'],        reply: "For writing ✍️, remember: clear structure, one idea per paragraph, and always proofread. Our courses have writing lessons with real examples. What are you writing?" },
      { patterns: ['hello', 'hi', 'hey', 'good morning'],            reply: "Hello! 👋 I'm Luna, your English learning assistant! I can help with grammar, vocabulary, IELTS tips, and more. What would you like to learn today?" },
      { patterns: ['thank', 'thanks', 'great', 'helpful'],           reply: "You're welcome! 😊 Keep practicing every day — consistency is the key to mastering English! Is there anything else I can help you with?" },
      { patterns: ['course', 'lesson', 'learn', 'study'],            reply: "Our courses are structured like Duolingo! 🎮 Go to the Courses page to start. We have Beginner, Intermediate, Advanced, Business English, and IELTS Preparation. Which level suits you?" },
    ]

    let reply = "That's a great question! 🤔 I'm here to help with English learning — grammar, vocabulary, IELTS prep, writing tips, and more. Could you be more specific so I can give you the best answer?"

    for (const r of responses) {
      if (r.patterns.some(p => lastMessage.includes(p))) {
        reply = r.reply
        break
      }
    }

    res.json({ reply })
  } catch (err) {
    next(err)
  }
});

module.exports = router;