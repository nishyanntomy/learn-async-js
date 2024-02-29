const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  // const alice1 = document.querySelector("#alice1");
  // const alice2 = document.querySelector("#alice2");
  // const alice3 = document.querySelector("#alice3");

  // alice1
  //   .animate(aliceTumbling, aliceTiming)
  //   .finished
  //   .then((res) => {
  //       console.log(res);
  //       alice2
  //           .animate(aliceTumbling, aliceTiming)
  //           .finished
  //           .then((res) => {
  //               console.log(res);
  //               alice3.animate(aliceTumbling, aliceTiming);
  //           })
  //   });

  // // Promise chain  
  // // alice1.animate(aliceTumbling, aliceTiming).finished  
  // //   .then(() => {
  // //       return alice2
  // //               .animate(aliceTumbling, aliceTiming)
  // //               .finished;     
  // //   })
  // //   .then(() => {
  // //     return alice3
  // //             .animate(aliceTumbling, aliceTiming)
  // //             .finished;
  // //   })
  // //   .catch((err) => alert(`Error when promising ... ${err.message}`));

  const animateObject = async (element) => {
    const animation = element.animate(aliceTumbling, aliceTiming);
    await animation.finished;
    console.log(animation.finished);
  };
  
  const animateAll = async () => {
    try {
      await animateObject(document.querySelector("#alice1"));
      await animateObject(document.querySelector("#alice2"));
      await animateObject(document.querySelector("#alice3"));
    } catch (err) {
      alert(`Error when animating: ${err.message}`);
    }
  };
  
  animateAll();