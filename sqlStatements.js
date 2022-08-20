module.exports = {
  select: (...columns) => {
    return `SELECT ${columns.toString()} from TRIBBLE`;
  },
  dateFilter: "CURRENT_DATE = transactiondate",
  insertVal: (user, val, date) =>
    `INSERT INTO TRIBBLE(username, value) VALUES ('${user}', ${val} )`,
};
