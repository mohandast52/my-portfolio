import React, { useEffect, useState } from 'react';
import { maxDate, customReduce, fetchBitconPrice } from './helpers';
import {
  Container,
  Header,
  Price,
  InputRow,
  Label,
  Input,
  UpdateButton,
} from './styles';

const Valory = () => {
  /* can use useReducer hook if the state tree increases further */
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setError] = useState(null);
  const [bitcoinValue, setBitcoinValue] = useState(0);
  const [fromValue, setFrom] = useState(null);
  const [toValue, setTo] = useState(null);

  /**
   *
   * @param {Number} fromDate - date in UNIX timestamp
   * @param {Number} toDate - date in UNIX timestamp
   */
  const fetchData = async (fromDate, toDate) => {
    setLoading(true);

    /* 'from' date has to be less than 'to' date */
    if (fromDate > toDate) {
      setLoading(false);
      setError('Please enter valid dates!');
      return;
    }

    fetchBitconPrice(fromDate, toDate)
      .then(response => {
        const { prices } = response;
        const priceArray = prices.map(item => item[1]);
        const average = customReduce(priceArray, (a, b) => a + b, 0) / priceArray.length;
        setLoading(false);
        setError(null);
        setBitcoinValue(average);
      })
      .catch(() => {
        setLoading(false);
        setError('Please try again later!');
      });
  };

  /**
   * on 1st render, fetch prices for 7 days.
   * acts as componentDidMount
   */
  useEffect(() => {
    const today = new Date().setDate(new Date().getDate()) / 1000;
    const last7days = new Date().setDate(new Date().getDate() - 7) / 1000;
    fetchData(last7days, today);
  }, []);

  /**
   * on every update fetch new price
   */
  const handleUpdate = () => {
    const tempFrom = new Date(fromValue).getTime() / 1000;
    const tempTo = new Date(toValue).getTime() / 1000;
    fetchData(tempFrom, tempTo);
  };

  /**
   * @returns price to display or loading/error message
   */
  const getDisplayPrice = () => {
    if (isLoading) return <>Loading...</>;
    if (errorMessage) return <>{errorMessage}</>;
    return (
      <>
        <span>&#36;</span>
        {bitcoinValue.toLocaleString('en-US', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </>
    );
  };

  return (
    <Container>
      <Header>BITCOIN&apos;S AVERAGE PRICE</Header>
      <Price hasError={!!errorMessage}>{getDisplayPrice()}</Price>

      <InputRow>
        <Label htmlFor="from">From</Label>
        <Input
          type="date"
          id="from"
          name="date_from"
          max={maxDate}
          onChange={e => setFrom(e.target.value)}
        />
        <Label htmlFor="to">To</Label>
        <Input
          type="date"
          id="to"
          name="date_to"
          max={maxDate}
          onChange={e => setTo(e.target.value)}
        />
      </InputRow>

      <UpdateButton disabled={!fromValue || !toValue} onClick={handleUpdate}>
        Update
      </UpdateButton>
    </Container>
  );
};

export default Valory;
