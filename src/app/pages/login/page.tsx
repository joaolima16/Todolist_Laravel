'use client';

import './style.scss'
import Image from 'next/image';
import InputField from '@/app/components/forms/InputField';
import { useEffect, useState } from 'react';
import PasswordField from '@/app/components/forms/PasswordField';
import Link from 'next/link';
import Snackbar from '@/app/components/Snackbar';
export default function Login() {
    const [value, setValue] = useState({ email: "", password: "" });
    const [isLogged, setIsLogged] = useState<Boolean | null>(null);
    const handleSubmit = (event: React.FormEvent) => {
        setIsLogged(false);
        event.preventDefault();
        console.log(isLogged)
    }
    useEffect(() => {
        // if (isLogged === false || isLogged === true) {
        //     setTimeout(() => {
        //         setIsLogged(null);
        //     }, 3000);
        // }
    }, [isLogged]);
    return (
        <div className='container-login flex flex-row justify-around gap-10'>
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
                    <button className="btn_submit" onClick={handleSubmit}>
                        Logar
                    </button>
                    <span className='text-white text-lg text-start font-bold'>Não possui cadastro? <Link href="/pages/register" className='font-medium hover:underline transition delay-1000'>Cadastre-se</Link></span>
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
          
            {
                isLogged !== null &&(
                    <Snackbar variant={isLogged ? 'success': 'error'} message={isLogged? 'Usuário logado!': 'Erro ao logar'}/>
                )}

            {/* <Snackbar /> */}
        </div>
    )
}