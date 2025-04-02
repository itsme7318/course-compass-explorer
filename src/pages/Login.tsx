
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate with a backend
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-[#001B3D] flex flex-col items-center justify-center text-white p-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex-1">
            <div className="mb-6">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                <path d="M25 45L5 32.5V17.5L25 5L45 17.5V32.5L25 45Z" fill="#00EA64" />
              </svg>
              <h1 className="text-3xl font-bold mb-2">Welcome! Let's set you up.</h1>
            </div>
            
            <div className="my-12">
              <h2 className="text-4xl font-bold mb-12">I want to build telecom and IT skills...</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all">
                  <div className="h-24 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300"></div>
                  <div className="p-4 text-center text-black font-medium">To change career</div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all">
                  <div className="h-24 bg-gradient-to-r from-purple-800 to-purple-400"></div>
                  <div className="p-4 text-center text-black font-medium">For my current role</div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all">
                  <div className="h-24 bg-gradient-to-tr from-pink-500 to-blue-300"></div>
                  <div className="p-4 text-center text-black font-medium">For school</div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all">
                  <div className="h-24 bg-gradient-to-r from-yellow-500 to-yellow-300">
                    <div className="flex justify-center items-center h-full">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#001B3D" stroke="#001B3D" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 text-center text-black font-medium">I'm curious about data</div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all">
                  <div className="h-24 bg-[#001B3D] flex justify-center items-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="#33C3F0" />
                      <path d="M20 20L22 22M18 12L22 8" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="p-4 text-center text-black font-medium">To use IT in my work</div>
                </div>
              </div>
              
              <p className="mt-8 text-center text-sm">
                Looking for something specific? Check all 
                <span className="text-blue-400 cursor-pointer"> skill tracks</span>, 
                <span className="text-blue-400 cursor-pointer"> career tracks</span> and 
                <span className="text-blue-400 cursor-pointer"> courses</span>.
              </p>
            </div>
          </div>
          
          {/* Right side - Login form */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96 text-black">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Free Account</h2>
            
            <div className="flex justify-between gap-2 mb-6">
              <button className="flex-1 border border-gray-300 rounded-md p-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
              <button className="flex-1 border border-gray-300 rounded-md p-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#0077B5" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </button>
              <button className="flex-1 border border-gray-300 rounded-md p-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </button>
              <button className="flex-1 border border-gray-300 rounded-md p-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" fill="#000" />
                </svg>
              </button>
            </div>
            
            <div className="text-center text-sm mb-6">or</div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#00EA64] hover:bg-[#00C853] text-black font-medium"
              >
                Start Learning for Free
              </Button>
              
              <p className="mt-4 text-xs text-gray-500 text-center">
                By continuing, you accept our 
                <span className="text-blue-600 cursor-pointer"> Terms of Use</span>, our 
                <span className="text-blue-600 cursor-pointer"> Privacy Policy</span> and that your data is stored in the USA.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
