
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { BookOpen, Star, Clock, Briefcase } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Story Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4">
            <BookOpen className="text-blue-600" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Tell Us Your Academic Story</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every journey has a beginning. Let's understand where you are in your academic adventure so we can guide you to the perfect destination.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Chapter 1: Your Degree */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-200/50">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">Chapter 1: Your Degree Journey</h3>
                <p className="text-sm text-slate-500">What are you studying?</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-slate-700 font-medium mb-2 block">Your Current Degree</Label>
                <Select value={data.academicDetails.degree} onValueChange={(value) => handleInputChange('degree', value)}>
                  <SelectTrigger className="h-12 bg-slate-50/80 border-slate-200 hover:border-blue-300 transition-all rounded-xl">
                    <SelectValue placeholder="Tell us about your studies..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">12th Grade - Ready to explore</SelectItem>
                    <SelectItem value="bachelors-not-final">Bachelor's - Still learning</SelectItem>
                    <SelectItem value="bachelors-final">Final Year - Almost there!</SelectItem>
                    <SelectItem value="bachelors-completed">Graduated - Ready for more</SelectItem>
                    <SelectItem value="masters">Master's - Going deeper</SelectItem>
                    <SelectItem value="mbbs">MBBS - Healing the world</SelectItem>
                    <SelectItem value="other">Something unique</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-slate-700 font-medium mb-2 block">Your Field of Passion</Label>
                <Select value={data.academicDetails.specialization} onValueChange={(value) => handleInputChange('specialization', value)}>
                  <SelectTrigger className="h-12 bg-slate-50/80 border-slate-200 hover:border-blue-300 transition-all rounded-xl">
                    <SelectValue placeholder="What drives your curiosity?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">Computer Science - Digital innovator</SelectItem>
                    <SelectItem value="electronics-communication">Electronics & Communication</SelectItem>
                    <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                    <SelectItem value="civil">Civil Engineering</SelectItem>
                    <SelectItem value="electrical">Electrical Engineering</SelectItem>
                    <SelectItem value="business">Business - Future leader</SelectItem>
                    <SelectItem value="finance">Finance - Numbers wizard</SelectItem>
                    <SelectItem value="marketing">Marketing - Story teller</SelectItem>
                    <SelectItem value="other">Something different</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Chapter 2: Your Performance */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-200/50">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                <Star className="text-orange-500" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">Chapter 2: Your Achievements</h3>
                <p className="text-sm text-slate-500">How have you performed?</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-slate-700 font-medium mb-2 block">Your Academic Score</Label>
                <div className="flex gap-2">
                  <Select value={data.academicDetails.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                    <SelectTrigger className="h-12 bg-slate-50/80 border-slate-200 hover:border-orange-300 transition-all rounded-xl w-32">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cgpa">CGPA</SelectItem>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="gpa">GPA</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="e.g., 8.5 or 85%"
                    className="h-12 bg-slate-50/80 border-slate-200 hover:border-orange-300 transition-all rounded-xl flex-1"
                    value={data.academicDetails.graduationTime || ''}
                    onChange={(e) => handleInputChange('graduationTime', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-slate-700 font-medium mb-2 block">Any Backlogs?</Label>
                <Input
                  placeholder="0 (Don't worry, we'll help!)"
                  type="number"
                  className="h-12 bg-slate-50/80 border-slate-200 hover:border-orange-300 transition-all rounded-xl"
                  value={data.academicDetails.backlogs || ''}
                  onChange={(e) => handleInputChange('backlogs', parseInt(e.target.value) || 0)}
                />
                <p className="text-xs text-slate-500 mt-1">Everyone has their own pace 🌟</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 3: Timeline & Experience */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Timeline */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-200/50">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <Clock className="text-purple-500" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">Chapter 3: Your Timeline</h3>
                <p className="text-sm text-slate-500">When is your story unfolding?</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-slate-700 font-medium mb-2 block">Graduation Year</Label>
                <Input
                  placeholder="e.g., 2024"
                  className="h-12 bg-slate-50/80 border-slate-200 hover:border-purple-300 transition-all rounded-xl"
                  value={data.academicDetails.graduationTime || ''}
                  onChange={(e) => handleInputChange('graduationTime', e.target.value)}
                />
              </div>
              
              <div>
                <Label className="text-slate-700 font-medium mb-2 block">Any Gap Years?</Label>
                <Select value={data.academicDetails.yearGap} onValueChange={(value) => handleInputChange('yearGap', value)}>
                  <SelectTrigger className="h-12 bg-slate-50/80 border-slate-200 hover:border-purple-300 transition-all rounded-xl">
                    <SelectValue placeholder="Life happens, it's okay!" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-gap">No gap - Straight path</SelectItem>
                    <SelectItem value="less-than-12">Less than a year</SelectItem>
                    <SelectItem value="1-year">1 year - Explored life</SelectItem>
                    <SelectItem value="2-years">2 years - Found myself</SelectItem>
                    <SelectItem value="more-than-2">More than 2 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-slate-200/50">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center">
                <Briefcase className="text-indigo-500" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">Chapter 4: Your Experience</h3>
                <p className="text-sm text-slate-500">Have you worked before?</p>
              </div>
            </div>
            
            <div>
              <Label className="text-slate-700 font-medium mb-2 block">Work Experience</Label>
              <Select value={data.academicDetails.workExperience} onValueChange={(value) => handleInputChange('workExperience', value)}>
                <SelectTrigger className="h-12 bg-slate-50/80 border-slate-200 hover:border-indigo-300 transition-all rounded-xl">
                  <SelectValue placeholder="Tell us about your work journey..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-experience">Fresh graduate - Ready to start</SelectItem>
                  <SelectItem value="internship">Internships - Got a taste</SelectItem>
                  <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                  <SelectItem value="1-2-years">1-2 years - Building experience</SelectItem>
                  <SelectItem value="2-3-years">2-3 years - Getting skilled</SelectItem>
                  <SelectItem value="more-than-3">3+ years - Experienced professional</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-500 mt-1">Every experience counts, even small ones! 💼</p>
            </div>
          </div>
        </div>

        {/* Encouraging Message */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 mb-8 border border-blue-100/50">
          <div className="text-center">
            <p className="text-lg text-slate-700 mb-2">
              🌟 <strong>Your story is unique and valuable!</strong>
            </p>
            <p className="text-slate-600">
              No matter where you are in your journey, there's a perfect international program waiting for you. 
              We'll help you find universities that appreciate your background and potential.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        {isFormValid() && (
          <div className="text-center">
            <Button
              onClick={onNext}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
