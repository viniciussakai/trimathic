import { useClassStore } from "@/context/class";
import ClassService from "@/services/class";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export const useScreens = (screens: Array<any>) => {
  const { activeScreen, resetScreens } = useClassStore((state) => state);
  const [progress, setProgress] = useState(0);
  const { id = "" } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const completeCurrentScreen = async () => {
    console.log(await ClassService.update(id));
  };

  useEffect(() => {
    const hasNextLesson = activeScreen < screens.length;
    setProgress((activeScreen * 100) / screens.length);

    if (!hasNextLesson) {
      resetScreens();
      completeCurrentScreen();
      router.replace("/learn");
    }
  }, [activeScreen]);

  return { progress, activeScreen };
};
