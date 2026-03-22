import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { BookOpen, GraduationCap, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(4, 77, 41, 0.85), rgba(4, 77, 41, 0.85)), url('https://images.unsplash.com/photo-1761939998962-308558cafde3?crop=entropy&cs=srgb&fm=jpg&q=85')`,
        }}
        data-testid="hero-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
            {t(translations.home.hero_title)}
          </h1>
          <p className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed ${isUrdu ? 'urdu-font' : ''}`}>
            {t(translations.home.hero_subtitle)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                data-testid="learn-more-button"
              >
                {t(translations.home.cta_learn)}
                <ArrowRight className={`${isUrdu ? 'mr-2' : 'ml-2'} h-5 w-5`} />
              </Button>
            </Link>
            <Link to="/admissions">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-base font-semibold transition-all"
                data-testid="apply-now-button"
              >
                {t(translations.home.cta_apply)}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/30" data-testid="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-semibold text-primary mb-6 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
              {t(translations.home.mission_title)}
            </h2>
            <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
              {t(translations.home.mission_text)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="courses-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-5xl font-semibold text-center text-primary mb-12 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
            {t(translations.home.courses_title)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 overflow-hidden" data-testid="aalim-course-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1624862761959-18b9c810825d?crop=entropy&cs=srgb&fm=jpg&q=85" 
                  alt="Aalim Course"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className={`text-2xl ${isUrdu ? 'urdu-font' : 'heading-font'} flex items-center gap-3`}>
                  <GraduationCap className="h-6 w-6 text-primary" />
                  {t(translations.home.aalim_title)}
                </CardTitle>
                <CardDescription className={`text-base ${isUrdu ? 'urdu-font' : ''}`}>
                  {t(translations.home.aalim_desc)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/courses">
                  <Button variant="ghost" className="text-primary hover:bg-primary/10" data-testid="aalim-learn-more">
                    {t(translations.home.cta_learn)}
                    <ArrowRight className={`${isUrdu ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 overflow-hidden" data-testid="hafiz-course-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1728294025169-959af1990a08?crop=entropy&cs=srgb&fm=jpg&q=85" 
                  alt="Hafiz Course"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className={`text-2xl ${isUrdu ? 'urdu-font' : 'heading-font'} flex items-center gap-3`}>
                  <BookOpen className="h-6 w-6 text-primary" />
                  {t(translations.home.hafiz_title)}
                </CardTitle>
                <CardDescription className={`text-base ${isUrdu ? 'urdu-font' : ''}`}>
                  {t(translations.home.hafiz_desc)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/courses">
                  <Button variant="ghost" className="text-primary hover:bg-primary/10" data-testid="hafiz-learn-more">
                    {t(translations.home.cta_learn)}
                    <ArrowRight className={`${isUrdu ? 'mr-2' : 'ml-2'} h-4 w-4`} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30" data-testid="timings-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-full border border-primary/20">
            <Clock className="h-6 w-6 text-primary" />
            <span className={`text-lg font-semibold text-primary ${isUrdu ? 'urdu-font' : ''}`}>
              {t(translations.home.timings)}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
