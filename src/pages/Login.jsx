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
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Required'),
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
      const message = err.response?.data?.message || "Invalid credentials. '";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Admin Login</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Access your portfolio dashboard</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 text-sm text-red-700 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-800 animate-bounce">
                  {error}
                </div>
              )}

            
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Username</label>
                <input
                  name="username"
                  type="text"
                  placeholder="e.g. emilys"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className={`w-full p-3.5 rounded-xl border outline-none transition-all duration-200 dark:bg-gray-700 dark:text-white ${
                    errors.username && touched.username 
                      ? "border-red-500 ring-4 ring-red-500/10" 
                      : "border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                />
                {errors.username && touched.username && <p className="text-xs text-red-500 mt-1 ml-1">{errors.username}</p>}
              </div>

      
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={`w-full p-3.5 rounded-xl border outline-none transition-all duration-200 dark:bg-gray-700 dark:text-white ${
                      errors.password && touched.password 
                        ? "border-red-500 ring-4 ring-red-500/10" 
                        : "border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-blue-600 hover:text-blue-800"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
                {errors.password && touched.password && <p className="text-xs text-red-500 mt-1 ml-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? "Verifying..." : "Sign In"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}