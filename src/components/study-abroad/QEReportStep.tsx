
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { BarChart3, TrendingUp, Star, Award, Target } from 'lucide-react';

interface QEReportStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QEReportStep: React.FC<QEReportStepProps> = ({ data, updateData, onNext }) => {
  // Mock QE Report data based on user's profile
  const getQEReport = () => {
    const score = Math.floor(Math.random() * 20) + 75; // 75-95 range
    const strengths = [];
    const improvements = [];
    
    if (data.educationLevel === 'completed-bachelors') {
      strengths.push('Strong academic foundation', 'Work-ready profile');
    }
    if (data.selectedCountries.includes('USA')) {
      strengths.push('Ambitious goals', 'High-caliber choices');
    }
    
    improvements.push('English proficiency test', 'Statement of Purpose');
    
    return { score, strengths, improvements };
  };

  const qeReport = getQEReport();

  const ScoreCard = ({ score, title, description, color }: {
    score: number;
    title: string;
    description: string;
    color: string;
  }) => (
    <div className={`p-6 rounded-2xl border-2 bg-gradient-to-br ${color}`}>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">{score}%</div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Profile Report</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Based on your information, we've created a personalized Qualification Evaluation Report. 
          This shows your current standing and guides your path to success.
        </p>
      </div>

      {/* Overall Score */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-6">
          <div className="text-6xl font-bold mb-2">{qeReport.score}%</div>
          <h3 className="text-2xl font-semibold mb-2">Overall Profile Score</h3>
          <p className="text-blue-100">
            {qeReport.score >= 85 ? 'Excellent profile for top universities!' : 
             qeReport.score >= 75 ? 'Strong profile with great potential!' : 
             'Good foundation with areas for improvement!'}
          </p>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid md:grid-cols-4 gap-4">
        <ScoreCard
          score={85}
          title="Academic"
          description="Education background"
          color="from-green-400 to-green-600 text-white"
        />
        <ScoreCard
          score={qeReport.score - 10}
          title="Experience"
          description="Work & projects"
          color="from-blue-400 to-blue-600 text-white"
        />
        <ScoreCard
          score={70}
          title="Test Scores"
          description="Standardized tests"
          color="from-orange-400 to-orange-600 text-white"
        />
        <ScoreCard
          score={qeReport.score + 5}
          title="Profile"
          description="Overall strength"
          color="from-purple-400 to-purple-600 text-white"
        />
      </div>

      {/* Strengths */}
      <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <Star size={24} className="text-green-600" />
          <h3 className="text-xl font-semibold text-green-900">Your Strengths</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Strong academic foundation',
            'Clear career goals',
            'International mindset',
            'Leadership potential'
          ].map((strength, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-800 font-medium">{strength}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Areas for Improvement */}
      <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
        <div className="flex items-center gap-3 mb-4">
          <Target size={24} className="text-orange-600" />
          <h3 className="text-xl font-semibold text-orange-900">Areas to Strengthen</h3>
        </div>
        <div className="space-y-3">
          {[
            { area: 'English Proficiency Test', action: 'Take IELTS/TOEFL', priority: 'High' },
            { area: 'Statement of Purpose', action: 'Craft compelling narrative', priority: 'High' },
            { area: 'Letters of Recommendation', action: 'Secure strong references', priority: 'Medium' },
            { area: 'Extracurricular Activities', action: 'Highlight leadership roles', priority: 'Medium' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-200">
              <div>
                <span className="font-medium text-orange-900">{item.area}</span>
                <p className="text-sm text-orange-700">{item.action}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.priority}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* University Recommendations */}
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <Award size={24} className="text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-900">University Tier Recommendations</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl border border-blue-200">
            <div className="text-2xl mb-2">🏆</div>
            <h4 className="font-semibold text-blue-900 mb-1">Reach Schools</h4>
            <p className="text-sm text-blue-700">Top-tier universities</p>
            <p className="text-xs text-blue-600 mt-1">20-30% admission chance</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-blue-200">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-blue-900 mb-1">Target Schools</h4>
            <p className="text-sm text-blue-700">Well-matched universities</p>
            <p className="text-xs text-blue-600 mt-1">50-70% admission chance</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-blue-200">
            <div className="text-2xl mb-2">✅</div>
            <h4 className="font-semibold text-blue-900 mb-1">Safety Schools</h4>
            <p className="text-sm text-blue-700">High-probability admits</p>
            <p className="text-xs text-blue-600 mt-1">80-90% admission chance</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp size={24} className="text-purple-600" />
          <h3 className="text-xl font-semibold text-purple-900">Your Action Plan</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold mb-2">Immediate (1-2 months)</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Register for English proficiency test</li>
              <li>• Start drafting Statement of Purpose</li>
              <li>• Request transcripts from institutions</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <h4 className="font-semibold mb-2">Next Phase (3-6 months)</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Complete university applications</li>
              <li>• Secure recommendation letters</li>
              <li>• Prepare for interviews</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center pt-8">
        <Button
          onClick={onNext}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg rounded-xl"
        >
          Continue Building Your Profile →
        </Button>
      </div>

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
        <p className="text-lg text-gray-700 italic">
          "Your current profile is just the beginning. Every step forward makes you stronger!" - Your QE Report
        </p>
      </div>
    </div>
  );
};

export default QEReportStep;
