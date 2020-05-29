import React,{ useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Main} from "./components/main/Main";
import {Order} from "./components/order/Order";
import Context from "./Context";


function App({saveData, data, createNotification}) {

    const [count, setCount] = useState({
        Tomato:    0,
        Potato:    0,
        Mushrooms: 0,
        Cheese:    0,
        Paprika:   0,
        Egg:       0,
        SourCream: 0,
        Sausage: 0
    })



    const ingredients = [
        {
            id:       0,
            name:     'Tomato',
            weight:   15,
            price:    2,
            type:     'vegetable',
            quantity: count.Tomato,
            img:      'https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38='
        },
        {
            id:       1,
            name:     'Potato',
            weight:   20,
            price:    1,
            type:     'vegetable',
            quantity: count.Potato,
            img:      'https://i.imgur.com/oY3v9We.jpg'
        },
        {
            id:       2,
            name:     'Mushrooms',
            weight:   10,
            price:    5,
            type:     'vegetable',
            quantity: count.Mushrooms,
            img:      'https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Mushrooms_White_Hero.jpg'
        },
        {
            id:       3,
            name:     'Cheese',
            weight:   50,
            price:    3,
            type:     'dairy',
            quantity: count.Cheese,
            img:      'https://media.gettyimages.com/photos/cheese-chunk-isolated-on-white-background-picture-id859268416?s=612x612'
        },
        {
            id:       4,
            name:     'Paprika',
            weight:   25,
            price:    0.5,
            type:     'vegetable',
            quantity: count.Paprika,
            img:      'https://3kt5152h0q2j1m4r7q1bpx60-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/paprika-green-ariesta.jpg'
        },
        {
            id:       5,
            name:     "Egg",
            weight:   50,
            price:    0.1,
            type:     '',
            quantity: count.Egg,
            img:      'https://cdn.mos.cms.futurecdn.net/SFdkbdefTaog6XKV3wyqJ7-320-80.jpg'
        },
        {
            id:       6,
            name:     "Sour Cream",
            weight:   100,
            price:    1,
            type:     "dairy",
            quantity: count.SourCream,
            img:      'https://www.biggerbolderbaking.com/wp-content/uploads/2016/09/1C5A7606.jpg'
        },
        {
            id: 7,
            name: "Sausage",
            weight: 300,
            price: 4,
            type: "meat",
            quantity: count.Sausage,
            img: 'https://www.daringgourmet.com/wp-content/uploads/2019/06/Cheddarwurst-7-edited.jpg'
        }
    ]

    const handleOnChange = (e) => {
        setCount({
            ...count,
            [e.target.name]: Math.abs(+e.target.value)
        })
    }

    return (
        <Context.Provider value={{ingredients, handleOnChange}}>
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route exact path="/api/order">
                        <Order saveData={saveData} data={data} createNotification={createNotification}/>
                    </Route>
                </Switch>
            </Router>
        </Context.Provider>
    );
}

export default App;
