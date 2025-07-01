
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Leap Scholar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner in achieving your dream of studying abroad. 
            Get personalized guidance from application to visa approval.
          </p>
          <Link to="/study-abroad">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Globe size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Universities</h3>
            <p className="text-gray-600">Access to 1000+ top universities across USA, UK, Canada, Australia and more</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Users size={48} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Personalized counseling from admission experts with 15+ years experience</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Award size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scholarship Support</h3>
            <p className="text-gray-600">Help you secure scholarships worth up to $50,000 annually</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Study Abroad Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of students who achieved their dreams with Leap Scholar</p>
          <Link to="/study-abroad">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Get Started Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
