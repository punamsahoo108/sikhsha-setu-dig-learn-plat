"use client";
import React, { useState } from 'react';
import './login.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type Inputs = {
    username: string;
    password: string;
};

const Login: React.FC = () => {
    const [msg, setMsg] = useState<string>("");
    const router = useRouter();

    const delay = (s: number) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), s * 1000);
        });
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await delay(1.5);
        const response = await fetch('http://localhost:3001/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include",
        });

        const res = await response.json();
        if (!response.ok) {
            setMsg(res.msg || "Login failed");
            return;
        }

        if (res.id) {
            localStorage.setItem("userId", res.id);
        }

        setMsg(res.msg || "Login successful");
        reset();
    };

    return (
        <div className='loginBody'>
            <h2>Login</h2>
            <form className='loginFormBody' onSubmit={handleSubmit(onSubmit)}>
                {msg && <div>{msg}</div>}
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("username", { required: "Username is required" })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
