import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Item, { SLIDER_WIDTH, ITEM_WIDTH } from '../item';
import Welcome from '../../welcome';
import Choose from '../../choose';
import Form from '../../form';

const data = [
  {screen: <Choose/>},
  {screen: <Form/>},
  {screen: <Welcome/>}
]

export default () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View style={{flex: 1}}>
      <Carousel
        layout="default" //default - tinder - stack
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={Item}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => {
          setIndex(index)
          console.log(index)
        }}
        useScrollView={false}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={false}
      />
    </View>
  )
}