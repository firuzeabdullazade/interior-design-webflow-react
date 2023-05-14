import "./InfoPartGridItem.scss";
import arrow from "../../../../../assets/icons/Vector.svg";
interface InfoPartGridItemProps {
  head: string;
  title: string;
}
export const InfoPartGridItem = (props:InfoPartGridItemProps ) => {
   const {head, title} = props;
   const className= 'info-card'
   return( 
    <div className={className}>
        <h2>{head}</h2>
        <h3>
           {title}
        </h3>
        <button>
            <div className="text">Read More</div>
            <img src={arrow} alt="" />
        </button>
    </div>
   )
};
