// InputForm.js
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState('');

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file)); // Store image URL for display
    } else {
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'title':
          setTitle(value);
          break;
        case 'price':
          setPrice(value);
          break;
        case 'description':
          setDescription(value);
          break;
        default:
          break;
      }
    }
  };

  const handleButtonClick = () => {
   
    const outputText = `Name: ${name}\nTitle: ${title}Price: ${price}\nDescription: ${description}`;
    setOutput(outputText);
  };

  return (
    <div className='form-container '>
      <h1>Product add</h1>
      <br /><br />
      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <br />
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <br />
        <textarea
          name="description"
          value={description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h2>Image:</h2>
        <br />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
        />
      </div>
      <br />
      <button className='btn' onClick={handleButtonClick}>Click</button>
      <div>
        <br />
        <br />
        <hr />
        <h2>Result</h2>
      </div>
      {image && (
        <div>
          <center><img src={image} style={{width:100}} alt="Selected" /></center>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
}

export default Form;
