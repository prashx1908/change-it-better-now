
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface AcademicDetailsStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const AcademicDetailsStep: React.FC<AcademicDetailsStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
        <div className="text-6xl mb-4">📖</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Academic Story</h2>
        <p className="text-lg text-gray-700">Tell us about your educational journey so far</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Academic details component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-indigo-600 to-blue-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default AcademicDetailsStep;
