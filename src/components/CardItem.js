import React from 'react'

const CardItem = ({item}) => {
    return (
        <div className='card'>
             <div className='card-front'>
                    <img src={item.img_url} alt='Character' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li><strong>Character Name:</strong> {item.name}</li>
                        <li><strong>Species:</strong> {item.species}</li>
                        <li><strong>Origin:</strong> {item.origin}</li>
                        <li><strong>Status:</strong> {item.status}</li>
                        <li><strong>Ability:</strong> {item.abilities[0]}</li>
                    </ul>
                </div>
            </div>
            
    )
}
export default CardItem;
