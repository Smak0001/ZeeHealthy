CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  weight DECIMAL(10, 2)
);

INSERT INTO products (name, type, price, weight) VALUES
('Chicken', 'meat', 12.50, 1.5),
('Beef', 'meat', 15.75, 2.0),
('Carrot', 'vegetable', 2.25, 0.2),
('Apple', 'fruit', 1.99, 0.1),
('Banana', 'fruit', 1.50, 0.15),
('Lettuce', 'vegetable', 3.50, 0.3);
