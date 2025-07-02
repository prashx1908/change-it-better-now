
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Plane, FileText, Clock, CheckCircle } from 'lucide-react';

interface PassportStatusStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PassportStatusStep: React.FC<PassportStatusStepProps> = ({ data, updateData, onNext }) => {
  const selectPassportStatus = (status: boolean) => {
    updateData('hasPassport', status);
  };

  const PassportCard = ({ hasPassport, title, subtitle, description, icon, tips }: {
    hasPassport: boolean;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    tips: string[];
  }) => {
    const isSelected = data.hasPassport === hasPassport;
    
    return (
      <div
        className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => selectPassportStatus(hasPassport)}
      >
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="font-bold text-2xl mb-2">{title}</h3>
          <p className="text-blue-600 font-medium text-lg mb-3">{subtitle}</p>
          <p className="text-gray-600">{description}</p>
        </div>
        
        {isSelected && (
          <div className="mt-6 p-4 bg-white rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <FileText size={16} />
              {hasPassport ? 'Great! You\'re ready to fly' : 'No worries, here\'s what to do'}
            </h4>
            <div className="space-y-2">
              {tips.map((tip, index) => (
                <div key={index} className="text-sm text-blue-700 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  {tip}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ✓
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
        <div className="text-6xl mb-4">✈️</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Fly?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Your passport is your gateway to the world. It's the document that will carry you 
          across borders to your dream destination. Let's make sure you're travel-ready!
        </p>
      </div>

      {/* Passport Status Selection */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PassportCard
          hasPassport={true}
          title="Yes, I have a passport"
          subtitle="Ready for takeoff!"
          description="Great! You're all set for international travel."
          icon="🛂"
          tips={[
            "Make sure your passport is valid for at least 6 months",
            "Check if you need any specific visa requirements",
            "Keep digital copies stored safely in cloud storage",
            "Consider getting additional passport photos taken"
          ]}
        />
        
        <PassportCard
          hasPassport={false}
          title="No, I need to get one"
          subtitle="Let's get you travel-ready!"
          description="No problem! Getting a passport is easier than you think."
          icon="📋"
          tips={[
            "Apply for passport immediately - it takes 2-6 weeks",
            "Gather required documents: birth certificate, ID, photos",
            "Consider expedited processing if you're in a hurry",
            "We'll help you with timeline planning for your application"
          ]}
        />
      </div>

      {/* Selected Status Summary */}
      {data.hasPassport !== undefined && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            {data.hasPassport ? (
              <CheckCircle size={24} className="text-green-600" />
            ) : (
              <Clock size={24} className="text-orange-600" />
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {data.hasPassport ? 'Passport Ready!' : 'Passport Needed'}
              </h3>
              <p className="text-gray-700">
                {data.hasPassport 
                  ? 'You\'re ready for international travel'
                  : 'We\'ll factor passport processing time into your timeline'
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Passport Timeline Info */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 flex items-center justify-center gap-3">
          <Plane className="text-blue-500" size={28} />
          Passport Processing Timeline
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">📋</div>
            <h4 className="font-semibold mb-2">Application</h4>
            <p className="text-sm text-gray-600">Submit documents and forms</p>
            <p className="text-blue-600 font-medium">Day 1</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">⏳</div>
            <h4 className="font-semibold mb-2">Processing</h4>
            <p className="text-sm text-gray-600">Government review and verification</p>
            <p className="text-blue-600 font-medium">2-6 weeks</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">✅</div>
            <h4 className="font-semibold mb-2">Delivery</h4>
            <p className="text-sm text-gray-600">Passport delivered to you</p>
            <p className="text-blue-600 font-medium">Ready to travel!</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {data.hasPassport !== undefined && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
        <p className="text-lg text-gray-700 italic">
          "Adventure awaits, but first, get your passport!" - Every successful international student
        </p>
      </div>
    </div>
  );
};

export default PassportStatusStep;
