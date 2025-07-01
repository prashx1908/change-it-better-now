
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { User, MapPin, GraduationCap, DollarSign, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReviewStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ data }) => {
  const { toast } = useToast();

  const handleSubmit = () => {
    // Simulate form submission
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your profile and get back to you within 24 hours.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Your Application</h3>
        <p className="text-gray-600">Please review all information before submitting</p>
      </div>

      <div className="grid gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User size={20} className="text-blue-600" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Name:</strong> {data.personalInfo.firstName} {data.personalInfo.lastName}</p>
            <p><strong>Email:</strong> {data.personalInfo.email}</p>
            <p><strong>Phone:</strong> {data.personalInfo.phone}</p>
            <p><strong>Date of Birth:</strong> {data.personalInfo.dateOfBirth}</p>
          </CardContent>
        </Card>

        {/* Country Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin size={20} className="text-green-600" />
              Country Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {data.countryPreferences.map((country) => (
                <span key={country} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {country}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education Background */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap size={20} className="text-purple-600" />
              Education Background
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Education Level:</strong> {data.education.level}</p>
            <p><strong>Institution:</strong> {data.education.institution}</p>
            <p><strong>GPA:</strong> {data.education.gpa}</p>
            <p><strong>Graduation Year:</strong> {data.education.graduationYear}</p>
          </CardContent>
        </Card>

        {/* Financial Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign size={20} className="text-green-600" />
              Financial Planning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Budget:</strong> {data.financial.budget}</p>
            <p><strong>Funding Sources:</strong></p>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.financial.fundingSource.map((source) => (
                <span key={source} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {source}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-lg mb-3">What happens next?</h4>
        <div className="space-y-2 text-sm">
          <p>✅ Our experts will review your profile within 24 hours</p>
          <p>✅ You'll receive a personalized study abroad plan</p>
          <p>✅ We'll match you with suitable universities and programs</p>
          <p>✅ Get guidance on applications, visas, and scholarships</p>
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={handleSubmit}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
        >
          Submit Application
        </Button>
        <p className="text-sm text-gray-500 mt-2">
          By submitting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default ReviewStep;
