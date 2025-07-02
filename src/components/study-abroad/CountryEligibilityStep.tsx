
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { MapPin, CheckCircle, AlertCircle, Star } from 'lucide-react';

interface CountryEligibilityStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

// Country eligibility rules based on your specification
const countryRules = {
  'USA': { maxBacklogs: 10, minBudget: 35 },
  'Canada': { maxBacklogs: 10, minBudget: 15 },
  'UK': { maxBacklogs: 15, minBudget: 15 },
  'Ireland': { maxBacklogs: 7, minBudget: 15 },
  'Australia': { maxBacklogs: 15, minBudget: 15 },
  'New Zealand': { maxBacklogs: 8, minBudget: 15 },
  'France': { maxBacklogs: 15, minBudget: 15 },
  'Germany': { maxBacklogs: 15, minBudget: 15 },
  'Netherlands': { maxBacklogs: 15, minBudget: 15 },
  'Singapore': { maxBacklogs: 12, minBudget: 15 },
  'Sweden': { maxBacklogs: 12, minBudget: 15 },
  'Denmark': { maxBacklogs: 12, minBudget: 15 },
  'Italy': { maxBacklogs: 15, minBudget: 15 },
  'Spain': { maxBacklogs: 15, minBudget: 15 },
};

const CountryEligibilityStep: React.FC<CountryEligibilityStepProps> = ({ data, updateData, onNext }) => {
  // Get user's financial capacity
  const getUserBudget = () => {
    switch (data.budget.range) {
      case 'minimum-35-lakhs': return 35;
      case 'minimum-15-lakhs': return 15;
      case 'cannot-invest-15-lakhs': return 5;
      case 'not-sure-finance': return null;
      default: return null;
    }
  };

  const userBudget = getUserBudget();
  const userBacklogs = data.academicDetails.backlogs;

  // Check country eligibility
  const checkEligibility = (country: string) => {
    const rules = countryRules[country as keyof typeof countryRules];
    if (!rules) return { eligible: true, reason: '' };

    // Backlog check (priority)
    if (userBacklogs > rules.maxBacklogs) {
      return { 
        eligible: false, 
        reason: `Requires max ${rules.maxBacklogs} backlogs (you have ${userBacklogs})`,
        type: 'backlogs'
      };
    }

    // Budget check (only if budget is specified)
    if (userBudget !== null && userBudget < rules.minBudget) {
      return { 
        eligible: false, 
        reason: `Requires min ₹${rules.minBudget} lakhs budget`,
        type: 'budget'
      };
    }

    return { eligible: true, reason: '' };
  };

  // Get eligible countries
  const selectedCountriesWithEligibility = data.selectedCountries.map(country => ({
    name: country,
    eligibility: checkEligibility(country)
  }));

  const eligibleCountries = selectedCountriesWithEligibility.filter(c => c.eligibility.eligible);
  const ineligibleCountries = selectedCountriesWithEligibility.filter(c => !c.eligibility.eligible);

  // Update eligible countries in data
  React.useEffect(() => {
    updateData('eligibleCountries', eligibleCountries.map(c => c.name));
  }, [eligibleCountries.length]);

  const CountryCard = ({ country, eligibility, isEligible }: {
    country: string;
    eligibility: any;
    isEligible: boolean;
  }) => {
    const countryFlags: { [key: string]: string } = {
      'USA': '🇺🇸', 'Canada': '🇨🇦', 'UK': '🇬🇧', 'Ireland': '🇮🇪',
      'Australia': '🇦🇺', 'New Zealand': '🇳🇿', 'Germany': '🇩🇪', 'France': '🇫🇷',
      'Netherlands': '🇳🇱', 'Singapore': '🇸🇬', 'Sweden': '🇸🇪', 'Denmark': '🇩🇰',
      'Italy': '🇮🇹', 'Spain': '🇪🇸'
    };

    return (
      <div className={`relative p-6 rounded-2xl border-2 ${
        isEligible 
          ? 'border-blue-500 bg-white shadow-lg' 
          : 'border-orange-300 bg-orange-50'
      }`}>
        {/* Eligibility Badge */}
        {isEligible ? (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
            <Star size={12} />
            Recommended
          </div>
        ) : (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-3 py-2 rounded-full font-semibold transform rotate-12">
            Consider Options
          </div>
        )}

        <div className="text-center">
          <div className="text-4xl mb-3">{countryFlags[country] || '🌍'}</div>
          <h3 className="font-bold text-xl mb-2">{country}</h3>
          
          {isEligible ? (
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-center gap-2 text-green-600 font-medium mb-2">
                <CheckCircle size={16} />
                Perfect Match!
              </div>
              <p className="text-sm text-green-700">
                Your profile aligns well with {country}'s requirements. Great opportunities await!
              </p>
            </div>
          ) : (
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-medium mb-2">
                <AlertCircle size={16} />
                Needs Attention
              </div>
              <p className="text-sm text-orange-700 mb-2">{eligibility.reason}</p>
              {eligibility.type === 'budget' && country === 'USA' ? (
                <p className="text-xs text-orange-600">
                  💡 Consider education loans or scholarships for USA programs
                </p>
              ) : (
                <p className="text-xs text-orange-600">
                  💡 Let's explore other amazing options for you!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Skip this step if user selected "Not sure" for countries or budget, and has no backlogs
  const shouldSkip = (data.selectedCountries.includes('Not sure') || 
                     data.budget.range === 'not-sure-finance') && 
                     userBacklogs === 0;

  if (shouldSkip) {
    return (
      <div className="space-y-8">
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
          <div className="text-6xl mb-4">🌟</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">You're All Set!</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Your profile looks great! Since you're exploring options, we'll help you discover 
            the best countries and universities in the next steps.
          </p>
        </div>
        
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
        <div className="text-6xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Opportunities</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Based on your academic profile and budget, here's where you can shine! 
          We've analyzed your eligibility for each country you're interested in.
        </p>
      </div>

      {/* Profile Summary */}
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-3 text-center">Your Profile Summary</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-white rounded-lg">
            <div className="text-2xl mb-1">📚</div>
            <p className="text-sm text-gray-600">Academic Backlogs</p>
            <p className="font-semibold">{userBacklogs === 0 ? 'None' : userBacklogs}</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <div className="text-2xl mb-1">💰</div>
            <p className="text-sm text-gray-600">Budget Range</p>
            <p className="font-semibold">
              {userBudget ? `₹${userBudget}+ lakhs` : 'Flexible'}
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <div className="text-2xl mb-1">🎓</div>
            <p className="text-sm text-gray-600">Education</p>
            <p className="font-semibold">{data.educationLevel.replace('-', ' ')}</p>
          </div>
        </div>
      </div>

      {/* Eligible Countries */}
      {eligibleCountries.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 text-center justify-center">
            <CheckCircle className="text-green-500" size={28} />
            Perfect Matches for You
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibleCountries.map((country) => (
              <CountryCard 
                key={country.name} 
                country={country.name} 
                eligibility={country.eligibility}
                isEligible={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Ineligible Countries */}
      {ineligibleCountries.length > 0 && (
        <div>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 text-center justify-center">
            <AlertCircle className="text-orange-500" size={28} />
            Let's Find Better Options
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ineligibleCountries.map((country) => (
              <CountryCard 
                key={country.name} 
                country={country.name} 
                eligibility={country.eligibility}
                isEligible={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Positive Encouragement */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
        <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">🌟 Your Path Forward</h3>
        <div className="text-center space-y-4">
          {eligibleCountries.length > 0 ? (
            <p className="text-lg text-gray-700">
              Fantastic! You have <strong>{eligibleCountries.length}</strong> excellent {eligibleCountries.length === 1 ? 'option' : 'options'} 
              where your profile is a perfect match. Let's explore amazing universities in {eligibleCountries.length === 1 ? 'this country' : 'these countries'}!
            </p>
          ) : (
            <div className="space-y-3">
              <p className="text-lg text-gray-700">
                Don't worry! Every challenge is an opportunity in disguise. 
                We have amazing strategies to help you achieve your dreams.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-white rounded-xl">
                  <h4 className="font-semibold mb-2">🎯 Alternative Strategies</h4>
                  <p className="text-sm text-gray-600">Foundation programs, pathway courses, and bridge programs</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <h4 className="font-semibold mb-2">💰 Financial Solutions</h4>
                  <p className="text-sm text-gray-600">Scholarships, loans, and work-study opportunities</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center pt-8">
        <Button
          onClick={onNext}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-4 text-lg rounded-xl"
        >
          {eligibleCountries.length > 0 ? 'Explore Universities →' : 'Find My Options →'}
        </Button>
      </div>

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
        <p className="text-lg text-gray-700 italic">
          "Every expert was once a beginner. Every pro was once an amateur." - Your journey starts here!
        </p>
      </div>
    </div>
  );
};

export default CountryEligibilityStep;
