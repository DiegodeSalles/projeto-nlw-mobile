import { useState } from "react";
import { View, Image, StatusBar, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Redirect } from "expo-router";

import { api } from "@/server/api";
import { useBadgeStore } from "@/store/badge-store";

import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";

export default function Home() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const badgeStore = useBadgeStore();

  async function handleAccessCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert("Ingresso", "Informe o código do ingresso!");
      }

      const { data } = await api.get(`/attendees/${code}/badge`);
      console.log(data.badge);
      badgeStore.save(data.badge);

      setIsLoading(true);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
      Alert.alert("Ingresso", "Ingresso não encontrado!");
    }
  }

  if (badgeStore.data?.checkInURL) {
    return <Redirect href="/ticket" />;
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center">
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-5/6 mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            keyboardType="number-pad"
            onChangeText={setCode}
          />
        </Input>
        <Button
          isLoading={isLoading}
          title="Acessar credencial"
          onPress={handleAccessCredential}
        />
        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
