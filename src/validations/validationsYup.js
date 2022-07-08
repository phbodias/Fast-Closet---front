import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().min(3).max(45).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(25)
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(25)
})