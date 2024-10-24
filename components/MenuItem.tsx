import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./ui/text";

const MenuItem = ({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: JSX.Element;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center p-4 justify-between"
    >
      <View className="flex-row items-center gap-5">
        {icon}
        <Text className=" font-poppins-regular text-lg">{label}</Text>
      </View>

      <ChevronRight className="h-6 w-6" color={"#fff"} />
    </TouchableOpacity>
  );
};

export default MenuItem;
