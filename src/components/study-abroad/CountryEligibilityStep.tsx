
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface CountryEligibilityStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const CountryEligibilityStep: React.FC<CountryEligibilityStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
        <div className="text-6xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Opportunities</h2>
        <p className="text-lg text-gray-700">Countries where you can shine based on your profile</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Country eligibility component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-blue-600 to-green-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default CountryEligibilityStep;
