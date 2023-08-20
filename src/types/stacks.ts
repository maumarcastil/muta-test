import { type BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export enum StackNames {
    Home = 'Inicio',
    Wallet = 'Billetera',
    Profile = 'Perfil',
    Collections = 'Recolecciones',
}


export interface OptionsTabBarScreens {
    Home: BottomTabNavigationOptions
    Wallet: BottomTabNavigationOptions
    Profile: BottomTabNavigationOptions
    Collections: BottomTabNavigationOptions
}