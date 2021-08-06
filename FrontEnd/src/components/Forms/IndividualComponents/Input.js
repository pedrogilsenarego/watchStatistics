import React from 'react'
import styled from "styled-components"
import {Field, ErrorMessage } from "formik"
import TextError from './TextError';

const FormControlStyle = styled.div`
    display: block;   
    
    margin-bottom: 20px;
    border-radius: 4px;
      
`

function Input(props) {
    const { label, name, ...rest} = props
    return (
        <FormControlStyle>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
            
        </FormControlStyle>
    )
}

export default Input