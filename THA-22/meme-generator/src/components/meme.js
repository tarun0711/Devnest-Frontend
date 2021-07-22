import { useState } from "react";

const Meme = ({meme, setMeme}) =>
{
  
    console.log(meme);
    const [form, setForm] = useState(
        {
            template_id: meme.id,
            username: 'odin_viking',
            password: 'haha0711',
            boxes:[],
        }
    );
    const generateMeme = () => {
        
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        
        form.boxes.forEach((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;
        });
      
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setMeme({...meme, url:data.data.url})
        })
    };
    return(
        <div className="meme">
        <div className="name">
        {meme.name}
        </div>
        <img src={meme.url} alt="meme"/>
        <div className="box">
        {
            [...Array(meme.box_count)].map((_,index) => (
                <input
                    key={index}
                    type ="text"
                    placeholder={`Meme Caption ${index +1}`} 
                    onChange={ (e) => {
                    const newBoxes = form.boxes;
                    newBoxes[index] = {text: e.target.value};
                    setForm({...form, boxes:newBoxes});
                }} />
            ))
        }
        </div>

        <div className="buttons">
            <button onClick={ () => {generateMeme()}}> Generate Meme</button>
            <button onClick = { () => { setMeme(null)}}> Choose Tempate</button>
        </div>
        </div>
    )
};
export default Meme;