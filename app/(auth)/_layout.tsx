import { Icon } from "@/components/ui/icon";
import { Stack, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable } from "react-native";

export default function AuthLayout() {
  const router = useRouter();
  const goBack = (can: boolean) => {
    if (can) {
      router.back();
    }
    return;
  };
  return (
    <Stack
      screenOptions={{
        headerLeft: ({ canGoBack }) => (
          <Pressable
            onPress={() => {
              goBack(canGoBack);
            }}
          >
            <Icon as={ChevronLeft} className="text-typography-900 text-3xl" />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="categories"
        options={{
          headerTitle: "",
        }}
      />
    </Stack>
  );
}
