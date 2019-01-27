import { AppLoading, Font } from "expo";
import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "../App";

export interface State {
  isLoading: boolean;
  isReady: boolean;
  store: any;
}
export default class Setup extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      isReady: false,
      store: configureStore()
    };
  }

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
