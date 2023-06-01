/* eslint-disable jsx-a11y/label-has-associated-control */
import './RegisterPage.scss';

import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    email: yup.string().required().email(),
    gender: yup.object({ value: yup.number().required().positive().integer() }),
    password: yup.string().required().min(6),
    repeatPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'passwords must match'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const RegisterPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // api call will be here a bit later =)
  const onSubmit = (data: FormData) => console.log(data);

  const genderOptions = [
    { value: 1, label: 'Male' },
    { value: 2, label: 'Female' },
    { value: 3, label: 'Other' },
  ];

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First name: <input type="text" {...register('firstName')} />
        </label>
        <p className="validation-error">{errors.firstName?.message}</p>
        <label>
          Last name: <input type="text" {...register('lastName')} />
        </label>
        <p className="validation-error">{errors.lastName?.message}</p>
        <label>
          Email: <input type="email" {...register('email')} />
        </label>
        <p className="validation-error">{errors.email?.message}</p>
        <label>
          Gender:
          <Controller
            name="gender" // for the gender field
            control={control} // obtained from the useForm hook
            render={({ field }) => (
              <CustomSelect options={genderOptions} placeholder="Choose a gender" field={field} />
            )}
          />
        </label>
        <label>
          Password: <input type="password" {...register('password')} />
        </label>
        <p className="validation-error">{errors.password?.message}</p>
        <label>
          Repeat password: <input type="password" {...register('repeatPassword')} />
        </label>
        <p className="validation-error">{errors.repeatPassword?.message}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
