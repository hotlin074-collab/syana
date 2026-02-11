import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  delay?: number;
}

export function ServiceCard({ title, description, image, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <h3 className="absolute bottom-4 right-4 z-20 text-2xl font-bold text-white font-display">
          {title}
        </h3>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-slate-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <a 
          href="#contact" 
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 text-slate-800 font-bold hover:bg-primary hover:text-white transition-all duration-300"
        >
          اطلب الخدمة الآن
          <ArrowLeft className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
