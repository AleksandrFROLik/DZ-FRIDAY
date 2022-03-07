import React, {useState, FocusEvent, ChangeEvent, useEffect} from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [errorEmail, setErrorEmail] = useState('Email is required')
    const [errorPassword, setErrorPassword] = useState('Password is required')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (errorEmail || errorPassword) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [errorEmail, errorPassword])


    const handleBlue = (e: FocusEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }

    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        if (e.currentTarget.value.length < 3) {
            setErrorPassword('Password must be more 3 symbols')
            if (!e.currentTarget.value) {
                setErrorPassword('Password is required')
            }
        } else {
            setErrorPassword('')
        }
    };

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.currentTarget.value).toLowerCase())) {
            setErrorEmail('Email is not validate')
        } else {
            setErrorEmail('')
        }


    };

    return (
        <div className='.App'>
            <form>
                <h1>Login</h1>
                {(emailDirty && errorEmail) && <div style={{color: 'red'}}>{errorEmail}</div>}
                <input value={email}
                       name='email'
                       type='text'
                       onChange={(e) => handleEmail(e)}
                       onBlur={(e) => handleBlue(e)}
                       placeholder='Enter your email...'/>
                {(passwordDirty && errorPassword) && <div style={{color: 'red'}}>{errorPassword}</div>}
                <input value={password}
                       name='password'
                       type='password'
                       onChange={(e) => handlePassword(e)}
                       onBlur={(e) => handleBlue(e)}
                       placeholder='Enter your password...'/>
                <button disabled={!formValid}>Login</button>
            </form>
        </div>
    );
};

export default Login;