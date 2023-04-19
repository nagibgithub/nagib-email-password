import React, {useEffect, useState} from 'react';

const About = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    let i = 0;
    return (
        <div>
            {
                photos.map(pd => {
                    i++;
                    return (
                        <div key={pd.id} className=''>
                            <p><span>{i}. </span>{pd.name}</p>
                            <p>{pd.username}</p>
                            <button className=''>View Details</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default About;