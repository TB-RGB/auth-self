import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const ShelfForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [newItem, setNewItem] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const postObj = {
    description: newItem,
    image_url: newUrl,
    user_id: user.id,
  };

  const sendPost = () => {
    dispatch({ type: "SEND_SHELF", payload: postObj });
    setNewItem("");
    setNewUrl("");
  };
  return (
    <>
      <input
        type="text"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
       <input
        type="text"
        value={newUrl}
        onChange={(event) => setNewUrl(event.target.value)}
      />

      <button onClick={()=>sendPost()}>Add Item</button>
    </>
  );
};

export default ShelfForm;
