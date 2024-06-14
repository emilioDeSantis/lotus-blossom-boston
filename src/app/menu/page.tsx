import React from "react";
import OrderButton from "../components/OrderButton";

const Menu: React.FC = () => {
    const menuSections = [
        {
            title: "Appetizers",
            items: [
                { name: "Spring Rolls", description: "Crispy rolls with vegetable filling", price: "$5.99" },
                { name: "Miso Soup", description: "Traditional Japanese soup with tofu", price: "$3.99" },
                { name: "Edamame", description: "Steamed soybeans with sea salt", price: "$4.99" },
                { name: "Gyoza", description: "Pan-fried dumplings with pork filling", price: "$6.99" },
                { name: "Seaweed Salad", description: "Fresh seaweed with sesame dressing", price: "$5.99" },
            ],
        },
        {
            title: "Main Courses",
            items: [
                { name: "Pad Thai", description: "Stir-fried noodles with shrimp", price: "$12.99" },
                { name: "Kung Pao Chicken", description: "Spicy stir-fried chicken with peanuts", price: "$14.99" },
                { name: "General Tso's Chicken", description: "Sweet and spicy fried chicken", price: "$13.99" },
                { name: "Beef Teriyaki", description: "Grilled beef with teriyaki sauce", price: "$15.99" },
                { name: "Vegetable Stir-Fry", description: "Mixed vegetables with soy sauce", price: "$11.99" },
                { name: "Sweet and Sour Pork", description: "Fried pork with sweet and sour sauce", price: "$13.99" },
                { name: "Pineapple Fried Rice", description: "Fried rice with pineapple and cashews", price: "$12.99" },
                { name: "Chicken Curry", description: "Spicy chicken curry with coconut milk", price: "$13.99" },
            ],
        },
        {
            title: "Sushi",
            items: [
                { name: "Sushi Platter", description: "Assorted sushi rolls and sashimi", price: "$19.99" },
                { name: "California Roll", description: "Crab, avocado, and cucumber roll", price: "$8.99" },
                { name: "Spicy Tuna Roll", description: "Tuna with spicy mayo", price: "$9.99" },
                { name: "Dragon Roll", description: "Eel and cucumber topped with avocado", price: "$12.99" },
                { name: "Salmon Nigiri", description: "Sliced salmon over rice", price: "$6.99" },
                { name: "Tuna Nigiri", description: "Sliced tuna over rice", price: "$7.99" },
                { name: "Shrimp Tempura Roll", description: "Fried shrimp with cucumber and avocado", price: "$10.99" },
                { name: "Rainbow Roll", description: "Crab, avocado, cucumber topped with assorted fish", price: "$13.99" },
                { name: "Vegetable Roll", description: "Mixed vegetables with avocado", price: "$7.99" },
            ],
        },
        {
            title: "Desserts",
            items: [
                { name: "Mochi Ice Cream", description: "Japanese ice cream wrapped in mochi", price: "$4.99" },
                { name: "Green Tea Ice Cream", description: "Creamy green tea flavored ice cream", price: "$3.99" },
                { name: "Mango Sticky Rice", description: "Sweet sticky rice with mango", price: "$5.99" },
                { name: "Fried Banana", description: "Deep-fried banana with honey", price: "$4.99" },
            ],
        },
        {
            title: "Beverages",
            items: [
                { name: "Green Tea", description: "Hot brewed green tea", price: "$2.99" },
                { name: "Sake", description: "Traditional Japanese rice wine", price: "$6.99" },
                { name: "Thai Iced Tea", description: "Sweetened iced tea with milk", price: "$3.99" },
                { name: "Soft Drinks", description: "Coke, Diet Coke, Sprite", price: "$1.99" },
            ],
        },
    ];

    return (
        <main style={{
            width: '100%',
            maxWidth: '60rem',
            padding: '4vw',
        }}>
            <header>
                <h1>Our Menu</h1>
            </header>
            {menuSections.map((section, sectionIndex) => (
                <section key={sectionIndex} className="menu-section">
                    <header>
                        <h2>{section.title}</h2>
                    </header>
                    <ul>
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="menu-item">
                                <article>
                                    <header>
                                        <h3 className="menu-item-name">{item.name}</h3>
                                    </header>
                                    <p className="menu-item-description">{item.description}</p>
                                    <footer>
                                        <p className="menu-item-price">{item.price}</p>
                                    </footer>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',

            }}>
            <OrderButton/>
            </div>
        </main>
    );
};

export default Menu;
