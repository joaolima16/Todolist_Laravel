'use client'

import InputField from "@/app/components/forms/InputField";
import PasswordField from "@/app/components/forms/PasswordField";
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import './style.scss';
import Snackbar from "@/app/components/Snackbar";

export default function Register() {

    const [value, setValue] = useState({ name: "", email: "", password: "" });
    const [isRegistered, setIsRegistered] = useState<Boolean | null>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setIsRegistered(false);
        console.log(isRegistered)
    }
    useEffect(() => {
        // if (isRegistered === false) {
        //     setTimeout(() => {
        //         setIsRegistered(null);
        //     }, 3000);
        // }
    }, [isRegistered])
    return (
        <>
            <div className='container-register flex flex-row justify-around gap-10'>
                <div className='container-image'>
                    <Image
                        src="/assets/task.png"
                        width={500}
                        height={500}
                        layout='responsive'
                        alt="imagem de tarefa"
                    />

                </div>
                <section className='title_subtitle flex flex-col align-baseline'>
                    <h1 className='title text-6xl text-white '>Controle de tarefas</h1>
                    <h2 className='subtitle text-center text-5xl text-white'>Cadastro</h2>
                    <form action="" className='flex flex-col gap-3 top-6 relative w-full' onSubmit={handleSubmit}>
                        <InputField
                            label='Nome'
                            name='input-nome'
                            placeholder='Digite seu Nome'
                            type='text'
                            onChange={(e) => setValue({ ...value, name: e.target.value })}
                            value={value.name}
                        />
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
                        <button className="btn_submit">
                            Registrar
                        </button>
                        <span className='text-white text-lg text-start font-bold'>Já possui cadastro? <Link href="/pages/login" className='font-medium hover:underline transition delay-1000'>Login</Link></span>
                    </form>
                </section>
                {
                    isRegistered !== null && (
                        <Snackbar variant={isRegistered ? 'success' : 'error'} message={isRegistered ? 'Usuário cadastrado!' : 'Erro ao cadastrar usuário'} />
                    )}
            </div>
        </>
    )
}