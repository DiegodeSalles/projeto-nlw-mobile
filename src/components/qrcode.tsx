import QRCodeSvg from "react-native-qrcode-svg";

import { View } from "react-native";
import { colors } from "@/styles/colors";

type Props = {
  value: string;
  size: number;
};

export function QRCode({ value, size }: Props) {
  return (
    <View>
      <QRCodeSvg
        value={value}
        size={size}
        color={colors.white}
        backgroundColor="transparent"
      />
    </View>
  );
}
