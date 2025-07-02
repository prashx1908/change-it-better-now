
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Calendar, Clock, Sun, Snowflake, Leaf, Flower } from 'lucide-react';

interface IntakePreferenceStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const intakeOptions = [
  {
    id: 'fall',
    title: 'Fall Intake',
    subtitle: 'September - October',
    description: 'Most popular intake with maximum university options',
    icon: '🍂',
    season: 'Autumn',
    timing: 'Sep - Oct',
    advantages: [
      'Largest intake with most programs available',
      'Maximum scholarship opportunities',
      'Better campus life and social integration',
      'Ideal weather for settling in most countries'
    ],
    countries: ['USA', 'Canada', 'UK', 'Australia'],
    deadlines: 'Applications due: Dec - Feb (previous year)',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'spring',
    title: 'Spring Intake',
    subtitle: 'January - February',
    description: 'Second largest intake with good university options',
    icon: '🌸',
    season: 'Spring',
    timing: 'Jan - Feb',
    advantages: [
      'Good alternative to Fall intake',
      'Less competition compared to Fall',
      'Fresh start with New Year',
      'Suitable for gap year students'
    ],
    countries: ['USA', 'Canada', 'Australia'],
    deadlines: 'Applications due: Aug - Oct (previous year)',
    color: 'from-pink-400 to-rose-500'
  },
  {
    id: 'summer',
    title: 'Summer Intake',
    subtitle: 'May - June',
    description: 'Limited programs but available for specific courses',
    icon: '☀️',
    season: 'Summer',
    timing: 'May - Jun',
    advantages: [
      'Quick admission process',
      'Less crowded campuses',
      'Suitable for specific programs',
      'Good for students who missed other intakes'
    ],
    countries: ['Canada', 'Australia', 'UK'],
    deadlines: 'Applications due: Jan - Mar',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'flexible',
    title: 'I\'m Flexible',
    subtitle: 'Open to any intake',
    description: 'Let us recommend the best intake based on your profile',
    icon: '🔄',
    season: 'Any',
    timing: 'Flexible',
    advantages: [
      'Maximum opportunities across all intakes',
      'Strategic planning based on your timeline',
      'Consider all scholarship deadlines',
      'Optimize for your specific situation'
    ],
    countries: ['All Countries'],
    deadlines: 'We\'ll plan the optimal timeline',
    color: 'from-purple-400 to-blue-500'
  }
];

const IntakePreferenceStep: React.FC<IntakePreferenceStepProps> = ({ data, updateData, onNext }) => {
  const selectIntake = (intakeId: string) => {
    updateData('preferredIntake', intakeId);
  };

  const IntakeCard = ({ intake }: { intake: typeof intakeOptions[0] }) => {
    const isSelected = data.preferredIntake === intake.id;
    
    return (
      <div
        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => selectIntake(intake.id)}
      >
        <div className="text-center mb-4">
          <div className="text-5xl mb-3">{intake.icon}</div>
          <h3 className="font-bold text-xl mb-1">{intake.title}</h3>
          <p className="text-blue-600 font-medium mb-1">{intake.subtitle}</p>
          <p className="text-gray-600 text-sm">{intake.description}</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Season:</span>
            <span className="font-medium">{intake.season}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Timing:</span>
            <span className="font-medium">{intake.timing}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Available in:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {intake.countries.map((country, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {isSelected && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Why This Works:</h4>
            <div className="space-y-1">
              {intake.advantages.map((advantage, index) => (
                <div key={index} className="text-sm text-blue-700 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  {advantage}
                </div>
              ))}
            </div>
            <div className="mt-3 p-2 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-800 font-medium">{intake.deadlines}</p>
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

  const selectedIntake = intakeOptions.find(intake => intake.id === data.preferredIntake);

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100">
        <div className="text-6xl mb-4">📅</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Timing</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Timing is everything in your study abroad journey. Each intake has its own advantages, 
          and choosing the right one can significantly impact your experience and opportunities.
        </p>
      </div>

      {/* Intake Options */}
      <div className="grid md:grid-cols-2 gap-6">
        {intakeOptions.map((intake) => (
          <IntakeCard key={intake.id} intake={intake} />
        ))}
      </div>

      {/* Selected Intake Summary */}
      {selectedIntake && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <Calendar size={24} className="text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-green-900">Your Preferred Intake</h3>
              <p className="text-green-700">{selectedIntake.title} - {selectedIntake.subtitle}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-green-800 text-sm">
              🎯 Excellent choice! We'll align your entire application strategy with this timeline.
            </p>
          </div>
        </div>
      )}

      {/* Timeline Comparison */}
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Intake Timeline Overview</h3>
        <div className="space-y-4">
          {intakeOptions.slice(0, 3).map((intake, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{intake.icon}</div>
                <div>
                  <h4 className="font-semibold">{intake.title}</h4>
                  <p className="text-sm text-gray-600">{intake.timing}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-blue-600">{intake.deadlines}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Advice */}
      <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <Clock size={24} className="text-purple-600" />
          <h3 className="text-xl font-semibold text-purple-900">Strategic Timing Tips</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold mb-2 text-purple-900">🎯 Fall Intake Benefits</h4>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Maximum university and program choices</li>
              <li>• Best scholarship opportunities</li>
              <li>• Ideal for fresh graduates</li>
              <li>• Full academic year experience</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold mb-2 text-purple-900">⚡ Alternative Intakes</h4>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Spring: Less competitive, good alternative</li>
              <li>• Summer: Quick entry, fewer programs</li>
              <li>• Flexible: Strategic optimization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {data.preferredIntake && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
        <p className="text-lg text-gray-700 italic">
          "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success." - Start now!
        </p>
      </div>
    </div>
  );
};

export default IntakePreferenceStep;
