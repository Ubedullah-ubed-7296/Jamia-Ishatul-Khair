import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Clock } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success(t(translations.contact.success));
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t(translations.contact.error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-testid="contact-header">
          <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-4 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
            {t(translations.contact.title)}
          </h1>
          <p className={`text-lg md:text-xl text-foreground/70 ${isUrdu ? 'urdu-font' : ''}`}>
            {t(translations.contact.subtitle)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg" data-testid="contact-form-card">
            <CardHeader>
              <CardTitle className={`text-2xl md:text-3xl ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                {t(translations.contact.form_title)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div className="space-y-2">
                  <Label htmlFor="name" className={isUrdu ? 'urdu-font' : ''}>
                    {t(translations.contact.name)}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    data-testid="contact-name-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={isUrdu ? 'urdu-font' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={isUrdu ? 'urdu-font' : ''}>
                    {t(translations.contact.email)}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-testid="contact-email-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={isUrdu ? 'urdu-font' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className={isUrdu ? 'urdu-font' : ''}>
                    {t(translations.contact.phone)}
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    data-testid="contact-phone-input"
                    value={formData.phone}
                    onChange={handleChange}
                    className={isUrdu ? 'urdu-font' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className={isUrdu ? 'urdu-font' : ''}>
                    {t(translations.contact.subject)}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    data-testid="contact-subject-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={isUrdu ? 'urdu-font' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={isUrdu ? 'urdu-font' : ''}>
                    {t(translations.contact.message)}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="contact-message-input"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className={isUrdu ? 'urdu-font' : ''}
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-semibold"
                >
                  {loading ? 'Sending...' : t(translations.contact.submit)}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg" data-testid="contact-info-card">
              <CardHeader>
                <CardTitle className={`text-2xl md:text-3xl ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                  {t(translations.contact.info_title)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${isUrdu ? 'urdu-font' : ''}`}>
                      {t(translations.contact.address_label)}
                    </h3>
                    <p className={`text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                      8F3H+2P2, Tayyaba colony, Iqbal Colony, Chandrayangutta, Pallecheruvu, Hyderabad, Telangana 500005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${isUrdu ? 'urdu-font' : ''}`}>
                      {t(translations.contact.phone_label)}
                    </h3>
                    <p className={`text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                      090305 35784
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-timings">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${isUrdu ? 'urdu-font' : ''}`}>
                      {t(translations.contact.timings_label)}
                    </h3>
                    <p className={`text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                      Open 24 Hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-64 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1761639935412-5846adacd2f7?crop=entropy&cs=srgb&fm=jpg&q=85" 
                alt="Islamic Calligraphy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
