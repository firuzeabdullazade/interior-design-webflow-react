import './ContactForm.scss';
import address from '../../../../../assets/icons/earth.svg';
import arrow from '../../../../../assets/icons/Arrow.svg';
import facebook from '../../../../../assets/icons/facebook.svg';
import instagram from '../../../../../assets/icons/instagram.svg';
import linkedin from '../../../../../assets/icons/in.svg';
import map from '../../../../../assets/images/Map.png';
import message from '../../../../../assets/icons/Icon message.svg';
import phone from '../../../../../assets/icons/phone.svg';
import twitter from '../../../../../assets/icons/twitter.svg';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    name: yup.string().required().min(2),
    email: yup.string().required().email(),
    subject: yup.string().required(),
    phone: yup.string().required(),
    reply: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const ContactForm = () => {
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

  return (
    <>
      <div className="contact-form">
        <h2>
          We love meeting new people <br /> and helping them.
        </h2>
        <div className="form-container">
          <div className="info">
            <div className="content">
              <div className="content-element">
                <img src={message} alt="" />
                <h3>info@interno.com</h3>
              </div>
              <div className="content-element">
                <img src={phone} alt="" />
                <h3>+1 (378) 400-1234</h3>
              </div>

              <div className="content-element">
                <img src={address} alt="" />
                <h3>www.interno.com</h3>
              </div>
            </div>
            <div className="icons">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="form-button">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Name <input type="text" {...register('name')} />
              </label>
              <p className="validation-error">{errors.name?.message}</p>
              <label>
                Email <input type="email" {...register('email')} />
              </label>
              <p className="validation-error">{errors.email?.message}</p>

              <label>
                Subject <input type="text" {...register('subject')} />
              </label>
              <p className="validation-error">{errors.subject?.message}</p>
              <label>
                Phone <input type="number" {...register('phone')} />
              </label>
              <p className="validation-error">{errors.phone?.message}</p>
              <label className="comment">
                Hello Iam Intrested in.. <input type="text" {...register('reply')} />
              </label>
              <p className="validation-error">{errors.reply?.message}</p>
              <button>
                Send now
                <img src={arrow} alt="" />
              </button>
            </form>
          </div>
        </div>
        <img src={map} alt="" />
      </div>
    </>
  );
};
