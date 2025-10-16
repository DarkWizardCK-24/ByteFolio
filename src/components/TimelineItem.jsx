import { motion } from "framer-motion";

const TimelineItem = ({ item, index, length }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex gap-6 group"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-6 h-6 bg-gradient-to-br from-accent to-blue-500 rounded-full border-4 border-primary z-10 group-hover:scale-125 transition-transform duration-300"></div>
        </div>
        {index !== length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-accent/50 to-transparent mt-2"></div>
        )}
      </div>
      <div className="flex-1 pb-12">
        <div className="p-6 glass rounded-2xl hover:border-accent/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/20 group-hover:bg-secondary/40">
          <h3 className="text-2xl font-bold text-accent mb-2">{item.title}</h3>
          <p className="text-accent/60 text-sm font-semibold mb-3">
            {item.period || item.issuer}
          </p>
          {item.date && (
            <p className="text-gray-500 text-sm mb-3">{item.date}</p>
          )}
          <p className="text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>
          {item.details && (
            <div className="space-y-2">
              {item.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          )}
          {item.credentialId && (
            <p className="text-gray-400 text-xs font-mono bg-secondary/50 glass px-3 py-2 rounded-lg inline-block border border-accent/20">
              ID: {item.credentialId}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
