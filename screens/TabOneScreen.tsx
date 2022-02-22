// TabOneScreen.tsx
import * as React from "react";
import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from "react-native";
//import { List } from "../components/List";
import { SearchBar } from "../components/SearchBar";
import { RootTabScreenProps } from "../types";
//import { demoData } from "../assets/demoData/demoData.json";

// zhihu: 如何在 TS 中使用 useState
// https://zhuanlan.zhihu.com/p/358934875
interface IData {
  id: number;
  name: string;
  description: string;
};

/*
const initDataType: DataType[] = [{
  id: 0,
  name: '',
  description: ''
}];
*/

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const [data, setData] = React.useState<IData[]>([]);
  
  // get some data
  // https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages
  React.useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const ddata = await apiResponse.json();
      setData(ddata);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Heroes</Text>}
      <SearchBar 
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {/*
      <List 
        searchPhrase={searchPhrase}
        setClicked={setClicked}
        data={data}
      />
      */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
});
