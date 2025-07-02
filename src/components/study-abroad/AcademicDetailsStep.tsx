
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { BookOpen, TrendingUp, Award, Briefcase } from 'lucide-react';

interface AcademicDetailsStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const AcademicDetailsStep: React.FC<AcademicDetailsStepProps> = ({ data, updateData, onNext }) => {
  const handleInputChange = (field: string, value: string | number) => {
    updateData('academicDetails', {
      ...data.academicDetails,
      [field]: value,
    });
  };

  const isFormValid = () => {
    const details = data.academicDetails;
    return details.degree && details.specialization && details.grade;
  };

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
        <div className="text-6xl mb-4">📖</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Academic Story</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Every academic journey is unique. Share the details of your educational path so we can 
          craft the perfect strategy for your international studies.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Degree Information */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={24} className="text-blue-600" />
            <h3 className="text-xl font-semibold">Degree Details</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree/Course *</Label>
              <Input
                id="degree"
                placeholder="e.g., Bachelor of Engineering"
                value={data.academicDetails.degree}
                onChange={(e) => handleInputChange('degree', e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization *</Label>
              <Input
                id="specialization"
                placeholder="e.g., Computer Science"
                value={data.academicDetails.specialization}
                onChange={(e) => handleInputChange('specialization', e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Academic Performance */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={24} className="text-green-600" />
            <h3 className="text-xl font-semibold">Academic Performance</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="grade">Grade/CGPA *</Label>
              <Input
                id="grade"
                placeholder="e.g., 8.5 CGPA or 85%"
                value={data.academicDetails.grade}
                onChange={(e) => handleInputChange('grade', e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="backlogs">Number of Backlogs</Label>
              <Select 
                value={data.academicDetails.backlogs.toString()} 
                onValueChange={(value) => handleInputChange('backlogs', parseInt(value))}
              >
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select backlogs" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num === 0 ? 'No backlogs' : `${num} backlog${num > 1 ? 's' : ''}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Award size={24} className="text-purple-600" />
            <h3 className="text-xl font-semibold">Timeline</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="graduationTime">Graduation Timeline</Label>
              <Select 
                value={data.academicDetails.graduationTime} 
                onValueChange={(value) => handleInputChange('graduationTime', value)}
              >
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="When will/did you graduate?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="already-graduated">Already graduated</SelectItem>
                  <SelectItem value="graduating-2024">Graduating in 2024</SelectItem>
                  <SelectItem value="graduating-2025">Graduating in 2025</SelectItem>
                  <SelectItem value="graduating-2026">Graduating in 2026</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="yearGap">Year Gap (if any)</Label>
              <Select 
                value={data.academicDetails.yearGap} 
                onValueChange={(value) => handleInputChange('yearGap', value)}
              >
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Any gap years?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-gap">No gap</SelectItem>
                  <SelectItem value="1-year">1 year gap</SelectItem>
                  <SelectItem value="2-years">2 years gap</SelectItem>
                  <SelectItem value="3-years">3 years gap</SelectItem>
                  <SelectItem value="more-than-3">More than 3 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={24} className="text-orange-600" />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="workExperience">Work Experience</Label>
            <Select 
              value={data.academicDetails.workExperience} 
              onValueChange={(value) => handleInputChange('workExperience', value)}
            >
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Your work experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-experience">No work experience</SelectItem>
                <SelectItem value="internships">Internships only</SelectItem>
                <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                <SelectItem value="1-2-years">1-2 years</SelectItem>
                <SelectItem value="2-3-years">2-3 years</SelectItem>
                <SelectItem value="3-5-years">3-5 years</SelectItem>
                <SelectItem value="more-than-5">More than 5 years</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">Include full-time, part-time, and internship experience</p>
          </div>
        </div>

        {/* Academic Tips */}
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
          <h4 className="font-semibold text-lg mb-3 text-blue-900">💡 Academic Tips</h4>
          <div className="space-y-2 text-sm text-blue-800">
            <p>• <strong>Grades:</strong> We'll help you convert your grades to international standards</p>
            <p>• <strong>Backlogs:</strong> Don't worry about backlogs - we'll find universities that match your profile</p>
            <p>• <strong>Gaps:</strong> Gap years can be explained positively with the right narrative</p>
            <p>• <strong>Experience:</strong> Any work experience adds value to your application</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {isFormValid() && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Story →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <p className="text-lg text-gray-700 italic">
          "Your academic journey shapes who you are, but your dreams determine where you're going." - Keep building!
        </p>
      </div>
    </div>
  );
};

export default AcademicDetailsStep;
