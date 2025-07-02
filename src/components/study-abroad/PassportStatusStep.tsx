
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface PassportStatusStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PassportStatusStep: React.FC<PassportStatusStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <div className="text-6xl mb-4">✈️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fly?</h2>
        <p className="text-lg text-gray-700">Do you have a passport for international travel?</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Passport status component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-blue-600 to-purple-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default PassportStatusStep;
