import { timing } from "app/theme";
import { LayoutAnimation } from "react-native";


export const toggleAnimation = {
  duration: timing.quick,
  update: {
    duration: timing.quick,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut
  },
  delete: {
    duration: timing.super_quick,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut
  }
}