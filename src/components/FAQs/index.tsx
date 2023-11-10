import "./FAQs.css";

import FaqItem from "./FAQs";
import decoration from "../../assets/faq-decoration.svg";

const Faq = () => {
  return (
    <div className="faq-section">
      <div className="faq-title" id="faq">
        <h1>Frequently Asked Questions</h1>
        <img src={decoration} alt="" />
      </div>

      <div className="faq-columns">
        <div>
          <FaqItem
            faqQuestion="What is API Conf Lagos?"
            faqResponse="API Conf Lagos is a dynamic one-day event dedicated to promoting API literacy, gathering API enthusiasts, developers, and industry leaders in Lagos, Nigeria."
          />
          <FaqItem
            faqQuestion="Who should attend API Conf Lagos?"
            faqResponse="Anyone interested in APIs, whether you're an experienced developer, a beginner, or simply curious about APIs, is welcome. The event caters to both experts and newcomers."
          />
          <FaqItem
            faqQuestion="What is the cost of attending?"
            faqResponse="Specific ticket pricing and packages will be released closer to the event date. Stay tuned to our official channels for updates."
          />
          <FaqItem
            faqQuestion="What topics will be covered at the conference?"
            faqResponse="The conference will cover a wide range of topics related to APIs, their significance, use-cases, advancements, and the difference between various types like REST and GraphQL, among others."
          />
          <FaqItem
            faqQuestion="Are there any accommodation recommendations for attendees from outside Lagos?"
            faqResponse="We will provide a list of recommended hotels and accommodations closer to the event date. Attendees are encouraged to make their bookings in advance."
          />
        </div>

        <div>
          <FaqItem
            faqQuestion="When and where is the event taking place?"
            faqResponse="The event is scheduled for October 14, 2023, in Lagos. The specific venue details will be provided closer to the event date."
          />
          <FaqItem
            faqQuestion="How can I register for the event?"
            faqResponse="You can pre-register for the event through the provided link on our social media pages and official website. An official registration link will be shared once registrations are open."
          />
          <FaqItem
            faqQuestion="Are there sponsorship opportunities available?"
            faqResponse="Yes, we offer various sponsorship tiers. Interested sponsors can review our sponsorship deck for details or contact us directly."
          />
          <FaqItem
            faqQuestion="Can I be a speaker at the event?"
            faqResponse="We're always on the lookout for insightful speakers. If you're interested, please reach out to our team with your topic and a brief overview."
          />
          <FaqItem
            faqQuestion="Where can I find updates and more information about the conference?"
            faqResponse="Follow our official Twitter page (@apiconflagos) and other social media channels for real-time updates, announcements, and more details about the conference."
          />
        </div>
      </div>
    </div>
  );
};
export default Faq;
