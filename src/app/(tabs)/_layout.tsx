import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "@/styles/theme";

const useIcon = ({ props, name }: any) => {
  return <FontAwesome5 name={name} size={24} color={props.color} />;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secundaryText,

        tabBarStyle: {
          height: 60,
        },
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTitleStyle: {
          color: theme.colors.constrastText,
          paddingHorizontal: 20,
        },
      }}
    >
      <Tabs.Screen
        name="learn"
        options={{
          title: "Aprenda",
          tabBarIcon(props) {
            return useIcon({ props, name: "book" });
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Procure",
          tabBarIcon(props) {
            return useIcon({ props, name: "search" });
          },
        }}
      />
      <Tabs.Screen
        name="achivement"
        options={{
          title: "Conquistas",
          tabBarIcon(props) {
            return useIcon({ props, name: "medal" });
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon(props) {
            return useIcon({ props, name: "user-circle" });
          },
        }}
      />
    </Tabs>
  );
}
