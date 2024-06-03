


export default function Result({results}) {
    return (
        <div>
            {
                results.map((result) => (
                    <div key={result.is}>
                        <h2>{result.overview}</h2>     
                    </div>
                ))
            }
        </div>
    )
}