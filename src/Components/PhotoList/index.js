import React, { useState } from 'react';
import Modal from '../Modal'


const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [photos] = useState([
    {
      name: 'Big Five Personality',
      category: 'CMS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Calendars-Printable',
      category: 'CMS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Lord and Stanley Realty',
      category: 'CMS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Love Language Quiz',
      category: 'CMS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Loan Me A Home',
      category: 'NodeJS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Cat green eyes',
      category: 'PlainScript',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Green parrot',
      category: 'FutureProj',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
    
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }


  return (
    <div>
      {isModalOpen && (
       <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )} 
      
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
