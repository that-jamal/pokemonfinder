import { useState, useEffect } from 'react';
import PokemonStat from '../components/Pokemon';
import CookieDropdown from '../components/CookieDropdown';
import Cookies from 'js-cookie';

export default function PokemonStuff() {
    const [pokemon, setPokemon] = useState();
    const [text, setText] = useState('');
    const [cookieOptions, setCookieOptions] = useState([]);
    const [info, setInfo] = useState("")
    const [loading, setLoading] = useState("")




    useEffect(() => {
        fetchData();
        updateCookieOptions();
    }, [text]);


    async function savedb() {
        const res = await fetch(`http://localhost:3000/pokemon`, { method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify({ name: pokemon.name }) });
        const data = await res.json();
        console.log(data)
    }

    async function fetchData() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`);
        const data = await res.json();
        setInfo(` You have found a ${data.name}. try to chatch it`)
        console.log(data)
        setPokemon(data);
        setLoading("noball.png")

    }

    const updateCookieOptions = () => {
        const allCookies = Cookies.get();
        const cookieNames = Object.keys(allCookies);
        setCookieOptions(cookieNames);
    };

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    };

    const searchClick = () => {
        setText(randomNumberInRange(1, 1017));

    };

    const catchPokemon = () => {
        setLoading("Wpokeball.png")
        setTimeout(() => {

            setLoading("noball.png")

            if (randomNumberInRange(1, 4) === 1) {
                setInfo(`you cought a ${pokemon.name}!!`)
                console.log("wow")
                savedb()
                Cookies.set(pokemon.name, text);
                updateCookieOptions(); // Update options after adding a new cookie

                setTimeout(() => {
                    setText(randomNumberInRange(1, 1017));
                }, 2500)
            } else if (randomNumberInRange(1, 10) === 5) {

                console.log(`he got away`);
                setInfo(`${pokemon.name} got away`)

                setTimeout(() => {
                    setText(randomNumberInRange(1, 1017));
                }, 2500)
            } else {
                setInfo(`missed`)
                console.log("fail", pokemon.name);
            }
        }, randomNumberInRange(2000, 10000));

    };

    return (
        <div className=" h-screen flex flex-col justify-center items-center ">
            {pokemon && <PokemonStat data={pokemon} />}
            <h1 className="w-3/12 border-2 bg-slate-600 text-gray-50 rounded-lg"> {info}!</h1>

            <CookieDropdown options={cookieOptions} />

            <img src={loading} className='animate-bounce absolute z-50 inset-0 m-auto px-50 ' width="200" />

            <div className=" z-50 flex w-1/6 items-center justify-between " >
                <div onClick={searchClick} className='hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>search</div>
                <div onClick={catchPokemon} className='hover:cursor-pointer border-white border-2 rounded-full hover:bg-yellow-100 bg-white'><img className='px-50' src="pokeball.png" width="60" alt='pokeball' /></div>
            </div>
        </div>
    );
}


/*

bulbasaur ivysaur venusaur charmander charmeleon charizard squirtle wartortle blastoise caterpie kakuna beedrill pidgey pidgeotto pidgeot rattata raticate

pikachu 25 he finns 1017 olika id'en

* */