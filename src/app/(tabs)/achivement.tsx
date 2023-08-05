import { Box, Container, Row, Text } from "@/components/UI";
import { ProgressCircle } from "@/components/UI/ProgressCircle";

export default function TabAchivement() {
  return (
    <Container padding="lg">
      <Text variant="heading" color="textDisplay" textAlign="center" m="xxl">
        Suas Conquistas
      </Text>

      {new Array(4).fill(0).map((_, index) => (
        <Row
          padding="md"
          gap="md"
          marginBottom="sm"
          alignContent="center"
          borderWidth={2}
          borderRadius="md"
          borderColor="secundary"
          key={index}
        >
          <ProgressCircle
            percent={80}
            radius={40}
            borderWidth={10}
            color="#FFC800"
            shadowColor="#E5E5E5"
            bgColor="#fff"
          >
            <Text>80%</Text>
          </ProgressCircle>
          <Box alignItems="center" justifyContent="center">
            <Text variant="paragraph" color="textDisplay" fontWeight="bold">
              80% de Conclusão
            </Text>
          </Box>
        </Row>
      ))}
    </Container>
  );
}
