import { Text } from "@/components/UI";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  const isFirstTimeOpen = async () => {
    await AsyncStorage.clear();

    const isFirstTimeOpen = await AsyncStorage.getItem(
      "trimathic:isFirstTimeOpen"
    );
    return isFirstTimeOpen === null;
  };

  useEffect(() => {
    isFirstTimeOpen().then(async (isFirstTimeOpen) => {
      if (isFirstTimeOpen) {
        AsyncStorage.setItem("trimathic:isFirstTimeOpen", "false");
        router.replace("/(auth)/welcome");
      } else {
        router.replace("/learn");
      }
    });
  }, []);

  return (
    <>
      <Text>You are suppose to not see this page</Text>
    </>
  );
}
