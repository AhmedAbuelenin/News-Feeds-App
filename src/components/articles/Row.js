import I18n from 'i18n-js';
import moment from 'moment';
import React, {useCallback} from 'react';
import {AppImage, AppText, AppView, colors, defStyles} from '../../common/base';
import AppCard from '../../common/Card';
import {styles} from './styles';

const Row = ({item, onPress}) => {
  const {author, title, urlToImage, publishedAt} = item;

  const handlePress = useCallback(() => {
    onPress(title);
  }, [title, onPress]);

  return (
    <AppCard cardStyle={styles.card}>
      <AppView touchableView stretch onPress={handlePress}>
        <AppImage
          ctStyle={styles.img}
          source={{uri: urlToImage}}
          resizeMode={'stretch'}
        />
        <AppView defHPad style={styles.ct}>
          <AppText numberOfLines={2}>{title}</AppText>
          <AppView style={styles.author}>
            <AppText
              color={colors.lightGrey}
              size={defStyles.size12}>{`${I18n.t('by')} ${author}`}</AppText>
          </AppView>
          <AppView style={styles.ct4}>
            <AppView stretch colEnd>
              <AppText color={colors.lightGrey} size={defStyles.size12}>
                {moment(publishedAt).format('MMM DD, YYYY')}
              </AppText>
            </AppView>
          </AppView>
        </AppView>
      </AppView>
    </AppCard>
  );
};

export default Row;
