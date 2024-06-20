import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';


function ShelfPage() {
  const shelf = useSelector((store) => store.shelfReducer)
  const user = useSelector((store)=> store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, [dispatch]);

  const handleDelete = (item, user_id)=>{
    event.preventDefault()
    if (item.user_id === user_id){
    dispatch({type: "DELETE_SHELF", payload: {user_id}  })
    } 

  }

  return (
    <>
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ShelfForm />
      <ul>
        {shelf.map((item)=>(
          <li key={item.id}>{item.description} <img src={item.url} alt={item.description}/> 
          <button onClick={()=> handleDelete(item.user_id, user.id)} >DELETE</button> </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default ShelfPage;
