"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    // TODO: integrate with backend registration later
    console.log("signup", values);
  };

  return (
    <div className="auth-content">
      <h1 className="auth-title">Sign up</h1>
      <p className="auth-subtitle">
        Get started in minutes and transform your school experience.
      </p>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="auth-label">Full Name</label>
          <input
            className="form-control auth-input"
            placeholder="Enter full name"
            {...register("fullName")}
          />
        </div>

        <div className="mb-3">
          <label className="auth-label">Password</label>
          <input
            type="password"
            className="form-control auth-input"
            placeholder="Create password"
            {...register("password")}
          />
        </div>

        <div className="row">
          <div className="col-sm-4 mb-3">
            <label className="auth-label">Code</label>
            <input
              className="form-control auth-input"
              placeholder="+1"
              {...register("code")}
            />
          </div>
          <div className="col-sm-8 mb-3">
            <label className="auth-label">Phone number</label>
            <input
              className="form-control auth-input"
              placeholder="Phone number"
              {...register("phone")}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="auth-label">Choose City</label>
          <select
            className="form-select auth-input"
            {...register("city")}
            defaultValue=""
          >
            <option value="" disabled>
              Choose City
            </option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
            <option value="islamabad">Islamabad</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="auth-label">Select your role to continue</label>
          <select
            className="form-select auth-input"
            {...register("role")}
            defaultValue=""
          >
            <option value="" disabled>
              Select your role to continue
            </option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Administrator</option>
          </select>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberSignup"
              {...register("rememberMe")}
            />
            <label
              className="form-check-label small"
              htmlFor="rememberSignup"
            >
              Remember Me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn primary text-center justify-content-center w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Getting started..." : "Get Started"}
        </button>
      </form>

      <p className="auth-switch mt-4 text-center">
        Already have an account?{" "}
        <Link href="/auth/login" className="auth-link">
          Sign in
        </Link>
      </p>
    </div>
  );
}


