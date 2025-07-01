
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StudyAbroadData } from '@/pages/StudyAbroad';

interface PersonalInfoStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ data, updateData }) => {
  const handleInputChange = (field: string, value: string) => {
    updateData('personalInfo', {
      ...data.personalInfo,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            value={data.personalInfo.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            value={data.personalInfo.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={data.personalInfo.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500">We'll use this to send you important updates</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            placeholder="+1 (555) 123-4567"
            value={data.personalInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.personalInfo.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Privacy Note:</strong> Your personal information is encrypted and secure. 
          We only share it with partner universities and visa processing agencies as needed.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
