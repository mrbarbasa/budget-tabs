import React, { Component } from 'react';
import { Font } from 'expo';
import RootNavigator from './src/containers/RootNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Open Sans Light': require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
      'Open Sans': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'Open Sans Semi-bold': require('./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
      'Open Sans Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'Source Code Pro Light': require('./assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf'),
      'Source Code Pro': require('./assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf'),
      'Source Code Pro Semi-bold': require('./assets/fonts/Source_Code_Pro/SourceCodePro-Semibold.ttf'),
      'Source Code Pro Bold': require('./assets/fonts/Source_Code_Pro/SourceCodePro-Bold.ttf'),
      'Source Sans Pro Light': require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf'),
      'Source Sans Pro': require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf'),
      'Source Sans Pro Semi-bold': require('./assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf'),
      'Source Sans Pro Bold': require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf'),
    });

    this.setState({ fontsLoaded: true });
  }
  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return <RootNavigator />;
  }
}
