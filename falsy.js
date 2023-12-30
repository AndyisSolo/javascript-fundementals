const isTruthy = (name,exp ) => {
    console.log(`${name}: ${Boolean(exp)}`);
}

isTruthy("val1", 0);
isTruthy("val2", 1);
isTruthy("val3", -1);
isTruthy("val4", NaN);
isTruthy("val5", 0n);



isTruthy("val6", undefined);
isTruthy("val7", null);
isTruthy("val8", false);


isTruthy("val9", "");
isTruthy("val10", "Hi");
isTruthy("val11", "false");


isTruthy("val12", {});


let var1;
isTruthy("val13" , var1)
