import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const [mailValue, setMailValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();

    const onChangeMail = (event) => setMailValue(event.target.value);
    const onChangePass = (event) => setPassValue(event.target.value);

    const onLogin = (email, password) => {

        if (email === 'correo@gmail.com' && password === '123456') {
            navigate('/BreakingBad', {
                replace: true
            });
        } else {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 3000);

            setMailValue('');
            setPassValue('');
        }
    }

    return (
        <div className="m-0 vh-100 row vh-100 justify-content-center align-items-center">

            <div className="col-auto text-center card shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                
                    <h2 className="card-title mb-5">Sign In</h2>
                            
                    <p className="text-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}> <b>Wrong data!!!</b> </p>

                    <input type="email" className="form-control mt-3" placeholder="name@example.com" value={ mailValue } onChange={ onChangeMail }/>
                    <input type="password" className="form-control mt-3" placeholder="******" value={ passValue } onChange={ onChangePass }/>

                     <a className="btn btn-primary mt-3" onClick={ () => onLogin(mailValue, passValue) }> Login </a>
                
                </div>

            </div>
        </div>
    )
}
