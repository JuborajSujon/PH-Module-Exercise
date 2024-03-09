function useState(num) {
  function updateNub(value) {
    num = value;
  }
  return [num, updateNub];
}

const [count, setCount] = useState(0);
