import * as Yup from 'yup';

const phoneNumberRegex = /^[0-9]{7}$/;

export const AddProfileSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 20 characters')
    .required('Name is required'),
  number: Yup.string()
    .required('Phone is required')
    .matches(phoneNumberRegex, 'Invalid phone number. Phone must be ХХХ-ХХ-ХХ'),
});
