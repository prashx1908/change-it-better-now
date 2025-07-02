
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface IntakePreferenceStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const IntakePreferenceStep: React.FC<IntakePreferenceStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
        <div className="text-6xl mb-4">📅</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Timing</h2>
        <p className="text-lg text-gray-700">When would you like to start your journey?</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Intake preference component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-yellow-600 to-orange-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default IntakePreferenceStep;
