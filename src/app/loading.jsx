import Spinner from '../../public/Spinner.svg';

export default function loading(){
    return (
        <div className='flex justify-center'>
            <img className='h-54' src={Spinner} alt="Loading..." />
        </div>
    )
}