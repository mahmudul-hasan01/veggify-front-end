import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {

    const { login, googleSignIn } = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
       const userData = await login(data?.email, data?.password)
       navigate('/')
    }

    const handleGoogleSignIn = async () => {
        await googleSignIn()
        navigate('/')
    }

    return (

        <div className="font-[sans-serif] mb-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-4 h-full">

                <div className="max-md:order-1 lg:col-span-2 md:h-screen w-full bg-[#000842] md:rounded-l-xl lg:p-12 p-8">
                    <img src="https://readymadeui.com/signin-image.webp" className="lg:w-[70%] w-full h-full object-contain block mx-auto" alt="login-image" />
                </div>

                <div className="w-full p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-8">
                            <h3 className="text-gray-800 text-3xl font-extrabold">Login</h3>
                            <p className="text-sm mt-4 text-gray-800">Don`t have an account<a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a></p>
                        </div>

                        <div>
                            <label className="text-gray-800 text-[15px] mb-2 block">Email</label>
                            <div className="relative flex items-center">
                                <input {...register("email")} name="email" type="email" required className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600" placeholder="Enter email" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                        </clipPath>
                                    </defs>
                                    <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path fill="none" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="text-gray-800 text-[15px] mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input {...register("password")} name="password" type="password" required className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600" placeholder="Enter password" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button type="submit" className="w-full shadow-xl py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                login
                            </button>
                        </div>
                    </form>
                    <div className="my-4 flex items-center gap-4">
                        <hr className="w-full border-gray-300" />
                        <p className="text-sm text-gray-800 text-center">or</p>
                        <hr className="w-full border-gray-300" />
                    </div>
                    {/* google */}
                    <button onClick={handleGoogleSignIn} type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none">
                        <FcGoogle className="w-6 h-6"/>
                        Continue with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;