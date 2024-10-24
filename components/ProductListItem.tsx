import { Image } from "./ui/image";
import { Card } from "./ui/card";
import { VStack } from "./ui/vstack";
import { Heading } from "./ui/heading";
import { Box } from "./ui/box";
import { Button, ButtonText } from "./ui/button";
import { Text } from "./ui/text";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function ProductListItem({ product }: { product: TProduct }) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="p-5 rounded-lg max-w-[360px] m-3 flex-1">
          <Image
            source={{
              uri: product.image,
            }}
            alt={`${product.name} image`}
            className="mb-6 h-[240px] w-full rounded-md"
            resizeMode="contain"
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>
          <VStack className="mb-6">
            <Heading size="md" className="mb-4">
              ${product.price}
            </Heading>
          </VStack>
          <Box className="flex-col sm:flex-row">
            <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
              <ButtonText size="sm">Add to cart</ButtonText>
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2 border-outline-300 sm:flex-1"
            >
              <ButtonText size="sm" className="text-typography-600">
                Wishlist
              </ButtonText>
            </Button>
          </Box>
        </Card>
      </Pressable>
    </Link>
  );
}