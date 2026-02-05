import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = { username: '', password: '' };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Too short').required('Required'),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    setError("");
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: values.username,
        password: values.password,
      });

      if (response.data.accessToken) { 
        localStorage.setItem("adminToken", response.data.accessToken);
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("userImage", response.data.image);                                         
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // Default: Light gray background | Dark: Deep black background
    <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white p-6 relative overflow-hidden font-Ovo transition-colors duration-500">
      
      {/* Background Glows (Subtle in light mode, vibrant in dark) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/50 dark:bg-purple-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md z-10">
        {/* Card: White shadow in light mode | Glassmorphism in dark mode */}
        <div className="bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 p-10 rounded-3xl shadow-xl dark:shadow-2xl transition-all">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Admin Portal
            </h1>
            <p className="text-slate-500 dark:text-gray-400 mt-3 text-sm tracking-wide">Enter credentials to manage portfolio</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-3 rounded-xl text-xs text-center">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[2px] text-slate-500 dark:text-gray-400 font-bold ml-1">Username</label>
                  <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="Admin username"
                    // Input: Slate background in light | Transparent white in dark
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all text-sm dark:text-white"
                  />
                  {errors.username && touched.username && <p className="text-[10px] text-purple-600 dark:text-purple-400 ml-1">{errors.username}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[2px] text-slate-500 dark:text-gray-400 font-bold ml-1">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="••••••••"
                      className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all text-sm dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {showPassword ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                  {errors.password && touched.password && <p className="text-[10px] text-purple-600 dark:text-purple-400 ml-1">{errors.password}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  // Button: Black in light mode | White in dark mode
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 mt-4 shadow-lg"
                >
                  {isSubmitting ? "AUTHENTICATING..." : "SIGN IN"}
                </button>
              </form>
            )}
          </Formik>

          <div className="mt-8 text-center">
            <a href="/" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-gray-400 transition-colors">
              ← Return to Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}