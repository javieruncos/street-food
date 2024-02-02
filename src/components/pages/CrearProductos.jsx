import React from 'react';
import "../../assets/style/CrearProducto.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { crearProductoApi } from '../../helpers/app';
import Swal from 'sweetalert2';

const CrearProductos = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        crearProductoApi(data).then((respuesta) => {
            if (respuesta.status === 201) {
                Swal.fire("producto creado", "el producto fue creado correctmente", "success")
                navigate("/administrador")
            } else {
                Swal.fire("Error", "Error al intentar crear el producto", "error")
            }
        })
    }


    return (
        <div className='pt-5'>
            <h2 className='text-center my-5 pt-5'>Nuevo Producto</h2>
            <div className='container w-100 mt-5'>
                <form className='d-flex flex-column  mx-auto formAddProduct my-5' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre del Producto</Form.Label>
                        <Form.Control type="text"
                            {...register("nombreProducto", {
                                required: "este campo el obligatorio",
                                minLength: {
                                    value: 10,
                                    message: "la cantidad minima de caracteres es de 10 "
                                },
                                maxLength: {
                                    value: 100,
                                    message: "la cantidad maxima de caracteres es de 200"
                                }

                            })}
                        />
                         <Form.Text className="text-danger">
                             {errors.nombreProducto?.message}
                        </Form.Text>
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
                        />
                         <Form.Text className="text-danger">
                             {errors.imagen?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text"
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    </Form.Group>
                    <Form.Group className="mb-3 w" controlId="formBasicEmail">
                        <Form.Label>Descripcion del producto</Form.Label>
                        <textarea name="" id="" className='w-100 form-control'
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
                        <Form.Text className="text-danger">
                            {errors.ingredientes?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Select aria-label="Default select example"
                        {...register("categoria", {
                            required: "Debe seleccionar una categoria"
                        })}
                        defaultValue={"hamburguesa"}
                    >

                        <option value="Hamburguesa">Hamburguesa</option>
                        <option value="pizza">Pizza</option>
                        <option value="tacos">Tacos</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
                    <button className='btn btn-warning w-25 mt-5'>agregar producto</button>
                </form>
            </div>
        </div>
    );
};

export default CrearProductos;