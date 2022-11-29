import * as Yup from 'yup';

// Yup.addMethod(Yup.string, 'numeric', function () {
//   return this.matches(/ˆ\d+$/, 'The field should have digits only');
// });

export const paymentSchema = Yup.object().shape({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string().length(16).required(),
  cvv: Yup.string().length(3).required(),
});
