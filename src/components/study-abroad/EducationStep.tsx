
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { GraduationCap, BookOpen } from 'lucide-react';

interface EducationStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
}

const EducationStep: React.FC<EducationStepProps> = ({ data, updateData }) => {
  const handleInputChange = (field: string, value: string) => {
    updateData('education', {
      ...data.education,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap size={24} className="text-blue-600" />
        <h3 className="text-xl font-semibold">Academic Background</h3>
      </div>

      <div className="space-y-2">
        <Label htmlFor="educationLevel">Current Education Level *</Label>
        <Select 
          value={data.education.level} 
          onValueChange={(value) => handleInputChange('level', value)}
        >
          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select your education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high-school">High School / 12th Grade</SelectItem>
            <SelectItem value="diploma">Diploma</SelectItem>
            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
            <SelectItem value="masters">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD / Doctorate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="institution">Institution Name *</Label>
        <Input
          id="institution"
          placeholder="Enter your institution name"
          value={data.education.institution}
          onChange={(e) => handleInputChange('institution', e.target.value)}
          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="gpa">GPA / Percentage *</Label>
          <Input
            id="gpa"
            placeholder="e.g., 3.5 GPA or 85%"
            value={data.education.gpa}
            onChange={(e) => handleInputChange('gpa', e.target.value)}
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500">Enter your current GPA or percentage</p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="graduationYear">Graduation Year *</Label>
          <Select 
            value={data.education.graduationYear} 
            onValueChange={(value) => handleInputChange('graduationYear', value)}
          >
            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i - 5).map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen size={20} className="text-purple-600" />
          <h4 className="font-semibold text-purple-900">Academic Requirements</h4>
        </div>
        <div className="space-y-2 text-sm text-purple-800">
          <p>• <strong>USA:</strong> Minimum 3.0 GPA for most universities</p>
          <p>• <strong>UK:</strong> 60-70% for good universities</p>
          <p>• <strong>Canada:</strong> Minimum 3.0 GPA (75%+)</p>
          <p>• <strong>Australia:</strong> 65-75% depending on university ranking</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Don't worry if your grades don't meet the minimum requirements. 
          Our experts can help you find universities that match your profile and suggest ways to strengthen your application.
        </p>
      </div>
    </div>
  );
};

export default EducationStep;
