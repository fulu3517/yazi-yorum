import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import{api} from '../api' 


const YaziFormu = (props) => {
  const YAZI_BASLANGIC = {
      title: "",
      content: ""
  }
  const [yazi, setYazi] = useState(YAZI_BASLANGIC);
  const [hata, setHata] = useState("");

  const onInputChange= (event) => {
          setYazi({
              ...yazi, 
              [event.target.name]: event.target.value});// inputlara verdiğimiz name ile statelerin name i aynı olduğu için bu şekilde eşitleme yaptık
      }
      
  const onFormSubmit = (event) => {
      event.preventDefault();// Buton submit butonu olmadığı için bu satıra gerek yok ama biz yine de koyduk;
      setHata("");
      if(props.yazi) {
          api()
          .put(`/posts/${props.match.params.id}`, yazi)
          .then(response => {
            props.history.push(`/post/${props.match.params.id}`)
          }).catch((error) => {
            setHata("Başlık ve Yazı içeriği zorunludur")
        }).catch((error) => {
          setHata("Başlık ve Yazı içeriği zorunludur")
      });;
      } else {
        api().post("/posts", yazi)
        .then(response => {
            props.history.push('/');
        }).catch((error) => {
            setHata("Başlık ve Yazı içeriği zorunludur")
        });
      }
     
  }

  useEffect(() => {
    if(props.yazi?.title && props.yazi?.content) setYazi(props.yazi);// prop.yazi?.content yaptık. Bunu sebebei contenti undefined verdi. ? koyarak hata almadık. 
  }, [props.yazi])


  return (
    <>
      {hata && <div className="ui error message">
        <div className="header">Action Forbidden</div>
        <p>{hata}</p>
      </div>}
      <div className="ui form">
          <div className="field">
            <label>Yazı Başlığı</label>
            <input 
            type="text" 
            name="title" 
            value={yazi.title} 
            onChange={onInputChange}/>
          </div>
          <div className="field">
            <label>Yazı alanı</label>
            <textarea rows="2" onChange={onInputChange} value={yazi.content} name="content">{yazi.content}</textarea>
          </div>
          <button className="ui primary button" onClick={onFormSubmit}>
            Gönder
          </button>
          <button className="ui button">
            İptal Et
          </button>
    </div>
    </>
  )
}
// Yazı formuna yazı ekledikten sonra anasayfaya yönlendirmek istiyoruz
// Yazı formu bizim routlarımızda olmadığı için history.push metodunu kullanamıyoruz
// withRouter ile HOC yaptık ve history.pushu yazıformu componentine eklemiş olduk
export default withRouter(YaziFormu) 
