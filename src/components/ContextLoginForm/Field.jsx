import { useForm } from './FormProvider';

export const Field = ({ type = 'text', name }) => {
  const ctx = useForm();
  console.log('ctx :', ctx);

  return (
    <input
      type={type}
      value={ctx.state[name]}
      onChange={e => ctx.handleChange(name, e.target.value)}
    />
  );
};
