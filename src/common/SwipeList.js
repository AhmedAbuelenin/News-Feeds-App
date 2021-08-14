/* eslint-disable react/prop-types */
import React from 'react'
import {Animated, TouchableOpacity, View} from 'react-native'
import {SwipeListView} from 'react-native-swipe-list-view'
import CategoryRow from '../components/CategoryRow'
import FoodItemRow from '../components/FoodItemRow'
import OfferRow from '../components/OfferRow'
import {styles} from '../resources/styles'
import {icons} from '../resources/icons'

const rowSwipeAnimatedValues = {}

const SwipeValueBasedUi = props => {
  const {
    screen,
    data,
    onDeleteRow,
    onEditRow,
    fetchMore,
    refreshStatus,
    onRefresh,
    disableSwipe
  } = props

  if (data) {
    Array(data.length)
      .fill('')
      .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0)
      })
  }

  const deleteRow = id => onDeleteRow(id)

  const editRow = id => onEditRow(id)

  const onSwipeValueChange = swipeData => {
    const {key, value} = swipeData
    rowSwipeAnimatedValues[key].setValue(Math.abs(value))
  }

  const renderItem = ({item}) => {
    switch (screen) {
      case strings.categories_screen_en:
        return <CategoryRow {...item} />
      case strings.food_item_screen_en:
        return <FoodItemRow {...item} />
      case strings.my_offers_screen_en:
        return <OfferRow {...item} />
      default:
        console.log('renderItem -> row is not selected')
        break
    }
  }

  const renderHiddenItem = ({item, index}) => (
    <View style={styles.rowBack}>
      <TouchableOpacity //trash
        style={[styles.backLeftBtn, styles.backLeftBtnLeft]}
        onPress={() => deleteRow(item.id)}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[index].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: 'clamp'
                  })
                }
              ]
            }
          ]}>
          {icons.trash}
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity //edit
        style={[styles.backLeftBtn, styles.backLeftBtnRight]}
        onPress={() => editRow(item.id)}>
        {icons.edit}
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container14}>
      <SwipeListView
        style={styles.listStyle}
        data={data}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={(_, i) => i.toString()}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={'0'}
        previewOpenValue={80}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
        refreshing={refreshStatus}
        onRefresh={onRefresh}
        disableRightSwipe={disableSwipe ? true : false}
        disableLeftSwipe={true}
      />
    </View>
  )
}

export default SwipeValueBasedUi
