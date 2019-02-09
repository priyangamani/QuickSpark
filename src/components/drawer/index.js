import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig,getEmptyHeader } from '../../utils/navigation';
import NavBarItem from '../common/NavBarItem';
import ScannerScreen from '../scannerScreen';
import CodeScreen from '../createCodeScreen';
import * as Colors from '../../themes/colors';

const getDrawerItem = navigation => (
  <NavBarItem
    iconName="bars"
    onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);

/*const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);*/

const scanNavOptions = getDrawerNavigationOptions('Spark It/Scan', Colors.white, 'white');
const codeNavOptions = getDrawerNavigationOptions('Create a Code', Colors.pink, 'white');
const manageNavOptions = getDrawerNavigationOptions('Manage My Code', Colors.pink, 'white');
const campaignsNavOptions = getDrawerNavigationOptions('Code Campaigns', Colors.pink, 'white');



const Drawer = DrawerNavigator({
  ScannerScreen: { screen: ScannerScreen, navigationOptions: scanNavOptions },
  CodeScreen: { screen: CodeScreen, navigationOptions: codeNavOptions },
  MangeScreen: { screen: CodeScreen, navigationOptions: manageNavOptions },
  CampaignScreen: { screen: CodeScreen, navigationOptions: campaignsNavOptions }

},
getDrawerConfig(300, 'left', 'ScannerScreen'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('QuickSpark', Colors.pink, 'white', getDrawerItem(navigation));

export default Drawer;
