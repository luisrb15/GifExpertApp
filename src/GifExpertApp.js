import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Esto no se hace a menos que nunca vaya a cambiar el Array.
//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     return setCategories (['HunterXHunter',...categories])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp;