
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import CountrySelectionStep from '@/components/study-abroad/CountrySelectionStep';
import EducationLevelStep from '@/components/study-abroad/EducationLevelStep';
import ProgramSelectionStep from '@/components/study-abroad/ProgramSelectionStep';
import PassportStatusStep from '@/components/study-abroad/PassportStatusStep';
import CitySelectionStep from '@/components/study-abroad/CitySelectionStep';
import PhoneVerificationStep from '@/components/study-abroad/PhoneVerificationStep';
import QEReportStep from '@/components/study-abroad/QEReportStep';
import AcademicDetailsStep from '@/components/study-abroad/AcademicDetailsStep';
import BudgetAssessmentStep from '@/components/study-abroad/BudgetAssessmentStep';
import CountryEligibilityStep from '@/components/study-abroad/CountryEligibilityStep';
import TimelineUniversityStep from '@/components/study-abroad/TimelineUniversityStep';
import CounsellingModeStep from '@/components/study-abroad/CounsellingModeStep';
import IntakePreferenceStep from '@/components/study-abroad/IntakePreferenceStep';
import EnglishProficiencyStep from '@/components/study-abroad/EnglishProficiencyStep';
import ContactInformationStep from '@/components/study-abroad/ContactInformationStep';
import MilestoneUnlockingStep from '@/components/study-abroad/MilestoneUnlockingStep';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface StudyAbroadData {
  selectedCountries: string[];
  educationLevel: string;
  selectedProgram: string;
  hasPassport: boolean;
  selectedCity: string;
  phoneNumber: string;
  isPhoneVerified: boolean;
  academicDetails: {
    degree: string;
    specialization: string;
    grade: string;
    backlogs: number;
    graduationTime: string;
    yearGap: string;
    workExperience: string;
  };
  budget: {
    range: string;
    fundingMode: string;
  };
  eligibleCountries: string[];
  selectedUniversities: string[];
  counsellingMode: string;
  preferredIntake: string;
  englishProficiency: {
    testType: string;
    score: string;
    date: string;
  };
  contactInfo: {
    name: string;
    email: string;
  };
}

const StudyAbroad = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<StudyAbroadData>({
    selectedCountries: [],
    educationLevel: '',
    selectedProgram: '',
    hasPassport: false,
    selectedCity: '',
    phoneNumber: '',
    isPhoneVerified: false,
    academicDetails: {
      degree: '',
      specialization: '',
      grade: '',
      backlogs: 0,
      graduationTime: '',
      yearGap: '',
      workExperience: '',
    },
    budget: {
      range: '',
      fundingMode: '',
    },
    eligibleCountries: [],
    selectedUniversities: [],
    counsellingMode: '',
    preferredIntake: '',
    englishProficiency: {
      testType: '',
      score: '',
      date: '',
    },
    contactInfo: {
      name: '',
      email: '',
    },
  });

  const totalSteps = 16;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: 'Country Dreams', subtitle: 'Where do you want to study?', component: CountrySelectionStep, icon: '🌍' },
    { number: 2, title: 'Education Journey', subtitle: 'What is your current education level?', component: EducationLevelStep, icon: '🎓' },
    { number: 3, title: 'Program Passion', subtitle: 'What do you want to study?', component: ProgramSelectionStep, icon: '📚' },
    { number: 4, title: 'Travel Ready?', subtitle: 'Do you hold a passport?', component: PassportStatusStep, icon: '✈️' },
    { number: 5, title: 'Home Base', subtitle: 'Which city are you from?', component: CitySelectionStep, icon: '🏙️' },
    { number: 6, title: 'Stay Connected', subtitle: 'Let\'s verify your phone number', component: PhoneVerificationStep, icon: '📱' },
    { number: 7, title: 'Your Profile', subtitle: 'Your Qualification Evaluation Report', component: QEReportStep, icon: '📊' },
    { number: 8, title: 'Academic Story', subtitle: 'Tell us about your academic journey', component: AcademicDetailsStep, icon: '📖' },
    { number: 9, title: 'Investment Planning', subtitle: 'What\'s your budget for this dream?', component: BudgetAssessmentStep, icon: '💰' },
    { number: 10, title: 'Your Opportunities', subtitle: 'Countries where you can shine', component: CountryEligibilityStep, icon: '🎯' },
    { number: 11, title: 'University Selection', subtitle: 'Choose your dream universities', component: TimelineUniversityStep, icon: '🏛️' },
    { number: 12, title: 'Counselling Style', subtitle: 'How would you like to connect?', component: CounsellingModeStep, icon: '💬' },
    { number: 13, title: 'Perfect Timing', subtitle: 'When do you want to start?', component: IntakePreferenceStep, icon: '📅' },
    { number: 14, title: 'Language Skills', subtitle: 'Your English proficiency details', component: EnglishProficiencyStep, icon: '🗣️' },
    { number: 15, title: 'Final Details', subtitle: 'Let\'s complete your profile', component: ContactInformationStep, icon: '👤' },
    { number: 16, title: 'Journey Begins', subtitle: 'Unlock your next milestone', component: MilestoneUnlockingStep, icon: '🚀' },
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

  const getCurrentStepData = () => {
    return steps[currentStep - 1];
  };

  const CurrentStepComponent = steps[currentStep - 1].component;
  const currentStepData = getCurrentStepData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <Sparkles size={32} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Your Study Abroad Story</h1>
            <p className="text-blue-100 text-lg">Every great journey begins with a single step</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Story Progress */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl">{currentStepData.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
                  <p className="text-gray-600">{currentStepData.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{currentStep}</div>
                <div className="text-sm text-gray-500">of {totalSteps}</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Your Progress</span>
                <span className="text-sm font-medium text-gray-900">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
          </div>

          {/* Step Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {steps.slice(0, 8).map((step, index) => (
              <div
                key={step.number}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-blue-600 scale-110'
                    : currentStep === step.number
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-300'
                }`}
              />
            ))}
            {totalSteps > 8 && (
              <>
                <div className="text-gray-400 mx-2">...</div>
                {steps.slice(-3).map((step, index) => (
                  <div
                    key={step.number}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentStep >= step.number
                        ? 'bg-blue-600 scale-110'
                        : currentStep === step.number
                        ? 'bg-blue-400 scale-125'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </>
            )}
          </div>
        </div>

        {/* Main Story Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <CurrentStepComponent
                data={formData}
                updateData={updateFormData}
                onNext={nextStep}
                onPrev={prevStep}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3"
            >
              <ChevronLeft size={16} />
              Previous Chapter
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Chapter {currentStep} of {totalSteps}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Estimated time: {Math.max(1, (totalSteps - currentStep) * 2)} minutes
              </p>
            </div>

            <Button
              onClick={nextStep}
              disabled={currentStep === totalSteps}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3"
            >
              {currentStep === totalSteps ? 'Complete Journey' : 'Next Chapter'}
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
