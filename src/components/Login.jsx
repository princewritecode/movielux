import { useRef, useState } from 'react';
import Header from './Header';
import checkValid from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
const Login = () =>
{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const toggleSignInForm = () =>
    {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    };
    const handleButtonClick = () =>
    {
        const message = checkValid(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm)
        {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) =>
                {

                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() =>
                    {

                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName }));
                        // ...
                    }).catch((error) =>
                    {
                        // An error occurred
                        setErrorMessage(error.message);
                        // ...
                    });


                    // ...
                })
                .catch((error) =>
                {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                    // ..
                });
        }
        else
        {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) =>
                {
                    // Signed in
                    const user = userCredential.user;


                    // ...
                })
                .catch((error) =>
                {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                });
        }
    };
    return (
        <div className="relative min-h-screen w-full bg-black">
            <Header />
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-05bc-4e31-839e-d35d233f4873/45c21e07-92d5-4523-be72-a4f664530006/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"
                    className="h-full w-full object-cover opacity-50"
                />
            </div>
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-full max-w-[450px] rounded-lg bg-black/75 p-8 md:p-16 text-white shadow-2xl backdrop-blur-sm"
                >
                    <h1 className="mb-8 text-3xl font-bold md:text-4xl">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>

                    <div className="space-y-4">
                        {!isSignInForm && (
                            <input
                                ref={name}
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded bg-[#333] px-5 py-4 outline-none focus:ring-2 focus:ring-gray-400 transition-all placeholder:text-gray-400"
                            />
                        )}

                        <input
                            ref={email}
                            type="email"
                            placeholder="Email or phone number"
                            className="w-full rounded bg-[#333] px-5 py-4 outline-none focus:ring-2 focus:ring-gray-400 transition-all placeholder:text-gray-400"
                        />

                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="w-full rounded bg-[#333] px-5 py-4 outline-none focus:ring-2 focus:ring-gray-400 transition-all placeholder:text-gray-400"
                        />
                    </div>

                    {/* --- ADDED THIS PARAGRAPH FOR THE ERROR MESSAGE --- */}
                    <p className="text-[#E50914] font-bold text-sm py-2">{errorMessage}</p>

                    <button onClick={() =>
                    {
                        handleButtonClick();
                    }} className="mt-4 w-full rounded bg-[#E50914] py-4 font-bold transition-all active:scale-95 hover:bg-[#c10712]">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                            <input type="checkbox" className="h-4 w-4 accent-gray-500" />
                            <span>Remember me</span>
                        </div>
                        <p className="cursor-pointer hover:underline">Need help?</p>
                    </div>

                    <div className=" mt-12">
                        <p className=" text-gray-500">
                            {isSignInForm ? "New to MovieLux?" : "Already a member?"}
                            <span
                                onClick={toggleSignInForm}
                                className=" ml-2 cursor-pointer font-semibold text-white hover:underline"
                            >
                                {isSignInForm ? "Sign up now." : "Sign in now."}
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;