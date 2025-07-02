
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface TimelineUniversityStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const TimelineUniversityStep: React.FC<TimelineUniversityStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
        <div className="text-6xl mb-4">🏛️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Dream Universities</h2>
        <p className="text-lg text-gray-700">Select your preferred universities and plan your timeline</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Timeline and university selection component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-purple-600 to-blue-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default TimelineUniversityStep;
