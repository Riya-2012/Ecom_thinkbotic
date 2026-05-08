"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPlus } from 'react-icons/fa';

function Address() {
 
        
        // Address State
        const [addresses, setAddresses] = useState([]);
        const [selectedAddressId, setSelectedAddressId] = useState(null);
        const [isAddingAddress, setIsAddingAddress] = useState(false);
        const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
    
             const [step, setStep] = useState(1);
    
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
    return (
        
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


            </div>
    
    )
}

export default Address
