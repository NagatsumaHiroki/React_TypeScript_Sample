export const Practice2 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    console.log(calcTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題：返却地の型指定</p>
      <button onClick={onClickPractice}>練習問題2実行</button>
    </div>
  );
};
