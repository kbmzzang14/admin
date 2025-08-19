"use client";

import React, { useState } from "react";
import { Button } from "@/ui/components/Button";
import { LinkButton } from "@/ui/components/LinkButton";
import { TextField } from "@/ui/components/TextField";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const { error } = await signUp(email, password);

    if (error) {
      setError(error.message);
    } else {
      setMessage("Check your email for the confirmation link!");
    }

    setLoading(false);
  };

  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden relative">
      <div className="flex items-start overflow-hidden absolute inset-0 bg-[#FE7A50]">
        <div className="absolute w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute w-[400px] h-[400px] bg-white/15 rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute w-[300px] h-[300px] bg-white/25 rounded-full blur-3xl animate-float-3"></div>
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-float-4"></div>
        <div className="flex items-start @keyframes pulse absolute inset-0 animate-pulse bg-[url('https://images.unsplash.com/photo-1516737490857-847e4f29ef84')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      </div>
      <div className="flex w-full grow shrink-0 basis-0 items-start absolute top-0 left-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809')] bg-cover bg-center" />
      <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-md border border-solid border-neutral-border bg-white px-12 py-12 shadow-lg relative z-10">
        <img
          className="w-40 flex-none"
          src="https://res.cloudinary.com/subframe/image/upload/v1755564252/uploads/24387/jbk4cjjo9wo4chpjsmih.svg"
          alt="Logo"
        />
        <form
          onSubmit={handleSignUp}
          className="flex w-full flex-col items-start gap-6"
        >
          {error && (
            <div className="w-full p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}
          {message && (
            <div className="w-full p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
              {message}
            </div>
          )}
          <TextField
            className="h-auto w-full flex-none"
            label="이메일"
            helpText=""
          >
            <TextField.Input
              type="email"
              placeholder="your email address..."
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              required
            />
          </TextField>
          <TextField
            className="h-auto w-full flex-none"
            label="비밀번호"
            helpText=""
          >
            <TextField.Input
              type="password"
              placeholder="Your password..."
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
              required
            />
          </TextField>
          <TextField
            className="h-auto w-full flex-none"
            label="비밀번호 확인"
            helpText=""
          >
            <TextField.Input
              type="password"
              placeholder="Confirm your password..."
              value={confirmPassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(event.target.value)
              }
              required
            />
          </TextField>
          <div className="flex w-full flex-col items-start gap-4">
            <Button
              className="h-10 w-full flex-none"
              size="large"
              type="submit"
              loading={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </Button>
            <div className="flex w-full items-center justify-center">
              <LinkButton
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  router.push("/login");
                }}
              >
                Already have an account? Sign in
              </LinkButton>
            </div>
          </div>
        </form>
      </div>
      <style jsx>{`
        @keyframes float-1 {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(300px, -200px) rotate(72deg) scale(1.2);
          }
          40% {
            transform: translate(500px, 100px) rotate(144deg) scale(0.8);
          }
          60% {
            transform: translate(200px, 400px) rotate(216deg) scale(1.1);
          }
          80% {
            transform: translate(-200px, 200px) rotate(288deg) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) rotate(360deg) scale(1);
          }
        }
        @keyframes float-2 {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(-400px, 150px) rotate(72deg) scale(0.8);
          }
          40% {
            transform: translate(-600px, -100px) rotate(144deg) scale(1.3);
          }
          60% {
            transform: translate(-300px, -300px) rotate(216deg) scale(0.7);
          }
          80% {
            transform: translate(100px, -200px) rotate(288deg) scale(1.1);
          }
          100% {
            transform: translate(0px, 0px) rotate(360deg) scale(1);
          }
        }
        @keyframes float-3 {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(250px, 250px) rotate(72deg) scale(1.4);
          }
          40% {
            transform: translate(-150px, 500px) rotate(144deg) scale(0.6);
          }
          60% {
            transform: translate(-400px, 100px) rotate(216deg) scale(1.2);
          }
          80% {
            transform: translate(300px, -150px) rotate(288deg) scale(0.8);
          }
          100% {
            transform: translate(0px, 0px) rotate(360deg) scale(1);
          }
        }
        @keyframes float-4 {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(-300px, -300px) rotate(72deg) scale(0.9);
          }
          40% {
            transform: translate(400px, -200px) rotate(144deg) scale(1.1);
          }
          60% {
            transform: translate(200px, 300px) rotate(216deg) scale(0.7);
          }
          80% {
            transform: translate(-100px, 400px) rotate(288deg) scale(1.3);
          }
          100% {
            transform: translate(0px, 0px) rotate(360deg) scale(1);
          }
        }
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default SignUp;
