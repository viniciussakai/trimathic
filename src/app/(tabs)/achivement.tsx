import { Box, Container, Row, Text } from "@/components/UI";
import { ProgressCircle } from "@/components/UI/ProgressCircle";
import { database } from "@/database";
import { Class } from "@/database/models/Class";
import { Q } from "@nozbe/watermelondb";
import { useEffect, useState } from "react";

export default function TabAchivement() {
  const [complete, setComplete] = useState(0);
  const [unit1, setUnit1] = useState(0);
  const [unit2, setUnit2] = useState(0);

  const fetchClasses = async () => {
    try {
      const complete = await database.collections
        .get<Class>("classes")
        .query(Q.where("is_complete", "verdadeiro"))
        .fetchCount();

      const unit1complete = await database.collections
        .get<Class>("classes")
        .query(
          Q.where("is_complete", "verdadeiro"),
          Q.and(Q.where("unit", "Area figuras Planas"))
        )
        .fetchCount();

      const unit2complete = await database.collections
        .get<Class>("classes")
        .query(
          Q.where("is_complete", "verdadeiro"),
          Q.and(Q.where("unit", "Trigonometria e Angulos"))
        )
        .fetchCount();

      setComplete((complete * 100) / 13);
      setUnit1((unit1complete * 100) / 7);
    } catch (e) {
      return [];
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <Container padding="lg">
      <Text variant="heading" color="textDisplay" textAlign="center" m="xxl">
        Suas Conquistas
      </Text>

      <Row
        padding="md"
        gap="md"
        marginBottom="sm"
        alignContent="center"
        borderWidth={2}
        borderRadius="md"
        borderColor="secundary"
        backgroundColor="greenSection"
      >
        <ProgressCircle
          percent={complete}
          radius={40}
          borderWidth={10}
          color="#FFC800"
          shadowColor="#E5E5E5"
          bgColor="#fff"
        >
          <Text>{Math.round(complete)}%</Text>
        </ProgressCircle>
        <Box alignItems="flex-start" justifyContent="center">
          <Text variant="paragraph" color="constrastText" fontWeight="900">
            Trimathic
          </Text>
          <Text variant="paragraph" color="constrastText" fontWeight="bold">
            {Math.round(complete)}% de Conclusão
          </Text>
        </Box>
      </Row>

      <Row
        padding="md"
        gap="md"
        marginBottom="sm"
        alignContent="center"
        borderWidth={2}
        borderRadius="md"
        borderColor="secundary"
        backgroundColor="redSection"
      >
        <ProgressCircle
          percent={unit1}
          radius={40}
          borderWidth={10}
          color="#FFC800"
          shadowColor="#E5E5E5"
          bgColor="#fff"
        >
          <Text>{Math.round(unit1)}%</Text>
        </ProgressCircle>
        <Box alignItems="flex-start" justifyContent="center">
          <Text variant="paragraph" color="constrastText" fontWeight="900">
            Unidade 1
          </Text>
          <Text variant="paragraph" color="constrastText" fontWeight="bold">
            {Math.round(unit1)}% de Conclusão
          </Text>
        </Box>
      </Row>

      <Row
        padding="md"
        gap="md"
        marginBottom="sm"
        alignContent="center"
        borderWidth={2}
        borderRadius="md"
        borderColor="secundary"
        backgroundColor="blueSection"
      >
        <ProgressCircle
          percent={unit2}
          radius={40}
          borderWidth={10}
          color="#FFC800"
          shadowColor="#E5E5E5"
          bgColor="#fff"
        >
          <Text>{Math.round(unit2)}%</Text>
        </ProgressCircle>
        <Box alignItems="flex-start" justifyContent="center">
          <Text variant="paragraph" color="constrastText" fontWeight="900">
            Unidade 2
          </Text>
          <Text variant="paragraph" color="constrastText" fontWeight="bold">
            {Math.round(unit2)}% de Conclusão
          </Text>
        </Box>
      </Row>
    </Container>
  );
}
