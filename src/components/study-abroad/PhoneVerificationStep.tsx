
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StudyAbroadData } from '@/pages/StudyAbroad';
import { Phone, MessageSquare, Shield, CheckCircle } from 'lucide-react';

interface PhoneVerificationStepProps {
  data: StudyAbroadData;
  updateData: (section: keyof StudyAbroadData, data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PhoneVerificationStep: React.FC<PhoneVerificationStepProps> = ({ data, updateData, onNext }) => {
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handlePhoneSubmit = () => {
    if (data.phoneNumber) {
      setShowOtp(true);
      // Simulate OTP sending
      setTimeout(() => {
        console.log('OTP sent to:', data.phoneNumber);
      }, 1000);
    }
  };

  const handleOtpVerification = () => {
    setIsVerifying(true);
    // Simulate OTP verification
    setTimeout(() => {
      updateData('isPhoneVerified', true);
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Story Introduction */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
        <div className="text-6xl mb-4">📱</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Your phone number is your lifeline during the application process. We'll use it to send 
          important updates, reminders, and connect you with our counselors when you need guidance.
        </p>
      </div>

      {!data.isPhoneVerified ? (
        <div className="max-w-md mx-auto space-y-6">
          {/* Phone Number Input */}
          {!showOtp && (
            <div className="space-y-4">
              <div className="text-center">
                <Phone size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enter Your Phone Number</h3>
                <p className="text-gray-600">We'll send you a verification code</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={data.phoneNumber}
                    onChange={(e) => updateData('phoneNumber', e.target.value)}
                    className="flex-1"
                  />
                </div>
                
                <Button
                  onClick={handlePhoneSubmit}
                  disabled={!data.phoneNumber || data.phoneNumber.length < 10}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600"
                >
                  Send Verification Code
                </Button>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={16} className="text-blue-600" />
                  <span className="font-medium text-blue-900">Privacy Protected</span>
                </div>
                <p className="text-sm text-blue-800">
                  Your phone number is encrypted and secure. We'll only use it for important updates about your application.
                </p>
              </div>
            </div>
          )}

          {/* OTP Input */}
          {showOtp && (
            <div className="space-y-4">
              <div className="text-center">
                <MessageSquare size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enter Verification Code</h3>
                <p className="text-gray-600">
                  We sent a 6-digit code to {data.phoneNumber}
                </p>
              </div>
              
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="text-center text-2xl tracking-widest"
                  maxLength={6}
                />
                
                <Button
                  onClick={handleOtpVerification}
                  disabled={otp.length < 6 || isVerifying}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600"
                >
                  {isVerifying ? 'Verifying...' : 'Verify Code'}
                </Button>
                
                <div className="text-center">
                  <button 
                    onClick={() => setShowOtp(false)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Change phone number
                  </button>
                  <span className="mx-2 text-gray-400">|</span>
                  <button 
                    onClick={handlePhoneSubmit}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Resend code
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Verification Success */
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="p-8 bg-green-50 rounded-2xl border border-green-200">
            <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-2">Phone Verified!</h3>
            <p className="text-green-700 mb-4">
              Your phone number {data.phoneNumber} has been successfully verified.
            </p>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                ✅ You'll now receive important updates and reminders<br/>
                ✅ Our counselors can reach you directly<br/>
                ✅ Emergency communication during your journey
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Why We Need Your Phone */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
        <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Why We Need Your Phone Number</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">📲</div>
            <h4 className="font-semibold mb-2">Important Updates</h4>
            <p className="text-sm text-gray-600">Application deadlines, admission results, and visa updates</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">👥</div>
            <h4 className="font-semibold mb-2">Counselor Support</h4>
            <p className="text-sm text-gray-600">Direct access to expert guidance when you need it</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <div className="text-2xl mb-2">🆘</div>
            <h4 className="font-semibold mb-2">Emergency Contact</h4>
            <p className="text-sm text-gray-600">Support during your journey abroad</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {data.isPhoneVerified && (
        <div className="text-center pt-8">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-4 text-lg rounded-xl"
          >
            Continue Your Journey →
          </Button>
        </div>
      )}

      {/* Motivation Message */}
      <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
        <p className="text-lg text-gray-700 italic">
          "Communication is the bridge between confusion and clarity." - Stay connected with us!
        </p>
      </div>
    </div>
  );
};

export default PhoneVerificationStep;
