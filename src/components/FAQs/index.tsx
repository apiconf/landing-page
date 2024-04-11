import { motion } from 'framer-motion'
import FaqItem from './FAQs'
import { useState } from 'react'

const faqs = [
  {
    faqQuestion: 'What is API Conf Lagos?',
    faqResponse:
      'API Conf Lagos is a dynamic one-day event dedicated to promoting API literacy, gathering API enthusiasts, developers, and industry leaders in Lagos, Nigeria.',
  },
  {
    faqQuestion: 'Who should attend API Conf Lagos?',
    faqResponse:
      "Anyone interested in APIs, whether you're an experienced developer, a beginner, or simply curious about APIs, is welcome. The event caters to both experts and newcomers.",
  },
  {
    faqQuestion: 'What is the cost of attending?',
    faqResponse:
      'The event is absolutely free. Registration is now open. Be sure to sign up!',
  },
  {
    faqQuestion: 'What topics will be covered at the conference?',
    faqResponse:
      'The conference will cover a wide range of topics related to APIs, their significance, use-cases, advancements, and the difference between various types like REST and GraphQL, among others.',
  },
  {
    faqQuestion:
      'Are there any accommodation recommendations for attendees from outside Lagos?',
    faqResponse:
      'We will provide a list of recommended hotels and accommodations closer to the event date. Attendees are encouraged to make their bookings in advance.',
  },
  {
    faqQuestion: 'How can I register for the event?',
    faqResponse:
      'You can register for the event through the provided link on our social media pages and official website. Registration is now open, so go ahead and secure your spot! An official registration link is available for immediate sign-up.',
  },
  {
    faqQuestion: 'Are there sponsorship opportunities available?',
    faqResponse:
      'Yes, we offer various sponsorship tiers. Interested sponsors can review our sponsorship deck for details or contact us directly.',
  },
  {
    faqQuestion: 'Can I be a speaker at the event?',
    faqResponse:
      "We're always on the lookout for insightful speakers. If you're interested, please reach out to our team with your topic and a brief overview.",
  },
  {
    faqQuestion:
      'Where can I find updates and more information about the conference?',
    faqResponse:
      'Follow our official Twitter page (@apiconflagos) and other social media channels for real-time updates, announcements, and more details about the conference.',
  },
]

const Faq = () => {
  const [activeQues, setActiveQues] = useState(-1)

  return (
    <div className="py-8">
      <motion.div
        layout
        className="bg-[#F7F7F7] p-4 w-[min(90%,_900px)] mx-auto rounded-3xl"
      >
        {faqs.map((faq, idx) => (
          <FaqItem
            setActiveQues={setActiveQues}
            activeQues={activeQues}
            index={idx}
            key={idx}
            {...faq}
          />
        ))}
      </motion.div>
    </div>
  )
}
export default Faq
