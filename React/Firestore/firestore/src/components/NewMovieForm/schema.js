import * as yup from 'yup';

export const schema = yup.object({
  title: yup.string().required('Please enter a title'),
  year: yup.number().required('Please enter a year').min(1900).max(2025),
  image: yup
    .string()
    .required('Please enter an image')
    .url('Image must be a URL'),
  director: yup.string().required('Please enter a director'),
});
