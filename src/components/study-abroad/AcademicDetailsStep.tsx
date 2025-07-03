
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { GraduationCap, Calendar, Briefcase, Award, BookOpen, TrendingUp } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📖</div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Your Academic Story</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every academic journey is unique. Share the details of your educational path so we can craft the perfect strategy for your international studies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Degree Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Degree Details</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Degree/Course *</Label>
                  <Select value={data.academicDetails.degree} onValueChange={(value) => handleInputChange('degree', value)}>
                    <SelectTrigger className="h-11 bg-slate-50/50 border-slate-200 hover:border-blue-300 transition-colors">
                      <SelectValue placeholder="e.g., Bachelor of Engineering" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">12th Grade</SelectItem>
                      <SelectItem value="bachelors-not-final">Bachelor's (Not Final Year)</SelectItem>
                      <SelectItem value="bachelors-final">Final Year Bachelor's</SelectItem>
                      <SelectItem value="bachelors-completed">Completed Bachelor's</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="mbbs">MBBS</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Specialization *</Label>
                  <Select value={data.academicDetails.specialization} onValueChange={(value) => handleInputChange('specialization', value)}>
                    <SelectTrigger className="h-11 bg-slate-50/50 border-slate-200 hover:border-blue-300 transition-colors">
                      <SelectValue placeholder="e.g., Computer Science" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="electronics-communication">Electronics & Communication</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="electrical">Electrical Engineering</SelectItem>
                      <SelectItem value="business">Business Administration</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Academic Performance Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Academic Performance</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Grade/CGPA *</Label>
                  <div className="flex gap-2">
                    <Select value={data.academicDetails.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                      <SelectTrigger className="h-11 bg-slate-50/50 border-slate-200 hover:border-blue-300 transition-colors">
                        <SelectValue placeholder="CGPA" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cgpa">CGPA</SelectItem>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="gpa">GPA</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="e.g., 8.5 CGPA or 85%"
                      className="h-11 bg-slate-50/50 border-slate-200 hover:border-blue-300 transition-colors flex-1"
                      value={data.academicDetails.graduationTime || ''}
                      onChange={(e) => handleInputChange('graduationTime', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Number of Backlogs</Label>
                  <Input
                    placeholder="No backlogs"
                    type="number"
                    className="h-11 bg-slate-50/50 border-slate-200 hover:border-blue-300 transition-colors"
                    value={data.academicDetails.backlogs || ''}
                    onChange={(e) => handleInputChange('backlogs', parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>
            </div>

            {/* Timeline & Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Timeline Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Calendar className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Timeline</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Graduation Timeline</Label>
                    <p className="text-sm text-slate-500 mb-2">When will/did you graduate?</p>
                    <Input
                      placeholder="2024"
                      className="h-11 bg-slate-50/50 border-slate-200 hover:border-purple-300 transition-colors"
                      value={data.academicDetails.graduationTime || ''}
                      onChange={(e) => handleInputChange('graduationTime', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Year Gap (if any)</Label>
                    <p className="text-sm text-slate-500 mb-2">Any gap years?</p>
                    <Select value={data.academicDetails.yearGap} onValueChange={(value) => handleInputChange('yearGap', value)}>
                      <SelectTrigger className="h-11 bg-slate-50/50 border-slate-200 hover:border-purple-300 transition-colors">
                        <SelectValue placeholder="No gap" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no-gap">No gap</SelectItem>
                        <SelectItem value="less-than-12">Less than 12 months</SelectItem>
                        <SelectItem value="1-year">1 year</SelectItem>
                        <SelectItem value="2-years">2 years</SelectItem>
                        <SelectItem value="more-than-2">More than 2 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Work Experience Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="text-orange-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Work Experience</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Work Experience</Label>
                    <p className="text-sm text-slate-500 mb-2">Your work experience</p>
                    <Select value={data.academicDetails.workExperience} onValueChange={(value) => handleInputChange('workExperience', value)}>
                      <SelectTrigger className="h-11 bg-slate-50/50 border-slate-200 hover:border-orange-300 transition-colors">
                        <SelectValue placeholder="No work experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no-experience">No work experience</SelectItem>
                        <SelectItem value="internship">Internship only</SelectItem>
                        <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2-years">1-2 years</SelectItem>
                        <SelectItem value="2-3-years">2-3 years</SelectItem>
                        <SelectItem value="more-than-3">More than 3 years</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-400">Include full-time, part-time, and internship experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tips */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center">
                  💡
                </div>
                <h3 className="text-lg font-semibold text-slate-800">Academic Tips</h3>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-blue-600 font-medium">•</span>
                  <div>
                    <span className="font-medium text-slate-700">Grades:</span>
                    <span className="text-slate-600"> We'll help you convert your grades to international standards</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-green-600 font-medium">•</span>
                  <div>
                    <span className="font-medium text-slate-700">Backlogs:</span>
                    <span className="text-slate-600"> Don't worry about backlogs - we'll find universities that match your profile</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-purple-600 font-medium">•</span>
                  <div>
                    <span className="font-medium text-slate-700">Gaps:</span>
                    <span className="text-slate-600"> Gap years can be explained positively with the right narrative</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-orange-600 font-medium">•</span>
                  <div>
                    <span className="font-medium text-slate-700">Experience:</span>
                    <span className="text-slate-600"> Any work experience adds value to your application</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        {isFormValid() && (
          <div className="text-center">
            <Button
              onClick={onNext}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Continue My Story →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicDetailsStep;
