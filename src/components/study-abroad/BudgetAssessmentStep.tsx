import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { DollarSign, PiggyBank, CreditCard, GraduationCap, TrendingUp } from 'lucide-react';

interface BudgetAssessmentStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const budgetOptions = [
  {
    id: 'minimum-35-lakhs',
    title: 'Can invest a minimum of ₹35 lakhs',
    subtitle: 'Premium Investment Range',
    description: 'Access to top-tier universities worldwide',
    icon: '💎',
    color: 'from-green-400 to-blue-500',
    features: ['USA top universities', 'UK Russell Group', 'Canada top programs', 'Premium living standards']
  },
  {
    id: 'minimum-15-lakhs',
    title: 'Can invest a minimum of ₹15 lakhs',
    subtitle: 'Standard Investment Range',
    description: 'Great options across multiple countries',
    icon: '💰',
    color: 'from-blue-400 to-purple-500',
    features: ['Canada universities', 'UK good universities', 'European programs', 'Balanced lifestyle']
  },
  {
    id: 'not-sure-finance',
    title: 'Not sure about the finance',
    subtitle: 'Need Financial Guidance',
    description: 'Let us help you plan your investment',
    icon: '🤔',
    color: 'from-orange-400 to-red-500',
    features: ['Financial counseling', 'Loan assistance', 'Scholarship guidance', 'Budget planning']
  },
  {
    id: 'cannot-invest-15-lakhs',
    title: 'Cannot invest a minimum of ₹15 lakhs',
    subtitle: 'Scholarship & Aid Focus',
    description: 'We\'ll find affordable and scholarship options',
    icon: '🎓',
    color: 'from-purple-400 to-pink-500',
    features: ['100% scholarships', 'Affordable programs', 'Work opportunities', 'Financial aid options']
  }
];

const fundingModes = [
  { id: 'savings', title: 'Savings', icon: '🏦', description: 'Family savings and investments' },
  { id: 'loan', title: 'Loan', icon: '💳', description: 'Education loan from banks' },
  { id: 'savings-loan', title: 'Savings + Loan', icon: '⚖️', description: 'Combination of both' },
  { id: '100-scholarship', title: '100% Scholarship', icon: '🏆', description: 'Merit-based full funding' }
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

  const BudgetCard = ({ option }: { option: typeof budgetOptions[0] }) => {
    const isSelected = data.budget.range === option.id;
    
    return (
      <div
        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => handleBudgetChange(option.id)}
      >
        <div className="text-center mb-4">
          <div className="text-4xl mb-3">{option.icon}</div>
          <h3 className="font-bold text-lg mb-1">{option.title}</h3>
          <p className="text-blue-600 font-medium text-sm mb-2">{option.subtitle}</p>
          <p className="text-gray-600 text-sm">{option.description}</p>
        </div>
        
        {isSelected && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">What this opens for you:</h4>
            <div className="space-y-1">
              {option.features.map((feature, index) => (
                <div key={index} className="text-sm text-blue-700 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ✓
          </div>
        )}
      </div>
    );
  };

  const FundingCard = ({ mode }: { mode: typeof fundingModes[0] }) => {
    const isSelected = data.budget.fundingMode === mode.id;
    
    return (
      <div
        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => handleFundingModeChange(mode.id)}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">{mode.icon}</div>
          <h4 className="font-semibold mb-1">{mode.title}</h4>
          <p className="text-sm text-gray-600">{mode.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* LeapScholar Branding & Statistics */}
      <div className="text-center p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl border border-blue-100">
        {/* LeapScholar Logo */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-blue-600">LEAP</span>
              <span className="text-orange-500">SCHOLAR</span>
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">Your Path to Affordable Education</h1>
        <p className="text-lg text-gray-600 mb-8">
          We've helped thousands of students achieve their study abroad dreams
        </p>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">18Cr+</div>
            <div className="text-sm text-gray-600">Scholarships Awarded</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-1">20-30%</div>
            <div className="text-sm text-gray-600">Average Scholarship</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-bold text-green-600 mb-1">Lowest Interest Loans</div>
            <div className="text-sm text-gray-600">Flexible repayment options</div>
          </div>
        </div>

        {/* Transition Message */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl border border-blue-200">
          <p className="text-gray-700 leading-relaxed mb-4">
            Keeping all these financial support options aside, let's understand your minimum tuition budget investment.
          </p>
          <p className="text-gray-600 text-sm">
            This will help us suggest the best universities and financial planning options for you.
          </p>
        </div>
      </div>

      {/* Budget Range Selection */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">What's your planned investment range?</h3>
        <p className="text-center text-gray-600 mb-8">This is for tuition fees only, excluding living expenses</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {budgetOptions.map((option) => (
            <BudgetCard key={option.id} option={option} />
          ))}
        </div>
      </div>

      {/* Funding Mode Selection */}
      {data.budget.range && data.budget.range !== 'not-sure-finance' && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">How do you plan to fund your education?</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {fundingModes.map((mode) => (
              <FundingCard key={mode.id} mode={mode} />
            ))}
          </div>
        </div>
      )}

      {/* Selected Budget Summary */}
      {data.budget.range && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-4 mb-3">
            <DollarSign size={24} className="text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-900">Your Investment Plan</h3>
              <p className="text-green-700">
                {budgetOptions.find(opt => opt.id === data.budget.range)?.title}
              </p>
              {data.budget.fundingMode && (
                <p className="text-green-600 text-sm">
                  Funding via: {fundingModes.find(mode => mode.id === data.budget.fundingMode)?.title}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Budget Breakdown */}
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <PiggyBank size={24} className="text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-900">Typical Cost Breakdown</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold">USA (₹35-50 lakhs/year)</h4>
            <div className="space-y-1 text-sm">
              <p>• Public universities: ₹20-35 lakhs</p>
              <p>• Private universities: ₹35-50 lakhs</p>
              <p>• Living expenses: ₹8-15 lakhs</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Canada/UK (₹15-30 lakhs/year)</h4>
            <div className="space-y-1 text-sm">
              <p>• Tuition fees: ₹15-25 lakhs</p>
              <p>• Living expenses: ₹6-12 lakhs</p>
              <p>• Work opportunities available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Assistance */}
      <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard size={24} className="text-purple-600" />
          <h3 className="text-xl font-semibold text-purple-900">Financial Support Available</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🏆</div>
            <h4 className="font-semibold mb-2">Scholarships</h4>
            <p className="text-sm text-gray-600">Merit-based funding up to 100%</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🏦</div>
            <h4 className="font-semibold mb-2">Education Loans</h4>
            <p className="text-sm text-gray-600">Competitive rates, easy approval</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">💼</div>
            <h4 className="font-semibold mb-2">Work Opportunities</h4>
            <p className="text-sm text-gray-600">Part-time work while studying</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {data.budget.range && (data.budget.range === 'not-sure-finance' || data.budget.fundingMode) && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl border border-yellow-100">
        <p className="text-lg text-gray-700 italic">
          "An investment in knowledge pays the best interest." - Benjamin Franklin
        </p>
      </div>
    </div>
  );
};

export default BudgetAssessmentStep;
