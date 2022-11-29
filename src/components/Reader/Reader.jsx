import { Component } from 'react';
import { Controls } from './Controls';
import { Progres } from './Progres';
import { Publication } from './Publicatin';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState({ index: this.state.index + value });
  };

  componentDidMount() {
    if (localStorage.getItem(LS_KEY)) {
      this.setState({ index: Number(localStorage.getItem(LS_KEY)) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currenItem = items[index];
    return (
      <div>
        <Controls
          currenItem={index + 1}
          totalItems={totalItems}
          onchange={this.changeIndex}
        />
        <Progres currenPage={this.state.index} totalPage={totalItems} />
        <Publication item={currenItem} />
      </div>
    );
  }
}
