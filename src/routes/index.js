import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {onAuthStateChanged} from 'firebase/auth';
import {useAuthentication} from '../hooks/useAuthentication';
import {AuthProvider} from '../context/AuthContext';
import DrawerRout from './DrawerRout';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

//importando paginas
import Apresetacao from '../paginas/apresentacao';
import Credenciais from '../paginas/credenciais';
import CadastreSe from '../paginas/cadastrese';
import Login from '../paginas/login';
import Perfil from '../paginas/perfil';
import DetalhesReceita from '../paginas/receitas/detalhes';
import CadastroReceita from '../paginas/receitas/cadastro';
import ListaDeDespesas from '../paginas/despesas/listaDespesas';
import CadastroDespesa from '../paginas/despesas/cadastro';
import DetalhesDespesa from '../paginas/despesas/detalhes';

export default function Router() {
  //iniciando processo de autenticação
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  //escutando mudanças no usuario autenticado
  useEffect(() => {
    onAuthStateChanged(auth, user => [setUser(user)]);
    if (user) {
      navigate.navigate('drawer');
    }
  }, [auth, navigate, user]);

  //configuraçoes de rota
  const navigate = useNavigation();
  return (
    <AuthProvider value={{user}}>
      <Stack.Navigator>
        <Stack.Screen
          name="apresentacao"
          component={Apresetacao}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="credenciais"
          component={Credenciais}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="cadastreSe"
          component={CadastreSe}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="drawer"
          component={DrawerRout}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="perfil"
          component={Perfil}
          options={{
            headerTitle: 'Meu Dados',
          }}
        />
        <Stack.Screen
          name="detalhesReceita"
          component={DetalhesReceita}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="cadastroReceita"
          component={CadastroReceita}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="listaDespesas"
          component={ListaDeDespesas}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="cadastrarDespesa"
          component={CadastroDespesa}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="detalhesDespesa"
          component={DetalhesDespesa}
          options={{
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
}
