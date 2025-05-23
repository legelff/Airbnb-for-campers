import './Register.css';
import { RegisterForm } from '@/components/Register-form/register-form.tsx';

interface RegisterFormPropsFromPage {
    onRegisterSuccess: () => void; // calback to app.tsx
}

const Register: React.FC<RegisterFormPropsFromPage> = ({ onRegisterSuccess }) => {
    return (
        <>
            <div className='register flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
                <RegisterForm className='min-w-[400px]' onRegisterSuccess={onRegisterSuccess} />
            </div>
        </>
    )
}

export default Register;