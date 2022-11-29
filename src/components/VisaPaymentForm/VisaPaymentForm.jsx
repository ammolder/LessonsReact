import { Formik } from 'formik';
import { Form } from './VisaPaymentForm.styled';
import { FormField } from '../FormField/FormField';
import { paymentSchema } from '../../validation';

const initialValues = {
  cardHolder: '',
  cardNumber: '',
  cvv: '',
};

export const VisaPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    console.log('values :', values);
    setTimeout(() => actions.setSubmitting(false), 2000);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={paymentSchema}
    >
      {({ isSubmitting }) => {
        console.log('isSubmitting :', isSubmitting);
        return (
          <Form>
            <FormField label="Card holder" name="cardHolder" />
            <FormField label="Card Number" name="cardNumber" />
            <FormField label="CVV" name="cvv" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Attempting to pay...' : 'Pay'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
