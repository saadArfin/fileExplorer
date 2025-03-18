import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, name, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, name, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
