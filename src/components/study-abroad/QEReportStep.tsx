
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface QEReportStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QEReportStep: React.FC<QEReportStepProps> = ({ data, updateData, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Profile Report</h2>
        <p className="text-lg text-gray-700">Here's your personalized qualification evaluation</p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">QE Report component will be implemented here</p>
        <Button onClick={onNext} className="bg-gradient-to-r from-purple-600 to-pink-600">
          Continue →
        </Button>
      </div>
    </div>
  );
};

export default QEReportStep;
