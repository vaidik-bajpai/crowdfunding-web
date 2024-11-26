import { useState } from "react";
import {SignupFormInput, RegisterButton} from "./SignupFormInput";
import RocketMan from "../assets/RocketMan";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SigninForm() {
    async function handleClickInvestor() {
        try {
            const body = {
                email: email,
                password: password,
            };
            
            console.log(body);

            const response = await axios.post("http://localhost:3000/apis/LoginUser", body);
    
            if (response.status === 200) {
                console.log("Login successful:", response.data);

            } else {
                console.error("Unexpected response:", response);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Axios error response:", error.response?.data);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    }

    async function handleClickCompany() {
        try {
            const body = {
                registrationNumber: rNo,
                password: password,
            };

            console.log(body);
    
            const response = await axios.post("http://localhost:3000/apis/LoginCompany", body);
    
            if (response.status === 200) {
                console.log("Login successful:", response.data);

            } else {
                console.error("Unexpected response:", response);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Axios-specific error
                console.error("Axios error response:", error.response?.data);
            } else {
                // Generic error handling
                console.error("Unexpected error:", error);
            }
        }
    }

    const [isInvestor, setIsInvestor] = useState<boolean>(false);

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [rNo, setRNo] = useState<string>();

    const navigate = useNavigate();

    return (
        <div className="w-full px-6">
            <div className="flex mx-auto max-w-7xl bg-transparent relative w-full">
                <div className="absolute inset-0 flex justify-center items-center">
                    <RocketMan />
                </div>
                <div className="flex-1 hidden md:block gap-2 align-between h-full">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-6xl font-extrabold text-red-600 max-w-lg tracking-wider">Welcome Back! 🚀</h1>
                            <div className="text-sm mt-2 p-1 max-w-xs font-semibold">Sign in to fund ideas, track your impact, and shape the future."</div>
                        </div>
                        <button className="bg-red-600 w-fit text-black font-bold text-2xl px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-red-700 hover:scale-105 hover:shadow-lg" onClick={() => navigate("/dashboard")}>
                            Enter
                        </button>
                    </div>
                </div>

                <div className="w-[40%] z-10">
                    <div className="px-3 mx-auto">
                        <div
                            className={`flex flex-col gap-8 transition-all duration-300 border-2 px-5 pb-6 border-none py-3 my-5`}
                        >
                            <div className="flex justify-between gap-2">
                                <div
                                    className={`text-sm w-full rounded py-3 grid place-content-center text-black font-bold cursor-pointer transition-all duration-300 ${
                                        !isInvestor ? "bg-red-500" : "bg-red-100"
                                    }`}
                                    onClick={() => setIsInvestor(false)}
                                >
                                    Company
                                </div>
                                <div
                                    className={`text-sm w-full rounded py-2 grid place-content-center text-black font-bold cursor-pointer transition-all duration-300 ${
                                        isInvestor ? "bg-red-500" : "bg-red-100"
                                    }`}
                                    onClick={() => setIsInvestor(true)}
                                >
                                    Investor
                                </div>
                            </div>
                            {isInvestor ? (
                                <>
                                <SignupFormInput placeholder="Enter your email address" type="email" onChange={(e) => setEmail(e.target.value)}/>
                                <SignupFormInput placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                                <RegisterButton buttonText="Sign in" onClick={handleClickInvestor}/>
                                </>
                            ) : (
                                <>
                                <SignupFormInput placeholder="Enter your registration number" type="email" onChange={(e) => setRNo(e.target.value)}/>
                                <SignupFormInput placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                                <RegisterButton buttonText="Sign in" onClick={handleClickCompany}/>
                                </>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninForm;