import { Linking, Text, View } from "react-native";

const StarterComponent = () => (
  <View style={{ padding: 16 }}>
    <Text style={{ fontSize: 24 }}>Just Opened Storybook React Native</Text>
  </View>
);

const meta = {
  title: "Welcome",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
