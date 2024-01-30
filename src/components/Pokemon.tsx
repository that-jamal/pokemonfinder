import React from 'react'

type PokemonData = {
    data: {
        id: number
        name: string
        weight: string
        height: string
        base_experience: number
        sprites: {
            front_default: string
        }
    }
}



export default function PokemonStat({ data }: PokemonData) {
    if (data.name) return (
        <div>

            <h1 className="text-center p-2 bg-rose-700 text-gray-50 border-black text-5xl border-4 rounded-lg"><strong>{data.name}</strong></h1>
            <img src={data.sprites.front_default} alt={data.name} width="300"></img>

            <h1 className="border-4 bg-red-500 rounded-lg">pokemon id: {data.id}</h1>
        </div >
    )
    else {
        return (
            <div className="animate-pulse text-center p-2 bg-green-700 text-gray-50 border-black text-5xl border-4 rounded-lg">
                <h1>press the search-button</h1>
            </div>
        )
    }
}