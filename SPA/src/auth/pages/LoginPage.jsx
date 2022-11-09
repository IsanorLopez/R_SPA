import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const [mailValue, setMailValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const navigate = useNavigate();

    const onChangeMail = (event) => setMailValue(event.target.value);
    const onChangePass = (event) => setPassValue(event.target.value);

    const onLogin = (email, password) => {

        if (email === 'correo@gmail.com' && password === '123456') {
            navigate('/', {
                replace: true
            });
        } else {
            setMailValue('');
            setPassValue('');
        }
    }

    return (
        <>

            <div id="liveAlertPlaceholder" className="row w-100 justify-content-end"></div>


            <div className="m-0 vh-100 row justify-content-center align-items-center bg-light">

                <div className="col-auto text-center card shadow p-3 mb-5 bg-white rounded">
                    
                    <img src={ '/src/assets/logo.png' } className="card-img-top" alt="..."/>
                    
                    <div className="card-body">
                        <h5 className="card-title mt-3">Sign In</h5>
                        
                        <input type="email" className="form-control mt-3" placeholder="name@example.com" value={ mailValue } onChange={ onChangeMail }/>
                        <input type="password" className="form-control mt-3" placeholder="******" value={ passValue } onChange={ onChangePass }/>

                        <a className="btn btn-primary mt-3" onClick={ () => onLogin(mailValue, passValue) }> Login </a>
                    </div>

                </div>
            </div>
        </>
    )
}
