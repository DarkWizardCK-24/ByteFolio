import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import TimelineItem from "../components/TimelineItem.jsx";

const experiences = [
  {
    title: "Flutter Developer - Prosoft Informatics Pvt Ltd, Navi Mumbai",
    period: "May 2025 - Sept 2025",
    description:
      "Developed mobile applications of medical services with a focus on performance and user experience on android and iOS.",
    details: ["Flutter and Dart", "Xcode", "VsCode"],
  },
  {
    title: "Web & Flutter Developer Intern - LawCrust Global Consultancy, Navi Mumbai",
    period: "Jan 2025 - May 2025",
    description:
      "Built responsive websites with HTML, CSS, and JavaScript, and developed a Flutter mobile app prototype managing both frontend and backend. Integrated APIs like Razorpay, WordPress, and Twilio for payments, live content, and booking confirmations.",
    details: [
      "Frontend Web Development",
      "API Integration",
      "Flutter",
      "Firebase",
    ],
  },
  {
    title: "Frontend Developer Intern - Jio Platforms Ltd, Navi Mumbai",
    period: "Jan 2024 - May 2024",
    description:
      "Built responsive RPOS front-end with React.js, HTML5, and CSS3, integrating RESTful APIs and enhancing user experience through dynamic JavaScript interfaces.",
    details: ["React", "JavaScript", "Web Basics", "API Integration"],
  },
  {
    title: "Joint Technical Head - IEEE-PCE, Navi Mumbai",
    period: "Sept 2022 - May 2024",
    description:
      "Promoted to Joint Technical Head, leading and mentoring a technical team with task delegation and project guidance. Organized workshops, designed Google Forms for data management, and configured devices to support events.",
    details: ["Leadership", "Teamlead", "Responsible", "Mentorship", "Communication - Coordination"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
            <Briefcase className="text-accent" size={40} />
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              item={exp}
              index={index}
              length={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
