import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Menu from '../screens/MainMenu';
import Loading from '../screens/Loading';
import Profile from '../screens/Profile';
import Notif from '../screens/Notification';
//import Test from '../screens/connectdb';

const StackNavigatorOptions = {
    headerShown: false
}
const AppNavigator = createStackNavigator({
    Loading: { screen : Loading},
    Login: { screen: Login },
    Register: { screen: Register },
    Menu: { screen : Menu},
    Notif: { screen : Notif},
    Profile: { screen : Profile}
},
    {
        defaultNavigationOptions: StackNavigatorOptions
    }
);

export default createAppContainer(AppNavigator);