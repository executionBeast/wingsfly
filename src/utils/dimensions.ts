import { Dimensions } from "react-native";
const WINDOW = Dimensions.get('window')
export default WINDOW;
export const WINDOW_HEIGHT = WINDOW.height;
export const WINDOW_WIDTH = WINDOW.width;

export const FONTSCALE = (scale: number) => {
    return WINDOW.fontScale* scale * 10
};