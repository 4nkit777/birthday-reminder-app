import React from 'react';

export default function List({ people }) {
    return (
        <React.Fragment>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className='d-flex flex-row mt-3'>
                        <img src={image} alt={name} style={{ width: '60px', height: '60px' }} className='border rounded-circle' />
                        <div className='ml-2'>
                            <h4>{name}</h4>
                            <p className='text-secondary'>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </React.Fragment>
    );
}