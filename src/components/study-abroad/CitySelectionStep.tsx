
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface CitySelectionStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const CitySelectionStep: React.FC<CitySelectionStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
        <div className="text-6xl mb-4">🏙️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Home Base</h2>
        <p className="text-lg text-gray-700">Which city do you call home?</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">City selection component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-orange-600 to-red-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default CitySelectionStep;
