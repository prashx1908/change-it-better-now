
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Shield, GraduationCap, TrendingUp, DollarSign, Check, Crown, Heart, HelpCircle } from 'lucide-react';

interface BudgetAssessmentStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const budgetOptions = [
  {
    id: 'minimum-35-lakhs',
    title: 'Can invest a min of 35 lakhs',
    subtitle: 'Access top tier universities in USA and other amazing universities in other countries',
    icon: '👑',
    gradient: 'from-blue-400 to-purple-500',
    isRecommended: false
  },
  {
    id: 'minimum-15-lakhs',
    title: 'Can invest a min of 15 lakhs',
    subtitle: 'Access top universities in countries like UK, Canada, Australia',
    icon: '✅',
    gradient: 'from-green-400 to-blue-500',
    isRecommended: false
  },
  {
    id: 'not-sure-finance',
    title: 'Not sure about the finance',
    subtitle: 'Need a counsellor to talk to to make a decision',
    icon: '💬',
    gradient: 'from-orange-400 to-pink-500',
    isRecommended: false
  },
  {
    id: 'cannot-invest-15-lakhs',
    title: "Can't invest a min of 15 lakhs",
    subtitle: 'We will help you with scholarships and other options',
    icon: 'ℹ️',
    gradient: 'from-gray-400 to-gray-600',
    isRecommended: false,
    warning: 'Not recommended'
  }
];

const fundingOptions = [
  { id: 'savings', title: 'Savings', subtitle: 'Personal or family savings', icon: '💰' },
  { id: 'loan', title: 'Loan', subtitle: 'Education loan from bank or NBFC', icon: '🏦' },
  { id: 'savings-loan', title: 'Savings + Loan', subtitle: 'Combination of savings and loan', icon: '⚖️' },
  { id: '100-scholarship', title: 'No, I want 100% scholarship', subtitle: '', icon: '🎓' }
];

const BudgetAssessmentStep: React.FC<BudgetAssessmentStepProps> = ({ data, updateData, onNext }) => {
  const handleBudgetChange = (budgetId: string) => {
    updateData('budget', {
      ...data.budget,
      range: budgetId
    });
  };

  const handleFundingModeChange = (fundingId: string) => {
    updateData('budget', {
      ...data.budget,
      fundingMode: fundingId
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              <span className="text-blue-600">LEAP</span>
              <span className="text-orange-500">SCHOLAR</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Your Path to Affordable Education
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            We've helped thousands of students achieve their study abroad dreams
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">18Cr+</div>
              <div className="text-sm text-gray-600">Scholarships Awarded</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">20-30%</div>
              <div className="text-sm text-gray-600">Average Scholarship</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-bold text-green-600 mb-1">Lowest Interest Loans</div>
              <div className="text-sm text-gray-600">Flexible repayment options</div>
            </div>
          </div>

          {/* Transition Message */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-12 border border-blue-100">
            <p className="text-gray-700 mb-3 leading-relaxed">
              Keeping all these financial support options aside, let's understand your minimum tuition budget investment.
            </p>
            <p className="text-gray-600 text-sm">
              This will help us suggest the best universities and financial planning options for you.
            </p>
          </div>
        </div>

        {/* Budget Selection */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-800">
            What is your planned investment range for tuition fees 
            <span className="text-blue-600"> (excluding living expenses)</span>
          </h3>
          
          <div className="bg-blue-50 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="text-blue-500 mt-1">💡</div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Why we ask this:</h4>
                <p className="text-blue-800 text-sm">
                  To help you understand realistic budgets and make the best choice for your study abroad journey.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:gap-6">
            {budgetOptions.map((option) => {
              const isSelected = data.budget.range === option.id;
              
              return (
                <div
                  key={option.id}
                  className={`relative bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected 
                      ? 'border-blue-500 shadow-lg transform scale-[1.02]' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleBudgetChange(option.id)}
                >
                  {option.warning && (
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {option.warning}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{option.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{option.title}</h4>
                      <p className="text-gray-600 text-sm">{option.subtitle}</p>
                    </div>
                    
                    {isSelected && (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Funding Options */}
        {data.budget.range && data.budget.range !== 'not-sure-finance' && (
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-800">
              How do you plan to finance your education?
            </h3>
            <p className="text-gray-600 text-center mb-8">
              With a minimum assurance of 20% scholarship, keeping it aside, how would you fund your education?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fundingOptions.map((option) => {
                const isSelected = data.budget.fundingMode === option.id;
                
                return (
                  <div
                    key={option.id}
                    className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      isSelected 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleFundingModeChange(option.id)}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-3">{option.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-1">{option.title}</h4>
                      {option.subtitle && (
                        <p className="text-gray-600 text-sm">{option.subtitle}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Continue Button */}
        {data.budget.range && (data.budget.range === 'not-sure-finance' || data.budget.fundingMode) && (
          <div className="text-center">
            <Button
              onClick={onNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetAssessmentStep;
