import { Feather } from '@expo/vector-icons';
import HomePage from '@pages/HomePage';
import {
  type BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import CollectionsPage from '../pages/Collections';
import ProfilePage from '../pages/Profile';
import WalletPage from '../pages/WalletPage';
import { theme } from '../theme';
import { type OptionsTabBarScreens, StackNames } from '../types/stacks';

const Tab = createBottomTabNavigator();

const bottomTabNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: theme.colors.iconActive,
  tabBarInactiveTintColor: theme.colors.iconInactive,
  tabBarStyle: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderTopColor: theme.colors.backgroundSecondary,
  },
};

const optionsTabBarScreens: OptionsTabBarScreens = {
  Home: {
    tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
  Wallet: {
    tabBarIcon: ({ color }) => <Feather name="credit-card" size={24} color={color} />,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
  Collections: {
    tabBarIcon: ({ color }) => <Feather name="calendar" size={24} color={color} />,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
  Profile: {
    tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
};

const RootTabs = () => {
  return (
    <Tab.Navigator initialRouteName={StackNames.Home} screenOptions={bottomTabNavigationOptions}>
      <Tab.Screen name={StackNames.Home} component={HomePage} options={optionsTabBarScreens.Home} />
      <Tab.Screen
        name={StackNames.Wallet}
        component={WalletPage}
        options={optionsTabBarScreens.Wallet}
      />
      <Tab.Screen
        name={StackNames.Collections}
        component={CollectionsPage}
        options={optionsTabBarScreens.Collections}
      />
      <Tab.Screen
        name={StackNames.Profile}
        component={ProfilePage}
        options={optionsTabBarScreens.Profile}
      />
    </Tab.Navigator>
  );
};

export default RootTabs;
