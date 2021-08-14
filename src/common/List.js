/* eslint-disable react/prop-types */
import I18n from 'i18n-js';
import React, {useCallback} from 'react';
import {Alert} from 'react-native';
import {FlatList} from 'react-native';
import {AppView, AppText, defStyles} from './base';

const EmptyComp = ({empTitle}) => (
  <AppView stretch center>
    <AppText size={defStyles.size16}>{empTitle}</AppText>
  </AppView>
);

const List = props => {
  const {
    style,
    cCtStyle,
    grow,
    center,
    data,
    renderItem,
    itemLayout,
    empTitle = I18n.t('emptyCont'),
    emptyComp = <EmptyComp {...{empTitle}} />,
    showsHSIndicat = false,
    showsVSIndicat = false,
    numColumns,
    horizontal = false,
    onEndReachThresh = 0.5,
    initNumToRender = 5,
    isUpdated,
    fetchMore,
    refreshing,
    onRefresh,
  } = props;

  const handleKeyExtract = useCallback((_, index) => {
    return index.toString();
  }, []);

  const _cCtStyle = [
    grow ? defStyles.grow : {},
    center ? defStyles.center : {},
    cCtStyle,
  ];

  return (
    <FlatList
      style={style}
      contentContainerStyle={_cCtStyle}
      data={data}
      extraData={isUpdated}
      renderItem={renderItem}
      keyExtractor={handleKeyExtract}
      initialNumToRender={initNumToRender}
      horizontal={horizontal}
      numColumns={numColumns}
      showsHorizontalScrollIndicator={showsHSIndicat}
      showsVerticalScrollIndicator={showsVSIndicat}
      keyboardDismissMode={'on-drag'}
      keyboardShouldPersistTaps={'never'}
      getItemLayout={itemLayout}
      onEndReached={fetchMore}
      onEndReachedThreshold={onEndReachThresh}
      ListEmptyComponent={emptyComp}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default List;
