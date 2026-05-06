
"use client"
import Link from 'next/link';
import { useState } from 'react'

import Image from 'next/image';

import { useForm } from 'react-hook-form';
const initialCart = [
    {
        id: 1,
        image: "/product-1.jpg",
        title: "Smart Watch Elite",
        category: "Electronics",
        price: 2999,
        oldPrice: 3999,
        rating: 5,
        color: "black",
    },
    {
        id: 2,
        image: "/product-2.jpg",
        title: "Pro Noise-Canceling Headphones",
        category: "Audio",
        price: 1299,
        oldPrice: 1999,
        rating: 4,
        color: "orange",
    },
    {
        id: 3,
        image: "/product-1.jpg",
        title: "Urban Sneakers X1",
        category: "Fashion",
        price: 1999,
        oldPrice: 2499,
        rating: 3,
        color: "blue",

    },
];
function page() {
    const [cart, setCart] = useState(initialCart);
    const [qty, setQty] = useState(1);
const[addShipping, setAddShipping] = useState(false);
const [addBilling, setAddBilling] = useState(false);
const [savedAddress, setSavedAddress] = useState(false);

    const {
        register: registerShipping,
        handleSubmit: handleSubmitShipping,
        formState: { errors: shippingErrors },
        reset: resetShipping,
        getValues: getValuesShipping,

    } = useForm({
        defaultValues: {
            fullName: "",
            businessName: "",
            gst: "",
            address: "",
            street: "",
            landmark: "",
            city: "",
            state: "",
            zipCode: "",
            mobile: "",
            altMobile: "",
            type: "Shipping",
        },
    });

    const {
        register: registerBilling,
        handleSubmit: handleSubmitBilling,
        formState: { errors: billingErrors },
        reset: resetBilling,
        getValues: getValuesBilling,
    } = useForm({
        defaultValues: {
            fullName: "",
            businessName: "",
            gst: "",
            address: "",
            street: "",
            landmark: "",
            city: "",
            state: "",
            zipCode: "",
            mobile: "",
            altMobile: "",
            type: "Billing",
        },
    });

    return (


        <div>
            <div className=" min-h-screen pb-16">


                <div className="bg-white border-b border-gray-100 py-4 px-4 lg:px-10">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

                        <div>
                            <p className="text-xs text-gray-500 mb-1.5 font-medium tracking-wide">
                                <Link href="/" className="hover:text-primary-blue transition">Home</Link> /
                                <span className="text-[#0f172a] font-bold ml-1">checkout</span>
                            </p>
                            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a] flex items-center gap-3">
                            Checkout
                                {/* <span className="text-sm font-medium bg-primary-red/10 text-primary-red px-3 py-1 rounded-full">
                                    {cart.length} items
                                </span> */}
                            </h1>
                        </div>

                        {/*     
          {wishlistItems.length > 0 && (
            <button className="w-full md:w-auto bg-gradient-blue-red text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition duration-300">
              Move All to Cart
            </button>
          )} */}

                    </div>
                </div>


                <div className="max-w-[1400px]  mx-auto px-4 lg:px-10 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">


                    {/*  LEFT SIDE  */}
                <div className="lg:col-span-2  flex flex-col gap-6">
<button className='p-2 bg-gradient-blue-red text-white rounded-md  font-bold ' onClick={()=>{setAddShipping(true)}}> Add new address</button>

{!addBilling && !addShipping && (
  <div className="bg-white p-6 rounded-xl text-center">
    <p className="text-gray-500">No Address Found</p>
  </div>
)}

  {/*  SHIPPING ADDRESS */}
 {
    addShipping && (
         <div className="bg-[#f8fafc] p-6 rounded-2xl shadow-sm">

    <h2 className="text-xl font-bold mb-4">
      Shipping Address
    </h2>

    <form
      onSubmit={handleSubmitShipping((data) =>
        console.log("Shipping", data)
      )}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >

      <input
        {...registerShipping("fullName", { required: true })}
        placeholder="Full Name"
        className="input"
      />
      
      <input
        {...registerShipping("buisnesName", { required: true })}
        placeholder="Buisness Name"
        className="input"
      />
 <input
        {...registerShipping("gst", { required: true })}
        placeholder="gst"
        className="input"
      />
      <input
        {...registerShipping("mobile", { required: true })}
        placeholder="Mobile Number"
        className="input"
      />

      <input
        {...registerShipping("address")}
        placeholder="Address"
        className="input md:col-span-2"
      />
<input {...registerShipping("street")}
        placeholder="Street"
        className="input"
      />
      <input
        {...registerShipping("city")}
        placeholder="City"
        className="input"
      />

          <input
        {...registerShipping("landmark")}
        placeholder="Landmark"
        className="input"
      />


      <input
        {...registerShipping("state")}
        placeholder="State"
        className="input"
      />

      <input
        {...registerShipping("zipCode")}
        placeholder="Zip Code"
        className="input"
      />
<input {...registerShipping("altMobile")}
        placeholder="Alternate Mobile Number"
        className="input"
      />
       <button className="bg-gradient-blue-red text-white py-2 rounded-xl font-semibold md:col-span-2">
    Save Address
  </button>

  
    </form>
     <div className="flex items-center mt-2 gap-2">
    <input
      type="checkbox"
      onChange={(e) => {
        if (e.target.checked) {
          const values = getValuesShipping();
          resetBilling(values);
        }
      }}
      onClick={()=>setAddBilling(true)}
    />
    <span className="text-sm text-gray-600">
      Billing same as shipping
    </span>
  </div>
  </div>
    )
 }

  {/*  SAME AS SHIPPING */}
 

  {/*  BILLING ADDRESS */}
{
    addBilling && (
          <div className="bg-[#f8fafc] p-6 rounded-2xl shadow-sm">

    <h2 className="text-xl font-bold mb-4">
      Billing Address
    </h2>

    <form
      onSubmit={handleSubmitBilling((data) =>
        console.log("Billing", data)
      )}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >

      <input
        {...registerBilling("fullName")}
        placeholder="Full Name"
        className="input"
      />
      
   <input
        {...registerBilling("buisnessName")}
        placeholder="Buisness Name"
        className="input"
      />
      <input
        {...registerBilling("gst")}
        placeholder="GST"
        className="input"
      />

      <input
        {...registerBilling("mobile")}
        placeholder="Mobile Number"
        className="input"
      />

      <input
        {...registerBilling("address")}
        placeholder="Address"
        className="input md:col-span-2"
      />
<input {...registerBilling("street")}
        placeholder="Street"
        className="input"
        />

      <input
        {...registerBilling("city")}
        placeholder="City"
        className="input"
      />

      <input
        {...registerBilling("state")}
        placeholder="State"
        className="input"
      />

      <input
        {...registerBilling("zipCode")}
        placeholder="Zip Code"
        className="input"
      />
<input {...registerBilling("altMobile")}
        placeholder="Alternate Mobile Number"
        className="input"
      />
 <button className="bg-gradient-blue-red text-white py-2 rounded-xl font-semibold">
    Save Address
  </button>

    </form>
  </div>
    )
}

  {/*  CONTINUE BUTTON */}
 
{savedAddress && (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold mb-4">Payment</h2>

    <label className="flex gap-3 border p-3 rounded-xl cursor-pointer">
      <input type="radio" name="payment" />
      Cash on Delivery
    </label>

    <label className="flex gap-3 border p-3 rounded-xl mt-2 cursor-pointer">
      <input type="radio" name="payment" />
      UPI
    </label>
  </div>
)}


</div>
                    {/* RIGHT SIDE */}
                    <div className=" p-4   h-fit sticky top-24">

                        <h2 className="text-xl font-bold mb-4">
                            Order Summary
                        </h2>


                        {(() => {
                            const subtotal = cart.reduce(
                                (acc, item) => acc + item.price * (item.qty || 1),
                                0
                            );
                            const oldPriceTotal = cart.reduce(
                                (acc, item) => acc + item.oldPrice * (item.qty || 1),
                                0
                            );

                            const shipping = 50;
                            const total = subtotal + shipping;
                            const discount = oldPriceTotal - subtotal;
                            return (
                                <>
                                    <div className="flex justify-between text-gray-600 mb-2">
                                        <span>Old Price</span>
                                        <span>₹{oldPriceTotal}</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600 mb-2">
                                        <span>Cart Total</span>
                                        <span>₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 mb-2">
                                        <span>Discount</span>
                                        <span>₹{discount}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 mb-2">
                                        <span>Shipping</span>
                                        <span>₹{shipping}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 mb-2">
                                        <span>Coupon Discount</span>
                                        <span>₹0.0</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 mb-2">
                                        <span>GST</span>
                                        <span>₹899</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 mb-2">
                                        <span>Shipping charges</span>
                                        <span>₹{shipping}</span>
                                    </div>
                                    <div className="border-t my-3"></div>

                                    <div className="flex justify-between font-bold text-lg">
                                        <span className='text-primary-red'>Total</span>
                                        <span className='text-primary-red'>₹{total}</span>
                                    </div>

                                    {/* <button className="w-full mt-6 bg-gradient-blue-red  text-white py-2 rounded-xl font-bold">
                                        <Link href="/delivery">Checkout</Link>

                                    </button> */}
                                </>
                            );
                        })()}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default page
