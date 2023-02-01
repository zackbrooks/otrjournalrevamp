const formatErrors = (error, string) => {
  let errArr = [];

  for (field in error) {
    errArr.push(error[field].message);
  }

  //   if (string === "mongo") {
  //     for (field in error) {
  //       errArr.push(error[field].message);
  //     }
  //   } else if (string === "joi") {
  //     console.log("we got here for Joi");
  //   }
  console.log("BBBBBBBBBBBBOOOOOOOOOOOOOOOOM", errArr);
  return errArr;
};

module.exports.formatErrors = formatErrors;
