import React, {useState} from 'react';



const YorumFormu = (props) => {
    const YORUM_BASLANGIC = {
        display_name: "",
        body: ""
    }
    const [yorum, setYorum] = useState(YORUM_BASLANGIC)
   
    
    const handleOnChange = event => {
            setYorum({
                ...yorum,
                [event.target.name] : event.target.value // inputlara name veriyoruz ve o inputun eventına göre statei güncelliyoruz
            })
        }
    return (
        <div>
            <h3>Yorum Yaz</h3>
        <form className="ui form" onSubmit={(e) =>  {
            props.handleSubmit(e, yorum);
            setYorum(YORUM_BASLANGIC);
        }}>
            <textarea
                name= "body"
                placeholder="Yorumunuz" 
                rows="3" 
                onChange={handleOnChange}
                value={yorum.body}
            ></textarea>
            <div className="ui small icon input">
              <input 
                name="display_name"
                type="text" 
                placeholder="Adınız" 
                onChange={handleOnChange}
                value ={yorum.display_name}
              />
              <i className="search icon"></i>
            </div>
            <button className="ui primary button" type="submit">Gönder</button>
        </form>
        </div>
    )
}
export default YorumFormu;
