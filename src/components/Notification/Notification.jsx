import { FaRegSadTear } from 'react-icons/fa';
import css from './Notification.module.css';

export const Notification = () => {
  return (
    <p className={css.text}>
      NO FEEDBACK YET <FaRegSadTear size={25} />
    </p>
  );
};
