import SectionContainer from '../../../components/shared/SectionContainer';
import SectionHeader from '../../../components/shared/SectionHeader';
import FormInput from '../../../components/shared/FormInput';

const ShippingForm = () => {
  return (
    <SectionContainer>
      <SectionHeader title="Shipping Information" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="firstName"
          name="firstName"
          type="text"
          label="First Name"
          placeholder="John"
        />
        <FormInput
          id="lastName"
          name="lastName"
          type="text"
          label="Last Name"
          placeholder="Doe"
        />
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="john.doe@example.com"
          className="md:col-span-2"
        />
        <FormInput
          id="address"
          name="address"
          type="text"
          label="Address"
          placeholder="123 Main Street"
          className="md:col-span-2"
        />
        <FormInput
          id="city"
          name="city"
          type="text"
          label="City"
          placeholder="New York"
        />
        <FormInput
          id="zipCode"
          name="zipCode"
          type="text"
          label="ZIP Code"
          placeholder="10001"
        />
        <FormInput
          id="country"
          name="country"
          type="text"
          label="Country"
          placeholder="United States"
          className="md:col-span-2"
        />
      </div>
    </SectionContainer>
  );
};

export default ShippingForm;

