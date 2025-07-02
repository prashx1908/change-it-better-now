
import React from 'react';
import { Button } from '@/components/ui/button';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Video, Users, MessageCircle, MapPin } from 'lucide-react';

interface CounsellingModeStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const counsellingOptions = [
  {
    id: 'online',
    title: 'Online Counselling',
    subtitle: 'Connect from anywhere',
    description: 'Video calls, phone calls, and chat support',
    icon: '💻',
    features: [
      'Flexible scheduling',
      'No travel required',
      'Screen sharing for documents',
      'Recorded sessions for reference',
      'Available 24/7 support'
    ],
    benefits: [
      'Convenient and time-saving',
      'Access to expert counselors',
      'Digital document sharing',
      'Regular check-ins'
    ]
  },
  {
    id: 'offline',
    title: 'In-Person Counselling',
    subtitle: 'Face-to-face guidance',
    description: 'Meet our counselors at our office locations',
    icon: '🏢',
    features: [
      'Personal interaction',
      'Document review in person',
      'Campus-like environment',
      'Group sessions available',
      'Local area expertise'
    ],
    benefits: [
      'Personal connection',
      'Hands-on document help',
      'Meet other students',
      'Local insights'
    ]
  }
];

const CounsellingModeStep: React.FC<CounsellingModeStepProps> = ({ data, updateData, onNext }) => {
  const selectCounsellingMode = (mode: string) => {
    updateData('counsellingMode', mode);
  };

  const CounsellingCard = ({ option }: { option: typeof counsellingOptions[0] }) => {
    const isSelected = data.counsellingMode === option.id;
    
    return (
      <div
        className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isSelected
            ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg transform scale-105'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
        onClick={() => selectCounsellingMode(option.id)}
      >
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{option.icon}</div>
          <h3 className="font-bold text-2xl mb-2">{option.title}</h3>
          <p className="text-blue-600 font-medium text-lg mb-3">{option.subtitle}</p>
          <p className="text-gray-600">{option.description}</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
            <div className="space-y-1">
              {option.features.map((feature, index) => (
                <div key={index} className="text-sm text-gray-700 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          {isSelected && (
            <div className="p-4 bg-white rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <MessageCircle size={16} />
                Why This Works Great
              </h4>
              <div className="space-y-1">
                {option.benefits.map((benefit, index) => (
                  <div key={index} className="text-sm text-blue-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
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
      <div className="text-center p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-100">
        <div className="text-6xl mb-4">💬</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Connect</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Choose how you'd like to work with our expert counselors. Both options provide the same 
          high-quality guidance - it's all about what works best for your lifestyle and preferences.
        </p>
      </div>

      {/* Counselling Mode Selection */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {counsellingOptions.map((option) => (
          <CounsellingCard key={option.id} option={option} />
        ))}
      </div>

      {/* Selected Mode Summary */}
      {data.counsellingMode && (
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            {data.counsellingMode === 'online' ? (
              <Video size={24} className="text-green-600" />
            ) : (
              <Users size={24} className="text-green-600" />
            )}
            <div>
              <h3 className="text-xl font-semibold text-green-900">Your Counselling Preference</h3>
              <p className="text-green-700">
                {data.counsellingMode === 'online' ? 'Online Counselling' : 'In-Person Counselling'}
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-green-800 text-sm">
              {data.counsellingMode === 'online' 
                ? '🎯 Perfect! We\'ll set up convenient online sessions that fit your schedule.'
                : '🎯 Excellent! We\'ll arrange in-person meetings at our nearest office location.'
              }
            </p>
          </div>
        </div>
      )}

      {/* What to Expect */}
      <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-900 mb-4 text-center">What to Expect in Your Sessions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Initial Consultation (60 mins)
            </h4>
            <ul className="text-sm text-purple-800 space-y-1 ml-4">
              <li>• Profile evaluation and goal setting</li>
              <li>• University shortlisting strategy</li>
              <li>• Timeline and milestone planning</li>
              <li>• Q&A about your specific concerns</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Follow-up Sessions (30-45 mins)
            </h4>
            <ul className="text-sm text-purple-800 space-y-1 ml-4">
              <li>• Application progress reviews</li>
              <li>• Document feedback and improvements</li>
              <li>• Interview preparation sessions</li>
              <li>• Visa guidance and support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Office Locations (for offline option) */}
      {data.counsellingMode === 'offline' && (
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={24} className="text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-900">Our Office Locations</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'].map((city) => (
              <div key={city} className="p-3 bg-white rounded-lg text-center">
                <div className="text-lg mb-1">🏢</div>
                <h4 className="font-semibold text-sm">{city}</h4>
                <p className="text-xs text-gray-600">Multiple locations</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-blue-700 text-center mt-4">
            We'll connect you with the nearest office to your location
          </p>
        </div>
      )}

      {/* Continue Button */}
      {data.counsellingMode && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl border border-blue-100">
        <p className="text-lg text-gray-700 italic">
          "Great things are done by a series of small things brought together." - Let's work together!
        </p>
      </div>
    </div>
  );
};

export default CounsellingModeStep;
