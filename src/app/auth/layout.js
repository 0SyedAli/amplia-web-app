"use client";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-wrapper">
      <div className="auth_image">
      </div>
      <div className="auth-form-container">
        <div className="auth-card">
          {children}
        </div>
      </div>
    </div>
  );
}


