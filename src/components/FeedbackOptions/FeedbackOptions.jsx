import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map(option => (
      <ButtonItem key={option}>
        <Button
          type="button"
          value={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      </ButtonItem>
    ))}
  </ButtonList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
