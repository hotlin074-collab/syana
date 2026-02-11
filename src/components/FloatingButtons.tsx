import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/201551153822"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl transition-all duration-300"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>

      {/* Phone Call Button */}
      <motion.a
        href="tel:01551153822"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300 animate-pulse"
        aria-label="اتصل بنا الآن"
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
