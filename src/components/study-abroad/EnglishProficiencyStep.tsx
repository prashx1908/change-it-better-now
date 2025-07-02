
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { BookOpen, Award, Target, TrendingUp } from 'lucide-react';

interface EnglishProficiencyStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const testTypes = [
  { 
    id: 'ielts', 
    name: 'IELTS', 
    fullName: 'International English Language Testing System',
    scoreRange: '0-9',
    duration: '2 hours 45 minutes',
    acceptance: 'UK, Canada, Australia, New Zealand'
  },
  { 
    id: 'toefl', 
    name: 'TOEFL', 
    fullName: 'Test of English as a Foreign Language',
    scoreRange: '0-120',
    duration: '4 hours',
    acceptance: 'USA, Canada'
  },
  { 
    id: 'pte', 
    name: 'PTE', 
    fullName: 'Pearson Test of English',
    scoreRange: '10-90',
    duration: '3 hours',
    acceptance: 'UK, Australia, New Zealand, Canada'
  },
  { 
    id: 'duolingo', 
    name: 'Duolingo', 
    fullName: 'Duolingo English Test',
    scoreRange: '10-160',
    duration: '1 hour',
    acceptance: 'USA, Canada (Some universities)'
  },
  { 
    id: 'not-taken', 
    name: 'Not Taken Yet', 
    fullName: 'Planning to take the test',
    scoreRange: 'N/A',
    duration: 'N/A',
    acceptance: 'We\'ll help you choose the right test'
  }
];

const EnglishProficiencyStep: React.FC<EnglishProficiencyStepProps> = ({ data, updateData, onNext }) => {
  const handleInputChange = (field: string, value: string) => {
    updateData('englishProficiency', {
      ...data.englishProficiency,
      [field]: value,
    });
  };

  const selectedTest = testTypes.find(test => test.id === data.englishProficiency.testType);
  const isFormValid = data.englishProficiency.testType && 
    (data.englishProficiency.testType === 'not-taken' || 
     (data.englishProficiency.score && data.englishProficiency.date));

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-100">
        <div className="text-6xl mb-4">🗣️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Language Skills</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          English proficiency is your gateway to international education. Whether you've already 
          taken a test or are planning to, we'll help you meet the requirements for your dream universities.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Test Selection */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={24} className="text-blue-600" />
            <h3 className="text-xl font-semibold">English Proficiency Test</h3>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="testType">Test Type *</Label>
            <Select 
              value={data.englishProficiency.testType} 
              onValueChange={(value) => handleInputChange('testType', value)}
            >
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select your English test" />
              </SelectTrigger>
              <SelectContent>
                {testTypes.map(test => (
                  <SelectItem key={test.id} value={test.id}>
                    {test.name} {test.id !== 'not-taken' && `(${test.scoreRange})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedTest && selectedTest.id !== 'not-taken' && (
              <p className="text-sm text-gray-500">{selectedTest.fullName}</p>
            )}
          </div>
        </div>

        {/* Test Details */}
        {selectedTest && selectedTest.id !== 'not-taken' && (
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Target size={24} className="text-green-600" />
              <h3 className="text-xl font-semibold">Test Details</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="score">Your Score *</Label>
                <Input
                  id="score"
                  placeholder={`Enter your ${selectedTest.name} score`}
                  value={data.englishProficiency.score}
                  onChange={(e) => handleInputChange('score', e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500">Score range: {selectedTest.scoreRange}</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Test Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={data.englishProficiency.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500">Scores are typically valid for 2 years</p>
              </div>
            </div>
          </div>
        )}

        {/* Test Comparison */}
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Award size={24} className="text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-900">English Test Comparison</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {testTypes.slice(0, 4).map((test) => (
              <div key={test.id} className="p-4 bg-white rounded-xl">
                <h4 className="font-semibold mb-2">{test.name}</h4>
                <div className="space-y-1 text-sm">
                  <p><strong>Score:</strong> {test.scoreRange}</p>
                  <p><strong>Duration:</strong> {test.duration}</p>
                  <p><strong>Best for:</strong> {test.acceptance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score Requirements */}
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={24} className="text-green-600" />
            <h3 className="text-xl font-semibold text-green-900">Typical Score Requirements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Top Universities</h4>
              <div className="space-y-1 text-sm text-green-800">
                <p>• IELTS: 7.0 - 8.0</p>
                <p>• TOEFL: 100 - 120</p>
                <p>• PTE: 70 - 80</p>
                <p>• Duolingo: 120 - 140</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Good Universities</h4>
              <div className="space-y-1 text-sm text-green-800">
                <p>• IELTS: 6.0 - 7.0</p>
                <p>• TOEFL: 80 - 100</p>
                <p>• PTE: 58 - 70</p>
                <p>• Duolingo: 100 - 120</p>
              </div>
            </div>
          </div>
        </div>

        {/* Test Preparation */}
        {data.englishProficiency.testType === 'not-taken' && (
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-900 mb-4">📚 Test Preparation Support</h3>
            <div className="space-y-4">
              <p className="text-orange-800">
                No worries! We'll help you choose the right test and prepare effectively.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl">
                  <h4 className="font-semibold mb-2">Free Resources</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Practice tests and materials</li>
                    <li>• Study schedules and tips</li>
                    <li>• Online practice platforms</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <h4 className="font-semibold mb-2">Premium Coaching</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Expert instructors</li>
                    <li>• Personalized study plans</li>
                    <li>• Mock tests and feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Score Analysis */}
        {selectedTest && selectedTest.id !== 'not-taken' && data.englishProficiency.score && (
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">📈 Your Score Analysis</h3>
            <div className="p-4 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Your {selectedTest.name} Score:</span>
                <span className="text-2xl font-bold text-purple-600">{data.englishProficiency.score}</span>
              </div>
              <p className="text-sm text-purple-700">
                {/* Simple score evaluation logic */}
                {(() => {
                  const score = parseFloat(data.englishProficiency.score);
                  if (selectedTest.id === 'ielts') {
                    if (score >= 7.5) return "🎉 Excellent! You qualify for top universities worldwide.";
                    if (score >= 6.5) return "👍 Great score! You have good options at many universities.";
                    if (score >= 6.0) return "✅ Good score! Some universities may require higher scores.";
                    return "💪 Consider retaking to improve your university options.";
                  }
                  return "We'll help you understand how this score opens doors for you!";
                })()}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      {isFormValid && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl border border-pink-100">
        <p className="text-lg text-gray-700 italic">
          "The limits of my language mean the limits of my world." - Ludwig Wittgenstein. Expand your world!
        </p>
      </div>
    </div>
  );
};

export default EnglishProficiencyStep;
