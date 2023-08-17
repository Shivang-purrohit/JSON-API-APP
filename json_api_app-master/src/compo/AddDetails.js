import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'





export default function AddDetails() {
 const formik=useFormik({
    initialValues: {
      name:"",
      id: "",
      price:"",
      Material:"",
      image:""
     
      
    },
    onSubmit:values=>{
      fetch("http://localhost:3030/products",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        console.log("Product Added successfully");
      })
    },
    validationSchema:yup.object().shape({
      name: yup.string()
      .min(3,"Name is too short")
      .max(10,"Enter valid price")
      .required('Product name is required'),
      price: yup.string()
      .min(3,"price is not valid")
      .max(10,"price is too expensive")
      .required('price is required'),
    })
  })
  return (

             
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                <input type="text" id='name'onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='name' className="form-control" placeholder="Product name"/>
                {formik.errors.name && formik.touched.name?<span className='text-danger'>{formik.errors.name}</span>:null}
               </div>
               <div className="mb-3">
                <input type="number" id="price" onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.price}name="price" className="form-control" placeholder="Price"/>
                {formik.errors.price && formik.touched.price?<span className='text-danger'>{formik.errors.price}</span>:null}
               </div>
               <div className="mb-3">
                <input type="text" id="Material"  onChange={formik.handleChange} value={formik.values.Material} name="Material" className="form-control" placeholder="Material"/>
               </div>
               <div className="mb-3">
                <input type="number" id="id"  onChange={formik.handleChange} value={formik.values.id} name="id" className="form-control" placeholder="Id"/>
               </div>
               <div className="mb-3">
                <input type="text" id="image"  onChange={formik.handleChange} value={formik.values.image} name="image" className="form-control" placeholder="Image"/>
               </div>
              
               <div className="mb-3">
               <input type="submit"className="btn btn-danger col-12" value="Submit" />
               </div>
                </form>
           
  )
}


