import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeContainer from "../containers/HomeContainer";
const AppNavigator = createStackNavigator({
  HomePage: {
    screen: HomeContainer
  }
});

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default AppNavigatorContainer;

export const navReducer = (state: any, action: any) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
