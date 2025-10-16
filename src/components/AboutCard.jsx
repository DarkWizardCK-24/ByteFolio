import { motion } from "framer-motion";

const AboutCard = ({ title, description, icon: Icon, gradient, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative p-8 glass rounded-3xl hover:border-accent/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div className="relative z-10">
        <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-4xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutCard;
