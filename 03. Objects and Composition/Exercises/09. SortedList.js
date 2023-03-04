function sortedList() {
  const obj = {};
  obj.list = [];
  obj.size = 0;

  obj.add = (element) => {
    obj.list.push(element);
    obj.list.sort((a, b) => a - b);
    obj.size = obj.list.length;
  };

  obj.remove = (index) => {
    if (index >= 0 && index < obj.size) {
      obj.list.splice(index, 1);
      obj.list.sort((a, b) => a - b);
      obj.size = obj.list.length;
    }
  };

  obj.get = (index) => {
    if (index >= 0 && index < obj.size) {
      let resultElement = obj.list[index];
      obj.list.sort((a, b) => a - b);
      obj.size = obj.list.length;
      return resultElement;
    }
  };

  return obj;
}
