import { use, useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
interface PasswordProps {
    placeholder: string
    onChange: () => void
    name: string
    value: string
}

const PasswordField = ({ placeholder = "senha", onChange, name, value }: PasswordProps) => {
    const [isVisible, setIsVisible] = useState(false);
  
    return (
        <>

            <label htmlFor={name} className='text-white text-xl font-bold'>Senha</label>
            <div className="flex flex-col justify-center ">
                <input
                    className="inputField p-4 rounded-lg placeholder:font-medium text-black font-sans w-full"
                    type={isVisible ? "text" : "password"}
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    required={true}
                />
                {isVisible ? <VisibilityIcon className="relative  bottom-10 left-96 cursor-pointer" onClick={() => setIsVisible(!isVisible)}/> : <VisibilityOffIcon className="relative  bottom-10 left-96 cursor-pointer" onClick={() => setIsVisible(!isVisible)}/>}
            </div>
        </>
    )
}
export default PasswordField;