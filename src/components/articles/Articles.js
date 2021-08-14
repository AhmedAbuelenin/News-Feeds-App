/* eslint-disable react/prop-types */
import React, {useCallback} from 'react';
import {AppIndicator, AppList, AppView} from '../../common/base/index';
import Row from './Row';
import {styles} from './styles';

const Articles = ({data, loading, refreshing, onRefresh, onPress}) => {
  const length = data?.length;

  const renderItem = useCallback(
    ({item}) => {
      return <Row {...{item}} {...{onPress}} />;
    },
    [onPress],
  );

  return (
    <>
      {loading ? (
        <AppView center fullHeight>
          <AppIndicator {...{loading}} />
        </AppView>
      ) : (
        <AppList
          grow={length === 0}
          center={length === 0}
          {...{data}}
          {...{renderItem}}
          {...{refreshing}}
          {...{onRefresh}}
        />
      )}
    </>
  );
};

export default Articles;
