import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import TimelineItem from "../components/TimelineItem.jsx";

const education = [
  {
    title: "Bachelor of Technology - Electronics and Computer Science",
    period: "Dec 2020 - May 2024",
    description: "University of Mumbai - Pillai College of Engineering, Panvel",
    details: [
      "CGPA: 8.5/10",
      "Focused on Mobile and Web App Development",
      "Internship Experience",
    ],
  },
  {
    title: "DAV Public School, Panvel - Science Stream",
    period: "June 2018 - Apr 2020",
    description: "HSC CBSE Board",
    details: ["Percentage: 75.4%", "Math & Science", "Programming Basics"],
  },
  {
    title: "DAV Public School, Panvel - Science Stream",
    period: "March 2005 - Apr 2018",
    description: "SSC CBSE Board",
    details: ["Percentage: 88.4%", "Math & Science", "Basics of Eduction"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-32 relative bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-text mb-4 flex items-center justify-center gap-4">
            <BookOpen className="text-accent" size={40} />
            Education
          </h2>
          <p className="text-gray-400 text-lg">My academic background</p>
        </motion.div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              item={edu}
              index={index}
              length={education.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
