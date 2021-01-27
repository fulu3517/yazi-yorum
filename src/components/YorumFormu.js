import React from 'react'

const YorumFormu = (props) => {
    return (
        <div>
            <h3>Yorum Yaz</h3>
        <form className="ui form" onSubmit={props.handleCommentSubmit}>
            <textarea
                name= "body"
                placeholder="Yorumunuz" 
                rows="3" 
                onChange={props.handleOnChange}
                value={props.yorum.body}
            ></textarea>
            <div className="ui small icon input">
              <input 
                name="display_name"
                type="text" 
                placeholder="Adınız" 
                onChange={props.handleOnChange}
                value ={props.yorum.display_name}
              />
              <i className="search icon"></i>
            </div>
            <button className="ui primary button" type="submit">Gönder</button>
        </form>
        </div>
    )
}
export default YorumFormu;
