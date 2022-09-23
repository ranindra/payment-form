import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const InputField = styled.div`
margin-bottom: 10px;
input{
    font-size: 16px;
    width: 100%;
    padding: 21px 15px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    outline: none;
    font-family: 'InterBold';
    margin: 0 !important;
    &#textarea {
        padding: 30px 15px 40px;
        &:focus {
            border: solid 1px #1BD97B;
        }
        &:focus + label,
        &:not(:placeholder-shown) + label {
        font-size: 12px;
        transform: translate(1rem, -4rem);
        }
    }
    &:focus {
        border: solid 1px #1BD97B;
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
    font-size: 12px;
    transform: translate(1rem, -3.6rem);
    }
}
label {
    color: #8d8d8d;
    transform: translate(1rem, -2.5rem);
    transition: all 0.2s ease-out;
    margin-bottom: 0;
    font-weight: 500;
    position: absolute;
    pointer-events:none;
    &#textarea {
        margin-top: -20px;
    }
}
&.error {
    input{        
        border: solid 1px #FF8A00;
        &:focus {
            border: solid 1px #FF8A00;
        }
    }
}

`;

const FormsStyle = styled.div`
    display: flex;
        @media (max-width: 768px) {
            flex-wrap: wrap;
        }
        input {
            margin-bottom: 10px;
        }
    `;

const Field = styled.div`
        width: 400px;
        @media (max-width: 768px) {
            width: 100%;
            margin: 0px 30px 0 0;
        }
    `;

const DropshipField = styled.div`
        width: 300px;
        margin-left: 60px;
        @media (max-width: 768px) {
            width: 100%;
            margin: 0 30px 0 0;
        } 
    `;


function Delivery() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = (data) => {
        console.log(data);
    }
    const [addressCount, setAddressCount] = useState(0);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormsStyle>
                <Field>
                    <InputField
                    // className={errors.email && "error"}
                    >
                        <input
                            type="text"
                            placeholder=" "
                            {...register("email", {
                                required: true,
                                pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-zA-Z0-9-\\.]+)$/,

                            })}
                        />
                        <label>Email</label>
                    </InputField>

                    <InputField className={errors.phone && "error"}>
                        <input
                            type="text"
                            placeholder=" " {...register("phone", {
                                required: {
                                    value: true,
                                },
                                pattern: {
                                    value: /^[0-9+-]+$/,
                                },
                                minLength: {
                                    value: 6,
                                },
                                maxLength: {
                                    value: 20,
                                }
                            })}
                        />
                        <label>Phone Number</label>
                    </InputField>

                    <InputField className={errors.address && "error"}>
                        <input
                            id='textarea'                            
                            type="textarea"
                            placeholder=" " 
                            {...register("address", {
                                required: true,
                                maxLength: 120,
                                onChange:() => {
                                    console.log(getValues("address").length);
                                    setAddressCount(getValues("address").length)
                                }
                            })}
                           
                        />
                        <label id='textarea'>Address {addressCount <= 0 ? "" : " ("+(120-addressCount)+"/120)"}</label>
                    </InputField>
                </Field>
                {/* <DropshipField>
                    <Input placeHolder="Email Dropshipper" />
                    <Input placeHolder="Phone Number Dropshipper" />
                </DropshipField> */}
            </FormsStyle>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Delivery;