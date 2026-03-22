import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { BookOpen, GraduationCap, Clock, CheckCircle } from 'lucide-react';

const Courses = () => {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-testid="courses-header">
          <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-4 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
            {t(translations.courses.title)}
          </h1>
          <p className={`text-lg md:text-xl text-foreground/70 ${isUrdu ? 'urdu-font' : ''}`}>
            {t(translations.courses.subtitle)}
          </p>
        </div>

        <div className="space-y-12">
          <Card className="shadow-lg overflow-hidden" data-testid="aalim-course-detail">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1624862761959-18b9c810825d?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Aalim Course"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <CardHeader>
                  <CardTitle className={`text-3xl md:text-4xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                    <GraduationCap className="h-10 w-10 text-primary" />
                    {t(translations.courses.aalim.title)}
                  </CardTitle>
                  <CardDescription className={`text-base flex items-center gap-2 ${isUrdu ? 'urdu-font' : ''}`}>
                    <Clock className="h-5 w-5 text-secondary" />
                    {t(translations.courses.aalim.duration)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
                    {t(translations.courses.aalim.desc)}
                  </p>

                  <div>
                    <h3 className={`text-xl font-semibold text-primary mb-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                      {t(translations.courses.aalim.subjects)}
                    </h3>
                    <ul className="space-y-2">
                      {(isUrdu ? translations.courses.aalim.subject_list.ur : translations.courses.aalim.subject_list.en).map((subject, index) => (
                        <li key={index} className={`flex items-center gap-2 text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="shadow-lg overflow-hidden" data-testid="hafiz-course-detail">
            <div className="grid md:grid-cols-2">
              <div className="md:h-auto order-2 md:order-1">
                <CardHeader>
                  <CardTitle className={`text-3xl md:text-4xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                    <BookOpen className="h-10 w-10 text-primary" />
                    {t(translations.courses.hafiz.title)}
                  </CardTitle>
                  <CardDescription className={`text-base flex items-center gap-2 ${isUrdu ? 'urdu-font' : ''}`}>
                    <Clock className="h-5 w-5 text-secondary" />
                    {t(translations.courses.hafiz.duration)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
                    {t(translations.courses.hafiz.desc)}
                  </p>

                  <div>
                    <h3 className={`text-xl font-semibold text-primary mb-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                      {t(translations.courses.hafiz.features)}
                    </h3>
                    <ul className="space-y-2">
                      {(isUrdu ? translations.courses.hafiz.feature_list.ur : translations.courses.hafiz.feature_list.en).map((feature, index) => (
                        <li key={index} className={`flex items-center gap-2 text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
              <div className="h-64 md:h-auto order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1728294025169-959af1990a08?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Hafiz Course"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
