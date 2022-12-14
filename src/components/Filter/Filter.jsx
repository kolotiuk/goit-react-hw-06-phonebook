import { FormInput } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

const Filter = ({ handleChange, filter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <FormInput type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
