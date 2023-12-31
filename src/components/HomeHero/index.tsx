import { useAuthStore } from "@/context/auth";
import { Box, Image, Text } from "../UI";
import { styles } from "./styles";

import LearnImage from "@/assets/images/learnImage.png";

export function HomeHero() {
  const { user } = useAuthStore();

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Box
      height={250}
      bg="cardPrimaryBackground"
      padding="md"
      flexDirection="row"
    >
      <Box style={styles.container}>
        <Text variant="heading">Olá, {capitalize(user?.name || "Aluno")}</Text>
        <Text variant="paragraphWhite" style={styles.p}>
          O que você deseja aprender hoje?
        </Text>
        <Image source={LearnImage} style={styles.image} />
      </Box>
    </Box>
  );
}
