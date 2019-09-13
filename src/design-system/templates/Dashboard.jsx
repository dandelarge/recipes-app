import React from 'react';
import {Link} from 'react-router-dom'
import RecipesList from '../molecules/RecipesList';

function Dashboard() {
    return (
        <div className="dashboard">
            <section className="recipes">
                <h2 className="recipes-title">Recipes</h2>
                <RecipesList />
            </section>
            <section className="actions">
                <Link to="/recipes/create">
                    <button className="cta-button cta-button--wide">
                        Add a recipe
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default Dashboard;