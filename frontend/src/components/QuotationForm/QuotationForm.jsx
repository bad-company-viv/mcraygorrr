import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brochure from "@/assets/brochure.pdf";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CRMForm from '@/components/CRMForm/CRMForm';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98120 01368',
    link: 'tel:+919812001368',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@mcraygor.com',
    link: 'mailto:info@mcraygor.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India (Pan-India Service)',
    link: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Sat: 9AM – 8:30PM',
    link: '#',
  },
];

const services = [
  'Sewer Cleaning Equipment',
  'Water Management Solutions',
  'Industrial Machinery',
  'Disaster Management Equipment',
  'Mechanical Tools',
  'Consultancy Services',
  'Other',
];

export default function QuotationForm({ selectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        service: 'Sewer Cleaning Equipment',
        message: `I am interested in the ${selectedProduct}. Please provide more details.`
      }));
    }
  }, [selectedProduct]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock API call
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setErrors({});
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return (
    <section id="quotation-form" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Quotation
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Get in touch with our expert team for customized solutions tailored to your
              industrial needs. We'll respond within 24 hours.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map((item, index) => {
                const isClickable = item.link && item.link !== '#';
                const Wrapper = isClickable ? motion.a : motion.div;

                return (
                  <Wrapper
                    key={index}
                    {...(isClickable ? { href: item.link } : {})}
                    className={`group flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 ${isClickable ? 'hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer' : 'cursor-default'
                      }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Quick Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href={brochure} download="McRAYGOR_Brochure.pdf" className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white px-8 h-14 transition-all duration-300"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Company Brochure
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden min-h-[600px]">
              <CRMForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}