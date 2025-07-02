
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { useNavigate } from 'react-router-dom';

interface MilestoneUnlockingStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const MilestoneUnlockingStep: React.FC<MilestoneUnlockingStepProps> = ({ data, updateData }) => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/quick-evaluation');
  };

  return (
    <div className="space-y-8">
      <div className="text-center p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey Begins!</h2>
        <p className="text-lg text-gray-700">Congratulations! You've unlocked your next milestone</p>
      </div>
      
      <div className="text-center space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎉 Milestone Unlocked!</h3>
          <p className="text-gray-700 text-lg mb-6">
            You've completed your profile and are ready for the next step in your study abroad journey.
          </p>
          <Button 
            onClick={handleComplete}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg rounded-xl"
          >
            View Your Progress →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MilestoneUnlockingStep;
