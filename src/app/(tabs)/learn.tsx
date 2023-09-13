import React, { useEffect, useState } from "react";

import { CheckPoint } from "@/components/CheckPoint";
import { Container, Row } from "@/components/UI";
import { database } from "@/database";
import { Class } from "@/database/models/Class";
import { useRouter } from "expo-router";
import { groupBy } from "lodash";

const justifyContent = ["flex-end", "center", "flex-start"];

export default function TabLearn() {
  const router = useRouter();
  const [classes, setClasses] = useState<Class[]>();
  const [classGroup, setClassGroup] = useState([]);

  const fetchClasses = async () => {
    try {
      const classes = await database.collections
        .get<Class>("classes")
        .query()
        .fetch();

      setClasses(classes);
    } catch (e) {
      return [];
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const renderLesson = ({ item, index }: { item: Class; index: number }) => {
    const content = index % 3;
    const icons = ["book-open", "trophy", "star"];

    return (
      <Row
        justifyContent={justifyContent[content] as any}
        paddingHorizontal="unitSpacing"
        padding="lg"
      >
        <CheckPoint
          icon={icons[content]}
          onPress={() => router.push(`/lesson/${item.name}?id=${item.id}`)}
        />
      </Row>
    );
  };

  useEffect(() => {
    const groupedList = Object.values(groupBy(classes, (n) => n.unit));

    const data = groupedList.map((item, index) => {
      return {
        title: `Unidade ${item[0].unit}`,
        index: index + 1,
        data: [...item],
      };
    });

    setClassGroup(data as any);
  }, [classes]);

  return (
    <>
      <Container>
        {/* <SectionList
          sections={classGroup}
          keyExtractor={(item, index) => item.id}
          ListHeaderComponent={
            <>
              <HomeHero />
              <Text
                variant="heading"
                color="textDisplay"
                textAlign="center"
                m="lg"
              >
                Seu Progresso
              </Text>
            </>
          }
          renderSectionHeader={({ section: { title, data, index } }) => (
            <UnitTitle
              title={"Unidade " + index}
              index={index}
              description="Conceito sobre area de figuras"
            />
          )}
          renderItem={renderLesson}
        /> */}
        <CheckPoint
          icon={"check"}
          onPress={() => router.push(`/lesson/circulo?id=1`)}
        />
      </Container>
    </>
  );
}
