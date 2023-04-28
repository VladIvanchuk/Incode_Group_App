import Navigator from "./components/Navigator";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}
