import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function ShelfPage() {
  const shelf = useSelector((store) => store.shelfReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, [dispatch]);

  const handleDelete = ()=>{
    event.preventDefault()
    dispatch({type: "DELETE_SHELF", payload: id  })

  }

  return (
    <>
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {shelf.map((item)=>(
          <li key={item.id}>{item.description} <img src={item.url} alt={item.description}/> 
          <button onClick={()=> handleDelete(item.id)} >DELETE</button> </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default ShelfPage;
