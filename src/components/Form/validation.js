const regExEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default function validate(formData) {
  let errors = {};
  if (!formData.email) errors = { ...errors, email: 'El correo es necesario.' };
  else if (!regExEmail.test(formData.email))
    errors = { ...errors, email: 'El correo es inválido.' };
  else if (formData.email.length > 35)
    errors = {
      ...errors,
      email: 'El correo no debe contener mas de 35 caracteres',
    };
  else errors = {};
  if (!formData.password)
    errors = { ...errors, password: 'El password es necesario.' };
  else if (!/\d/.test(formData.password))
    errors = {
      ...errors,
      password: 'El password debe contener al menos un número.',
    };
  else if (formData.password.length > 10 || formData.password.length < 6)
    errors = {
      ...errors,
      password: 'El password debe contener entre 6 y 10 caracteres.',
    };
  else errors = { ...errors };
  return errors;
}
