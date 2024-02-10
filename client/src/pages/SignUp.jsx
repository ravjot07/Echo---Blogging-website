import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1 mr-8">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Ravjot's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-thin font-serif">
            Ravjot's Blog is a unique platform where I, as the admin, share a
            wide range of stories, ideas, and insights with the world. This site
            is my personal canvas, but it's also a community hub where readers
            like you can engage, react, and connect over the content.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value='Your username' />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
            <div className="flex gap-2 mt-5 text-sm">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
              Sign In
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
