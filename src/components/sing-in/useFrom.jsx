import { useState,useEffect } from 'react';
import validate from './validate';

const useFrom = (singIn,auto0Login)=>{

    const [errors, setErrors] = useState({});
    const [isSubmit,setisSubmit]=useState(false)
    const [values,setValues]= useState({
        email:'',
        password:''
    });

    const handleChange= event =>{
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value //[event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
      event.preventDefault();
      setErrors(validate(values))
      setisSubmit(true)

      };


      useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmit){
          singIn()
          auto0Login()
        }
      },[errors])

return {handleChange,values,handleSubmit,errors,isSubmit}

};

export default useFrom;