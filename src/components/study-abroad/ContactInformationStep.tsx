
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { User, Mail, Shield, CheckCircle } from 'lucide-react';

interface ContactInformationStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ContactInformationStep: React.FC<ContactInformationStepProps> = ({ data, updateData, onNext }) => {
  const handleInputChange = (field: string, value: string) => {
    updateData('contactInfo', {
      ...data.contactInfo,
      [field]: value,
    });
  };

  const isFormValid = data.contactInfo.name && data.contactInfo.email;

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
        <div className="text-6xl mb-4">👤</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Details</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We're almost there! Just a few final details to complete your profile and get started 
          on this incredible journey together.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Contact Information Form */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <User size={24} className="text-indigo-600" />
            <h3 className="text-xl font-semibold">Contact Information</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Enter your full name as per passport"
                value={data.contactInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-sm text-gray-500">
                This should match your passport name exactly
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={data.contactInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-sm text-gray-500">
                We'll use this for all important communications
              </p>
            </div>
          </div>
        </div>

        {/* Form Validation */}
        {data.contactInfo.name && data.contactInfo.email && (
          <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle size={24} className="text-green-600" />
              <h3 className="text-xl font-semibold text-green-900">Profile Complete!</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <div className="space-y-2">
                <p className="text-sm text-green-800">
                  <strong>Name:</strong> {data.contactInfo.name}
                </p>
                <p className="text-sm text-green-800">
                  <strong>Email:</strong> {data.contactInfo.email}
                </p>
                <p className="text-sm text-green-800">
                  <strong>Phone:</strong> {data.phoneNumber} ✓ Verified
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Journey Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">🎉 Your Journey So Far</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">Countries Selected</span>
              </div>
              <div className="flex flex-wrap gap-1 ml-4">
                {data.selectedCountries.map((country, index) => (
                  <span key={index} className="px-2 py-1 bg-white rounded-full text-xs border">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium">Program Interest</span>
              </div>
              <p className="text-sm ml-4 bg-white px-2 py-1 rounded border">
                {data.selectedProgram || 'To be determined'}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Budget Range</span>
              </div>
              <p className="text-sm ml-4 bg-white px-2 py-1 rounded border">
                {data.budget.range ? data.budget.range.replace('-', ' ').replace('lakhs', ' lakhs') : 'Flexible'}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium">Preferred Intake</span>
              </div>
              <p className="text-sm ml-4 bg-white px-2 py-1 rounded border">
                {data.preferredIntake ? data.preferredIntake.charAt(0).toUpperCase() + data.preferredIntake.slice(1) : 'Flexible'}
              </p>
            </div>
          </div>
        </div>

        {/* Privacy and Security */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={24} className="text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Privacy & Security</h3>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <p>Your personal information is encrypted and secure</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <p>We only share your data with partner universities upon your consent</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <p>You can update or delete your information anytime</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <p>We comply with international data protection standards</p>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">🚀 What Happens Next?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <h4 className="font-medium text-yellow-900">Profile Review</h4>
                <p className="text-sm text-yellow-800">Our experts will review your profile within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <h4 className="font-medium text-yellow-900">Counselor Assignment</h4>
                <p className="text-sm text-yellow-800">You'll be matched with a dedicated counselor</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <h4 className="font-medium text-yellow-900">Strategic Planning</h4>
                <p className="text-sm text-yellow-800">Receive your personalized study abroad roadmap</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {isFormValid && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 text-lg rounded-xl"
          >
            Complete Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
        <p className="text-lg text-gray-700 italic">
          "The journey of a thousand miles begins with one step." - You're almost there!
        </p>
      </div>
    </div>
  );
};

export default ContactInformationStep;
