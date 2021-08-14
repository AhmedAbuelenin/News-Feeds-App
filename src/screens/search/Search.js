/* eslint-disable react-hooks/exhaustive-deps */
import I18n from 'i18n-js';
import React, {useCallback, useState} from 'react';
import {
  AppHeader,
  AppInput,
  AppSafeAreaView,
  AppStatusBar,
  AppView,
  colors,
  routes,
} from '../../common/base/index';

const Search = ({navigation}) => {
  const [text, setText] = useState('');

  const handleChange = useCallback(value => setText(value), [text]);

  const handleSearch = useCallback(() => {
    navigation.navigate(routes.home, {keyword: text});
  }, [text]);

  return (
    <AppSafeAreaView flex>
      <AppStatusBar />
      <AppHeader row centerX backBtn hTitle={I18n.t('linkDevelop')} />
      <AppView grow bgrdColor={colors.lightGrey4}>
        <AppInput
          pholder={I18n.t('searchHere')}
          value={text}
          onChangeText={handleChange}
          onSubmit={handleSearch}
        />
      </AppView>
    </AppSafeAreaView>
  );
};

export default Search;
