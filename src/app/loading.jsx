import Spinner from '../../public/spinner.svg';

export default function loading(){
    return (
        <div className='flex justify-center mt-16'>
            <img className='h-54' src={Spinner} alt="Loading..." />
        </div>
    )
}