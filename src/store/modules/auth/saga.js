import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    console.log('respone data', response.data);
    toast.success('Você fez login');

    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

    payload.history.push(payload.prevPath);
  } catch (e) {
    console.log(payload.location);
    toast.error('Usuário ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  console.log('token ?', token);
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, usuario, email, password, tipo, history } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        usuario,
        email,
        password: password || undefined,
        tipo,
      });
      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess({ usuario, email, password, tipo }));

    } else {
      yield call(axios.post, '/users', {
        usuario,
        email,
        password,
        tipo,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ usuario, email, password, tipo }));
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
