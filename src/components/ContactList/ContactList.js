import s from './ContactList.module.css';

export const ContactList = ({ children }) => {
  return (
    { children } && (
      <section>
        <ul className={s.list}>{children}</ul>
      </section>
    )
  );
};
