import PageWithForm from '../PageWithForm/PageWithForm';
import './Login.css';

export default function Login(props) {
  return (
    <section className="login">
      <PageWithForm
        title="Рады видеть!"
        btnText="Войти"
        name="login"
        inputId="current-password"
        linkTo="/sign-up"
        underBtnText="Ещё не зарегистрированы?"
        linkText="Регистрация"
        // onSubmit={onSignIn}
      >
      </PageWithForm>
    </section>
  );
}
