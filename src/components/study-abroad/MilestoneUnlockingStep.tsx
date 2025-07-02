
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { useNavigate } from 'react-router-dom';
import { Rocket, Star, Trophy, Gift, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface MilestoneUnlockingStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const MilestoneUnlockingStep: React.FC<MilestoneUnlockingStepProps> = ({ data }) => {
  const navigate = useNavigate();
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const celebrationSteps = [
    { 
      icon: '🎉', 
      title: 'Profile Created!', 
      message: 'Your comprehensive study abroad profile is now complete' 
    },
    { 
      icon: '🎯', 
      title: 'Goals Identified!', 
      message: 'We understand your dreams and aspirations perfectly' 
    },
    { 
      icon: '🚀', 
      title: 'Journey Begins!', 
      message: 'Your path to international education starts now' 
    }
  ];

  useEffect(() => {
    setShowCelebration(true);
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < celebrationSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const handleComplete = () => {
    navigate('/quick-evaluation');
  };

  const getProfileSummary = () => {
    return {
      countries: data.selectedCountries.length,
      program: data.selectedProgram,
      budget: data.budget.range,
      intake: data.preferredIntake,
      eligibleCountries: data.eligibleCountries.length,
      universities: data.selectedUniversities.length
    };
  };

  const summary = getProfileSummary();

  return (
    <div className="space-y-8 relative overflow-hidden">
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl animate-bounce">🎉</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse">⭐</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-spin">🎊</div>
          <div className="absolute top-40 right-10 text-4xl animate-bounce">🚀</div>
        </div>
      )}

      {/* Main Celebration */}
      <div className="text-center p-12 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl border border-green-100 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-blue-100/20 to-purple-100/20 animate-pulse rounded-2xl"></div>
        <div className="relative z-10">
          <div className="text-8xl mb-6 animate-bounce">🚀</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey Begins!</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Congratulations! You've successfully completed your study abroad profile. 
            You're now ready to unlock amazing opportunities and turn your dreams into reality.
          </p>
        </div>
      </div>

      {/* Celebration Steps */}
      <div className="grid md:grid-cols-3 gap-6">
        {celebrationSteps.map((step, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border-2 transition-all duration-1000 ${
              currentStep >= index
                ? 'border-green-500 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg scale-105'
                : 'border-gray-200 bg-white opacity-50'
            }`}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.message}</p>
              {currentStep >= index && (
                <div className="mt-4 flex justify-center">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Profile Summary */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Trophy size={32} className="text-yellow-500" />
          <h3 className="text-2xl font-bold text-gray-900">Your Profile Summary</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-1">{summary.countries}</div>
            <p className="text-sm text-blue-800">Countries Selected</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-1">{summary.eligibleCountries}</div>
            <p className="text-sm text-green-800">Eligible Countries</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-1">{summary.universities}</div>
            <p className="text-sm text-purple-800">Universities Shortlisted</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-xl">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {summary.program ? '✓' : '○'}
            </div>
            <p className="text-sm text-orange-800">Program Selected</p>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-xl">
            <div className="text-2xl font-bold text-pink-600 mb-1">
              {summary.intake ? '✓' : '○'}
            </div>
            <p className="text-sm text-pink-800">Intake Planned</p>
          </div>
          <div className="text-center p-4 bg-indigo-50 rounded-xl">
            <div className="text-2xl font-bold text-indigo-600 mb-1">
              {summary.budget ? '✓' : '○'}
            </div>
            <p className="text-sm text-indigo-800">Budget Assessed</p>
          </div>
        </div>
      </div>

      {/* Unlocked Features */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl border border-purple-200">
        <div className="flex items-center gap-3 mb-6">
          <Gift size={28} className="text-purple-600" />
          <h3 className="text-2xl font-bold text-purple-900">🎉 Milestone Unlocked!</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-purple-200">
            <h4 className="font-bold text-lg mb-4 text-purple-900">What You've Unlocked:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={20} />
                <span className="text-sm">Personalized university recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={20} />
                <span className="text-sm">Expert counselor assignment</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={20} />
                <span className="text-sm">Customized application timeline</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={20} />
                <span className="text-sm">Scholarship matching service</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={20} />
                <span className="text-sm">24/7 application support</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-200">
            <h4 className="font-bold text-lg mb-4 text-purple-900">Next Steps:</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <h5 className="font-medium">Counselor Call</h5>
                  <p className="text-sm text-gray-600">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <h5 className="font-medium">Strategy Session</h5>
                  <p className="text-sm text-gray-600">Personalized roadmap</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <h5 className="font-medium">Application Kickoff</h5>
                  <p className="text-sm text-gray-600">Begin your applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles size={32} />
            <h3 className="text-2xl font-bold">Ready to Take the Next Step?</h3>
          </div>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Your profile is complete and your journey is mapped out. Let's move forward 
            with confidence and turn your study abroad dreams into reality!
          </p>
          
          <Button 
            onClick={handleComplete}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold flex items-center gap-2 mx-auto"
          >
            View Your Complete Profile
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      {/* Success Stats */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200">
        <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Join Thousands of Successful Students</h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-green-600">50,000+</div>
            <p className="text-sm text-green-800">Students Guided</p>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <p className="text-sm text-green-800">Success Rate</p>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-green-600">500+</div>
            <p className="text-sm text-green-800">Partner Universities</p>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-green-600">₹100Cr+</div>
            <p className="text-sm text-green-800">Scholarships Secured</p>
          </div>
        </div>
      </div>

      {/* Final Motivation */}
      <div className="text-center p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🌟 Your Adventure Awaits!</h3>
        <p className="text-lg text-gray-700 italic max-w-2xl mx-auto">
          "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
        </p>
        <p className="text-gray-600 mt-4">
          You've taken the first crucial step. Now let's make those dreams come true!
        </p>
      </div>
    </div>
  );
};

export default MilestoneUnlockingStep;
