import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AddProfileSchema } from '../../utils/schemas';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAddProfile }) => {
  const handleSubmit = (values, actions) => {
    onAddProfile(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddProfileSchema}
    >
      <Form>
        <span>Name:</span>
        <Field type="text" name="name"></Field>
        <ErrorMessage name="name" component="span" />
        <span>Phone:</span>
        <Field type="text" name="number"></Field>
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
