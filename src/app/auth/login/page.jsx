"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    console.log("login", values);
  };

  return (
    <div className="auth-content" style={{height:"fit-content", alignSelf:"center"}}>
      <h1 className="auth-title">Sign in</h1>
      <p className="auth-subtitle">Welcome back. Access your amplia dashboard.</p>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="auth-label">Email</label>
          <input
            type="email"
            className="form-control auth-input"
            placeholder="name@abc.com"
            {...register("email")}
          />
        </div>

        <div className="mb-3">
          <label className="auth-label">Password</label>
          <input
            type="password"
            className="form-control auth-input"
            placeholder="Enter password"
            {...register("password")}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
              {...register("remember")}
            />
            <label className="form-check-label small" htmlFor="remember">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            className="btn btn-link p-0 auth-link small text-decoration-none border-0"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="btn primary text-center justify-content-center w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="auth-switch mt-4 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="auth-link">
          Create one
        </Link>
      </p>
    </div>
  );
}


