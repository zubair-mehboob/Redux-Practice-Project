export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

function generateId() {
  //console.log("Invoked 1");

  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  );
}

export const addItem = name => {
  //console.log("Invoked 2");

  return {
    type: ADD_ITEM,
    task: {
      name,
      id: generateId()
    }
  };
};

export const deleteItem = id => {
  console.log("Delete Item", id);

  return {
    type: DELETE_ITEM,
    id
  };
};
