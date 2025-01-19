import './style.scss';

interface InputProps {
    label?: string
    type?: string,
    name?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    value?: string

};
export default function InputField({ type, name, onChange, placeholder, value, label }: InputProps) {
    return (
        <>
        {label && <label htmlFor={name} className='text-white text-xl font-bold'>{label}</label>}
            <input className="inputField p-4 rounded-lg placeholder:font-medium text-black font-sans w-full"
                type={type}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
        </>
    )
}