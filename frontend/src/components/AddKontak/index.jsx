import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak } from '../../actions/KontakAction';
function AddKontak() {
    const [nama, setNama] = useState("");
    const [noHp, setNohp] = useState("");
    const [id, setId] = useState(false);


    const {addKontakResult, detailKontakResult, updateKontakResult} =  useSelector((state) => state.kontakReducer )
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
            event.preventDefault();
            if(id) {
                //update
                dispatch(updateKontak({id: id, nama: nama, nohp: noHp}));
            }else{
                //add
                dispatch(addKontak({nama: nama, nohp: noHp}));
            }
            console.log("1. Maskuk handle submit");
    }

    useEffect(()=>{
        if(addKontakResult){
            dispatch(getListKontak());
            setNama("");
            setNohp("");
        }
    }, [addKontakResult, dispatch])

    useEffect(()=>{
        if(detailKontakResult){
            setNama(detailKontakResult.nama);
            setNohp(detailKontakResult.nohp);
            setId(detailKontakResult.id);
        }
    }, [detailKontakResult, dispatch])

    useEffect(()=>{
        if(updateKontakResult){
            dispatch(getListKontak());
            setNama("");
            setNohp("");
            setId("");
        }
    }, [updateKontakResult, dispatch])


  return (
    <div>
        <h4>{id ? "Edit Kontak" : "Add kontak"}</h4>
        <form onSubmit={(event => handleSubmit(event))}>
            <input type="text" name="nama" placeholder='nama...' value={nama} 
            onChange = {(event) => setNama(event.target.value)} 
            />
            <input type="text" name="nohp" placeholder='nama...' value={noHp} 
            onChange = {(event) => setNohp(event.target.value)} 
            />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddKontak