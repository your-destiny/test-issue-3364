import { useState } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Tabs } from "@consta/uikit/Tabs";
import { Button } from "@consta/uikit/Button";
import { IconComponent } from "@consta/uikit/Icon";
import { v4 as uuidv4 } from "uuid";
import './App.css'


type Item = {
  name: string;
  image?: IconComponent;
};

const itemsDefault: Item[] = [
  {
    name: "Первый"
  },
  {
    name: "Второй"
  },
  {
    name: "Третий вариант"
  }
];


function App() {
  const [value, setValue] = useState<Item | null>(itemsDefault[0]);
  const [items, setItems] = useState(itemsDefault);

  const add = () => {
    const newObj = { name: uuidv4() };
    const value = [...items, newObj];
    setItems(value);
  };

  return (
    <Theme className="App" preset={presetGpnDefault}>
      <Button label="Добавить" onClick={add} />
      <Tabs
        className="Tabs"
        value={value}
        size="m"
        view="bordered"
        linePosition="bottom"
        fitMode="dropdown"
        onChange={({ value }) => setValue(value)}
        items={items}
        getItemLabel={(item) => item.name}
      />
    </Theme>
  )
}

export default App
