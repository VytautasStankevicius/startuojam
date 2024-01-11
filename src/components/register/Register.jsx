import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"

const Register = ()=>{
    const [formData, setFormData] = useState({})

    const[user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
        registerWithEmailAndPassword(formData.name, formData.email, formData.password)
    }

    useEffect(()=>{
        if(loading) return;
        if(user) navigate('/works')
    },[user, loading])

    return (
        <>
            <h2 className='mt-3 text-center'></h2>
            
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input name='name' onChange={handleChange} type="text" className="form-control" placeholder='Jusu vardas' />
                </div>
                <div className="mb-3">
                    <input name='email' onChange={handleChange} type="text" className="form-control" placeholder="El.pastas" />
                </div>
                <div className="mb-3">
                    <input name='password' onChange={handleChange} type="password" className="form-control" placeholder="Slaptazodis" />
                </div>
                <div className="mb-3">
                    <button type='submit'>Register</button>
                </div>
                <div className="mb-3">
                    <p>Already have an account ?<Link to="/">Login</Link></p>
                </div>
            </form>
        </>
    )
}

export default Register


