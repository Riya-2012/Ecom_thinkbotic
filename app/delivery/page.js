
"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { FaRegCreditCard, FaMoneyBillAlt, FaUniversity, FaMobileAlt, FaLock, FaEdit, FaMapMarkerAlt, FaPlus, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

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
        qty: 1
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
        qty: 1
    },
];

const PaymentTab = ({ id, icon, label, selected, onSelect }) => (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl transition-all font-medium ${
        selected === id 
          ? 'bg-blue-50/50 text-primary-blue border border-blue-200 shadow-sm' 
          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
      }`}
    >
      <span className={`text-xl ${selected === id ? 'text-primary-blue' : 'text-gray-400'}`}>{icon}</span>
      {label}
    </button>
  );

const CardPaymentForm = () => (
    <div className="space-y-5 transition-opacity duration-500 opacity-100">
      <div className="w-full max-w-[340px] mx-auto bg-gradient-to-tr from-gray-900 to-gray-700 rounded-2xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
         <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
         
         <div className="flex justify-between items-center mb-8 relative z-10">
            <FaRegCreditCard className="text-3xl text-gray-300" />
            <div className="flex gap-1">
               <div className="w-8 h-5 bg-red-500/80 rounded-full mix-blend-screen"></div>
               <div className="w-8 h-5 bg-orange-400/80 rounded-full -ml-4 mix-blend-screen"></div>
            </div>
         </div>
         <div className="font-mono text-xl tracking-widest mb-6 opacity-90 drop-shadow-sm relative z-10">
           **** **** **** 4242
         </div>
         <div className="flex justify-between text-xs opacity-80 font-medium uppercase tracking-wider relative z-10">
            <div>
                <div className="opacity-70 text-[10px] mb-1">Card Holder</div>
                <div>John Doe</div>
            </div>
            <div className="text-right">
                <div className="opacity-70 text-[10px] mb-1">Expires</div>
                <div>12/28</div>
            </div>
         </div>
      </div>
  
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Card Number</label>
          <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Expiry Date</label>
            <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">CVV</label>
            <input type="password" placeholder="123" maxLength="4" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Name on Card</label>
          <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
        </div>
      </div>
    </div>
  );

const UPIPaymentForm = () => (
    <div className="space-y-6 transition-opacity duration-500 opacity-100">
       <div className="text-center p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <div className="w-32 h-32 bg-white border border-gray-200 rounded-xl mx-auto mb-4 flex items-center justify-center p-2 shadow-sm">
             <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-xs text-center border border-dashed border-gray-300">QR CODE</div>
          </div>
          <p className="text-sm text-gray-500 font-medium mb-4">Scan QR code using any UPI app</p>
          <div className="flex justify-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center font-bold text-blue-600 text-xs">GPay</div>
            <div className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center font-bold text-purple-600 text-xs">PhPe</div>
            <div className="w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center font-bold text-blue-400 text-xs">Ptym</div>
          </div>
       </div>
       <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-semibold uppercase tracking-widest">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
       </div>
       <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Enter UPI ID</label>
          <div className="flex gap-2">
             <input type="text" placeholder="username@upi" className="flex-grow px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
             <button type="button" className="px-6 bg-gray-900 hover:bg-black text-white rounded-xl font-medium transition shadow-md">Verify</button>
          </div>
       </div>
    </div>
  );

const CODForm = () => (
    <div className="text-center p-8 bg-orange-50/50 rounded-2xl border border-orange-100 transition-opacity duration-500 opacity-100 flex flex-col items-center justify-center h-full min-h-[300px]">
       <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-5 shadow-inner">
           <FaMoneyBillAlt className="text-4xl" />
       </div>
       <h3 className="text-lg font-bold text-gray-800 mb-2">Cash on Delivery</h3>
       <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">Pay with cash or UPI directly to the delivery executive when your order arrives.</p>
    </div>
  );

  const NetBankingForm = () => (
    <div className="space-y-6 transition-opacity duration-500 opacity-100">
       <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Popular Banks</label>
          <div className="grid grid-cols-3 gap-3 mb-6">
             {['HDFC', 'SBI', 'ICICI', 'Axis', 'Kotak', 'PNB'].map((bank) => (
                <button key={bank} type="button" className="py-3 px-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-primary-blue hover:text-primary-blue hover:bg-blue-50/30 transition">
                   {bank}
                </button>
             ))}
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Other Banks</label>
          <select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition appearance-none">
              <option value="">Select your bank</option>
              <option value="1">Bank of Baroda</option>
              <option value="2">Canara Bank</option>
              <option value="3">Union Bank</option>
          </select>
       </div>
    </div>
  );

export default function CheckoutPage() {
    const [cart] = useState(initialCart);
    const [step, setStep] = useState(1);
    
    // Address State
    const [addresses, setAddresses] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

    const [selectedPayment, setSelectedPayment] = useState('card');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: "",
            businessName: "",
            gst: "",
            mobile: "",
            altMobile: "",
            address: "",
            street: "",
            landmark: "",
            city: "",
            state: "",
            zipCode: "",
            // Billing
            b_fullName: "",
            b_businessName: "",
            b_gst: "",
            b_mobile: "",
            b_altMobile: "",
            b_address: "",
            b_street: "",
            b_landmark: "",
            b_city: "",
            b_state: "",
            b_zipCode: "",
        }
    });

    const onSubmitAddress = (data) => {
        const newAddress = {
            id: Date.now(),
            shipping: {
                fullName: data.fullName,
                address: data.address,
                street: data.street,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                mobile: data.mobile,
            },
            billing: billingSameAsShipping ? null : {
                fullName: data.b_fullName,
                address: data.b_address,
                street: data.b_street,
                city: data.b_city,
                state: data.b_state,
                zipCode: data.b_zipCode,
                mobile: data.b_mobile,
            }
        };

        setAddresses([...addresses, newAddress]);
        setSelectedAddressId(newAddress.id);
        setIsAddingAddress(false);
        reset(); // Clear form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);
    const oldPriceTotal = cart.reduce((acc, item) => acc + item.oldPrice * (item.qty || 1), 0);
    const discount = oldPriceTotal - subtotal;
    const shipping = 0; // Free shipping
    const gst = 899;
    const total = subtotal + shipping + gst;

    return (
        <div className="bg-[#f8fafc] min-h-screen pb-20">
            {/* Minimalist Header */}
            {/* <div className="bg-white border-b border-gray-100 py-5 px-4 lg:px-10 sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-black bg-gradient-blue-red bg-clip-text text-transparent tracking-tighter">
                            Thinkbotic.
                        </span>
                    </Link>
                    <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                        <FaLock className="text-gray-400" />
                        <span>Secure Checkout</span>
                    </div>
                </div>
            </div> */}

            <div className="max-w-[1200px] mx-auto px-4 lg:px-0 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT SIDE: STEPS */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                    
                    {/* STEP 1: ADDRESS */}
                    <div className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${step === 1 ? 'border-primary-blue/30 shadow-md ring-4 ring-primary-blue/5' : 'border-gray-100 opacity-90'}`}>
                        <div className="p-5 sm:p-6 flex justify-between items-center border-b border-gray-50">
                            <div className="flex items-center gap-4">
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step >= 1 ? 'bg-primary-blue text-white shadow-md shadow-primary-blue/20' : 'bg-gray-100 text-gray-400'}`}>1</span>
                                <h2 className="text-xl font-bold text-gray-800">Delivery & Billing Address</h2>
                            </div>
                            {step > 1 && (
                                <button onClick={() => setStep(1)} className="text-primary-blue text-sm font-semibold flex items-center gap-1.5 hover:text-blue-700 transition">
                                    <FaEdit /> Change
                                </button>
                            )}
                        </div>
                        
                        {/* Content for Step 1 */}
                        {step === 1 && (
                            <div className="p-5 sm:p-8 transition-opacity duration-500 opacity-100 bg-gray-50/30">
                                
                                {/* 1A: NO ADDRESSES YET */}
                                {addresses.length === 0 && !isAddingAddress && (
                                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                            <FaMapMarkerAlt className="text-2xl" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">No Address Available</h3>
                                        <p className="text-gray-500 text-sm mb-6">Please add a shipping address to proceed with your order.</p>
                                        <button 
                                            onClick={() => setIsAddingAddress(true)} 
                                            className="px-6 py-3 bg-gradient-blue-red text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto transform hover:-translate-y-0.5">
                                            <FaPlus /> Add New Address
                                        </button>
                                    </div>
                                )}

                                {/* 1B: SHOW LIST OF ADDRESSES */}
                                {addresses.length > 0 && !isAddingAddress && (
                                    <div className="space-y-5 animate-in fade-in duration-300">
                                        <h3 className="font-semibold text-gray-800 text-lg">Select Delivery Address</h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {addresses.map(addr => (
                                                <label key={addr.id} className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all ${selectedAddressId === addr.id ? 'border-primary-blue bg-blue-50/40 ring-1 ring-primary-blue shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                                                    <input 
                                                        type="radio" 
                                                        name="selectedAddress" 
                                                        checked={selectedAddressId === addr.id}
                                                        onChange={() => setSelectedAddressId(addr.id)}
                                                        className="mt-1 w-4 h-4 text-primary-blue border-gray-300 focus:ring-primary-blue"
                                                    />
                                                    <div className="flex-grow">
                                                        <div className="flex items-center gap-2 mb-1.5">
                                                            <p className="font-bold text-gray-800 text-base">{addr.shipping.fullName}</p>
                                                            {selectedAddressId === addr.id && <FaCheckCircle className="text-primary-blue text-sm" />}
                                                        </div>
                                                        <p className="text-gray-600 text-sm">{addr.shipping.address}, {addr.shipping.street}</p>
                                                        <p className="text-gray-600 text-sm">{addr.shipping.city}, {addr.shipping.state} - <span className="font-semibold">{addr.shipping.zipCode}</span></p>
                                                        <p className="text-gray-600 text-sm mt-1.5 font-medium">Mobile: <span className="text-gray-800">{addr.shipping.mobile}</span></p>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                        
                                        <button onClick={() => setIsAddingAddress(true)} className="mt-4 text-primary-blue font-semibold text-sm flex items-center gap-1.5 hover:underline">
                                            <FaPlus className="text-xs" /> Add another address
                                        </button>

                                        <div className="pt-6 border-t border-gray-200 mt-6 flex justify-end">
                                            <button 
                                                disabled={!selectedAddressId}
                                                onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                                                className="px-8 py-3.5 bg-gradient-blue-red text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                                                Continue to Payment
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* 1C: ADD ADDRESS FORM */}
                                {isAddingAddress && (
                                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm animate-in fade-in duration-300">
                                        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                                            <h3 className="text-lg font-bold text-gray-800">Add New Address</h3>
                                            {addresses.length > 0 && (
                                                <button type="button" onClick={() => setIsAddingAddress(false)} className="text-gray-500 text-sm font-medium hover:text-gray-800 transition">Cancel</button>
                                            )}
                                        </div>
                                        
                                        <form onSubmit={handleSubmit(onSubmitAddress)} className="space-y-8">
                                            {/* Shipping Section */}
                                            <div>
                                                <h4 className="text-sm font-bold text-primary-blue uppercase tracking-wider mb-4 flex items-center gap-2">
                                                    <FaMapMarkerAlt /> Shipping Address
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">Full Name *</label>
                                                        <input {...register("fullName", { required: true })} placeholder="John Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">Mobile Number *</label>
                                                        <input {...register("mobile", { required: true })} placeholder="10-digit number" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                    </div>
                                                    <div className="md:col-span-2">
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">Complete Address *</label>
                                                        <input {...register("address", { required: true })} placeholder="House/Flat No., Building Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">Street / Area</label>
                                                        <input {...register("street")} placeholder="Street / Area Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">City *</label>
                                                        <input {...register("city", { required: true })} placeholder="City" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">State *</label>
                                                        <input {...register("state", { required: true })} placeholder="State" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">PIN Code *</label>
                                                        <input {...register("zipCode", { required: true })} placeholder="000000" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Billing Same Checkbox */}
                                            <div className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                                <input 
                                                    type="checkbox" 
                                                    id="sameAsShipping"
                                                    checked={billingSameAsShipping}
                                                    onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                                                    className="w-5 h-5 text-primary-blue rounded border-gray-300 focus:ring-primary-blue transition"
                                                />
                                                <label htmlFor="sameAsShipping" className="text-gray-700 font-medium cursor-pointer select-none">
                                                    Billing address is the same as shipping address
                                                </label>
                                            </div>

                                            {/* Billing Section (Conditional) */}
                                            {!billingSameAsShipping && (
                                                <div className="pt-6 border-t border-gray-100 transition-all duration-500 opacity-100">
                                                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                        <FaMapMarkerAlt className="text-gray-400" /> Billing Address
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-500 mb-1">Full Name *</label>
                                                            <input {...register("b_fullName", { required: !billingSameAsShipping })} placeholder="John Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-500 mb-1">Mobile Number *</label>
                                                            <input {...register("b_mobile", { required: !billingSameAsShipping })} placeholder="10-digit number" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                        </div>
                                                        <div className="md:col-span-2">
                                                            <label className="block text-xs font-medium text-gray-500 mb-1">Complete Address *</label>
                                                            <input {...register("b_address", { required: !billingSameAsShipping })} placeholder="House/Flat No., Building Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-500 mb-1">Street / Area</label>
                                                            <input {...register("b_street")} placeholder="Street / Area Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-500 mb-1">City *</label>
                                                            <input {...register("b_city", { required: !billingSameAsShipping })} placeholder="City" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-500 mb-1">State *</label>
                                                            <input {...register("b_state", { required: !billingSameAsShipping })} placeholder="State" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-500 mb-1">PIN Code *</label>
                                                            <input {...register("b_zipCode", { required: !billingSameAsShipping })} placeholder="000000" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                                                <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-gradient-blue-red text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                                    Save Address
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Address Summary (Inactive state when step > 1) */}
                        {step > 1 && selectedAddressId && (
                            <div className="px-5 sm:px-8 py-5 bg-gray-50/50 rounded-b-2xl transition-opacity duration-300 opacity-100">
                                {(() => {
                                    const addr = addresses.find(a => a.id === selectedAddressId);
                                    if (!addr) return null;
                                    return (
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="flex-1">
                                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaMapMarkerAlt /> Shipping To</h4>
                                                <p className="font-bold text-gray-800 text-base">{addr.shipping.fullName}</p>
                                                <p className="text-gray-600 text-sm mt-1">{addr.shipping.address}, {addr.shipping.street}</p>
                                                <p className="text-gray-600 text-sm">{addr.shipping.city}, {addr.shipping.state} - <span className="font-semibold">{addr.shipping.zipCode}</span></p>
                                                <p className="text-gray-600 text-sm mt-1 font-medium">Mobile: <span className="text-gray-800">{addr.shipping.mobile}</span></p>
                                            </div>
                                            {addr.billing && (
                                                <div className="flex-1 md:border-l md:border-gray-200 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 border-gray-200">
                                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><FaMapMarkerAlt /> Billing To</h4>
                                                    <p className="font-bold text-gray-800 text-base">{addr.billing.fullName}</p>
                                                    <p className="text-gray-600 text-sm mt-1">{addr.billing.address}, {addr.billing.street}</p>
                                                    <p className="text-gray-600 text-sm">{addr.billing.city}, {addr.billing.state} - <span className="font-semibold">{addr.billing.zipCode}</span></p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })()}
                            </div>
                        )}
                    </div>

                    {/* STEP 2: PAYMENT */}
                    {/* <div className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${step === 2 ? 'border-primary-blue/30 shadow-md ring-4 ring-primary-blue/5' : 'border-gray-100 opacity-70 pointer-events-none'}`}>
                        <div className="p-5 sm:p-6 flex justify-between items-center border-b border-gray-50">
                            <div className="flex items-center gap-4">
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step === 2 ? 'bg-primary-blue text-white shadow-md shadow-primary-blue/20' : 'bg-gray-100 text-gray-400'}`}>2</span>
                                <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
                            </div>
                        </div>

                        {step === 2 && (
                            <div className="p-5 sm:p-8 transition-opacity duration-500 opacity-100">
                                <div className="flex flex-col md:flex-row gap-8">
                                   
                                    <div className="md:w-[220px] flex-shrink-0 flex flex-col gap-2">
                                        <PaymentTab id="card" icon={<FaRegCreditCard />} label="Credit / Debit Card" selected={selectedPayment} onSelect={setSelectedPayment} />
                                        <PaymentTab id="upi" icon={<FaMobileAlt />} label="UPI" selected={selectedPayment} onSelect={setSelectedPayment} />
                                        <PaymentTab id="netbanking" icon={<FaUniversity />} label="Net Banking" selected={selectedPayment} onSelect={setSelectedPayment} />
                                        <PaymentTab id="cod" icon={<FaMoneyBillAlt />} label="Cash on Delivery" selected={selectedPayment} onSelect={setSelectedPayment} />
                                    </div>
                                    
                                   
                                    <div className="flex-grow md:border-l border-gray-100 md:pl-8 min-h-[300px]">
                                        {selectedPayment === 'card' && <CardPaymentForm />}
                                        {selectedPayment === 'upi' && <UPIPaymentForm />}
                                        {selectedPayment === 'netbanking' && <NetBankingForm />}
                                        {selectedPayment === 'cod' && <CODForm />}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div> */}
                </div>

                {/* RIGHT SIDE: ORDER SUMMARY */}
                {/* <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28">
                        <h2 className="text-lg font-bold text-gray-800 mb-5 pb-4 border-b border-gray-100 flex justify-between items-center">
                            Order Summary
                            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{cart.length} Items</span>
                        </h2>
                        
                        
                        <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            {cart.map(item => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden flex-shrink-0">
                                      
                                        <div className="w-full h-full bg-gray-200"></div>
                                       
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center">
                                        <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug mb-1">{item.title}</h4>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Qty: {item.qty}</span>
                                            <span className="font-bold text-gray-900">₹{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                 
                        <div className="space-y-3.5 text-sm text-gray-600 border-t border-gray-100 pt-5">
                            <div className="flex justify-between items-center">
                                <span>Subtotal</span>
                                <span className="font-medium text-gray-800">₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Discount</span>
                                <span className="font-medium text-green-600">-₹{discount}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Taxes (GST)</span>
                                <span className="font-medium text-gray-800">₹{gst}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Delivery Charges</span>
                                <span className="font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs">FREE</span>
                            </div>
                            
                            <div className="border-t border-dashed border-gray-200 my-4"></div>
                            
                            <div className="flex justify-between items-center text-lg font-black">
                                <span className="text-gray-900">Total Amount</span>
                                <span className="text-primary-red text-xl">₹{total}</span>
                            </div>
                            <div className="text-right text-xs text-green-600 font-medium">
                                You will save ₹{discount} on this order
                            </div>
                        </div>

                        {step === 2 && (
                            <button className="w-full mt-8 bg-gradient-blue-red text-white py-4 rounded-xl font-bold shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2.5 text-lg">
                                <FaLock className="text-sm opacity-80" /> 
                                Pay ₹{total}
                            </button>
                        )}
                        
                        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xs text-gray-400 font-medium bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-1.5 text-gray-500">
                                <MdOutlineSecurity className="text-lg text-green-500" />
                                <span>Safe and Secure Payments</span>
                            </div>
                            <p>100% Authentic products.</p>
                        </div>
                    </div>
                </div> */}

                  <div className=" p-2 rounded-2xl   h-fit sticky top-24">

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
const discount=oldPriceTotal-subtotal;
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

          <button className="w-full mt-6 bg-gradient-blue-red  text-white py-2 rounded-xl font-bold">
            <Link href="/delivery">Place Order</Link>

          </button>
        </>
      );
    })()}

  </div>
            </div>
        </div>
    );
}
