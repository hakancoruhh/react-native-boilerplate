import { StackNavigator } from "react-navigation";

const AppNavigator = StackNavigator({});

export default AppNavigator;

export const navReducer = (state: any, action: any) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
