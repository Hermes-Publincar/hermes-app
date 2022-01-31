import React, {Component} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  View,
  Linking,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from '../../styles/carousel';
import {
  IMG_COCACOLA,
  IMG_FERRARI,
  IMG_REDBULL,
  IMG_ROLEX,
  IMG_ZARA,
} from '../../resources/images/index';

function redirectTo(url) {
  Linking.openURL(url);
}

const carouselItems = [
  {
    image: IMG_COCACOLA,
    onClick: () => redirectTo('https://www.cocacola.es/'),
  },
  {
    image: IMG_FERRARI,
    onClick: () => redirectTo('https://www.ferrari.com/es-ES'),
  },
  {
    image: IMG_REDBULL,
    onClick: () => redirectTo('https://www.redbull.com/es-es/'),
  },
  {
    image: IMG_ZARA,
    onClick: () => redirectTo('https://www.zara.com/es/'),
  },
  {
    image: IMG_ROLEX,
    onClick: () => redirectTo('https://www.rolex.com/es'),
  },
];

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const renderItem = ({item, index}) => {
  // const isLastItem = carouselItems?.length === index + 1;
  return (
    <TouchableOpacity onPress={item.onClick} style={styles.mapBackgroundImage}>
      <Image source={item.image} style={styles.itemImage} />
    </TouchableOpacity>
  );
};

export default class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselRef: undefined,
    };
  }

  renderCarousel = () => {
    const {carouselRef} = this.state;
    return (
      <Carousel
        ref={ref => {
          carouselRef === undefined && ref && this.setState({carouselRef: ref});
        }}
        layout="default"
        data={carouselItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        sliderHeight={SLIDER_HEIGHT}
        itemHeight={SLIDER_HEIGHT}
        containerCustomStyle={styles.bottom}
        renderItem={item => renderItem(item)}
        onSnapToItem={index => this.setState({activeIndex: index})}
        autoplayInterval={5000}
        scrollEnabled={false}
        autoplay
        loop
      />
    );
  };
  render() {
    const {renderCarousel} = this;
    return (
      <View>
        <Text>asd</Text>
        {renderCarousel()}
      </View>
    );
  }
}
