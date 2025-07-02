
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface ProgramSelectionStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProgramSelectionStep: React.FC<ProgramSelectionStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Passion</h2>
        <p className="text-lg text-gray-700">What field of study ignites your curiosity?</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Program selection component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-green-600 to-blue-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default ProgramSelectionStep;
