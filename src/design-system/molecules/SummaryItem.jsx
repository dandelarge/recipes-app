import React from 'react';
import {Link} from 'react-router-dom';

function SummaryItem(props) {

    const {
        slug, dishName,
        rationsMin, rationsMax,
        isVeggie, image} = props;

    return(
        <li className="summary-item">
            <Link to={`/recipes/view/${slug}`}>
                <img src={image} alt="" className="summary-item__thumb"/>
            </Link>
            <div className="summary-item__info">
                <h3 className="summary-item__title">{dishName}</h3>
                <div className="summary-item__data">
                    <span className="summary-item__text--emphasis">
                        {rationsMin} - {rationsMax} people
                    </span>
                    { !isVeggie || <span><i className="icon icon--vegan"></i> Vegeratian</span> }
                </div>
                <div className="summary-item__cta-section">
                    <Link to={`/recipes/edit/${slug}`}>
                        <button className="cta-button cta-button--edit">edit</button>
                    </Link>
                    <button className="cta-button cta-button--delete">delete</button>
                </div>
            </div>
        </li>
    );
}

export default SummaryItem;