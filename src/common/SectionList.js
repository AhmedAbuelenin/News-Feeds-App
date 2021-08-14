/* eslint-disable react/prop-types */
import I18n from 'i18n-js'
import React, {useCallback} from 'react'
import {Alert} from 'react-native'
import {SectionList} from 'react-native'
import {AppView, AppText, defStyles, colors} from './base'

const EmptyComp = ({empTitle}) => (
  <AppView stretch center>
    <AppText size={defStyles.size16}>{empTitle}</AppText>
  </AppView>
)

const SecList = props => {
  const {
    style,
    cCtStyle,
    headerStyle = defStyles.bot2,
    grow,
    center,
    renderItem,
    headerColor = colors.lightGrey,
    sections,
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
    onRefresh
  } = props

  const handleKeyExtract = useCallback((_, index) => {
    return index.toString()
  }, [])

  const renderHeader = useCallback(({section: {title}}) => {
    return (
      <AppView style={headerStyle}>
        <AppText color={headerColor}>{title}</AppText>
      </AppView>
    )
  }, [])

  const _cCtStyle = [
    grow ? defStyles.grow : {},
    center ? defStyles.center : {},
    cCtStyle
  ]

  return (
    <SectionList
      {...{style}}
      contentContainerStyle={_cCtStyle}
      extraData={isUpdated}
      {...{sections}}
      {...{renderItem}}
      renderSectionHeader={renderHeader}
      keyExtractor={handleKeyExtract}
      initialNumToRender={initNumToRender}
      {...{horizontal}}
      {...{numColumns}}
      showsHorizontalScrollIndicator={showsHSIndicat}
      showsVerticalScrollIndicator={showsVSIndicat}
      keyboardDismissMode={'on-drag'}
      keyboardShouldPersistTaps={'never'}
      getItemLayout={itemLayout}
      onEndReached={fetchMore}
      onEndReachedThreshold={onEndReachThresh}
      ListEmptyComponent={emptyComp}
      {...{refreshing}}
      {...{onRefresh}}
    />
  )
}

export default SecList
