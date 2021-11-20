const preventNan =(e:any) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const preventPasteNan = (e: any) => {
  const clipboardData = e.clipboardData;
  const pastedData = parseFloat(clipboardData.getData('text'));

  if (pastedData < 0 || isNaN(pastedData) ) {
    e.preventDefault();
  }
};

export { preventNan, preventPasteNan };