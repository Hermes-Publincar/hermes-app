import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Carousel from './src/ui/components/CustomCarousel';

const hideStatusBar = () => {
  StatusBar.setHidden(true);
};

class App extends React.Component {
  componentDidMount() {
    hideStatusBar();
  }

  render() {
    return (
      <SafeAreaView>
        <Carousel />
      </SafeAreaView>
    );
  }
}

export default App;
