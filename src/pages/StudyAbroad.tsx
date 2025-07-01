
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import PersonalInfoStep from '@/components/study-abroad/PersonalInfoStep';
import CountrySelectionStep from '@/components/study-abroad/CountrySelectionStep';
import EducationStep from '@/components/study-abroad/EducationStep';
import FinancialStep from '@/components/study-abroad/FinancialStep';
import ReviewStep from '@/components/study-abroad/ReviewStep';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface StudyAbroadData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
  };
  countryPreferences: string[];
  education: {
    level: string;
    institution: string;
    gpa: string;
    graduationYear: string;
  };
  financial: {
    budget: string;
    fundingSource: string[];
  };
}

const StudyAbroad = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<StudyAbroadData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
    },
    countryPreferences: [],
    education: {
      level: '',
      institution: '',
      gpa: '',
      graduationYear: '',
    },
    financial: {
      budget: '',
      fundingSource: [],
    },
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: 'Personal Information', component: PersonalInfoStep },
    { number: 2, title: 'Country Preferences', component: CountrySelectionStep },
    { number: 3, title: 'Education Background', component: EducationStep },
    { number: 4, title: 'Financial Planning', component: FinancialStep },
    { number: 5, title: 'Review & Submit', component: ReviewStep },
  ];

  const updateFormData = (section: keyof StudyAbroadData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Leap Scholar
          </h1>
          <p className="text-gray-600">Your journey to study abroad starts here</p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.number}
                </div>
                <span className="text-xs mt-2 text-gray-600 hidden md:block">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-center mt-2">
            <span className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps} • {Math.round(progress)}% Complete
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {steps[currentStep - 1].title}
            </h2>
            
            <CurrentStepComponent
              data={formData}
              updateData={updateFormData}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Estimated time remaining: {(totalSteps - currentStep) * 2} minutes
              </p>
            </div>

            <Button
              onClick={nextStep}
              disabled={currentStep === totalSteps}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {currentStep === totalSteps ? 'Submit Application' : 'Next'}
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
