
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface BudgetAssessmentStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const BudgetAssessmentStep: React.FC<BudgetAssessmentStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl">
        <div className="text-6xl mb-4">💰</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Planning</h2>
        <p className="text-lg text-gray-700">What's your budget for this life-changing investment?</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Budget assessment component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-green-600 to-yellow-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default BudgetAssessmentStep;
