import { Component } from 'react';
import { fetchBreeds } from './api';
import Select from 'react-select';
import { ErrorMessage } from './ErrorMessage';
import { ErrorMessages } from 'components/constants';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    error: null,
    isLoading: false,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoadingDog: true });

      const breeds = await fetchBreeds();
      this.setState({ breeds });
    } catch {
      this.setState({ error: ErrorMessages.fetchBreeds });
    } finally {
      this.setState({ isLoadingDog: false });
    }
  }
  buildOptions = () => {
    return this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };
  render() {
    const { error, isLoading } = this.state;
    const { onSelect } = this.props;
    const options = this.buildOptions();
    return (
      <div>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={option => onSelect(option.value)}
        />
        {error && <div>{ErrorMessage}</div>}
      </div>
    );
  }
}
