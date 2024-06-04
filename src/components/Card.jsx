import Link from 'next/link';
import Image from 'next/image';
import {FiThumbsUp} from 'react-icons/fi';

export default function Card({result}) {
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
            <Link href={`/movie/${result.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={500}
                    height={300}
                    className='sm:rounded-t-lg group-hover:opacity-85 transition-opacity duration-300'
                    alt='loading.....'>
                </img>
                <div className="">
                    <p className='line-clamp-2 text-md'>{result.overview}</p>
                    <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
                    <p className='flex gap-3 items-center'>
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp />
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}