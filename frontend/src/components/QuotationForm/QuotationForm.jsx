import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brochure from "@/assets/brochure.pdf";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                  <p className="text-slate-500 mb-6">Your concierge will contact you within 24 hours.</p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 text-left">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Inquiry Reference</p>
                    <p className="text-lg font-mono font-bold text-slate-800 tracking-tighter">MC-INFRA-2025</p>

                    <div className="mt-6 space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1 bg-emerald-500 rounded-full" />
                        <div>
                          <p className="text-sm font-bold text-slate-800">Reviewing Requirements</p>
                          <p className="text-xs text-slate-500">Our engineering lead is reviewing your inquiry.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 opacity-40">
                        <div className="w-1 bg-slate-200 rounded-full" />
                        <div>
                          <p className="text-sm font-bold text-slate-800">Proposal Generation</p>
                          <p className="text-xs text-slate-500">A custom quote will be drafted for your review.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full px-8"
                  >
                    Done
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name *</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone *</label>
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Company</label>
                      <Input
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Service Required *</label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className={`h-12 rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 ${errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="min-h-[120px] rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white h-14 rounded-xl text-lg font-semibold group"
                  >
                    Send Request
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-center text-sm text-slate-500">
                    By submitting, you agree to our Privacy Policy
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}