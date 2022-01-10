import {addToCart, cartReducer, decrementAmount, deleteFromCart, incrementAmount} from "../cartReducer";

describe("Cart should", () => {

    //1. test data
    const state = {
        cartProducts: [
            {
                "id": 1,
                "author": "Richard Branson",
                "title": "THE VIRGIN WAY",
                "gunres": [
                    "Bussiness",
                    "Motivation"
                ],
                "price": 1520,
                "liked": "10540",
                "image": [
                    "https://images-na.ssl-images-amazon.com/images/I/91mrvQ22TRL.jpg"
                ],
                "description": "Our most popular and trending eBooks, updated hourly. Start reading with Kobo. Check out of top eBooks in every genre to see what other readers are buying right now. eBooks In Every Genre. 24/7 Support. Download Kobo app. Top New eBook Releases.",
                "amount": 1
            },
            {
                "id": 2,
                "author": "Yuval Noah Harari",
                "title": "Sapiens: A Brief History of Humankind",
                "gunres": [
                    "Documentary",
                    "History"
                ],
                "price": 1530,
                "liked": "49540",
                "image": [
                    "https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL._SX314_BO1,204,203,200_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL._SX314_BO1,204,203,200_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL._SX314_BO1,204,203,200_.jpg"
                ],
                "description": "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.”",
                "amount": 1
            },
            {
                "id": 3,
                "author": "Victor Davis Hanson",
                "title": "The Dying Citizen: How Progressive Elites, Tribalism, and Globalization Are Destroying the Idea of America",
                "gunres": [
                    "Documentary",
                    "History"
                ],
                "price": 1550,
                "liked": "6540",
                "image": [
                    "https://images-na.ssl-images-amazon.com/images/I/41ABbYw2jaL._SX321_BO1,204,203,200_.jpg"
                ],
                "description": "Human history is full of the stories of peasants, subjects, and tribes. Yet the concept of the “citizen” is historically rare—and was among America’s most valued ideals for over two centuries. But without shock treatment, warns historian Victor Davis Hanson, American citizenship as we have known it may soon vanish.",
                "amount": 1
            }
        ],
    }

    test('increment amount of products', () => {
        //2. action
        let action = addToCart({"id": 3423, "author": "Jovano JoJo"})

        //3. configure state
        let newState = cartReducer(state, action)

        //4. checking
        expect(newState.cartProducts.length).toBe(4)
    })

    test('decrement amount of products', () => {
        let action = deleteFromCart(3423)
        let newState = cartReducer(state, action)

        expect(newState.cartProducts.length).toBe(3)
    })

    test('increment product amount', () => {
        let action = incrementAmount(1,  "THE VIRGIN WAY")
        let newState = cartReducer(state, action)

        expect(newState.cartProducts.find(p => p.id === 1).amount).toBe(2)
    })

    test('decrement product amount', () => {
        let action = decrementAmount(1,  "THE VIRGIN WAY")
        let newState = cartReducer(state, action)

        expect(newState.cartProducts.find(p => p.id === 1).amount).toBe(1)
    })
})