import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { editarProductoApi, obtenerProductoID } from '../../helpers/app';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const EditarProducto = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        obtenerProductoID(id).then((respuesta) => {
            console.log(respuesta)
            if(respuesta.status === 200) {
                setValue("nombreProducto", respuesta.datos.nombreProducto)
                setValue("imagen", respuesta.datos.imagen)
                setValue("precio", respuesta.datos.precio)
                setValue("categoria", respuesta.datos.categoria)
                setValue("ingredientes", respuesta.datos.ingredientes)
                setValue("descripcion", respuesta.datos.descripcion)
            }
        })
    },[])


    const onSubmit = (data) => {
        console.log(data)
        editarProductoApi(id, data).then((respuesta) => {
            if (respuesta.status === 200) {
                Swal.fire("producto editado", "el producto fue editado correctmente", "success")
                navigate("/administrador")
            }
        })
    }

    

    return (
        <div className='pt-5'>
        <h2 className='text-center my-5 pt-5'>Editar Producto</h2>
        <div className='container'>
            <form className='d-flex flex-column  mx-auto formAddProduct my-5 w-75' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control type="text"
                        placeholder={errors.nombreProducto?.message}
                        {...register("nombreProducto", {
                            required: "este campo el obligatorio",
                            minLength: {
                                value: 10,
                                message: "la cantidad minima de caracteres es de 10 "
                            },
                            maxLength: {
                                value: 1000,
                                message: "la cantidad maxima de caracteres es de 200"
                            }

                        })}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Url de la imagen</Form.Label>
                    <Form.Control type="text"
                        {...register("imagen", {
                            required: "este campo el obligatorio",
                            pattern: {
                                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                                message: "Debe ingresar una URL valida"
                            }
                        })}
                        placeholder={errors.imagen?.message}
                    />
                    <Form.Text className="text-danger">
                        {errors.imagen?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text"
                        placeholder={errors.precio?.message}
                        {...register("precio", {
                            required: "este campo el obligatorio",
                            min: {
                                value: 50,
                                message: " el precio minimo es de 50 "
                            },
                            max: {
                                value: 10000,
                                message: " el precio maximo es de 1000"
                            }

                        })} />
                    <Form.Text className="text-danger">
                        {errors.precio?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 w" controlId="formBasicEmail">
                    <Form.Label>Descripcion del producto</Form.Label>
                    <textarea name="" id="" className='w-100 form-control'
                        placeholder={errors.descripcion?.message}
                        {...register("descripcion", {
                            required: "este campo es obligatorio",
                            minLength: {
                                value: 50,
                                message: "la cantidad minima de caracteres es de 50"
                            },
                            maxLength: {
                                value: 1000,
                                message: "la cantidad maxima de caracteres es de 1000"
                            }
                        })}
                    ></textarea>
                    <Form.Text className="text-danger">
                        {errors.descripcion?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingredientes</Form.Label>
                    <textarea name="" id="" className='form-control'
                       {...register("ingredientes", {
                        required: "este campo es obligatorio",
                        minLength: {
                            value: 50,
                            message: "la cantidad minima de caracteres es de 50"
                        },
                        maxLength: {
                            value: 1000,
                            message: "la cantidad maxima de caracteres es de 500"
                        }
                    })}
                    ></textarea>
                </Form.Group>
                <Form.Select aria-label="Default select example"
                    {...register("categoria", {
                        required: "Debe seleccionar una categoria"
                    })}
                    defaultValue={"hamburguesa"}
                >

                    <option value="Hamburguesa">Hamburguesa</option>
                    <option value="pizza">Pizza</option>
                    <option value="pasta">Pasta</option>
                </Form.Select>
                <Form.Text className="text-danger">
                    {errors.categoria?.message}
                </Form.Text>
                <button className='btn btn-warning w-25 mt-5'>Editar producto</button>
            </form>
        </div>
    </div>
    );
};

export default EditarProducto;