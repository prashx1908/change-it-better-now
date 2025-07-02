
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { GraduationCap, BookOpen, Award, Briefcase } from 'lucide-react';

interface EducationLevelStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const educationLevels = [
  {
    id: '12th-grade',
    title: '12th Grade',
    subtitle: 'Ready for undergraduate adventure',
    description: 'Starting your higher education journey',
    icon: '🎓',
    color: 'from-green-400 to-blue-500',
    opportunities: ['Bachelor\'s Programs', 'Foundation Courses', 'Diploma Programs']
  },
  {
    id: 'bachelors-not-final',
    title: 'Bachelor\'s (Not Final Year)',
    subtitle: 'Building your foundation',
    description: 'Currently pursuing undergraduate studies',
    icon: '📚',
    color: 'from-blue-400 to-purple-500',
    opportunities: ['Transfer Programs', 'Exchange Programs', 'Summer Schools']
  },
  {
    id: 'bachelors-final',
    title: 'Bachelor\'s (Final Year)',
    subtitle: 'Almost there!',
    description: 'Preparing for the next big step',
    icon: '🎯',
    color: 'from-purple-400 to-pink-500',
    opportunities: ['Master\'s Programs', 'Graduate Certificates', 'Professional Courses']
  },
  {
    id: 'completed-bachelors',
    title: 'Completed Bachelor\'s',
    subtitle: 'Ready to level up',
    description: 'Undergraduate degree completed',
    icon: '🏆',
    color: 'from-orange-400 to-red-500',
    opportunities: ['Master\'s Programs', 'MBA', 'Professional Certifications', 'Research Programs']
  },
  {
    id: 'masters',
    title: 'Master\'s',
    subtitle: 'Advanced expertise',
    description: 'Postgraduate level education',
    icon: '👨‍🎓',
    color: 'from-indigo-400 to-purple-600',
    opportunities: ['PhD Programs', 'Advanced Certificates', 'Research Positions', 'Executive Programs']
  },
  {
    id: 'mbbs',
    title: 'MBBS',
    subtitle: 'Medical professional',
    description: 'Medical degree holder',
    icon: '⚕️',
    color: 'from-red-400 to-pink-500',
    opportunities: ['Medical Residency', 'Specialized Medicine', 'Public Health', 'Medical Research']
  },
  {
    id: 'other',
    title: 'Other',
    subtitle: 'Unique background',
    description: 'Different educational path',
    icon: '✨',
    color: 'from-gray-400 to-gray-600',
    opportunities: ['Custom Programs', 'Bridge Courses', 'Professional Development']
  }
];

const EducationLevelStep: React.FC<EducationLevelStepProps> = ({ data, updateData, onNext }) => {
  const selectEducationLevel = (levelId: string) => {
    updateData('educationLevel', levelId);
  };

  const EducationCard = ({ level }: { level: typeof educationLevels[0] }) => {
    const isSelected = data.educationLevel === level.id;
    
    return (
      <div
        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => selectEducationLevel(level.id)}
      >
        <div className="text-center mb-4">
          <div className="text-4xl mb-3">{level.icon}</div>
          <h3 className="font-bold text-xl mb-1">{level.title}</h3>
          <p className="text-blue-600 font-medium text-sm mb-2">{level.subtitle}</p>
          <p className="text-gray-600 text-sm">{level.description}</p>
        </div>
        
        {isSelected && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Award size={16} />
              Your Opportunities
            </h4>
            <div className="space-y-1">
              {level.opportunities.map((opportunity, index) => (
                <div key={index} className="text-sm text-blue-700 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  {opportunity}
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

  const selectedLevel = educationLevels.find(level => level.id === data.educationLevel);

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
        <div className="text-6xl mb-4">📖</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Academic Chapter</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Every educational journey is unique. Understanding where you are now helps us craft 
          the perfect path for your international study adventure.
        </p>
      </div>

      {/* Selected Level Summary */}
      {selectedLevel && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-4 mb-3">
            <div className="text-3xl">{selectedLevel.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-green-900">{selectedLevel.title}</h3>
              <p className="text-green-700">{selectedLevel.subtitle}</p>
            </div>
          </div>
          <p className="text-green-800 bg-white p-3 rounded-lg border border-green-200">
            Perfect! Based on your current level, we'll show you the best programs and opportunities 
            that align with your academic background.
          </p>
        </div>
      )}

      {/* Education Level Options */}
      <div>
        <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
          <GraduationCap className="text-blue-500" size={28} />
          Choose Your Current Level
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationLevels.map((level) => (
            <EducationCard key={level.id} level={level} />
          ))}
        </div>
      </div>

      {/* Educational Journey Timeline */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Your Educational Journey Path</h3>
        <div className="flex justify-center items-center space-x-4 text-center">
          <div className="flex flex-col items-center">
            <BookOpen className="text-blue-500 mb-2" size={24} />
            <span className="text-sm font-medium">Current Level</span>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          <div className="flex flex-col items-center">
            <GraduationCap className="text-purple-500 mb-2" size={24} />
            <span className="text-sm font-medium">Study Abroad</span>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
          <div className="flex flex-col items-center">
            <Briefcase className="text-pink-500 mb-2" size={24} />
            <span className="text-sm font-medium">Career Success</span>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {data.educationLevel && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue to Program Selection →
          </Button>
        </div>
      )}

      {/* Motivation Quote */}
      <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100">
        <p className="text-lg text-gray-700 italic">
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X
        </p>
      </div>
    </div>
  );
};

export default EducationLevelStep;
