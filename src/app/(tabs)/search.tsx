import { ItemSearched } from "@/components/ItemSearched";
import { Box, Container, Text } from "@/components/UI";
import { Input } from "@/components/UI/Input";
import { database } from "@/database";
import { Class } from "@/database/models/Class";
import { Q } from "@nozbe/watermelondb";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const clean_title = (str: string) => {
  const newStr = str.replaceAll("_", " ");
  const words = newStr.split(" ");
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

export default function TabSearch() {
  const router = useRouter();
  const [classes, setClasses] = useState<Class[]>([]);
  const [search, setSearch] = useState("");

  const fetchClasses = async (serchParam: string) => {
    try {
      return database.collections
        .get<Class>("classes")
        .query(Q.where("name", Q.like(`%${serchParam}%`)))
        .fetch();
    } catch (e) {
      return [];
    }
  };

  useEffect(() => {
    fetchClasses(search).then((classes) => setClasses(classes));
  }, [search]);

  return (
    <Container>
      <Box>
        <Box minHeight={100} backgroundColor="primary" padding="lg">
          <Text variant="heading">Escolha suas Lições</Text>
        </Box>
        <Box
          margin="md"
          style={{ marginTop: -30 }}
          backgroundColor="mainBackground"
        >
          <Input icon="search" value={search} onChangeText={setSearch} />
        </Box>
      </Box>

      <FlatList
        style={{ padding: 8 }}
        data={classes}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => router.push(`/lesson/${item.name}?id=${item.id}`)}
            >
              <ItemSearched
                key={item.id}
                is_completed={item.is_complete === "verdadeiro"}
                name={clean_title(item.name)}
              />
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}
