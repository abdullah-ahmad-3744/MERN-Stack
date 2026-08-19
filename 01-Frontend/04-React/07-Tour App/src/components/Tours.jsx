import Card from './Card'

function Tours({tours,removeTourHandler}) {
    return (
            <div className="container">

                <div className="title"><h2>Plan With Us</h2></div>

                <div className='cards'>
                    {
                        tours.map( (tour) => {
                            return (
                                <Card key={tour.id} {...tour} removeTourHandler={removeTourHandler}/>
                            )
                        })
                    }
                </div>

            </div>
    )
}
export default Tours