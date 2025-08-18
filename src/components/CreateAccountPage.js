import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Typing from "./Typing";

const CreateAccountPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const validatePassword = (pwd) => {
    const minLength = pwd.length >= 8;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    const conditionsMet = [
      minLength,
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecial,
    ].filter(Boolean).length;

    if (conditionsMet <= 2) return { strength: "Weak", color: "text-red-500" };
    if (conditionsMet <= 4)
      return { strength: "Medium", color: "text-yellow-500" };
    return { strength: "Strong", color: "text-green-500" };
  };

  useEffect(() => {
    setPasswordStrength(validatePassword(password));
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter an email address");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (validatePassword(password).strength !== "Strong") {
      toast.error("Password does not meet all requirements");
      return;
    }

    try {
      console.log("Creating account for:", email);
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.error("Error creating account:", data.error);
        if (response.status === 422) {
          toast.error("User already registered. Please log in.");
          navigate("/login", { state: { email } });
          return;
        }
        toast.error(data.error || "Error creating account");
        return;
      }

      console.log("Account created:", data);
      toast.success("Account created successfully! Please log in.");
      navigate("/login", { state: { email } });
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <motion.div
          className="w-full max-w-md text-center"
          variants={sectionVariants}
        >
          <img
            src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755532651/logo_dzlt0y.png"
            alt="EasyEats Logo"
            className="h-12 object-contain mb-8 mx-auto"
          />
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
            <span className="text-white bg-black px-3 py-1 rounded">
              Create
            </span>
            <span className="text-green-300">
              <Typing text=" your account" />
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="w-full mb-8">
            <div className="relative mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                Edit
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="w-full sm:w-1/2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="w-full sm:w-1/2 text-left">
                <p className="text-gray-600 text-sm mb-2">
                  Password Requirements:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className={password.length >= 8 ? "text-green-500" : ""}>
                    At least 8 characters long
                  </li>
                  <li
                    className={/[A-Z]/.test(password) ? "text-green-500" : ""}
                  >
                    One uppercase letter (A-Z)
                  </li>
                  <li
                    className={/[a-z]/.test(password) ? "text-green-500" : ""}
                  >
                    One lowercase letter (a-z)
                  </li>
                  <li
                    className={/[0-9]/.test(password) ? "text-green-500" : ""}
                  >
                    One number (0-9)
                  </li>
                  <li
                    className={
                      /[!@#$%^&*(),.?":{}|<>]/.test(password)
                        ? "text-green-500"
                        : ""
                    }
                  >
                    One special character
                  </li>
                </ul>
                {password && (
                  <p
                    className={`mt-2 text-sm font-medium ${passwordStrength.color}`}
                  >
                    Password Strength: {passwordStrength.strength}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-400"
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  Both passwords must match
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors font-medium"
            >
              Continue
            </button>
          </form>

          <p className="text-gray-600 text-sm mb-8">
            For further support, you may visit the{" "}
            <a
              href="/help"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Help Center
            </a>{" "}
            or contact our{" "}
            <a
              href="mailto:support@easyeats.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              customer service team
            </a>
            .
          </p>

          <img
            src="https://res.cloudinary.com/dsci2gspy/image/upload/v1755532651/logo_dzlt0y.png"
            alt="EasyEats Logo"
            className="h-6 object-contain mx-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CreateAccountPage;
