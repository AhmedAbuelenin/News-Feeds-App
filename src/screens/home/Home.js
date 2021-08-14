/* eslint-disable react-hooks/exhaustive-deps */
import I18n from 'i18n-js';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {CONNECTION_ERROR, getArticlesPart1, getArticlesPart2} from '../../api';
import {
  AppHeader,
  AppSafeAreaView,
  AppStatusBar,
  AppText,
  AppView,
  routes,
  showError,
} from '../../common/base/index';
import Articles from '../../components/articles/Articles';
import {styles} from '../../components/articles/styles';

const Home = ({navigation, route}) => {
  const keyword = route.params?.keyword;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    if (data.length > 0 && keyword) {
      getMatchResults();
    }
  }, [keyword]);

  const getMatchResults = () => {
    setFiltered(
      data.filter(obj =>
        obj.title.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
  };

  const handleRefresh = useCallback(() => {
    resetFiltered();
    fetchArticles();
  }, [loading, data]);

  const resetFiltered = () => {
    setFiltered('');
  };

  const fetchArticles = async () => {
    try {
      let array;
      setLoading(true);
      const res1 = await getArticlesPart1();
      const res2 = await getArticlesPart2();
      array = [...res1.articles, ...res2.articles];
      setData(array);
    } catch (error) {
      if (error.type === CONNECTION_ERROR) {
        showError(I18n.t('ui-networkConnectionError'));
      } else {
        showError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleArticle = useCallback(
    title => {
      const selected = getSelectedArticle(title);
      navigToDetails(selected);
    },
    [data],
  );

  const getSelectedArticle = value => {
    return data.filter(obj => obj.title === value)[0];
  };

  const navigToDetails = useCallback(selected => {
    navigation.navigate(routes.details, selected);
  }, []);

  const navigToSearch = useCallback(() => {
    navigation.navigate(routes.search);
  }, []);

  return (
    <AppSafeAreaView flex>
      <AppStatusBar />
      <AppHeader
        row
        centerX
        menu
        search
        hTitle={I18n.t('linkDevelop')}
        onRightIcPress={navigToSearch}
      />
      <AppView grow defHPad defBPad style={styles.ct2}>
        <Articles
          loading={loading}
          data={filtered || data}
          refreshing={loading}
          onRefresh={handleRefresh}
          onPress={handleArticle}
        />
      </AppView>
    </AppSafeAreaView>
  );
};

export default Home;
