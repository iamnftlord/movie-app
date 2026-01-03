import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Google Signup Logic
  const signupWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const userInfo = await res.json();
        console.log("New User Registered via Google:", userInfo);
        // REDIRECT: window.location.href = '/onboarding';
      } catch (err) {
        setError("Google signup failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => setError("Google Signup Interrupted"),
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    // 1. Logic: Basic Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    // 2. Logic: Mock API Call
    setTimeout(() => {
      console.log("Account Created for:", formData.email);
      // Here you would call your backend API: axios.post('/api/signup', formData)
      setIsLoading(false);
      // REDIRECT: window.location.href = '/login';
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full font-sans text-white bg-[#0f0f0f]">
      
      {/* LEFT SIDE: Signup Form */}
      <div className="flex flex-col w-full lg:w-1/2 p-8 md:p-16 lg:p-24 justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <span>
            <img src={logo} alt="logo" />
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-white">MovieHive</h1>
        </div>

        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-400 mb-8">Join the hive and start your movie journey.</p>

          {/* Google Signup */}
          <button 
            onClick={() => signupWithGoogle()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-xl hover:bg-gray-800 transition-all active:scale-[0.98] disabled:opacity-50 mb-6"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            <span className="font-medium">Sign up with Google</span>
          </button>

          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          {error && <p className="text-red-500 text-sm mb-4 text-center bg-red-500/10 py-2 rounded-lg">{error}</p>}

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="border-b border-gray-700 pb-2 focus-within:border-[#34d399] transition-colors">
              <input 
                name="name"
                type="text" 
                required
                onChange={handleInputChange}
                className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-600"
                placeholder="Full Name"
              />
            </div>

            <div className="border-b border-gray-700 pb-2 focus-within:border-[#34d399] transition-colors">
              <input 
                name="email"
                type="email" 
                required
                onChange={handleInputChange}
                className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-600"
                placeholder="Email Address"
              />
            </div>

            <div className="border-b border-gray-700 pb-2 focus-within:border-[#34d399] transition-colors">
              <input 
                name="password"
                type="password" 
                required
                onChange={handleInputChange}
                className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-600"
                placeholder="Create Password"
              />
            </div>

            <div className="border-b border-gray-700 pb-2 focus-within:border-[#34d399] transition-colors">
              <input 
                name="confirmPassword"
                type="password" 
                required
                onChange={handleInputChange}
                className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-600"
                placeholder="Confirm Password"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#34d399] text-black font-bold py-4 rounded-xl hover:bg-[#28ad7d] transition-all active:scale-[0.98] disabled:bg-gray-600"
            >
              {isLoading ? "Creating account..." : "Get Started"}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-400 text-sm">
            Already have an account? 
            <Link to="/login" className="text-white font-semibold hover:underline ml-1">
              Log in
            </Link>
          </p>
        </div>

        <div className="hidden lg:block text-gray-500 text-xs">
          © 2024 MovieHive Inc. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE: Featured Content */}
      <div className="hidden lg:flex flex-col w-1/2 relative overflow-hidden bg-zinc-900">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059" 
          alt="Cinema" 
          className="absolute inset-0 object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative mt-auto p-16">
          <div className="bg-[#34d399]/20 text-[#34d399] w-fit px-3 py-1 rounded-full text-xs font-bold mb-4">NEW RELEASE</div>
          <h3 className="text-5xl font-bold mb-4 italic italic-bold tracking-tighter">THE ART OF CINEMA</h3>
          <p className="text-gray-300 max-w-md text-lg">
            "Every great film should seem new every time you see it." — Join the most exclusive community of movie lovers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;