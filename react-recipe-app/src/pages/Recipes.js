import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/eat-hub/img/gallery/img_1.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/eat-hub/img/gallery/img_4.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/eat-hub/img/gallery/img_5.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/eat-hub/img/gallery/img_6.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/eat-hub/img/gallery/img_10.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/eat-hub/img/gallery/img_1.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/eat-hub/img/gallery/img_4.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/eat-hub/img/gallery/img_5.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/eat-hub/img/gallery/img_6.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/eat-hub/img/gallery/img_10.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/eat-hub/img/gallery/img_5.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/eat-hub/img/gallery/img_6.jpg",
            authorImg: "/eat-hub/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}