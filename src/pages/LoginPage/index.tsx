'use client';
import './style.scss'
import Image from 'next/image';
import { Jersey_15 } from 'next/font/google';
import InputField from '@/components/forms/InputField';
import { useState } from 'react';
export default function LoginPage() {
    const [value, setValue] = useState();
    // const jersey = Jersey_15({
    //     subsets: ['latin'],
    //     weight: ["400"],
    //     style: ['normal'],
    //     variable: '--font'
    // });


    return (
        <div className='container-login flex flex-row justify-around gap-30'>
            <section className='title_subtitle flex flex-col align-baseline'>
                <h1 className='title text-6xl text-white '>Controle de tarefas</h1>
                <h2 className='subtitle text-center text-5xl text-white'>Login</h2>
                <form action="" className='flex flex-col gap-2 top-10 relative'>
                    <InputField
                        label='Email'
                        name='input-email'
                        placeholder='Digite seu email'
                        type='text'
                        onChange={(e) => console.log(e)}
                        value={value}
                    />
                    <InputField
                        label='Senha'
                        name='input-senha'
                        placeholder='Digite sua senha'
                        type='text'
                        onChange={(e) => console.log(e)}
                        value={value}
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