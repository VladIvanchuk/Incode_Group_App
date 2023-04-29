import Navigator from "./components/Navigator";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
}
