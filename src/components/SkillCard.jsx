import { motion } from "framer-motion";

const SkillCard = ({ name, icon: Icon, gradient, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 glass rounded-2xl hover:border-accent/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-accent/30 flex flex-col items-center justify-center"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div className="relative z-10">
        <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
          <Icon className="w-16 h-16 text-accent" />
        </div>
        <p className="text-gray-300 font-semibold text-center group-hover:text-text transition-colors duration-300">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
