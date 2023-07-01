import { useState } from 'react'
import './App.css'
import explorer from './data/FolderData'
import Folder from './components/Folder'
import useTraverseTree from './customHook/use-travers-tree'

function App() {
const [explorerData,setExplorerData]  = useState(explorer)

const {insertNode} = useTraverseTree();

const hanldeInsertNode  =(folderId,item,isFolder)=>{
  const finalTree = insertNode(explorerData,folderId,item,isFolder)
  setExplorerData(finalTree)
}
  return (
    <>
    <div className="app">
      <Folder hanldeInsertNode={hanldeInsertNode} explorer={explorerData}/>
      
    </div>
    </>
  )
}

export default App
