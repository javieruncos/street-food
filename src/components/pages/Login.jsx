import React from 'react';
import "../../assets/style/Login.css"
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    return (
        <div className='loginPage'>
            <div className='capaLogin'>
                <div className='pt-5 container'>
                    <div className='containerLogin mx-auto container'>
                        <h2 className='text-center fontGlobal display-6 pt-3'>Iniciar Sesion</h2>
                        <form action="" className='py-3'>
                            <div>
                                <input type="email" placeholder='Usuario' className='form-control mb-3'
                                    {...register("email", {
                                        required: "este campo es requerido",
                                        pattern: {
                                            value: "/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/",
                                            message: "El email debe ser valido, sin caracteres especiales"
                                        }
                                    })}

                                />
                                <span className='text-danger'>
                                    {errors.email?.message}
                                </span>
                            </div>
                            <div>
                                <input type="password" placeholder='contraseña' className='form-control '
                                    {...register("password", {
                                        required: "este campo es obligatorio",
                                        minLength: {
                                            value: 8,
                                            message: "la cantidad minima de caracteres es de 8"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "la cantidad maxima de caracteres es de 20"
                                        }
                                    })}
                                />
                                {errors.password?.message}
                            </div>
                            <button className='btn btn-warning w-100 mt-4'>Iniciar Sesion</button>
                            <div className='d-flex justify-content-center align-items-center flex-column  mt-3'>
                                <span>¿No tienes una cuenta?</span>
                                <a href="/registro" className='text-primary'>Registrate</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;