import React, { useState, useEffect } from "react";


export default function () {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [memeImg, setMemeImg] = useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeImg(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memeImg.length);
    const memeUrl = memeImg[randomNumber].url;

    setMeme((prevValue) => ({
      ...prevValue,
      randomImg: memeUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="form-sec">
      <div className="input-sec">
        <input
          className="form-input"
          type="text"
          placeholder="Enter Text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />

        <input
          className="form-input"
          type="text"
          placeholder="Enter Text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={getMemeImage} className="get-img-btn">
        Get a new meme image🖼️
      </button>
      <div className="meme-sec">
        {meme.randomImg && (
          <img
            className="meme-image"
            src={meme.randomImg}
            alt="meme"
            onError={() => {
              setMeme("");
            }}
          />
        )}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
