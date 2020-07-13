// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((res, rej) => {
    console.log('Waiting 2 seconds');
    setTimeout(() => res(num * 2), 2000);
  });
  
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  const a = await doublesLater(num);
  const b = await doublesLater(a);
  const c = await doublesLater(b);

  return a + b + c;
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
