import SectionContainer from '../../../components/shared/SectionContainer';
import SectionHeader from '../../../components/shared/SectionHeader';
import FormInput from '../../../components/shared/FormInput';

const PaymentForm = () => {
  return (
    <SectionContainer>
      <SectionHeader title="Payment Information" />
      
      <div className="space-y-4">
        <FormInput
          id="cardNumber"
          name="cardNumber"
          type="text"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
        />
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            id="expiryDate"
            name="expiryDate"
            type="text"
            label="Expiry Date"
            placeholder="MM/YY"
          />
          <FormInput
            id="cvv"
            name="cvv"
            type="text"
            label="CVV"
            placeholder="123"
          />
        </div>
        <FormInput
          id="cardholderName"
          name="cardholderName"
          type="text"
          label="Cardholder Name"
          placeholder="John Doe"
        />
      </div>
    </SectionContainer>
  );
};

export default PaymentForm;

