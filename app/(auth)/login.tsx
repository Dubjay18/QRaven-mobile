import { FormControl } from "@/components/ui/form-control";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import { HStack } from "@/components/ui/hstack";
import { Link } from "expo-router";
import { Box } from "@/components/ui/box";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  //   if (isLoggedIn) {
  //     return <Redirect href={'/'} />;
  //   }

  return (
    <FormControl
      //   isInvalid={loginMutation.error || signupMutation.error}
      isInvalid={false}
      className="p-4 flex-1  max-w-[500px]  bg-background-0 m-2"
    >
      <VStack space="xl" className="pt-10">
        <Heading
          size="3xl"
          className="text-typography-900 leading-7 font-poppins-semibold font-semibold  pt-3"
        >
          Login
        </Heading>
        <VStack space="xs">
          <Input variant="rounded" size="xl">
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              type="text"
            />
          </Input>
        </VStack>
        <VStack space="xs">
          <Input variant="rounded" size="xl" className="text-center">
            <InputField
              value={password}
              onChangeText={setPassword}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <InputSlot className="pr-3" onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                className="text-typography-white"
              />
            </InputSlot>
          </Input>
        </VStack>
        <Button size="xl">
          <ButtonText>Login</ButtonText>
        </Button>
      </VStack>
      <VStack className="pt-10 h-3/5">
        <Box className="flex-row justify-center mt-4">
          <Link href={"/"} className="text-neutral-400">
            Forgot Password?
          </Link>
        </Box>
        <Box className="flex-row justify-center mt-auto mb-5">
          <Text className="text-neutral-400">
            Don't have an account?{" "}
            <Link href={"/"} className="underline text-white">
              Signup
            </Link>
          </Text>
        </Box>
      </VStack>
    </FormControl>
  );
}
