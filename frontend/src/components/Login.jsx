
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
// import Facebook from "../assets/Facebook.png"
// import Twitter from "../assets/Twitter.png"
// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [rememberMe, setRememberMe] = useState(false);
 
//     return (
//         <>
//             <div className="w-full md:w-[40vw] p-8">
//                 <div className="bg-transparent bg-opacity-30 backdrop-blur-sm p-8 border border-[#b8b8ba] shadow-2xl h-[57vh]">
//                     <h2 className="text-md font-semibold text-indigo-700 mb-6">Welcome back! Please login to your account</h2>

//                     <form>
//                         <div className="mb-4">
//                             <label htmlFor="email" className="sr-only">
//                                 Email Address
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600"></div>
//                                 <input
//                                     id="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     onFocus={() => setIsEmailFocused(true)}
//                                     onBlur={() => setIsEmailFocused(!email)}
                                  
//                                     className="w-full pt-[18px] p-[14.5px] pl-4 border border-[#c1bbbb] rounded focus:outline-none bg-white text-sm text-indigo-600"
//                                     required
//                                 />
//                                 <label
//                                     htmlFor="email"
//                                     className={`absolute left-4 transition-all duration-200 ${
//                                          email ? 'top-1 mb-2 text-xs text-gray-400' : 'top-[26px] transform -translate-y-1/2 text-sm text-gray-500 '
//                                     }`}
//                                 >
//                                     Email Address
//                                 </label>
//                             </div>
//                         </div>

//                         <div className="mb-6">
//                             <label htmlFor="password" className="sr-only">
//                                 Password
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     id="password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     onFocus={() => setIsPasswordFocused(true)}
//                                     onBlur={() => setIsPasswordFocused(!password)}
                                   
//                                     className="w-full pt-4 pl-4 text-sm p-[14.5px] border border-[#c1bbbb] bg-white focus:outline-none rounded text-indigo-600"
//                                     required
//                                 />
//                                 <label
//                                     htmlFor="password"
//                                     className={`absolute left-4 transition-all duration-200 ${
//                                          password ? 'top-1  text-xs text-gray-500' : 'top-[26px] transform -translate-y-1/2 text-sm text-gray-500'
//                                     }`}
//                                 >
//                                     Password
//                                 </label>
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between mb-6">
//                             <div className="flex items-center">
//                                 <input
//                                     id="remember-me"
//                                     type="checkbox"
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                                 />
//                                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                                     Remember Me
//                                 </label>
//                             </div>

//                             <div>
//                                 <a href="#" className="text-sm text-gray-600 hover:text-indigo-600">
//                                     Forgot Password?
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="flex  sm:flex-row justify-around gap-10">
//                             <div className='flex flex-col sm:flex-row gap-4'>
//                             <button
//                                 type="submit"
//                                 className="w-full sm:w-[9vw] px-6 py-3 bg-indigo-600 text-white h-[7vh] rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-sm"
//                             >
//                                 Login
//                             </button>

//                             <Link
//                                 to="/signup"
//                                 className="w-full h-[7vh] sm:w-[9vw] px-6 py-3 bg-white text-indigo-600 font-medium rounded border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center text-sm"
//                             >
//                                 Sign Up
//                             </Link>
//                             </div>

//                             <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
                               
//                                     {/* <FaGoogle size={20} /> */}
//                                     <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png" alt="" />
                               
                                
                                    
//                                     <img className='w-[22px] cursor-pointer hover:scale-110 transition-transform' src={Facebook} alt="" />
                               
                               
                                    
//                                     <img className='w-[25px] cursor-pointer hover:scale-110 transition-transform' src='https://img.freepik.com/premium-vector/x-new-social-network-black-app-icon-twitter-rebranded-as-x-twitter-s-logo-was-changed_277909-568.jpg?semt=ais_hybrid' alt="" />
                               
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;





import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Facebook from "../assets/Facebook.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem("rememberedEmail");
        if (savedEmail) setEmail(savedEmail);
    }, []);

    useEffect(() => {
        if (rememberMe) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }
    }, [rememberMe, email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Save token and navigate
                localStorage.setItem("token", data.token);
                 
        localStorage.setItem('userId', data.userId);  
                navigate("/profile");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full md:w-[40vw] p-8">
            <div className="bg-transparent bg-opacity-30 backdrop-blur-sm p-8 border border-[#b8b8ba] shadow-2xl h-[57vh]">
                <h2 className="text-md font-semibold text-indigo-700 mb-6">
                    Welcome back! Please login to your account
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600"></div>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pt-[18px] p-[14.5px] pl-4 border border-[#c1bbbb] rounded focus:outline-none bg-white text-sm text-indigo-600"
                                required
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-4 transition-all duration-200 ${
                                    email
                                        ? 'top-1 mb-2 text-xs text-gray-400'
                                        : 'top-[26px] transform -translate-y-1/2 text-sm text-gray-500'
                                }`}
                            >
                                Email Address
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pt-4 pl-4 text-sm p-[14.5px] border border-[#c1bbbb] bg-white focus:outline-none rounded text-indigo-600"
                                required
                            />
                            <label
                                htmlFor="password"
                                className={`absolute left-4 transition-all duration-200 ${
                                    password
                                        ? 'top-1 text-xs text-gray-500'
                                        : 'top-[26px] transform -translate-y-1/2 text-sm text-gray-500'
                                }`}
                            >
                                Password
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember Me
                            </label>
                        </div>

                        <div>
                            <a href="#" className="text-sm text-gray-600 hover:text-indigo-600">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <div className="flex sm:flex-row justify-around gap-10">
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-[9vw] px-6 py-3 bg-indigo-600 text-white h-[7vh] rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-sm"
                            >
                               Login
                            </button>

                            <Link
                                to="/signup"
                                className="w-full h-[7vh] sm:w-[9vw] px-6 py-3 bg-white text-indigo-600 font-medium rounded border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center text-sm"
                            >
                                Sign Up
                            </Link>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
                            <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png" alt="Google" />
                            <img className='w-[22px] cursor-pointer hover:scale-110 transition-transform' src={Facebook} alt="Facebook" />
                            <img className='w-[25px] cursor-pointer hover:scale-110 transition-transform' src='https://img.freepik.com/premium-vector/x-new-social-network-black-app-icon-twitter-rebranded-as-x-twitter-s-logo-was-changed_277909-568.jpg?semt=ais_hybrid' alt="Twitter" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
