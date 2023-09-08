import { useClassStore } from "@/store";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export const useScreens = (screens: Array<any>) => {
  const { activeScreen, resetScreens } = useClassStore((state) => state);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const hasNextLesson = activeScreen < screens.length;
    setProgress((activeScreen * 100) / screens.length);

    if (!hasNextLesson) {
      resetScreens();
      router.replace("/learn");
    }
  }, [activeScreen]);

  return { progress, activeScreen };
};
