
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface CounsellingModeStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const CounsellingModeStep: React.FC<CounsellingModeStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl">
        <div className="text-6xl mb-4">💬</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Connect</h2>
        <p className="text-lg text-gray-700">Choose your preferred counselling style</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Counselling mode selection component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-teal-600 to-blue-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default CounsellingModeStep;
