import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteKontak, detailKontak, getListKontak } from '../../actions/KontakAction';

function ListKontak() {
  //Global state
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state)=> state.kontakReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        //Pangil action getListKontak
        dispatch(getListKontak());
    }, [dispatch]);

    useEffect(()=>{
      if(deleteKontakResult){
          dispatch(getListKontak());
      }
  }, [deleteKontakResult, dispatch])

  return (
    <div>
        <h1>List Kontak</h1>
        {getListKontakResult ? (
          getListKontakResult.map((kontak)=> {
            return (
              <p key={kontak.id}>
                {kontak.nama} - 
                {kontak.nohp} -
                <button onClick={ () => dispatch(deleteKontak(kontak.id))}>Hapus</button> 
                <button onClick={()=> dispatch(detailKontak(kontak))} style={{marginLeft: "10px"}}>Edit</button>
              </p>
            )
          })
        ) : getListKontakLoading ? (
          (
            <p>Loading...</p>
          )
        ) : (
          <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
        )}
    </div>
  )
}


export default ListKontak