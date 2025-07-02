
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface PhoneVerificationStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PhoneVerificationStep: React.FC<PhoneVerificationStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
        <div className="text-6xl mb-4">📱</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
        <p className="text-lg text-gray-700">Let's verify your phone number for important updates</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Phone verification component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-blue-600 to-green-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default PhoneVerificationStep;
