import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2e78b7",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
        }}
      />
    </Tabs>
  );
}
