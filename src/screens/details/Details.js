import I18n from 'i18n-js';
import moment from 'moment';
import React, {useCallback} from 'react';
import {Linking} from 'react-native';
import {
  AppButton,
  AppImage,
  AppSafeAreaView,
  AppStatusBar,
  AppText,
  AppView,
  colors,
  defStyles,
} from '../../common/base';
import AppHeader from '../../common/Header';
import AppScrollView from '../../common/ScrollView';
import {styles} from '../../components/articles/styles';

const Content = ({title, author, description}) => {
  return (
    <AppView defHPad style={styles.ct3}>
      <AppText numberOfLines={2} size={defStyles.size16}>
        {title}
      </AppText>
      <AppView style={styles.authDetails}>
        <AppText color={colors.lightGrey} size={defStyles.size12}>{`${I18n.t(
          'by',
        )} ${author}`}</AppText>
      </AppView>
      <AppText
        color={colors.lightGrey2}
        size={defStyles.size14}>{`${description}`}</AppText>
    </AppView>
  );
};

const Details = ({route}) => {
  const {author, title, description, publishedAt, urlToImage, url} =
    route.params;

  const goToWebsite = useCallback(() => {
    Linking.openURL(url);
  }, [url]);

  return (
    <AppSafeAreaView flex>
      <AppStatusBar />
      <AppHeader row centerX backBtn hTitle={I18n.t('linkDevelop')} />
      <AppView grow bgrdColor={colors.lightGrey4}>
        <AppScrollView ctStyle={defStyles.mHorizont3}>
          <AppView style={styles.details}>
            <AppView>
              <AppImage
                ctStyle={styles.img}
                source={{uri: urlToImage}}
                resizeMode={'stretch'}
              />
              <AppView absolute style={styles.date}>
                <AppText color={colors.white} size={defStyles.size12}>
                  {moment(publishedAt).format('MMM DD, YYYY')}
                </AppText>
              </AppView>
            </AppView>
            <Content {...{author}} {...{title}} {...{description}} />
          </AppView>
          <AppButton
            ctStyle={styles.btn}
            title={I18n.t('openWebsite')}
            onPress={goToWebsite}
          />
        </AppScrollView>
      </AppView>
    </AppSafeAreaView>
  );
};

export default Details;
