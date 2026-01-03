import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const LoginPage = () => {
  // 1. State for form inputs
  const [formData, setFormData] = useState({ email: 'oliviabrooke3435@gmail.com', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 2. Handle Google Login Logic
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      try {
        // Fetch user profile from Google using the access token
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const userInfo = await res.json();
        
        console.log("Authenticated User:", userInfo);
        // REDIRECT LOGIC: window.location.href = '/dashboard';
      } catch (err) {
        setError("Failed to fetch user profile from Google.");
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => setError("Google Login Failed"),
  });

  // 3. Handle Email/Password Login Logic
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API Call
    setTimeout(() => {
      if (formData.email && formData.password.length > 5) {
        console.log("Logged in with:", formData);
        // REDIRECT LOGIC: window.location.href = '/dashboard';
      } else {
        setError("Invalid email or password.");
        setIsLoading(false);
      }
    }, 500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen w-full font-sans text-white bg-[#0f0f0f]">
      <div className="flex flex-col w-full lg:w-1/2 p-8 md:p-16 lg:p-24 justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-12">
          <span>
            <img src={logo} alt="logo" />
          </span>
          <h1 className="text-2xl font-bold tracking-tight">MovieHive</h1>
        </div>

        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h2 className="text-3xl font-semibold mb-2">
            {/* Logic: Change name based on input if available */}
            Welcome back, {formData.email.split('@')[0]}
          </h2>
          <p className="text-gray-400 mb-8">Welcome back! Please enter your details.</p>

          {/* Google Button Logic */}
          <button 
            onClick={() => googleLogin()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-xl hover:bg-gray-800 transition-all active:scale-[0.98] disabled:opacity-50 mb-6"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            <span className="font-medium">Log in with Google</span>
          </button>

          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          {/* Error Message Display */}
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleEmailLogin} className="space-y-6">
            <div className="border-b border-gray-700 pb-2 focus-within:border-white transition-colors">
              <input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                className="bg-transparent w-full outline-none text-gray-200"
                placeholder="Email"
                required
              />
            </div>

            <div className="border-b border-gray-700 pb-2 focus-within:border-white transition-colors">
              <input 
                name="password"
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
                className="bg-transparent w-full outline-none text-gray-200"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-emerald-400" />
                Remember me for 30 days
              </label>
              <button type="button" className="font-semibold hover:text-emerald-400">Forgot password</button>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-all active:scale-[0.98] disabled:bg-gray-500"
            >
              {isLoading ? "Authenticating..." : "Log in"}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-400 text-sm">
            Don't have an account? 
            <Link to="/signup" className="text-white font-semibold hover:underline ml-1">
              Sign up for free
            </Link>
          </p>
        </div>
        <div className="hidden lg:block"></div>
      </div>

      {/* Hero Section (Remains the same as previous) */}
      <div className="hidden lg:flex flex-col w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" 
          alt="Top Gun" 
          className="absolute inset-0 object-cover w-full h-full brightness-50"
        />
        <div className="relative mt-auto p-16 z-10">
          <h3 className="text-5xl font-bold mb-4">Top Gun: Maverick</h3>
          {/* ... metadata ... */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;