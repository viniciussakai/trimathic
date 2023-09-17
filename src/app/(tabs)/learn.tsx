import React, { useEffect, useState } from "react";

import { CheckPoint } from "@/components/CheckPoint";
import { HomeHero } from "@/components/HomeHero";
import { Container, Row, Text } from "@/components/UI";
import { UnitTitle } from "@/components/UnitTitle";
import { database } from "@/database";
import { Class } from "@/database/models/Class";
import { useRouter } from "expo-router";
import { groupBy } from "lodash";
import { SectionList } from "react-native";

const justifyContent = ["flex-end", "center", "flex-start"];

export default function TabLearn() {
  const router = useRouter();
  const [classes, setClasses] = useState<Class[]>();
  const [classGroup, setClassGroup] = useState([]);
  const [lastClass, setLastClass] = useState("");

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
    if (classes) {
      const nextLessonIndex =
        classes.findLastIndex((value) => value.is_complete === "verdadeiro") +
          1 || 1;
      const nextLesson = classes[nextLessonIndex];
      if (nextLesson) {
        setLastClass(nextLesson.name);
      }
    }
  }, [router]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const renderLesson = ({ item, index }: { item: Class; index: number }) => {
    const content = index % 3;
    const icons = ["book-open", "trophy", "star"];
    const isActive = lastClass === item.name;
    return (
      <Row
        justifyContent={justifyContent[content] as any}
        paddingHorizontal="unitSpacing"
        padding="sm"
      >
        <CheckPoint
          active={isActive}
          icon={icons[content]}
          onPress={() => {
            router.push(`/lesson/${item.name}?id=${item.id}`);
          }}
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
        <SectionList
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
              description={title}
            />
          )}
          renderItem={renderLesson}
        />
      </Container>
    </>
  );
}
