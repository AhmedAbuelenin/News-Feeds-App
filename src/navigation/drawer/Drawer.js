import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import I18n from 'i18n-js';
import React, {useCallback} from 'react';
import {
  AppIcon,
  AppImage,
  AppText,
  AppView,
  colors,
  defStyles,
  iconsType,
  images,
  responsiveWidth,
  routes,
  showInfo,
} from '../../common/base';
import Main from '../stack/Main';
import {styles} from './styles';

const UserInfo = () => {
  return (
    <AppView stretch row centerX style={styles.info}>
      <AppImage
        ctStyle={styles.avatar}
        source={images.profImg}
        resizeMode={'stretch'}
      />
      <AppView style={styles.ct}>
        <AppText color={colors.lightGrey2} size={defStyles.size13}>
          {I18n.t('welcome')}
        </AppText>
        <AppText size={defStyles.size13} numberOfLines={1}>
          {I18n.t('ahmedabuelenin')}
        </AppText>
      </AppView>
      <AppView colEnd style={styles.arrowCt}>
        <AppImage ctStyle={styles.arrow} source={images.arrow} />
      </AppView>
    </AppView>
  );
};

const CustomDrawerContent = ({props}) => {
  const handleChat = useCallback(() => {
    showInfo(I18n.t('liveChat'));
  }, []);

  const handleGallery = useCallback(() => {
    showInfo(I18n.t('gallery'));
  }, []);

  const handleWishList = useCallback(() => {
    showInfo(I18n.t('wishList'));
  }, []);

  const handleEMagazine = useCallback(() => {
    showInfo(I18n.t('eMagazine'));
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      style={{paddingStart: responsiveWidth(5)}}>
      <UserInfo />
      <DrawerItemList {...props} />
      <DrawerItem
        style={styles.drawerItemStyle}
        labelStyle={styles.drawerLabel}
        label={I18n.t('liveChat')}
        icon={() => (
          <AppIcon
            type={iconsType.ion}
            name={'chatbox-outline'}
            color={colors.lightGrey.color}
          />
        )}
        onPress={handleChat}
      />
      <DrawerItem
        style={styles.drawerItemStyle}
        labelStyle={styles.drawerLabel}
        label={I18n.t('gallery')}
        icon={() => (
          <AppIcon
            type={iconsType.evil}
            name={'image'}
            color={colors.lightGrey.color}
          />
        )}
        onPress={handleGallery}
      />
      <DrawerItem
        style={styles.drawerItemStyle}
        labelStyle={styles.drawerLabel}
        label={I18n.t('wishList')}
        icon={() => (
          <AppIcon
            type={iconsType.evil}
            name={'heart'}
            color={colors.lightGrey.color}
          />
        )}
        onPress={handleWishList}
      />
      <DrawerItem
        style={styles.drawerItemStyle}
        labelStyle={styles.drawerLabel}
        label={I18n.t('eMagazine')}
        icon={() => (
          <AppIcon
            type={iconsType.feather}
            name={'book-open'}
            color={colors.lightGrey.color}
          />
        )}
        onPress={handleEMagazine}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerPosition={'left'}
      initialRouteName={routes.main}
      drawerContent={props => <CustomDrawerContent {...{props}} />}>
      <Drawer.Screen
        name={routes.main}
        component={Main}
        options={{
          headerShown: false,
          title: I18n.t('explore'),
          drawerItemStyle: styles.drawerItemStyle,
          drawerLabelStyle: styles.drawerLabel,
          drawerActiveBackgroundColor: colors.white.color,
          drawerActiveTintColor: colors.black.color,
          drawerInactiveTintColor: colors.black.color,
          drawerIcon: ({size}) => (
            <AppIcon type={iconsType.material} name={'explore'} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
