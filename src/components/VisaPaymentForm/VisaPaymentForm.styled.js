import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.borderRadius}px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
