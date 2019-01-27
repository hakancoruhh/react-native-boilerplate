import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default {
  width,
  height,
  platform: Platform.OS,
  platformVersion: Platform.Version
};
