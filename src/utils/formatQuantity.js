const formatQuantity=(input)=> {
    const formatted = input.replace(/([0-9.]+)([a-zA-Z]+)/, '$1 $2');
    return formatted;
  }

  export default formatQuantity;