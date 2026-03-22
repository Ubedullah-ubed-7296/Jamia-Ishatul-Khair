import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, FileText, Calendar, UserCheck } from 'lucide-react';

const Admissions = () => {
  const { language, t } = useLanguage();
  const isUrdu = language === 'ur';

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-testid="admissions-header">
          <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-4 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
            {t(translations.admissions.title)}
          </h1>
          <p className={`text-lg md:text-xl text-foreground/70 ${isUrdu ? 'urdu-font' : ''}`}>
            {t(translations.admissions.subtitle)}
          </p>
        </div>

        <Card className="shadow-lg mb-12" data-testid="admission-process-card">
          <CardHeader>
            <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
              <CheckCircle className="h-8 w-8 text-primary" />
              {t(translations.admissions.process_title)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {(isUrdu ? translations.admissions.process_steps.ur : translations.admissions.process_steps.en).map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-accent/30 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className={`text-base text-foreground/80 ${isUrdu ? 'urdu-font text-lg leading-loose' : ''}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg mb-12" data-testid="eligibility-card">
          <CardHeader>
            <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
              <UserCheck className="h-8 w-8 text-primary" />
              {t(translations.admissions.eligibility_title)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className={`text-xl font-semibold text-primary mb-4 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                {t(translations.admissions.eligibility.aalim.title)}
              </h3>
              <ul className="space-y-2">
                {(isUrdu ? translations.admissions.eligibility.aalim.list.ur : translations.admissions.eligibility.aalim.list.en).map((item, index) => (
                  <li key={index} className={`flex items-center gap-2 text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={`text-xl font-semibold text-primary mb-4 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                {t(translations.admissions.eligibility.hafiz.title)}
              </h3>
              <ul className="space-y-2">
                {(isUrdu ? translations.admissions.eligibility.hafiz.list.ur : translations.admissions.eligibility.hafiz.list.en).map((item, index) => (
                  <li key={index} className={`flex items-center gap-2 text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg" data-testid="documents-card">
            <CardHeader>
              <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                <FileText className="h-8 w-8 text-primary" />
                {t(translations.admissions.documents_title)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(isUrdu ? translations.admissions.documents.ur : translations.admissions.documents.en).map((doc, index) => (
                  <li key={index} className={`flex items-center gap-2 text-foreground/80 ${isUrdu ? 'urdu-font' : ''}`}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-accent/30" data-testid="session-card">
            <CardHeader>
              <CardTitle className={`text-2xl md:text-3xl flex items-center gap-3 ${isUrdu ? 'urdu-font' : 'heading-font'}`}>
                <Calendar className="h-8 w-8 text-primary" />
                {t(translations.admissions.session_title)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-base md:text-lg text-foreground/80 leading-relaxed ${isUrdu ? 'urdu-font text-lg md:text-xl leading-loose' : ''}`}>
                {t(translations.admissions.session_text)}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
