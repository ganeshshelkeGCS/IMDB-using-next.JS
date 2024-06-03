


export default function Result({results}) {
    return (
        <div>
            {
                results.map((result) => (
                    <div key={result.id}>
                        <h2>{result.original_title}</h2>  
                        <hr />   
                    </div>
                   
                ))
            }
        </div>
    )
}