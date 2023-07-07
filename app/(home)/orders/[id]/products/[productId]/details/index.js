import { View, Text, Pressable, Button } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  console.log("Button pathname: ", `/orders/${params.id}`)

  return (
    <View>
      <Text>Product Details</Text>

      <Link asChild href={`/orders/${params.id}`}>
        <Button title="Go back to Order Details" />
      </Link>
    </View>
  );
};

export default index;
