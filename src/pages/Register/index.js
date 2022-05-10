import React, { useState} from 'react';
import { Container, Form } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import {isEmail} from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import PropTypes from 'prop-types';

export default function Register(props) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const tipoStored = useSelector((state) => state.auth.user.tipo);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const { history } = props;

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setUsuario(nomeStored);
    setEmail(emailStored);
    setTipo(tipoStored);
  }, [emailStored, id, nomeStored, tipoStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (usuario.length < 3 || usuario.length > 255 ) {
      formErrors = true;
      toast.error('Nome deve conter no mínimo 3 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve conter no mínimo 6 caracteres');
    }

    if (tipo === ''){
      formErrors = true;
      toast.error('Selecione um tipo de usuário');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ id, usuario, email, password, tipo, history }));
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar dados' : 'Novo usuário'}</h1>

      <Form onSubmit={handleSubmit}>
      <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}
        placeholder="Nome" />

      <input type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="E-mail" />

        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
        placeholder="Senha" />

        <select placeholder="Tipo de usuário" value={tipo} onChange={e => setTipo(e.target.value)}>
          <option >Tipo de usuário</option>
          <option value="medico">Médico</option>
          <option value="gerente">Gerente</option>
          <option value="secretaria">Secretária</option>
        </select>

        <button type="submit">{id ? 'Salvar' : 'Criar conta'}</button>
      </Form>
    </Container>
  );
}

Register.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
