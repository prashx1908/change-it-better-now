
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { GraduationCap, Calendar, Briefcase, Award } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📖</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Academic Journey</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's understand your educational background to craft your perfect study abroad story
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <div className="space-y-8">
            {/* Degree Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">My degree is</h3>
                  <p className="text-gray-600">Tell us about your current or completed degree</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pl-16">
                <div className="space-y-2">
                  <Select 
                    value={data.academicDetails.degree} 
                    onValueChange={(value) => handleInputChange('degree', value)}
                  >
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 hover:border-blue-400 transition-colors">
                      <SelectValue placeholder="Final Year Bachelor's" />
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
              </div>
            </div>

            {/* Specialization Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-lg text-gray-700 font-medium pt-2">I specialized in</div>
              </div>
              
              <div className="pl-16">
                <Select 
                  value={data.academicDetails.specialization} 
                  onValueChange={(value) => handleInputChange('specialization', value)}
                >
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 hover:border-blue-400 transition-colors max-w-md">
                    <SelectValue placeholder="Electronics & Communication" />
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

            {/* Grade Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-lg text-gray-700 font-medium pt-2">My grade type is</div>
              </div>
              
              <div className="pl-16 flex items-center gap-4">
                <Select 
                  value={data.academicDetails.grade} 
                  onValueChange={(value) => handleInputChange('grade', value)}
                >
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 hover:border-blue-400 transition-colors w-48">
                    <SelectValue placeholder="CGPA of" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cgpa">CGPA of</SelectItem>
                    <SelectItem value="percentage">Percentage of</SelectItem>
                    <SelectItem value="gpa">GPA of</SelectItem>
                  </SelectContent>
                </Select>
                
                <span className="text-lg text-gray-700">with</span>
                
                <div className="space-y-1">
                  <Input
                    placeholder="0"
                    className="h-12 w-24 text-center text-base border-2 border-gray-200 hover:border-blue-400 transition-colors"
                    value={data.academicDetails.backlogs || ''}
                    onChange={(e) => handleInputChange('backlogs', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Backlogs Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-lg text-gray-700 font-medium pt-2">I have</div>
              </div>
              
              <div className="pl-16 flex items-center gap-2">
                <Input
                  placeholder="12"
                  className="h-12 w-20 text-center text-base border-2 border-gray-200 hover:border-blue-400 transition-colors"
                  value={data.academicDetails.backlogs || ''}
                  onChange={(e) => handleInputChange('backlogs', parseInt(e.target.value) || 0)}
                />
                <span className="text-lg text-gray-700">backlogs</span>
              </div>
            </div>

            {/* Graduation Timeline */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-lg text-gray-700 font-medium pt-2">Graduated or graduating in</div>
              </div>
              
              <div className="pl-16">
                <Input
                  placeholder="23"
                  className="h-12 w-20 text-center text-base border-2 border-gray-200 hover:border-blue-400 transition-colors"
                  value={data.academicDetails.graduationTime || ''}
                  onChange={(e) => handleInputChange('graduationTime', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Year Gap Section */}
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl p-8 mb-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Year Gap</h3>
          </div>
          
          <div className="pl-16">
            <div className="flex items-center gap-4">
              <span className="text-lg">I had a career gap of</span>
              <Select 
                value={data.academicDetails.yearGap} 
                onValueChange={(value) => handleInputChange('yearGap', value)}
              >
                <SelectTrigger className="h-12 text-base bg-white/20 border-white/30 text-white w-64">
                  <SelectValue placeholder="Less than 12 months" />
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

        {/* Work Experience Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 mb-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>
          
          <div className="pl-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-lg">I worked as</span>
              <Select 
                value={data.academicDetails.workExperience} 
                onValueChange={(value) => handleInputChange('workExperience', value)}
              >
                <SelectTrigger className="h-12 text-base bg-white/20 border-white/30 text-white w-64">
                  <SelectValue placeholder="Software Engineer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-experience">No work experience</SelectItem>
                  <SelectItem value="software-engineer">Software Engineer</SelectItem>
                  <SelectItem value="data-analyst">Data Analyst</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="researcher">Researcher</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-lg">for</span>
            </div>
            
            <div className="pl-0">
              <Select 
                value={data.academicDetails.graduationTime} 
                onValueChange={(value) => handleInputChange('graduationTime', value)}
              >
                <SelectTrigger className="h-12 text-base bg-white/20 border-white/30 text-white w-64">
                  <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="internship">Internship only</SelectItem>
                  <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                  <SelectItem value="1-2-years">1-2 years</SelectItem>
                  <SelectItem value="2-3-years">2-3 years</SelectItem>
                  <SelectItem value="more-than-3">More than 3 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        {isFormValid() && (
          <div className="text-center">
            <Button
              onClick={onNext}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
