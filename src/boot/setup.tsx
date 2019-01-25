import {AppLoading,Font} from "expo";
import * as React from "react";
import { Provider } from "react-redux";


import App from "../App";

export interface State {
  store: object;
  isLoading: boolean;
  isReady: boolean;
}
export default class Setup extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <AppLoading />;
    }
    return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
    );
  }
}
