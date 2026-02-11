import { motion } from "framer-motion";
import { Phone, CheckCircle2, Award, Clock, Wrench, ShieldCheck, MapPin, BadgeCheck } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function Home() {
  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "استجابة فورية", desc: "نصلك في أسرع وقت خلال 24 ساعة" },
    { icon: <Wrench className="w-6 h-6" />, title: "فنيين محترفين", desc: "فريق مدرب على أعلى مستوى من الكفاءة" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "ضمان حقيقي", desc: "ضمان معتمد على جميع قطع الغيار والصيانة" },
    { icon: <MapPin className="w-6 h-6" />, title: "تغطية شاملة", desc: "نغطي جميع مناطق الإسكندرية" },
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 relative overflow-x-hidden" dir="rtl">
      {/* Floating Action Buttons */}
      <FloatingButtons />

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-extrabold text-slate-900 font-display leading-tight">مركز صيانة الإسكندرية</h1>
              <p className="text-xs text-slate-500 font-medium">غسالات وثلاجات</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#services" className="hover:text-primary transition-colors">خدماتنا</a>
            <a href="#about" className="hover:text-primary transition-colors">لماذا نحن</a>
            <a href="#contact" className="hover:text-primary transition-colors">اتصل بنا</a>
          </div>
          <a href="tel:01551153822" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">01551153822</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/worker-mixed.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-slate-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-bold text-sm mb-6 border border-blue-200">
                  خدمة 24 ساعة في الإسكندرية
                </span>
                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 font-display">
                  صيانة معتمدة <br />
                  <span className="text-primary">للغسالات والثلاجات</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  نحن الخيار الأول لصيانة الأجهزة المنزلية في الإسكندرية. خدمة سريعة، قطع غيار أصلية، وضمان حقيقي يضمن لك راحة البال.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <Wrench className="w-5 h-5" />
                    احجز صيانة الآن
                  </a>
                  <a href="tel:01551153822" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 text-lg font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    01551153822
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-lg lg:max-w-none relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/images/worker-washing.png" alt="فني صيانة محترف" className="w-full h-auto" />
              </div>
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl z-0 transform -rotate-3" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">خدماتنا المتميزة</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">نقدم حلول صيانة متكاملة لأجهزتك المنزلية بأحدث المعدات والتقنيات</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <ServiceCard 
              title="صيانة الغسالات"
              description="خدمة شاملة لجميع أنواع الغسالات الأوتوماتيك والفوق أوتوماتيك. نقوم بإصلاح الكارتات، الطلمبات، المواتير، وعلاج مشاكل الاهتزاز والأصوات المزعجة."
              image="/images/washing-machine-1.png"
              features={[
                "إصلاح جميع الماركات العالمية والمحلية",
                "صيانة وتغيير رومان البلي والكاوتش",
                "حل مشاكل صرف وطرد المياه",
                "ضمان على قطع الغيار المستبدلة"
              ]}
              delay={0.1}
            />

            <ServiceCard 
              title="صيانة الثلاجات"
              description="خبراء في صيانة الثلاجات والديب فريزر. شحن فريون، تغيير الثرموستات، إصلاح مشاكل التبريد والتجميد، وصيانة الدوائر الكهربائية."
              image="/images/worker-fridge.png"
              features={[
                "شحن فريون أصلي ومعالجة التسريب",
                "تغيير الموتور (الضاغط) بضمان",
                "إصلاح أعطال التايمر والسخانات",
                "صيانة النوفروست والديفروست"
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Us Section (SEO Rich) */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="flex-1 lg:sticky lg:top-32">
              <div className="relative">
                <img src="/images/poster.png" alt="خدمات الصيانة" className="rounded-3xl shadow-xl w-full" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <BadgeCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">أكثر من 15 عاماً</p>
                      <p className="text-slate-500 text-sm">من الخبرة في الصيانة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 font-display">
                لماذا نحن الخيار الأفضل لصيانة أجهزتك؟
              </h2>
              
              <div className="prose prose-lg text-slate-600 leading-loose text-justify max-w-none">
                <p className="mb-4">
                  نحن مركز صيانة مستقل متخصص في تقديم خدمات الصيانة المنزلية الفورية والمتقنة لجميع أنواع الغسالات والثلاجات في محافظة الإسكندرية. نتميز بفريق عمل من المهندسين والفنيين المحترفين الذين يمتلكون خبرة تمتد لسنوات طويلة في مجال إصلاح الأجهزة المنزلية، مما يمكننا من تشخيص الأعطال بدقة متناهية وإصلاحها من الزيارة الأولى.
                </p>
                
                <h4 className="text-xl font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  قطع غيار أصلية وضمان معتمد
                </h4>
                <p className="mb-4">
                  نلتزم باستخدام قطع الغيار الأصلية فقط في جميع عمليات الصيانة، وذلك لضمان كفاءة الجهاز وعمره الافتراضي الطويل. كما نقدم ضماناً كتابياً حقيقياً على جميع قطع الغيار المستبدلة وعلى خدمة الصيانة المقدمة، مما يمنحك الثقة الكاملة في جودة خدماتنا وراحة البال بعد الإصلاح.
                </p>

                <h4 className="text-xl font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  خدمة منزلية فورية
                </h4>
                <p className="mb-4">
                  نحن نعلم مدى أهمية الأجهزة المنزلية في حياتك اليومية، ولذلك نوفر خدمة الصيانة المنزلية الفورية. لا حاجة لنقل جهازك إلى ورش الصيانة وتعريضه لمخاطر النقل والخدش؛ فنيونا يصلون إليك بسيارات مجهزة بجميع المعدات وقطع الغيار اللازمة لإتمام الصيانة في منزلك وأمام عينيك.
                </p>

                <h4 className="text-xl font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  تغطية شاملة لجميع مناطق الإسكندرية
                </h4>
                <p className="mb-4">
                  تغطي خدماتنا جميع أحياء ومناطق الإسكندرية، من المنتزه إلى العجمي، ومن سموحة إلى وسط البلد. أينما كنت، سيصلك مندوبنا في أسرع وقت ممكن لتلبية طلبك وإعادة جهازك للعمل بكفاءته القصوى. أسعارنا تنافسية وشفافة، ولا توجد أي رسوم خفية.
                </p>

                <p className="mt-6 font-semibold text-primary">
                  هدفنا الأول هو رضاء العميل، ونسعى جاهدين لتقديم تجربة خدمة متميزة تليق بكم. اتصل بنا الآن واختبر الفرق بنفسك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 skew-y-3 origin-top-right transform -translate-y-10 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">تواصل معنا الآن</h2>
            <p className="text-slate-600 text-lg">نحن في انتظار مكالمتك لتقديم أفضل خدمة صيانة</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">معلومات الاتصال</h3>
                
                <div className="space-y-6">
                  <a href="tel:01551153822" className="flex items-center gap-4 text-slate-700 hover:text-primary transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 font-medium">اتصل بنا مباشرة</p>
                      <p className="text-xl font-bold font-mono dir-ltr">01551153822</p>
                    </div>
                  </a>

                  <a href="https://wa.me/201551153822" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-[#25D366] transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 font-medium">راسلنا عبر واتساب</p>
                      <p className="text-xl font-bold font-mono dir-ltr">01551153822</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 font-medium">مواعيد العمل</p>
                      <p className="text-lg font-bold">يومياً من 9 صباحاً حتى 10 مساءً</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 font-display">تنويه هام</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    نحن مركز صيانة مستقل يعمل بجد لتقديم أفضل خدمة لعملائنا. نسعى دائماً لكسب ثقتكم من خلال المصداقية والجودة.
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4 text-white">
                <Wrench className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold font-display">مركز صيانة الإسكندرية</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-400">
                المتخصصون في صيانة الغسالات والثلاجات بجميع أنحاء الإسكندرية. خدمة موثوقة، ضمان حقيقي، وفنيين محترفين.
              </p>
            </div>
            <div className="md:text-left text-right">
              <a href="tel:01551153822" className="text-2xl font-bold text-white hover:text-primary transition-colors dir-ltr font-mono">
                01551153822
              </a>
              <p className="text-sm text-slate-500 mt-2">اتصل بنا في أي وقت</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 pb-4">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800/50 mb-8">
              <p className="text-xs text-slate-500 text-justify leading-loose">
                <strong>تنويه قانوني هام:</strong> نحن مركز صيانة حر ومستقل يعمل في مجال صيانة الأجهزة المنزلية (الغسالات والثلاجات). نحن لسنا وكلاء معتمدين لأي علامة تجارية محددة، ولا ندعي تمثيل أي توكيل رسمي. جميع العلامات التجارية المذكورة هي ملك لأصحابها وتستخدم فقط لغرض توضيح أنواع الأجهزة التي نقوم بصيانتها. نحن مسؤولون فقط عن جودة الصيانة التي نقدمها وقطع الغيار التي نستبدلها بضماننا الخاص.
              </p>
            </div>
            
            <div className="text-center text-sm font-medium text-slate-600">
              © 2026 مركز صيانة الإسكندرية. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
