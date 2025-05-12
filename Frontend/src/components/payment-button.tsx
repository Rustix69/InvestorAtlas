import { useState, useRef, useCallback } from 'react';
import { useRazorpay, RazorpayOrderOptions } from 'react-razorpay';
import { Button } from "@/components/ui/button";
import { PiggyBank } from "lucide-react";
import RazorpayErrorGuide from "./ui/razorpay-error-guide";

interface PaymentButtonProps {
  amount?: number;
  className?: string;
}

// API base URL - can be moved to an environment variable
const API_BASE_URL = "http://localhost:3001/api/razorpay";

const PaymentButton = ({ amount = 5000, className }: PaymentButtonProps) => {
  const { error, isLoading: isRazorpayLoading, Razorpay } = useRazorpay();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showErrorGuide, setShowErrorGuide] = useState(false);
  
  // Use a ref to track if component is mounted to prevent state updates after unmount
  const isMounted = useRef(true);
  
  // Cleanup on unmount
  useState(() => {
    return () => {
      isMounted.current = false;
    };
  });

  // Use environment variable or fallback to test key
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID ;

  const handlePayment = async () => {
    setErrorMessage(null);
    setShowErrorGuide(false);
    
    if (error) {
      setErrorMessage("Payment gateway is currently unavailable. Please try again later.");
      return;
    }

    if (isRazorpayLoading || !Razorpay) {
      setErrorMessage("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to create order");
      }

      if (!data.success || !data.order || !data.order.id) {
        throw new Error("Invalid order response from server");
      }
      
      const order = data.order;
      
      const options: RazorpayOrderOptions = {
        key: RAZORPAY_KEY_ID,
        amount: Number(order.amount),
        currency: order.currency,
        name: "Investor Atlas",
        description: "Access to premium investor database",
        order_id: order.id,
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: JSON.stringify({ address: "Investor Atlas Headquarters" }),
        theme: {
          color: "#5e0e9e",
        },
        handler: (response) => {
          try {
            const paymentInfo = {
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              amount: Number(order.amount) / 100,
              currency: order.currency
            };
            
            if (isMounted.current) {
              setIsLoading(false);
            }
            
            fetch(`${API_BASE_URL}/verify-payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            }).then(async res => {
              const verificationData = await res.json();
              
              if (res.ok) {
                console.table({
                  "Order ID": response.razorpay_order_id,
                  "Payment ID": response.razorpay_payment_id,
                  "Status": "Verified",
                  "Amount": order.amount / 100,
                  "Currency": order.currency,
                  "Timestamp": new Date().toISOString()
                });
              } 
              
              if (isMounted.current) {
                setIsLoading(false);
              }
            }).catch(err => {
              if (isMounted.current) {
                setIsLoading(false);
              }
            });
          } catch (err: any) {
            if (isMounted.current) {
              setIsLoading(false);
            }
          }
        },
      };
      
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (err: any) {
      if (isMounted.current) {
        setErrorMessage(err.message || "Error creating payment. Please try again later.");
        setIsLoading(false);
        setShowErrorGuide(true);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <Button
        variant="outline"
        className={`flex items-center gap-2 
          bg-transparent
          text-white 
          font-medium
          px-6 py-6 
          hover:bg-white/10
          border-[1px] border-[#8e1cb3]/50
          shadow-md
          rounded-xl ${className}`}
        onClick={handlePayment}
        disabled={isLoading || isRazorpayLoading}
      >
        <PiggyBank size={18} />
        {isLoading ? "Processing..." : "Pay Now"}
      </Button>
      
      {errorMessage && !showErrorGuide && (
        <div className="text-red-500 text-sm mt-2 flex items-center justify-between">
          <span>{errorMessage}</span>
          <button 
            onClick={() => setShowErrorGuide(true)}
            className="text-purple-400 text-xs underline ml-2"
          >
            Need help?
          </button>
        </div>
      )}

      {showErrorGuide && errorMessage && (
        <RazorpayErrorGuide 
          errorMessage={errorMessage} 
          onClose={() => setShowErrorGuide(false)} 
        />
      )}
    </div>
  );
};

export default PaymentButton; 