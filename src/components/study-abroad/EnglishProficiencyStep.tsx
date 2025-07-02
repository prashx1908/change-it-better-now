
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface EnglishProficiencyStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const EnglishProficiencyStep: React.FC<EnglishProficiencyStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl">
        <div className="text-6xl mb-4">🗣️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Language Skills</h2>
        <p className="text-lg text-gray-700">Tell us about your English proficiency</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">English proficiency component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-red-600 to-pink-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default EnglishProficiencyStep;
