import { useState } from 'react';
import { itemshop as items } from './itemshopdata';
import TopBar from './tops';
import Footer from './footer';

export default function Web() {
  const [cart, setCart] = useState([]);

  // ฟังก์ชันสำหรับเพิ่มสินค้าลงในตะกร้า
  const addToCart = (item) => {
    setCart((prevCart) => {
      // ตรวจสอบว่ามี item นี้อยู่ใน cart หรือไม่
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // ถ้ามีอยู่แล้ว, เพิ่ม quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // ถ้าไม่มี, เพิ่มรายการใหม่พร้อมกับ quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // ฟังก์ชันสำหรับลบสินค้าจากตะกร้า
  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        // ถ้ามีอยู่ในตะกร้า
        if (existingItem.quantity > 1) {
          // ลด quantity ลง
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          // ถ้า quantity เป็น 1, เอา item ออกจาก cart
          return prevCart.filter((cartItem) => cartItem.id !== item.id);
        }
      }
      return prevCart; // ถ้าไม่มี item ใน cart ให้คืนค่าตะกร้าเดิม
    });
  };

   // ฟังก์ชันสำหรับลบทั้งหมดในตะกร้า
   const clearCart = () => {
    setCart([]);
  };

  // FN Express Charging
  const ex_charge = () => {
    return calculateTotal() + 100;
  }

  // ฟังก์ชันสำหรับคำนวณราคาทั้งหมด
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // FN Purchase successful
  const alert_pur_suc = () =>{
    return alert('สั่งซื้อสำเร็จ ขอบคุณสำหรับการสั่งซื้อ'), setCart([]);
  }

  return (
    <>
      <TopBar />
      <div className="container mx-auto px-3 flex flex-col items-center justify-center relative mb-4">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-4 w-full">
          {items.map((item) => (
            <div key={item.id} className="product mt-4">
              {/* ปรับขนาดรูปภาพให้เท่ากัน */}
              <img
                src={`/imgs/${item.imageId}`}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className='font-bold text-lg'>{item.name}</h2>
              <p>{item.details}</p>
              <p>ราคา: {item.price} บาท</p>

              {/* ปุ่มสำหรับเพิ่มรายการอาหาร */}
              <button
                onClick={() => addToCart(item)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                เพิ่มลงตะกร้า
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* แสดงตะกร้าสินค้า */}
      <div className="fixed top-4 right-4 bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-lg font-bold">รถเข็น</h3>

        {cart.length === 0 ? (
          <p>รถเข็นว่างเปล่า</p>
        ) : (
          <>
            {/* ตรวจสอบจำนวนในตระกร้า */}
            {cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <p>
                  {item.name} x {item.quantity} - {item.price * item.quantity} บาท
                </p>
                <button
                  onClick={() => removeFromCart(item)}
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  ลบ
                </button>
              </div>
            ))}

            {/* ค่าขนส่ง */}
            <div className="flex items-center justify-between mt-4 font-semibold text-blue-600">
              <p>ค่าขนส่ง + 100 บาท</p>
            </div>

            {/* ราคารวม + ค่าขนส่ง */}
            <div className="flex items-center justify-between mt-4">
              <p className="font-bold">ราคารวม: {ex_charge()} บาท</p>

              {/* ลบตระกร้าทั้งหมด */}
              <button
                onClick={clearCart}
                className="ml-3 px-2 py-1 border border-red-500 text-red-500 rounded bg-transparent hover:bg-red-500 hover:text-white transition-colors duration-300"
              >
                ลบทั้งหมด
              </button>

              {/* ปุ่มสั่งซื้อ */}
              <button
                onClick={alert_pur_suc}
                className="ml-3 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700"
              >
                ชำระเงิน
              </button>
            </div>
          </>
        )}
      </div>
      <Footer/>
    </>
  );
}