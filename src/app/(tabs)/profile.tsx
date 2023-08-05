import { Box, Button, Container, Text } from "@/components/UI";
import { Input } from "@/components/UI/Input";
import { useAuth } from "@/context/auth";

export default function TabProfile() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Input icon="bar-chart-2" />
      <Button variant="primary" onPress={() => signOut()} label="Sair" />
    </Container>
  );
}
