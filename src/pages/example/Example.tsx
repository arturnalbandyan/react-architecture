import { FC } from 'react';
import { getExampleRequest } from '../../store/actions/example';
import { connect } from 'react-redux';
import './Example.css';

const Example: FC = (props: any) => {
  const { data, getExampleRequest } = props;

  console.log(data, 'data');

  const request = () => {
    getExampleRequest({ data: 'new' });
  };

  return (
    <div>
      <button
        onClick={() => {
          request();
        }}>
        Change Redux Store State
      </button>
      <h1>{data && data.chartName}</h1>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.example.data,
});

const mapDispatchToProps = {
  getExampleRequest,
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Example);

export default Container;
