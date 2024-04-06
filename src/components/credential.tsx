import {
  Image,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import QRCode from "./qrcode";

type Props = {
  image?: string;
  onChangeAvatar?: () => void;
  onShowQRCode?: () => void;
};

export function Credential({ image, onChangeAvatar, onShowQRCode }: Props) {
  return (
    <View className="w-full self-stretch items-center">
      <Image
        className="w-24 h-52 z-10"
        source={require("@/assets/ticket/band.png")}
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite Summit</Text>
            <Text className="text-zinc-50 text-sm font-bold">#123</Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>
        {image ? (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image
              source={{ uri: image }}
              className="w-36 h-36 rounded-full -mt-[6.2rem] md:-mt-[6.4rem]"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-36 h-36 rounded-full -mt-[6.2rem] md:-mt-[6.4rem] bg-gray-400 items-center justify-center"
            onPress={onChangeAvatar}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text className="font-bold text-2xl text-zinc-50 mt-4">
          Diego de Salles
        </Text>

        <Text className="font-regular text-base text-zinc-300 mb-4">
          diegodesallesb@gmail.com
        </Text>

        <QRCode value="teste" size={120} />

        <TouchableOpacity
          onPress={onShowQRCode}
          activeOpacity={0.7}
          className="mt-6"
        >
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
