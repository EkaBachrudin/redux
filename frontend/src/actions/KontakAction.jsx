import axios from 'axios'

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
    console.log("2. Masuk action")
    return (dispatch) => {
        //Loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

         //Get Api
         axios({
            method: 'GET',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000
         }).then((response)=>{
            //Berhasil Get api
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
         }).catch((error)=>{
            //Gagal get api
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
         })
    }
}

export const addKontak = (data) => {
    return (dispatch) => {
        //Loading
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

         //Get Api
         axios({
            method: 'POST',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000,
            data: data
         }).then((response)=>{
            //Berhasil Get api
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
         }).catch((error)=>{
            //Gagal get api
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
         })
    }
}

export const deleteKontak = (id) => {
    return (dispatch) => {
        //Loading
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

         //Get Api
         axios({
            method: 'DELETE',
            url: 'http://localhost:3000/kontaks/'+id,
            timeout: 120000
         }).then((response)=>{
            //Berhasil Get api
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
         }).catch((error)=>{
            //Gagal get api
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
         })
    }
}

export const detailKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

export const updateKontak = (data) => {
    return (dispatch) => {
        //Loading
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

         //Get Api
         axios({
            method: 'PUT',
            url: 'http://localhost:3000/kontaks/'+data.id,
            timeout: 120000,
            data: data
         }).then((response)=>{
            //Berhasil Get api
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
         }).catch((error)=>{
            //Gagal get api
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
         })
    }
}