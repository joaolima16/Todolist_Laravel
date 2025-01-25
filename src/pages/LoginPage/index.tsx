'use client';
import './style.scss'
import Image from 'next/image';
import { Jersey_15 } from 'next/font/google';
import InputField from '@/components/forms/InputField';
import { useState } from 'react';
import PasswordField from '@/components/forms/PasswordField';
export default function LoginPage() {
    const [value, setValue] = useState({ email: "", password: "" });
    return (
        <div className='container-login flex flex-row justify-around gap-30'>
            <section className='title_subtitle flex flex-col align-baseline'>
                <h1 className='title text-6xl text-white '>Controle de tarefas</h1>
                <h2 className='subtitle text-center text-5xl text-white'>Login</h2>
                <form action="" className='flex flex-col gap-3 top-10 relative w-full'>
                    <InputField
                        label='Email'
                        name='input-email'
                        placeholder='Digite seu email'
                        type='email'
                        onChange={(e) => setValue({ ...value, email: e.target.value })}
                        value={value.email}
                    />
                    <PasswordField
                        value={value.password}
                        name='input-password'
                        placeholder='Digite sua senha'
                        onChange={(e) => setValue({ ...value, password: e.target.value })}
                    />
                </form>
            </section>
            <div className='container-image'>
                <Image
                    src="/assets/task.png"
                    width={500}
                    height={500}
                    layout='responsive'
                    alt="imagem de tarefa"
                />

            </div>

        </div>
    )
}