import { ItemSearched } from "@/components/ItemSearched";
import { Container } from "@/components/UI";
import { Input } from "@/components/UI/Input";
import { database } from "@/database";
import { Class } from "@/database/models/Class";
import { Q } from "@nozbe/watermelondb";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";

export default function TabSearch() {
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
      <Input icon="search" value={search} onChangeText={setSearch} />

      <FlatList
        data={classes}
        renderItem={({ item }) => {
          return (
            <ItemSearched
              key={item.id}
              is_completed={item.is_complete}
              name={item.name}
            />
          );
        }}
      />
    </Container>
  );
}
