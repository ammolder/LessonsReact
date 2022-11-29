import styled from 'styled-components';
import {
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Field = styled(FormikField)``;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
