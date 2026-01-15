import axios from "axios";

export async function SendOrder(order) {
  try {
    console.log(order);
    
    console.log("SendOrder called");
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/orders/createOrder`,
      order,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    console.error(
      "SendOrder error:",
      error.response?.status,
      error.response?.data,
      error.message
    );
    return null;
  }
  return SendOrder;
}

export default SendOrder;
