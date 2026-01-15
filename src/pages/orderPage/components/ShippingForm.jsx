import SectionContainer from "../../../components/shared/SectionContainer";
import SectionHeader from "../../../components/shared/SectionHeader";
import FormInput from "../../../components/shared/FormInput";

const ShippingForm = ({ shippingInfo, setShippingInfo }) => {
  return (
    <SectionContainer>
      <SectionHeader title="Shipping Information" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form>
        <FormInput
          id="city"
          name="city"
          type="text"
          label="City"
          placeholder="City"
          value={shippingInfo.city}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, city: e.target.value })
          }
          />
        <FormInput
          id="street"
          name="street"
          type="text"
          label="Street"
          placeholder=" Street"
          className="md:col-span-2"
          value={shippingInfo.street}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, street: e.target.value })
          }
          />
          </form>
      </div>
    </SectionContainer>
  );
};

export default ShippingForm;
