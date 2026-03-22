import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { History, Eye, Target, User } from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-testid="about-header">
          <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-4 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
            {t(translations.about.title)}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1758696642916-7aba128db6bf?crop=entropy&cs=srgb&fm=jpg&q=85" 
              alt="Mosque Interior"
              className="w-full h-full object-cover"
            />
          </div>

          <Card className="shadow-lg" data-testid="history-card">
            <CardHeader>
              <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                <History className="h-8 w-8 text-primary" />
                {t(translations.about.history_title)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
                {t(translations.about.history_text)}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-lg" data-testid="vision-card">
            <CardHeader>
              <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                <Eye className="h-8 w-8 text-primary" />
                {t(translations.about.vision_title)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
                {t(translations.about.vision_text)}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-testid="mission-card">
            <CardHeader>
              <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                <Target className="h-8 w-8 text-primary" />
                {t(translations.about.mission_title)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
                {t(translations.about.mission_text)}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg bg-accent/30" data-testid="principal-message-card">
          <CardHeader>
            <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
              <User className="h-8 w-8 text-primary" />
              {t(translations.about.principal_title)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1761639935412-5846adacd2f7?crop=entropy&cs=srgb&fm=jpg&q=85" 
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
                {t(translations.about.principal_text)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
