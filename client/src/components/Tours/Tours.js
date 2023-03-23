
import { TourItem } from './TourItem'


export const Tours = ({tours}) => {
    return (
    <>
        {tours.map(x => <TourItem key={x._id} {...x}/>)}

        {tours.length === 0 && (<h3 className="no-articles">No articles yet</h3>)}
    </>
    )
}