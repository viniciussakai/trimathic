import { Redirect, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text } from "@/components/UI";

export default function Index() {
  const router = useRouter();

  const isFirstTimeOpen = async () => {
    const isFirstTimeOpen = await AsyncStorage.getItem(
      "trimathic:isFirstTimeOpen"
    );
    return isFirstTimeOpen === null;
  };

  useEffect(() => {
    AsyncStorage.clear();

    isFirstTimeOpen().then(async (isFirstTimeOpen) => {
      console.log("primeira vez abrindo o app", isFirstTimeOpen);

      if (isFirstTimeOpen) {
        AsyncStorage.setItem("trimathic:isFirstTimeOpen", "false");
        router.replace("/(auth)/welcome");
      } else {
        router.replace("/(auth)/login");
      }
    });
  }, []);

  return (
    <>
      <Text>You are suppose to not see this page</Text>
    </>
  );
}
