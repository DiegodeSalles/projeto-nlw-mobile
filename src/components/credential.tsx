import { Image, View } from "react-native";

export function Credential() {
  return (
    <View className="w-full self-stretch items-center">
      <Image source={require("@/assets/ticket/band.png")} />
    </View>
  );
}
