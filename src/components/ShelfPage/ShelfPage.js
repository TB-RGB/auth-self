import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function ShelfPage() {
  const shelf = useSelector((store) => store.shelfReducer)
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, [dispatch]);

  const handleDelete = (item, user_id) => {
    console.log("checking item.id", item.id);
    if (item.user_id === user_id) {
      dispatch({ type: "DROP_ITEM", payload: item.id })
    } else {
      console.log("delete didnt work");
    }

  }

  return (
    <>
      <div id='shelf' className="container">
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>
        <ul>
          {shelf.map((item) => (
            <li key={item.id}>{item.description} <img src={item.url} alt={item.description} />
              <button onClick={() => handleDelete(item, user.id)} >DELETE</button> </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShelfPage;
