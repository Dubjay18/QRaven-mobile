import ProfilePic from "@/components/ProfilePic";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";

import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { VStack } from "@/components/ui/vstack";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { Calendar, ChevronDownIcon } from "lucide-react-native";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date(2003, 3, 18));
  const [showPicker, setShowPicker] = useState(false);

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowPicker(false);
    setDateOfBirth(currentDate);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <FormControl
        //   isInvalid={loginMutation.error || signupMutation.error}
        isInvalid={false}
        style={styles.container}
        className=" flex-1  max-w-[500px]  bg-background-0 m-2"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <VStack space="xl" className="pt-10" style={styles.inner}>
            <Heading
              size="3xl"
              className="text-typography-900 leading-7 font-poppins-semibold font-semibold  pt-3"
            >
              Profile
            </Heading>
            <VStack space="xs">
              <View className="items-center justify-center">
                <ProfilePic />
              </View>
            </VStack>
            <HStack space="xs">
              <Input variant="rounded" className="flex-1" size="xl">
                <InputField
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="First Name"
                  type="text"
                />
              </Input>
              <Input variant="rounded" className="flex-1" size="xl">
                <InputField
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Last Name"
                  type="text"
                />
              </Input>
            </HStack>
            <Input variant="rounded" size="xl">
              <InputField
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                type="text"
              />
            </Input>
            <Input variant="rounded" size="xl">
              <InputField
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                type="text"
              />
            </Input>

            <Select>
              <SelectTrigger variant="rounded" size="xl">
                <SelectInput className="w-[99%]" placeholder="Select option" />
                <SelectIcon className="mr-3 ml-auto" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Male" value="male" />
                  <SelectItem label="Female" value="female" />
                </SelectContent>
              </SelectPortal>
            </Select>

            <Input variant="rounded" size="xl" className="text-center">
              <InputField
                value={dateOfBirth.toDateString()}
                onChangeText={(text) => {
                  setDateOfBirth(new Date(text));
                }}
                type={"text"}
                placeholder="Date of Birth"
              />
              <InputSlot className="pr-3">
                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                <Pressable onPress={() => setShowPicker(true)}>
                  <InputIcon as={Calendar} className="text-typography-white" />
                </Pressable>
                {showPicker && (
                  <DateTimePicker
                    value={dateOfBirth}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                  />
                )}
              </InputSlot>
            </Input>
            <View className="flex-1"></View>
            <Button
              size="xl"
              className=""
              onPress={() => router.push("/categories")}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </VStack>
        </TouchableWithoutFeedback>
      </FormControl>
    </KeyboardAvoidingView>
  );

  return (
    <FormControl
      //   isInvalid={loginMutation.error || signupMutation.error}
      isInvalid={false}
      className="p-4 flex-1  max-w-[500px]  bg-background-0 m-2"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "height"}
        style={{ flex: 1, zIndex: 999 }}
        keyboardVerticalOffset={Platform.OS === "android" ? 75 : 0}
      >
        <VStack space="xl" className="pt-10">
          <Heading
            size="3xl"
            className="text-typography-900 leading-7 font-poppins-semibold font-semibold  pt-3"
          >
            Profile
          </Heading>
          <VStack space="xs">
            <View className="items-center justify-center">
              <ProfilePic />
            </View>
          </VStack>
          <HStack space="xs">
            <Input variant="rounded" className="flex-1" size="xl">
              <InputField
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
                type="text"
              />
            </Input>
            <Input variant="rounded" className="flex-1" size="xl">
              <InputField
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last Name"
                type="text"
              />
            </Input>
          </HStack>
          <Input variant="rounded" size="xl">
            <InputField
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              type="text"
            />
          </Input>
          <Input variant="rounded" size="xl">
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              type="text"
            />
          </Input>

          <Select>
            <SelectTrigger variant="rounded" size="xl">
              <SelectInput className="w-[99%]" placeholder="Select option" />
              <SelectIcon className="mr-3 ml-auto" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Male" value="male" />
                <SelectItem label="Female" value="female" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Input variant="rounded" size="xl" className="text-center">
            <InputField
              value={dateOfBirth.toDateString()}
              onChangeText={(text) => {
                setDateOfBirth(new Date(text));
              }}
              type={"text"}
              placeholder="Date of Birth"
            />
            <InputSlot className="pr-3">
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <Pressable onPress={() => setShowPicker(true)}>
                <InputIcon as={Calendar} className="text-typography-white" />
              </Pressable>
              {showPicker && (
                <DateTimePicker
                  value={dateOfBirth}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}
            </InputSlot>
          </Input>
        </VStack>
      </KeyboardAvoidingView>
    </FormControl>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
