import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faSpinner,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Login attempt with:", { email, password, rememberMe });
      setIsLoading(false);
      alert("Login functionality would be implemented here");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Left Section - Image & Welcome */}
        <div className="hidden md:flex flex-col justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <img
                src="https://res.cloudinary.com/damoxc2du/image/upload/v1754043000/Screenshot_2025-08-01_153757-removebg-preview_vhtwj1.png"
                alt="Doctor"
                className="w-64 h-64 object-contain mx-auto"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-blue-600 text-2xl font-bold mb-2">
              <FontAwesomeIcon icon={faTooth} className="text-3xl" />
              <span>DentCare</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Welcome Back
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Your trusted medical partner
            </p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
            {/* Mobile Logo */}
            <div className="md:hidden text-center mb-8">
              <div className="flex items-center justify-center gap-2 text-blue-600 text-2xl font-bold mb-3">
                <FontAwesomeIcon icon={faTooth} className="text-3xl" />
                <span>DentCare</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-700 transition"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
