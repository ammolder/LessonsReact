import { useForm } from './FormProvider';

export const Form = ({ children }) => {
  const ctx = useForm();
  console.log('ctx :', ctx);

  const handleSubmit = e => {
    e.preventDefault();
    ctx.handleSubmit('some form values');
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};
