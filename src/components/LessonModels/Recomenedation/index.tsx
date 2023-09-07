import { Button, Column, Image, Text } from "@/components/UI";

import ImgRecomendation from "@/assets/images/lessons/recomendation.png";
interface IRecomendation {
  handleNextLesson: Function;
}
export default function Recomendation({ handleNextLesson }: IRecomendation) {
  return (
    <Column padding="sm" alignItems="center" paddingTop="xl">
      <Text
        fontSize={26}
        fontWeight="bold"
        color="textParagraph"
        textAlign="center"
      >
        Agora vamos fazer um exercicio para reforçar o conteúdo.
      </Text>

      <Image
        source={ImgRecomendation}
        flex={0.8}
        resizeMode="contain"
        marginTop="xl"
      />

      <Button
        variant="primary"
        label="Continuar"
        margin="md"
        onPress={() => handleNextLesson()}
      />
    </Column>
  );
}
