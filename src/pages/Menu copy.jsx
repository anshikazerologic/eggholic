import FoodMenu from '../components/Foodmenu';
import './menu.css';

export default function Menu(){
    return(
        <>
            <div className="Menu-dx">
                <img src='./menu.svg' className='max-css'/>
                <section className='menuFood'>
                    <FoodMenu/>
                </section>
            </div>
        </>
    )
}