
import React from 'react';
import './MenuModal.css';
import { FaTimes } from 'react-icons/fa';

function MenuModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const menuCategories = [
    {
      category: 'APPETIZERS',
      items: [
        { name: 'Crispy Calamari', description: 'Lightly battered squid with aioli', price: 'Rs. 1,200' },
        { name: 'Bruschetta Trio', description: 'Tomato, mushroom, and olive tapenade', price: 'Rs. 950' },
        { name: 'Buffalo Wings', description: 'Spicy chicken wings with blue cheese', price: 'Rs. 1,100' },
        { name: 'Garlic Prawns', description: 'Sautéed prawns in garlic butter', price: 'Rs. 1,500' }
      ]
    },
    {
      category: 'MAINS',
      items: [
        { name: 'Signature Burger', description: 'Wagyu beef, aged cheddar, truffle mayo', price: 'Rs. 2,200' },
        { name: 'Ribeye Steak', description: '300g premium cut with herb butter', price: 'Rs. 3,500' },
        { name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter sauce', price: 'Rs. 2,800' },
        { name: 'Truffle Pasta', description: 'Fresh fettuccine with truffle cream', price: 'Rs. 1,900' },
        { name: 'BBQ Ribs', description: 'Slow-cooked pork ribs with house BBQ sauce', price: 'Rs. 2,500' },
        { name: 'Artisan Pizza', description: 'Wood-fired with buffalo mozzarella', price: 'Rs. 1,600' }
      ]
    },
    {
      category: 'SALADS',
      items: [
        { name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, caesar dressing', price: 'Rs. 1,100' },
        { name: 'Greek Salad', description: 'Feta, olives, cucumber, tomato', price: 'Rs. 1,000' },
        { name: 'Quinoa Bowl', description: 'Roasted vegetables, avocado, tahini', price: 'Rs. 1,300' }
      ]
    },
    {
      category: 'DESSERTS',
      items: [
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: 'Rs. 850' },
        { name: 'Tiramisu', description: 'Classic Italian coffee-soaked dessert', price: 'Rs. 800' },
        { name: 'Cheesecake', description: 'New York style with berry compote', price: 'Rs. 900' },
        { name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar', price: 'Rs. 750' }
      ]
    },
    {
      category: 'BEVERAGES',
      items: [
        { name: 'Fresh Juices', description: 'Orange, pineapple, watermelon', price: 'Rs. 450' },
        { name: 'Smoothies', description: 'Berry blast, tropical, green detox', price: 'Rs. 650' },
        { name: 'Coffee', description: 'Espresso, cappuccino, latte, americano', price: 'Rs. 400' },
        { name: 'Iced Tea', description: 'Peach, lemon, passion fruit', price: 'Rs. 350' }
      ]
    }
  ];

  return (
    <div className="menu-modal-overlay" onClick={onClose}>
      <div className="menu-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="menu-modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="menu-modal-header">
          <h2>OUR FULL MENU</h2>
          <p>Crafted with passion, served with love</p>
        </div>

        <div className="menu-categories">
          {menuCategories.map((category, index) => (
            <div className="menu-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="menu-items">
                {category.items.map((item, idx) => (
                  <div className="menu-item" key={idx}>
                    <div className="item-header">
                      <h4>{item.name}</h4>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuModal;