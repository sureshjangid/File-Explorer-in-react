const useTraverseTree = () => {
    function insertNode(tree, folderId, item, isFolder) {
      if (tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
          id: new Date().getTime(),
          name: item,
          isFolder,
          item: [],
        });
        return tree;
      }
      let latestNode = [];
      if (Array.isArray(tree.items)) {
        latestNode = tree.items.map((obj, index) => {
          return insertNode(obj, folderId, item, isFolder);
        });
      }
      return { ...tree, items: latestNode };
    }
    return { insertNode };
  };
  
  export default useTraverseTree;
  