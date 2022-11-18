import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawe from '../componentes/customDrawer/CustomDrawer';

import Despesas from '../paginas/despesas/index';
import Receitas from '../paginas/receitas/index';
import Dashboard from '../paginas/dashboard';

const Drawer = createDrawerNavigator();

export default function DrawerRout() {
  return (
    <Drawer.Navigator drawerContent={CustomDrawe}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Despesas" component={Despesas} />
      <Drawer.Screen name="Receitas" component={Receitas} />
    </Drawer.Navigator>
  );
}
