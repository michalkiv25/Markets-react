import React from 'react';
import useFrom from './useFrom';

import './SingIn.css';


const SingIn = ({singIn,auto0Login}) => {

    const {handleChange,handleSubmit,values,errors} = useFrom(singIn,auto0Login);
    return (
        <div className='contanier_form'>
            <form onSubmit={handleSubmit} className="form">
                <input 
                    type='email' 
                    className='Sing-up-inputs' 
                    placeholder='Email...' 
                    value={values.email} 
                    onChange={handleChange} 
                    name="email"
                />
          
                <span>{errors.email}</span>
            
                <input 
                    type='password' 
                    className='Sing-up-inputs' 
                    placeholder='Password...' 
                    value={values.password} 
                    onChange={handleChange} 
                    name="password"
                />
           
                <span>{errors.password}</span>
             
                <button className='Sing-up-button' type='submit' >Sing-In</button>
            </form>
        </div>
    );
};

export default SingIn;
