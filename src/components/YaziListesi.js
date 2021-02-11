import React, {useEffect} from 'react';
// import{api} from '../api' 
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { yaziListesiGetir } from '../actions';

const YaziListesi = () => {

  const yaziListesi = useSelector((state) => state.yaziListesi);/// redux connect ve mapStateToProps yerine useSelectoru kullandık. UseSelector, state i alıyor state.yaziListesi döndürür ve değişkene atar
  const dispatch = useDispatch(); // Dispatch fonksiyonu sayesinde actions içinde oluşturulan yaziListesiGetir fonksiyonunu getirir.


  useEffect(() => {
    dispatch(yaziListesiGetir()) // Burda fonksiyonu çağırıyıyoruz. Callback yapmıyoruz, çağırıyoruz
    
  }, []);

    return (
      <>
      <Link to={`/yazi-ekle`}>
      <button className="big ui button" >
        Yazı Ekle
      </button>
      </Link>
    {yaziListesi.map(yazi => {
        return ( 
            <div className="item" key={yazi.id}>
             <i className="large github middle aligned icon"></i>
             <div className="content">
               <Link to={`/post/${yazi.id}`} className="header">{yazi.title}</Link>
               <div className="description">{yazi.created_at}</div>
             </div>
           </div>
         )
    })}
    </>
    )
}

export default YaziListesi
