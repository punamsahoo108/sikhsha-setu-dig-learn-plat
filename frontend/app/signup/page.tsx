"use client"
import React, { useState } from 'react';
import './signup.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type Inputs = {
    username: string
    password: string
    email: string
};

const Signup: React.FC = () => {
    const [msg, setmsg] = useState<string>("");
    const router = useRouter();
    
    const delay = (s: number) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, s * 1000)
        });
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await delay(2);
        const response = await fetch('http://localhost:3001/signin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

        let res = await response.json()
        if (!response.ok) {
            setmsg(res.msg);
            return;
        }
        setmsg(res.msg);
        reset();
        router.push('/login')
    };

    return (
        <div className='signupBody'>
            <h2>Signup</h2>
            <form className='signupFormbody' onSubmit={handleSubmit(onSubmit)}>
                {msg && <div>{msg}</div>}
                <div><input type="text" placeholder="Email" {...register("email", { required: "Email is required" })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div><input type="text" placeholder="Username" {...register("username", { required: "Username is required" })} />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
                <div><input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Signup"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
